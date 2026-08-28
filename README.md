# 🎲 BG Stats KR (보드게임 관리 & 심층 통계 툴)

> **BG Stats(Board Game Stats)**를 벤치마킹하여 **BoardGameGeek(BGG)**와 **보드라이프(BoardLife)**의 데이터를 연동한 올인원 보드게임 플레이 기록 및 컬렉션 관리 웹 애플리케이션

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)
![Dexie.js](https://img.shields.io/badge/Dexie.js-IndexedDB-orange?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ 핵심 기능

### 1. 📊 대시보드 & 통계 요약 (`/`)
- 총 플레이 횟수, 총 플레이 시간, 보유 게임 수, 내 승률(%), H-Index, 최애 게임 한눈에 확인
- 2026년 10x10 챌린지 달성률 프로그레스 트래커
- 최근 플레이 세션 피드 & 즐겨찾기 컬렉션

### 2. ⚔️ 플레이 세션 기록 (`/plays`)
- **실시간 스톱워치/타이머**: 플레이 시작 및 소요 시간 자동 계산
- **스마트 게임 선택**: 한글명, 초성(`ㅌㅍㅁ`, `ㅅㄷ`, `ㅇㅋㄴㅂ`), 영문명 검색
- **다인 점수표 & 자동 순위 판정**: 점수 입력 시 1위 및 순위 자동 판정, 선플레이어 지정, 역할/세력 입력, 첫플(뉴비) 배지
- **협력 & 솔로 모드**: 협력 게임(승리/패배) 및 1인 솔로 플레이 완벽 지원

### 3. 📚 컬렉션 관리 (`/collection`)
- **다중 상태 관리**: 보유중(Owned), 위시리스트(Wishlist), 플레이해봄(Played), 방출대기(For Trade), 예약구매(Preordered)
- **스마트 다중 필터**: 인원수(1~5인+), 플레이타임, 난이도 Weight, **노플 게임 모아보기**
- **보드라이프(BoardLife) 원클릭 연동**:
  - 🌐 게임 상세정보 바로가기
  - 📖 한글 룰북 & 한글화 자료실 검색
  - 💰 실시간 중고장터 시세 및 매물 검색
  - 💡 보드게임 공략 & 팁 후기 게시판
- **슬리브 & 오거나이저 가이드**: 카드 규격(mm), 매수, 착용 여부 체크

### 4. 📈 심층 통계 & 인사이트 (`/stats`)
- **365일 활동 잔디 (GitHub Activity Heatmap)**
- **H-Index 계산기** (내 보드게임 라이프의 H-Index 산출)
- **1:1 맞대결 전적 분석 (Head-to-Head)**: 두 플레이어 간의 상대 전적 및 게임별 승패 비교
- **플레이당 비용(Cost-Per-Play / 가성비)**: 가장 뽕 뽑은 가성비 게임 TOP vs 더 돌려야 할 게임 TOP
- **선 플레이어 유리도 (First Player Advantage)**: 선플레이어 승률 통계
- **선호 메커니즘 레이더 차트**: 일꾼놓기, 덱빌딩, 타일배치 등 시스템별 플레이 빈도

### 5. 🛠️ 보드게임 스마트 유틸리티 (`/tools`)
- 👆 **시작 플레이어 멀티터치 뽑기**: 모바일 화면에 손가락을 대면 카운트다운 후 선플레이어 무작위 지목 (멤버 룰렛 모드 지원)
- 🎲 **오늘 뭐 하지?**: 인원수, 시간, 난이도 조건에 맞는 소장 게임 랜덤 추천 룰렛
- 🛡️ **슬리브 쇼핑 계산기**: 미착용 카드 슬리브 총 매수 및 구매 팩수(100매 기준) 자동 계산 & 쇼핑 리스트 복사

### 6. ⚙️ BGG & BG Stats 백업 연동 (`/settings`)
- **BGG XML API 연동**: BGG 유저명 및 토큰 연동을 통한 BGG 컬렉션 & 플레이 기록 실시간 동기화
- **BG Stats JSON 백업 100% 호환**: BG Stats 모바일 앱의 `Export to JSON` 파일 불러오기 & 내보내기 지원

---

## 🚀 시작하기

### 로컬 실행

```bash
# 1. 의존성 설치
npm install

# 2. 로컬 개발 서버 실행
npm run dev

# 3. 브라우저에서 접속
# http://localhost:3000
```

### 프로덕션 빌드

```bash
npm run build
npm run start
```

---

## 🌐 GitHub & 배포 방법

### 1) GitHub 저장소에 올리기 (Git Push)

```bash
# Git 초기화
git init
git add .
git commit -m "feat: initial commit for BG Stats KR"

# GitHub 원격 저장소 연결 (username과 repository-name을 본인 것으로 변경)
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### 2) 무료 웹 배포 (Vercel 연동 - 가장 추천 ⭐)

1. [Vercel](https://vercel.com)에 접속하여 GitHub 계정으로 로그인합니다.
2. **[Add New...]** $\rightarrow$ **[Project]**를 선택합니다.
3. 방금 Push한 GitHub 저장소를 선택하고 **[Deploy]**를 누릅니다.
4. 약 1분 후 나만의 무료 웹사이트 주소 (`https://your-project.vercel.app`)가 생성되며, 모바일과 PC 어디서나 접속할 수 있습니다!
5. 이후 GitHub에 `git push`를 할 때마다 자동으로 최신 버전으로 업데이트 배포됩니다.

---

## 📄 라이선스

MIT License
