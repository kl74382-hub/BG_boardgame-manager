import { BoardLifeLinks } from '@/types';

// Generate BoardLife Community & Marketplace deep links for any game
export function getBoardLifeLinks(gameTitleKr: string, gameTitleEn?: string): BoardLifeLinks {
  // Use Korean title first, fallback to English
  const searchTerm = encodeURIComponent(gameTitleKr || gameTitleEn || '');

  return {
    // 1. BoardLife Game Details / Community Search
    infoUrl: `https://boardlife.co.kr/bbs/board.php?bo_table=boardgame_info&sfl=wr_subject&stx=${searchTerm}`,
    
    // 2. BoardLife Korean Rules & Translation Files / Materials
    rulesUrl: `https://boardlife.co.kr/bbs/board.php?bo_table=rule&sfl=wr_subject&stx=${searchTerm}`,
    
    // 3. BoardLife Used Marketplace (중고장터 실시간 매물 및 시세 확인)
    usedMarketUrl: `https://boardlife.co.kr/bbs/board.php?bo_table=trade&sfl=wr_subject&stx=${searchTerm}`,
    
    // 4. BoardLife Strategy / Review Tips (보드게임 공략 & 후기)
    tipsUrl: `https://boardlife.co.kr/bbs/board.php?bo_table=boardgame_tip&sfl=wr_subject&stx=${searchTerm}`,
  };
}

// Common Korean Board Game Publishers
export const KOREAN_PUBLISHERS = [
  '코리아보드게임즈',
  '보드피아',
  '보드엠',
  '아스모디 코리아',
  '팝콘에듀',
  '딜라이트',
  '데빌북스',
  '다이스렐름',
  '언더독 게임즈',
  '우보펀앤런',
  '젬블로',
  'MTS 게임즈',
  '로터스 프로그 게임즈',
  '서먼게임즈',
  '히트게임즈'
];

// Popular Sleeve Sizes in Korean Market
export const STANDARD_SLEEVE_SIZES = [
  { size: '56x87mm', name: '스탠다드 보드게임 (56x87mm)', description: '한국 보드게임 최다 사용 (대부분의 카드)' },
  { size: '63.5x88mm', name: '스탠다드 TCG (63.5x88mm)', description: '매직/포켓몬/테포마/아크노바 등' },
  { size: '57.5x89mm', name: '유러피안 (57.5x89mm)', description: '윙스팬, 아그리콜라 등' },
  { size: '43x65mm', name: '미니 유러피안 (43x65mm)', description: '티켓투라이드, 듄 임페리움 미니카드 등' },
  { size: '45x68mm', name: '미니 USA (45x68mm)', description: '7원더스 듀얼, 아컴호러 미니카드 등' },
  { size: '70x120mm', name: '타로 (70x120mm)', description: '카스카디아, 센추리 등 타로 사이즈' },
  { size: '67x67mm', name: '정사각 67 (67x67mm)', description: '브라스 버밍엄 등 정사각' },
  { size: '80x120mm', name: '딕싯 / 점보 (80x120mm)', description: '딕싯, 정령섬 대형 카드' },
];
