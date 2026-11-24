import fs from 'node:fs';
import path from 'node:path';

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};
  const content = fs.readFileSync(filePath, 'utf8');
  const env = {};
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eqIdx = line.indexOf('=');
    if (eqIdx === -1) continue;
    const key = line.slice(0, eqIdx).trim();
    let val = line.slice(eqIdx + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    env[key] = val;
  }
  return env;
}

const rootDir = process.cwd();
const fileEnv = {
  ...loadEnvFile(path.join(rootDir, '.env')),
  ...loadEnvFile(path.join(rootDir, '.env.local')),
};

const url = (process.env.NEXT_PUBLIC_SUPABASE_URL || fileEnv.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const anonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || fileEnv.NEXT_PUBLIC_SUPABASE_ANON_KEY || '').trim();

console.log('🔍 BG Stats KR — Supabase 연동 상태 점검\n');

const urlValid =
  /^https?:\/\//i.test(url) &&
  url !== 'https://your-project.supabase.co' &&
  !url.includes('placeholder');

const keyValid =
  Boolean(anonKey) &&
  anonKey !== 'your-supabase-anon-key' &&
  !anonKey.includes('placeholder');

if (!urlValid || !keyValid) {
  console.log('❌ Supabase 환경변수가 아직 실제 값으로 설정되지 않았습니다.');
  console.log(`   - NEXT_PUBLIC_SUPABASE_URL: ${urlValid ? 'OK' : '미설정 또는 예시값'}`);
  console.log(`   - NEXT_PUBLIC_SUPABASE_ANON_KEY: ${keyValid ? 'OK' : '미설정 또는 예시값'}`);
  console.log('\n👉 .env.local 파일에 Supabase Project URL과 anon key를 입력한 뒤 다시 실행해 주세요.');
  process.exit(1);
}

const baseUrl = url.replace(/\/+$/, '');
const isLegacyJwtKey = anonKey.split('.').length === 3 && anonKey.startsWith('eyJ');
const headers = isLegacyJwtKey
  ? { apikey: anonKey, Authorization: `Bearer ${anonKey}` }
  : { apikey: anonKey };

async function checkEndpoint(name, endpoint) {
  try {
    const res = await fetch(`${baseUrl}${endpoint}`, { headers });
    if (res.ok) {
      console.log(`✅ ${name}: 정상 응답 (HTTP ${res.status})`);
      return true;
    }
    const text = await res.text();
    console.log(`⚠️  ${name}: HTTP ${res.status} — ${text.slice(0, 160)}`);
    return false;
  } catch (err) {
    console.log(`❌ ${name}: 네트워크 오류 — ${err.message}`);
    return false;
  }
}

const checks = [
  ['Supabase Auth 연결', '/auth/v1/settings'],
  ['public_profiles 뷰 (schema.sql)', '/rest/v1/public_profiles?select=id&limit=1'],
  ['public_user_games 뷰 (schema.sql)', '/rest/v1/public_user_games?select=id&limit=1'],
  ['user_plays 테이블 (schema.sql)', '/rest/v1/user_plays?select=id&limit=1'],
];

let allOk = true;
for (const [label, endpoint] of checks) {
  const ok = await checkEndpoint(label, endpoint);
  if (!ok) allOk = false;
}

console.log('');
if (allOk) {
  console.log('🎉 Supabase 연동 및 스키마 점검이 모두 완료되었습니다!');
  console.log('   이제 개발 서버를 재시작하면 "Supabase 연동됨" 상태로 동작합니다.');
  process.exit(0);
} else {
  console.log('⚠️  일부 항목이 실패했습니다.');
  console.log('   - 401/403 오류: anon key가 정확한지 확인해 주세요.');
  console.log('   - 404 / relation does not exist 오류: Supabase SQL Editor에서 supabase/schema.sql을 실행해 주세요.');
  process.exit(1);
}
