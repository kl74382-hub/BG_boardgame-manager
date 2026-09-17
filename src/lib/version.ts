export interface VersionInfo {
  version: string;
  codename: string;
  releaseDate: string;
  channel: 'stable' | 'beta' | 'nightly';
  features: string[];
}

export const APP_VERSION = '1.1.0';
export const APP_CODENAME = 'BoardGame Manager KR';
export const APP_RELEASE_DATE = '2026-09-17';
export const APP_CHANNEL: 'stable' | 'beta' | 'nightly' = 'stable';

export const RELEASE_HISTORY: VersionInfo[] = [
  {
    version: '1.1.0',
    codename: 'v1.1 Comprehensive Suite',
    releaseDate: '2026-09-17',
    channel: 'stable',
    features: [
      '컬렉션 CSV 대량 관리 (Excel 호환 일괄 등록 및 내보내기)',
      '사용자 BG Stats 357개 게임 및 481개 플레이 데이터셋 통합 시드 탑재',
      'BGG 및 보드라이프 양방향 연동 & 플레이 로그 동기화 강화',
      '플레이어별 심층 통계 분석 및 그래프 시각화 최적화',
      '오프라인 우선(IndexedDB) 캐시 및 렌더링 성능 최적화',
    ],
  },
  {
    version: '1.0.0',
    codename: 'Initial Release',
    releaseDate: '2026-08-28',
    channel: 'stable',
    features: [
      '보드게임 대시보드 및 컬렉션 기본 뷰',
      '플레이 기록 추가/수정/삭제 모달',
      '플레이어 관리 및 게임별 승률 집계',
      '다크/라이트 모드 지원',
    ],
  },
];

export function getCurrentVersion(): VersionInfo {
  return RELEASE_HISTORY[0];
}
