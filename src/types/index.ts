// Core Data Models for Board Game Stats & Manager

export type GameStatus = 'owned' | 'wishlist' | 'played' | 'fortrade' | 'preordered' | 'prevowned';

export interface SleeveSpec {
  size: string;       // e.g. "56x87mm", "63.5x88mm", "43x65mm"
  count: number;      // e.g. 120
  hasSleeves?: boolean; // Whether the user currently has sleeves on
  notes?: string;     // e.g. "팝콘 블랙라벨 56x87 Fit"
}

export interface Game {
  id: string;                 // Internal UUID
  bggId?: number | null;      // BoardGameGeek Thing ID
  titleKr: string;            // Korean Title (e.g. "테라포밍 마스")
  titleEn: string;            // English Title (e.g. "Terraforming Mars")
  yearPublished?: number | null; // e.g. 2016
  image?: string | null;      // Box art URL
  thumbnail?: string | null;  // Small thumbnail URL
  minPlayers: number;         // e.g. 1
  maxPlayers: number;         // e.g. 5
  bestPlayers?: string | null; // e.g. "3-4" (BGG community recommended)
  minPlaytime: number;        // e.g. 90
  maxPlaytime: number;        // e.g. 120
  weight?: number | null;     // BGG Complexity / Weight (1.00 ~ 5.00)
  bggRating?: number | null;  // BGG average / geek rating (0.0 ~ 10.0)
  bggRank?: number | null;    // BGG Overall Rank (e.g. 7)
  categories?: string[];      // e.g. ["경제", "SF", "산업/제조"]
  mechanics?: string[];       // e.g. ["핸드 관리", "타일 배치", "엔진 빌딩"]
  designers?: string[];       // e.g. ["Jacob Fryxelius"]
  publisherKr?: string | null; // e.g. "코리아보드게임즈"
  publisherEn?: string | null; // e.g. "FryxGames"
  boardlifeId?: number | null; // BoardLife Game ID
  edition?: '한글판' | '영문판' | '펀딩국내판' | '펀딩해외판' | string | null; // Edition
  
  // User Personal Collection Data
  status: GameStatus;         // owned, wishlist, etc.
  userRating?: number | null; // User's rating (1~10)
  purchasePrice?: number | null; // e.g. 68000 (KRW)
  purchasePriceRaw?: string | null; // Original currency string e.g. "US$120 + SC $30"
  resalePrice?: number | null; // Resale / sold price (KRW)
  deliveryStatus?: '도착' | '미도착' | string | null; // Delivery status for preorders
  shippingDate?: string | null; // Expected delivery date e.g. "2026/08"
  shippingHistory?: string | null; // Delivery delay history e.g. "24년 12월 > 25년 2월 > 10월"
  purchaseDate?: string | null; // YYYY-MM-DD
  purchaseStore?: string | null; // e.g. "보드게임페스타", "텀블벅 딜라이트"
  sleeves?: SleeveSpec[];     // Sleeve information
  organizer?: string | boolean | null; // e.g. "럭키식스 원목 오거나이저" or boolean
  notes?: string | null;      // Custom user notes
  links?: {
    boardlife?: string | null;
    rules?: string | null;
    usedMarket?: string | null;
    bgg?: string | null;
  } | null;
  isExpansion?: boolean;      // Whether this is an expansion
  baseGameId?: string;        // If expansion, base game ID
  favorite?: boolean;         // Pinned favorite
  createdAt: string;
  updatedAt: string;
}

export interface PlayerScore {
  playerId: string;           // Player UUID
  name?: string;              // Player Name
  role?: string;              // Faction, Corporation, Character, Color (e.g. "에코라인", "파랑")
  startPlayer?: boolean;      // Was this player the starting player?
  score?: number;             // Final numerical score
  rank?: number;              // 1st, 2nd, etc.
  winner: boolean;            // Did this player win?
  newPlayer?: boolean;        // Was this the player's first time playing this game?
  team?: string;              // Team name if team game
  notes?: string;             // Individual notes
}

export interface Play {
  id: string;                 // UUID
  bggPlayId?: number;         // Synced BGG Play ID
  gameId: string;             // Game UUID
  gameTitleKr?: string;       // Snapshot for quick access
  gameTitleEn?: string;
  gameImage?: string | null;
  expansionIds?: string[];    // Used expansion IDs
  date: string;               // YYYY-MM-DD
  startTime?: string;         // HH:mm
  durationMinutes: number;    // Duration in minutes
  locationId?: string;        // Location UUID
  locationName?: string;      // Cached name (e.g. "신촌 레드버튼")
  isCoop?: boolean;           // Cooperative game mode
  coopWon?: boolean;          // If coop, did team win?
  isSolo?: boolean;           // Solo play
  incomplete?: boolean;       // Play was abandoned / incomplete
  rounds?: number;            // Number of rounds played
  playerScores: PlayerScore[];// Player scores and results
  notes?: string;             // Game session memo / review
  rating?: number;            // Session fun rating (1~5)
  syncedToBgg?: boolean;      // Whether synced to BGG
  createdAt: string;
  updatedAt: string;
}

export interface Player {
  id: string;                 // UUID
  bggUsername?: string;       // BGG Username if linked
  name: string;               // Player name (e.g. "나", "민수", "지혜")
  isUser: boolean;            // Is this the primary app user?
  avatar?: string;            // Avatar emoji or image URL
  color?: string;             // Default UI accent color (e.g. "#6366f1")
  notes?: string;             // Player notes
  createdAt: string;
  updatedAt: string;
}

export interface Location {
  id: string;                 // UUID
  name: string;               // e.g. "우리집", "강남 보드게임카페", "아지트"
  playCount?: number;
  notes?: string;
  createdAt: string;
}

export interface Challenge {
  id: string;                 // UUID
  title: string;              // e.g. "2026년 10x10 챌린지"
  type: '10x10' | '5x5' | '100plays' | 'custom';
  targetPlaysPerGame: number; // e.g. 10 for 10x10, 5 for 5x5
  gameIds: string[];          // List of game UUIDs in challenge
  year?: number;              // e.g. 2026
  startDate?: string;
  endDate?: string;
  completed?: boolean;
  createdAt: string;
}

// User App Settings
export interface AppSettings {
  userName: string;
  bggUsername: string;
  bggApiToken?: string;
  autoSyncBgg: boolean;
  theme: 'dark' | 'light' | 'system';
  currency: string;           // "KRW" | "USD"
  hIndexYearly: boolean;
  lastBackupDate?: string;
}

// BoardLife Link Structure
export interface BoardLifeLinks {
  infoUrl: string;            // 보드라이프 게임 상세/정보 직행 또는 검색 URL
  rulesUrl: string;           // 보드라이프 한글 룰북 & 한글화 자료실 검색 URL
  usedMarketUrl: string;      // 보드라이프 중고장터 실시간 시세/매물 검색 URL
  tipsUrl: string;            // 보드라이프 후기 및 공략 게시판 URL
}

// BGG Direct Link Structure
export interface BGGLinks {
  detailUrl: string;          // BGG 메인 상세 페이지 (https://boardgamegeek.com/boardgame/{id})
  filesUrl: string;           // BGG 한글화/자료실 (Files)
  forumUrl: string;           // BGG 룰 Q&A 및 전략 포럼 (Forum)
  marketUrl: string;          // BGG 글로벌 긱마켓 시세 (Marketplace)
  videosUrl: string;          // BGG 룰 설명 및 플레이 영상 (Videos)
}

// BG Stats Export JSON Schema Types
export interface BGStatsExportGame {
  id: number;
  uuid?: string;
  bggId?: number;
  name: string;
  image?: string;
  thumbnail?: string;
  minPlayers?: number;
  maxPlayers?: number;
  minPlayTime?: number;
  maxPlayTime?: number;
  isExpansion?: number;
  rating?: number;
  copies?: Array<{
    pricePaid?: string;
    currency?: string;
    location?: string;
  }>;
  modificationDate?: string;
}

export interface BGStatsExportPlayer {
  id: number;
  uuid?: string;
  name: string;
  isAnonymous?: number;
  bggUsername?: string;
  modificationDate?: string;
}

export interface BGStatsExportLocation {
  id: number;
  uuid?: string;
  name: string;
  modificationDate?: string;
}

export interface BGStatsExportPlay {
  id: number;
  uuid?: string;
  gameRefId: number;
  playDate: string;
  durationMin?: number;
  locationRefId?: number;
  scoringSetting?: number;
  nemesisWon?: number;
  playerScores: Array<{
    playerRefId: number;
    score?: string;
    winner?: boolean | number;
    startPlayer?: boolean | number;
    newPlayer?: boolean | number;
    role?: string;
    rank?: number;
  }>;
  comments?: string;
  rating?: number;
  bggId?: number;
  modificationDate?: string;
}

export interface BGStatsExportRoot {
  games: BGStatsExportGame[];
  players: BGStatsExportPlayer[];
  locations: BGStatsExportLocation[];
  plays: BGStatsExportPlay[];
  userInfo?: {
    mePlayerRefId?: number;
  };
}
