import { Game, Play, Player, Location, Challenge } from '@/types';

export const SEED_PLAYERS: Player[] = [
  {
    "id": "player-60",
    "name": "가갸",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2025-03-16T15:17:17.000Z",
    "updatedAt": "2025-03-16T15:17:17.000Z"
  },
  {
    "id": "player-1",
    "name": "경민",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-04T23:09:49.000Z",
    "updatedAt": "2020-01-04T23:09:49.000Z"
  },
  {
    "id": "player-65",
    "name": "근수",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2026-02-28T16:46:28.000Z",
    "updatedAt": "2026-02-28T16:46:28.000Z"
  },
  {
    "id": "player-2",
    "name": "기성",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-04-09T21:58:10.000Z",
    "updatedAt": "2022-04-09T21:58:10.000Z"
  },
  {
    "id": "player-66",
    "name": "김영찬",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2026-02-28T16:46:37.000Z",
    "updatedAt": "2026-02-28T16:46:37.000Z"
  },
  {
    "id": "player-3",
    "name": "김파랑",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2021-05-09T13:38:21.000Z",
    "updatedAt": "2021-05-09T13:38:21.000Z"
  },
  {
    "id": "player-4",
    "name": "나율",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-04-16T11:42:15.000Z",
    "updatedAt": "2022-04-16T11:42:15.000Z"
  },
  {
    "id": "player-5",
    "name": "네온",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-01T14:35:11.000Z",
    "updatedAt": "2020-01-01T14:35:11.000Z"
  },
  {
    "id": "player-6",
    "name": "늑대",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-04-23T19:00:09.000Z",
    "updatedAt": "2022-04-23T19:00:09.000Z"
  },
  {
    "id": "player-7",
    "name": "동욱형",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2019-12-31T21:35:37.000Z",
    "updatedAt": "2019-12-31T21:35:37.000Z"
  },
  {
    "id": "player-8",
    "name": "동주",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-04T23:11:36.000Z",
    "updatedAt": "2020-01-04T23:11:36.000Z"
  },
  {
    "id": "player-9",
    "name": "뚜뚜",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-05-07T11:51:19.000Z",
    "updatedAt": "2022-05-07T11:51:19.000Z"
  },
  {
    "id": "player-55",
    "name": "랑매",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2024-05-05T13:07:35.000Z",
    "updatedAt": "2024-05-05T13:07:35.000Z"
  },
  {
    "id": "player-10",
    "name": "로제언니",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-03-06T14:00:14.000Z",
    "updatedAt": "2022-03-06T14:00:14.000Z"
  },
  {
    "id": "player-11",
    "name": "로제오빠",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-03-06T14:00:12.000Z",
    "updatedAt": "2022-03-06T14:00:12.000Z"
  },
  {
    "id": "player-12",
    "name": "률",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-01T15:35:23.000Z",
    "updatedAt": "2020-01-01T15:35:23.000Z"
  },
  {
    "id": "player-58",
    "name": "모래상어",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2025-02-22T13:10:31.000Z",
    "updatedAt": "2025-02-22T13:10:31.000Z"
  },
  {
    "id": "player-54",
    "name": "민경",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2024-03-10T10:38:51.000Z",
    "updatedAt": "2024-03-10T10:38:51.000Z"
  },
  {
    "id": "player-57",
    "name": "민기",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2024-07-13T09:56:59.000Z",
    "updatedAt": "2024-07-13T09:56:59.000Z"
  },
  {
    "id": "player-53",
    "name": "민서(토노)",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2023-07-02T13:56:55.000Z",
    "updatedAt": "2023-07-02T13:56:55.000Z"
  },
  {
    "id": "player-13",
    "name": "민지",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-04T23:11:08.000Z",
    "updatedAt": "2020-01-04T23:11:08.000Z"
  },
  {
    "id": "player-14",
    "name": "민호섬마을",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-05-01T13:25:56.000Z",
    "updatedAt": "2022-05-01T13:25:56.000Z"
  },
  {
    "id": "player-15",
    "name": "민호형",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2019-12-31T21:35:32.000Z",
    "updatedAt": "2019-12-31T21:35:32.000Z"
  },
  {
    "id": "player-67",
    "name": "박대열",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2026-02-28T16:46:44.000Z",
    "updatedAt": "2026-02-28T16:46:44.000Z"
  },
  {
    "id": "player-16",
    "name": "박상윤",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2021-06-05T18:55:49.000Z",
    "updatedAt": "2021-06-05T18:55:49.000Z"
  },
  {
    "id": "player-17",
    "name": "범이",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-04-23T12:46:32.000Z",
    "updatedAt": "2022-04-23T12:46:32.000Z"
  },
  {
    "id": "player-18",
    "name": "빅비",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2021-06-13T19:15:35.000Z",
    "updatedAt": "2021-06-13T19:15:35.000Z"
  },
  {
    "id": "player-19",
    "name": "성범",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-04-09T21:58:16.000Z",
    "updatedAt": "2022-04-09T21:58:16.000Z"
  },
  {
    "id": "player-20",
    "name": "성호",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-04T23:11:05.000Z",
    "updatedAt": "2020-01-04T23:11:05.000Z"
  },
  {
    "id": "player-59",
    "name": "솔",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2025-03-16T15:17:15.000Z",
    "updatedAt": "2025-03-16T15:17:15.000Z"
  },
  {
    "id": "player-21",
    "name": "신가",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-02-01T18:17:14.000Z",
    "updatedAt": "2020-02-01T18:17:14.000Z"
  },
  {
    "id": "player-22",
    "name": "신길수",
    "isUser": false,
    "avatar": "🎲",
    "bggUsername": "로제오빠",
    "createdAt": "2021-04-28T19:29:44.000Z",
    "updatedAt": "2021-04-28T19:29:44.000Z"
  },
  {
    "id": "player-23",
    "name": "어진",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-02-12T21:48:13.000Z",
    "updatedAt": "2022-02-12T21:48:13.000Z"
  },
  {
    "id": "player-24",
    "name": "연우",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-04T23:10:54.000Z",
    "updatedAt": "2020-01-04T23:10:54.000Z"
  },
  {
    "id": "player-25",
    "name": "완섭",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-26T16:04:14.000Z",
    "updatedAt": "2020-01-26T16:04:14.000Z"
  },
  {
    "id": "player-26",
    "name": "용건",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-05T12:43:14.000Z",
    "updatedAt": "2020-01-05T12:43:14.000Z"
  },
  {
    "id": "player-27",
    "name": "우석",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2019-12-31T20:10:43.000Z",
    "updatedAt": "2019-12-31T20:10:43.000Z"
  },
  {
    "id": "player-28",
    "name": "유빈",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-26T16:04:39.000Z",
    "updatedAt": "2020-01-26T16:04:39.000Z"
  },
  {
    "id": "player-29",
    "name": "은서",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-04T23:09:56.000Z",
    "updatedAt": "2020-01-04T23:09:56.000Z"
  },
  {
    "id": "player-30",
    "name": "이리사",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-26T16:04:02.000Z",
    "updatedAt": "2020-01-26T16:04:02.000Z"
  },
  {
    "id": "player-63",
    "name": "이민정",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2025-11-16T13:23:58.000Z",
    "updatedAt": "2025-11-16T13:23:58.000Z"
  },
  {
    "id": "player-31",
    "name": "이보람",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-05-21T10:52:04.000Z",
    "updatedAt": "2022-05-21T10:52:04.000Z"
  },
  {
    "id": "player-32",
    "name": "이상민",
    "isUser": false,
    "avatar": "🎲",
    "bggUsername": "당근몸종",
    "createdAt": "2021-04-28T19:30:37.000Z",
    "updatedAt": "2021-04-28T19:30:37.000Z"
  },
  {
    "id": "player-64",
    "name": "이소현",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2026-02-14T12:45:50.000Z",
    "updatedAt": "2026-02-14T12:45:50.000Z"
  },
  {
    "id": "player-33",
    "name": "이윤희",
    "isUser": false,
    "avatar": "🎲",
    "bggUsername": "로제언니",
    "createdAt": "2021-04-28T19:30:17.000Z",
    "updatedAt": "2021-04-28T19:30:17.000Z"
  },
  {
    "id": "player-34",
    "name": "이지영",
    "isUser": false,
    "avatar": "🎲",
    "bggUsername": "지영",
    "createdAt": "2021-04-28T19:30:50.000Z",
    "updatedAt": "2021-04-28T19:30:50.000Z"
  },
  {
    "id": "player-68",
    "name": "이지원",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2026-08-17T19:09:51.000Z",
    "updatedAt": "2026-08-17T19:09:51.000Z"
  },
  {
    "id": "player-35",
    "name": "자까",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-02-12T21:48:10.000Z",
    "updatedAt": "2022-02-12T21:48:10.000Z"
  },
  {
    "id": "player-36",
    "name": "재성",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2019-12-31T20:10:56.000Z",
    "updatedAt": "2019-12-31T20:10:56.000Z"
  },
  {
    "id": "player-62",
    "name": "재용",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2025-06-29T11:41:03.000Z",
    "updatedAt": "2025-06-29T11:41:03.000Z"
  },
  {
    "id": "player-37",
    "name": "정",
    "isUser": false,
    "avatar": "🎲",
    "bggUsername": "정재식",
    "createdAt": "2020-01-01T15:36:21.000Z",
    "updatedAt": "2020-01-01T15:36:21.000Z"
  },
  {
    "id": "player-38",
    "name": "정완",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2019-12-31T21:35:47.000Z",
    "updatedAt": "2019-12-31T21:35:47.000Z"
  },
  {
    "id": "player-39",
    "name": "정훈",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2019-12-31T20:10:52.000Z",
    "updatedAt": "2019-12-31T20:10:52.000Z"
  },
  {
    "id": "player-40",
    "name": "제이든",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2021-07-04T15:51:01.000Z",
    "updatedAt": "2021-07-04T15:51:01.000Z"
  },
  {
    "id": "player-41",
    "name": "제이크",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2021-07-04T15:51:07.000Z",
    "updatedAt": "2021-07-04T15:51:07.000Z"
  },
  {
    "id": "player-56",
    "name": "준수",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2024-06-08T15:37:14.000Z",
    "updatedAt": "2024-06-08T15:37:14.000Z"
  },
  {
    "id": "player-42",
    "name": "지원",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-04-09T21:58:23.000Z",
    "updatedAt": "2022-04-09T21:58:23.000Z"
  },
  {
    "id": "player-43",
    "name": "지현",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-01T14:35:06.000Z",
    "updatedAt": "2020-01-01T14:35:06.000Z"
  },
  {
    "id": "player-44",
    "name": "지훈",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2019-12-31T20:10:59.000Z",
    "updatedAt": "2019-12-31T20:10:59.000Z"
  },
  {
    "id": "player-45",
    "name": "진석",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-04T14:46:52.000Z",
    "updatedAt": "2020-01-04T14:46:52.000Z"
  },
  {
    "id": "player-46",
    "name": "진수",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-04T14:46:49.000Z",
    "updatedAt": "2020-01-04T14:46:49.000Z"
  },
  {
    "id": "player-47",
    "name": "찬우",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-04-16T11:43:10.000Z",
    "updatedAt": "2022-04-16T11:43:10.000Z"
  },
  {
    "id": "player-48",
    "name": "토리",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2022-04-09T21:58:32.000Z",
    "updatedAt": "2022-04-09T21:58:32.000Z"
  },
  {
    "id": "player-49",
    "name": "한",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2021-07-04T15:51:04.000Z",
    "updatedAt": "2021-07-04T15:51:04.000Z"
  },
  {
    "id": "player-50",
    "name": "현우",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2020-01-04T23:10:33.000Z",
    "updatedAt": "2020-01-04T23:10:33.000Z"
  },
  {
    "id": "player-51",
    "name": "형석",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2019-12-31T20:10:48.000Z",
    "updatedAt": "2019-12-31T20:10:48.000Z"
  },
  {
    "id": "player-61",
    "name": "홍지수",
    "isUser": false,
    "avatar": "🎲",
    "createdAt": "2025-05-24T11:15:26.000Z",
    "updatedAt": "2025-05-24T11:15:26.000Z"
  },
  {
    "id": "player-52",
    "name": "Nana",
    "isUser": true,
    "avatar": "👑",
    "bggUsername": "Bitnara",
    "createdAt": "2019-12-26T20:11:01.000Z",
    "updatedAt": "2019-12-26T20:11:01.000Z"
  }
];

export const SEED_LOCATIONS: Location[] = [
  {
    "id": "loc-13",
    "name": "가천대아지트",
    "createdAt": "2023-07-02T10:23:45.000Z"
  },
  {
    "id": "loc-1",
    "name": "건대",
    "createdAt": "2020-01-04T14:46:42.000Z"
  },
  {
    "id": "loc-2",
    "name": "기타",
    "createdAt": "2022-05-07T11:50:25.000Z"
  },
  {
    "id": "loc-3",
    "name": "까페",
    "createdAt": "2022-04-19T20:38:39.000Z"
  },
  {
    "id": "loc-4",
    "name": "까페그랑쥬",
    "createdAt": "2022-04-10T15:05:15.000Z"
  },
  {
    "id": "loc-5",
    "name": "동욱형집",
    "createdAt": "2022-04-16T11:44:00.000Z"
  },
  {
    "id": "loc-6",
    "name": "마이홈",
    "createdAt": "2022-03-09T14:59:44.000Z"
  },
  {
    "id": "loc-7",
    "name": "민호형집",
    "createdAt": "2021-06-05T18:55:11.000Z"
  },
  {
    "id": "loc-15",
    "name": "브레인푸딩",
    "createdAt": "2025-03-09T10:24:35.000Z"
  },
  {
    "id": "loc-8",
    "name": "삼동모임",
    "createdAt": "2021-04-28T21:44:45.000Z"
  },
  {
    "id": "loc-9",
    "name": "섬마을",
    "createdAt": "2020-01-01T14:35:30.000Z"
  },
  {
    "id": "loc-10",
    "name": "이매아지트",
    "createdAt": "2022-05-05T10:39:17.000Z"
  },
  {
    "id": "loc-17",
    "name": "이매집",
    "createdAt": "2026-08-17T19:10:08.000Z"
  },
  {
    "id": "loc-11",
    "name": "지니어스",
    "createdAt": "2019-12-31T21:18:39.000Z"
  },
  {
    "id": "loc-12",
    "name": "지현님네",
    "createdAt": "2021-05-21T19:40:18.000Z"
  },
  {
    "id": "loc-14",
    "name": "푸른하늘",
    "createdAt": "2024-06-22T11:19:55.000Z"
  },
  {
    "id": "loc-16",
    "name": "홍까페",
    "createdAt": "2025-12-13T20:25:37.000Z"
  }
];

export const SEED_GAMES: Game[] = [
  {
    "id": "game-270",
    "bggId": 378040,
    "titleKr": "1%: A Game of Strategic Chance",
    "titleEn": "1%: A Game of Strategic Chance",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/K2spoKKeCHm7OHonaSdK3g__original/img/sPdUIEJgxijCDtd6J5-23mHhYaM=/0x0/filters:format(jpeg)/pic7293478.jpg",
    "thumbnail": "https://cf.geekdo-images.com/K2spoKKeCHm7OHonaSdK3g__thumb/img/aRHiqdERA2rlcG5XmLNL1DxSZF0=/fit-in/200x150/filters:strip_icc()/pic7293478.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 10,
    "maxPlaytime": 30,
    "bggRating": 6.9,
    "userRating": 6.9,
    "status": "owned",
    "designers": [
      "Luke Melia"
    ],
    "createdAt": "2026-08-15T20:58:05.000Z",
    "updatedAt": "2026-08-15T20:58:05.000Z"
  },
  {
    "id": "game-251",
    "bggId": 423517,
    "titleKr": "3 Chapters",
    "titleEn": "3 Chapters",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/77nPGdBzl0m03yIn516RfA__original/img/Vfhn5Yuwfulr32hok5qaUjz52M8=/0x0/filters:format(png)/pic8349618.png",
    "thumbnail": "https://cf.geekdo-images.com/77nPGdBzl0m03yIn516RfA__thumb/img/_KfIjEhwo8ZC5Y2xpzeTICwx0xI=/fit-in/200x150/filters:strip_icc()/pic8349618.png",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 7.2,
    "userRating": 7.2,
    "status": "played",
    "designers": [
      "Joe Hout"
    ],
    "createdAt": "2024-12-14T12:49:13.000Z",
    "updatedAt": "2024-12-14T12:49:13.000Z"
  },
  {
    "id": "game-1",
    "bggId": 316377,
    "titleKr": "7 Wonders (Second Edition)",
    "titleEn": "7 Wonders (Second Edition)",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/fwzG7OfzA35y7b3S7dHn9Q__original/img/HGwgC5DOPmEksHYUKNiF38dKUog=/0x0/filters:format(jpeg)/pic5652537.jpg",
    "thumbnail": "https://cf.geekdo-images.com/fwzG7OfzA35y7b3S7dHn9Q__thumb/img/N7rmW1XK7hkQssGu43rOSeN-Ry8=/fit-in/200x150/filters:strip_icc()/pic5652537.jpg",
    "minPlayers": 3,
    "maxPlayers": 7,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "played",
    "designers": [
      "Antoine Bauza"
    ],
    "createdAt": "2021-07-04T18:11:57.000Z",
    "updatedAt": "2021-07-04T18:11:57.000Z"
  },
  {
    "id": "game-274",
    "bggId": 387388,
    "titleKr": "가지각새",
    "titleEn": "Nanatoridori",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/NBgCJ5Xam4XJQIxrD_IadA__original/img/17IyFsVIA_z4Ox-0obyW4pl_vbg=/0x0/filters:format(jpeg)/pic8267729.jpg",
    "thumbnail": "https://cf.geekdo-images.com/NBgCJ5Xam4XJQIxrD_IadA__thumb/img/iTA9x3VrhS04RImFFbg1mzgGbs4=/fit-in/200x150/filters:strip_icc()/pic8267729.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 10,
    "maxPlaytime": 20,
    "bggRating": 6.8,
    "userRating": 6.8,
    "status": "played",
    "designers": [
      "荒尾 俊樹 (Toshiki Arao)"
    ],
    "createdAt": "2025-05-04T17:34:06.000Z",
    "updatedAt": "2025-05-04T17:34:06.000Z"
  },
  {
    "id": "game-355",
    "bggId": 420091,
    "titleKr": "다다다",
    "titleEn": "DaDaDa",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/D_3ZIKuG3QKIXh3nIhA4eA__original/img/LQA1vkGFBmFj-WzphK-HOkIxxiM=/0x0/filters:format(jpeg)/pic8172351.jpg",
    "thumbnail": "https://cf.geekdo-images.com/D_3ZIKuG3QKIXh3nIhA4eA__small/img/an0nadyVSOAFLG2dICig-nor4ZE=/fit-in/200x150/filters:strip_icc()/pic8172351.jpg",
    "minPlayers": 2,
    "maxPlayers": 99,
    "minPlaytime": 15,
    "maxPlaytime": 30,
    "bggRating": 6.8,
    "userRating": 6.8,
    "status": "played",
    "designers": [
      "Gustavo (mut/moochi) Ceci Guimarães",
      "Lee McGirr",
      "TJ Spalty",
      "Julian Spinelli"
    ],
    "createdAt": "2026-08-15T12:01:52.000Z",
    "updatedAt": "2026-08-15T12:01:52.000Z"
  },
  {
    "id": "game-338",
    "bggId": 418858,
    "titleKr": "르사파",
    "titleEn": "Resafa",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/aTDLIq7UfNrcORpwbU61UA__original/img/KQD97S4S3uzgpOMBFFIZsk4hJps=/0x0/filters:format(jpeg)/pic8361340.jpg",
    "thumbnail": "https://cf.geekdo-images.com/aTDLIq7UfNrcORpwbU61UA__small/img/0-tVIFJeyTO5erNPcU9T1IaGKt8=/fit-in/200x150/filters:strip_icc()/pic8361340.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 150,
    "bggRating": 7.5,
    "userRating": 7.5,
    "status": "owned",
    "designers": [
      "Vladimír Suchý"
    ],
    "createdAt": "2026-03-21T14:00:49.000Z",
    "updatedAt": "2026-03-21T14:00:49.000Z"
  },
  {
    "id": "game-339",
    "bggId": 265537,
    "titleKr": "바이마르: 민주주의를 위한 투쟁",
    "titleEn": "Weimar: The Fight for Democracy",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/3K82rRzulrDxik2FK7p_HA__original/img/wT11w3aW7Mdnmj-dCIeKL7ljERI=/0x0/filters:format(jpeg)/pic6657971.jpg",
    "thumbnail": "https://cf.geekdo-images.com/3K82rRzulrDxik2FK7p_HA__small/img/LrOSpfsi8SlrJ_oYL7PjrgEYYn8=/fit-in/200x150/filters:strip_icc()/pic6657971.jpg",
    "minPlayers": 4,
    "maxPlayers": 4,
    "minPlaytime": 180,
    "maxPlaytime": 360,
    "bggRating": 8.3,
    "userRating": 8.3,
    "status": "played",
    "designers": [
      "Matthias Cramer"
    ],
    "createdAt": "2026-04-18T19:22:55.000Z",
    "updatedAt": "2026-04-18T19:22:55.000Z"
  },
  {
    "id": "game-315",
    "bggId": 444291,
    "titleKr": "서부 탐험대",
    "titleEn": "Corps of Discovery: Ultimate Edition",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/xaQb63Z5RO0ySyilFWitTQ__original/img/snVhTg_sDPc4TMQLu6UDgHYsVo0=/0x0/filters:format(png)/pic8831596.png",
    "thumbnail": "https://cf.geekdo-images.com/xaQb63Z5RO0ySyilFWitTQ__small/img/fVKbl2CIRnItn0MpUaWURpR-22c=/fit-in/200x150/filters:strip_icc()/pic8831596.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "bggRating": 8.6,
    "userRating": 8.6,
    "status": "owned",
    "designers": [
      "Jay Cormier",
      "Sen-Foong Lim"
    ],
    "createdAt": "2025-09-20T17:40:56.000Z",
    "updatedAt": "2025-09-20T17:40:56.000Z"
  },
  {
    "id": "game-345",
    "bggId": 461732,
    "titleKr": "슈팅 피쉬",
    "titleEn": "Throw Fish",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/T8_akQ0t5SUSNhBy0sygXQ__original/img/1r6Tvx7u5HJaIo0u45aRntVLTmM=/0x0/filters:format(jpeg)/pic9391562.jpg",
    "thumbnail": "https://cf.geekdo-images.com/T8_akQ0t5SUSNhBy0sygXQ__small/img/1fmRE9aFg39Ck1UswlJiHDTx1qA=/fit-in/200x150/filters:strip_icc()/pic9391562.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Chris Nelson",
      "Bill Ward"
    ],
    "createdAt": "2026-07-04T14:50:46.000Z",
    "updatedAt": "2026-07-04T14:50:46.000Z"
  },
  {
    "id": "game-282",
    "bggId": 418896,
    "titleKr": "스위스 사는 스미스씨",
    "titleEn": "Mr. Smith Living in Swiss",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/zdqSZOMcr0D8pF4mFrzR6Q__original/img/QBRv-1ZCXcOhenEe1W7olf-m9Yc=/0x0/filters:format(jpeg)/pic8350696.jpg",
    "thumbnail": "https://cf.geekdo-images.com/zdqSZOMcr0D8pF4mFrzR6Q__thumb/img/ju0yix8D_oWkG8xSXaiLRbj0NzY=/fit-in/200x150/filters:strip_icc()/pic8350696.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "bggRating": 5.7,
    "userRating": 5.7,
    "status": "played",
    "designers": [
      "Sooyoung Youn"
    ],
    "createdAt": "2025-05-11T18:28:08.000Z",
    "updatedAt": "2025-05-11T18:28:08.000Z"
  },
  {
    "id": "game-325",
    "bggId": 99219,
    "titleKr": "스위시",
    "titleEn": "Swish",
    "yearPublished": 2011,
    "image": "https://cf.geekdo-images.com/zzbOtVGaOfJArqg660wM3g__original/img/qgA1t2FUa-gAv5MP9ZbKprmv938=/0x0/filters:format(jpeg)/pic8782824.jpg",
    "thumbnail": "https://cf.geekdo-images.com/zzbOtVGaOfJArqg660wM3g__small/img/1PUK0Jphzw5Sjqa01oDQmKYk2cg=/fit-in/200x150/filters:strip_icc()/pic8782824.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 10,
    "maxPlaytime": 10,
    "bggRating": 6.1,
    "userRating": 6.1,
    "status": "owned",
    "designers": [
      "Zvi Shalem",
      "Gali Shimoni"
    ],
    "createdAt": "2025-11-02T13:36:21.000Z",
    "updatedAt": "2025-11-02T13:36:21.000Z"
  },
  {
    "id": "game-318",
    "titleKr": "스트림스 메트로",
    "titleEn": "스트림스 메트로",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [],
    "createdAt": "2025-10-25T16:16:03.000Z",
    "updatedAt": "2025-10-25T16:16:03.000Z"
  },
  {
    "id": "game-214",
    "bggId": 406291,
    "titleKr": "스플렌더: Pokémon (Splendor: Pokémon)",
    "titleEn": "스플렌더: Pokémon (Splendor: Pokémon)",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/o6HpiLCBBFvc7XvBv7DEig__original/img/jVL7_CuVxXEHUMEEXGI9VyJ0-Vg=/0x0/filters:format(jpeg)/pic7902371.jpg",
    "thumbnail": "https://cf.geekdo-images.com/o6HpiLCBBFvc7XvBv7DEig__thumb/img/cP3zFhQXbpOo4jMbXWgPShAdn4E=/fit-in/200x150/filters:strip_icc()/pic7902371.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 8.1,
    "userRating": 8.1,
    "status": "owned",
    "designers": [
      "Marc André"
    ],
    "createdAt": "2024-04-20T16:59:19.000Z",
    "updatedAt": "2024-04-20T16:59:19.000Z"
  },
  {
    "id": "game-347",
    "bggId": 454103,
    "titleKr": "야단법석 달리기",
    "titleEn": "Magical Athlete",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/1uW8t9AkuqOF0xjv_sXKgw__original/img/iBRrCDdqyVY1ckqWIjo0xQ_k70A=/0x0/filters:format(png)/pic9106864.png",
    "thumbnail": "https://cf.geekdo-images.com/1uW8t9AkuqOF0xjv_sXKgw__small/img/tWEmoT1EaoYUpbwrTGCLMHaaZGs=/fit-in/200x150/filters:strip_icc()/pic9106864.png",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "played",
    "designers": [
      "Richard Garfield",
      "Takashi Ishida"
    ],
    "createdAt": "2026-08-15T19:57:19.000Z",
    "updatedAt": "2026-08-15T19:57:19.000Z"
  },
  {
    "id": "game-351",
    "bggId": 447379,
    "titleKr": "죄악의 카니발",
    "titleEn": "Carnival of Sins",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/oMti7rShEBXXOnr1IWyOTg__original/img/CmhszPlc04lMf8hvl4hSpDNmiQs=/0x0/filters:format(jpeg)/pic8909267.jpg",
    "thumbnail": "https://cf.geekdo-images.com/oMti7rShEBXXOnr1IWyOTg__small/img/xwkZq8FbnKAIAuJpyDtsvY1_C3I=/fit-in/200x150/filters:strip_icc()/pic8909267.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 10,
    "maxPlaytime": 20,
    "bggRating": 7.2,
    "userRating": 7.2,
    "status": "played",
    "designers": [
      "Alex Nogués"
    ],
    "createdAt": "2026-07-25T13:14:34.000Z",
    "updatedAt": "2026-07-25T13:14:34.000Z"
  },
  {
    "id": "game-186",
    "bggId": 284818,
    "titleKr": "케일러스 1303",
    "titleEn": "케일러스 1303",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/AmDxG1Bbkr4cNC2d8XO-7A__original/img/uSNnBPq1V3LhogRIRdPHYj-8RDE=/0x0/filters:format(jpeg)/pic4978911.jpg",
    "thumbnail": "https://cf.geekdo-images.com/AmDxG1Bbkr4cNC2d8XO-7A__thumb/img/MZ0JIjoGOhvDb8fG1IO8hn03768=/fit-in/200x150/filters:strip_icc()/pic4978911.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "William Attia"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-185",
    "bggId": 316786,
    "titleKr": "타반누시: 우르의 건축가들",
    "titleEn": "타반누시: 우르의 건축가들",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/0WmXXnvravcDiiQvJum0xA__original/img/iL15SkjTjnJ08Biv5ieoDbbIx6I=/0x0/filters:format(jpeg)/pic6428410.jpg",
    "thumbnail": "https://cf.geekdo-images.com/0WmXXnvravcDiiQvJum0xA__thumb/img/3x8ADI1ZjsvXVziRdeGFOWLbZJ0=/fit-in/200x150/filters:strip_icc()/pic6428410.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 120,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "David Spada",
      "Daniele Tascini"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-86",
    "bggId": 319765,
    "titleKr": "타케노코: 빅 박스 (Takenoko Big Box)",
    "titleEn": "타케노코: 빅 박스 (Takenoko Big Box)",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/ftEf8xYezaxOs7k6sMKlTA__original/img/NlvBeodbvcMyGSObcxOvyJQZs9s=/0x0/filters:format(jpeg)/pic5658681.jpg",
    "thumbnail": "https://cf.geekdo-images.com/ftEf8xYezaxOs7k6sMKlTA__thumb/img/px9_f991af_rIHm2PuAPM22tiB8=/fit-in/200x150/filters:strip_icc()/pic5658681.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Antoine Bauza"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-331",
    "titleKr": "탁상탐정단: 황혼에 웃는 소녀",
    "titleEn": "탁상탐정단: 황혼에 웃는 소녀",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [],
    "createdAt": "2025-12-21T10:11:13.000Z",
    "updatedAt": "2025-12-21T10:11:13.000Z"
  },
  {
    "id": "game-350",
    "titleKr": "퍼스트시그널",
    "titleEn": "퍼스트시그널",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [],
    "createdAt": "2026-07-25T11:01:15.000Z",
    "updatedAt": "2026-07-25T11:01:15.000Z"
  },
  {
    "id": "game-337",
    "bggId": 428787,
    "titleKr": "프리세이지",
    "titleEn": "Présages",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/WngBXWndu_CCMCH9dU64Qg__original/img/PS8SvojuiHeJe6mtDl2q3xhbIJM=/0x0/filters:format(jpeg)/pic8642520.jpg",
    "thumbnail": "https://cf.geekdo-images.com/WngBXWndu_CCMCH9dU64Qg__small/img/Q3101xU5fikxR4yCsiiFv92WZJ4=/fit-in/200x150/filters:strip_icc()/pic8642520.jpg",
    "minPlayers": 4,
    "maxPlayers": 6,
    "minPlaytime": 20,
    "maxPlaytime": 30,
    "bggRating": 7.4,
    "userRating": 7.4,
    "status": "played",
    "designers": [
      "Maxime Rambourg"
    ],
    "createdAt": "2026-02-14T13:57:51.000Z",
    "updatedAt": "2026-02-14T13:57:51.000Z"
  },
  {
    "id": "game-304",
    "bggId": 415054,
    "titleKr": "피나콜라 다이스",
    "titleEn": "Piña Coladice",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/QzRniP5vC4BD1b4Y5aswqQ__original/img/fA4CBG-GF1LLT1qlZTl-wVlIS1Y=/0x0/filters:format(png)/pic8043570.png",
    "thumbnail": "https://cf.geekdo-images.com/QzRniP5vC4BD1b4Y5aswqQ__thumb/img/Y3QCUxp-Ua0UbgkevH--IRCymeM=/fit-in/200x150/filters:strip_icc()/pic8043570.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 10,
    "maxPlaytime": 20,
    "bggRating": 7,
    "userRating": 7,
    "status": "owned",
    "designers": [
      "Yann Dupont"
    ],
    "createdAt": "2025-07-17T20:32:55.000Z",
    "updatedAt": "2025-07-17T20:32:55.000Z"
  },
  {
    "id": "game-352",
    "bggId": 468868,
    "titleKr": "해녀: Sea Divers of Jeju",
    "titleEn": "해녀: Sea Divers of Jeju",
    "yearPublished": 2026,
    "image": "https://cf.geekdo-images.com/siUEgwQgNvxyg2sDpc1PlA__original/img/-u60bHf9ZCo7bFi4vPDoR9eGb2I=/0x0/filters:format(jpeg)/pic9531187.jpg",
    "thumbnail": "https://cf.geekdo-images.com/siUEgwQgNvxyg2sDpc1PlA__small/img/vtuhZMctFvgQo-8WHeNkGTujOlk=/fit-in/200x150/filters:strip_icc()/pic9531187.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 20,
    "maxPlaytime": 40,
    "bggRating": 7.3,
    "userRating": 7.3,
    "status": "played",
    "designers": [
      "Hisashi Hayashi"
    ],
    "createdAt": "2026-07-25T17:36:24.000Z",
    "updatedAt": "2026-07-25T17:36:24.000Z"
  },
  {
    "id": "game-332",
    "bggId": 413469,
    "titleKr": "Ada's Dream",
    "titleEn": "Ada's Dream",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/i3YeleJsNmnvcKdwgW3TKA__original/img/0bHPZadTVedYlWrXsy0LKZ0Kwf8=/0x0/filters:format(jpeg)/pic8030666.jpg",
    "thumbnail": "https://cf.geekdo-images.com/i3YeleJsNmnvcKdwgW3TKA__small/img/PnqlbLRuC-3OB7dWtElkQkhLdxg=/fit-in/200x150/filters:strip_icc()/pic8030666.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "bggRating": 8.1,
    "userRating": 8.1,
    "status": "owned",
    "designers": [
      "Toni López"
    ],
    "createdAt": "2026-01-24T11:00:05.000Z",
    "updatedAt": "2026-01-24T11:00:05.000Z"
  },
  {
    "id": "game-2",
    "bggId": 202408,
    "titleKr": "Adrenaline",
    "titleEn": "Adrenaline",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/TiNI7bUCR2RPFMlvKEC9TQ__original/img/MEvPkkVu15k4DWM8CS41a-j5TL8=/0x0/filters:format(jpeg)/pic3476604.jpg",
    "thumbnail": "https://cf.geekdo-images.com/TiNI7bUCR2RPFMlvKEC9TQ__thumb/img/nnWEA6jjVsxPSuEC_Ooph9kzO_g=/fit-in/200x150/filters:strip_icc()/pic3476604.jpg",
    "minPlayers": 3,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Filip Neduk"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-192",
    "bggId": 161970,
    "titleKr": "Alchemists",
    "titleEn": "Alchemists",
    "yearPublished": 2014,
    "image": "https://cf.geekdo-images.com/ztNshEv3Fsm46HCJaEOFPw__original/img/SP4ItZ27dLweUPbz_bF7C-P7GtA=/0x0/filters:format(png)/pic2241156.png",
    "thumbnail": "https://cf.geekdo-images.com/ztNshEv3Fsm46HCJaEOFPw__thumb/img/-a0oJ_E49V_7PDW78W7KIyS3rF8=/fit-in/200x150/filters:strip_icc()/pic2241156.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 120,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Matúš Kotry"
    ],
    "createdAt": "2024-01-28T20:09:15.000Z",
    "updatedAt": "2024-01-28T20:09:15.000Z"
  },
  {
    "id": "game-198",
    "bggId": 204650,
    "titleKr": "Alchemists: The King's Golem",
    "titleEn": "Alchemists: The King's Golem",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/VQUCSJnGsJHDjFXZr54klQ__original/img/9_3PigpZ3FlGVfXKyfeTYIq7Ib8=/0x0/filters:format(jpeg)/pic3195558.jpg",
    "thumbnail": "https://cf.geekdo-images.com/VQUCSJnGsJHDjFXZr54klQ__thumb/img/Ajag423lRpanBTKImRQov6ROFn0=/fit-in/200x150/filters:strip_icc()/pic3195558.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 120,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Matúš Kotry"
    ],
    "createdAt": "2024-01-28T20:09:17.000Z",
    "updatedAt": "2024-01-28T20:09:17.000Z"
  },
  {
    "id": "game-195",
    "bggId": 386502,
    "titleKr": "Amritsar: The Golden Temple",
    "titleEn": "Amritsar: The Golden Temple",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/GF21q3A5-3xNClH8MiwAbg__original/img/S9_dADYzAD71tHU3aQQ0w8tcgDo=/0x0/filters:format(jpeg)/pic7526676.jpg",
    "thumbnail": "https://cf.geekdo-images.com/GF21q3A5-3xNClH8MiwAbg__thumb/img/zmyjCI6wyL92DqszJC4FI_s2syo=/fit-in/200x150/filters:strip_icc()/pic7526676.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "David Heras Pino"
    ],
    "createdAt": "2024-01-28T20:09:16.000Z",
    "updatedAt": "2024-01-28T20:09:16.000Z"
  },
  {
    "id": "game-182",
    "bggId": 185343,
    "titleKr": "Anachrony",
    "titleEn": "Anachrony",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/31quLNzteInnevVRAABoow__original/img/3KfMPSj7jjhG0g5lQBsO-bn67D0=/0x0/filters:format(jpeg)/pic3499707.jpg",
    "thumbnail": "https://cf.geekdo-images.com/31quLNzteInnevVRAABoow__thumb/img/a0G93aMOKp3_mmnCURYWuZd210U=/fit-in/200x150/filters:strip_icc()/pic3499707.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Dávid Turczi",
      "Richard Amann",
      "Viktor Peter"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-81",
    "bggId": 285967,
    "titleKr": "Ankh: Gods of Egypt",
    "titleEn": "Ankh: Gods of Egypt",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/_al0scMG_pQfGVM31Scf1Q__original/img/h4jBTaOjznJgWELa6tTrfPqqSeA=/0x0/filters:format(jpeg)/pic6107853.jpg",
    "thumbnail": "https://cf.geekdo-images.com/_al0scMG_pQfGVM31Scf1Q__thumb/img/OMVAMJX95HNO-vSRdk-kGjAzzBY=/fit-in/200x150/filters:strip_icc()/pic6107853.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 90,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Eric M. Lang"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-200",
    "bggId": 344105,
    "titleKr": "Anunnaki: Dawn of the Gods",
    "titleEn": "Anunnaki: Dawn of the Gods",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/4LzP3k9XhXmkr21w1-fBbg__original/img/VbsphF0hF2QWcnPeujJWoYQqP_M=/0x0/filters:format(png)/pic7812441.png",
    "thumbnail": "https://cf.geekdo-images.com/4LzP3k9XhXmkr21w1-fBbg__thumb/img/6Y1_Q1Abt0zvDDBCkIcId3qil5Q=/fit-in/200x150/filters:strip_icc()/pic7812441.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Simone Luciani",
      "Danilo Sabia"
    ],
    "createdAt": "2024-01-28T20:09:18.000Z",
    "updatedAt": "2024-01-28T20:09:18.000Z"
  },
  {
    "id": "game-201",
    "bggId": 400314,
    "titleKr": "Apiary",
    "titleEn": "Apiary",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/dT1vJbUizZFmJAphKg-byA__original/img/lQe_6iIMvCPrG9aH65RjiWL3s2Q=/0x0/filters:format(png)/pic7720813.png",
    "thumbnail": "https://cf.geekdo-images.com/dT1vJbUizZFmJAphKg-byA__thumb/img/X3_vUM9wGDabo0Goc3iCZE7IfWM=/fit-in/200x150/filters:strip_icc()/pic7720813.png",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Connie Vogelmann"
    ],
    "createdAt": "2024-01-28T20:09:18.000Z",
    "updatedAt": "2024-01-28T20:09:18.000Z"
  },
  {
    "id": "game-206",
    "bggId": 371077,
    "titleKr": "Arborea",
    "titleEn": "Arborea",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/KHT8Ex0wvRs5wAWPNo3xNg__original/img/iMUGBOw1H51W0thj6tgXMrnPf6Q=/0x0/filters:format(png)/pic7230067.png",
    "thumbnail": "https://cf.geekdo-images.com/KHT8Ex0wvRs5wAWPNo3xNg__thumb/img/3RNpeYrdE_ns9Q9MEJgjks73ESg=/fit-in/200x150/filters:strip_icc()/pic7230067.png",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "bggRating": 7.6,
    "userRating": 7.6,
    "status": "owned",
    "designers": [
      "Dani Garcia"
    ],
    "createdAt": "2024-04-10T19:49:23.000Z",
    "updatedAt": "2024-04-10T19:49:23.000Z"
  },
  {
    "id": "game-132",
    "bggId": 140934,
    "titleKr": "Arboretum",
    "titleEn": "Arboretum",
    "yearPublished": 2015,
    "image": "https://cf.geekdo-images.com/XYOn10oXBrDqHySf0jvnyQ__original/img/RMi0pEsP8agfH-tgYkeRGilD3oo=/0x0/filters:format(png)/pic4172124.png",
    "thumbnail": "https://cf.geekdo-images.com/XYOn10oXBrDqHySf0jvnyQ__thumb/img/X6V1M2nZOinTgwE0KIBfup_QrCw=/fit-in/200x150/filters:strip_icc()/pic4172124.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "owned",
    "designers": [
      "Dan Cassar"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-110",
    "bggId": 179803,
    "titleKr": "Arcadia Quest: Inferno",
    "titleEn": "Arcadia Quest: Inferno",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/1nK95H00UfV88m7aXSPmXA__original/img/tlLePVCNTRX_690ubGro-ZMzM3c=/0x0/filters:format(jpeg)/pic3836517.jpg",
    "thumbnail": "https://cf.geekdo-images.com/1nK95H00UfV88m7aXSPmXA__thumb/img/U7ic5aJM0fo42OaiK8pjTGdq0ko=/fit-in/200x150/filters:strip_icc()/pic3836517.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Thiago Aranha",
      "Guilherme Goulart",
      "Eric M. Lang",
      "Fred Perret"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-150",
    "bggId": 236457,
    "titleKr": "Architects of the West Kingdom",
    "titleEn": "Architects of the West Kingdom",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/OAX7HfOz-9N60StgADzd0g__original/img/x2Y_DYWrzzleMETfnu7Jm3R8jPo=/0x0/filters:format(png)/pic3781944.png",
    "thumbnail": "https://cf.geekdo-images.com/OAX7HfOz-9N60StgADzd0g__thumb/img/sBMaoJ-Kz74lJ6djcl-NNMTr0Wo=/fit-in/200x150/filters:strip_icc()/pic3781944.png",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 80,
    "status": "owned",
    "designers": [
      "S J Macdonald",
      "Shem Phillips"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-3",
    "bggId": 342942,
    "titleKr": "Ark Nova",
    "titleEn": "Ark Nova",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__original/img/g4S18szTdrXCdIwVKzMKrZrYAcM=/0x0/filters:format(jpeg)/pic6293412.jpg",
    "thumbnail": "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__thumb/img/4KuHNTWSMPf8vTNDKSRMMI3oOv8=/fit-in/200x150/filters:strip_icc()/pic6293412.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 150,
    "status": "owned",
    "designers": [
      "Mathias Wigge"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-4",
    "bggId": 342479,
    "titleKr": "Assassin's Creed: Valhalla Orlog Dice Game",
    "titleEn": "Assassin's Creed: Valhalla Orlog Dice Game",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/gMOwN7M4ELcxSSXm1H4WGg__original/img/MouwSh8weYzWd6hFP3mB6ykrI_g=/0x0/filters:format(png)/pic6610983.png",
    "thumbnail": "https://cf.geekdo-images.com/gMOwN7M4ELcxSSXm1H4WGg__thumb/img/9wLVmnksazph5E6RM_G_xHJs2es=/fit-in/200x150/filters:strip_icc()/pic6610983.png",
    "minPlayers": 2,
    "maxPlayers": 2,
    "minPlaytime": 10,
    "maxPlaytime": 30,
    "status": "played",
    "designers": [],
    "createdAt": "2022-04-10T15:05:04.000Z",
    "updatedAt": "2022-04-10T15:05:04.000Z"
  },
  {
    "id": "game-258",
    "bggId": 205045,
    "titleKr": "Avenue",
    "titleEn": "Avenue",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/BDbJI4_g5FIpblE7OU0vog__original/img/mMuUsJD1XIr9sZH1zRqtYu6q7hQ=/0x0/filters:format(jpeg)/pic3113106.jpg",
    "thumbnail": "https://cf.geekdo-images.com/BDbJI4_g5FIpblE7OU0vog__thumb/img/0tuyJAX1b-qySV2lebkzUFQM-Kg=/fit-in/200x150/filters:strip_icc()/pic3113106.jpg",
    "minPlayers": 1,
    "maxPlayers": 10,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "bggRating": 6.8,
    "userRating": 6.8,
    "status": "played",
    "designers": [
      "Kristian Amundsen Østby",
      "Eilif Svensson"
    ],
    "createdAt": "2025-01-26T11:29:00.000Z",
    "updatedAt": "2025-01-26T11:29:00.000Z"
  },
  {
    "id": "game-241",
    "bggId": 188866,
    "titleKr": "Awkward Guests: The Walton Case",
    "titleEn": "Awkward Guests: The Walton Case",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/Awopfw5_5Qyh-7YcSbtudA__original/img/GxYtTK43oCTDn2J3pyukUw07bKo=/0x0/filters:format(jpeg)/pic4870482.jpg",
    "thumbnail": "https://cf.geekdo-images.com/Awopfw5_5Qyh-7YcSbtudA__thumb/img/HHn3So0Mum6VZliDmEnB2LwfeQ0=/fit-in/200x150/filters:strip_icc()/pic4870482.jpg",
    "minPlayers": 1,
    "maxPlayers": 8,
    "minPlaytime": 45,
    "maxPlaytime": 75,
    "bggRating": 7.6,
    "userRating": 7.6,
    "status": "wishlist",
    "designers": [
      "Ron Gonzalo García"
    ],
    "createdAt": "2024-11-02T14:47:39.000Z",
    "updatedAt": "2024-11-02T14:47:39.000Z"
  },
  {
    "id": "game-5",
    "bggId": 230802,
    "titleKr": "Azul",
    "titleEn": "Azul",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/tz19PfklMdAdjxV9WArraA__original/img/eFRt3o7W6YltnrkqpiSOKr2rKCw=/0x0/filters:format(jpeg)/pic3718275.jpg",
    "thumbnail": "https://cf.geekdo-images.com/tz19PfklMdAdjxV9WArraA__thumb/img/debo694HgBaIBeNGyxu1ELUbQGA=/fit-in/200x150/filters:strip_icc()/pic3718275.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Michael Kiesling"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-171",
    "bggId": 256226,
    "titleKr": "Azul: Stained Glass of Sintra",
    "titleEn": "Azul: Stained Glass of Sintra",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/RrYR1xB8H7D1B5GwNV8jgQ__original/img/unI8OEWp9Fdv3D_dLahPPdLG1qc=/0x0/filters:format(jpeg)/pic4212417.jpg",
    "thumbnail": "https://cf.geekdo-images.com/RrYR1xB8H7D1B5GwNV8jgQ__thumb/img/vUGmS3mniayuyVOG-1ulrVGnjSg=/fit-in/200x150/filters:strip_icc()/pic4212417.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Michael Kiesling"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-229",
    "bggId": 383607,
    "titleKr": "Barcelona",
    "titleEn": "Barcelona",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/clBx1kfB-8OpO86B2-vsgg__original/img/4Wmp2fgPbYKAfL4UC3QXSv9YATM=/0x0/filters:format(jpeg)/pic7442376.jpg",
    "thumbnail": "https://cf.geekdo-images.com/clBx1kfB-8OpO86B2-vsgg__thumb/img/8w625ctGlolYNodQdbXJtyOC3wg=/fit-in/200x150/filters:strip_icc()/pic7442376.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "owned",
    "designers": [
      "Dani Garcia"
    ],
    "createdAt": "2024-07-13T16:59:35.000Z",
    "updatedAt": "2024-07-13T16:59:35.000Z"
  },
  {
    "id": "game-6",
    "bggId": 223740,
    "titleKr": "Bargain Quest",
    "titleEn": "Bargain Quest",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/BnwA7yXhQDzOciCacJ98HQ__original/img/bZhH2ApXE6jEMkDcRk957TAHUrI=/0x0/filters:format(png)/pic4295302.png",
    "thumbnail": "https://cf.geekdo-images.com/BnwA7yXhQDzOciCacJ98HQ__thumb/img/5CFA6JqHAoXqY7XaQ2Ol4jtCG_4=/fit-in/200x150/filters:strip_icc()/pic4295302.png",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [
      "Jonathan Ying"
    ],
    "createdAt": "2021-04-28T21:43:47.000Z",
    "updatedAt": "2021-04-28T21:43:47.000Z"
  },
  {
    "id": "game-7",
    "bggId": 251247,
    "titleKr": "Barrage",
    "titleEn": "Barrage",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/jEPmWvvYpqkWrKOzqIHFsg__original/img/rkHKwkUqpQC7PAGG7n2gbrcQiUY=/0x0/filters:format(png)/pic4336469.png",
    "thumbnail": "https://cf.geekdo-images.com/jEPmWvvYpqkWrKOzqIHFsg__thumb/img/kMLIpeqA6UcUvQg2AdMwwQoEIfU=/fit-in/200x150/filters:strip_icc()/pic4336469.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Tommaso Battista",
      "Simone Luciani"
    ],
    "createdAt": "2026-08-15T18:54:43.000Z",
    "updatedAt": "2026-08-15T18:54:43.000Z"
  },
  {
    "id": "game-356",
    "bggId": 304453,
    "titleKr": "Barrage: 5th Player Expansion",
    "titleEn": "Barrage: 5th Player Expansion",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/tSAVQDXctg2Vp_lt9KN1Wg__original/img/xI5Nyx0_G4MfC2a0PWU0kOn5fxk=/0x0/filters:format(jpeg)/pic6773567.jpg",
    "thumbnail": "https://cf.geekdo-images.com/tSAVQDXctg2Vp_lt9KN1Wg__small/img/9L0uL8YVwsltcTUxlCd902ZQnlU=/fit-in/200x150/filters:strip_icc()/pic6773567.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "played",
    "designers": [
      "Tommaso Battista",
      "Simone Luciani"
    ],
    "createdAt": "2026-08-15T16:19:55.000Z",
    "updatedAt": "2026-08-15T16:19:55.000Z"
  },
  {
    "id": "game-298",
    "bggId": 760,
    "titleKr": "Battle Line",
    "titleEn": "Battle Line",
    "yearPublished": 2000,
    "image": "https://cf.geekdo-images.com/RnbZfspkPRfr6EMkRkac2Q__original/img/hANctLTf503m6ZxkyYgPMZTHXRE=/0x0/filters:format(jpeg)/pic149717.jpg",
    "thumbnail": "https://cf.geekdo-images.com/RnbZfspkPRfr6EMkRkac2Q__thumb/img/HUtyu4RUS0dBnNNSVGO88hWtHnw=/fit-in/200x150/filters:strip_icc()/pic149717.jpg",
    "minPlayers": 2,
    "maxPlayers": 2,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 7.4,
    "userRating": 7.4,
    "status": "played",
    "designers": [
      "Reiner Knizia"
    ],
    "createdAt": "2025-06-22T10:29:20.000Z",
    "updatedAt": "2025-06-22T10:29:20.000Z"
  },
  {
    "id": "game-349",
    "bggId": 435759,
    "titleKr": "Beaver House",
    "titleEn": "Beaver House",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/HRYft1NmWqf9oBYHM100ew__original/img/nNEdni2fhDMTqu7_RAOPNRX0No4=/0x0/filters:format(jpeg)/pic8616447.jpg",
    "thumbnail": "https://cf.geekdo-images.com/HRYft1NmWqf9oBYHM100ew__small/img/RtSQWBJU2aUkUYxwfdGooSyNIIA=/fit-in/200x150/filters:strip_icc()/pic8616447.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 20,
    "maxPlaytime": 20,
    "bggRating": 6.6,
    "userRating": 6.6,
    "status": "owned",
    "designers": [
      "Eddie Lee"
    ],
    "createdAt": "2026-07-25T10:59:35.000Z",
    "updatedAt": "2026-07-25T10:59:35.000Z"
  },
  {
    "id": "game-259",
    "bggId": 421310,
    "titleKr": "Beyond the Horizon",
    "titleEn": "Beyond the Horizon",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/yaCOVF7EN1T3y1RDLPqpXg__original/img/PhkICKHT-Epybo34UWro5-_kp4k=/0x0/filters:format(jpeg)/pic8209513.jpg",
    "thumbnail": "https://cf.geekdo-images.com/yaCOVF7EN1T3y1RDLPqpXg__thumb/img/nIZGWEy6CgL_j7qmkIhDW9hlt-c=/fit-in/200x150/filters:strip_icc()/pic8209513.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "bggRating": 7.2,
    "userRating": 7.2,
    "status": "owned",
    "designers": [
      "Dennis K. Chan",
      "Adam Hill",
      "Ben Pinchback",
      "Matt Riddle"
    ],
    "createdAt": "2025-01-26T14:19:54.000Z",
    "updatedAt": "2025-01-26T14:19:54.000Z"
  },
  {
    "id": "game-8",
    "titleKr": "binome",
    "titleEn": "binome",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [],
    "createdAt": "2021-05-09T17:53:18.000Z",
    "updatedAt": "2021-05-09T17:53:18.000Z"
  },
  {
    "id": "game-250",
    "bggId": 420805,
    "titleKr": "Black Forest",
    "titleEn": "Black Forest",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/zyc92pV4Mn2G6HCegMGPWQ__original/img/39E8tEi-2NbBcXmduY5XHF1GeBU=/0x0/filters:format(jpeg)/pic8194217.jpg",
    "thumbnail": "https://cf.geekdo-images.com/zyc92pV4Mn2G6HCegMGPWQ__thumb/img/eBQt7m5f9RtsZfBgCNhJER6f5CA=/fit-in/200x150/filters:strip_icc()/pic8194217.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "bggRating": 7.7,
    "userRating": 7.7,
    "status": "owned",
    "designers": [
      "Tido Lorenz",
      "Uwe Rosenberg"
    ],
    "createdAt": "2024-12-14T12:05:55.000Z",
    "updatedAt": "2024-12-14T12:05:55.000Z"
  },
  {
    "id": "game-9",
    "bggId": 239942,
    "titleKr": "Black Rose Wars",
    "titleEn": "Black Rose Wars",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/rr2DdYF5ccQpKpvWsG7EoA__original/img/rET6QKUc2m-4ED8dmNpYZ1Wlqn4=/0x0/filters:format(jpeg)/pic3973771.jpg",
    "thumbnail": "https://cf.geekdo-images.com/rr2DdYF5ccQpKpvWsG7EoA__thumb/img/bndeEEnQk_5mNCEcNu09kbDp6GU=/fit-in/200x150/filters:strip_icc()/pic3973771.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Marco Montanaro"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-199",
    "bggId": 342444,
    "titleKr": "Black Rose Wars: Rebirth",
    "titleEn": "Black Rose Wars: Rebirth",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/cwQZOU3cNOTta6nuT77byg__original/img/e3jnVmxgpisZ32yT3V_-J5hlLU0=/0x0/filters:format(png)/pic6279361.png",
    "thumbnail": "https://cf.geekdo-images.com/cwQZOU3cNOTta6nuT77byg__thumb/img/ktq00DLZxfyjPhrAvHe-V48i-Kg=/fit-in/200x150/filters:strip_icc()/pic6279361.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Andrea Colletti",
      "Diego Fonseca",
      "Marco Montanaro"
    ],
    "createdAt": "2024-01-28T20:09:18.000Z",
    "updatedAt": "2024-01-28T20:09:18.000Z"
  },
  {
    "id": "game-98",
    "bggId": 231218,
    "titleKr": "Black Sonata",
    "titleEn": "Black Sonata",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/UgE_mVxqPMMNKOvXWqC71g__original/img/x6WHFifE2JApTb_Gpg4o99c7xJw=/0x0/filters:format(jpeg)/pic3657983.jpg",
    "thumbnail": "https://cf.geekdo-images.com/UgE_mVxqPMMNKOvXWqC71g__thumb/img/slBCxAKehDCtJxFCwUCAuu_Opwg=/fit-in/200x150/filters:strip_icc()/pic3657983.jpg",
    "minPlayers": 1,
    "maxPlayers": 1,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "owned",
    "designers": [
      "John Kean"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-320",
    "bggId": 446181,
    "titleKr": "Blind Jack",
    "titleEn": "Blind Jack",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/6TlFH_pzkAkIWBb8gvZYDg__original/img/wTNhS0HJLYHM9mMXfFX5a67aZZY=/0x0/filters:format(png)/pic8894537.png",
    "thumbnail": "https://cf.geekdo-images.com/6TlFH_pzkAkIWBb8gvZYDg__small/img/pShGO9-zJogSmtuAHvnwMDvs6NA=/fit-in/200x150/filters:strip_icc()/pic8894537.png",
    "minPlayers": 2,
    "maxPlayers": 12,
    "minPlaytime": 10,
    "maxPlaytime": 20,
    "bggRating": 6.6,
    "userRating": 6.6,
    "status": "played",
    "designers": [
      "Alexis Leclercq",
      "Nicolas Méra",
      "Marc Méra",
      "Maxime Turrière"
    ],
    "createdAt": "2025-10-26T13:32:25.000Z",
    "updatedAt": "2025-10-26T13:32:25.000Z"
  },
  {
    "id": "game-173",
    "bggId": 170216,
    "titleKr": "Blood Rage",
    "titleEn": "Blood Rage",
    "yearPublished": 2015,
    "image": "https://cf.geekdo-images.com/HkZSJfQnZ3EpS214xtuplg__original/img/Myy6IPDJDzLoPdXrPXVZcddBQoQ=/0x0/filters:format(jpeg)/pic2439223.jpg",
    "thumbnail": "https://cf.geekdo-images.com/HkZSJfQnZ3EpS214xtuplg__thumb/img/NLhVdU8xazrgS5dA6nVCYmN2DNI=/fit-in/200x150/filters:strip_icc()/pic2439223.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "prevowned",
    "designers": [
      "Eric M. Lang"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-119",
    "bggId": 244331,
    "titleKr": "Blue Lagoon",
    "titleEn": "Blue Lagoon",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/wFggDB9IbU47-drR4GUQBw__original/img/L4ZGFJOUs0huPAZWNYa8Ol_ra_A=/0x0/filters:format(png)/pic4122624.png",
    "thumbnail": "https://cf.geekdo-images.com/wFggDB9IbU47-drR4GUQBw__thumb/img/mSvWn1J5pCwZGLqeiCQkTC7W2U4=/fit-in/200x150/filters:strip_icc()/pic4122624.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Reiner Knizia"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-257",
    "bggId": 11,
    "titleKr": "Bonanza",
    "titleEn": "Bohnanza",
    "yearPublished": 1997,
    "image": "https://cf.geekdo-images.com/8SADtu_4zBH_UJrCo935Iw__original/img/RNuAr2CDbxE3XzeJVkxj4Df3eVM=/0x0/filters:format(jpeg)/pic6348964.jpg",
    "thumbnail": "https://cf.geekdo-images.com/8SADtu_4zBH_UJrCo935Iw__thumb/img/vwTEQOWA3Mw__ztkTMulOgJ82Pw=/fit-in/200x150/filters:strip_icc()/pic6348964.jpg",
    "minPlayers": 2,
    "maxPlayers": 7,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "bggRating": 7.1,
    "userRating": 7.1,
    "status": "played",
    "designers": [
      "Uwe Rosenberg"
    ],
    "createdAt": "2025-01-26T11:23:24.000Z",
    "updatedAt": "2025-01-26T11:23:24.000Z"
  },
  {
    "id": "game-215",
    "bggId": 383579,
    "titleKr": "BOOoop.",
    "titleEn": "BOOoop.",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/8BBZ9D9xq4hxgiHoF6IfQw__original/img/IqQrGkDo-cqCXQVjgTPJusWYgEs=/0x0/filters:format(png)/pic7442719.png",
    "thumbnail": "https://cf.geekdo-images.com/8BBZ9D9xq4hxgiHoF6IfQw__thumb/img/QG4fEdIVRuf1mOo56TX7rkMbruU=/fit-in/200x150/filters:strip_icc()/pic7442719.png",
    "minPlayers": 2,
    "maxPlayers": 2,
    "minPlaytime": 25,
    "maxPlaytime": 35,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "owned",
    "designers": [
      "Scott Brady"
    ],
    "createdAt": "2024-04-20T17:46:54.000Z",
    "updatedAt": "2024-04-20T17:46:54.000Z"
  },
  {
    "id": "game-10",
    "bggId": 224517,
    "titleKr": "Brass: Birmingham",
    "titleEn": "Brass: Birmingham",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__original/img/FpyxH41Y6_ROoePAilPNEhXnzO8=/0x0/filters:format(jpeg)/pic3490053.jpg",
    "thumbnail": "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__thumb/img/o18rjEemoWaVru9Y2TyPwuIaRfE=/fit-in/200x150/filters:strip_icc()/pic3490053.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Gavan Brown",
      "Matt Tolman",
      "Martin Wallace"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-97",
    "bggId": 28720,
    "titleKr": "Brass: Lancashire",
    "titleEn": "Brass: Lancashire",
    "yearPublished": 2007,
    "image": "https://cf.geekdo-images.com/tHVtPzu82mBpeQbbZkV6EA__original/img/3ffdJj5Pz6HQrg09Kh8ecTen-TY=/0x0/filters:format(jpeg)/pic3469216.jpg",
    "thumbnail": "https://cf.geekdo-images.com/tHVtPzu82mBpeQbbZkV6EA__thumb/img/AghH1bAEhqzvyRcP3cy5G-rz0So=/fit-in/200x150/filters:strip_icc()/pic3469216.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "prevowned",
    "designers": [
      "Martin Wallace"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-233",
    "bggId": 371055,
    "titleKr": "Buffet Boss",
    "titleEn": "Buffet Boss",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/7Mb5W1k3KeOSuFdCp3EqUA__original/img/rriViJDYHqfEqk0RM-DEzP6w7Ac=/0x0/filters:format(jpeg)/pic7079382.jpg",
    "thumbnail": "https://cf.geekdo-images.com/7Mb5W1k3KeOSuFdCp3EqUA__thumb/img/0KVlPAKRu9tApGf1sZ6ZBIk62GA=/fit-in/200x150/filters:strip_icc()/pic7079382.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 15,
    "maxPlaytime": 25,
    "bggRating": 7,
    "userRating": 7,
    "status": "played",
    "designers": [
      "Daryl Chow"
    ],
    "createdAt": "2024-08-10T14:50:29.000Z",
    "updatedAt": "2024-08-10T14:50:29.000Z"
  },
  {
    "id": "game-102",
    "bggId": 334649,
    "titleKr": "Bullet: Orange",
    "titleEn": "Bullet: Orange",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/WwNH9m66xQrp-B7Pqe9yBw__original/img/9dsC0Jdd8ULe-zNV6BBlmvcY9ZA=/0x0/filters:format(png)/pic6071353.png",
    "thumbnail": "https://cf.geekdo-images.com/WwNH9m66xQrp-B7Pqe9yBw__thumb/img/WZZRuEd8q1AAvlzdb9FTRq9rmLU=/fit-in/200x150/filters:strip_icc()/pic6071353.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 15,
    "maxPlaytime": 30,
    "status": "owned",
    "designers": [
      "Joshua Van Laningham"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-121",
    "bggId": 307305,
    "titleKr": "Bullet♥︎",
    "titleEn": "Bullet♥︎",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/315gnIdET7dlQ_fASt8p0w__original/img/X2MDGNIMouqDtC6617rzlxW5LDw=/0x0/filters:format(jpeg)/pic6007944.jpg",
    "thumbnail": "https://cf.geekdo-images.com/315gnIdET7dlQ_fASt8p0w__thumb/img/ZUVCes8DtY3pYnUJ3zghUkhT3fQ=/fit-in/200x150/filters:strip_icc()/pic6007944.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 10,
    "maxPlaytime": 20,
    "status": "owned",
    "designers": [
      "Joshua Van Laningham"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-91",
    "bggId": 343844,
    "titleKr": "Bullet⭐",
    "titleEn": "Bullet⭐",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/2CkIttJMYQ4zVwdM4PeRGA__original/img/qkzmh4m5UVZqztGDRVumajcTD4k=/0x0/filters:format(png)/pic6314116.png",
    "thumbnail": "https://cf.geekdo-images.com/2CkIttJMYQ4zVwdM4PeRGA__thumb/img/8ZIoSCs8Xq7l3sRjB-nBSG6_jzQ=/fit-in/200x150/filters:strip_icc()/pic6314116.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "status": "owned",
    "designers": [
      "Joshua Van Laningham"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-112",
    "bggId": 184921,
    "titleKr": "Bunny Kingdom",
    "titleEn": "Bunny Kingdom",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/Noz8-u1ba828WUv69pTXKg__original/img/UsuOzkr2-QWs5KPyOhWS5s02Uug=/0x0/filters:format(jpeg)/pic3613444.jpg",
    "thumbnail": "https://cf.geekdo-images.com/Noz8-u1ba828WUv69pTXKg__thumb/img/17lnz18gnbQGnnTY8o07X2kxwbs=/fit-in/200x150/filters:strip_icc()/pic3613444.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 40,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Richard Garfield"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-245",
    "bggId": 116954,
    "titleKr": "Butterfly Garden",
    "titleEn": "Butterfly Garden",
    "yearPublished": 2012,
    "image": "https://cf.geekdo-images.com/M0ZpA1fZEv5rxNa7-i-DaA__original/img/gEVhhi0oThFzKkSvBnIVhX06u1w=/0x0/filters:format(jpeg)/pic7961037.jpg",
    "thumbnail": "https://cf.geekdo-images.com/M0ZpA1fZEv5rxNa7-i-DaA__thumb/img/jUkutHcSpODn5UO7N2Cq_nfof3s=/fit-in/200x150/filters:strip_icc()/pic7961037.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 6.8,
    "userRating": 6.8,
    "status": "owned",
    "designers": [
      "Reiner Knizia"
    ],
    "createdAt": "2024-11-16T17:39:04.000Z",
    "updatedAt": "2024-11-16T17:39:04.000Z"
  },
  {
    "id": "game-11",
    "bggId": 283155,
    "titleKr": "Calico",
    "titleEn": "Calico",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/t8bTlZmxz6PiskMSjcBHcw__original/img/fDRiccme7OA8fWdl8FVCokv5eko=/0x0/filters:format(jpeg)/pic4815033.jpg",
    "thumbnail": "https://cf.geekdo-images.com/t8bTlZmxz6PiskMSjcBHcw__thumb/img/TByBGUDO_jNVxDaOviRWOFtu9fk=/fit-in/200x150/filters:strip_icc()/pic4815033.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Kevin Russ"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-12",
    "bggId": 310873,
    "titleKr": "Carnegie",
    "titleEn": "Carnegie",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/QVmcfAXMs_JTKSDMRb_XBA__original/img/zV3Vzl-LhODoSRApfKkt_hJtbjI=/0x0/filters:format(jpeg)/pic5707830.jpg",
    "thumbnail": "https://cf.geekdo-images.com/QVmcfAXMs_JTKSDMRb_XBA__thumb/img/5YYI8RIRPJKZucMmKJIWkHvb1HY=/fit-in/200x150/filters:strip_icc()/pic5707830.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 120,
    "maxPlaytime": 180,
    "status": "played",
    "designers": [
      "Xavier Georges"
    ],
    "createdAt": "2022-04-17T10:54:56.000Z",
    "updatedAt": "2022-04-17T10:54:56.000Z"
  },
  {
    "id": "game-13",
    "bggId": 263918,
    "titleKr": "Cartographers",
    "titleEn": "Cartographers",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/GifbnAmsA4lfEcDkeaC9VA__original/img/YzJORdIDNza8kmrY6KEU_h2p2Wo=/0x0/filters:format(png)/pic4397932.png",
    "thumbnail": "https://cf.geekdo-images.com/GifbnAmsA4lfEcDkeaC9VA__thumb/img/TTxZzwbna07hMcPQ0xaFtT10egE=/fit-in/200x150/filters:strip_icc()/pic4397932.png",
    "minPlayers": 1,
    "maxPlayers": 100,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "played",
    "designers": [
      "Jordy Adan"
    ],
    "createdAt": "2022-05-21T18:27:24.000Z",
    "updatedAt": "2022-05-21T18:27:24.000Z"
  },
  {
    "id": "game-124",
    "bggId": 315767,
    "titleKr": "Cartographers Heroes",
    "titleEn": "Cartographers Heroes",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/HIFpoE6wwuriOREJmqizPw__original/img/14Jiq17EwZ0bKZhyXD3LjcXbTCs=/0x0/filters:format(png)/pic5567490.png",
    "thumbnail": "https://cf.geekdo-images.com/HIFpoE6wwuriOREJmqizPw__thumb/img/s-5zTf3OxkhmkZMfNCeLexMW-pU=/fit-in/200x150/filters:strip_icc()/pic5567490.png",
    "minPlayers": 1,
    "maxPlayers": 100,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Jordy Adan",
      "John Brieger"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-14",
    "bggId": 295947,
    "titleKr": "Cascadia",
    "titleEn": "Cascadia",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__original/img/B374C04Eip7fmQBGJzgiOTp-jyQ=/0x0/filters:format(jpeg)/pic5100691.jpg",
    "thumbnail": "https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__thumb/img/tVSFjSxYEcw7sKj3unIIQV8kxoc=/fit-in/200x150/filters:strip_icc()/pic5100691.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "played",
    "designers": [
      "Randy Flynn"
    ],
    "createdAt": "2022-04-19T20:38:20.000Z",
    "updatedAt": "2022-04-19T20:38:20.000Z"
  },
  {
    "id": "game-96",
    "bggId": 238638,
    "titleKr": "Castell",
    "titleEn": "Castell",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/T421NvY_hmmQ8JNaOi4c8Q__original/img/sZQyw8n3eoHZsJXZIXJ51MBvsYI=/0x0/filters:format(png)/pic3984592.png",
    "thumbnail": "https://cf.geekdo-images.com/T421NvY_hmmQ8JNaOi4c8Q__thumb/img/bQ-1UQ7A39_Mo2039HyYNo0FifM=/fit-in/200x150/filters:strip_icc()/pic3984592.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Aaron Vanderbeek"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-334",
    "bggId": 416851,
    "titleKr": "Castle Combo",
    "titleEn": "Castle Combo",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/rGomBfj0FGrZM-w3h5HFWQ__original/img/XtVFdYXLAxdGOjQOGCkrms-hLUU=/0x0/filters:format(png)/pic8250341.png",
    "thumbnail": "https://cf.geekdo-images.com/rGomBfj0FGrZM-w3h5HFWQ__small/img/DnptKBxT6l_W2B3jGXdnEDEkDM0=/fit-in/200x150/filters:strip_icc()/pic8250341.png",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 10,
    "maxPlaytime": 25,
    "bggRating": 7.7,
    "userRating": 7.7,
    "status": "played",
    "designers": [
      "Grégory Grard",
      "Mathieu Roussel"
    ],
    "createdAt": "2026-01-24T18:07:56.000Z",
    "updatedAt": "2026-01-24T18:07:56.000Z"
  },
  {
    "id": "game-122",
    "bggId": 345972,
    "titleKr": "Cat in the Box: Deluxe Edition",
    "titleEn": "Cat in the Box: Deluxe Edition",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/M1gT_9LjNqUzAx3RAqdGRQ__original/img/euRCLPNg4Zpqqtvwdcjvbrna9JQ=/0x0/filters:format(jpeg)/pic6731829.jpg",
    "thumbnail": "https://cf.geekdo-images.com/M1gT_9LjNqUzAx3RAqdGRQ__thumb/img/3I1JU_hP5YtIg6RzcJePmmNOWAQ=/fit-in/200x150/filters:strip_icc()/pic6731829.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 20,
    "maxPlaytime": 40,
    "status": "owned",
    "designers": [
      "Muneyuki Yokouchi (横内宗幸)"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-145",
    "bggId": 228504,
    "titleKr": "Cat Lady",
    "titleEn": "Cat Lady",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/tnx6ExxyUmIlga9tFSrR6g__original/img/RvwGz70uylQGeBYErRTWwP1Gr9M=/0x0/filters:format(jpeg)/pic3864115.jpg",
    "thumbnail": "https://cf.geekdo-images.com/tnx6ExxyUmIlga9tFSrR6g__thumb/img/jHvb__-N4QCSB8rhTKXzCxWOWcU=/fit-in/200x150/filters:strip_icc()/pic3864115.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 15,
    "maxPlaytime": 30,
    "status": "prevowned",
    "designers": [
      "Josh Wood"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-85",
    "bggId": 175117,
    "titleKr": "Celestia",
    "titleEn": "Celestia",
    "yearPublished": 2015,
    "image": "https://cf.geekdo-images.com/8kl6m6m_unthBPw9SxoDQQ__original/img/FtecAcFxPelZCfbWhZlo85uF2Rg=/0x0/filters:format(png)/pic6973677.png",
    "thumbnail": "https://cf.geekdo-images.com/8kl6m6m_unthBPw9SxoDQQ__thumb/img/vK6rBE3ZjolzG6jEVxJj49MBIc4=/fit-in/200x150/filters:strip_icc()/pic6973677.png",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "owned",
    "designers": [
      "Aaron Weissblum"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-138",
    "bggId": 242574,
    "titleKr": "Century: Eastern Wonders",
    "titleEn": "Century: Eastern Wonders",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/l1xKAcYniMJQNq60H5DdEA__original/img/S37tZ3Ph0N2rryfkjcpgmU4qmCY=/0x0/filters:format(jpeg)/pic3898507.jpg",
    "thumbnail": "https://cf.geekdo-images.com/l1xKAcYniMJQNq60H5DdEA__thumb/img/G3If6BTwLAGBZm6u2b-N_YZcZ4k=/fit-in/200x150/filters:strip_icc()/pic3898507.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Emerson Matsuuchi"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-267",
    "bggId": 232832,
    "titleKr": "Century: Golem Edition",
    "titleEn": "Century: Golem Edition",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/1bihoShOuqaCuZJXB3Q2gQ__original/img/fvGzpqyud6Oz1BWOe4gItWWb8P0=/0x0/filters:format(jpeg)/pic3936124.jpg",
    "thumbnail": "https://cf.geekdo-images.com/1bihoShOuqaCuZJXB3Q2gQ__thumb/img/dvGQkdnwtcwAmcxHR_7J17OsLjQ=/fit-in/200x150/filters:strip_icc()/pic3936124.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "bggRating": 7.6,
    "userRating": 7.6,
    "status": "played",
    "designers": [
      "Emerson Matsuuchi"
    ],
    "createdAt": "2025-02-22T13:10:21.000Z",
    "updatedAt": "2025-02-22T13:10:21.000Z"
  },
  {
    "id": "game-15",
    "bggId": 209685,
    "titleKr": "Century: Spice Road",
    "titleEn": "Century: Spice Road",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/0_KEDk4lCvryf1Ju3YQJxA__original/img/zv58Iylm_N8nfVFgRkMVM0Q9Fh8=/0x0/filters:format(jpeg)/pic3339551.jpg",
    "thumbnail": "https://cf.geekdo-images.com/0_KEDk4lCvryf1Ju3YQJxA__thumb/img/FticvQmaT_qfdrX-hpSSK1ttRb0=/fit-in/200x150/filters:strip_icc()/pic3339551.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Emerson Matsuuchi"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-272",
    "bggId": 359970,
    "titleKr": "Challengers!",
    "titleEn": "Challengers!",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/GtLESZ4ZjqikK12bjBTmig__original/img/CHUtcmSXFs8LYKRHyUaeio2ra4U=/0x0/filters:format(jpeg)/pic7040521.jpg",
    "thumbnail": "https://cf.geekdo-images.com/GtLESZ4ZjqikK12bjBTmig__thumb/img/66Emb1wn1JD_5_9XdsYY2DgMVMA=/fit-in/200x150/filters:strip_icc()/pic7040521.jpg",
    "minPlayers": 1,
    "maxPlayers": 8,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "bggRating": 7.1,
    "userRating": 7.1,
    "status": "owned",
    "designers": [
      "Johannes Krenner",
      "Markus Slawitscheck"
    ],
    "createdAt": "2025-05-01T09:46:59.000Z",
    "updatedAt": "2025-05-01T09:46:59.000Z"
  },
  {
    "id": "game-283",
    "bggId": 1163,
    "titleKr": "Ciao, Ciao...",
    "titleEn": "Ciao, Ciao...",
    "yearPublished": 1997,
    "image": "https://cf.geekdo-images.com/Jvj9u2383gDQNj_KKx8TiA__original/img/bvcvEOEKdRCo5JV1W07DfnrI8is=/0x0/filters:format(jpeg)/pic5763720.jpg",
    "thumbnail": "https://cf.geekdo-images.com/Jvj9u2383gDQNj_KKx8TiA__thumb/img/czxTcPE5qQa164I7O8vuYvrxe4A=/fit-in/200x150/filters:strip_icc()/pic5763720.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 6,
    "userRating": 6,
    "status": "played",
    "designers": [
      "Alex Randolph"
    ],
    "createdAt": "2025-05-11T18:37:00.000Z",
    "updatedAt": "2025-05-11T18:37:00.000Z"
  },
  {
    "id": "game-109",
    "bggId": 205398,
    "titleKr": "Citadels",
    "titleEn": "Citadels",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/sHd0jkZZLDgixHjAXtn7kA__original/img/9n76iqzSN06hlbX4DuuPD6fSkHQ=/0x0/filters:format(jpeg)/pic3119514.jpg",
    "thumbnail": "https://cf.geekdo-images.com/sHd0jkZZLDgixHjAXtn7kA__thumb/img/HB0Z5D7uwBjf1lCCPjMck-5VP9A=/fit-in/200x150/filters:strip_icc()/pic3119514.jpg",
    "minPlayers": 2,
    "maxPlayers": 8,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "prevowned",
    "designers": [
      "Bruno Faidutti"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-312",
    "bggId": 400602,
    "titleKr": "Civolution",
    "titleEn": "Civolution",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/DahMIPzUpexvhUPAG3dGbA__original/img/P01WNfQ0kOF9n7FFNXpGCo-tueE=/0x0/filters:format(jpeg)/pic8303209.jpg",
    "thumbnail": "https://cf.geekdo-images.com/DahMIPzUpexvhUPAG3dGbA__thumb/img/uzogBNlLw3GBuGa1T6_8oQbADnY=/fit-in/200x150/filters:strip_icc()/pic8303209.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 180,
    "bggRating": 8.2,
    "userRating": 8.2,
    "status": "played",
    "designers": [
      "Stefan Feld"
    ],
    "createdAt": "2025-08-24T12:40:41.000Z",
    "updatedAt": "2025-08-24T12:40:41.000Z"
  },
  {
    "id": "game-108",
    "bggId": 201808,
    "titleKr": "Clank!: A Deck-Building Adventure",
    "titleEn": "Clank!: A Deck-Building Adventure",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/DPjV1iI0ygo5Bl3XLNRiIg__original/img/cXqOdM3BLyIeRt0GP3M3V--gF1M=/0x0/filters:format(jpeg)/pic4449526.jpg",
    "thumbnail": "https://cf.geekdo-images.com/DPjV1iI0ygo5Bl3XLNRiIg__thumb/img/O2WnqJew5gNjQqPUH3gqmTBc1pQ=/fit-in/200x150/filters:strip_icc()/pic4449526.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "prevowned",
    "designers": [
      "Paul Dennen"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-210",
    "bggId": 272739,
    "titleKr": "Clinic: Deluxe Edition",
    "titleEn": "Clinic: Deluxe Edition",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/iSPW4FWKZPiscVBbVgzJ0Q__original/img/Mlf3zgxNSckq276250BUObext8M=/0x0/filters:format(jpeg)/pic6625134.jpg",
    "thumbnail": "https://cf.geekdo-images.com/iSPW4FWKZPiscVBbVgzJ0Q__thumb/img/NQZu_MeYrdrZFsLASABeWJTKWtI=/fit-in/200x150/filters:strip_icc()/pic6625134.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 150,
    "bggRating": 7.6,
    "userRating": 7.6,
    "status": "owned",
    "designers": [
      "Alban Viard"
    ],
    "createdAt": "2024-04-10T19:52:36.000Z",
    "updatedAt": "2024-04-10T19:52:36.000Z"
  },
  {
    "id": "game-16",
    "bggId": 198773,
    "titleKr": "Codenames: Pictures",
    "titleEn": "Codenames: Pictures",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/Q2u-Nk68Wb1iLjxh_dfsIg__original/img/i4FVjrk9TtmvVlVK7NtwRqgOxdQ=/0x0/filters:format(jpeg)/pic3476592.jpg",
    "thumbnail": "https://cf.geekdo-images.com/Q2u-Nk68Wb1iLjxh_dfsIg__thumb/img/6-1EOESE196KVKw4xOJ5rge56j0=/fit-in/200x150/filters:strip_icc()/pic3476592.jpg",
    "minPlayers": 2,
    "maxPlayers": 8,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "status": "played",
    "designers": [
      "Vlaada Chvátil"
    ],
    "createdAt": "2022-05-01T14:41:02.000Z",
    "updatedAt": "2022-05-01T14:41:02.000Z"
  },
  {
    "id": "game-234",
    "bggId": 377061,
    "titleKr": "Coffee Rush",
    "titleEn": "Coffee Rush",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/LdK5ItPPwIHKUITxh3vqxA__original/img/gKSzzvUhpCYH1PjIzSYo9ffxSoM=/0x0/filters:format(jpeg)/pic7275386.jpg",
    "thumbnail": "https://cf.geekdo-images.com/LdK5ItPPwIHKUITxh3vqxA__thumb/img/Y52dMpdopXxI35B6oPbc1J5RBFI=/fit-in/200x150/filters:strip_icc()/pic7275386.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 7.2,
    "userRating": 7.2,
    "status": "played",
    "designers": [
      "Euijin Han"
    ],
    "createdAt": "2024-08-15T13:44:42.000Z",
    "updatedAt": "2024-08-15T13:44:42.000Z"
  },
  {
    "id": "game-235",
    "bggId": 411435,
    "titleKr": "Coffee Rush: Piece of Cake",
    "titleEn": "Coffee Rush: Piece of Cake",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/AK0XaFXem8Pdeu3dU4kggA__original/img/dUllxooyRFmFxRUQj9_2HGyX-U8=/0x0/filters:format(jpeg)/pic7968971.jpg",
    "thumbnail": "https://cf.geekdo-images.com/AK0XaFXem8Pdeu3dU4kggA__thumb/img/Zms29KxsTwbhSfbAzftb_EPMlIE=/fit-in/200x150/filters:strip_icc()/pic7968971.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 7.7,
    "userRating": 7.7,
    "status": "played",
    "designers": [
      "Euijin Han"
    ],
    "createdAt": "2024-08-15T13:44:55.000Z",
    "updatedAt": "2024-08-15T13:44:55.000Z"
  },
  {
    "id": "game-133",
    "bggId": 245638,
    "titleKr": "Coimbra",
    "titleEn": "Coimbra",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/JJFHx0RiUBYdy9bHAgVSuA__original/img/zwcZQov_aUfBN0z9J9PzsJqomeI=/0x0/filters:format(jpeg)/pic3956079.jpg",
    "thumbnail": "https://cf.geekdo-images.com/JJFHx0RiUBYdy9bHAgVSuA__thumb/img/-eaAIbixYxRRVj0tDTS1oP_9Njk=/fit-in/200x150/filters:strip_icc()/pic3956079.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Flaminia Brasini",
      "Virginio Gigli"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-152",
    "bggId": 158899,
    "titleKr": "Colt Express",
    "titleEn": "Colt Express",
    "yearPublished": 2014,
    "image": "https://cf.geekdo-images.com/2HKX0QANk_DY7CIVK5O5fQ__original/img/okv8rhQupsrXsEJsovQ_BJV5hKA=/0x0/filters:format(jpeg)/pic2869710.jpg",
    "thumbnail": "https://cf.geekdo-images.com/2HKX0QANk_DY7CIVK5O5fQ__thumb/img/zcjkqn_HYDIIyVAZaAxJIkurQRg=/fit-in/200x150/filters:strip_icc()/pic2869710.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 40,
    "maxPlaytime": 40,
    "status": "prevowned",
    "designers": [
      "Christophe Raimbault"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-92",
    "bggId": 39463,
    "titleKr": "Cosmic Encounter",
    "titleEn": "Cosmic Encounter",
    "yearPublished": 2008,
    "image": "https://cf.geekdo-images.com/S8cE-Ld7XP5sVz-upKJ-Bg__original/img/c4ZrfOtpp6tDHLyMsKecc2ne370=/0x0/filters:format(jpeg)/pic1521633.jpg",
    "thumbnail": "https://cf.geekdo-images.com/S8cE-Ld7XP5sVz-upKJ-Bg__thumb/img/gE--xqnuor4bft2J361zxJJGCjM=/fit-in/200x150/filters:strip_icc()/pic1521633.jpg",
    "minPlayers": 3,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "wishlist",
    "designers": [
      "Bill Eberle",
      "Jack Kittredge",
      "Bill Norton",
      "Peter Olotka",
      "Kevin Wilson"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-346",
    "bggId": 429863,
    "titleKr": "Covenant",
    "titleEn": "Covenant",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/4XkIFGbIAXtA-pDb6nlvsg__original/img/poJ-o9gvMirUyEz7PjrwLH7w6PU=/0x0/filters:format(jpeg)/pic8968542.jpg",
    "thumbnail": "https://cf.geekdo-images.com/4XkIFGbIAXtA-pDb6nlvsg__small/img/uQ9etIk8_uvoJuVA9ZzTtNYORKg=/fit-in/200x150/filters:strip_icc()/pic8968542.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 100,
    "maxPlaytime": 100,
    "bggRating": 7.7,
    "userRating": 7.7,
    "status": "owned",
    "designers": [
      "Germán P. Millán"
    ],
    "createdAt": "2026-08-11T22:23:18.000Z",
    "updatedAt": "2026-08-11T22:23:18.000Z"
  },
  {
    "id": "game-17",
    "bggId": 304051,
    "titleKr": "Creature Comforts",
    "titleEn": "Creature Comforts",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/A0ZRM7_H6ecCQ8-lW0MtQQ__original/img/VcraEiTpK1jfGuU_A3-UiaH-cZI=/0x0/filters:format(jpeg)/pic5799638.jpg",
    "thumbnail": "https://cf.geekdo-images.com/A0ZRM7_H6ecCQ8-lW0MtQQ__thumb/img/F8ELDsdUdbTvFWmYw1CZjqAWl0Y=/fit-in/200x150/filters:strip_icc()/pic5799638.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "status": "played",
    "designers": [
      "Roberta Taylor"
    ],
    "createdAt": "2022-02-12T23:40:38.000Z",
    "updatedAt": "2022-02-12T23:40:38.000Z"
  },
  {
    "id": "game-131",
    "bggId": 170624,
    "titleKr": "Crusaders: Thy Will Be Done",
    "titleEn": "Crusaders: Thy Will Be Done",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/XkWDxerdbSpZ1UtxWv-a7Q__original/img/a9TPfwOQIsH-4D1JNB86qec2-TI=/0x0/filters:format(jpeg)/pic6740264.jpg",
    "thumbnail": "https://cf.geekdo-images.com/XkWDxerdbSpZ1UtxWv-a7Q__thumb/img/wV7u4aTmFP14tdzo1EUH9LvsQZ4=/fit-in/200x150/filters:strip_icc()/pic6740264.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 40,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Seth Jaffee"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-18",
    "bggId": 280480,
    "titleKr": "Crystal Palace",
    "titleEn": "Crystal Palace",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/oHsLn5t1BvKOX4zJO8_Tmw__original/img/BhDdcsSmJGarKebCRNb1jKqdXdI=/0x0/filters:format(jpeg)/pic4949194.jpg",
    "thumbnail": "https://cf.geekdo-images.com/oHsLn5t1BvKOX4zJO8_Tmw__thumb/img/a5wJcOm363_-BhI3Al-fnJ4e2NE=/fit-in/200x150/filters:strip_icc()/pic4949194.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 90,
    "maxPlaytime": 150,
    "status": "played",
    "designers": [
      "Carsten Lauber"
    ],
    "createdAt": "2022-03-09T14:59:34.000Z",
    "updatedAt": "2022-03-09T14:59:34.000Z"
  },
  {
    "id": "game-19",
    "bggId": 298069,
    "titleKr": "Cubitos",
    "titleEn": "Cubitos",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/_WY_JrQQRrSUlVof11hMpQ__original/img/x5IICp6q86ozlyzJjTcoNkMELnI=/0x0/filters:format(png)/pic5226311.png",
    "thumbnail": "https://cf.geekdo-images.com/_WY_JrQQRrSUlVof11hMpQ__thumb/img/YBgLAPTM5xOW3fDj_if3-r3oDs0=/fit-in/200x150/filters:strip_icc()/pic5226311.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [
      "John D. Clair"
    ],
    "createdAt": "2022-02-27T16:08:17.000Z",
    "updatedAt": "2022-02-27T16:08:17.000Z"
  },
  {
    "id": "game-189",
    "bggId": 322289,
    "titleKr": "Darwin's Journey",
    "titleEn": "Darwin's Journey",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/-A_ABjMw4PdoAZrH-FjiiA__original/img/GuDlOog3eTRrkxCUzCEgRc17B-g=/0x0/filters:format(png)/pic5726930.png",
    "thumbnail": "https://cf.geekdo-images.com/-A_ABjMw4PdoAZrH-FjiiA__thumb/img/_rJRtHzqatLg9OQM0x1UaC1cRGY=/fit-in/200x150/filters:strip_icc()/pic5726930.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Simone Luciani",
      "Nestore Mangone"
    ],
    "createdAt": "2023-07-02T10:23:38.000Z",
    "updatedAt": "2023-07-02T10:23:38.000Z"
  },
  {
    "id": "game-20",
    "bggId": 331635,
    "titleKr": "De Magische Markt van Cameloot",
    "titleEn": "De Magische Markt van Cameloot",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/kAAllrKaOmn4e5p0G7ZKpA__original/img/OuxoW1ab6weOh3z2YHWw4i64Llo=/0x0/filters:format(png)/pic5991084.png",
    "thumbnail": "https://cf.geekdo-images.com/kAAllrKaOmn4e5p0G7ZKpA__thumb/img/eb7QFxpAS_ceZf8-nfBRrLle58U=/fit-in/200x150/filters:strip_icc()/pic5991084.png",
    "minPlayers": 3,
    "maxPlayers": 6,
    "minPlaytime": 20,
    "maxPlaytime": 25,
    "status": "played",
    "designers": [
      "Fred Boulle",
      "Cédric NH",
      "Grégory Grard",
      "Mathieu Roussel"
    ],
    "createdAt": "2022-05-01T13:25:47.000Z",
    "updatedAt": "2022-05-01T13:25:47.000Z"
  },
  {
    "id": "game-21",
    "bggId": 75165,
    "titleKr": "De Vulgari Eloquentia",
    "titleEn": "De Vulgari Eloquentia",
    "yearPublished": 2010,
    "image": "https://cf.geekdo-images.com/mAyx-NXFYvTj6Dz-YKormQ__original/img/Ch4TL5VvsCZGDrEfAvpA65Drym8=/0x0/filters:format(jpeg)/pic778029.jpg",
    "thumbnail": "https://cf.geekdo-images.com/mAyx-NXFYvTj6Dz-YKormQ__thumb/img/k56Pz_BhVJ2ojAzx9Z5BeZth3pQ=/fit-in/200x150/filters:strip_icc()/pic778029.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 120,
    "maxPlaytime": 120,
    "status": "played",
    "designers": [
      "Mario Papini"
    ],
    "createdAt": "2022-03-06T16:52:32.000Z",
    "updatedAt": "2022-03-06T16:52:32.000Z"
  },
  {
    "id": "game-164",
    "bggId": 276182,
    "titleKr": "Dead Reckoning",
    "titleEn": "Dead Reckoning",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/4q_5Ox7oYtK3Ma73iRtfAg__original/img/67KL6z6m8eD2MprJ7JfsxXoAPlM=/0x0/filters:format(jpeg)/pic4650725.jpg",
    "thumbnail": "https://cf.geekdo-images.com/4q_5Ox7oYtK3Ma73iRtfAg__thumb/img/TU4UOoot_zqqUwCEmE_wFnLRRCY=/fit-in/200x150/filters:strip_icc()/pic4650725.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 150,
    "status": "wishlist",
    "designers": [
      "John D. Clair"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-197",
    "bggId": 367379,
    "titleKr": "Deal with the Devil",
    "titleEn": "Deal with the Devil",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/DNZyEyGSihEgliX9fZ2Beg__original/img/A-sQYa16LLPwNXCseL_OZqH9XTo=/0x0/filters:format(jpeg)/pic6972703.jpg",
    "thumbnail": "https://cf.geekdo-images.com/DNZyEyGSihEgliX9fZ2Beg__thumb/img/9DSN6z2c7o7aqYN97eDWM2WEDNg=/fit-in/200x150/filters:strip_icc()/pic6972703.jpg",
    "minPlayers": 4,
    "maxPlayers": 4,
    "minPlaytime": 120,
    "maxPlaytime": 150,
    "status": "owned",
    "designers": [
      "Matúš Kotry"
    ],
    "createdAt": "2024-01-28T20:09:17.000Z",
    "updatedAt": "2024-01-28T20:09:17.000Z"
  },
  {
    "id": "game-22",
    "bggId": 156129,
    "titleKr": "Deception: Murder in Hong Kong",
    "titleEn": "Deception: Murder in Hong Kong",
    "yearPublished": 2014,
    "image": "https://cf.geekdo-images.com/1COY3oeK9aN2_XNimKaNww__original/img/ZzyzlO15ggCfkLg9ckeM4PWNePI=/0x0/filters:format(jpeg)/pic3033330.jpg",
    "thumbnail": "https://cf.geekdo-images.com/1COY3oeK9aN2_XNimKaNww__thumb/img/8IWDjnSYX-tYAVRgfq-W3y1b_Ww=/fit-in/200x150/filters:strip_icc()/pic3033330.jpg",
    "minPlayers": 4,
    "maxPlayers": 12,
    "minPlaytime": 20,
    "maxPlaytime": 20,
    "status": "played",
    "designers": [
      "Tobey Ho"
    ],
    "createdAt": "2022-04-09T21:57:39.000Z",
    "updatedAt": "2022-04-09T21:57:39.000Z"
  },
  {
    "id": "game-146",
    "bggId": 225694,
    "titleKr": "Decrypto",
    "titleEn": "Decrypto",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/hHZWXnUTMYDd_KTAM6Jwlw__original/img/lL6QJ69UmZT7CeljUcjyA47b-e0=/0x0/filters:format(jpeg)/pic3759421.jpg",
    "thumbnail": "https://cf.geekdo-images.com/hHZWXnUTMYDd_KTAM6Jwlw__thumb/img/O5XHaPOALYquS058qcXWVm5b_k4=/fit-in/200x150/filters:strip_icc()/pic3759421.jpg",
    "minPlayers": 3,
    "maxPlayers": 8,
    "minPlaytime": 15,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Thomas Dagenais-Lespérance"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-153",
    "bggId": 169654,
    "titleKr": "Deep Sea Adventure",
    "titleEn": "Deep Sea Adventure",
    "yearPublished": 2014,
    "image": "https://cf.geekdo-images.com/owyKXaa5SPB2HG9F_MueNQ__original/img/gOmpUB3hM7Ap9o-kDsV8ZVBVYXA=/0x0/filters:format(png)/pic3169827.png",
    "thumbnail": "https://cf.geekdo-images.com/owyKXaa5SPB2HG9F_MueNQ__thumb/img/poEY0PMTpz4X_SOUaPjs6G7qr7o=/fit-in/200x150/filters:strip_icc()/pic3169827.png",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "owned",
    "designers": [
      "Jun Sasaki",
      "Goro Sasaki"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-90",
    "bggId": 194594,
    "titleKr": "Dice Forge",
    "titleEn": "Dice Forge",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/4BTVGQWO0M9ayxyku3FW6Q__original/img/8G3m0Cc_y3Qa0jcFn4ynWTwOV3A=/0x0/filters:format(jpeg)/pic3477004.jpg",
    "thumbnail": "https://cf.geekdo-images.com/4BTVGQWO0M9ayxyku3FW6Q__thumb/img/BWNtptZ90Cutx39I3Celuvirt78=/fit-in/200x150/filters:strip_icc()/pic3477004.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Régis Bonnessée"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-177",
    "bggId": 281332,
    "titleKr": "Dice Throne Adventures",
    "titleEn": "Dice Throne Adventures",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/kZ9S1yzOdBuftKjgbNzrbA__original/img/mcmGd-grmCidHxVR22LMjP_mfMk=/0x0/filters:format(jpeg)/pic5944413.jpg",
    "thumbnail": "https://cf.geekdo-images.com/kZ9S1yzOdBuftKjgbNzrbA__thumb/img/ki35M633JXlhizWLVcHdFsTH9Bk=/fit-in/200x150/filters:strip_icc()/pic5944413.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Gavan Brown",
      "Nate Chatellier",
      "Manny Trembley"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-147",
    "bggId": 216734,
    "titleKr": "Dice Throne: Season One",
    "titleEn": "Dice Throne: Season One",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/crZpafHHxItU5EWPCgNbPA__original/img/SW7p_jpQKI-EGcMGjenPjHvGTL0=/0x0/filters:format(jpeg)/pic3962955.jpg",
    "thumbnail": "https://cf.geekdo-images.com/crZpafHHxItU5EWPCgNbPA__thumb/img/6-MfhRxfMD7KwZq9jQT1tZFHTIY=/fit-in/200x150/filters:strip_icc()/pic3962955.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 20,
    "maxPlaytime": 40,
    "status": "prevowned",
    "designers": [
      "Nate Chatellier",
      "Manny Trembley"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-167",
    "bggId": 291794,
    "titleKr": "Dice Throne: Season One ReRolled",
    "titleEn": "Dice Throne: Season One ReRolled",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/EwHWnen78Ni1XiAlaD_klQ__original/img/r677qlxJwru-ws7HQoKMzvsvq48=/0x0/filters:format(jpeg)/pic5944424.jpg",
    "thumbnail": "https://cf.geekdo-images.com/EwHWnen78Ni1XiAlaD_klQ__thumb/img/ex05y12pPGTJUJ5HyOhellZvRoU=/fit-in/200x150/filters:strip_icc()/pic5944424.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 20,
    "maxPlaytime": 40,
    "status": "owned",
    "designers": [
      "Nate Chatellier",
      "Manny Trembley"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-23",
    "bggId": 244271,
    "titleKr": "Dice Throne: Season Two – Battle Chest",
    "titleEn": "Dice Throne: Season Two – Battle Chest",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/lJkCMk1jwCl-KHSPZJCPZQ__original/img/sWgmSr0KiOvb3iGINSg-2huDnSk=/0x0/filters:format(jpeg)/pic4441140.jpg",
    "thumbnail": "https://cf.geekdo-images.com/lJkCMk1jwCl-KHSPZJCPZQ__thumb/img/93EGDw0NSm91SomXH38d4XvhlSk=/fit-in/200x150/filters:strip_icc()/pic4441140.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 20,
    "maxPlaytime": 40,
    "status": "owned",
    "designers": [
      "Nate Chatellier",
      "Manny Trembley"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-310",
    "bggId": 324856,
    "titleKr": "Die Crew: Mission Tiefsee",
    "titleEn": "The Crew: Mission Deep Sea",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/VuBqZ1sMaDAVVHF_OEJP4g__original/img/jGWxczXC_VWZofeAmlO_DkB0hCI=/0x0/filters:format(jpeg)/pic5988903.jpg",
    "thumbnail": "https://cf.geekdo-images.com/VuBqZ1sMaDAVVHF_OEJP4g__thumb/img/EdacXlcFZ06YK0-ZKa0oKwL4VCw=/fit-in/200x150/filters:strip_icc()/pic5988903.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 20,
    "maxPlaytime": 20,
    "bggRating": 8.1,
    "userRating": 8.1,
    "status": "owned",
    "designers": [
      "Thomas Sing"
    ],
    "createdAt": "2025-07-20T18:50:14.000Z",
    "updatedAt": "2025-07-20T18:50:14.000Z"
  },
  {
    "id": "game-77",
    "bggId": 1,
    "titleKr": "Die Macher",
    "titleEn": "Die Macher",
    "yearPublished": 1986,
    "image": "https://cf.geekdo-images.com/rpwCZAjYLD940NWwP3SRoA__original/img/yR0aoBVKNrAmmCuBeSzQnMflLYg=/0x0/filters:format(jpeg)/pic4718279.jpg",
    "thumbnail": "https://cf.geekdo-images.com/rpwCZAjYLD940NWwP3SRoA__thumb/img/YT6svCVsWqLrDitcMEtyazVktbQ=/fit-in/200x150/filters:strip_icc()/pic4718279.jpg",
    "minPlayers": 3,
    "maxPlayers": 5,
    "minPlaytime": 240,
    "maxPlaytime": 240,
    "status": "prevowned",
    "designers": [
      "Karl-Heinz Schmiel"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-323",
    "bggId": 410184,
    "titleKr": "Dinky Dungeon",
    "titleEn": "Dinky Dungeon",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/LNBkdIP7k4Mxd3lc1fP2yw__original/img/Q_5vy48pxltuJN_OsngBUZE05hg=/0x0/filters:format(png)/pic8171811.png",
    "thumbnail": "https://cf.geekdo-images.com/LNBkdIP7k4Mxd3lc1fP2yw__small/img/zw2_cxezST-vF-_zYsVSQi6hAa8=/fit-in/200x150/filters:strip_icc()/pic8171811.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "bggRating": 6.2,
    "userRating": 6.2,
    "status": "played",
    "designers": [
      "Shun Taguchi",
      "Aya Taguchi"
    ],
    "createdAt": "2025-10-26T17:42:12.000Z",
    "updatedAt": "2025-10-26T17:42:12.000Z"
  },
  {
    "id": "game-24",
    "bggId": 318009,
    "titleKr": "Dinosaur Island: Rawr 'n Write",
    "titleEn": "Dinosaur Island: Rawr 'n Write",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/xRP9jo5gfwhfFkgxQBgWTw__original/img/h-5jmA7e2JrfO9DM9OKy0S2MDjw=/0x0/filters:format(png)/pic5622932.png",
    "thumbnail": "https://cf.geekdo-images.com/xRP9jo5gfwhfFkgxQBgWTw__thumb/img/Ax_lCMYmPvnu1qYP0-nRAjcVBO8=/fit-in/200x150/filters:strip_icc()/pic5622932.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "wishlist",
    "designers": [
      "Brian Lewis",
      "David McGregor",
      "Marissa Misura"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-126",
    "bggId": 256382,
    "titleKr": "Disney Villainous",
    "titleEn": "Disney Villainous",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/7Ej5V5Dq92QdvVFvISfl_A__original/img/XHykA7cqZ0F4tYiKXw095TvHRno=/0x0/filters:format(jpeg)/pic4216110.jpg",
    "thumbnail": "https://cf.geekdo-images.com/7Ej5V5Dq92QdvVFvISfl_A__thumb/img/8tU6KCVSI5dlcibYTT6mq3K9ljk=/fit-in/200x150/filters:strip_icc()/pic4216110.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 50,
    "maxPlaytime": 50,
    "status": "owned",
    "designers": [
      "Prospero Hall"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-144",
    "bggId": 271518,
    "titleKr": "Disney Villainous: Wicked to the Core",
    "titleEn": "Disney Villainous: Wicked to the Core",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/StWdDnw-pdafavsxZHEc-Q__original/img/HEeGUzR0LEU4ve3TfxIn29dtiNA=/0x0/filters:format(jpeg)/pic4559890.jpg",
    "thumbnail": "https://cf.geekdo-images.com/StWdDnw-pdafavsxZHEc-Q__thumb/img/aUnAHcKDK6aQ3o0pxjZ1PnNk1jY=/fit-in/200x150/filters:strip_icc()/pic4559890.jpg",
    "minPlayers": 2,
    "maxPlayers": 3,
    "minPlaytime": 40,
    "maxPlaytime": 60,
    "status": "wishlist",
    "designers": [
      "Prospero Hall"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-203",
    "bggId": 295895,
    "titleKr": "Distilled",
    "titleEn": "Distilled",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/8YPBUoAlAvGSfcRTxr7EZQ__original/img/OTf94SbWPGDsg5Oms3D8S4tDja8=/0x0/filters:format(png)/pic7104213.png",
    "thumbnail": "https://cf.geekdo-images.com/8YPBUoAlAvGSfcRTxr7EZQ__thumb/img/JKBgv_MiQOOCmzS4KVzwjPW_yso=/fit-in/200x150/filters:strip_icc()/pic7104213.png",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 150,
    "bggRating": 7.9,
    "userRating": 7.9,
    "status": "owned",
    "designers": [
      "Dave Beck"
    ],
    "createdAt": "2024-03-10T15:13:54.000Z",
    "updatedAt": "2024-03-10T15:13:54.000Z"
  },
  {
    "id": "game-204",
    "bggId": 342219,
    "titleKr": "Distilled: Africa & Middle East Expansion",
    "titleEn": "Distilled: Africa & Middle East Expansion",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/SwUK0Xe9k7iH_8b07Yx-fQ__original/img/qkU8REbzz0g_hDR-fY-i9fya8UM=/0x0/filters:format(png)/pic7104218.png",
    "thumbnail": "https://cf.geekdo-images.com/SwUK0Xe9k7iH_8b07Yx-fQ__thumb/img/CXaBp4-84doNpO2Mpxbvdl8EKm8=/fit-in/200x150/filters:strip_icc()/pic7104218.png",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 120,
    "bggRating": 8.2,
    "userRating": 8.2,
    "status": "owned",
    "designers": [
      "Dave Beck"
    ],
    "createdAt": "2024-03-10T15:14:37.000Z",
    "updatedAt": "2024-03-10T15:14:37.000Z"
  },
  {
    "id": "game-288",
    "bggId": 426097,
    "titleKr": "Dog Poker / Cat Poker",
    "titleEn": "Dog Poker / Cat Poker",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/FTalOz0oiLlAyESmXBNwqQ__original/img/_Dc2zg-vEh5CX3ZDFYmfrlf_YJY=/0x0/filters:format(jpeg)/pic8343587.jpg",
    "thumbnail": "https://cf.geekdo-images.com/FTalOz0oiLlAyESmXBNwqQ__thumb/img/YxRBK6bZ8nZjd612R5WlkuBO8Jc=/fit-in/200x150/filters:strip_icc()/pic8343587.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "bggRating": 7.5,
    "userRating": 7.5,
    "status": "played",
    "designers": [
      "宮野 華也 (Kaya Miyano)"
    ],
    "createdAt": "2025-05-25T11:58:22.000Z",
    "updatedAt": "2025-05-25T11:58:22.000Z"
  },
  {
    "id": "game-82",
    "bggId": 62219,
    "titleKr": "Dominant Species",
    "titleEn": "Dominant Species",
    "yearPublished": 2010,
    "image": "https://cf.geekdo-images.com/oeygRZntjNUJWvc8SxDfww__original/img/U-WjAGlPXS_p89z4R0V4b8IADxA=/0x0/filters:format(jpeg)/pic784193.jpg",
    "thumbnail": "https://cf.geekdo-images.com/oeygRZntjNUJWvc8SxDfww__thumb/img/PUmSkY6ZKL81b6YuP1U59R3VdRE=/fit-in/200x150/filters:strip_icc()/pic784193.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 120,
    "maxPlaytime": 240,
    "status": "owned",
    "designers": [
      "Chad Jensen"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-25",
    "bggId": 215311,
    "titleKr": "Downforce",
    "titleEn": "Downforce",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/c74C-NVJHuMVxt6A_j2TsA__original/img/FHgW4u5dIooEJnNjm2RXcO_yJWs=/0x0/filters:format(png)/pic3432548.png",
    "thumbnail": "https://cf.geekdo-images.com/c74C-NVJHuMVxt6A_j2TsA__thumb/img/OUdT3uFyqBBzN7q9ZDFN6WBiecU=/fit-in/200x150/filters:strip_icc()/pic3432548.png",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 20,
    "maxPlaytime": 40,
    "status": "prevowned",
    "designers": [
      "Rob Daviau",
      "Justin D. Jacobson",
      "Wolfgang Kramer"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-139",
    "bggId": 316554,
    "titleKr": "Dune: Imperium",
    "titleEn": "Dune: Imperium",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__original/img/mZzaBAEEJpMlHWWmC0R6Su0OibQ=/0x0/filters:format(jpeg)/pic5666597.jpg",
    "thumbnail": "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__thumb/img/JGgY-nBmkyB8WRp8vcoBLlNMQ5U=/fit-in/200x150/filters:strip_icc()/pic5666597.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Paul Dennen"
    ],
    "createdAt": "2026-08-15T12:02:11.000Z",
    "updatedAt": "2026-08-15T12:02:11.000Z"
  },
  {
    "id": "game-311",
    "bggId": 426129,
    "titleKr": "Dune: Imperium – Bloodlines",
    "titleEn": "Dune: Imperium – Bloodlines",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/6g0FIZJK1zujPSrKuToCZw__original/img/P8jioOvt9CVRO6BoNRjk1pLv05Y=/0x0/filters:format(jpeg)/pic8350442.jpg",
    "thumbnail": "https://cf.geekdo-images.com/6g0FIZJK1zujPSrKuToCZw__thumb/img/niL2urMdy3ExhhQzbtMdsFUbSW4=/fit-in/200x150/filters:strip_icc()/pic8350442.jpg",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "bggRating": 8.7,
    "userRating": 8.7,
    "status": "owned",
    "designers": [
      "Phil Amylon",
      "Andy Clautice",
      "Paul Dennen",
      "Caleb Vance"
    ],
    "createdAt": "2025-07-27T16:47:47.000Z",
    "updatedAt": "2025-07-27T16:47:47.000Z"
  },
  {
    "id": "game-221",
    "bggId": 397598,
    "titleKr": "Dune: Imperium – Uprising",
    "titleEn": "Dune: Imperium – Uprising",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__original/img/BoUtCkd1NRO0bR1R5EwL51xIuXA=/0x0/filters:format(jpeg)/pic7664424.jpg",
    "thumbnail": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__thumb/img/H6qmxJrRFjtOAPZOfDoZ480-46I=/fit-in/200x150/filters:strip_icc()/pic7664424.jpg",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "bggRating": 8.7,
    "userRating": 8.7,
    "status": "owned",
    "designers": [
      "Paul Dennen"
    ],
    "createdAt": "2026-08-15T15:11:54.000Z",
    "updatedAt": "2026-08-15T15:11:54.000Z"
  },
  {
    "id": "game-266",
    "bggId": 262208,
    "titleKr": "Dungeon Drop",
    "titleEn": "Dungeon Drop",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/2bOgBKLIBz6unXaq68e8Dg__original/img/toaCxcIy7SKQG2uEHA7SHyf8NiM=/0x0/filters:format(png)/pic6220061.png",
    "thumbnail": "https://cf.geekdo-images.com/2bOgBKLIBz6unXaq68e8Dg__thumb/img/jDd3NmR7tEC9xwC3s0nfMTq20qU=/fit-in/200x150/filters:strip_icc()/pic6220061.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 10,
    "maxPlaytime": 20,
    "bggRating": 6.7,
    "userRating": 6.7,
    "status": "owned",
    "designers": [
      "Scott R. Smith"
    ],
    "createdAt": "2025-02-19T20:38:15.000Z",
    "updatedAt": "2025-02-19T20:38:15.000Z"
  },
  {
    "id": "game-158",
    "bggId": 271055,
    "titleKr": "Dwellings of Eldervale",
    "titleEn": "Dwellings of Eldervale",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/qJQXn0kvzvHBKWzSQN7vpw__original/img/NAq9RfDsv-qPEsco3W0ES8ofHEA=/0x0/filters:format(jpeg)/pic4742944.jpg",
    "thumbnail": "https://cf.geekdo-images.com/qJQXn0kvzvHBKWzSQN7vpw__thumb/img/nyFpcKV3cBOVO1pEImnBYLc_BRE=/fit-in/200x150/filters:strip_icc()/pic4742944.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 150,
    "status": "wishlist",
    "designers": [
      "Luke Laurie"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-26",
    "bggId": 217372,
    "titleKr": "Eldorádó Legendája",
    "titleEn": "Eldorádó Legendája",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/IHOUjBZ9ziMeYTRWp2hYAA__original/img/toEwTTESQ1Yqh4IJ_8lYpSxxDMg=/0x0/filters:format(jpeg)/pic4848678.jpg",
    "thumbnail": "https://cf.geekdo-images.com/IHOUjBZ9ziMeYTRWp2hYAA__thumb/img/_dAo-_rzbTzm_oIQscu7NSQ5-hE=/fit-in/200x150/filters:strip_icc()/pic4848678.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [
      "Reiner Knizia"
    ],
    "createdAt": "2022-05-07T11:50:16.000Z",
    "updatedAt": "2022-05-07T11:50:16.000Z"
  },
  {
    "id": "game-27",
    "bggId": 220367,
    "titleKr": "Empyreal: Spells & Steam",
    "titleEn": "Empyreal: Spells & Steam",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/fiJF4WREbSEYJtRgb7BZ_A__original/img/d4TrD5oWjaIhMaADo17AaSy_iQY=/0x0/filters:format(jpeg)/pic4097900.jpg",
    "thumbnail": "https://cf.geekdo-images.com/fiJF4WREbSEYJtRgb7BZ_A__thumb/img/4quAZ8WJG0g0pzcRXF1kknwGcck=/fit-in/200x150/filters:strip_icc()/pic4097900.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 30,
    "maxPlaytime": 75,
    "status": "played",
    "designers": [
      "Trey Chambers"
    ],
    "createdAt": "2021-04-28T21:43:47.000Z",
    "updatedAt": "2021-04-28T21:43:47.000Z"
  },
  {
    "id": "game-154",
    "bggId": 233398,
    "titleKr": "Endeavor: Age of Sail",
    "titleEn": "Endeavor: Age of Sail",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/YXYqQZ05gC9kNlgX7cbR8g__original/img/D4TCl_FNsC867ww_NNj4VmVUBr0=/0x0/filters:format(jpeg)/pic3913274.jpg",
    "thumbnail": "https://cf.geekdo-images.com/YXYqQZ05gC9kNlgX7cbR8g__thumb/img/tnCicYCs55D8rwF0RKFaBdXjb44=/fit-in/200x150/filters:strip_icc()/pic3913274.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "prevowned",
    "designers": [
      "Carl de Visser",
      "Jarratt Gray"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-93",
    "bggId": 142379,
    "titleKr": "Escape Plan",
    "titleEn": "Escape Plan",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/J-sgq_IT2g6WfnuMY7Y8PA__original/img/GZDhrKUFllmCwVdvcPpSYthyyq0=/0x0/filters:format(jpeg)/pic4178038.jpg",
    "thumbnail": "https://cf.geekdo-images.com/J-sgq_IT2g6WfnuMY7Y8PA__thumb/img/fSUSmbc2mpUwV2ErYG7X1Y-xuVM=/fit-in/200x150/filters:strip_icc()/pic4178038.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Vital Lacerda"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-128",
    "bggId": 206718,
    "titleKr": "Ethnos",
    "titleEn": "Ethnos",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/UIKUXkcnH3Bd4fjcPGINcA__original/img/IrqDqjjm1LY66Zkw7l4RwppaBBI=/0x0/filters:format(png)/pic3304124.png",
    "thumbnail": "https://cf.geekdo-images.com/UIKUXkcnH3Bd4fjcPGINcA__thumb/img/oNhw2e_wcBc37ItkTRZVio2gMGQ=/fit-in/200x150/filters:strip_icc()/pic3304124.png",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 45,
    "maxPlaytime": 60,
    "status": "prevowned",
    "designers": [
      "Paolo Mori"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-336",
    "bggId": 432527,
    "titleKr": "Ethnos: 2nd Edition",
    "titleEn": "Ethnos: 2nd Edition",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/3pOKNbsS7iV-9foX1GPQFw__original/img/Y7x1iJKATpsn6QME7aat5iCx30A=/0x0/filters:format(jpeg)/pic8542015.jpg",
    "thumbnail": "https://cf.geekdo-images.com/3pOKNbsS7iV-9foX1GPQFw__small/img/bYsQNBw0fOEnQVS2AynUE9Qgl80=/fit-in/200x150/filters:strip_icc()/pic8542015.jpg",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 60,
    "maxPlaytime": 60,
    "bggRating": 7.7,
    "userRating": 7.7,
    "status": "played",
    "designers": [
      "Paolo Mori"
    ],
    "createdAt": "2026-02-14T12:45:36.000Z",
    "updatedAt": "2026-02-14T12:45:36.000Z"
  },
  {
    "id": "game-255",
    "bggId": 363307,
    "titleKr": "Evergreen",
    "titleEn": "Evergreen",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/71I0Ku92KgjaW_ZokJidCA__original/img/idwvytJgNpT0IXRTVUUXw8AWhTE=/0x0/filters:format(png)/pic6872745.png",
    "thumbnail": "https://cf.geekdo-images.com/71I0Ku92KgjaW_ZokJidCA__thumb/img/3BpSIoMWf4ig9_S-CTMpoo3KdfU=/fit-in/200x150/filters:strip_icc()/pic6872745.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "bggRating": 7.5,
    "userRating": 7.5,
    "status": "owned",
    "designers": [
      "Hjalmar Hach"
    ],
    "createdAt": "2024-12-28T12:14:15.000Z",
    "updatedAt": "2024-12-28T12:14:15.000Z"
  },
  {
    "id": "game-226",
    "bggId": 395906,
    "titleKr": "Exploding Kittens: Good Vs Evil",
    "titleEn": "Exploding Kittens: Good Vs Evil",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/VwOSk5hqgFJLDPPbX0lqDQ__original/img/hRuMCnc1ltpFnqQwW1mdU1tNzM8=/0x0/filters:format(png)/pic7633899.png",
    "thumbnail": "https://cf.geekdo-images.com/VwOSk5hqgFJLDPPbX0lqDQ__thumb/img/BN28qTWphcdrkMTx-fcCYRJLS5M=/fit-in/200x150/filters:strip_icc()/pic7633899.png",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "bggRating": 7,
    "userRating": 7,
    "status": "played",
    "designers": [
      "Elan Lee",
      "Carol Mertz"
    ],
    "createdAt": "2024-06-22T18:16:18.000Z",
    "updatedAt": "2024-06-22T18:16:18.000Z"
  },
  {
    "id": "game-89",
    "bggId": 216600,
    "titleKr": "Fantastic Factories",
    "titleEn": "Fantastic Factories",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/AzNYQ2o-SXBAHFpPPtRBIw__original/img/QSapQT41vJZkBMzXx5ZkTbuTVf8=/0x0/filters:format(png)/pic4095959.png",
    "thumbnail": "https://cf.geekdo-images.com/AzNYQ2o-SXBAHFpPPtRBIw__thumb/img/CkfTNq419k6DTJthFwPA5oKYoHE=/fit-in/200x150/filters:strip_icc()/pic4095959.png",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 45,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Joseph Z Chen",
      "Justin Faulkner"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-230",
    "bggId": 385761,
    "titleKr": "Faraway",
    "titleEn": "Faraway",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/u1cwi9BWSKsPxSkVO0BzbA__original/img/jTY6_PRF6FrUgInfMajzobVy0S8=/0x0/filters:format(png)/pic7570101.png",
    "thumbnail": "https://cf.geekdo-images.com/u1cwi9BWSKsPxSkVO0BzbA__thumb/img/5G45GN8CE7pq38fJMMocmPtV4_U=/fit-in/200x150/filters:strip_icc()/pic7570101.png",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 15,
    "maxPlaytime": 30,
    "bggRating": 7.6,
    "userRating": 7.6,
    "status": "owned",
    "designers": [
      "Johannes Goupy",
      "Corentin Lebrat"
    ],
    "createdAt": "2024-07-14T16:15:13.000Z",
    "updatedAt": "2024-07-14T16:15:13.000Z"
  },
  {
    "id": "game-28",
    "bggId": 285253,
    "titleKr": "Fiesta de los Muertos",
    "titleEn": "Fiesta de los Muertos",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/cbcG9UP9T430LZqV3aVVEg__original/img/Ya4qle3r-Sr2ZV3RS0tyPwpLcf4=/0x0/filters:format(png)/pic4868417.png",
    "thumbnail": "https://cf.geekdo-images.com/cbcG9UP9T430LZqV3aVVEg__thumb/img/HOOZx_4zpZCajwEsEJ43GLEmkBk=/fit-in/200x150/filters:strip_icc()/pic4868417.png",
    "minPlayers": 4,
    "maxPlayers": 8,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "status": "played",
    "designers": [
      "Antonin Boccara"
    ],
    "createdAt": "2021-07-04T15:53:38.000Z",
    "updatedAt": "2021-07-04T15:53:38.000Z"
  },
  {
    "id": "game-324",
    "bggId": 157354,
    "titleKr": "Five Tribes: The Djinns of Naqala",
    "titleEn": "Five Tribes: The Djinns of Naqala",
    "yearPublished": 2014,
    "image": "https://cf.geekdo-images.com/dmo-WD6HZHVUPrbVHunaTw__original/img/PS9HXrThM8Pepbd-cuA1tX8KCYU=/0x0/filters:format(jpeg)/pic2055255.jpg",
    "thumbnail": "https://cf.geekdo-images.com/dmo-WD6HZHVUPrbVHunaTw__small/img/I6KVJlQgS1GfWDPSWAFNqce4Cgc=/fit-in/200x150/filters:strip_icc()/pic2055255.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 40,
    "maxPlaytime": 80,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "owned",
    "designers": [
      "Bruno Cathala"
    ],
    "createdAt": "2025-10-26T18:31:15.000Z",
    "updatedAt": "2025-10-26T18:31:15.000Z"
  },
  {
    "id": "game-115",
    "bggId": 336986,
    "titleKr": "Flamecraft",
    "titleEn": "Flamecraft",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/EvGtnsBDcfnKiqSiXHothQ__original/img/7yj8nA0ObuZ1w5AYCThEOK6meWA=/0x0/filters:format(jpeg)/pic6605448.jpg",
    "thumbnail": "https://cf.geekdo-images.com/EvGtnsBDcfnKiqSiXHothQ__thumb/img/bQcyvzYRdMFFvcdQkFVnIRiCPjE=/fit-in/200x150/filters:strip_icc()/pic6605448.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Manny Vega"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-328",
    "bggId": 439305,
    "titleKr": "Flamecraft Duals",
    "titleEn": "Flamecraft Duals",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/wIpk8_5xO9Hh3cAPvWAslQ__original/img/Ko8nRSvQkLHcwn6TTPoPj4z_zVI=/0x0/filters:format(png)/pic8706498.png",
    "thumbnail": "https://cf.geekdo-images.com/wIpk8_5xO9Hh3cAPvWAslQ__small/img/rLl3hBXX7FLdQQyCfEXyt_HIN8M=/fit-in/200x150/filters:strip_icc()/pic8706498.png",
    "minPlayers": 1,
    "maxPlayers": 2,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "bggRating": 8.1,
    "userRating": 8.1,
    "status": "owned",
    "designers": [
      "Manny Vega"
    ],
    "createdAt": "2025-11-30T18:14:13.000Z",
    "updatedAt": "2025-11-30T18:14:13.000Z"
  },
  {
    "id": "game-321",
    "bggId": 420087,
    "titleKr": "Flip 7",
    "titleEn": "Flip 7",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/YrQxEB9Ef0kQorRApzG5vQ__original/img/hK6k-x_GYfooemrkkRuF0bTvKxE=/0x0/filters:format(jpeg)/pic8780246.jpg",
    "thumbnail": "https://cf.geekdo-images.com/YrQxEB9Ef0kQorRApzG5vQ__small/img/_dNNsSelyw9qUEOIXBRt6PE_1us=/fit-in/200x150/filters:strip_icc()/pic8780246.jpg",
    "minPlayers": 3,
    "maxPlayers": 18,
    "minPlaytime": 20,
    "maxPlaytime": 20,
    "bggRating": 7.2,
    "userRating": 7.2,
    "status": "played",
    "designers": [
      "Eric Olsen"
    ],
    "createdAt": "2025-10-26T14:03:22.000Z",
    "updatedAt": "2025-10-26T14:03:22.000Z"
  },
  {
    "id": "game-243",
    "bggId": 391163,
    "titleKr": "Forest Shuffle",
    "titleEn": "Forest Shuffle",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/08bC8NviSTNc4Zvur4pueA__original/img/GcBtTHjdPXagHE-IOCpQ0he6rN4=/0x0/filters:format(jpeg)/pic7578350.jpg",
    "thumbnail": "https://cf.geekdo-images.com/08bC8NviSTNc4Zvur4pueA__thumb/img/Xq8TNBmMl3Z7DoynvbUXchFAztc=/fit-in/200x150/filters:strip_icc()/pic7578350.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 40,
    "maxPlaytime": 60,
    "bggRating": 7.7,
    "userRating": 7.7,
    "status": "owned",
    "designers": [
      "Kosch"
    ],
    "createdAt": "2024-11-02T15:45:29.000Z",
    "updatedAt": "2024-11-02T15:45:29.000Z"
  },
  {
    "id": "game-134",
    "bggId": 302723,
    "titleKr": "Forgotten Waters",
    "titleEn": "Forgotten Waters",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/gLnzfyJio2MYbG9J-uQSiQ__original/img/WIqdfw845duHlpr9d5QvzPuHpGI=/0x0/filters:format(jpeg)/pic5253984.jpg",
    "thumbnail": "https://cf.geekdo-images.com/gLnzfyJio2MYbG9J-uQSiQ__thumb/img/Th5Wf0ynMEA14i06HUSqzz-8g24=/fit-in/200x150/filters:strip_icc()/pic5253984.jpg",
    "minPlayers": 3,
    "maxPlayers": 7,
    "minPlaytime": 120,
    "maxPlaytime": 240,
    "status": "prevowned",
    "designers": [
      "Mr. Bistro",
      "J. Arthur Ellis",
      "Isaac Vega"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-29",
    "bggId": 287941,
    "titleKr": "Formosa Tea",
    "titleEn": "Formosa Tea",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/zUU7fyzcPmC5dJ9ovT90vQ__original/img/qhjkgE38WiKvIANM2vTrsdb_4-w=/0x0/filters:format(jpeg)/pic4928296.jpg",
    "thumbnail": "https://cf.geekdo-images.com/zUU7fyzcPmC5dJ9ovT90vQ__thumb/img/X5Ls0TJfgBx0WZOa7Ak9FCu9qdg=/fit-in/200x150/filters:strip_icc()/pic4928296.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 40,
    "maxPlaytime": 90,
    "status": "played",
    "designers": [
      "Chu-Lan Kao"
    ],
    "createdAt": "2021-05-09T15:07:10.000Z",
    "updatedAt": "2021-05-09T15:07:10.000Z"
  },
  {
    "id": "game-30",
    "bggId": 284189,
    "titleKr": "Foundations of Rome",
    "titleEn": "Foundations of Rome",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/lRB91NF3OPeSff2o17NX3Q__original/img/jAHfBChl4OzC5QbZbrS-kEqrkUE=/0x0/filters:format(jpeg)/pic6706206.jpg",
    "thumbnail": "https://cf.geekdo-images.com/lRB91NF3OPeSff2o17NX3Q__thumb/img/CWAVZWfBegleQWJVhkehmDmxnbU=/fit-in/200x150/filters:strip_icc()/pic6706206.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Emerson Matsuuchi"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-327",
    "bggId": 384213,
    "titleKr": "Fromage",
    "titleEn": "Fromage",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/h87Ft6qXbzwPifN7WGnx2Q__original/img/X5va643QzqHpbIJIPUGv5jp4qGs=/0x0/filters:format(jpeg)/pic7452200.jpg",
    "thumbnail": "https://cf.geekdo-images.com/h87Ft6qXbzwPifN7WGnx2Q__small/img/0qK0Iu8ahtXtY4E8UFJib4hQ1hw=/fit-in/200x150/filters:strip_icc()/pic7452200.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "bggRating": 7.7,
    "userRating": 7.7,
    "status": "owned",
    "designers": [
      "Matthew O'Malley",
      "Ben Rosset"
    ],
    "createdAt": "2025-11-23T10:41:19.000Z",
    "updatedAt": "2025-11-23T10:41:19.000Z"
  },
  {
    "id": "game-105",
    "bggId": 197443,
    "titleKr": "Fugitive",
    "titleEn": "Fugitive",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/Jeukp3NUs-u6i3SuF-yE4A__original/img/X8-dbZ1EzlwOUAe3CuwKBRztTMY=/0x0/filters:format(png)/pic3481216.png",
    "thumbnail": "https://cf.geekdo-images.com/Jeukp3NUs-u6i3SuF-yE4A__thumb/img/1cw7pZbdLk2bBFh-tjkwzZXwgmw=/fit-in/200x150/filters:strip_icc()/pic3481216.png",
    "minPlayers": 2,
    "maxPlayers": 2,
    "minPlaytime": 5,
    "maxPlaytime": 20,
    "status": "prevowned",
    "designers": [
      "Tim Fowers"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-313",
    "bggId": 391137,
    "titleKr": "Galactic Cruise",
    "titleEn": "Galactic Cruise",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/l-LMcklO683dyVlnRZS3mg__original/img/iCKYMpwsmiM18FHFT9Nzuk625bQ=/0x0/filters:format(jpeg)/pic7556818.jpg",
    "thumbnail": "https://cf.geekdo-images.com/l-LMcklO683dyVlnRZS3mg__thumb/img/8usx0HfsTXTpE2kklVRMtJGAwFY=/fit-in/200x150/filters:strip_icc()/pic7556818.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 150,
    "bggRating": 8.4,
    "userRating": 8.4,
    "status": "owned",
    "designers": [
      "T.K. King",
      "Dennis Northcott",
      "Koltin Thompson"
    ],
    "createdAt": "2025-08-24T17:58:14.000Z",
    "updatedAt": "2025-08-24T17:58:14.000Z"
  },
  {
    "id": "game-314",
    "bggId": 414976,
    "titleKr": "Galactic Cruise: Accommodations",
    "titleEn": "Galactic Cruise: Accommodations",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/SU1b9UQ-MNq2YAked4GEKw__original/img/sjKl-v7Xra_pBZh-1N0v7Ny6VBA=/0x0/filters:format(jpeg)/pic8047043.jpg",
    "thumbnail": "https://cf.geekdo-images.com/SU1b9UQ-MNq2YAked4GEKw__small/img/RwlZcUyPsT2V__0lUCwocGTWUjY=/fit-in/200x150/filters:strip_icc()/pic8047043.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 150,
    "bggRating": 8.4,
    "userRating": 8.4,
    "status": "played",
    "designers": [
      "T.K. King",
      "Dennis Northcott",
      "Koltin Thompson"
    ],
    "createdAt": "2025-09-20T12:49:02.000Z",
    "updatedAt": "2025-09-20T12:49:02.000Z"
  },
  {
    "id": "game-31",
    "bggId": 336794,
    "titleKr": "Galaxy Trucker",
    "titleEn": "Galaxy Trucker",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/1gQABuftAVgk1qshkMyDEw__original/img/7GY1ZXeZkWkWki5QLAbfdX-EGp0=/0x0/filters:format(jpeg)/pic6125184.jpg",
    "thumbnail": "https://cf.geekdo-images.com/1gQABuftAVgk1qshkMyDEw__thumb/img/Ovni6sWuvyfj9LWn-hnHzpCELF8=/fit-in/200x150/filters:strip_icc()/pic6125184.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 20,
    "maxPlaytime": 30,
    "status": "played",
    "designers": [
      "Vlaada Chvátil"
    ],
    "createdAt": "2022-05-08T19:59:04.000Z",
    "updatedAt": "2022-05-08T19:59:04.000Z"
  },
  {
    "id": "game-180",
    "bggId": 31481,
    "titleKr": "Galaxy Trucker (31481)",
    "titleEn": "Galaxy Trucker",
    "yearPublished": 2007,
    "image": "https://cf.geekdo-images.com/gLFt1Kif5Cfag505_COYYw__original/img/5vUNCkVDoQpcTfmlhFzkS4e1EaQ=/0x0/filters:format(jpeg)/pic3926631.jpg",
    "thumbnail": "https://cf.geekdo-images.com/gLFt1Kif5Cfag505_COYYw__thumb/img/WOW_QsRuV1KyP8dLjP0yH6TlpvU=/fit-in/200x150/filters:strip_icc()/pic3926631.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Vlaada Chvátil"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-222",
    "bggId": 391761,
    "titleKr": "Give Me The Treasure",
    "titleEn": "Give Me The Treasure",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/qMmBBSspOLrGA7ixttBqaA__original/img/35kULlXBwP2zOTKBf1REjNBWzVM=/0x0/filters:format(jpeg)/pic7960998.jpg",
    "thumbnail": "https://cf.geekdo-images.com/qMmBBSspOLrGA7ixttBqaA__thumb/img/23wvWoEtk0Slw8dJUcCuUsY0ndg=/fit-in/200x150/filters:strip_icc()/pic7960998.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 15,
    "maxPlaytime": 30,
    "bggRating": 6.9,
    "userRating": 6.9,
    "status": "owned",
    "designers": [
      "Kaku"
    ],
    "createdAt": "2024-06-08T16:43:02.000Z",
    "updatedAt": "2024-06-08T16:43:02.000Z"
  },
  {
    "id": "game-32",
    "bggId": 246192,
    "titleKr": "Gizmos",
    "titleEn": "Gizmos",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/zin82Hg4MXck86t8fzbsdA__original/img/_S-XINN0voB1OzExPPgePrOWurM=/0x0/filters:format(png)/pic4169718.png",
    "thumbnail": "https://cf.geekdo-images.com/zin82Hg4MXck86t8fzbsdA__thumb/img/e-UqOrMfsLCh2T_igK3wkoFrOu8=/fit-in/200x150/filters:strip_icc()/pic4169718.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 40,
    "maxPlaytime": 50,
    "status": "played",
    "designers": [
      "Phil Walker-Harding"
    ],
    "createdAt": "2021-04-28T21:43:47.000Z",
    "updatedAt": "2021-04-28T21:43:47.000Z"
  },
  {
    "id": "game-113",
    "bggId": 174430,
    "titleKr": "Gloomhaven",
    "titleEn": "Gloomhaven",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__original/img/7d-lj5Gd1e8PFnD97LYFah2c45M=/0x0/filters:format(jpeg)/pic2437871.jpg",
    "thumbnail": "https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__thumb/img/veqFeP4d_3zNhFc3GNBkV95rBEQ=/fit-in/200x150/filters:strip_icc()/pic2437871.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Isaac Childres"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-33",
    "bggId": 294237,
    "titleKr": "Goat 'n' Goat",
    "titleEn": "Goat 'n' Goat",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/Xeo_VTXKeE-abG1HGXaYCA__original/img/RKNJaIQX8pPwXDb-Zb0VqWvFEd8=/0x0/filters:format(jpeg)/pic5128780.jpg",
    "thumbnail": "https://cf.geekdo-images.com/Xeo_VTXKeE-abG1HGXaYCA__thumb/img/e1sSKsULVaCBVht-_SuM71htAIg=/fit-in/200x150/filters:strip_icc()/pic5128780.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "played",
    "designers": [
      "Hisashi Hayashi"
    ],
    "createdAt": "2022-05-28T19:50:47.000Z",
    "updatedAt": "2022-05-28T19:50:47.000Z"
  },
  {
    "id": "game-281",
    "bggId": 306680,
    "titleKr": "GOLD",
    "titleEn": "GOLD",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/O2Dsoc2CfpnQXxojyLGB1A__original/img/5ZTE5Hvds-YXdZzskmpZwiRTcX4=/0x0/filters:format(png)/pic5529511.png",
    "thumbnail": "https://cf.geekdo-images.com/O2Dsoc2CfpnQXxojyLGB1A__thumb/img/rNnsEQJdxF7iOM7RYFMrWhYAn6E=/fit-in/200x150/filters:strip_icc()/pic5529511.png",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "bggRating": 6.7,
    "userRating": 6.7,
    "status": "played",
    "designers": [
      "Reiner Knizia"
    ],
    "createdAt": "2025-05-11T17:43:43.000Z",
    "updatedAt": "2025-05-11T17:43:43.000Z"
  },
  {
    "id": "game-322",
    "bggId": 298383,
    "titleKr": "Golem",
    "titleEn": "Golem",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/9wDd5YVER3lwpGO3v5EkTA__original/img/RtYW5lfwrLzWDI0rorp_vqI9af8=/0x0/filters:format(jpeg)/pic5374175.jpg",
    "thumbnail": "https://cf.geekdo-images.com/9wDd5YVER3lwpGO3v5EkTA__small/img/81chTLWy3JxqRTktAuE4Nb4LamI=/fit-in/200x150/filters:strip_icc()/pic5374175.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "bggRating": 7.5,
    "userRating": 7.5,
    "status": "played",
    "designers": [
      "Flaminia Brasini",
      "Virginio Gigli",
      "Simone Luciani"
    ],
    "createdAt": "2025-10-26T14:50:12.000Z",
    "updatedAt": "2025-10-26T14:50:12.000Z"
  },
  {
    "id": "game-237",
    "bggId": 182874,
    "titleKr": "Grand Austria Hotel",
    "titleEn": "Grand Austria Hotel",
    "yearPublished": 2015,
    "image": "https://cf.geekdo-images.com/GlCmHjdLwv3SqSjv52ToGw__original/img/5vNCdK9mQ0szo_SwSeVQUWnirZ8=/0x0/filters:format(jpeg)/pic6966955.jpg",
    "thumbnail": "https://cf.geekdo-images.com/GlCmHjdLwv3SqSjv52ToGw__thumb/img/WXzXZh50EGKd1U2fg75fCbFIL_8=/fit-in/200x150/filters:strip_icc()/pic6966955.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "bggRating": 7.9,
    "userRating": 7.9,
    "status": "played",
    "designers": [
      "Virginio Gigli",
      "Simone Luciani"
    ],
    "createdAt": "2024-08-25T11:01:15.000Z",
    "updatedAt": "2024-08-25T11:01:15.000Z"
  },
  {
    "id": "game-34",
    "bggId": 193738,
    "titleKr": "Great Western Trail",
    "titleEn": "Great Western Trail",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/u1l0gH7sb_vnvDvoO_QHqA__original/img/2zv_XMQoPFWk9Dn0oS4JY1IeFzw=/0x0/filters:format(jpeg)/pic4887376.jpg",
    "thumbnail": "https://cf.geekdo-images.com/u1l0gH7sb_vnvDvoO_QHqA__thumb/img/9lxFidyDb8j6D1vobx4e3UwZ-FI=/fit-in/200x150/filters:strip_icc()/pic4887376.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 75,
    "maxPlaytime": 150,
    "status": "played",
    "designers": [
      "Alexander Pfister"
    ],
    "createdAt": "2022-05-05T10:39:08.000Z",
    "updatedAt": "2022-05-05T10:39:08.000Z"
  },
  {
    "id": "game-111",
    "bggId": 250458,
    "titleKr": "Gùgōng",
    "titleEn": "Gùgōng",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/HJ263_vhLJ58QUWPvMVbEg__original/img/pUen2yvuqACs8rQ_aEt4SKViEfU=/0x0/filters:format(jpeg)/pic4143114.jpg",
    "thumbnail": "https://cf.geekdo-images.com/HJ263_vhLJ58QUWPvMVbEg__thumb/img/uRX0KCJmdwWZiL8Z7fo4V-mwm_E=/fit-in/200x150/filters:strip_icc()/pic4143114.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Andreas Steding"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-137",
    "bggId": 304783,
    "titleKr": "Hadrian's Wall",
    "titleEn": "Hadrian's Wall",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/4XzRDw3VrgNpNfZlzZl66w__original/img/SfU1sNqUtpcvhcdzspDb5M9uSQQ=/0x0/filters:format(png)/pic5608818.png",
    "thumbnail": "https://cf.geekdo-images.com/4XzRDw3VrgNpNfZlzZl66w__thumb/img/dGMBL60RMtAfcx741phN75mqlnA=/fit-in/200x150/filters:strip_icc()/pic5608818.png",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "wishlist",
    "designers": [
      "Bobby Hill"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-277",
    "bggId": 300322,
    "titleKr": "Hallertau",
    "titleEn": "Hallertau",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/AdJBpY_o7PQEcoJPU1QdTg__original/img/6iXYfqlV5oZgqMAUHyWVKxn_7AM=/0x0/filters:format(jpeg)/pic5869977.jpg",
    "thumbnail": "https://cf.geekdo-images.com/AdJBpY_o7PQEcoJPU1QdTg__thumb/img/4E7KeT1tnpwc5e4DJujgh8R8eCk=/fit-in/200x150/filters:strip_icc()/pic5869977.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 50,
    "maxPlaytime": 140,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "owned",
    "designers": [
      "Uwe Rosenberg"
    ],
    "createdAt": "2025-05-11T11:14:17.000Z",
    "updatedAt": "2025-05-11T11:14:17.000Z"
  },
  {
    "id": "game-202",
    "bggId": 352311,
    "titleKr": "Ham's Sandwich Shop",
    "titleEn": "Ham's Sandwich Shop",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/UID0grA6WNdiSvlWR2jU-A__original/img/ZPFsfc9dj9E9tLYDJ-gVTMhStwU=/0x0/filters:format(jpeg)/pic7336325.jpg",
    "thumbnail": "https://cf.geekdo-images.com/UID0grA6WNdiSvlWR2jU-A__thumb/img/FDJ2WR9oqx0ae6qkNSV85DiyNbs=/fit-in/200x150/filters:strip_icc()/pic7336325.jpg",
    "minPlayers": 2,
    "maxPlayers": 3,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 6.9,
    "userRating": 6.9,
    "status": "owned",
    "designers": [
      "Kengo Ōtsuka (大塚健吾)"
    ],
    "createdAt": "2024-03-10T10:57:02.000Z",
    "updatedAt": "2024-03-10T10:57:02.000Z"
  },
  {
    "id": "game-211",
    "bggId": 414317,
    "titleKr": "Harmonies",
    "titleEn": "Harmonies",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/A_XP2_VN3ugyqPhezowB_w__original/img/_Rv8lSr3fC1oDRkrQleQW2H2yCs=/0x0/filters:format(png)/pic8026369.png",
    "thumbnail": "https://cf.geekdo-images.com/A_XP2_VN3ugyqPhezowB_w__thumb/img/ln5eKAzhse2PIHvWn7bu-jiW_uk=/fit-in/200x150/filters:strip_icc()/pic8026369.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "bggRating": 8.4,
    "userRating": 8.4,
    "status": "owned",
    "designers": [
      "Johan Benvenuto"
    ],
    "createdAt": "2024-04-13T15:47:31.000Z",
    "updatedAt": "2024-04-13T15:47:31.000Z"
  },
  {
    "id": "game-35",
    "bggId": 169794,
    "titleKr": "Haspelknecht: The Story of Early Coal Mining",
    "titleEn": "Haspelknecht: The Story of Early Coal Mining",
    "yearPublished": 2015,
    "image": "https://cf.geekdo-images.com/fulMbj3UT2AzhW2uLB-pOg__original/img/QeMEDzMRcZ_Dt6zyO29Yaz742UM=/0x0/filters:format(jpeg)/pic3070755.jpg",
    "thumbnail": "https://cf.geekdo-images.com/fulMbj3UT2AzhW2uLB-pOg__thumb/img/eJpM3O3PorabJEJNidybPB8ZEIM=/fit-in/200x150/filters:strip_icc()/pic3070755.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "played",
    "designers": [
      "Thomas Spitzer"
    ],
    "createdAt": "2022-04-23T14:06:05.000Z",
    "updatedAt": "2022-04-23T14:06:05.000Z"
  },
  {
    "id": "game-208",
    "bggId": 366013,
    "titleKr": "Heat: Pedal to the Metal",
    "titleEn": "Heat: Pedal to the Metal",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/-vOrd4bOspibyohYExLqWg__original/img/iXU8a9WaVlwrkiEiOxWN06y9y5g=/0x0/filters:format(png)/pic6940449.png",
    "thumbnail": "https://cf.geekdo-images.com/-vOrd4bOspibyohYExLqWg__thumb/img/2GbaKvYOzWIxfgbYTk2R9puiyzo=/fit-in/200x150/filters:strip_icc()/pic6940449.png",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "bggRating": 8.1,
    "userRating": 8.1,
    "status": "played",
    "designers": [
      "Asger Harding Granerud",
      "Daniel Skjold Pedersen"
    ],
    "createdAt": "2024-04-10T18:06:48.000Z",
    "updatedAt": "2024-04-10T18:06:48.000Z"
  },
  {
    "id": "game-268",
    "bggId": 321608,
    "titleKr": "Hegemony: Lead Your Class to Victory",
    "titleEn": "Hegemony: Lead Your Class to Victory",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/DCLgJlrvB-EqL6A3WgQLMQ__original/img/vGpYcxjDBCOVcI0BcWOevspTQMQ=/0x0/filters:format(jpeg)/pic5715770.jpg",
    "thumbnail": "https://cf.geekdo-images.com/DCLgJlrvB-EqL6A3WgQLMQ__thumb/img/9yp6ANJx6cqdQqQ6hkNr3zA88vw=/fit-in/200x150/filters:strip_icc()/pic5715770.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 180,
    "bggRating": 8.4,
    "userRating": 8.4,
    "status": "owned",
    "designers": [
      "Vangelis Bagiartakis",
      "Varnavas Timotheou"
    ],
    "createdAt": "2026-01-18T16:50:30.000Z",
    "updatedAt": "2026-01-18T16:50:30.000Z"
  },
  {
    "id": "game-300",
    "bggId": 198994,
    "titleKr": "Hero Realms",
    "titleEn": "Hero Realms",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/6xc4TuJynN5o_ZF0fHOdAA__original/img/H5xSdHoOk1x5nR16LebPVRh88ZI=/0x0/filters:format(png)/pic6162556.png",
    "thumbnail": "https://cf.geekdo-images.com/6xc4TuJynN5o_ZF0fHOdAA__thumb/img/sMbWo--LyzJw_weK0h1ESSPqdtU=/fit-in/200x150/filters:strip_icc()/pic6162556.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 20,
    "maxPlaytime": 20,
    "bggRating": 7.5,
    "userRating": 7.5,
    "status": "played",
    "designers": [
      "Robert Dougherty",
      "Darwin Kastle"
    ],
    "createdAt": "2025-06-22T14:35:24.000Z",
    "updatedAt": "2025-06-22T14:35:24.000Z"
  },
  {
    "id": "game-278",
    "bggId": 318243,
    "titleKr": "HITSTER",
    "titleEn": "HITSTER",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/R4aQbIo0KZ6npxfhUc7ZYw__original/img/UnRcbzoTOs0enH35NSxGb4mqQ-k=/0x0/filters:format(png)/pic6958739.png",
    "thumbnail": "https://cf.geekdo-images.com/R4aQbIo0KZ6npxfhUc7ZYw__thumb/img/fnJz2hI7VjmEKxXUrztqU4XNlms=/fit-in/200x150/filters:strip_icc()/pic6958739.png",
    "minPlayers": 2,
    "maxPlayers": 10,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 7.6,
    "userRating": 7.6,
    "status": "owned",
    "designers": [
      "Marcus Carleson"
    ],
    "createdAt": "2025-05-11T14:10:48.000Z",
    "updatedAt": "2025-05-11T14:10:48.000Z"
  },
  {
    "id": "game-249",
    "bggId": 423434,
    "titleKr": "Horrified: World of Monsters",
    "titleEn": "Horrified: World of Monsters",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/vAXjjR0NGxe6ByES2O3smg__original/img/Ro19pEA3_7tDVcXNO8GZcaGMUEw=/0x0/filters:format(png)/pic8266078.png",
    "thumbnail": "https://cf.geekdo-images.com/vAXjjR0NGxe6ByES2O3smg__thumb/img/xHn0-ZUuuaeae1Qel_6m7BQQxMg=/fit-in/200x150/filters:strip_icc()/pic8266078.png",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 60,
    "bggRating": 7.5,
    "userRating": 7.5,
    "status": "played",
    "designers": [
      "Peter Lee",
      "Michael Mulvihill"
    ],
    "createdAt": "2024-11-17T16:41:04.000Z",
    "updatedAt": "2024-11-17T16:41:04.000Z"
  },
  {
    "id": "game-36",
    "bggId": 225167,
    "titleKr": "Human Punishment: Social Deduction 2.0",
    "titleEn": "Human Punishment: Social Deduction 2.0",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/3vOdrN4dDxNP7gjZgoWGdQ__original/img/M5yP5VSvXxhuApTuMm768aHKh7s=/0x0/filters:format(jpeg)/pic3662950.jpg",
    "thumbnail": "https://cf.geekdo-images.com/3vOdrN4dDxNP7gjZgoWGdQ__thumb/img/oadjKqe8TQu8bd4ZKkIKDljglfw=/fit-in/200x150/filters:strip_icc()/pic3662950.jpg",
    "minPlayers": 4,
    "maxPlayers": 16,
    "minPlaytime": 15,
    "maxPlaytime": 90,
    "status": "played",
    "designers": [
      "Stefan Godot"
    ],
    "createdAt": "2021-04-28T21:43:47.000Z",
    "updatedAt": "2021-04-28T21:43:47.000Z"
  },
  {
    "id": "game-129",
    "bggId": 276090,
    "titleKr": "Icaion",
    "titleEn": "Icaion",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/NEDMfUJOWHUFZjTUTKyqgA__original/img/kR6O7ZwMnqHECgGucTMTr6yYgg4=/0x0/filters:format(jpeg)/pic4653589.jpg",
    "thumbnail": "https://cf.geekdo-images.com/NEDMfUJOWHUFZjTUTKyqgA__thumb/img/ACxpbgtvmGpP0pRim2GFt25jyDI=/fit-in/200x150/filters:strip_icc()/pic4653589.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Martino Chiacchiera",
      "Marta Ciaccasassi"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-224",
    "bggId": 355217,
    "titleKr": "Icaion: Aberration",
    "titleEn": "Icaion: Aberration",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/tQXRI4hWB-Ohzwnjugh6jA__original/img/9NiLjC6BJ9Xs5VGzQaaKJdiZpuc=/0x0/filters:format(jpeg)/pic6696377.jpg",
    "thumbnail": "https://cf.geekdo-images.com/tQXRI4hWB-Ohzwnjugh6jA__thumb/img/6Ul_m30nJk_fYJIimVjdVNnwPyQ=/fit-in/200x150/filters:strip_icc()/pic6696377.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "bggRating": 7.7,
    "userRating": 7.7,
    "status": "owned",
    "designers": [],
    "createdAt": "2024-06-15T13:50:31.000Z",
    "updatedAt": "2024-06-15T13:50:31.000Z"
  },
  {
    "id": "game-223",
    "bggId": 371423,
    "titleKr": "Icaion: Solo Mode Expansion",
    "titleEn": "Icaion: Solo Mode Expansion",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/7FlXsQGfqjs5tOoMeft63Q__original/img/iPb2Vdf1FNBoKFmKqMK4D3Wk7uE=/0x0/filters:format(png)/pic7132818.png",
    "thumbnail": "https://cf.geekdo-images.com/7FlXsQGfqjs5tOoMeft63Q__thumb/img/aFQpvJKcF9tKXfQkJ3Kj6sEC18I=/fit-in/200x150/filters:strip_icc()/pic7132818.png",
    "minPlayers": 1,
    "maxPlayers": 1,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "bggRating": 7.5,
    "userRating": 7.5,
    "status": "owned",
    "designers": [
      "John Albertson",
      "Dávid Turczi",
      "Martino Chiacchiera",
      "Marta Ciaccasassi"
    ],
    "createdAt": "2024-06-15T13:50:11.000Z",
    "updatedAt": "2024-06-15T13:50:11.000Z"
  },
  {
    "id": "game-151",
    "bggId": 155821,
    "titleKr": "Inis",
    "titleEn": "Inis",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/6QE8mnPFmauoj2THsyUYPA__original/img/6bZdn1SNbpIqU7n5pwtncvdNE_U=/0x0/filters:format(jpeg)/pic4739757.jpg",
    "thumbnail": "https://cf.geekdo-images.com/6QE8mnPFmauoj2THsyUYPA__thumb/img/m63hnvHi6jqlva52FGaWbEqzjys=/fit-in/200x150/filters:strip_icc()/pic4739757.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Christian Martinez"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-207",
    "bggId": 369258,
    "titleKr": "Isle of Skye: Big Box",
    "titleEn": "Isle of Skye: Big Box",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/yppfyHm2fcjPnEE3JPma4g__original/img/LJMGFusnxqjEaTzuzUDAYsEpYOM=/0x0/filters:format(jpeg)/pic7244974.jpg",
    "thumbnail": "https://cf.geekdo-images.com/yppfyHm2fcjPnEE3JPma4g__thumb/img/zoIlkS-6YRd7iSgNWBS3EEiK7QU=/fit-in/200x150/filters:strip_icc()/pic7244974.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 60,
    "bggRating": 8,
    "userRating": 8,
    "status": "played",
    "designers": [
      "Andreas Pelikan",
      "Alexander Pfister"
    ],
    "createdAt": "2024-04-10T16:49:31.000Z",
    "updatedAt": "2024-04-10T16:49:31.000Z"
  },
  {
    "id": "game-123",
    "bggId": 325494,
    "titleKr": "ISS Vanguard",
    "titleEn": "ISS Vanguard",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/1ySeZNVkVwTvqykMGtHFFQ__original/img/WMa7R2ViiGzzWpKWEdJAOv518PU=/0x0/filters:format(jpeg)/pic7245199.jpg",
    "thumbnail": "https://cf.geekdo-images.com/1ySeZNVkVwTvqykMGtHFFQ__thumb/img/pXp7JQo64YalithQyDM7tufyasA=/fit-in/200x150/filters:strip_icc()/pic7245199.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "status": "wishlist",
    "designers": [
      "Andrzej Betkiewicz",
      "Krzysztof Piskorski",
      "Paweł Samborski",
      "Marcin Świerkot"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-149",
    "bggId": 307621,
    "titleKr": "K2: Big Box",
    "titleEn": "K2: Big Box",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/xuOZlc9DvjmhAizVxn9h8A__original/img/GQxRED2aIZS4wNaZztmuC31Jd7w=/0x0/filters:format(png)/pic5579120.png",
    "thumbnail": "https://cf.geekdo-images.com/xuOZlc9DvjmhAizVxn9h8A__thumb/img/LOQJiNP2oU_4811Nu-eGCfNThE0=/fit-in/200x150/filters:strip_icc()/pic5579120.png",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Adam Kałuża"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-160",
    "bggId": 200147,
    "titleKr": "Kanagawa",
    "titleEn": "Kanagawa",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/Rr2JrRztCFzzikJ9YL5-Dw__original/img/-v_1QOvedVYSmOkWsmQuROJCHI0=/0x0/filters:format(jpeg)/pic3105168.jpg",
    "thumbnail": "https://cf.geekdo-images.com/Rr2JrRztCFzzikJ9YL5-Dw__thumb/img/x9MtKEQlcQ_jS-5AVMeZ28NOC0s=/fit-in/200x150/filters:strip_icc()/pic3105168.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Bruno Cathala",
      "Charles Chevallier"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-37",
    "bggId": 284378,
    "titleKr": "Kanban EV",
    "titleEn": "Kanban EV",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/L2Wn-zUqkcHgqvwvY212Ig__original/img/Htra4hvxjBlejtNEIUns_B3CNNc=/0x0/filters:format(jpeg)/pic4924232.jpg",
    "thumbnail": "https://cf.geekdo-images.com/L2Wn-zUqkcHgqvwvY212Ig__thumb/img/RQunBacBw949DkYBgzoS5YaXgJo=/fit-in/200x150/filters:strip_icc()/pic4924232.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 180,
    "status": "played",
    "designers": [
      "Vital Lacerda"
    ],
    "createdAt": "2022-05-21T13:56:02.000Z",
    "updatedAt": "2022-05-21T13:56:02.000Z"
  },
  {
    "id": "game-169",
    "bggId": 109276,
    "titleKr": "Kanban: Driver's Edition",
    "titleEn": "Kanban: Driver's Edition",
    "yearPublished": 2014,
    "image": "https://cf.geekdo-images.com/rzSmS-GD8_pGl9bWo07FWQ__original/img/TFtpuGRO0cbVjWl03YhtzTBRk5A=/0x0/filters:format(jpeg)/pic5638431.jpg",
    "thumbnail": "https://cf.geekdo-images.com/rzSmS-GD8_pGl9bWo07FWQ__thumb/img/jo2betPcpo8mVZPIs993TT_nOMo=/fit-in/200x150/filters:strip_icc()/pic5638431.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Vital Lacerda"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-357",
    "bggId": 13,
    "titleKr": "Katan",
    "titleEn": "Catan",
    "yearPublished": 1995,
    "image": "https://cf.geekdo-images.com/0XODRpReiZBFUffEcqT5-Q__original/img/oRc0AomWA9ZtFqQDZiZbIyKE1j0=/0x0/filters:format(png)/pic9156909.png",
    "thumbnail": "https://cf.geekdo-images.com/0XODRpReiZBFUffEcqT5-Q__small/img/SNVfF23OQafv3u8xdFolJnMkBoM=/fit-in/200x150/filters:strip_icc()/pic9156909.png",
    "minPlayers": 3,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "bggRating": 7.1,
    "userRating": 7.1,
    "status": "played",
    "designers": [
      "Klaus Teuber"
    ],
    "createdAt": "2026-08-17T19:09:35.000Z",
    "updatedAt": "2026-08-17T19:09:35.000Z"
  },
  {
    "id": "game-163",
    "bggId": 223953,
    "titleKr": "Kitchen Rush",
    "titleEn": "Kitchen Rush",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/tNhxjR4AzMPY9WxOPS-gZQ__original/img/tR_u2HNo6QaTrGxqcuJ7-MeUWXA=/0x0/filters:format(jpeg)/pic3559531.jpg",
    "thumbnail": "https://cf.geekdo-images.com/tNhxjR4AzMPY9WxOPS-gZQ__thumb/img/Urs4Wd-AgM0sbY-rlD_dFJeOdZs=/fit-in/200x150/filters:strip_icc()/pic3559531.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "prevowned",
    "designers": [
      "Vangelis Bagiartakis",
      "Dávid Turczi"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-187",
    "bggId": 348450,
    "titleKr": "Lacrimosa",
    "titleEn": "Lacrimosa",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/0aS85HPSKKGHGVvWQEEZew__original/img/Ww2bs-arDFMqVhte3VOtmGlq_SQ=/0x0/filters:format(jpeg)/pic6795274.jpg",
    "thumbnail": "https://cf.geekdo-images.com/0aS85HPSKKGHGVvWQEEZew__thumb/img/Vxx4SHednYKXpDMP6eHTK9DqmSc=/fit-in/200x150/filters:strip_icc()/pic6795274.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Gerard Ascensi",
      "Ferran Renalias"
    ],
    "createdAt": "2023-07-02T10:22:46.000Z",
    "updatedAt": "2023-07-02T10:22:46.000Z"
  },
  {
    "id": "game-292",
    "bggId": 117959,
    "titleKr": "Las Vegas",
    "titleEn": "Las Vegas",
    "yearPublished": 2012,
    "image": "https://cf.geekdo-images.com/aQJ0HRKx2mobP0g3FCeR_Q__original/img/0lvxwLBBElto13XPMisB0ZCTSkA=/0x0/filters:format(jpeg)/pic1261796.jpg",
    "thumbnail": "https://cf.geekdo-images.com/aQJ0HRKx2mobP0g3FCeR_Q__thumb/img/7g-l6beAu5RtsAykBhoO7kMWexc=/fit-in/200x150/filters:strip_icc()/pic1261796.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 7.2,
    "userRating": 7.2,
    "status": "owned",
    "designers": [
      "Rüdiger Dorn"
    ],
    "createdAt": "2025-06-07T17:31:48.000Z",
    "updatedAt": "2025-06-07T17:31:48.000Z"
  },
  {
    "id": "game-80",
    "bggId": 173064,
    "titleKr": "Leaving Earth",
    "titleEn": "Leaving Earth",
    "yearPublished": 2015,
    "image": "https://cf.geekdo-images.com/rpjQ2X1g2fau-VsgAYvo2A__original/img/PA_s9w-JeySUq-2DvbAOnZ9Sl30=/0x0/filters:format(jpeg)/pic2624698.jpg",
    "thumbnail": "https://cf.geekdo-images.com/rpjQ2X1g2fau-VsgAYvo2A__thumb/img/Mryb8qHHoDA9nYeA0K8gKugHCWw=/fit-in/200x150/filters:strip_icc()/pic2624698.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 180,
    "status": "wishlist",
    "designers": [
      "Joseph Fatula"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-38",
    "bggId": 260757,
    "titleKr": "Lift Off",
    "titleEn": "Lift Off",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/EBMYmLaPwMfUUaiO90Ozyw__original/img/wmGwmg2OW3-k_vkmzoIdG1T1dTc=/0x0/filters:format(png)/pic4313310.png",
    "thumbnail": "https://cf.geekdo-images.com/EBMYmLaPwMfUUaiO90Ozyw__thumb/img/n3SQEB2pqSnMrMruFNppS-xpl_Y=/fit-in/200x150/filters:strip_icc()/pic4313310.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "played",
    "designers": [
      "Jeroen Vandersteen"
    ],
    "createdAt": "2021-04-28T21:43:47.000Z",
    "updatedAt": "2021-04-28T21:43:47.000Z"
  },
  {
    "id": "game-148",
    "bggId": 312484,
    "titleKr": "Lost Ruins of Arnak",
    "titleEn": "Lost Ruins of Arnak",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/6GqH14TJJhza86BX5HCLEQ__original/img/CXqwimJPonWy1oyXEMgPN_ZVmUI=/0x0/filters:format(jpeg)/pic5674958.jpg",
    "thumbnail": "https://cf.geekdo-images.com/6GqH14TJJhza86BX5HCLEQ__thumb/img/J8SVmGOJXZGxNjkT3xYNQU7Haxg=/fit-in/200x150/filters:strip_icc()/pic5674958.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Elwen",
      "Mín"
    ],
    "createdAt": "2026-08-08T20:14:19.000Z",
    "updatedAt": "2026-08-08T20:14:19.000Z"
  },
  {
    "id": "game-316",
    "bggId": 371330,
    "titleKr": "Luthier",
    "titleEn": "Luthier",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/NNOCMpxKchQb_ByLmvDfRQ__original/img/-0mnuZeWP3DNRiw-w6G3fPfNXik=/0x0/filters:format(png)/pic8145392.png",
    "thumbnail": "https://cf.geekdo-images.com/NNOCMpxKchQb_ByLmvDfRQ__small/img/hgZk4xlsFSfbXyMy2Y32dFqXCHM=/fit-in/200x150/filters:strip_icc()/pic8145392.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 150,
    "bggRating": 8.3,
    "userRating": 8.3,
    "status": "owned",
    "designers": [
      "Dave Beck",
      "Abe Burson"
    ],
    "createdAt": "2025-10-11T14:25:07.000Z",
    "updatedAt": "2025-10-11T14:25:07.000Z"
  },
  {
    "id": "game-95",
    "bggId": 2093,
    "titleKr": "Mahjong",
    "titleEn": "Mahjong",
    "yearPublished": 1850,
    "image": "https://cf.geekdo-images.com/R2R8UHcaRNJwaCJq8PJGFQ__original/img/qjjJqaGaMogvjhygppEy7Yg5p3E=/0x0/filters:format(jpeg)/pic43709.jpg",
    "thumbnail": "https://cf.geekdo-images.com/R2R8UHcaRNJwaCJq8PJGFQ__thumb/img/wxs22a4TfQjVpfpmNvaTdPo0FHY=/fit-in/200x150/filters:strip_icc()/pic43709.jpg",
    "minPlayers": 3,
    "maxPlayers": 4,
    "minPlaytime": 120,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "(Uncredited)"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-103",
    "bggId": 276025,
    "titleKr": "Maracaibo",
    "titleEn": "Maracaibo",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/rMNa0k05zMdKgSEp26Q3Tw__original/img/yhnCcq9UplffqjSCe08mjTFvgOM=/0x0/filters:format(jpeg)/pic4917407.jpg",
    "thumbnail": "https://cf.geekdo-images.com/rMNa0k05zMdKgSEp26Q3Tw__thumb/img/lVlnhYyxlZb3WuKZJHLoJcFHEjs=/fit-in/200x150/filters:strip_icc()/pic4917407.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 120,
    "status": "prevowned",
    "designers": [
      "Alexander Pfister"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-178",
    "bggId": 348406,
    "titleKr": "Marvel Dice Throne",
    "titleEn": "Marvel Dice Throne",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/LEkxd7ts6JwMvNBkz6Eavw__original/img/k82R6yTM1OghfGGndt2-cCC5Mrc=/0x0/filters:format(jpeg)/pic6796048.jpg",
    "thumbnail": "https://cf.geekdo-images.com/LEkxd7ts6JwMvNBkz6Eavw__thumb/img/42MA7lGbfeM-hePXc7Dy3JwBj9k=/fit-in/200x150/filters:strip_icc()/pic6796048.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 20,
    "maxPlaytime": 40,
    "status": "owned",
    "designers": [
      "Gavan Brown",
      "Nate Chatellier",
      "Manny Trembley"
    ],
    "createdAt": "2025-03-16T13:50:37.000Z",
    "updatedAt": "2025-03-16T13:50:37.000Z"
  },
  {
    "id": "game-293",
    "bggId": 193214,
    "titleKr": "Meeple Circus",
    "titleEn": "Meeple Circus",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/jmdwGVSEsYR9WQ8_Cjjlhg__original/img/WdVD5izYS30uZdZdQSOUSc2lB4w=/0x0/filters:format(jpeg)/pic3895016.jpg",
    "thumbnail": "https://cf.geekdo-images.com/jmdwGVSEsYR9WQ8_Cjjlhg__thumb/img/BV0SAwXm1ICEIVBlQLE8JD4ZC9c=/fit-in/200x150/filters:strip_icc()/pic3895016.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "bggRating": 7,
    "userRating": 7,
    "status": "owned",
    "designers": [
      "Cédric Millet"
    ],
    "createdAt": "2025-06-07T18:27:27.000Z",
    "updatedAt": "2025-06-07T18:27:27.000Z"
  },
  {
    "id": "game-39",
    "bggId": 238799,
    "titleKr": "Messina 1347",
    "titleEn": "Messina 1347",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/Pw9TGohEb7PITFJnuq48bQ__original/img/W4JriNN41N9CK2e2pQgmz9Ud9bY=/0x0/filters:format(jpeg)/pic6397342.jpg",
    "thumbnail": "https://cf.geekdo-images.com/Pw9TGohEb7PITFJnuq48bQ__thumb/img/bWVi55qMYTv6VrQNHFllltHLlZI=/fit-in/200x150/filters:strip_icc()/pic6397342.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 45,
    "maxPlaytime": 120,
    "status": "played",
    "designers": [
      "Raúl Fernández Aparicio",
      "Vladimír Suchý"
    ],
    "createdAt": "2022-03-06T13:59:52.000Z",
    "updatedAt": "2022-03-06T13:59:52.000Z"
  },
  {
    "id": "game-79",
    "bggId": 318977,
    "titleKr": "MicroMacro: Crime City",
    "titleEn": "MicroMacro: Crime City",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/1M-1d6fr3U9t670MCVOTeg__original/img/QxxRpFr57KrNdyFSzslHPN95mSA=/0x0/filters:format(jpeg)/pic5896816.jpg",
    "thumbnail": "https://cf.geekdo-images.com/1M-1d6fr3U9t670MCVOTeg__thumb/img/aR9LNVhRr_hnIIoYwxFUTb8rPMk=/fit-in/200x150/filters:strip_icc()/pic5896816.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 15,
    "maxPlaytime": 45,
    "status": "prevowned",
    "designers": [
      "Johannes Sich"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-143",
    "bggId": 338834,
    "titleKr": "MicroMacro: Crime City – Full House",
    "titleEn": "MicroMacro: Crime City – Full House",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/bNuZIssobDbFYaLbgMofgw__original/img/_UyVrUsVU_AZNO93QmcosKGs0TA=/0x0/filters:format(jpeg)/pic6242068.jpg",
    "thumbnail": "https://cf.geekdo-images.com/bNuZIssobDbFYaLbgMofgw__thumb/img/VEB-DHKUWobYsUOFwuywHnsbF2k=/fit-in/200x150/filters:strip_icc()/pic6242068.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 15,
    "maxPlaytime": 45,
    "status": "prevowned",
    "designers": [
      "Johannes Sich"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-218",
    "bggId": 367929,
    "titleKr": "Millimemory",
    "titleEn": "Millimemory",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/WF1umNtdqTPJm5Awfu5paA__original/img/Rga2X2wGhlZGWnx-utwrpjAWvbw=/0x0/filters:format(png)/pic7736468.png",
    "thumbnail": "https://cf.geekdo-images.com/WF1umNtdqTPJm5Awfu5paA__thumb/img/Mo0GyDJkP8bqdXOznFAylGxeQJ4=/fit-in/200x150/filters:strip_icc()/pic7736468.png",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 10,
    "maxPlaytime": 20,
    "bggRating": 6.7,
    "userRating": 6.7,
    "status": "played",
    "designers": [],
    "createdAt": "2025-05-04T17:33:58.000Z",
    "updatedAt": "2025-05-04T17:33:58.000Z"
  },
  {
    "id": "game-219",
    "bggId": 284653,
    "titleKr": "Mind MGMT: The Psychic Espionage “Game.”",
    "titleEn": "Mind MGMT: The Psychic Espionage “Game.”",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/hYP-VIJGRFR8yB78-UN7Rg__original/img/3vUqoYuF2SrVU0n752sfU3bBhHc=/0x0/filters:format(jpeg)/pic5154610.jpg",
    "thumbnail": "https://cf.geekdo-images.com/hYP-VIJGRFR8yB78-UN7Rg__thumb/img/e0Yk_RzMK0b7jwcoR96UeJpjy3c=/fit-in/200x150/filters:strip_icc()/pic5154610.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 60,
    "bggRating": 7.9,
    "userRating": 7.9,
    "status": "owned",
    "designers": [
      "Jay Cormier",
      "Sen-Foong Lim"
    ],
    "createdAt": "2024-05-05T14:34:36.000Z",
    "updatedAt": "2024-05-05T14:34:36.000Z"
  },
  {
    "id": "game-329",
    "bggId": 422780,
    "titleKr": "Mistborn: The Deckbuilding Game",
    "titleEn": "Mistborn: The Deckbuilding Game",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/Fr_k9-uU3hEUnw_3s-UnZQ__original/img/XhMQVwHzTcQPTS_2cjIn_NdZJwM=/0x0/filters:format(png)/pic8290518.png",
    "thumbnail": "https://cf.geekdo-images.com/Fr_k9-uU3hEUnw_3s-UnZQ__small/img/YLbnyONFWmI-9bu5J30aZke7BjI=/fit-in/200x150/filters:strip_icc()/pic8290518.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "bggRating": 7.7,
    "userRating": 7.7,
    "status": "played",
    "designers": [
      "John D. Clair"
    ],
    "createdAt": "2025-12-08T20:42:26.000Z",
    "updatedAt": "2025-12-08T20:42:26.000Z"
  },
  {
    "id": "game-326",
    "bggId": 118,
    "titleKr": "Modern Art",
    "titleEn": "Modern Art",
    "yearPublished": 1992,
    "image": "https://cf.geekdo-images.com/wLto-xaabHwKQe_Bc4iD1Q__original/img/s3Gai8XBTVfWFFlYpL4XF3kIlWU=/0x0/filters:format(png)/pic3458036.png",
    "thumbnail": "https://cf.geekdo-images.com/wLto-xaabHwKQe_Bc4iD1Q__small/img/AUqMholGVlwXLjMcxwiziE_7Ffw=/fit-in/200x150/filters:strip_icc()/pic3458036.png",
    "minPlayers": 3,
    "maxPlayers": 5,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "bggRating": 7.5,
    "userRating": 7.5,
    "status": "owned",
    "designers": [
      "Reiner Knizia"
    ],
    "createdAt": "2025-11-16T14:56:36.000Z",
    "updatedAt": "2025-11-16T14:56:36.000Z"
  },
  {
    "id": "game-289",
    "bggId": 433106,
    "titleKr": "Mole Poker",
    "titleEn": "Mole Poker",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/RClHiw5h_0zkx0oqef7MEw__original/img/8261TSmqOBg7UGgO7GB9N_1xg1Q=/0x0/filters:format(jpeg)/pic8567670.jpg",
    "thumbnail": "https://cf.geekdo-images.com/RClHiw5h_0zkx0oqef7MEw__thumb/img/9JlAHpd9awtSPsaqzX2guhbpUlg=/fit-in/200x150/filters:strip_icc()/pic8567670.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "bggRating": 6.7,
    "userRating": 6.7,
    "status": "played",
    "designers": [
      "宮野 華也 (Kaya Miyano)"
    ],
    "createdAt": "2025-05-25T12:16:30.000Z",
    "updatedAt": "2025-05-25T12:16:30.000Z"
  },
  {
    "id": "game-248",
    "bggId": 412911,
    "titleKr": "Monkey Palace",
    "titleEn": "Monkey Palace",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/E0_jjeKtADvRnn0vSVGgeQ__original/img/47wS0eCENy1h2sD223YMs4aq0Vg=/0x0/filters:format(png)/pic8445137.png",
    "thumbnail": "https://cf.geekdo-images.com/E0_jjeKtADvRnn0vSVGgeQ__thumb/img/oZkmJTRjIayLYOCs8eStlOVEEgo=/fit-in/200x150/filters:strip_icc()/pic8445137.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "bggRating": 7.3,
    "userRating": 7.3,
    "status": "played",
    "designers": [
      "David Gordon (I)",
      "TAM"
    ],
    "createdAt": "2024-11-17T10:11:40.000Z",
    "updatedAt": "2024-11-17T10:11:40.000Z"
  },
  {
    "id": "game-309",
    "bggId": 38984,
    "titleKr": "MOW",
    "titleEn": "MOW",
    "yearPublished": 2008,
    "image": "https://cf.geekdo-images.com/O2SuILovfm8pbrMzYD-YQQ__original/img/wRjHjhHt54Bv_MwI57YgaF6K-dU=/0x0/filters:format(png)/pic6884031.png",
    "thumbnail": "https://cf.geekdo-images.com/O2SuILovfm8pbrMzYD-YQQ__thumb/img/kkgAiUuoQO5KeYkp56x01gzK02I=/fit-in/200x150/filters:strip_icc()/pic6884031.png",
    "minPlayers": 2,
    "maxPlayers": 10,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "bggRating": 6.1,
    "userRating": 6.1,
    "status": "owned",
    "designers": [
      "Bruno Cathala"
    ],
    "createdAt": "2025-07-19T16:54:54.000Z",
    "updatedAt": "2025-07-19T16:54:54.000Z"
  },
  {
    "id": "game-239",
    "bggId": 415623,
    "titleKr": "Murder Mystery Mini: CANARY tells no tales",
    "titleEn": "Murder Mystery Mini: CANARY tells no tales",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/fD9wrkqcdmuri-egtUxECA__original/img/dC7MK-GvVPLIuWR92VF_vKOFPP8=/0x0/filters:format(png)/pic8059682.png",
    "thumbnail": "https://cf.geekdo-images.com/fD9wrkqcdmuri-egtUxECA__thumb/img/sqNGBHnzZt2UhkXAkEZ4mC90PZk=/fit-in/200x150/filters:strip_icc()/pic8059682.png",
    "minPlayers": 4,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 90,
    "bggRating": 7.4,
    "userRating": 7.4,
    "status": "played",
    "designers": [
      "Tadaaki Kawahito"
    ],
    "createdAt": "2024-10-12T15:29:38.000Z",
    "updatedAt": "2024-10-12T15:29:38.000Z"
  },
  {
    "id": "game-101",
    "bggId": 295486,
    "titleKr": "My City",
    "titleEn": "My City",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/vjLg-uWRx3SICFZQehHqkA__original/img/fcpeirA9AFdj0MJE_movOvHAK2E=/0x0/filters:format(jpeg)/pic5428585.jpg",
    "thumbnail": "https://cf.geekdo-images.com/vjLg-uWRx3SICFZQehHqkA__thumb/img/-0dgIVp3J1dIi1dD7WddEfEctzw=/fit-in/200x150/filters:strip_icc()/pic5428585.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "prevowned",
    "designers": [
      "Reiner Knizia"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-256",
    "bggId": 378476,
    "titleKr": "Mycelia",
    "titleEn": "Mycelia",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/0DDStf5eJUgtSpBzXyYhig__original/img/r1xCqjeUl2kok4IbcpdFpYiSmx4=/0x0/filters:format(jpeg)/pic7431245.jpg",
    "thumbnail": "https://cf.geekdo-images.com/0DDStf5eJUgtSpBzXyYhig__thumb/img/RsWfjhvdiz2DMYijRU6hOOZMPyQ=/fit-in/200x150/filters:strip_icc()/pic7431245.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 40,
    "maxPlaytime": 90,
    "bggRating": 7.4,
    "userRating": 7.4,
    "status": "owned",
    "designers": [
      "J.J. Neville"
    ],
    "createdAt": "2024-12-28T14:33:42.000Z",
    "updatedAt": "2024-12-28T14:33:42.000Z"
  },
  {
    "id": "game-40",
    "bggId": 242653,
    "titleKr": "Mysthea",
    "titleEn": "Mysthea",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/jfk-kD0mrLQ6XEKQfO5TuQ__original/img/vVO-B-ks777WK8dz5tYjdc4VJUg=/0x0/filters:format(png)/pic3980663.png",
    "thumbnail": "https://cf.geekdo-images.com/jfk-kD0mrLQ6XEKQfO5TuQ__thumb/img/tU3byM579bW1HtseUzW1IWtxmjo=/fit-in/200x150/filters:strip_icc()/pic3980663.png",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Martino Chiacchiera",
      "Marta Ciaccasassi"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-225",
    "bggId": 276551,
    "titleKr": "Mysthea: The Fall",
    "titleEn": "Mysthea: The Fall",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/qXkWezHpvu8AZbhWzJrlfw__original/img/QL8Q80U7EzAowggypd-m-g4B8mU=/0x0/filters:format(jpeg)/pic4683829.jpg",
    "thumbnail": "https://cf.geekdo-images.com/qXkWezHpvu8AZbhWzJrlfw__thumb/img/80tqFHQjiBvJ824I84is-fACt7A=/fit-in/200x150/filters:strip_icc()/pic4683829.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "bggRating": 7.9,
    "userRating": 7.9,
    "status": "owned",
    "designers": [
      "Martino Chiacchiera",
      "Marta Ciaccasassi"
    ],
    "createdAt": "2024-06-15T13:51:12.000Z",
    "updatedAt": "2024-06-15T13:51:12.000Z"
  },
  {
    "id": "game-127",
    "bggId": 186751,
    "titleKr": "Mythic Battles: Pantheon",
    "titleEn": "Mythic Battles: Pantheon",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/au7lklR-A_0nnTskm4Vohw__original/img/zaRDFiH0FaeA_V73P-mpnKMfk9k=/0x0/filters:format(jpeg)/pic3235453.jpg",
    "thumbnail": "https://cf.geekdo-images.com/au7lklR-A_0nnTskm4Vohw__thumb/img/MPylcXlXo-YF-rsanQIy9DaaGcs=/fit-in/200x150/filters:strip_icc()/pic3235453.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Benoit Vogt"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-99",
    "bggId": 242993,
    "titleKr": "Mythic Battles: Pantheon – Atlas",
    "titleEn": "Mythic Battles: Pantheon – Atlas",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/tdZs3nGQLYig9zmOTUxBdw__original/img/N2qztOnHC_ZgWOJty1xsx-0wkgU=/0x0/filters:format(jpeg)/pic3954092.jpg",
    "thumbnail": "https://cf.geekdo-images.com/tdZs3nGQLYig9zmOTUxBdw__thumb/img/ooyA0baSY8aqYdWOZhyD8gv4jjA=/fit-in/200x150/filters:strip_icc()/pic3954092.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Benoit Vogt"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-117",
    "bggId": 220000,
    "titleKr": "Mythic Battles: Pantheon – Pandora's Box",
    "titleEn": "Mythic Battles: Pantheon – Pandora's Box",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/IpuRbGAh2HSE9shBbsXpaQ__original/img/TfWFzTudZ-pi825AAv2AeDxRfPs=/0x0/filters:format(png)/pic3500579.png",
    "thumbnail": "https://cf.geekdo-images.com/IpuRbGAh2HSE9shBbsXpaQ__thumb/img/CZAPBU3GVcaraSjYKz7REfJbOog=/fit-in/200x150/filters:strip_icc()/pic3500579.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 45,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Benoit Vogt"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-301",
    "bggId": 401168,
    "titleKr": "nana: Christmas Edition",
    "titleEn": "nana: Christmas Edition",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/CGnp5QoZkWkXWpG1_7iMkg__original/img/_YdugBt4lzjF5JDK_2-NyYnVcgU=/0x0/filters:format(jpeg)/pic7730999.jpg",
    "thumbnail": "https://cf.geekdo-images.com/CGnp5QoZkWkXWpG1_7iMkg__thumb/img/9tSti3Hfko29ptei5uNuPOtDtnE=/fit-in/200x150/filters:strip_icc()/pic7730999.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 5,
    "maxPlaytime": 15,
    "bggRating": 7.6,
    "userRating": 7.6,
    "status": "played",
    "designers": [
      "宮野 華也 (Kaya Miyano)"
    ],
    "createdAt": "2025-06-29T17:12:12.000Z",
    "updatedAt": "2025-06-29T17:12:12.000Z"
  },
  {
    "id": "game-116",
    "bggId": 195421,
    "titleKr": "Near and Far",
    "titleEn": "Near and Far",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/lm8OOgJupqd3Q-fZ3DsQhw__original/img/hTV2P_-UPntaLbQB3Dl17LYz42A=/0x0/filters:format(jpeg)/pic3605785.jpg",
    "thumbnail": "https://cf.geekdo-images.com/lm8OOgJupqd3Q-fZ3DsQhw__thumb/img/mZV5Pve42U5PlK-GkFSDTDXCzdg=/fit-in/200x150/filters:strip_icc()/pic3605785.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "status": "prevowned",
    "designers": [
      "Ryan Laukat"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-41",
    "bggId": 167355,
    "titleKr": "Nemesis",
    "titleEn": "Nemesis",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/tAqLpWxQ0Oo3GaPP3MER1g__original/img/sA6r1p6BO_Tgyc3-xgIESC9Y-vg=/0x0/filters:format(jpeg)/pic5073276.jpg",
    "thumbnail": "https://cf.geekdo-images.com/tAqLpWxQ0Oo3GaPP3MER1g__thumb/img/sMIg7_b5ekS1xm6cBIoMFpH0MZs=/fit-in/200x150/filters:strip_icc()/pic5073276.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 90,
    "maxPlaytime": 180,
    "status": "played",
    "designers": [
      "Adam Kwapiński"
    ],
    "createdAt": "2021-04-28T21:44:29.000Z",
    "updatedAt": "2021-04-28T21:44:29.000Z"
  },
  {
    "id": "game-42",
    "bggId": 245931,
    "titleKr": "Nētā-Tanka: Deluxe Edition",
    "titleEn": "Nētā-Tanka: Deluxe Edition",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/lA-IGC3C5fghAhlZoQRhwg__original/img/kUtxPwWvOZYMIiAVuGguavdPs1A=/0x0/filters:format(jpeg)/pic4766535.jpg",
    "thumbnail": "https://cf.geekdo-images.com/lA-IGC3C5fghAhlZoQRhwg__thumb/img/l0Qt3uxqqRUnc_oNx6yizrmXNkg=/fit-in/200x150/filters:strip_icc()/pic4766535.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "played",
    "designers": [
      "Hervé Rigal"
    ],
    "createdAt": "2021-04-28T21:43:47.000Z",
    "updatedAt": "2021-04-28T21:43:47.000Z"
  },
  {
    "id": "game-343",
    "bggId": 294693,
    "titleKr": "Nokosu Dice",
    "titleEn": "Nokosu Dice",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/lbtoLuxIdsY82pJydTZVBQ__original/img/172KzAcd9ogmu9qjj_n0qeUrgUo=/0x0/filters:format(jpeg)/pic5069035.jpg",
    "thumbnail": "https://cf.geekdo-images.com/lbtoLuxIdsY82pJydTZVBQ__small/img/caYZg_oGMJ9bWl4Ot4PEzLa4Pu8=/fit-in/200x150/filters:strip_icc()/pic5069035.jpg",
    "minPlayers": 3,
    "maxPlayers": 5,
    "minPlaytime": 45,
    "maxPlaytime": 60,
    "bggRating": 7.6,
    "userRating": 7.6,
    "status": "played",
    "designers": [
      "Yusuke Matsumoto"
    ],
    "createdAt": "2026-05-03T18:24:06.000Z",
    "updatedAt": "2026-05-03T18:24:06.000Z"
  },
  {
    "id": "game-269",
    "bggId": 396790,
    "titleKr": "Nucleum",
    "titleEn": "Nucleum",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/fIVUaMvbfy6GCOgfxt7xaw__original/img/dBMnuz3SrgxsDLHT6pwbQFPQBIw=/0x0/filters:format(jpeg)/pic7647168.jpg",
    "thumbnail": "https://cf.geekdo-images.com/fIVUaMvbfy6GCOgfxt7xaw__thumb/img/jKsO4nKmtNjX5bfH7aCPeK7hsqU=/fit-in/200x150/filters:strip_icc()/pic7647168.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 150,
    "bggRating": 8.2,
    "userRating": 8.2,
    "status": "played",
    "designers": [
      "Simone Luciani",
      "Dávid Turczi"
    ],
    "createdAt": "2025-03-09T10:24:27.000Z",
    "updatedAt": "2025-03-09T10:24:27.000Z"
  },
  {
    "id": "game-263",
    "bggId": 217449,
    "titleKr": "Number 9",
    "titleEn": "NMBR 9",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/a6j6yZmBJ5J2hcuo0KOW-A__original/img/PtqzpYyf8ENzK589ZVNifR62V3Y=/0x0/filters:format(jpeg)/pic3328269.jpg",
    "thumbnail": "https://cf.geekdo-images.com/a6j6yZmBJ5J2hcuo0KOW-A__thumb/img/w62iXqdK9cU_QCAwJffXewexjaU=/fit-in/200x150/filters:strip_icc()/pic3328269.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 20,
    "maxPlaytime": 20,
    "bggRating": 6.8,
    "userRating": 6.8,
    "status": "played",
    "designers": [
      "Peter Wichmann"
    ],
    "createdAt": "2025-02-15T14:01:42.000Z",
    "updatedAt": "2025-02-15T14:01:42.000Z"
  },
  {
    "id": "game-176",
    "bggId": 291572,
    "titleKr": "Oath: Chronicles of Empire and Exile",
    "titleEn": "Oath: Chronicles of Empire and Exile",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/gTxav_KKQK1rDg-XuCjCSA__original/img/lG-iXVzDlfFrD6VPggvg2WQ7228=/0x0/filters:format(jpeg)/pic5164812.jpg",
    "thumbnail": "https://cf.geekdo-images.com/gTxav_KKQK1rDg-XuCjCSA__thumb/img/tFTOAKG5aDXxYfNRmJNmfyxH83M=/fit-in/200x150/filters:strip_icc()/pic5164812.jpg",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 45,
    "maxPlaytime": 150,
    "status": "owned",
    "designers": [
      "Cole Wehrle"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-231",
    "bggId": 406854,
    "titleKr": "Odin",
    "titleEn": "Odin",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/hh5YOk9OQ3e0uJbMOfvT2g__original/img/pq_dOY_tC4Owv3RnTIlYEcsDHrs=/0x0/filters:format(jpeg)/pic7921978.jpg",
    "thumbnail": "https://cf.geekdo-images.com/hh5YOk9OQ3e0uJbMOfvT2g__thumb/img/bYaPoCwSz2lq-tAtb_60fPqiNzA=/fit-in/200x150/filters:strip_icc()/pic7921978.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "bggRating": 7,
    "userRating": 7,
    "status": "played",
    "designers": [
      "Yohan Goh",
      "Hope S. Hwang",
      "Gary Kim"
    ],
    "createdAt": "2024-07-28T18:11:34.000Z",
    "updatedAt": "2024-07-28T18:11:34.000Z"
  },
  {
    "id": "game-232",
    "bggId": 341192,
    "titleKr": "Oh Really?",
    "titleEn": "Oh Really?",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/DAHWxwS-BaxCA5c9UV_VwQ__original/img/96I55OXu2Dfy51mHf-7iJCiIIoA=/0x0/filters:format(png)/pic6858976.png",
    "thumbnail": "https://cf.geekdo-images.com/DAHWxwS-BaxCA5c9UV_VwQ__thumb/img/_sCR8vrnoBsIdbQ_7UQC2Wo2yrI=/fit-in/200x150/filters:strip_icc()/pic6858976.png",
    "minPlayers": 2,
    "maxPlayers": 8,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 6.6,
    "userRating": 6.6,
    "status": "played",
    "designers": [
      "MC Marquis"
    ],
    "createdAt": "2024-07-28T18:20:59.000Z",
    "updatedAt": "2024-07-28T18:20:59.000Z"
  },
  {
    "id": "game-43",
    "bggId": 184267,
    "titleKr": "On Mars",
    "titleEn": "On Mars",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/Nm0Iw8NoiM9V8IsifimGBw__original/img/GNjjsgxq7wYO9pSIteDJe6Sxt00=/0x0/filters:format(jpeg)/pic4357658.jpg",
    "thumbnail": "https://cf.geekdo-images.com/Nm0Iw8NoiM9V8IsifimGBw__thumb/img/4GFbhkEWyIublXmikE2Tep6wSIQ=/fit-in/200x150/filters:strip_icc()/pic4357658.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 150,
    "status": "owned",
    "designers": [
      "Vital Lacerda"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-307",
    "bggId": 416952,
    "titleKr": "ONDA",
    "titleEn": "ONDA",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/vd0pWYhTDeThGnuFIydFqw__original/img/aR6Msmeyal2ucZxTRDSvPjjErwo=/0x0/filters:format(png)/pic8181455.png",
    "thumbnail": "https://cf.geekdo-images.com/vd0pWYhTDeThGnuFIydFqw__thumb/img/42z5FrWrhjZJAraWdAF3st8w0Ic=/fit-in/200x150/filters:strip_icc()/pic8181455.png",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 40,
    "bggRating": 6.6,
    "userRating": 6.6,
    "status": "played",
    "designers": [
      "Arthur Lacerda"
    ],
    "createdAt": "2025-07-19T16:24:39.000Z",
    "updatedAt": "2025-07-19T16:24:39.000Z"
  },
  {
    "id": "game-254",
    "bggId": 374026,
    "titleKr": "OPEN",
    "titleEn": "OPEN",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/P0rjA4DFBCkRqhBs_N1-yw__original/img/cnNGCosnAdZdXRAe_tRlof4bPrk=/0x0/filters:format(png)/pic7177424.png",
    "thumbnail": "https://cf.geekdo-images.com/P0rjA4DFBCkRqhBs_N1-yw__thumb/img/cduxRwEv7pWakt9zkHADH3w6km0=/fit-in/200x150/filters:strip_icc()/pic7177424.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "bggRating": 6.5,
    "userRating": 6.5,
    "status": "owned",
    "designers": [
      "Takashi Saito"
    ],
    "createdAt": "2024-12-14T17:54:18.000Z",
    "updatedAt": "2024-12-14T17:54:18.000Z"
  },
  {
    "id": "game-242",
    "bggId": 424152,
    "titleKr": "Orapa Mine",
    "titleEn": "Orapa Mine",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/AA9S_-ZXnIFS0ABiFxmZ9w__original/img/pY5DDByB6SA60PwWuuzWgFG2soc=/0x0/filters:format(jpeg)/pic8307047.jpg",
    "thumbnail": "https://cf.geekdo-images.com/AA9S_-ZXnIFS0ABiFxmZ9w__thumb/img/7rgnYRe9NpOSpixs0FXmEGkKfxU=/fit-in/200x150/filters:strip_icc()/pic8307047.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 20,
    "maxPlaytime": 30,
    "bggRating": 7.5,
    "userRating": 7.5,
    "status": "played",
    "designers": [
      "Junghee Choi",
      "Wanjin Gill"
    ],
    "createdAt": "2024-11-30T18:50:54.000Z",
    "updatedAt": "2024-11-30T18:50:54.000Z"
  },
  {
    "id": "game-305",
    "bggId": 448740,
    "titleKr": "Orapa Space",
    "titleEn": "Orapa Space",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/Rs7QiydHk_XHxnAOSYhUig__original/img/shvYM-kYHsXAVIw9mTVzIkUknlc=/0x0/filters:format(png)/pic8954539.png",
    "thumbnail": "https://cf.geekdo-images.com/Rs7QiydHk_XHxnAOSYhUig__thumb/img/xzb4zlQOFZ_ESmfuL_wM5oQth0Y=/fit-in/200x150/filters:strip_icc()/pic8954539.png",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 20,
    "maxPlaytime": 25,
    "status": "owned",
    "designers": [
      "Junghee Choi",
      "Wanjin Gill"
    ],
    "createdAt": "2025-07-17T20:56:36.000Z",
    "updatedAt": "2025-07-17T20:56:36.000Z"
  },
  {
    "id": "game-104",
    "bggId": 266810,
    "titleKr": "Paladins of the West Kingdom",
    "titleEn": "Paladins of the West Kingdom",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/4nhokcLdYoo6ulbZ1rmGgA__original/img/9ktZDu003VVVTw0RxD-ufLYV1HQ=/0x0/filters:format(png)/pic4462987.png",
    "thumbnail": "https://cf.geekdo-images.com/4nhokcLdYoo6ulbZ1rmGgA__thumb/img/1gEbke_bKTA6D2jjpPm1HowGGHM=/fit-in/200x150/filters:strip_icc()/pic4462987.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "S J Macdonald",
      "Shem Phillips"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-335",
    "bggId": 437306,
    "titleKr": "Parks (Second Edition)",
    "titleEn": "Parks (Second Edition)",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/hHnw1JGLaEkJXaOv8bm6YQ__original/img/ptOJJyJ1acojUJIbEJ7zobysPzw=/0x0/filters:format(jpeg)/pic8660069.jpg",
    "thumbnail": "https://cf.geekdo-images.com/hHnw1JGLaEkJXaOv8bm6YQ__small/img/VueCGH75QOD4dv0yeaKqQZgTqMo=/fit-in/200x150/filters:strip_icc()/pic8660069.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "bggRating": 7.9,
    "userRating": 7.9,
    "status": "owned",
    "designers": [
      "Henry Audubon"
    ],
    "createdAt": "2026-02-03T20:08:20.000Z",
    "updatedAt": "2026-02-03T20:08:20.000Z"
  },
  {
    "id": "game-157",
    "bggId": 256960,
    "titleKr": "Pax Pamir: Second Edition",
    "titleEn": "Pax Pamir: Second Edition",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/oSM_AuKYfGIwOtKbVEsoVg__original/img/7DlaMCmuoJzm9AzelmStYIDgutI=/0x0/filters:format(png)/pic4503733.png",
    "thumbnail": "https://cf.geekdo-images.com/oSM_AuKYfGIwOtKbVEsoVg__thumb/img/NyoufH5YBFCh1rKy4uy76bR4ITk=/fit-in/200x150/filters:strip_icc()/pic4503733.png",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 45,
    "maxPlaytime": 120,
    "status": "prevowned",
    "designers": [
      "Cole Wehrle"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-252",
    "bggId": 387560,
    "titleKr": "Perch",
    "titleEn": "Perch",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/1t6J2QHaLMjmomBnHrtwxA__original/img/zflqo95w09oO07RgVmS-CmTDnLQ=/0x0/filters:format(png)/pic7558885.png",
    "thumbnail": "https://cf.geekdo-images.com/1t6J2QHaLMjmomBnHrtwxA__thumb/img/wr9PCDczDC32135gaLxTOILZPds=/fit-in/200x150/filters:strip_icc()/pic7558885.png",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "bggRating": 7.9,
    "userRating": 7.9,
    "status": "owned",
    "designers": [
      "Douglas Hettrick"
    ],
    "createdAt": "2024-12-14T13:46:24.000Z",
    "updatedAt": "2024-12-14T13:46:24.000Z"
  },
  {
    "id": "game-44",
    "bggId": 322815,
    "titleKr": "Perfumery",
    "titleEn": "Perfumery",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/tKxLWf24e1OumRtz9Pg6oQ__original/img/4n-ZF5mUstGRmFcm_e4JdjnxGLQ=/0x0/filters:format(jpeg)/pic5965937.jpg",
    "thumbnail": "https://cf.geekdo-images.com/tKxLWf24e1OumRtz9Pg6oQ__thumb/img/PLhA6LEAuS-PhD1MdGa0bX4hhl0=/fit-in/200x150/filters:strip_icc()/pic5965937.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 40,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [
      "Totsuca Chuo"
    ],
    "createdAt": "2022-06-06T16:08:24.000Z",
    "updatedAt": "2022-06-06T16:08:24.000Z"
  },
  {
    "id": "game-45",
    "bggId": 256997,
    "titleKr": "Perseverance: Castaway Chronicles – Episodes 1 & 2",
    "titleEn": "Perseverance: Castaway Chronicles – Episodes 1 & 2",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/CH7U514WgN1EMGFYN63KsQ__original/img/avH1CKrpAYOIO7Kcu0C5Kk_dgVE=/0x0/filters:format(jpeg)/pic5440227.jpg",
    "thumbnail": "https://cf.geekdo-images.com/CH7U514WgN1EMGFYN63KsQ__thumb/img/dozFHWuJhtY-cK5mmMHMwJLth7w=/fit-in/200x150/filters:strip_icc()/pic5440227.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 80,
    "maxPlaytime": 180,
    "status": "played",
    "designers": [
      "Richard Amann",
      "Thomas Vande Ginste",
      "Viktor Peter",
      "Wolf Plancke",
      "Dávid Turczi"
    ],
    "createdAt": "2022-06-05T12:30:30.000Z",
    "updatedAt": "2022-06-05T12:30:30.000Z"
  },
  {
    "id": "game-238",
    "bggId": 400995,
    "titleKr": "Perspectives",
    "titleEn": "Perspectives",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/2rDKsXHGRLNdoXb0K48HcQ__original/img/OJwtgdcPT9ETiUXt4NnRd4AiAVI=/0x0/filters:format(jpeg)/pic7723935.jpg",
    "thumbnail": "https://cf.geekdo-images.com/2rDKsXHGRLNdoXb0K48HcQ__thumb/img/gNA4Q5pFNki09PoMTOOBEm__k94=/fit-in/200x150/filters:strip_icc()/pic7723935.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "played",
    "designers": [
      "Matthew Dunstan",
      "Dave Neale"
    ],
    "createdAt": "2024-10-12T15:22:27.000Z",
    "updatedAt": "2024-10-12T15:22:27.000Z"
  },
  {
    "id": "game-333",
    "bggId": 419704,
    "titleKr": "Phoenix New Horizon",
    "titleEn": "Phoenix New Horizon",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/qdUx6XBGT3KATMtacOM0jg__original/img/rQjBFIlHDEopWzKNi3nBJkdQEYs=/0x0/filters:format(jpeg)/pic8162751.jpg",
    "thumbnail": "https://cf.geekdo-images.com/qdUx6XBGT3KATMtacOM0jg__small/img/-_4K-pbIl1Yy4bRS1wMxRuFeEyE=/fit-in/200x150/filters:strip_icc()/pic8162751.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "owned",
    "designers": [
      "Jorge J. Barroso"
    ],
    "createdAt": "2026-01-24T15:56:53.000Z",
    "updatedAt": "2026-01-24T15:56:53.000Z"
  },
  {
    "id": "game-46",
    "bggId": 218603,
    "titleKr": "Photosynthesis",
    "titleEn": "Photosynthesis",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/HhkYuVxMy-XrRCBWmZ78Eg__original/img/V6bgfuxV2jfmRbz9pJVyK01x6dI=/0x0/filters:format(jpeg)/pic3364832.jpg",
    "thumbnail": "https://cf.geekdo-images.com/HhkYuVxMy-XrRCBWmZ78Eg__thumb/img/eVdvmMALg8vjPr6eDoj-mqvDbUc=/fit-in/200x150/filters:strip_icc()/pic3364832.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Hjalmar Hach"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-227",
    "bggId": 1877,
    "titleKr": "Pig Pile",
    "titleEn": "Pig Pile",
    "yearPublished": 2001,
    "image": "https://cf.geekdo-images.com/laH1FJu03n3IlqQjBPiI9w__original/img/4A-xaWt25dQ9DHTYkVoZHrg4Q7w=/0x0/filters:format(jpeg)/pic1937580.jpg",
    "thumbnail": "https://cf.geekdo-images.com/laH1FJu03n3IlqQjBPiI9w__thumb/img/Z7DLe4zyxdqmnH2jDstR2hOz3MA=/fit-in/200x150/filters:strip_icc()/pic1937580.jpg",
    "minPlayers": 3,
    "maxPlayers": 6,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 5.6,
    "userRating": 5.6,
    "status": "played",
    "designers": [
      "Richard Borg"
    ],
    "createdAt": "2024-06-22T18:18:37.000Z",
    "updatedAt": "2024-06-22T18:18:37.000Z"
  },
  {
    "id": "game-88",
    "bggId": 308765,
    "titleKr": "Praga Caput Regni",
    "titleEn": "Praga Caput Regni",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/aUPeXVwc40xrgud2XeZwyA__original/img/WbCD6iqzBhVucS7uRwYvtku5zD0=/0x0/filters:format(png)/pic5671087.png",
    "thumbnail": "https://cf.geekdo-images.com/aUPeXVwc40xrgud2XeZwyA__thumb/img/1TYDRYM7iz0-jLJ-YZj6d5bhweg=/fit-in/200x150/filters:strip_icc()/pic5671087.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 45,
    "maxPlaytime": 150,
    "status": "prevowned",
    "designers": [
      "Vladimír Suchý"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-47",
    "bggId": 108687,
    "titleKr": "Puerto Rico",
    "titleEn": "Puerto Rico",
    "yearPublished": 2011,
    "image": "https://cf.geekdo-images.com/cZ8h5HpbD6asCJuGuuuT-w__original/img/eBJRy_g1zc1ZKBeqSqrqZpnfs6A=/0x0/filters:format(jpeg)/pic4887895.jpg",
    "thumbnail": "https://cf.geekdo-images.com/cZ8h5HpbD6asCJuGuuuT-w__thumb/img/1GUPtGNfDR_CmbM7SYv2ABV1AeQ=/fit-in/200x150/filters:strip_icc()/pic4887895.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 90,
    "maxPlaytime": 150,
    "status": "played",
    "designers": [
      "Andreas Seyfarth"
    ],
    "createdAt": "2023-02-27T10:35:30.000Z",
    "updatedAt": "2023-02-27T10:35:30.000Z"
  },
  {
    "id": "game-353",
    "bggId": 415843,
    "titleKr": "Puerto Rico 1897: Special Edition",
    "titleEn": "Puerto Rico 1897: Special Edition",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/ewNPD8vcrsXVfuVc9_E6hg__original/img/H3yQmt-6vi4jSPP-Ty0ehZ0lksM=/0x0/filters:format(jpeg)/pic8376834.jpg",
    "thumbnail": "https://cf.geekdo-images.com/ewNPD8vcrsXVfuVc9_E6hg__small/img/fEkdPMxyjK8G9uqdRPT14Q-UCVo=/fit-in/200x150/filters:strip_icc()/pic8376834.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "bggRating": 8.7,
    "userRating": 8.7,
    "status": "played",
    "designers": [
      "Andreas Seyfarth"
    ],
    "createdAt": "2026-08-08T11:57:31.000Z",
    "updatedAt": "2026-08-08T11:57:31.000Z"
  },
  {
    "id": "game-48",
    "bggId": 266830,
    "titleKr": "Q.E.",
    "titleEn": "Q.E.",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/47o_swlkRbfpMH3hnFZgtA__original/img/V6-uacjfLFXQyOVHcLmEOVoZgf8=/0x0/filters:format(png)/pic4383594.png",
    "thumbnail": "https://cf.geekdo-images.com/47o_swlkRbfpMH3hnFZgtA__thumb/img/gT07BJ5Ynlopp-UIQRIySERKUmI=/fit-in/200x150/filters:strip_icc()/pic4383594.png",
    "minPlayers": 3,
    "maxPlayers": 5,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Gavin Birnbaum"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-120",
    "bggId": 232043,
    "titleKr": "Queendomino",
    "titleEn": "Queendomino",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/_6VtTmeI4e7cORxFWRC7Og__original/img/Uem_ewrSp4uzwG19S2CSnHwrmEU=/0x0/filters:format(png)/pic3672901.png",
    "thumbnail": "https://cf.geekdo-images.com/_6VtTmeI4e7cORxFWRC7Og__thumb/img/uzS2wD_CvrjO8KQsNZDoT0RBvmY=/fit-in/200x150/filters:strip_icc()/pic3672901.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 25,
    "maxPlaytime": 25,
    "status": "prevowned",
    "designers": [
      "Bruno Cathala"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-49",
    "bggId": 274093,
    "titleKr": "Quirky Circuits",
    "titleEn": "Quirky Circuits",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/aNabLAdJAW0ot6hojnC9rw__original/img/9qCVfCkEhrTXcKOS_u3HJPO7KJo=/0x0/filters:format(jpeg)/pic4602889.jpg",
    "thumbnail": "https://cf.geekdo-images.com/aNabLAdJAW0ot6hojnC9rw__thumb/img/TV8pBvFqB-Y1rPL91CHISW1hgFo=/fit-in/200x150/filters:strip_icc()/pic4602889.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 15,
    "maxPlaytime": 30,
    "status": "played",
    "designers": [
      "Nikki Valens"
    ],
    "createdAt": "2021-04-28T21:43:47.000Z",
    "updatedAt": "2021-04-28T21:43:47.000Z"
  },
  {
    "id": "game-295",
    "bggId": 12,
    "titleKr": "Ra",
    "titleEn": "Ra",
    "yearPublished": 1999,
    "image": "https://cf.geekdo-images.com/k7lG683LBZdvFyS-FH-MpA__original/img/hEqkeRnhyNLxeryIIdOnAHdItfo=/0x0/filters:format(png)/pic6746812.png",
    "thumbnail": "https://cf.geekdo-images.com/k7lG683LBZdvFyS-FH-MpA__thumb/img/6KTtiknxxGwd0ARKrlsdoXFtHfI=/fit-in/200x150/filters:strip_icc()/pic6746812.png",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 45,
    "maxPlaytime": 60,
    "bggRating": 7.7,
    "userRating": 7.7,
    "status": "played",
    "designers": [
      "Reiner Knizia"
    ],
    "createdAt": "2025-06-14T16:02:42.000Z",
    "updatedAt": "2025-06-14T16:02:42.000Z"
  },
  {
    "id": "game-142",
    "bggId": 245654,
    "titleKr": "Railroad Ink: Deep Blue Edition",
    "titleEn": "Railroad Ink: Deep Blue Edition",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/x3hjEgkxZE9M96o6wgj6Tw__original/img/aLU9rLTBaZhBK_U6YMUY8mmJnrM=/0x0/filters:format(png)/pic4097632.png",
    "thumbnail": "https://cf.geekdo-images.com/x3hjEgkxZE9M96o6wgj6Tw__thumb/img/idn6fyLMcqvmxqKXU57rAuLgMvg=/fit-in/200x150/filters:strip_icc()/pic4097632.png",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 20,
    "maxPlaytime": 30,
    "status": "owned",
    "designers": [
      "Hjalmar Hach",
      "Lorenzo Silva"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-264",
    "bggId": 366683,
    "titleKr": "Raising Robots",
    "titleEn": "Raising Robots",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/kGmrDjZ1ZZ3HddqqN8aqnQ__original/img/AVOzSY2_SWGZjskLpwTHG5lDqyA=/0x0/filters:format(png)/pic7366753.png",
    "thumbnail": "https://cf.geekdo-images.com/kGmrDjZ1ZZ3HddqqN8aqnQ__thumb/img/JfazUjPd-mKowbCESp0nYgYYJ1U=/fit-in/200x150/filters:strip_icc()/pic7366753.png",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "owned",
    "designers": [
      "Brett Sobol",
      "Seth Van Orden"
    ],
    "createdAt": "2025-02-15T17:09:14.000Z",
    "updatedAt": "2025-02-15T17:09:14.000Z"
  },
  {
    "id": "game-190",
    "bggId": 256589,
    "titleKr": "Rallyman: GT",
    "titleEn": "Rallyman: GT",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/kbM9yrDsWSfN7O054urxlA__original/img/yXa6ktBozGxJxZQP7zF-wN1eShk=/0x0/filters:format(jpeg)/pic4350196.jpg",
    "thumbnail": "https://cf.geekdo-images.com/kbM9yrDsWSfN7O054urxlA__thumb/img/x6YrgrrpBJ-K3oYRYjv1BTf5tWQ=/fit-in/200x150/filters:strip_icc()/pic4350196.jpg",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 45,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Jean-Christophe Bouvier"
    ],
    "createdAt": "2026-07-14T22:36:01.000Z",
    "updatedAt": "2026-07-14T22:36:01.000Z"
  },
  {
    "id": "game-50",
    "bggId": 329465,
    "titleKr": "Red Rising",
    "titleEn": "Red Rising",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/V6QEXXgRgz3urOrRVZ_1zA__original/img/Gp9hIVv-zRxlkrO5Pmg3aXb4P1M=/0x0/filters:format(jpeg)/pic5960554.jpg",
    "thumbnail": "https://cf.geekdo-images.com/V6QEXXgRgz3urOrRVZ_1zA__thumb/img/8zjF-E9xPNYLSsI6xQjRsZiI-XE=/fit-in/200x150/filters:strip_icc()/pic5960554.jpg",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 45,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [
      "Alexander Schmidt (II)",
      "Jamey Stegmaier"
    ],
    "createdAt": "2021-06-13T19:15:23.000Z",
    "updatedAt": "2021-06-13T19:15:23.000Z"
  },
  {
    "id": "game-330",
    "bggId": 300001,
    "titleKr": "Renature",
    "titleEn": "Renature",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/w1KgNmpX0_oo3Y9ENmtj0w__original/img/wL8X5HKPPoB4iYCcwBZ0r6WlGz4=/0x0/filters:format(jpeg)/pic5535714.jpg",
    "thumbnail": "https://cf.geekdo-images.com/w1KgNmpX0_oo3Y9ENmtj0w__small/img/JUJRim178mCB90Q1r93Ibv_ViDY=/fit-in/200x150/filters:strip_icc()/pic5535714.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 45,
    "maxPlaytime": 60,
    "bggRating": 7.1,
    "userRating": 7.1,
    "status": "owned",
    "designers": [
      "Michael Kiesling",
      "Wolfgang Kramer"
    ],
    "createdAt": "2025-12-13T23:47:49.000Z",
    "updatedAt": "2025-12-13T23:47:49.000Z"
  },
  {
    "id": "game-348",
    "bggId": 428099,
    "titleKr": "Revenant",
    "titleEn": "Revenant",
    "yearPublished": 2026,
    "image": "https://cf.geekdo-images.com/3jI41d32ExxZua8WiP_Zhg__original/img/4CsUkhzTDUG5IRgUlVY16pG5mdI=/0x0/filters:format(jpeg)/pic8426405.jpg",
    "thumbnail": "https://cf.geekdo-images.com/3jI41d32ExxZua8WiP_Zhg__small/img/ZVr_VfjGozJFWXHsdp2aI2zGFps=/fit-in/200x150/filters:strip_icc()/pic8426405.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "owned",
    "designers": [
      "Allan Kirkeby"
    ],
    "createdAt": "2026-07-11T13:15:19.000Z",
    "updatedAt": "2026-07-11T13:15:19.000Z"
  },
  {
    "id": "game-299",
    "bggId": 76150,
    "titleKr": "Revolver",
    "titleEn": "Revolver",
    "yearPublished": 2011,
    "image": "https://cf.geekdo-images.com/sMB1mpJfZIpMsFwYg7SRXQ__original/img/mL_bcfCZE4wpWItYU-HAscFjcdE=/0x0/filters:format(jpeg)/pic2237528.jpg",
    "thumbnail": "https://cf.geekdo-images.com/sMB1mpJfZIpMsFwYg7SRXQ__thumb/img/N-zVJJdx1iE4xZXVJI2em-PDVh0=/fit-in/200x150/filters:strip_icc()/pic2237528.jpg",
    "minPlayers": 2,
    "maxPlayers": 2,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "bggRating": 6.9,
    "userRating": 6.9,
    "status": "played",
    "designers": [
      "Mark Chaplin"
    ],
    "createdAt": "2025-06-22T11:35:58.000Z",
    "updatedAt": "2025-06-22T11:35:58.000Z"
  },
  {
    "id": "game-51",
    "bggId": 108018,
    "titleKr": "Riichi Mahjong",
    "titleEn": "Riichi Mahjong",
    "yearPublished": 1920,
    "image": "https://cf.geekdo-images.com/62j0mEWiwuyZixScOzwEnA__original/img/sx6PwhoQPB7ltdxFhtK42Gzq9tE=/0x0/filters:format(jpeg)/pic4667546.jpg",
    "thumbnail": "https://cf.geekdo-images.com/62j0mEWiwuyZixScOzwEnA__thumb/img/momsWLUZJUTVdxpNbJaCqu-Rxak=/fit-in/200x150/filters:strip_icc()/pic4667546.jpg",
    "minPlayers": 3,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "played",
    "designers": [
      "(Uncredited)"
    ],
    "createdAt": "2021-04-28T21:43:47.000Z",
    "updatedAt": "2021-04-28T21:43:47.000Z"
  },
  {
    "id": "game-100",
    "bggId": 267319,
    "titleKr": "Roam",
    "titleEn": "Roam",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/p3O_MWuvpPODqPzxqWf-og__original/img/GhQHUI2ALi0uoRmfa-nOr5dAmwY=/0x0/filters:format(jpeg)/pic4862867.jpg",
    "thumbnail": "https://cf.geekdo-images.com/p3O_MWuvpPODqPzxqWf-og__thumb/img/CT4vHKPKP7ftPuxAmUjIw7i2ezM=/fit-in/200x150/filters:strip_icc()/pic4862867.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Ryan Laukat"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-308",
    "bggId": 374866,
    "titleKr": "Robotrick",
    "titleEn": "Robotrick",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/8O1vZvD5Dd83ejNDVsv2Iw__original/img/tSq2RspPM2LZpnqVV2f8JvIL-ps=/0x0/filters:format(jpeg)/pic7738861.jpg",
    "thumbnail": "https://cf.geekdo-images.com/8O1vZvD5Dd83ejNDVsv2Iw__thumb/img/OtaJqdCxRN1YS_Nmw0pUEWalIzk=/fit-in/200x150/filters:strip_icc()/pic7738861.jpg",
    "minPlayers": 3,
    "maxPlayers": 3,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 7.5,
    "userRating": 7.5,
    "status": "played",
    "designers": [
      "Domi (ドミッチ)"
    ],
    "createdAt": "2025-07-19T16:28:37.000Z",
    "updatedAt": "2025-07-19T16:28:37.000Z"
  },
  {
    "id": "game-262",
    "bggId": 402679,
    "titleKr": "Rock Hard: 1977",
    "titleEn": "Rock Hard: 1977",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/CrJdKWVGgg24btEKtxNyzA__original/img/-oWI3wATvzhjEqGP2DTYguSU85c=/0x0/filters:format(jpeg)/pic8288389.jpg",
    "thumbnail": "https://cf.geekdo-images.com/CrJdKWVGgg24btEKtxNyzA__thumb/img/iQkfQCZiXs2r4igjeAe_4bHgmks=/fit-in/200x150/filters:strip_icc()/pic8288389.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 45,
    "maxPlaytime": 90,
    "bggRating": 7.5,
    "userRating": 7.5,
    "status": "owned",
    "designers": [
      "Jackie Fox"
    ],
    "createdAt": "2025-10-18T22:21:16.000Z",
    "updatedAt": "2025-10-18T22:21:16.000Z"
  },
  {
    "id": "game-161",
    "bggId": 169426,
    "titleKr": "Roll Player",
    "titleEn": "Roll Player",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/enmQAOQl99U6wiQvZoL5GQ__original/img/iiKhufERu8v8JpErc5kUoO8WiNw=/0x0/filters:format(jpeg)/pic2556921.jpg",
    "thumbnail": "https://cf.geekdo-images.com/enmQAOQl99U6wiQvZoL5GQ__thumb/img/zdtrILXRjphkt5HYP0tuxzlenG4=/fit-in/200x150/filters:strip_icc()/pic2556921.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Keith Matejka"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-275",
    "bggId": 375406,
    "titleKr": "Room Share",
    "titleEn": "Room Share",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/ItD_G7n7zrshmlVrJ0i7VA__original/img/xN-ll8KBsGIMlHQ6sb8P4O4ehlo=/0x0/filters:format(png)/pic8643033.png",
    "thumbnail": "https://cf.geekdo-images.com/ItD_G7n7zrshmlVrJ0i7VA__thumb/img/ONVQQq4yT7VbRpDb810MEwMWUiA=/fit-in/200x150/filters:strip_icc()/pic8643033.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 20,
    "maxPlaytime": 30,
    "bggRating": 7.1,
    "userRating": 7.1,
    "status": "owned",
    "designers": [
      "Mr.Kou"
    ],
    "createdAt": "2025-05-06T12:26:59.000Z",
    "updatedAt": "2025-05-06T12:26:59.000Z"
  },
  {
    "id": "game-213",
    "bggId": 418917,
    "titleKr": "Run, Mule, Run",
    "titleEn": "Run, Mule, Run",
    "yearPublished": 2023,
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "status": "owned",
    "designers": [
      "Frank Nestel"
    ],
    "createdAt": "2024-04-20T15:48:40.000Z",
    "updatedAt": "2024-04-20T15:48:40.000Z"
  },
  {
    "id": "game-209",
    "bggId": 350610,
    "titleKr": "Ryozen",
    "titleEn": "Ryozen",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/zKB3b2eZZW9gSV-EvNQ3kg__original/img/EbCI1TRRwB1czudPT1oOobfEOu0=/0x0/filters:format(png)/pic6504498.png",
    "thumbnail": "https://cf.geekdo-images.com/zKB3b2eZZW9gSV-EvNQ3kg__thumb/img/YpWpO1J6CS9P9TO8ZbKV97XsQ9w=/fit-in/200x150/filters:strip_icc()/pic6504498.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 45,
    "maxPlaytime": 90,
    "bggRating": 7.4,
    "userRating": 7.4,
    "status": "owned",
    "designers": [
      "Martino Chiacchiera",
      "Michele Piccolini"
    ],
    "createdAt": "2024-04-10T19:48:48.000Z",
    "updatedAt": "2024-04-10T19:48:48.000Z"
  },
  {
    "id": "game-52",
    "bggId": 199561,
    "titleKr": "Sagrada",
    "titleEn": "Sagrada",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/PZt3EAAGV3dFIVuwMR0AEw__original/img/5ug9EeKlH_ucJEUXaFpTZbBJ1GY=/0x0/filters:format(jpeg)/pic3525224.jpg",
    "thumbnail": "https://cf.geekdo-images.com/PZt3EAAGV3dFIVuwMR0AEw__thumb/img/1m4aryOW1MOpq-8jGkF6gDTJmCY=/fit-in/200x150/filters:strip_icc()/pic3525224.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Adrian Adamescu",
      "Daryl Andrews"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-276",
    "bggId": 402663,
    "titleKr": "Salton Sea",
    "titleEn": "Salton Sea",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/pP4AVa3WNYvn2nWpE-Q6xw__original/img/tpe4k2kqT9AD0G7Y36Na0tHvgYI=/0x0/filters:format(png)/pic7821718.png",
    "thumbnail": "https://cf.geekdo-images.com/pP4AVa3WNYvn2nWpE-Q6xw__thumb/img/dXEMvFFhoIj3QkSoK4YTCbAsJEo=/fit-in/200x150/filters:strip_icc()/pic7821718.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 120,
    "maxPlaytime": 120,
    "bggRating": 7.5,
    "userRating": 7.5,
    "status": "owned",
    "designers": [
      "David Bernal"
    ],
    "createdAt": "2025-05-06T14:05:13.000Z",
    "updatedAt": "2025-05-06T14:05:13.000Z"
  },
  {
    "id": "game-53",
    "bggId": 3,
    "titleKr": "Samurai",
    "titleEn": "Samurai",
    "yearPublished": 1998,
    "image": "https://cf.geekdo-images.com/o9-sNXmFS_TLAb7ZlZ4dRA__original/img/TPKZgpNxB_C73RNbhKyP6UR76X0=/0x0/filters:format(jpeg)/pic3211873.jpg",
    "thumbnail": "https://cf.geekdo-images.com/o9-sNXmFS_TLAb7ZlZ4dRA__thumb/img/22MSUC0-ZWgwzhi_VKIbENJik1w=/fit-in/200x150/filters:strip_icc()/pic3211873.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [
      "Reiner Knizia"
    ],
    "createdAt": "2021-05-15T16:18:36.000Z",
    "updatedAt": "2021-05-15T16:18:36.000Z"
  },
  {
    "id": "game-184",
    "bggId": 324090,
    "titleKr": "Scarface 1920",
    "titleEn": "Scarface 1920",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/b0HXxXK40QsTwSxynD2DDA__original/img/ZgJTGjdDj2CkmYUxNklvYC9q2Yc=/0x0/filters:format(jpeg)/pic5926553.jpg",
    "thumbnail": "https://cf.geekdo-images.com/b0HXxXK40QsTwSxynD2DDA__thumb/img/dPCm4RXyLyc4kz1m15R5fbko8jM=/fit-in/200x150/filters:strip_icc()/pic5926553.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 150,
    "status": "owned",
    "designers": [
      "Toni Serradesanferm",
      "Daniel Simon"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-54",
    "bggId": 234846,
    "titleKr": "Schüttel's",
    "titleEn": "Schüttel's",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/n4yP8smdF43sF3NkoyYOrg__original/img/bsWbiv96wloj0VCIlwDr00K_aOs=/0x0/filters:format(jpeg)/pic3729488.jpg",
    "thumbnail": "https://cf.geekdo-images.com/n4yP8smdF43sF3NkoyYOrg__thumb/img/Vhky4Q5-V42cb9M2e3xPU3EvxWU=/fit-in/200x150/filters:strip_icc()/pic3729488.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "played",
    "designers": [
      "Bernhard Lach",
      "Uwe Rapp"
    ],
    "createdAt": "2021-04-28T21:43:47.000Z",
    "updatedAt": "2021-04-28T21:43:47.000Z"
  },
  {
    "id": "game-156",
    "bggId": 25021,
    "titleKr": "Sekigahara: The Unification of Japan",
    "titleEn": "Sekigahara: The Unification of Japan",
    "yearPublished": 2011,
    "image": "https://cf.geekdo-images.com/eMJAona-uXwh6t2AcugGEg__original/img/4LuFgxwxB8OcjoGBWg6_IxFkZ0s=/0x0/filters:format(jpeg)/pic1063508.jpg",
    "thumbnail": "https://cf.geekdo-images.com/eMJAona-uXwh6t2AcugGEg__thumb/img/6qn1NgnJ9inZNfLlrBdWK3FritU=/fit-in/200x150/filters:strip_icc()/pic1063508.jpg",
    "minPlayers": 2,
    "maxPlayers": 2,
    "minPlaytime": 180,
    "maxPlaytime": 180,
    "status": "wishlist",
    "designers": [
      "Matt Calkins"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-193",
    "bggId": 360692,
    "titleKr": "Septima",
    "titleEn": "Septima",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/TEx3V_COEF6Vik8y3Ax3hA__original/img/9Yz9xcfNSUBYLzX8mCYuYhzDJSo=/0x0/filters:format(jpeg)/pic6810993.jpg",
    "thumbnail": "https://cf.geekdo-images.com/TEx3V_COEF6Vik8y3Ax3hA__thumb/img/UbxZLr-fIWfThg2dp7r_7M5MqC8=/fit-in/200x150/filters:strip_icc()/pic6810993.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 50,
    "maxPlaytime": 100,
    "status": "owned",
    "designers": [
      "Robin Hegedűs"
    ],
    "createdAt": "2024-01-28T20:09:15.000Z",
    "updatedAt": "2024-01-28T20:09:15.000Z"
  },
  {
    "id": "game-194",
    "bggId": 400820,
    "titleKr": "Septima: Shapeshifting & Omens",
    "titleEn": "Septima: Shapeshifting & Omens",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/FptNrv0Zo_fnWND6SbOxrQ__original/img/byLJv8MGB7bP6s-SdDM0vLWEQf8=/0x0/filters:format(jpeg)/pic7719460.jpg",
    "thumbnail": "https://cf.geekdo-images.com/FptNrv0Zo_fnWND6SbOxrQ__thumb/img/Kf0ArfO7UJdF2zVjRPscWnw2RXo=/fit-in/200x150/filters:strip_icc()/pic7719460.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 50,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Robin Hegedűs"
    ],
    "createdAt": "2024-01-28T20:09:16.000Z",
    "updatedAt": "2024-01-28T20:09:16.000Z"
  },
  {
    "id": "game-273",
    "bggId": 418059,
    "titleKr": "SETI: Search for Extraterrestrial Intelligence",
    "titleEn": "SETI: Search for Extraterrestrial Intelligence",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/_BUXOVRDU9g_eRwgpR5ZZw__original/img/28ob2JiASW8iX8XoVzp5Y25-h24=/0x0/filters:format(jpeg)/pic8160466.jpg",
    "thumbnail": "https://cf.geekdo-images.com/_BUXOVRDU9g_eRwgpR5ZZw__thumb/img/icamIZ4nP3HHH3vczZqTr1hQgKY=/fit-in/200x150/filters:strip_icc()/pic8160466.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 40,
    "maxPlaytime": 160,
    "bggRating": 8.4,
    "userRating": 8.4,
    "status": "owned",
    "designers": [
      "Tomáš Holek"
    ],
    "createdAt": "2025-05-04T13:24:47.000Z",
    "updatedAt": "2025-05-04T13:24:47.000Z"
  },
  {
    "id": "game-55",
    "bggId": 288098,
    "titleKr": "Shadow Raiders",
    "titleEn": "Shadow Raiders",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/ZwpbIuhbIVfHBRhD5A44LA__original/img/VKPaz_BijGpfl4bac25RjUpFLQw=/0x0/filters:format(jpeg)/pic4989267.jpg",
    "thumbnail": "https://cf.geekdo-images.com/ZwpbIuhbIVfHBRhD5A44LA__thumb/img/nwTvVNqnsMuV4me5zlyJvnClYmc=/fit-in/200x150/filters:strip_icc()/pic4989267.jpg",
    "minPlayers": 4,
    "maxPlayers": 8,
    "minPlaytime": 60,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [
      "Yasutaka Ikeda"
    ],
    "createdAt": "2021-07-04T17:16:33.000Z",
    "updatedAt": "2021-07-04T17:16:33.000Z"
  },
  {
    "id": "game-155",
    "bggId": 225977,
    "titleKr": "Sheep 'n' Sheep",
    "titleEn": "Sheep 'n' Sheep",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/eiDZmqdkvErG6lzMnL2PiQ__original/img/wD4DdGpHuxd_aJqjc3pLd0c31qA=/0x0/filters:format(png)/pic3526850.png",
    "thumbnail": "https://cf.geekdo-images.com/eiDZmqdkvErG6lzMnL2PiQ__thumb/img/w5CBTI9Ke30DkQMf4TRN_ToabOU=/fit-in/200x150/filters:strip_icc()/pic3526850.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 20,
    "maxPlaytime": 30,
    "status": "owned",
    "designers": [
      "Hisashi Hayashi"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-236",
    "bggId": 319807,
    "titleKr": "Shogun no Katana",
    "titleEn": "Shogun no Katana",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/XdXFnbesrDbKVlhLS64LHw__original/img/1d3wL7riZP_6Qum67BjQKNxrscM=/0x0/filters:format(jpeg)/pic5667351.jpg",
    "thumbnail": "https://cf.geekdo-images.com/XdXFnbesrDbKVlhLS64LHw__thumb/img/__dDwotcUJz2Oj5lgXAaRxwmnys=/fit-in/200x150/filters:strip_icc()/pic5667351.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 180,
    "bggRating": 7.9,
    "userRating": 7.9,
    "status": "owned",
    "designers": [
      "P.S. Martensen",
      "Federico Randazzo"
    ],
    "createdAt": "2024-08-15T16:27:00.000Z",
    "updatedAt": "2024-08-15T16:27:00.000Z"
  },
  {
    "id": "game-56",
    "bggId": 278553,
    "titleKr": "Silver",
    "titleEn": "Silver",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/e7ii83ya4tVD-4f1E-Alpg__original/img/Rse9-NttkulEmnV-k4cGp9WWAyM=/0x0/filters:format(jpeg)/pic4741826.jpg",
    "thumbnail": "https://cf.geekdo-images.com/e7ii83ya4tVD-4f1E-Alpg__thumb/img/uXIwkF8JqP2mYeK8ZGPHL_GPRrQ=/fit-in/200x150/filters:strip_icc()/pic4741826.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [
      "Ted Alspach"
    ],
    "createdAt": "2022-06-01T12:58:41.000Z",
    "updatedAt": "2022-06-01T12:58:41.000Z"
  },
  {
    "id": "game-183",
    "bggId": 92415,
    "titleKr": "Skull",
    "titleEn": "Skull",
    "yearPublished": 2011,
    "image": "https://cf.geekdo-images.com/OPrd2iXm43dir7BwKAMOuQ__original/img/ygPnbmg8FCpA7jO5gXw38uyNQ10=/0x0/filters:format(jpeg)/pic6097488.jpg",
    "thumbnail": "https://cf.geekdo-images.com/OPrd2iXm43dir7BwKAMOuQ__thumb/img/yEnb4YWN-Cp41KWTQ2EeNkrqlZI=/fit-in/200x150/filters:strip_icc()/pic6097488.jpg",
    "minPlayers": 3,
    "maxPlayers": 6,
    "minPlaytime": 15,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Hervé Marly"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-261",
    "bggId": 373106,
    "titleKr": "Sky Team",
    "titleEn": "Sky Team",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/uXMeQzNenHb3zK7Hoa6b2w__original/img/mWOQnkpyYBorh_Y1-0Y2o-ew17k=/0x0/filters:format(jpeg)/pic7398904.jpg",
    "thumbnail": "https://cf.geekdo-images.com/uXMeQzNenHb3zK7Hoa6b2w__thumb/img/WyPClajMWU9lV5BdCXiZnqdZgmU=/fit-in/200x150/filters:strip_icc()/pic7398904.jpg",
    "minPlayers": 2,
    "maxPlayers": 2,
    "minPlaytime": 20,
    "maxPlaytime": 20,
    "bggRating": 8.2,
    "userRating": 8.2,
    "status": "owned",
    "designers": [
      "Luc Rémond"
    ],
    "createdAt": "2025-02-02T11:55:08.000Z",
    "updatedAt": "2025-02-02T11:55:08.000Z"
  },
  {
    "id": "game-179",
    "bggId": 255984,
    "titleKr": "Sleeping Gods",
    "titleEn": "Sleeping Gods",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/Zdt8l4oTBpFICsMyNof7Jg__original/img/-okZ810RkA8fKKhIeZyX4cnqmbE=/0x0/filters:format(png)/pic5975244.png",
    "thumbnail": "https://cf.geekdo-images.com/Zdt8l4oTBpFICsMyNof7Jg__thumb/img/71w4Tt3xOnuDEDTCG8ni63QUhVE=/fit-in/200x150/filters:strip_icc()/pic5975244.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 1200,
    "status": "owned",
    "designers": [
      "Ryan Laukat"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-280",
    "bggId": 241590,
    "titleKr": "Smart10",
    "titleEn": "Smart10",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/pwa0lKfmlE4PvFo-YVxrLQ__original/img/M-q1H7vjciksvgG4H73R8W-Zq70=/0x0/filters:format(jpeg)/pic4945756.jpg",
    "thumbnail": "https://cf.geekdo-images.com/pwa0lKfmlE4PvFo-YVxrLQ__thumb/img/4RXK5M7g8_GRW_2HjyLdTjS3_fw=/fit-in/200x150/filters:strip_icc()/pic4945756.jpg",
    "minPlayers": 2,
    "maxPlayers": 8,
    "minPlaytime": 20,
    "maxPlaytime": 120,
    "bggRating": 7.5,
    "userRating": 7.5,
    "status": "played",
    "designers": [
      "Christoph Reiser",
      "Arno Steinwender"
    ],
    "createdAt": "2025-05-11T17:41:06.000Z",
    "updatedAt": "2025-05-11T17:41:06.000Z"
  },
  {
    "id": "game-57",
    "bggId": 246684,
    "titleKr": "Smartphone Inc.",
    "titleEn": "Smartphone Inc.",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/Ndctxvd7kBXYubeYRKRqzw__original/img/gGL8Fh-pFgTqB3lF-47ClLYLu8s=/0x0/filters:format(jpeg)/pic4258616.jpg",
    "thumbnail": "https://cf.geekdo-images.com/Ndctxvd7kBXYubeYRKRqzw__thumb/img/hJtPqShJYdb8DsdnTvpdkXrx-CU=/fit-in/200x150/filters:strip_icc()/pic4258616.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "played",
    "designers": [
      "Ivan Lashin"
    ],
    "createdAt": "2021-06-13T15:13:17.000Z",
    "updatedAt": "2021-06-13T15:13:17.000Z"
  },
  {
    "id": "game-342",
    "bggId": 375459,
    "titleKr": "Speakeasy",
    "titleEn": "Speakeasy",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/Y7vIlh-m_Ugnv0jrUuOW3g__original/img/anztl_yjkT6QMcW4p5Dit7KAChE=/0x0/filters:format(jpeg)/pic8165052.jpg",
    "thumbnail": "https://cf.geekdo-images.com/Y7vIlh-m_Ugnv0jrUuOW3g__small/img/pTIdvbosIWlLSxorWRMWkUkeSj8=/fit-in/200x150/filters:strip_icc()/pic8165052.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 50,
    "maxPlaytime": 180,
    "bggRating": 8.5,
    "userRating": 8.5,
    "status": "owned",
    "designers": [
      "Vital Lacerda"
    ],
    "createdAt": "2026-05-01T09:56:10.000Z",
    "updatedAt": "2026-05-01T09:56:10.000Z"
  },
  {
    "id": "game-58",
    "bggId": 162886,
    "titleKr": "Spirit Island",
    "titleEn": "Spirit Island",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/a13ieMPP2s0KEaKNYmtH5w__original/img/nuQlvKPSBG3jsVzaTgZTpNSjlTw=/0x0/filters:format(png)/pic3615739.png",
    "thumbnail": "https://cf.geekdo-images.com/a13ieMPP2s0KEaKNYmtH5w__thumb/img/SKiHQ4zAj8uVdtwxOYKIveY9jCo=/fit-in/200x150/filters:strip_icc()/pic3615739.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "R. Eric Reuss"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-344",
    "bggId": 291431,
    "titleKr": "Splitz",
    "titleEn": "Splitz",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/rkWWk_pMIJlR6RTBJGMF5w__original/img/-FAq3VVLnbmpSKqa944Nw_XaJGY=/0x0/filters:format(jpeg)/pic8889427.jpg",
    "thumbnail": "https://cf.geekdo-images.com/rkWWk_pMIJlR6RTBJGMF5w__small/img/WrovQvaacL_TqQI0O0kN5QkDuqI=/fit-in/200x150/filters:strip_icc()/pic8889427.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 15,
    "maxPlaytime": 30,
    "bggRating": 6.6,
    "userRating": 6.6,
    "status": "owned",
    "designers": [
      "Igor Ganzha"
    ],
    "createdAt": "2026-07-04T13:15:44.000Z",
    "updatedAt": "2026-07-04T13:15:44.000Z"
  },
  {
    "id": "game-253",
    "bggId": 424567,
    "titleKr": "Stella Quest",
    "titleEn": "Stella Quest",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/m6Xr5i_VniFbRl6iazdirg__original/img/pggsEJ7bPlB6bq775O6P3DZlDxQ=/0x0/filters:format(jpeg)/pic8302898.jpg",
    "thumbnail": "https://cf.geekdo-images.com/m6Xr5i_VniFbRl6iazdirg__thumb/img/EBef1Dorf-bYcBk0Xn-46X3zzYw=/fit-in/200x150/filters:strip_icc()/pic8302898.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 25,
    "maxPlaytime": 25,
    "bggRating": 6.8,
    "userRating": 6.8,
    "status": "played",
    "designers": [
      "Beomhee Kim"
    ],
    "createdAt": "2024-12-14T15:55:39.000Z",
    "updatedAt": "2024-12-14T15:55:39.000Z"
  },
  {
    "id": "game-228",
    "bggId": 369257,
    "titleKr": "Stereo Mind",
    "titleEn": "Stereo Mind",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/-1TgU6qGcYIzaNM9I5Mcyw__original/img/SeThPdZ3V7OFQW1XledH0GEpSvY=/0x0/filters:format(jpeg)/pic7029156.jpg",
    "thumbnail": "https://cf.geekdo-images.com/-1TgU6qGcYIzaNM9I5Mcyw__thumb/img/troHRzUruPqPk0-BQLbh4waCItU=/fit-in/200x150/filters:strip_icc()/pic7029156.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 10,
    "maxPlaytime": 15,
    "bggRating": 7.1,
    "userRating": 7.1,
    "status": "owned",
    "designers": [
      "Silvergun",
      "Sunhyuk Chae"
    ],
    "createdAt": "2024-07-13T13:41:46.000Z",
    "updatedAt": "2024-07-13T13:41:46.000Z"
  },
  {
    "id": "game-59",
    "bggId": 323156,
    "titleKr": "Stroganov",
    "titleEn": "Stroganov",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/o7CUpHZLvw5vuwRCqPZMHw__original/img/Em35adNA6vzdSSdQ74HUazuMkUY=/0x0/filters:format(jpeg)/pic5827215.jpg",
    "thumbnail": "https://cf.geekdo-images.com/o7CUpHZLvw5vuwRCqPZMHw__thumb/img/ieOsIj7QyKes1F5jw8bJsXFyl3M=/fit-in/200x150/filters:strip_icc()/pic5827215.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 90,
    "status": "played",
    "designers": [
      "Andreas Steding"
    ],
    "createdAt": "2022-02-12T15:16:15.000Z",
    "updatedAt": "2022-02-12T15:16:15.000Z"
  },
  {
    "id": "game-60",
    "bggId": 9625,
    "titleKr": "Struggle of Empires",
    "titleEn": "Struggle of Empires",
    "yearPublished": 2004,
    "image": "https://cf.geekdo-images.com/V8J_bg9LKjB6as3Oxp_wtQ__original/img/1AabSD3BtD1N-JqFsmix6OIzTbo=/0x0/filters:format(png)/pic5633386.png",
    "thumbnail": "https://cf.geekdo-images.com/V8J_bg9LKjB6as3Oxp_wtQ__thumb/img/FUyc1QhXpVQRkbAhouttIZstUZA=/fit-in/200x150/filters:strip_icc()/pic5633386.png",
    "minPlayers": 2,
    "maxPlayers": 7,
    "minPlaytime": 180,
    "maxPlaytime": 240,
    "status": "played",
    "designers": [
      "Martin Wallace"
    ],
    "createdAt": "2022-02-12T21:47:27.000Z",
    "updatedAt": "2022-02-12T21:47:27.000Z"
  },
  {
    "id": "game-246",
    "bggId": 224904,
    "titleKr": "Sunset Over Water",
    "titleEn": "Sunset Over Water",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/YMh3d_JC-mTNFGPp8KS4wg__original/img/IzMPgfHeqB3Op_tGmuAdX0X2eq8=/0x0/filters:format(png)/pic3750065.png",
    "thumbnail": "https://cf.geekdo-images.com/YMh3d_JC-mTNFGPp8KS4wg__thumb/img/AhPpxnU3qNCQ2MAzGYKH7nbBKx4=/fit-in/200x150/filters:strip_icc()/pic3750065.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 20,
    "maxPlaytime": 20,
    "bggRating": 7,
    "userRating": 7,
    "status": "owned",
    "designers": [
      "Eduardo Baraf",
      "Steve Finn"
    ],
    "createdAt": "2024-11-16T20:22:07.000Z",
    "updatedAt": "2024-11-16T20:22:07.000Z"
  },
  {
    "id": "game-247",
    "bggId": 394887,
    "titleKr": "Surfosaurus MAX",
    "titleEn": "Surfosaurus MAX",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/_oIGFfPMAa0gHWNy7kJp7g__original/img/p96DvDrI5EBJNcZ-Wr6Gc95cVl4=/0x0/filters:format(jpeg)/pic7618281.jpg",
    "thumbnail": "https://cf.geekdo-images.com/_oIGFfPMAa0gHWNy7kJp7g__thumb/img/sDjXtzwxUmWreaMwHw8ofJaCaKc=/fit-in/200x150/filters:strip_icc()/pic7618281.jpg",
    "minPlayers": 2,
    "maxPlayers": 6,
    "minPlaytime": 20,
    "maxPlaytime": 20,
    "bggRating": 7,
    "userRating": 7,
    "status": "played",
    "designers": [
      "Ikhwan Kwon"
    ],
    "createdAt": "2024-11-16T21:30:30.000Z",
    "updatedAt": "2024-11-16T21:30:30.000Z"
  },
  {
    "id": "game-61",
    "bggId": 85990,
    "titleKr": "Survive: Escape from Atlantis! The Giant Squid Mini Expansion",
    "titleEn": "Survive: Escape from Atlantis! The Giant Squid Mini Expansion",
    "yearPublished": 2011,
    "image": "https://cf.geekdo-images.com/CSHwPa0GA6o8eGUwNZjO9A__original/img/BjyBFh0BC5qUj6qO8rTkW7UoFD0=/0x0/filters:format(jpeg)/pic1586891.jpg",
    "thumbnail": "https://cf.geekdo-images.com/CSHwPa0GA6o8eGUwNZjO9A__thumb/img/Yq1jrwwRoSCy1uEWaZ3JCIL2itI=/fit-in/200x150/filters:strip_icc()/pic1586891.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [
      "Stephen Buonocore"
    ],
    "createdAt": "2021-04-28T21:43:47.000Z",
    "updatedAt": "2021-04-28T21:43:47.000Z"
  },
  {
    "id": "game-62",
    "bggId": 268665,
    "titleKr": "Suzume-Jong",
    "titleEn": "Suzume-Jong",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/64XnEhoewbAiSxNCXgII9w__original/img/10-1gz9NO32MIdDKqf48ISTxAs0=/0x0/filters:format(jpeg)/pic4591244.jpg",
    "thumbnail": "https://cf.geekdo-images.com/64XnEhoewbAiSxNCXgII9w__thumb/img/GEj9jULlS4rgRzBhemgbx1epBrw=/fit-in/200x150/filters:strip_icc()/pic4591244.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "played",
    "designers": [
      "Koji Malta",
      "Takahiro Shinozaki (篠崎　高広)"
    ],
    "createdAt": "2021-05-21T19:40:05.000Z",
    "updatedAt": "2021-05-21T19:40:05.000Z"
  },
  {
    "id": "game-302",
    "bggId": 425445,
    "titleKr": "Sweet Lands",
    "titleEn": "Sweet Lands",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/qmCyTIgGhdSON0bMUk8qjQ__original/img/NEfd_QHVVzORADKrXdkffvIYBVw=/0x0/filters:format(jpeg)/pic8329173.jpg",
    "thumbnail": "https://cf.geekdo-images.com/qmCyTIgGhdSON0bMUk8qjQ__thumb/img/7NwXv2G1UPErGTvHHm-R6wdYsoY=/fit-in/200x150/filters:strip_icc()/pic8329173.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 100,
    "maxPlaytime": 200,
    "bggRating": 8,
    "userRating": 8,
    "status": "owned",
    "designers": [
      "Totsuca Chuo"
    ],
    "createdAt": "2025-07-13T10:48:13.000Z",
    "updatedAt": "2025-07-13T10:48:13.000Z"
  },
  {
    "id": "game-240",
    "bggId": 349369,
    "titleKr": "Tabriz",
    "titleEn": "Tabriz",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/6CWLTZyvVl2bG5PLEjFL4g__original/img/58M0rUQE6m-NWmNv29zvoLp6Vm4=/0x0/filters:format(jpeg)/pic6785937.jpg",
    "thumbnail": "https://cf.geekdo-images.com/6CWLTZyvVl2bG5PLEjFL4g__thumb/img/UHna4kCredJdoLYFbY4RBHutl9o=/fit-in/200x150/filters:strip_icc()/pic6785937.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "bggRating": 7.2,
    "userRating": 7.2,
    "status": "owned",
    "designers": [
      "Randy Flynn"
    ],
    "createdAt": "2024-11-02T12:24:38.000Z",
    "updatedAt": "2024-11-02T12:24:38.000Z"
  },
  {
    "id": "game-181",
    "bggId": 252153,
    "titleKr": "Tang Garden",
    "titleEn": "Tang Garden",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/FmElPbRBjK5RmrAC9so5Gw__original/img/oZvUwcb2HsJHq8RfZ9UucPrfC-8=/0x0/filters:format(png)/pic4109518.png",
    "thumbnail": "https://cf.geekdo-images.com/FmElPbRBjK5RmrAC9so5Gw__thumb/img/DBGCgJ7Ynbs3XUEGQjf63AB9QXE=/fit-in/200x150/filters:strip_icc()/pic4109518.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 40,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Francesco Testini",
      "Pierluca Zizzi"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-63",
    "bggId": 286096,
    "titleKr": "Tapestry",
    "titleEn": "Tapestry",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/7kqDmkUMGxXHr1wNPA7Gvg__original/img/e6rS0PyrVlPpJjCsWPmCaGg9PXc=/0x0/filters:format(jpeg)/pic4884996.jpg",
    "thumbnail": "https://cf.geekdo-images.com/7kqDmkUMGxXHr1wNPA7Gvg__thumb/img/1najF3Bh3QI7k2c9sJeTXznbvPU=/fit-in/200x150/filters:strip_icc()/pic4884996.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "status": "played",
    "designers": [
      "Jamey Stegmaier"
    ],
    "createdAt": "2021-04-28T21:43:47.000Z",
    "updatedAt": "2021-04-28T21:43:47.000Z"
  },
  {
    "id": "game-118",
    "bggId": 146278,
    "titleKr": "Tash-Kalar: Arena of Legends",
    "titleEn": "Tash-Kalar: Arena of Legends",
    "yearPublished": 2013,
    "image": "https://cf.geekdo-images.com/woifEuhjEe-0VPKtPcwaIw__original/img/EisNAxSKPu0TQOv0KKiPBGdetQ8=/0x0/filters:format(jpeg)/pic1875045.jpg",
    "thumbnail": "https://cf.geekdo-images.com/woifEuhjEe-0VPKtPcwaIw__thumb/img/PwCqGHn47oqbKt7aJdkhKb4JG_A=/fit-in/200x150/filters:strip_icc()/pic1875045.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "wishlist",
    "designers": [
      "Vlaada Chvátil"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-162",
    "bggId": 186323,
    "titleKr": "Tavarua",
    "titleEn": "Tavarua",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/7Thfly7Q8y_MwrBJvev1fQ__original/img/GwtvjmlKw2MKdCQ8Fr53YnyDA0c=/0x0/filters:format(jpeg)/pic3884903.jpg",
    "thumbnail": "https://cf.geekdo-images.com/7Thfly7Q8y_MwrBJvev1fQ__thumb/img/1uR1tR6nNqp1N5TvvICS-VuV0vg=/fit-in/200x150/filters:strip_icc()/pic3884903.jpg",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Cody Miller"
    ],
    "createdAt": "2025-02-23T19:42:40.000Z",
    "updatedAt": "2025-02-23T19:42:40.000Z"
  },
  {
    "id": "game-106",
    "bggId": 297030,
    "titleKr": "Tekhenu: Obelisk of the Sun",
    "titleEn": "Tekhenu: Obelisk of the Sun",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/CBLtzgG8zsqDkUZ_hN5-ew__original/img/jEL4WHl98vZHaZFcw9hDXxsxjSo=/0x0/filters:format(jpeg)/pic5313583.jpg",
    "thumbnail": "https://cf.geekdo-images.com/CBLtzgG8zsqDkUZ_hN5-ew__thumb/img/QaUXxrgmXFrlNADgPeGhY5F538g=/fit-in/200x150/filters:strip_icc()/pic5313583.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Daniele Tascini",
      "Dávid Turczi"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-170",
    "bggId": 229853,
    "titleKr": "Teotihuacan: City of Gods",
    "titleEn": "Teotihuacan: City of Gods",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/wW5xjgBJcFyLaEWZwrYuKA__original/img/72kzn6t41ZxLEr3GFd8ir6hDdH4=/0x0/filters:format(jpeg)/pic4583626.jpg",
    "thumbnail": "https://cf.geekdo-images.com/wW5xjgBJcFyLaEWZwrYuKA__thumb/img/MppmP7GtDAfKiB5LiAl-ZtPxOPE=/fit-in/200x150/filters:strip_icc()/pic4583626.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 120,
    "status": "owned",
    "designers": [
      "Daniele Tascini"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-64",
    "bggId": 191977,
    "titleKr": "The Castles of Burgundy: The Card Game",
    "titleEn": "The Castles of Burgundy: The Card Game",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/j4Afdh1FVKpHscsHEKZR6w__original/img/2BFTe8zQd4JaRrwQXODBf8oXJkE=/0x0/filters:format(jpeg)/pic2844943.jpg",
    "thumbnail": "https://cf.geekdo-images.com/j4Afdh1FVKpHscsHEKZR6w__thumb/img/BejEwf9-L12GEPh9FCRoV5rsMHk=/fit-in/200x150/filters:strip_icc()/pic2844943.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [
      "Stefan Feld"
    ],
    "createdAt": "2021-05-15T18:28:04.000Z",
    "updatedAt": "2021-05-15T18:28:04.000Z"
  },
  {
    "id": "game-65",
    "bggId": 13004,
    "titleKr": "The Downfall of Pompeii",
    "titleEn": "The Downfall of Pompeii",
    "yearPublished": 2004,
    "image": "https://cf.geekdo-images.com/eZjGZ9O4hdUnc47rDgAgRg__original/img/dH4prpq1jPIi9IS_7a44MlBm6J4=/0x0/filters:format(jpeg)/pic1685805.jpg",
    "thumbnail": "https://cf.geekdo-images.com/eZjGZ9O4hdUnc47rDgAgRg__thumb/img/Ii0rodwBgEzpHofswh32VECo1xk=/fit-in/200x150/filters:strip_icc()/pic1685805.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "status": "played",
    "designers": [
      "Klaus-Jürgen Wrede"
    ],
    "createdAt": "2022-04-23T12:46:17.000Z",
    "updatedAt": "2022-04-23T12:46:17.000Z"
  },
  {
    "id": "game-216",
    "bggId": 368432,
    "titleKr": "The Fox Experiment",
    "titleEn": "The Fox Experiment",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/wzvBp42eSal9UrL2EgOjyw__original/img/m59dyylOOw0FrwEWxzCp7g4_Xp8=/0x0/filters:format(png)/pic7557488.png",
    "thumbnail": "https://cf.geekdo-images.com/wzvBp42eSal9UrL2EgOjyw__thumb/img/EVGDAoyPls95_nGayGjGLChQ0GM=/fit-in/200x150/filters:strip_icc()/pic7557488.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 60,
    "bggRating": 7.4,
    "userRating": 7.4,
    "status": "owned",
    "designers": [
      "Jeff Fraser",
      "Elizabeth Hargrave"
    ],
    "createdAt": "2024-04-22T20:26:40.000Z",
    "updatedAt": "2024-04-22T20:26:40.000Z"
  },
  {
    "id": "game-83",
    "bggId": 221965,
    "titleKr": "The Fox in the Forest",
    "titleEn": "The Fox in the Forest",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/spcy6nvsfq-hxYgwEpmidQ__original/img/rXKH8tfISrTxPqUKCw1FXIDSBc0=/0x0/filters:format(jpeg)/pic3496085.jpg",
    "thumbnail": "https://cf.geekdo-images.com/spcy6nvsfq-hxYgwEpmidQ__thumb/img/nR2TKxtWOVJR1OHD6hAF05IHuOI=/fit-in/200x150/filters:strip_icc()/pic3496085.jpg",
    "minPlayers": 2,
    "maxPlayers": 2,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "owned",
    "designers": [
      "Joshua Buergel"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-66",
    "bggId": 125153,
    "titleKr": "The Gallerist",
    "titleEn": "The Gallerist",
    "yearPublished": 2015,
    "image": "https://cf.geekdo-images.com/ie1GSt1XV04sXQXt-3O1UQ__original/img/59dZRZePEgtcupkRSA2zohZuHpM=/0x0/filters:format(png)/pic2503200.png",
    "thumbnail": "https://cf.geekdo-images.com/ie1GSt1XV04sXQXt-3O1UQ__thumb/img/O0H84AvXp139U865gRLGiAo9-gA=/fit-in/200x150/filters:strip_icc()/pic2503200.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 150,
    "status": "played",
    "designers": [
      "Vital Lacerda"
    ],
    "createdAt": "2022-04-23T17:44:48.000Z",
    "updatedAt": "2022-04-23T17:44:48.000Z"
  },
  {
    "id": "game-67",
    "bggId": 292375,
    "titleKr": "The Great Wall",
    "titleEn": "The Great Wall",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/3P1cMmZ47nf_L1zLO-pKlg__original/img/8mgbSvzu7-1WX4R8ZRseupThtLY=/0x0/filters:format(jpeg)/pic5016682.jpg",
    "thumbnail": "https://cf.geekdo-images.com/3P1cMmZ47nf_L1zLO-pKlg__thumb/img/TEMZ4S46PDoaI3X2enaNKKLthPE=/fit-in/200x150/filters:strip_icc()/pic5016682.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 120,
    "maxPlaytime": 180,
    "status": "owned",
    "designers": [
      "Kamil 'Sanex' Cieśla",
      "Robert Plesowicz",
      "Łukasz Włodarczyk"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-286",
    "bggId": 421006,
    "titleKr": "The Lord of the Rings: Duel for Middle-earth",
    "titleEn": "The Lord of the Rings: Duel for Middle-earth",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/EybxJlUc9rz7F7HVFLqsdw__original/img/Ts4M5eOW38r2oTvJmkx0uwNodv4=/0x0/filters:format(jpeg)/pic8378939.jpg",
    "thumbnail": "https://cf.geekdo-images.com/EybxJlUc9rz7F7HVFLqsdw__thumb/img/rojFW0-h-bteedVG4aJXG1x7V0o=/fit-in/200x150/filters:strip_icc()/pic8378939.jpg",
    "minPlayers": 2,
    "maxPlayers": 2,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "bggRating": 8.4,
    "userRating": 8.4,
    "status": "owned",
    "designers": [
      "Antoine Bauza",
      "Bruno Cathala"
    ],
    "createdAt": "2025-05-17T14:47:09.000Z",
    "updatedAt": "2025-05-17T14:47:09.000Z"
  },
  {
    "id": "game-78",
    "bggId": 244992,
    "titleKr": "The Mind",
    "titleEn": "The Mind",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/q_JGK291hrhnhiRB0667oA__original/img/8VjZEG278faO9JZwzce3v3EKssI=/0x0/filters:format(png)/pic3979766.png",
    "thumbnail": "https://cf.geekdo-images.com/q_JGK291hrhnhiRB0667oA__thumb/img/PUrzEmTo5kOcK5BOb4cbOOcH86I=/fit-in/200x150/filters:strip_icc()/pic3979766.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 20,
    "maxPlaytime": 20,
    "status": "owned",
    "designers": [
      "Wolfgang Warsch"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-68",
    "bggId": 128882,
    "titleKr": "The Resistance: Avalon",
    "titleEn": "The Resistance: Avalon",
    "yearPublished": 2012,
    "image": "https://cf.geekdo-images.com/LPa6rsGcv8S0-OeNjCOAEQ__original/img/AF8HHaIad1re-eg3kd9mlm2j_ss=/0x0/filters:format(jpeg)/pic1398895.jpg",
    "thumbnail": "https://cf.geekdo-images.com/LPa6rsGcv8S0-OeNjCOAEQ__thumb/img/RKui79VjUbQAzTWaPu44ytupzDs=/fit-in/200x150/filters:strip_icc()/pic1398895.jpg",
    "minPlayers": 5,
    "maxPlayers": 10,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "played",
    "designers": [
      "Don Eskridge"
    ],
    "createdAt": "2022-04-03T18:05:22.000Z",
    "updatedAt": "2022-04-03T18:05:22.000Z"
  },
  {
    "id": "game-141",
    "bggId": 269207,
    "titleKr": "The Taverns of Tiefenthal",
    "titleEn": "The Taverns of Tiefenthal",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/H-AU-nhjCbaxWlWj_O-eFw__original/img/lA3TNJgLhVo-hB9rPKxr66js5j0=/0x0/filters:format(jpeg)/pic4873141.jpg",
    "thumbnail": "https://cf.geekdo-images.com/H-AU-nhjCbaxWlWj_O-eFw__thumb/img/K_cH8KNrKA2FdgvqtUMubNvoRQU=/fit-in/200x150/filters:strip_icc()/pic4873141.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 60,
    "status": "prevowned",
    "designers": [
      "Wolfgang Warsch"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-220",
    "bggId": 171623,
    "titleKr": "The Voyages of Marco Polo",
    "titleEn": "The Voyages of Marco Polo",
    "yearPublished": 2015,
    "image": "https://cf.geekdo-images.com/n1G7_aWToLAAB7Mqt8iwyA__original/img/VQddnfi_QO0r4GmUU3M8_-nuO3Q=/0x0/filters:format(png)/pic2461346.png",
    "thumbnail": "https://cf.geekdo-images.com/n1G7_aWToLAAB7Mqt8iwyA__thumb/img/qfEgrXBN5L1EeMQ91siw6r_OoL4=/fit-in/200x150/filters:strip_icc()/pic2461346.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 40,
    "maxPlaytime": 100,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "played",
    "designers": [
      "Simone Luciani",
      "Daniele Tascini"
    ],
    "createdAt": "2024-05-05T19:13:31.000Z",
    "updatedAt": "2024-05-05T19:13:31.000Z"
  },
  {
    "id": "game-196",
    "bggId": 371942,
    "titleKr": "The White Castle",
    "titleEn": "The White Castle",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/qXT1U-nFh9PE8ujfdmI7dA__original/img/jzmifZJ0Sg2Js7hmQjzX7bEHVBY=/0x0/filters:format(jpeg)/pic7754663.jpg",
    "thumbnail": "https://cf.geekdo-images.com/qXT1U-nFh9PE8ujfdmI7dA__thumb/img/ru1l95gdKNXSsByDglE9Xxgu0kE=/fit-in/200x150/filters:strip_icc()/pic7754663.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 80,
    "maxPlaytime": 80,
    "status": "owned",
    "designers": [
      "Isra C.",
      "Shei S."
    ],
    "createdAt": "2024-01-28T20:09:17.000Z",
    "updatedAt": "2024-01-28T20:09:17.000Z"
  },
  {
    "id": "game-317",
    "bggId": 438936,
    "titleKr": "The White Castle Duel",
    "titleEn": "The White Castle Duel",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/7jnU8jv4wym7vtDG3n4xYA__original/img/OsFQPGVCVWX60IA2L6YCTW9GE_U=/0x0/filters:format(jpeg)/pic8918307.jpg",
    "thumbnail": "https://cf.geekdo-images.com/7jnU8jv4wym7vtDG3n4xYA__small/img/Ep_GWy6XNlBV794L3lYwcK4dqoc=/fit-in/200x150/filters:strip_icc()/pic8918307.jpg",
    "minPlayers": 2,
    "maxPlayers": 2,
    "minPlaytime": 20,
    "maxPlaytime": 40,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "owned",
    "designers": [
      "Isra C.",
      "Shei S."
    ],
    "createdAt": "2025-10-25T14:06:47.000Z",
    "updatedAt": "2025-10-25T14:06:47.000Z"
  },
  {
    "id": "game-296",
    "bggId": 420321,
    "titleKr": "The White Castle: Matcha",
    "titleEn": "The White Castle: Matcha",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/xPO9VCD5-KeLzukaWVTzGw__original/img/7rW0aqO1lkhBCrrQUM9XSkKQSbI=/0x0/filters:format(jpeg)/pic8179939.jpg",
    "thumbnail": "https://cf.geekdo-images.com/xPO9VCD5-KeLzukaWVTzGw__thumb/img/doB5UVNXWs5oKyKju_URNLFSMoY=/fit-in/200x150/filters:strip_icc()/pic8179939.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 110,
    "bggRating": 8.5,
    "userRating": 8.5,
    "status": "owned",
    "designers": [
      "Isra C.",
      "Shei S."
    ],
    "createdAt": "2025-06-14T17:34:43.000Z",
    "updatedAt": "2025-06-14T17:34:43.000Z"
  },
  {
    "id": "game-297",
    "bggId": 431374,
    "titleKr": "The White Castle: Promo 4",
    "titleEn": "The White Castle: Promo 4",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/0gJAKlhHv0mkFxLEzSBp5w__original/img/dvfrk4uQnh5gubXFrn-aU1IoD4A=/0x0/filters:format(jpeg)/pic8498653.jpg",
    "thumbnail": "https://cf.geekdo-images.com/0gJAKlhHv0mkFxLEzSBp5w__thumb/img/Dc1COKPMV6tCGLxpjb7nbe9j-Jw=/fit-in/200x150/filters:strip_icc()/pic8498653.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 110,
    "bggRating": 7.6,
    "userRating": 7.6,
    "status": "owned",
    "designers": [],
    "createdAt": "2025-06-14T17:35:04.000Z",
    "updatedAt": "2025-06-14T17:35:04.000Z"
  },
  {
    "id": "game-188",
    "bggId": 368058,
    "titleKr": "The Wolves",
    "titleEn": "The Wolves",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/6irYLjUf_o0rK7E_4qI-gw__original/img/Cyll_t91vZxuxt_fBbSb0z70vPA=/0x0/filters:format(png)/pic6990829.png",
    "thumbnail": "https://cf.geekdo-images.com/6irYLjUf_o0rK7E_4qI-gw__thumb/img/adKpLZnYvPO9SiZ6p-1RzgIk-98=/fit-in/200x150/filters:strip_icc()/pic6990829.png",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 75,
    "maxPlaytime": 75,
    "status": "owned",
    "designers": [
      "Ashwin Kamath",
      "Clarence Simpson"
    ],
    "createdAt": "2023-07-02T10:22:46.000Z",
    "updatedAt": "2023-07-02T10:22:46.000Z"
  },
  {
    "id": "game-217",
    "bggId": 9539,
    "titleKr": "Thrill Bomb",
    "titleEn": "Beat the 8 Ball",
    "yearPublished": 1975,
    "image": "https://cf.geekdo-images.com/GJd_qJDrgtEbTiFzKKIoOg__original/img/UWDIJJzUb6Mff1isiGKpBj3tclA=/0x0/filters:format(jpeg)/pic7542345.jpg",
    "thumbnail": "https://cf.geekdo-images.com/GJd_qJDrgtEbTiFzKKIoOg__thumb/img/cBTR1dbvjUVIBDL9sUFfap8GVY8=/fit-in/200x150/filters:strip_icc()/pic7542345.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 10,
    "maxPlaytime": 10,
    "bggRating": 6.5,
    "userRating": 6.5,
    "status": "owned",
    "designers": [
      "Frank D. Ventura"
    ],
    "createdAt": "2024-05-01T18:03:05.000Z",
    "updatedAt": "2024-05-01T18:03:05.000Z"
  },
  {
    "id": "game-191",
    "bggId": 182028,
    "titleKr": "Through the Ages: A New Story of Civilization",
    "titleEn": "Through the Ages: A New Story of Civilization",
    "yearPublished": 2015,
    "image": "https://cf.geekdo-images.com/fVwPntkJKgaEo0rIC0RwpA__original/img/1jawNpljTXwnT4km_2CjGwoUPR8=/0x0/filters:format(jpeg)/pic2663291.jpg",
    "thumbnail": "https://cf.geekdo-images.com/fVwPntkJKgaEo0rIC0RwpA__thumb/img/31usGlzlBReEFf60bcgbvDTjwCg=/fit-in/200x150/filters:strip_icc()/pic2663291.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 120,
    "maxPlaytime": 120,
    "status": "played",
    "designers": [
      "Vlaada Chvátil"
    ],
    "createdAt": "2023-09-09T11:08:58.000Z",
    "updatedAt": "2023-09-09T11:08:58.000Z"
  },
  {
    "id": "game-303",
    "bggId": 355997,
    "titleKr": "Thunder Road: Vendetta – Maximum Chrome",
    "titleEn": "Thunder Road: Vendetta – Maximum Chrome",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/8GePHY93STfcwWXt9R0T1Q__original/img/yINEH634lYfk5OncNkXSZzEWmL4=/0x0/filters:format(jpeg)/pic8631039.jpg",
    "thumbnail": "https://cf.geekdo-images.com/8GePHY93STfcwWXt9R0T1Q__thumb/img/4cEZOHgZWll3Z3SM0PA9lxMJhFE=/fit-in/200x150/filters:strip_icc()/pic8631039.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 45,
    "maxPlaytime": 75,
    "bggRating": 8.7,
    "userRating": 8.7,
    "status": "owned",
    "designers": [
      "Dave Chalker",
      "Noah Cohen",
      "Rob Daviau",
      "Justin D. Jacobson",
      "Brett Myers",
      "Brian Neff"
    ],
    "createdAt": "2025-07-13T17:46:38.000Z",
    "updatedAt": "2025-07-13T17:46:38.000Z"
  },
  {
    "id": "game-168",
    "bggId": 215,
    "titleKr": "Tichu",
    "titleEn": "Tichu",
    "yearPublished": 1991,
    "image": "https://cf.geekdo-images.com/gz8_8iYP2SSGVAxpp7CwLg__original/img/9ULfNvkyu0k1m0d63-Mk0k5e0MA=/0x0/filters:format(png)/pic5854968.png",
    "thumbnail": "https://cf.geekdo-images.com/gz8_8iYP2SSGVAxpp7CwLg__thumb/img/5jkPnPGk5LWNzuW5GANPDLa4ZRA=/fit-in/200x150/filters:strip_icc()/pic5854968.png",
    "minPlayers": 3,
    "maxPlayers": 10,
    "minPlaytime": 30,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Urs Hostettler"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-341",
    "bggId": 390092,
    "titleKr": "Ticket to Ride Legacy: Legends of the West",
    "titleEn": "Ticket to Ride Legacy: Legends of the West",
    "yearPublished": 2023,
    "image": "https://cf.geekdo-images.com/2H0pJddVJA3r6btqRNLG1g__original/img/q8N6sz7FIZkbXe_0d4RiIfM8aNU=/0x0/filters:format(png)/pic7541330.png",
    "thumbnail": "https://cf.geekdo-images.com/2H0pJddVJA3r6btqRNLG1g__small/img/scMQ04r1admTpyvH91g9DbZEncg=/fit-in/200x150/filters:strip_icc()/pic7541330.png",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 20,
    "maxPlaytime": 90,
    "bggRating": 8.6,
    "userRating": 8.6,
    "status": "owned",
    "designers": [
      "Rob Daviau",
      "Matt Leacock",
      "Alan R. Moon"
    ],
    "createdAt": "2026-04-26T12:37:50.000Z",
    "updatedAt": "2026-04-26T12:37:50.000Z"
  },
  {
    "id": "game-94",
    "bggId": 233262,
    "titleKr": "Tidal Blades: Heroes of the Reef",
    "titleEn": "Tidal Blades: Heroes of the Reef",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/4PRD3SvbYGPUr-fRjy0O6Q__original/img/epwiTjfYAfJuJHKEbEtu-xDV7bQ=/0x0/filters:format(jpeg)/pic4309360.jpg",
    "thumbnail": "https://cf.geekdo-images.com/4PRD3SvbYGPUr-fRjy0O6Q__thumb/img/9cjReRwyhOaCTQ3DoHiLFuStxLU=/fit-in/200x150/filters:strip_icc()/pic4309360.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Tim Eisner",
      "Ben Eisner"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-84",
    "bggId": 331787,
    "titleKr": "Tiny Epic Dungeons",
    "titleEn": "Tiny Epic Dungeons",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/rDOnDFAwGXi_fVsfp-ZCqw__original/img/lwHbQBPyDT4g7pakY-Oix1c-A5I=/0x0/filters:format(jpeg)/pic6029065.jpg",
    "thumbnail": "https://cf.geekdo-images.com/rDOnDFAwGXi_fVsfp-ZCqw__thumb/img/azj8SnpTtQHp1C7W1QoO8y9yyys=/fit-in/200x150/filters:strip_icc()/pic6029065.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Scott Almes"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-69",
    "bggId": 257283,
    "titleKr": "Tiny Epic Mechs",
    "titleEn": "Tiny Epic Mechs",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/auUjnvi2D596hPBz0z0Ybg__original/img/-Tf8kGrpfMkaEkXve-P1rgR3M5Y=/0x0/filters:format(jpeg)/pic4239499.jpg",
    "thumbnail": "https://cf.geekdo-images.com/auUjnvi2D596hPBz0z0Ybg__thumb/img/0lUGODA2QrJVWjy5vYZF4Mwqz_M=/fit-in/200x150/filters:strip_icc()/pic4239499.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Scott Almes"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-87",
    "bggId": 316183,
    "titleKr": "Tiny Epic Quest: Deluxe Edition",
    "titleEn": "Tiny Epic Quest: Deluxe Edition",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/QJlAWu192gfQhV_Qo1wkdA__original/img/MJ0P8Z2gV9ZZLHNefTlegeTnga8=/0x0/filters:format(jpeg)/pic3666276.jpg",
    "thumbnail": "https://cf.geekdo-images.com/QJlAWu192gfQhV_Qo1wkdA__thumb/img/qWVvA0V0tuJeoWuEQ80T3F-SNIo=/fit-in/200x150/filters:strip_icc()/pic3666276.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Scott Almes"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-175",
    "bggId": 266219,
    "titleKr": "Tiny Epic Zombies: Deluxe Edition",
    "titleEn": "Tiny Epic Zombies: Deluxe Edition",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/M1TZo8Z-ia_jT5BVA9dPgw__original/img/L_trJes71zOraZjG9ZkSxJ7Iyuo=/0x0/filters:format(jpeg)/pic4448589.jpg",
    "thumbnail": "https://cf.geekdo-images.com/M1TZo8Z-ia_jT5BVA9dPgw__thumb/img/t0ZKN7b0cIw-YBrbxew4kSCpp8A=/fit-in/200x150/filters:strip_icc()/pic4448589.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "owned",
    "designers": [
      "Scott Almes"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-70",
    "bggId": 265736,
    "titleKr": "Tiny Towns",
    "titleEn": "Tiny Towns",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/aE1EoOzr530gQin8bj8QDA__original/img/-GDAsvmQ3wkuHaZ8h9G5Gk_nvVA=/0x0/filters:format(jpeg)/pic4460401.jpg",
    "thumbnail": "https://cf.geekdo-images.com/aE1EoOzr530gQin8bj8QDA__thumb/img/AI-Ro3wLJtpyZLmCMNywOlpz0S8=/fit-in/200x150/filters:strip_icc()/pic4460401.jpg",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 45,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [
      "Peter McPherson"
    ],
    "createdAt": "2021-04-28T21:43:47.000Z",
    "updatedAt": "2021-04-28T21:43:47.000Z"
  },
  {
    "id": "game-294",
    "bggId": 215463,
    "titleKr": "Tokyo Highway",
    "titleEn": "Tokyo Highway",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/dF6ZKbrhMWz-c01iD3gg6Q__original/img/prAM6yU26EQqcKeqLvn68_uik2A=/0x0/filters:format(jpeg)/pic8485703.jpg",
    "thumbnail": "https://cf.geekdo-images.com/dF6ZKbrhMWz-c01iD3gg6Q__thumb/img/6zZobzuDSxfMhTJyIZiZLRz0520=/fit-in/200x150/filters:strip_icc()/pic8485703.jpg",
    "minPlayers": 2,
    "maxPlayers": 2,
    "minPlaytime": 30,
    "maxPlaytime": 50,
    "bggRating": 6.6,
    "userRating": 6.6,
    "status": "owned",
    "designers": [
      "Naotaka Shimamoto",
      "Yoshiaki Tomioka"
    ],
    "createdAt": "2025-06-07T19:43:15.000Z",
    "updatedAt": "2025-06-07T19:43:15.000Z"
  },
  {
    "id": "game-319",
    "bggId": 452321,
    "titleKr": "TomaToss",
    "titleEn": "TomaToss",
    "yearPublished": 2025,
    "image": "https://cf.geekdo-images.com/KoMzUo6DULFy_v4MaGaRUw__original/img/smvfbD2Y6C1Wmt0hrxNG6lXujmU=/0x0/filters:format(jpeg)/pic9051927.jpg",
    "thumbnail": "https://cf.geekdo-images.com/KoMzUo6DULFy_v4MaGaRUw__small/img/wEv8_SRYPsKNnQ1cd1LBkKVTqgk=/fit-in/200x150/filters:strip_icc()/pic9051927.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 20,
    "maxPlaytime": 20,
    "bggRating": 7,
    "userRating": 7,
    "status": "owned",
    "designers": [
      "Minjae K."
    ],
    "createdAt": "2025-10-25T17:09:59.000Z",
    "updatedAt": "2025-10-25T17:09:59.000Z"
  },
  {
    "id": "game-284",
    "bggId": 220738,
    "titleKr": "Topito",
    "titleEn": "Topito",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/wYb7M6O3Ap4CX1EyG-7P1g__original/img/4L4Ggpy7BhMIHpmONEE7HgTx95Y=/0x0/filters:format(jpeg)/pic3750973.jpg",
    "thumbnail": "https://cf.geekdo-images.com/wYb7M6O3Ap4CX1EyG-7P1g__thumb/img/_xyJSdaSGVEwuSJrLJSdAeNXhoY=/fit-in/200x150/filters:strip_icc()/pic3750973.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "bggRating": 6.6,
    "userRating": 6.6,
    "status": "played",
    "designers": [
      "Marco Teubner"
    ],
    "createdAt": "2025-05-11T19:00:56.000Z",
    "updatedAt": "2025-05-11T19:00:56.000Z"
  },
  {
    "id": "game-205",
    "bggId": 148319,
    "titleKr": "Tragedy Looper",
    "titleEn": "Tragedy Looper",
    "yearPublished": 2011,
    "image": "https://cf.geekdo-images.com/fsUCwhRp_5knh6eY8EduTw__original/img/FgUk3tNrF0_ryLIT3S0nnZUY8iE=/0x0/filters:format(png)/pic2046290.png",
    "thumbnail": "https://cf.geekdo-images.com/fsUCwhRp_5knh6eY8EduTw__thumb/img/_mkrhR0iN7QX5e1LhsPtDbhXhMo=/fit-in/200x150/filters:strip_icc()/pic2046290.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 120,
    "maxPlaytime": 120,
    "bggRating": 7.2,
    "userRating": 7.2,
    "status": "played",
    "designers": [
      "BakaFire"
    ],
    "createdAt": "2024-03-10T15:40:29.000Z",
    "updatedAt": "2024-03-10T15:40:29.000Z"
  },
  {
    "id": "game-71",
    "bggId": 102680,
    "titleKr": "Trajan",
    "titleEn": "Trajan",
    "yearPublished": 2011,
    "image": "https://cf.geekdo-images.com/djdeCr__iNV5rMnGnxNiaQ__original/img/-pxFp0FHDLLZK_hMT5kHG7IAQ7M=/0x0/filters:format(png)/pic4336095.png",
    "thumbnail": "https://cf.geekdo-images.com/djdeCr__iNV5rMnGnxNiaQ__thumb/img/jULoayRVuV3c8cRqKOPsf7oMO5w=/fit-in/200x150/filters:strip_icc()/pic4336095.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "status": "played",
    "designers": [
      "Stefan Feld"
    ],
    "createdAt": "2022-03-09T16:48:52.000Z",
    "updatedAt": "2022-03-09T16:48:52.000Z"
  },
  {
    "id": "game-159",
    "bggId": 242639,
    "titleKr": "Treasure Island",
    "titleEn": "Treasure Island",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/tHEYd09coOFilcJZf3-I9A__original/img/dsvADohNa_xOOW6-9A-YhfFsKq0=/0x0/filters:format(jpeg)/pic6974459.jpg",
    "thumbnail": "https://cf.geekdo-images.com/tHEYd09coOFilcJZf3-I9A__thumb/img/DIbtdKy0v43ncP_fBcBZoIPQ2cs=/fit-in/200x150/filters:strip_icc()/pic6974459.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 45,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Marc Paquien"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-290",
    "bggId": 420766,
    "titleKr": "Trick & Snipers",
    "titleEn": "Trick & Snipers",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/RyCkeY5XNMsMwFAanvjMpg__original/img/OZzj7apSbiJwDh0rDqtpH7oAOW0=/0x0/filters:format(jpeg)/pic8195413.jpg",
    "thumbnail": "https://cf.geekdo-images.com/RyCkeY5XNMsMwFAanvjMpg__thumb/img/qBDIyUjxL1m_XMiTvbOYsw2qyC0=/fit-in/200x150/filters:strip_icc()/pic8195413.jpg",
    "minPlayers": 3,
    "maxPlayers": 5,
    "minPlaytime": 15,
    "maxPlaytime": 15,
    "bggRating": 6.6,
    "userRating": 6.6,
    "status": "played",
    "designers": [
      "宮野 華也 (Kaya Miyano)"
    ],
    "createdAt": "2025-05-25T12:56:30.000Z",
    "updatedAt": "2025-05-25T12:56:30.000Z"
  },
  {
    "id": "game-291",
    "bggId": 343566,
    "titleKr": "TRICKTAKERs",
    "titleEn": "TRICKTAKERs",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/82FhiRTZdJQUa1Z8H33Tag__original/img/wJAu2yzFGmB0KzwXJxAXgKGYc-Y=/0x0/filters:format(png)/pic7958476.png",
    "thumbnail": "https://cf.geekdo-images.com/82FhiRTZdJQUa1Z8H33Tag__thumb/img/mLI0Pyem2uCMWxn6i9__W3YXcHU=/fit-in/200x150/filters:strip_icc()/pic7958476.png",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 30,
    "maxPlaytime": 40,
    "bggRating": 7.4,
    "userRating": 7.4,
    "status": "played",
    "designers": [
      "Hiroken"
    ],
    "createdAt": "2025-05-25T17:47:51.000Z",
    "updatedAt": "2025-05-25T17:47:51.000Z"
  },
  {
    "id": "game-125",
    "bggId": 233078,
    "titleKr": "Twilight Imperium: Fourth Edition",
    "titleEn": "Twilight Imperium: Fourth Edition",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/_Ppn5lssO5OaildSE-FgFA__original/img/kVpZ0Maa_LeQGWxOqsYKP3N4KUY=/0x0/filters:format(jpeg)/pic3727516.jpg",
    "thumbnail": "https://cf.geekdo-images.com/_Ppn5lssO5OaildSE-FgFA__thumb/img/lfEukJE0JsoZZObaF9K9YnFp62E=/fit-in/200x150/filters:strip_icc()/pic3727516.jpg",
    "minPlayers": 3,
    "maxPlayers": 6,
    "minPlaytime": 240,
    "maxPlaytime": 480,
    "status": "owned",
    "designers": [
      "Dane Beltrami",
      "Corey Konieczka",
      "Christian T. Petersen"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-174",
    "bggId": 189932,
    "titleKr": "Tyrants of the Underdark",
    "titleEn": "Tyrants of the Underdark",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/F58jczp5xk9CYFimrytXaw__original/img/m0S3T9_YWM7VvTW1c3pl4tBiu2c=/0x0/filters:format(jpeg)/pic2801874.jpg",
    "thumbnail": "https://cf.geekdo-images.com/F58jczp5xk9CYFimrytXaw__thumb/img/X2ur4XNMdPRURbaziJ8nQmioNGE=/fit-in/200x150/filters:strip_icc()/pic2801874.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 60,
    "status": "wishlist",
    "designers": [
      "Peter Lee",
      "Rodney Thompson",
      "Andrew Veen"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-354",
    "bggId": 126163,
    "titleKr": "Tzolk'in: The Mayan Calendar",
    "titleEn": "Tzolk'in: The Mayan Calendar",
    "yearPublished": 2012,
    "image": "https://cf.geekdo-images.com/kXf7mDyDYuHg6oe8yTUIEA__original/img/f6-Au0KTnNR4nugSu2U-wPNbZCU=/0x0/filters:format(jpeg)/pic4604439.jpg",
    "thumbnail": "https://cf.geekdo-images.com/kXf7mDyDYuHg6oe8yTUIEA__small/img/or9mAn4ClljY_wO_zvsLJDqs9tU=/fit-in/200x150/filters:strip_icc()/pic4604439.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 90,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "played",
    "designers": [
      "Simone Luciani",
      "Daniele Tascini"
    ],
    "createdAt": "2026-08-08T15:07:25.000Z",
    "updatedAt": "2026-08-08T15:07:25.000Z"
  },
  {
    "id": "game-72",
    "bggId": 46396,
    "titleKr": "Ubongo 3-D",
    "titleEn": "Ubongo 3D",
    "yearPublished": 2009,
    "image": "https://cf.geekdo-images.com/MhM1YTalerrWfit9fXELSg__original/img/FMiRa5C0aI57vYZt-0JVb5uyMdE=/0x0/filters:format(jpeg)/pic587060.jpg",
    "thumbnail": "https://cf.geekdo-images.com/MhM1YTalerrWfit9fXELSg__thumb/img/n0-v0NF5_VWXPKwp_J8IdH7gyzA=/fit-in/200x150/filters:strip_icc()/pic587060.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "played",
    "designers": [
      "Grzegorz Rejchtman"
    ],
    "createdAt": "2021-04-28T21:43:47.000Z",
    "updatedAt": "2021-04-28T21:43:47.000Z"
  },
  {
    "id": "game-172",
    "bggId": 179172,
    "titleKr": "Unfair",
    "titleEn": "Unfair",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/RQvdby3WmdROu05YFuxnqQ__original/img/zgL01zlTKSpbIgW5R3vzAJBaJlU=/0x0/filters:format(jpeg)/pic4717882.jpg",
    "thumbnail": "https://cf.geekdo-images.com/RQvdby3WmdROu05YFuxnqQ__thumb/img/RRVq0hk9d5X9QbshiIBeWXCdmSA=/fit-in/200x150/filters:strip_icc()/pic4717882.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 50,
    "maxPlaytime": 125,
    "status": "owned",
    "designers": [
      "Joel Finch"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-306",
    "bggId": 422692,
    "titleKr": "Very Bad Lands: Brachio",
    "titleEn": "Very Bad Lands: Brachio",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/Q43sjWyowGAzTD91xSpmJA__original/img/udty9U4t1LWIKBCHQD0jSQDG8Hc=/0x0/filters:format(png)/pic8248133.png",
    "thumbnail": "https://cf.geekdo-images.com/Q43sjWyowGAzTD91xSpmJA__thumb/img/SlthN2SsqngfYr1QXCy6D8ShM4w=/fit-in/200x150/filters:strip_icc()/pic8248133.png",
    "minPlayers": 3,
    "maxPlayers": 6,
    "minPlaytime": 20,
    "maxPlaytime": 20,
    "bggRating": 6.5,
    "userRating": 6.5,
    "status": "played",
    "designers": [
      "Marc Larivière"
    ],
    "createdAt": "2025-07-19T16:23:02.000Z",
    "updatedAt": "2025-07-19T16:23:02.000Z"
  },
  {
    "id": "game-165",
    "bggId": 296151,
    "titleKr": "Viscounts of the West Kingdom",
    "titleEn": "Viscounts of the West Kingdom",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/kMgSC_kRlJWt3KLj5y0BxQ__original/img/t9ccf6x3PQiL5Cqn4-mePKUNC-E=/0x0/filters:format(png)/pic5230695.png",
    "thumbnail": "https://cf.geekdo-images.com/kMgSC_kRlJWt3KLj5y0BxQ__thumb/img/2uNYQn2vHuNGrx5-dxc1h7Mh7Do=/fit-in/200x150/filters:strip_icc()/pic5230695.png",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 90,
    "status": "wishlist",
    "designers": [
      "S J Macdonald",
      "Shem Phillips"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-73",
    "bggId": 183394,
    "titleKr": "Viticulture Essential Edition",
    "titleEn": "Viticulture Essential Edition",
    "yearPublished": 2015,
    "image": "https://cf.geekdo-images.com/l_PRU2lVlX9seScRFcvFlA__original/img/gDL7OZFlzoOFgU0VYlREs8P5hCQ=/0x0/filters:format(jpeg)/pic6500949.jpg",
    "thumbnail": "https://cf.geekdo-images.com/l_PRU2lVlX9seScRFcvFlA__thumb/img/pULDtVd75QZgGfvSMhr6Rs07vK8=/fit-in/200x150/filters:strip_icc()/pic6500949.jpg",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 45,
    "maxPlaytime": 90,
    "status": "played",
    "designers": [
      "Jamey Stegmaier",
      "Alan Stone"
    ],
    "createdAt": "2022-05-05T19:30:36.000Z",
    "updatedAt": "2022-05-05T19:30:36.000Z"
  },
  {
    "id": "game-74",
    "bggId": 258074,
    "titleKr": "Volfyirion",
    "titleEn": "Volfyirion",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/Aj8NuGnzNWI45MgaRd8pMA__original/img/jDsr53kl248Hb-9nrzN_MAwHhH4=/0x0/filters:format(jpeg)/pic4653586.jpg",
    "thumbnail": "https://cf.geekdo-images.com/Aj8NuGnzNWI45MgaRd8pMA__thumb/img/J3_x_DaWZ2atpzfFM3yYVLSzAgg=/fit-in/200x150/filters:strip_icc()/pic4653586.jpg",
    "minPlayers": 1,
    "maxPlayers": 2,
    "minPlaytime": 15,
    "maxPlaytime": 30,
    "status": "played",
    "designers": [
      "Federico Tini",
      "Alessandro Veracchi"
    ],
    "createdAt": "2021-05-09T19:46:10.000Z",
    "updatedAt": "2021-05-09T19:46:10.000Z"
  },
  {
    "id": "game-340",
    "bggId": 374071,
    "titleKr": "Wanted Wombats",
    "titleEn": "Wanted Wombats",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/Hu86BcFEi4ZV0KC1nxAhxQ__original/img/7yL0gHDW_ry-IRY4XE5zpJXXiA8=/0x0/filters:format(png)/pic9279321.png",
    "thumbnail": "https://cf.geekdo-images.com/Hu86BcFEi4ZV0KC1nxAhxQ__small/img/2cbWRU-EpY0HjPXUgCJfyz1enoU=/fit-in/200x150/filters:strip_icc()/pic9279321.png",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 1,
    "maxPlaytime": 15,
    "bggRating": 6.4,
    "userRating": 6.4,
    "status": "played",
    "designers": [
      "宮野 華也 (Kaya Miyano)"
    ],
    "createdAt": "2026-04-26T12:29:37.000Z",
    "updatedAt": "2026-04-26T12:29:37.000Z"
  },
  {
    "id": "game-75",
    "bggId": 249259,
    "titleKr": "War Chest",
    "titleEn": "War Chest",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/BryJNSSDbCohXeaJPx3tpw__original/img/pgmg83e1lUqNo7FTLdscWNDwlPE=/0x0/filters:format(png)/pic4232048.png",
    "thumbnail": "https://cf.geekdo-images.com/BryJNSSDbCohXeaJPx3tpw__thumb/img/5fmJlAM307xX3zozMnStTuWYphI=/fit-in/200x150/filters:strip_icc()/pic4232048.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 30,
    "status": "owned",
    "designers": [
      "Trevor Benjamin",
      "David Thompson (I)"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-76",
    "bggId": 274364,
    "titleKr": "Watergate",
    "titleEn": "Watergate",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/iTBogxNFa3Ymh-6ST3srsw__original/img/ECgm53fEsB3eDVjZjgeejiZ__Qk=/0x0/filters:format(jpeg)/pic4768766.jpg",
    "thumbnail": "https://cf.geekdo-images.com/iTBogxNFa3Ymh-6ST3srsw__thumb/img/5vZps-04NqSAuUC4e6-E9M96VxE=/fit-in/200x150/filters:strip_icc()/pic4768766.jpg",
    "minPlayers": 2,
    "maxPlayers": 2,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [
      "Matthias Cramer"
    ],
    "createdAt": "2022-03-20T17:02:26.000Z",
    "updatedAt": "2022-03-20T17:02:26.000Z"
  },
  {
    "id": "game-136",
    "bggId": 262543,
    "titleKr": "Wavelength",
    "titleEn": "Wavelength",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/z4fbPdmJg_5yphJEvql4ZA__original/img/bP1gM8RC-o5iz20_WazBaBNDHnU=/0x0/filters:format(png)/pic4552862.png",
    "thumbnail": "https://cf.geekdo-images.com/z4fbPdmJg_5yphJEvql4ZA__thumb/img/bxLuHVLF-Y06jWRSKA-tuQ3YYcE=/fit-in/200x150/filters:strip_icc()/pic4552862.png",
    "minPlayers": 2,
    "maxPlayers": 12,
    "minPlaytime": 30,
    "maxPlaytime": 45,
    "status": "owned",
    "designers": [
      "Alex Hague",
      "Justin Vickers",
      "Wolfgang Warsch"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-107",
    "bggId": 339789,
    "titleKr": "Welcome to the Moon",
    "titleEn": "Welcome to the Moon",
    "yearPublished": 2021,
    "image": "https://cf.geekdo-images.com/eCdiHCB9OobumwaGl4dbOQ__original/img/U4DY7_OUE1XI1m1Fi0iubbf2sEI=/0x0/filters:format(png)/pic6204967.png",
    "thumbnail": "https://cf.geekdo-images.com/eCdiHCB9OobumwaGl4dbOQ__thumb/img/dyaAIesMyeQWUoLRA25Dj9MhruI=/fit-in/200x150/filters:strip_icc()/pic6204967.png",
    "minPlayers": 1,
    "maxPlayers": 6,
    "minPlaytime": 25,
    "maxPlaytime": 30,
    "status": "owned",
    "designers": [
      "Alexis Allard",
      "Benoit Turpin"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-135",
    "bggId": 233867,
    "titleKr": "Welcome To...",
    "titleEn": "Welcome To...",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/g4XmxyKhNVdhC3QPd1purQ__original/img/pb6XFQZFUNOr6OPysOHB3usVDFk=/0x0/filters:format(jpeg)/pic3761012.jpg",
    "thumbnail": "https://cf.geekdo-images.com/g4XmxyKhNVdhC3QPd1purQ__thumb/img/e3bCyIvM1IOGFYnKGj2jIn5mbKY=/fit-in/200x150/filters:strip_icc()/pic3761012.jpg",
    "minPlayers": 1,
    "maxPlayers": 100,
    "minPlaytime": 25,
    "maxPlaytime": 25,
    "status": "owned",
    "designers": [
      "Benoit Turpin"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-130",
    "bggId": 190082,
    "titleKr": "Whitehall Mystery",
    "titleEn": "Whitehall Mystery",
    "yearPublished": 2017,
    "image": "https://cf.geekdo-images.com/LA-CPp3BnCHkJa8ut85aIQ__original/img/0OqPWgqiD32midVjoYvwTvHZ62Y=/0x0/filters:format(jpeg)/pic3360633.jpg",
    "thumbnail": "https://cf.geekdo-images.com/LA-CPp3BnCHkJa8ut85aIQ__thumb/img/jva8lwK8a53YcK0fC7pSdr2iV3c=/fit-in/200x150/filters:strip_icc()/pic3360633.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 45,
    "maxPlaytime": 60,
    "status": "owned",
    "designers": [
      "Gabriele Mari",
      "Gianluca Santopietro"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-265",
    "bggId": 215471,
    "titleKr": "Wind the Film!",
    "titleEn": "Photograph",
    "yearPublished": 2016,
    "image": "https://cf.geekdo-images.com/hZxtHIrpYhtkrkx5etMBBQ__original/img/hLQGMWB-ReiXVrz5cbzE6crA7Xo=/0x0/filters:format(jpeg)/pic7245179.jpg",
    "thumbnail": "https://cf.geekdo-images.com/hZxtHIrpYhtkrkx5etMBBQ__thumb/img/m3WxHxBnv4JaP3NU5UmR3Ano20Y=/fit-in/200x150/filters:strip_icc()/pic7245179.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 20,
    "maxPlaytime": 20,
    "bggRating": 7.4,
    "userRating": 7.4,
    "status": "owned",
    "designers": [
      "Saashi"
    ],
    "createdAt": "2025-02-15T19:08:56.000Z",
    "updatedAt": "2025-02-15T19:08:56.000Z"
  },
  {
    "id": "game-279",
    "bggId": 403441,
    "titleKr": "Windmill Valley",
    "titleEn": "Windmill Valley",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/Z3mBHQuawFfI3ZTQ8Z64CA__original/img/clROt5s1-1JsDwFpXV2Ytu7Tg4A=/0x0/filters:format(jpeg)/pic7796391.jpg",
    "thumbnail": "https://cf.geekdo-images.com/Z3mBHQuawFfI3ZTQ8Z64CA__thumb/img/Oo7FfbdgRd9GXJxb7-CMiU9jD9w=/fit-in/200x150/filters:strip_icc()/pic7796391.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 45,
    "maxPlaytime": 90,
    "bggRating": 7.8,
    "userRating": 7.8,
    "status": "owned",
    "designers": [
      "Dani Garcia"
    ],
    "createdAt": "2025-05-11T17:36:21.000Z",
    "updatedAt": "2025-05-11T17:36:21.000Z"
  },
  {
    "id": "game-166",
    "bggId": 266192,
    "titleKr": "Wingspan",
    "titleEn": "Wingspan",
    "yearPublished": 2019,
    "image": "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__original/img/cI782Zis9cT66j2MjSHKJGnFPNw=/0x0/filters:format(jpeg)/pic4458123.jpg",
    "thumbnail": "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__thumb/img/VNToqgS2-pOGU6MuvIkMPKn_y-s=/fit-in/200x150/filters:strip_icc()/pic4458123.jpg",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 40,
    "maxPlaytime": 70,
    "status": "owned",
    "designers": [
      "Elizabeth Hargrave"
    ],
    "createdAt": "2023-04-15T21:57:43.000Z",
    "updatedAt": "2023-04-15T21:57:43.000Z"
  },
  {
    "id": "game-212",
    "bggId": 300580,
    "titleKr": "Wingspan: Oceania Expansion",
    "titleEn": "Wingspan: Oceania Expansion",
    "yearPublished": 2020,
    "image": "https://cf.geekdo-images.com/Nl_5PvrmI6aS-1qqiJ6JAw__original/img/Y4F8LD6FKN82ERsoe92o25oAF2E=/0x0/filters:format(png)/pic5685481.png",
    "thumbnail": "https://cf.geekdo-images.com/Nl_5PvrmI6aS-1qqiJ6JAw__thumb/img/ohztPasKZz5F71HTb7YrPasy_xM=/fit-in/200x150/filters:strip_icc()/pic5685481.png",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 40,
    "maxPlaytime": 70,
    "bggRating": 8.5,
    "userRating": 8.5,
    "status": "played",
    "designers": [
      "Elizabeth Hargrave"
    ],
    "createdAt": "2024-04-13T17:32:55.000Z",
    "updatedAt": "2024-04-13T17:32:55.000Z"
  },
  {
    "id": "game-114",
    "bggId": 227935,
    "titleKr": "Wonderland's War",
    "titleEn": "Wonderland's War",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/bUbrvlY6Dw1cdb-sNrnkew__original/img/KcU-Srht_4xyLQ69ZjFcFKEOfMc=/0x0/filters:format(jpeg)/pic5188761.jpg",
    "thumbnail": "https://cf.geekdo-images.com/bUbrvlY6Dw1cdb-sNrnkew__thumb/img/Uy_FkD9PPC4Z_0a00fQHPrZPyno=/fit-in/200x150/filters:strip_icc()/pic5188761.jpg",
    "minPlayers": 2,
    "maxPlayers": 5,
    "minPlaytime": 45,
    "maxPlaytime": 125,
    "status": "wishlist",
    "designers": [
      "Tim Eisner",
      "Ben Eisner",
      "Ian Moss"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-285",
    "bggId": 179217,
    "titleKr": "Wonky",
    "titleEn": "Wonky",
    "yearPublished": 2015,
    "image": "https://cf.geekdo-images.com/69XxHTUVrlf35jBq-_3h0g__original/img/QENa2du5tMjHBYyHs-2DqaUCVkE=/0x0/filters:format(jpeg)/pic8172774.jpg",
    "thumbnail": "https://cf.geekdo-images.com/69XxHTUVrlf35jBq-_3h0g__thumb/img/KDWQJmbLDIJ6v1UjnOvBhXfKwPY=/fit-in/200x150/filters:strip_icc()/pic8172774.jpg",
    "minPlayers": 2,
    "maxPlayers": 99,
    "minPlaytime": 15,
    "maxPlaytime": 30,
    "bggRating": 6.5,
    "userRating": 6.5,
    "status": "played",
    "designers": [
      "Sean Fletcher",
      "Forrest-Pruzan Creative"
    ],
    "createdAt": "2025-05-11T19:13:29.000Z",
    "updatedAt": "2025-05-11T19:13:29.000Z"
  },
  {
    "id": "game-244",
    "bggId": 355093,
    "titleKr": "Woodcraft",
    "titleEn": "Woodcraft",
    "yearPublished": 2022,
    "image": "https://cf.geekdo-images.com/S1_USNVBwzwidSpxAoKhuw__original/img/v6Siq5_xrd8ONpw_jrcWCLPjVSI=/0x0/filters:format(jpeg)/pic6940296.jpg",
    "thumbnail": "https://cf.geekdo-images.com/S1_USNVBwzwidSpxAoKhuw__thumb/img/26QtSRyUNOySkhtk6tnkzVqPx5A=/fit-in/200x150/filters:strip_icc()/pic6940296.jpg",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 60,
    "maxPlaytime": 120,
    "bggRating": 7.6,
    "userRating": 7.6,
    "status": "played",
    "designers": [
      "Ross Arnold",
      "Vladimír Suchý"
    ],
    "createdAt": "2024-11-02T16:53:44.000Z",
    "updatedAt": "2024-11-02T16:53:44.000Z"
  },
  {
    "id": "game-271",
    "bggId": 410201,
    "titleKr": "Wyrmspan",
    "titleEn": "Wyrmspan",
    "yearPublished": 2024,
    "image": "https://cf.geekdo-images.com/oXUkkh9uq3zBVWQ8mbgMfQ__original/img/MW6S23AwpGGu0Rx05X_aByK0lmA=/0x0/filters:format(png)/pic7947338.png",
    "thumbnail": "https://cf.geekdo-images.com/oXUkkh9uq3zBVWQ8mbgMfQ__thumb/img/Ic3yRKTjVe26RgDzIdLsKn8Hztk=/fit-in/200x150/filters:strip_icc()/pic7947338.png",
    "minPlayers": 1,
    "maxPlayers": 5,
    "minPlaytime": 90,
    "maxPlaytime": 90,
    "bggRating": 8,
    "userRating": 8,
    "status": "owned",
    "designers": [
      "Connie Vogelmann"
    ],
    "createdAt": "2025-04-21T19:28:10.000Z",
    "updatedAt": "2025-04-21T19:28:10.000Z"
  },
  {
    "id": "game-260",
    "titleKr": "xing",
    "titleEn": "xing",
    "minPlayers": 1,
    "maxPlayers": 4,
    "minPlaytime": 30,
    "maxPlaytime": 60,
    "status": "played",
    "designers": [],
    "createdAt": "2025-01-27T18:50:39.000Z",
    "updatedAt": "2025-01-27T18:50:39.000Z"
  },
  {
    "id": "game-140",
    "bggId": 244114,
    "titleKr": "Yellow & Yangtze",
    "titleEn": "Yellow & Yangtze",
    "yearPublished": 2018,
    "image": "https://cf.geekdo-images.com/BxHQLD5nnVltDWXt4OKsgQ__original/img/py1wiNlyhiBknLyhNDd5zsu2zFg=/0x0/filters:format(jpeg)/pic3938502.jpg",
    "thumbnail": "https://cf.geekdo-images.com/BxHQLD5nnVltDWXt4OKsgQ__thumb/img/Xf9hEf74SZfcOi0ZbNhdUW6BTt0=/fit-in/200x150/filters:strip_icc()/pic3938502.jpg",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 90,
    "maxPlaytime": 90,
    "status": "owned",
    "designers": [
      "Reiner Knizia"
    ],
    "createdAt": "2023-04-15T21:57:42.000Z",
    "updatedAt": "2023-04-15T21:57:42.000Z"
  },
  {
    "id": "game-287",
    "bggId": 390986,
    "titleKr": "ニャイスコード (Nyaice! CODE)",
    "titleEn": "ニャイスコード (Nyaice! CODE)",
    "image": "https://cf.geekdo-images.com/JzRiqpkWjsbwCvBXCKKGow__original/img/LwvFcYeY2kGngok_5sWdMGgJUeI=/0x0/filters:format(png)/pic7900316.png",
    "thumbnail": "https://cf.geekdo-images.com/JzRiqpkWjsbwCvBXCKKGow__thumb/img/E3QkQ8OIeqLFCpBRM-K_PuMXxFk=/fit-in/200x150/filters:strip_icc()/pic7900316.png",
    "minPlayers": 2,
    "maxPlayers": 4,
    "minPlaytime": 10,
    "maxPlaytime": 20,
    "bggRating": 6.7,
    "userRating": 6.7,
    "status": "played",
    "designers": [],
    "createdAt": "2025-05-25T11:22:28.000Z",
    "updatedAt": "2025-05-25T11:22:28.000Z"
  }
];

export const SEED_PLAYS: Play[] = [
  {
    "id": "play-358614ea-43f6-4291-8015-3a9caf8f6e6a",
    "gameId": "game-6",
    "gameTitleKr": "Bargain Quest",
    "gameTitleEn": "Bargain Quest",
    "gameImage": "https://cf.geekdo-images.com/BnwA7yXhQDzOciCacJ98HQ__thumb/img/5CFA6JqHAoXqY7XaQ2Ol4jtCG_4=/fit-in/200x150/filters:strip_icc()/pic4295302.png",
    "date": "2019-12-31",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 7,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 6,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-36",
        "name": "재성",
        "score": 14,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-39",
        "name": "정훈",
        "score": 12,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-44",
        "name": "지훈",
        "score": 13,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 6,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2019-12-31T20:10:10.000Z",
    "updatedAt": "2019-12-31T21:19:34.000Z"
  },
  {
    "id": "play-e89e7f05-1204-473b-bd53-ef95e8b06890",
    "gameId": "game-38",
    "gameTitleKr": "Lift Off",
    "gameTitleEn": "Lift Off",
    "gameImage": "https://cf.geekdo-images.com/EBMYmLaPwMfUUaiO90Ozyw__thumb/img/n3SQEB2pqSnMrMruFNppS-xpl_Y=/fit-in/200x150/filters:strip_icc()/pic4313310.png",
    "date": "2019-12-31",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 248,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 242,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-39",
        "name": "정훈",
        "score": 220,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2019-12-31T21:17:43.000Z",
    "updatedAt": "2019-12-31T22:58:21.000Z"
  },
  {
    "id": "play-65706bad-f3da-4b69-9019-00245a5fee98",
    "gameId": "game-23",
    "gameTitleKr": "Dice Throne: Season Two – Battle Chest",
    "gameTitleEn": "Dice Throne: Season Two – Battle Chest",
    "gameImage": "https://cf.geekdo-images.com/lJkCMk1jwCl-KHSPZJCPZQ__thumb/img/93EGDw0NSm91SomXH38d4XvhlSk=/fit-in/200x150/filters:strip_icc()/pic4441140.jpg",
    "date": "2020-01-01",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "role": "3",
        "newPlayer": true
      },
      {
        "playerId": "player-5",
        "name": "네온",
        "score": 3,
        "winner": true,
        "startPlayer": false,
        "role": "2",
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 1,
        "winner": false,
        "startPlayer": false,
        "role": "1",
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-01T14:34:33.000Z",
    "updatedAt": "2020-01-04T15:28:41.000Z"
  },
  {
    "id": "play-de42e707-5ee1-4072-8fe5-c2caf9aa398d",
    "gameId": "game-42",
    "gameTitleKr": "Nētā-Tanka: Deluxe Edition",
    "gameTitleEn": "Nētā-Tanka: Deluxe Edition",
    "gameImage": "https://cf.geekdo-images.com/lA-IGC3C5fghAhlZoQRhwg__thumb/img/l0Qt3uxqqRUnc_oNx6yizrmXNkg=/fit-in/200x150/filters:strip_icc()/pic4766535.jpg",
    "date": "2020-01-01",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 43,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 40,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 38,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 41,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-01T15:34:52.000Z",
    "updatedAt": "2020-01-01T17:11:39.000Z"
  },
  {
    "id": "play-935961b3-2c1b-4bc9-acbe-97b5e4904c37",
    "gameId": "game-69",
    "gameTitleKr": "Tiny Epic Mechs",
    "gameTitleEn": "Tiny Epic Mechs",
    "gameImage": "https://cf.geekdo-images.com/auUjnvi2D596hPBz0z0Ybg__thumb/img/0lUGODA2QrJVWjy5vYZF4Mwqz_M=/fit-in/200x150/filters:strip_icc()/pic4239499.jpg",
    "date": "2020-01-01",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 67,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 57,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 63,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 73,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2020-01-01T17:26:32.000Z",
    "updatedAt": "2020-01-01T23:33:42.000Z"
  },
  {
    "id": "play-266af9f1-79dd-48c4-8e42-5ec8e7f5eaee",
    "gameId": "game-27",
    "gameTitleKr": "Empyreal: Spells & Steam",
    "gameTitleEn": "Empyreal: Spells & Steam",
    "gameImage": "https://cf.geekdo-images.com/fiJF4WREbSEYJtRgb7BZ_A__thumb/img/4quAZ8WJG0g0pzcRXF1kknwGcck=/fit-in/200x150/filters:strip_icc()/pic4097900.jpg",
    "date": "2020-01-01",
    "durationMinutes": 2,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 43,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 31,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 38,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-01T21:37:51.000Z",
    "updatedAt": "2020-01-01T22:27:53.000Z"
  },
  {
    "id": "play-71c44149-a98d-405e-8e11-6716a9c29af7",
    "gameId": "game-61",
    "gameTitleKr": "Survive: Escape from Atlantis! The Giant Squid Mini Expansion",
    "gameTitleEn": "Survive: Escape from Atlantis! The Giant Squid Mini Expansion",
    "gameImage": "https://cf.geekdo-images.com/CSHwPa0GA6o8eGUwNZjO9A__thumb/img/Yq1jrwwRoSCy1uEWaZ3JCIL2itI=/fit-in/200x150/filters:strip_icc()/pic1586891.jpg",
    "date": "2020-01-04",
    "durationMinutes": 45,
    "locationId": "loc-1",
    "locationName": "건대",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 11,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 13,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 12,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-04T14:44:38.000Z",
    "updatedAt": "2020-01-04T14:47:15.000Z"
  },
  {
    "id": "play-32e2f0cf-515b-4912-ba0d-e713f45ce1ce",
    "gameId": "game-75",
    "gameTitleKr": "War Chest",
    "gameTitleEn": "War Chest",
    "gameImage": "https://cf.geekdo-images.com/BryJNSSDbCohXeaJPx3tpw__thumb/img/5fmJlAM307xX3zozMnStTuWYphI=/fit-in/200x150/filters:strip_icc()/pic4232048.png",
    "date": "2020-01-04",
    "durationMinutes": 45,
    "locationId": "loc-1",
    "locationName": "건대",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "role": "1",
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "winner": true,
        "startPlayer": false,
        "role": "1",
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "winner": false,
        "startPlayer": false,
        "role": "2",
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "winner": false,
        "startPlayer": false,
        "role": "2",
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-04T14:47:20.000Z",
    "updatedAt": "2020-01-04T14:48:32.000Z"
  },
  {
    "id": "play-7906f524-2148-48dc-a186-653bf9fb3946",
    "gameId": "game-42",
    "gameTitleKr": "Nētā-Tanka: Deluxe Edition",
    "gameTitleEn": "Nētā-Tanka: Deluxe Edition",
    "gameImage": "https://cf.geekdo-images.com/lA-IGC3C5fghAhlZoQRhwg__thumb/img/l0Qt3uxqqRUnc_oNx6yizrmXNkg=/fit-in/200x150/filters:strip_icc()/pic4766535.jpg",
    "date": "2020-01-04",
    "durationMinutes": 45,
    "locationId": "loc-1",
    "locationName": "건대",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 44,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 39,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 41,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 42,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-04T16:23:31.000Z",
    "updatedAt": "2020-01-04T17:08:54.000Z"
  },
  {
    "id": "play-9e2cd9d4-f6d2-4da1-938b-78671448aac1",
    "gameId": "game-36",
    "gameTitleKr": "Human Punishment: Social Deduction 2.0",
    "gameTitleEn": "Human Punishment: Social Deduction 2.0",
    "gameImage": "https://cf.geekdo-images.com/3vOdrN4dDxNP7gjZgoWGdQ__thumb/img/oadjKqe8TQu8bd4ZKkIKDljglfw=/fit-in/200x150/filters:strip_icc()/pic3662950.jpg",
    "date": "2020-01-04",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-8",
        "name": "동주",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-13",
        "name": "민지",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-20",
        "name": "성호",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-24",
        "name": "연우",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-36",
        "name": "재성",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-44",
        "name": "지훈",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-50",
        "name": "현우",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-04T23:08:41.000Z",
    "updatedAt": "2020-01-04T23:12:27.000Z"
  },
  {
    "id": "play-7a4bb25c-b84c-44f0-8055-17eae3ec9c9a",
    "gameId": "game-51",
    "gameTitleKr": "Riichi Mahjong",
    "gameTitleEn": "Riichi Mahjong",
    "gameImage": "https://cf.geekdo-images.com/62j0mEWiwuyZixScOzwEnA__thumb/img/momsWLUZJUTVdxpNbJaCqu-Rxak=/fit-in/200x150/filters:strip_icc()/pic4667546.jpg",
    "date": "2020-01-05",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 33200,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 31200,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-8",
        "name": "동주",
        "score": 22000,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-26",
        "name": "용건",
        "score": 13100,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-05T12:42:20.000Z",
    "updatedAt": "2020-01-05T12:43:39.000Z"
  },
  {
    "id": "play-f46f1a92-c0bd-42e3-aab7-2791d03b5303",
    "gameId": "game-7",
    "gameTitleKr": "Barrage",
    "gameTitleEn": "Barrage",
    "gameImage": "https://cf.geekdo-images.com/jEPmWvvYpqkWrKOzqIHFsg__thumb/img/kMLIpeqA6UcUvQg2AdMwwQoEIfU=/fit-in/200x150/filters:strip_icc()/pic4336469.png",
    "date": "2020-01-19",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 105,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-8",
        "name": "동주",
        "score": 54,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 127,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 109,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-19T13:48:12.000Z",
    "updatedAt": "2020-01-19T15:54:24.000Z"
  },
  {
    "id": "play-2fa83c5b-f900-4302-adf3-15fdff00bb11",
    "gameId": "game-9",
    "gameTitleKr": "Black Rose Wars",
    "gameTitleEn": "Black Rose Wars",
    "gameImage": "https://cf.geekdo-images.com/rr2DdYF5ccQpKpvWsG7EoA__thumb/img/bndeEEnQk_5mNCEcNu09kbDp6GU=/fit-in/200x150/filters:strip_icc()/pic3973771.jpg",
    "date": "2020-01-19",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 19,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-8",
        "name": "동주",
        "score": 18,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 17,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 16,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-19T18:21:08.000Z",
    "updatedAt": "2020-01-19T21:33:34.000Z"
  },
  {
    "id": "play-df7b6e71-a37a-4151-9bf7-d0492ade3554",
    "gameId": "game-54",
    "gameTitleKr": "Schüttel's",
    "gameTitleEn": "Schüttel's",
    "gameImage": "https://cf.geekdo-images.com/n4yP8smdF43sF3NkoyYOrg__thumb/img/Vhky4Q5-V42cb9M2e3xPU3EvxWU=/fit-in/200x150/filters:strip_icc()/pic3729488.jpg",
    "date": "2020-01-19",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-8",
        "name": "동주",
        "score": 3,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 1,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-19T21:33:43.000Z",
    "updatedAt": "2020-01-19T21:35:32.000Z"
  },
  {
    "id": "play-c2c4bd65-5b7c-4880-a434-52f488d1166e",
    "gameId": "game-54",
    "gameTitleKr": "Schüttel's",
    "gameTitleEn": "Schüttel's",
    "gameImage": "https://cf.geekdo-images.com/n4yP8smdF43sF3NkoyYOrg__thumb/img/Vhky4Q5-V42cb9M2e3xPU3EvxWU=/fit-in/200x150/filters:strip_icc()/pic3729488.jpg",
    "date": "2020-01-19",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 820,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-8",
        "name": "동주",
        "score": 620,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-26",
        "name": "용건",
        "score": 1200,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 620,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2020-01-19T21:36:32.000Z",
    "updatedAt": "2020-01-19T21:38:03.000Z"
  },
  {
    "id": "play-cbee4384-cbe3-4919-8f84-bdec864493cb",
    "gameId": "game-49",
    "gameTitleKr": "Quirky Circuits",
    "gameTitleEn": "Quirky Circuits",
    "gameImage": "https://cf.geekdo-images.com/aNabLAdJAW0ot6hojnC9rw__thumb/img/TV8pBvFqB-Y1rPL91CHISW1hgFo=/fit-in/200x150/filters:strip_icc()/pic4602889.jpg",
    "date": "2020-01-19",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-8",
        "name": "동주",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-26",
        "name": "용건",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-19T21:53:53.000Z",
    "updatedAt": "2020-01-19T21:55:17.000Z"
  },
  {
    "id": "play-5df36122-785a-4eea-858c-2229029008a3",
    "gameId": "game-49",
    "gameTitleKr": "Quirky Circuits",
    "gameTitleEn": "Quirky Circuits",
    "gameImage": "https://cf.geekdo-images.com/aNabLAdJAW0ot6hojnC9rw__thumb/img/TV8pBvFqB-Y1rPL91CHISW1hgFo=/fit-in/200x150/filters:strip_icc()/pic4602889.jpg",
    "date": "2020-01-19",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-8",
        "name": "동주",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-26",
        "name": "용건",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2020-01-19T21:55:47.000Z",
    "updatedAt": "2020-01-19T22:32:45.000Z"
  },
  {
    "id": "play-98512191-1b38-472d-a574-c6ae6bf8d4bf",
    "gameId": "game-49",
    "gameTitleKr": "Quirky Circuits",
    "gameTitleEn": "Quirky Circuits",
    "gameImage": "https://cf.geekdo-images.com/aNabLAdJAW0ot6hojnC9rw__thumb/img/TV8pBvFqB-Y1rPL91CHISW1hgFo=/fit-in/200x150/filters:strip_icc()/pic4602889.jpg",
    "date": "2020-01-19",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-8",
        "name": "동주",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2020-01-19T22:57:46.000Z",
    "updatedAt": "2020-01-19T22:58:20.000Z"
  },
  {
    "id": "play-b0e65822-5490-4dd4-ae6a-88254181b4ef",
    "gameId": "game-54",
    "gameTitleKr": "Schüttel's",
    "gameTitleEn": "Schüttel's",
    "gameImage": "https://cf.geekdo-images.com/n4yP8smdF43sF3NkoyYOrg__thumb/img/Vhky4Q5-V42cb9M2e3xPU3EvxWU=/fit-in/200x150/filters:strip_icc()/pic3729488.jpg",
    "date": "2020-01-26",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 720,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-8",
        "name": "동주",
        "score": 610,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-25",
        "name": "완섭",
        "score": 620,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-28",
        "name": "유빈",
        "score": 300,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-30",
        "name": "이리사",
        "score": 580,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-39",
        "name": "정훈",
        "score": 600,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-26T16:03:48.000Z",
    "updatedAt": "2020-01-26T16:05:06.000Z"
  },
  {
    "id": "play-c3bc6e62-5764-4e77-b027-baef39fd87cf",
    "gameId": "game-75",
    "gameTitleKr": "War Chest",
    "gameTitleEn": "War Chest",
    "gameImage": "https://cf.geekdo-images.com/BryJNSSDbCohXeaJPx3tpw__thumb/img/5fmJlAM307xX3zozMnStTuWYphI=/fit-in/200x150/filters:strip_icc()/pic4232048.png",
    "date": "2020-01-26",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-25",
        "name": "완섭",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-26T17:02:40.000Z",
    "updatedAt": "2020-01-26T17:03:05.000Z"
  },
  {
    "id": "play-6aee5530-86d5-4a5a-a9ca-f43106d3f5cf",
    "gameId": "game-75",
    "gameTitleKr": "War Chest",
    "gameTitleEn": "War Chest",
    "gameImage": "https://cf.geekdo-images.com/BryJNSSDbCohXeaJPx3tpw__thumb/img/5fmJlAM307xX3zozMnStTuWYphI=/fit-in/200x150/filters:strip_icc()/pic4232048.png",
    "date": "2020-01-26",
    "durationMinutes": 45,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-25",
        "name": "완섭",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2020-01-26T17:11:51.000Z",
    "updatedAt": "2020-01-26T17:40:28.000Z"
  },
  {
    "id": "play-7af3bcf6-4e66-404e-8b92-0ff8cc6c0879",
    "gameId": "game-72",
    "gameTitleKr": "Ubongo 3-D",
    "gameTitleEn": "Ubongo 3D",
    "gameImage": "https://cf.geekdo-images.com/MhM1YTalerrWfit9fXELSg__thumb/img/n0-v0NF5_VWXPKwp_J8IdH7gyzA=/fit-in/200x150/filters:strip_icc()/pic587060.jpg",
    "date": "2020-01-26",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 1,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-25",
        "name": "완섭",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-26",
        "name": "용건",
        "score": 3,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-26T18:12:32.000Z",
    "updatedAt": "2020-01-26T18:13:14.000Z"
  },
  {
    "id": "play-fdd81b2a-f5da-4860-ae15-417c5318d08f",
    "gameId": "game-72",
    "gameTitleKr": "Ubongo 3-D",
    "gameTitleEn": "Ubongo 3D",
    "gameImage": "https://cf.geekdo-images.com/MhM1YTalerrWfit9fXELSg__thumb/img/n0-v0NF5_VWXPKwp_J8IdH7gyzA=/fit-in/200x150/filters:strip_icc()/pic587060.jpg",
    "date": "2020-01-26",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 24,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-25",
        "name": "완섭",
        "score": 30,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-44",
        "name": "지훈",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-01-26T18:25:51.000Z",
    "updatedAt": "2020-01-26T18:26:14.000Z"
  },
  {
    "id": "play-77cd724c-da4d-4f5b-99d0-129c4ff8bf19",
    "gameId": "game-70",
    "gameTitleKr": "Tiny Towns",
    "gameTitleEn": "Tiny Towns",
    "gameImage": "https://cf.geekdo-images.com/aE1EoOzr530gQin8bj8QDA__thumb/img/AI-Ro3wLJtpyZLmCMNywOlpz0S8=/fit-in/200x150/filters:strip_icc()/pic4460401.jpg",
    "date": "2020-02-01",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 34,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-21",
        "name": "신가",
        "score": 0,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 21,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-02-01T18:16:36.000Z",
    "updatedAt": "2020-02-01T18:17:29.000Z"
  },
  {
    "id": "play-75a0d445-1127-4162-a681-ce0fdc8436af",
    "gameId": "game-63",
    "gameTitleKr": "Tapestry",
    "gameTitleEn": "Tapestry",
    "gameImage": "https://cf.geekdo-images.com/7kqDmkUMGxXHr1wNPA7Gvg__thumb/img/1najF3Bh3QI7k2c9sJeTXznbvPU=/fit-in/200x150/filters:strip_icc()/pic4884996.jpg",
    "date": "2020-02-01",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 287,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 281,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-02-03T08:42:34.000Z",
    "updatedAt": "2020-02-03T08:43:16.000Z"
  },
  {
    "id": "play-01a17eec-874f-4cc6-aa1e-c95081277c6c",
    "gameId": "game-32",
    "gameTitleKr": "Gizmos",
    "gameTitleEn": "Gizmos",
    "gameImage": "https://cf.geekdo-images.com/zin82Hg4MXck86t8fzbsdA__thumb/img/e-UqOrMfsLCh2T_igK3wkoFrOu8=/fit-in/200x150/filters:strip_icc()/pic4169718.png",
    "date": "2020-02-01",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 31,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 30,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2020-02-03T08:43:31.000Z",
    "updatedAt": "2020-02-03T08:44:05.000Z"
  },
  {
    "id": "play-6d2993f0-584e-4f11-97fd-2bcc31ccbccc",
    "gameId": "game-41",
    "gameTitleKr": "Nemesis",
    "gameTitleEn": "Nemesis",
    "gameImage": "https://cf.geekdo-images.com/tAqLpWxQ0Oo3GaPP3MER1g__thumb/img/sMIg7_b5ekS1xm6cBIoMFpH0MZs=/fit-in/200x150/filters:strip_icc()/pic5073276.jpg",
    "date": "2021-04-28",
    "durationMinutes": 45,
    "locationId": "loc-8",
    "locationName": "삼동모임",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-22",
        "name": "신길수",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-32",
        "name": "이상민",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-33",
        "name": "이윤희",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-04-28T21:44:34.000Z",
    "updatedAt": "2021-04-28T23:23:16.000Z"
  },
  {
    "id": "play-22fa6ed5-538b-4bc3-8bab-c89c379bf773",
    "gameId": "game-11",
    "gameTitleKr": "Calico",
    "gameTitleEn": "Calico",
    "gameImage": "https://cf.geekdo-images.com/t8bTlZmxz6PiskMSjcBHcw__thumb/img/TByBGUDO_jNVxDaOviRWOFtu9fk=/fit-in/200x150/filters:strip_icc()/pic4815033.jpg",
    "date": "2021-05-09",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 66,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-3",
        "name": "김파랑",
        "score": 59,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 43,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 55,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-05-09T13:37:44.000Z",
    "updatedAt": "2021-05-09T14:47:06.000Z"
  },
  {
    "id": "play-70a5863b-0970-4d7f-9c06-b7a7224b1ecf",
    "gameId": "game-29",
    "gameTitleKr": "Formosa Tea",
    "gameTitleEn": "Formosa Tea",
    "gameImage": "https://cf.geekdo-images.com/zUU7fyzcPmC5dJ9ovT90vQ__thumb/img/X5Ls0TJfgBx0WZOa7Ak9FCu9qdg=/fit-in/200x150/filters:strip_icc()/pic4928296.jpg",
    "date": "2021-05-09",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 165,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-3",
        "name": "김파랑",
        "score": 87,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 83,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 93,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-05-09T15:06:49.000Z",
    "updatedAt": "2021-05-09T17:39:12.000Z"
  },
  {
    "id": "play-c202afe3-3d0b-4d5a-b688-23577bf5a72b",
    "gameId": "game-8",
    "gameTitleKr": "binome",
    "gameTitleEn": "binome",
    "date": "2021-05-09",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 6,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-3",
        "name": "김파랑",
        "score": 8,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-05-09T17:44:17.000Z",
    "updatedAt": "2021-05-09T18:27:22.000Z"
  },
  {
    "id": "play-e921f776-94fa-4851-9ba1-b055317f19e1",
    "gameId": "game-74",
    "gameTitleKr": "Volfyirion",
    "gameTitleEn": "Volfyirion",
    "gameImage": "https://cf.geekdo-images.com/Aj8NuGnzNWI45MgaRd8pMA__thumb/img/J3_x_DaWZ2atpzfFM3yYVLSzAgg=/fit-in/200x150/filters:strip_icc()/pic4653586.jpg",
    "date": "2021-05-09",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-3",
        "name": "김파랑",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-05-09T19:45:31.000Z",
    "updatedAt": "2021-05-09T19:46:25.000Z"
  },
  {
    "id": "play-eec4d945-a3f0-4885-8124-30f9f0525b57",
    "gameId": "game-53",
    "gameTitleKr": "Samurai",
    "gameTitleEn": "Samurai",
    "gameImage": "https://cf.geekdo-images.com/o9-sNXmFS_TLAb7ZlZ4dRA__thumb/img/22MSUC0-ZWgwzhi_VKIbENJik1w=/fit-in/200x150/filters:strip_icc()/pic3211873.jpg",
    "date": "2021-05-09",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 2,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 1,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-05-09T19:45:31.000Z",
    "updatedAt": "2021-05-15T17:01:34.000Z"
  },
  {
    "id": "play-c1d3d255-d0b4-42c2-ade0-bde112e6762f",
    "gameId": "game-15",
    "gameTitleKr": "Century: Spice Road",
    "gameTitleEn": "Century: Spice Road",
    "gameImage": "https://cf.geekdo-images.com/0_KEDk4lCvryf1Ju3YQJxA__thumb/img/FticvQmaT_qfdrX-hpSSK1ttRb0=/fit-in/200x150/filters:strip_icc()/pic3339551.jpg",
    "date": "2021-05-15",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 77,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 65,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 71,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-05-15T17:13:57.000Z",
    "updatedAt": "2021-05-15T17:39:39.000Z"
  },
  {
    "id": "play-297d8b9d-5db4-4d55-bd06-b7effa09d201",
    "gameId": "game-64",
    "gameTitleKr": "The Castles of Burgundy: The Card Game",
    "gameTitleEn": "The Castles of Burgundy: The Card Game",
    "gameImage": "https://cf.geekdo-images.com/j4Afdh1FVKpHscsHEKZR6w__thumb/img/BejEwf9-L12GEPh9FCRoV5rsMHk=/fit-in/200x150/filters:strip_icc()/pic2844943.jpg",
    "date": "2021-05-15",
    "durationMinutes": 45,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 218,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 165,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 156,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-05-15T18:27:19.000Z",
    "updatedAt": "2021-05-15T19:33:37.000Z"
  },
  {
    "id": "play-91645a7a-044e-48b4-b3c4-192658d2f314",
    "gameId": "game-62",
    "gameTitleKr": "Suzume-Jong",
    "gameTitleEn": "Suzume-Jong",
    "gameImage": "https://cf.geekdo-images.com/64XnEhoewbAiSxNCXgII9w__thumb/img/GEj9jULlS4rgRzBhemgbx1epBrw=/fit-in/200x150/filters:strip_icc()/pic4591244.jpg",
    "date": "2021-05-21",
    "durationMinutes": 45,
    "locationId": "loc-12",
    "locationName": "지현님네",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-05-21T19:39:45.000Z",
    "updatedAt": "2021-06-05T18:54:41.000Z"
  },
  {
    "id": "play-d4591948-527b-46a4-a67d-3641efcde8cd",
    "gameId": "game-43",
    "gameTitleKr": "On Mars",
    "gameTitleEn": "On Mars",
    "gameImage": "https://cf.geekdo-images.com/Nm0Iw8NoiM9V8IsifimGBw__thumb/img/4GFbhkEWyIublXmikE2Tep6wSIQ=/fit-in/200x150/filters:strip_icc()/pic4357658.jpg",
    "date": "2021-06-05",
    "durationMinutes": 45,
    "locationId": "loc-7",
    "locationName": "민호형집",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 84,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 84,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 67,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-16",
        "name": "박상윤",
        "score": 64,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-06-05T18:54:48.000Z",
    "updatedAt": "2021-06-05T18:56:28.000Z"
  },
  {
    "id": "play-701b0c8e-7eab-490d-8942-0b5b2a300690",
    "gameId": "game-57",
    "gameTitleKr": "Smartphone Inc.",
    "gameTitleEn": "Smartphone Inc.",
    "gameImage": "https://cf.geekdo-images.com/Ndctxvd7kBXYubeYRKRqzw__thumb/img/hJtPqShJYdb8DsdnTvpdkXrx-CU=/fit-in/200x150/filters:strip_icc()/pic4258616.jpg",
    "date": "2021-06-13",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 256,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 244,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 237,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 254,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-06-13T15:13:01.000Z",
    "updatedAt": "2021-06-13T15:13:56.000Z"
  },
  {
    "id": "play-8d6952d3-0b91-4819-8002-03a8a5d96cab",
    "gameId": "game-15",
    "gameTitleKr": "Century: Spice Road",
    "gameTitleEn": "Century: Spice Road",
    "gameImage": "https://cf.geekdo-images.com/0_KEDk4lCvryf1Ju3YQJxA__thumb/img/FticvQmaT_qfdrX-hpSSK1ttRb0=/fit-in/200x150/filters:strip_icc()/pic3339551.jpg",
    "date": "2021-06-13",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 67,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 63,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 60,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 69,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-06-13T16:18:23.000Z",
    "updatedAt": "2021-06-13T16:19:01.000Z"
  },
  {
    "id": "play-710cc516-6233-4404-9695-cd86fd6d8d1d",
    "gameId": "game-2",
    "gameTitleKr": "Adrenaline",
    "gameTitleEn": "Adrenaline",
    "gameImage": "https://cf.geekdo-images.com/TiNI7bUCR2RPFMlvKEC9TQ__thumb/img/nnWEA6jjVsxPSuEC_Ooph9kzO_g=/fit-in/200x150/filters:strip_icc()/pic3476604.jpg",
    "date": "2021-06-13",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 50,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 44,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 30,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 36,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-06-13T18:01:47.000Z",
    "updatedAt": "2021-06-13T18:02:10.000Z"
  },
  {
    "id": "play-9e99acae-a12d-4e04-afe4-604d5e31a1b7",
    "gameId": "game-50",
    "gameTitleKr": "Red Rising",
    "gameTitleEn": "Red Rising",
    "gameImage": "https://cf.geekdo-images.com/V6QEXXgRgz3urOrRVZ_1zA__thumb/img/8zjF-E9xPNYLSsI6xQjRsZiI-XE=/fit-in/200x150/filters:strip_icc()/pic5960554.jpg",
    "date": "2021-06-13",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 238,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 150,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-18",
        "name": "빅비",
        "score": 212,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 230,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-06-13T18:01:47.000Z",
    "updatedAt": "2021-06-13T19:19:50.000Z"
  },
  {
    "id": "play-18e80fd8-1d92-4bfe-b19a-0e0e75a915c3",
    "gameId": "game-10",
    "gameTitleKr": "Brass: Birmingham",
    "gameTitleEn": "Brass: Birmingham",
    "gameImage": "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__thumb/img/o18rjEemoWaVru9Y2TyPwuIaRfE=/fit-in/200x150/filters:strip_icc()/pic3490053.jpg",
    "date": "2021-06-13",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 126,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 126,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-18",
        "name": "빅비",
        "score": 136,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 146,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-06-13T23:14:31.000Z",
    "updatedAt": "2021-06-13T23:15:34.000Z"
  },
  {
    "id": "play-50bc03d4-8130-48e1-a48e-af18f43d00c5",
    "gameId": "game-25",
    "gameTitleKr": "Downforce",
    "gameTitleEn": "Downforce",
    "gameImage": "https://cf.geekdo-images.com/c74C-NVJHuMVxt6A_j2TsA__thumb/img/OUdT3uFyqBBzN7q9ZDFN6WBiecU=/fit-in/200x150/filters:strip_icc()/pic3432548.png",
    "date": "2021-07-04",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 20,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 20,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 25,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-40",
        "name": "제이든",
        "score": 17,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 14,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-49",
        "name": "한",
        "score": 11,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-07-04T15:50:30.000Z",
    "updatedAt": "2021-07-04T15:51:28.000Z"
  },
  {
    "id": "play-10f49a36-c935-4315-8c8c-492899b7338a",
    "gameId": "game-28",
    "gameTitleKr": "Fiesta de los Muertos",
    "gameTitleEn": "Fiesta de los Muertos",
    "gameImage": "https://cf.geekdo-images.com/cbcG9UP9T430LZqV3aVVEg__thumb/img/HOOZx_4zpZCajwEsEJ43GLEmkBk=/fit-in/200x150/filters:strip_icc()/pic4868417.png",
    "date": "2021-07-04",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-12",
        "name": "률",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-40",
        "name": "제이든",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-49",
        "name": "한",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-07-04T15:51:33.000Z",
    "updatedAt": "2021-07-04T15:53:58.000Z"
  },
  {
    "id": "play-c9411bd6-feb6-41c0-9d00-979160c0ebc6",
    "gameId": "game-28",
    "gameTitleKr": "Fiesta de los Muertos",
    "gameTitleEn": "Fiesta de los Muertos",
    "gameImage": "https://cf.geekdo-images.com/cbcG9UP9T430LZqV3aVVEg__thumb/img/HOOZx_4zpZCajwEsEJ43GLEmkBk=/fit-in/200x150/filters:strip_icc()/pic4868417.png",
    "date": "2021-07-04",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-12",
        "name": "률",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-40",
        "name": "제이든",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-49",
        "name": "한",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2021-07-04T16:01:37.000Z",
    "updatedAt": "2021-07-04T16:01:41.000Z"
  },
  {
    "id": "play-2c6a5058-fd09-43a1-a089-2744735e1677",
    "gameId": "game-55",
    "gameTitleKr": "Shadow Raiders",
    "gameTitleEn": "Shadow Raiders",
    "gameImage": "https://cf.geekdo-images.com/ZwpbIuhbIVfHBRhD5A44LA__thumb/img/nwTvVNqnsMuV4me5zlyJvnClYmc=/fit-in/200x150/filters:strip_icc()/pic4989267.jpg",
    "date": "2021-07-04",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-12",
        "name": "률",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-18",
        "name": "빅비",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-40",
        "name": "제이든",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-49",
        "name": "한",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-07-04T17:16:04.000Z",
    "updatedAt": "2021-07-04T17:16:46.000Z"
  },
  {
    "id": "play-8dc8e084-2311-4e59-8adb-73c56f299f46",
    "gameId": "game-1",
    "gameTitleKr": "7 Wonders (Second Edition)",
    "gameTitleEn": "7 Wonders (Second Edition)",
    "gameImage": "https://cf.geekdo-images.com/fwzG7OfzA35y7b3S7dHn9Q__thumb/img/N7rmW1XK7hkQssGu43rOSeN-Ry8=/fit-in/200x150/filters:strip_icc()/pic5652537.jpg",
    "date": "2021-07-04",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 31,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 54,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-18",
        "name": "빅비",
        "score": 57,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 42,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-40",
        "name": "제이든",
        "score": 52,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 52,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-49",
        "name": "한",
        "score": 56,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2021-07-04T18:09:52.000Z",
    "updatedAt": "2021-07-04T18:12:40.000Z"
  },
  {
    "id": "play-f0435f3a-994d-4023-bfc3-f41c8fecc10b",
    "gameId": "game-59",
    "gameTitleKr": "Stroganov",
    "gameTitleEn": "Stroganov",
    "gameImage": "https://cf.geekdo-images.com/o7CUpHZLvw5vuwRCqPZMHw__thumb/img/ieOsIj7QyKes1F5jw8bJsXFyl3M=/fit-in/200x150/filters:strip_icc()/pic5827215.jpg",
    "date": "2022-02-12",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 18,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 17,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 20,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-02-12T15:16:03.000Z",
    "updatedAt": "2022-02-12T15:17:10.000Z"
  },
  {
    "id": "play-a714d839-b007-4459-94b9-c20f37d57bb6",
    "gameId": "game-60",
    "gameTitleKr": "Struggle of Empires",
    "gameTitleEn": "Struggle of Empires",
    "gameImage": "https://cf.geekdo-images.com/V8J_bg9LKjB6as3Oxp_wtQ__thumb/img/FUyc1QhXpVQRkbAhouttIZstUZA=/fit-in/200x150/filters:strip_icc()/pic5633386.png",
    "date": "2022-02-12",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 61,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 42,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-18",
        "name": "빅비",
        "score": 41,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-23",
        "name": "어진",
        "score": 63,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 60,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-35",
        "name": "자까",
        "score": 0,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 47,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-02-12T21:46:51.000Z",
    "updatedAt": "2022-02-12T21:49:51.000Z"
  },
  {
    "id": "play-90b748a7-35b2-4e04-b6df-1dee95090138",
    "gameId": "game-17",
    "gameTitleKr": "Creature Comforts",
    "gameTitleEn": "Creature Comforts",
    "gameImage": "https://cf.geekdo-images.com/A0ZRM7_H6ecCQ8-lW0MtQQ__thumb/img/F8ELDsdUdbTvFWmYw1CZjqAWl0Y=/fit-in/200x150/filters:strip_icc()/pic5799638.jpg",
    "date": "2022-02-12",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 93,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 68,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-23",
        "name": "어진",
        "score": 81,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 64,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-35",
        "name": "자까",
        "score": 80,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-02-12T23:40:20.000Z",
    "updatedAt": "2022-02-13T00:08:42.000Z"
  },
  {
    "id": "play-0a87311e-8b97-4290-be04-5b1a84eaa4eb",
    "gameId": "game-19",
    "gameTitleKr": "Cubitos",
    "gameTitleEn": "Cubitos",
    "gameImage": "https://cf.geekdo-images.com/_WY_JrQQRrSUlVof11hMpQ__thumb/img/YBgLAPTM5xOW3fDj_if3-r3oDs0=/fit-in/200x150/filters:strip_icc()/pic5226311.png",
    "date": "2022-02-27",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-23",
        "name": "어진",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-35",
        "name": "자까",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-40",
        "name": "제이든",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-02-27T16:08:04.000Z",
    "updatedAt": "2022-02-27T16:10:16.000Z"
  },
  {
    "id": "play-a41e644f-222b-481c-94d7-f164fc9ec1df",
    "gameId": "game-39",
    "gameTitleKr": "Messina 1347",
    "gameTitleEn": "Messina 1347",
    "gameImage": "https://cf.geekdo-images.com/Pw9TGohEb7PITFJnuq48bQ__thumb/img/bWVi55qMYTv6VrQNHFllltHLlZI=/fit-in/200x150/filters:strip_icc()/pic6397342.jpg",
    "date": "2022-02-27",
    "durationMinutes": 45,
    "locationId": "loc-8",
    "locationName": "삼동모임",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 88,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-10",
        "name": "로제언니",
        "score": 69,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-11",
        "name": "로제오빠",
        "score": 129,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 98,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-02-27T16:08:04.000Z",
    "updatedAt": "2022-03-06T14:00:49.000Z"
  },
  {
    "id": "play-0f7700a5-40b0-4cba-a0b2-9b24812f532c",
    "gameId": "game-21",
    "gameTitleKr": "De Vulgari Eloquentia",
    "gameTitleEn": "De Vulgari Eloquentia",
    "gameImage": "https://cf.geekdo-images.com/mAyx-NXFYvTj6Dz-YKormQ__thumb/img/k56Pz_BhVJ2ojAzx9Z5BeZth3pQ=/fit-in/200x150/filters:strip_icc()/pic778029.jpg",
    "date": "2022-03-06",
    "durationMinutes": 45,
    "locationId": "loc-8",
    "locationName": "삼동모임",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 48,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-10",
        "name": "로제언니",
        "score": 45,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-11",
        "name": "로제오빠",
        "score": 46,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 52,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-03-06T16:51:50.000Z",
    "updatedAt": "2022-03-06T18:04:20.000Z"
  },
  {
    "id": "play-c1ab7524-e64e-48e9-a823-708ef46bc261",
    "gameId": "game-18",
    "gameTitleKr": "Crystal Palace",
    "gameTitleEn": "Crystal Palace",
    "gameImage": "https://cf.geekdo-images.com/oHsLn5t1BvKOX4zJO8_Tmw__thumb/img/a5wJcOm363_-BhI3Al-fnJ4e2NE=/fit-in/200x150/filters:strip_icc()/pic4949194.jpg",
    "date": "2022-03-09",
    "durationMinutes": 97,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 76,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 97,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 57,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 62,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-03-09T14:58:37.000Z",
    "updatedAt": "2022-03-09T16:41:39.000Z"
  },
  {
    "id": "play-7f35d83d-2358-4228-adab-1ced6c6b687c",
    "gameId": "game-71",
    "gameTitleKr": "Trajan",
    "gameTitleEn": "Trajan",
    "gameImage": "https://cf.geekdo-images.com/djdeCr__iNV5rMnGnxNiaQ__thumb/img/jULoayRVuV3c8cRqKOPsf7oMO5w=/fit-in/200x150/filters:strip_icc()/pic4336095.png",
    "date": "2022-03-09",
    "durationMinutes": 128,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 108,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 112,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 99,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 101,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-03-09T16:48:36.000Z",
    "updatedAt": "2022-03-30T08:47:58.000Z"
  },
  {
    "id": "play-e2224b46-be08-480d-b9ce-5abcb74fb070",
    "gameId": "game-3",
    "gameTitleKr": "Ark Nova",
    "gameTitleEn": "Ark Nova",
    "gameImage": "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__thumb/img/4KuHNTWSMPf8vTNDKSRMMI3oOv8=/fit-in/200x150/filters:strip_icc()/pic6293412.jpg",
    "date": "2022-03-19",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 11,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": -13,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": -20,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-03-19T13:22:28.000Z",
    "updatedAt": "2022-03-19T13:23:15.000Z"
  },
  {
    "id": "play-40ad5446-258d-42a4-9eaf-3c4b0f9924dc",
    "gameId": "game-3",
    "gameTitleKr": "Ark Nova",
    "gameTitleEn": "Ark Nova",
    "gameImage": "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__thumb/img/4KuHNTWSMPf8vTNDKSRMMI3oOv8=/fit-in/200x150/filters:strip_icc()/pic6293412.jpg",
    "date": "2022-03-19",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 16,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 19,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": -2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-03-19T16:21:39.000Z",
    "updatedAt": "2022-03-30T08:48:07.000Z"
  },
  {
    "id": "play-5fdd7409-b7f5-4778-8af1-8847aa69d295",
    "gameId": "game-76",
    "gameTitleKr": "Watergate",
    "gameTitleEn": "Watergate",
    "gameImage": "https://cf.geekdo-images.com/iTBogxNFa3Ymh-6ST3srsw__thumb/img/5vZps-04NqSAuUC4e6-E9M96VxE=/fit-in/200x150/filters:strip_icc()/pic4768766.jpg",
    "date": "2022-03-20",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-03-20T17:02:08.000Z",
    "updatedAt": "2022-03-20T17:02:46.000Z"
  },
  {
    "id": "play-11eeb39d-f3b8-4d21-8d53-2edded096d72",
    "gameId": "game-68",
    "gameTitleKr": "The Resistance: Avalon",
    "gameTitleEn": "The Resistance: Avalon",
    "gameImage": "https://cf.geekdo-images.com/LPa6rsGcv8S0-OeNjCOAEQ__thumb/img/RKui79VjUbQAzTWaPu44ytupzDs=/fit-in/200x150/filters:strip_icc()/pic1398895.jpg",
    "date": "2022-04-03",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-23",
        "name": "어진",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-35",
        "name": "자까",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-40",
        "name": "제이든",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-49",
        "name": "한",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-03T18:04:58.000Z",
    "updatedAt": "2022-04-03T18:05:46.000Z"
  },
  {
    "id": "play-99bcbc2d-c8e2-404d-98b3-739ee523e4d9",
    "gameId": "game-68",
    "gameTitleKr": "The Resistance: Avalon",
    "gameTitleEn": "The Resistance: Avalon",
    "gameImage": "https://cf.geekdo-images.com/LPa6rsGcv8S0-OeNjCOAEQ__thumb/img/RKui79VjUbQAzTWaPu44ytupzDs=/fit-in/200x150/filters:strip_icc()/pic1398895.jpg",
    "date": "2022-04-03",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-23",
        "name": "어진",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-35",
        "name": "자까",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-40",
        "name": "제이든",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-49",
        "name": "한",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-04-03T18:05:48.000Z",
    "updatedAt": "2022-04-03T18:06:06.000Z"
  },
  {
    "id": "play-736d7e13-8dd1-480a-98e5-b14af37993e3",
    "gameId": "game-7",
    "gameTitleKr": "Barrage",
    "gameTitleEn": "Barrage",
    "gameImage": "https://cf.geekdo-images.com/jEPmWvvYpqkWrKOzqIHFsg__thumb/img/kMLIpeqA6UcUvQg2AdMwwQoEIfU=/fit-in/200x150/filters:strip_icc()/pic4336469.png",
    "date": "2022-04-03",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 130,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 65,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-49",
        "name": "한",
        "score": 113,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-03T18:06:13.000Z",
    "updatedAt": "2022-04-03T18:07:35.000Z"
  },
  {
    "id": "play-de2e883b-89a3-41b4-9d76-4e20dc1f02fe",
    "gameId": "game-32",
    "gameTitleKr": "Gizmos",
    "gameTitleEn": "Gizmos",
    "gameImage": "https://cf.geekdo-images.com/zin82Hg4MXck86t8fzbsdA__thumb/img/e-UqOrMfsLCh2T_igK3wkoFrOu8=/fit-in/200x150/filters:strip_icc()/pic4169718.png",
    "date": "2022-04-09",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 33,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 29,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-09T21:56:18.000Z",
    "updatedAt": "2022-04-23T21:20:49.000Z"
  },
  {
    "id": "play-f2b861dd-de1d-486d-91cc-69f4c11e3ce8",
    "gameId": "game-32",
    "gameTitleKr": "Gizmos",
    "gameTitleEn": "Gizmos",
    "gameImage": "https://cf.geekdo-images.com/zin82Hg4MXck86t8fzbsdA__thumb/img/e-UqOrMfsLCh2T_igK3wkoFrOu8=/fit-in/200x150/filters:strip_icc()/pic4169718.png",
    "date": "2022-04-09",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-04-09T21:56:50.000Z",
    "updatedAt": "2022-04-23T21:20:53.000Z"
  },
  {
    "id": "play-42fbfc77-b030-4a02-8afb-54023028a135",
    "gameId": "game-32",
    "gameTitleKr": "Gizmos",
    "gameTitleEn": "Gizmos",
    "gameImage": "https://cf.geekdo-images.com/zin82Hg4MXck86t8fzbsdA__thumb/img/e-UqOrMfsLCh2T_igK3wkoFrOu8=/fit-in/200x150/filters:strip_icc()/pic4169718.png",
    "date": "2022-04-09",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-04-09T21:56:53.000Z",
    "updatedAt": "2022-04-23T21:20:59.000Z"
  },
  {
    "id": "play-d3b67e5f-831c-4631-b26c-cc03a6c2f981",
    "gameId": "game-22",
    "gameTitleKr": "Deception: Murder in Hong Kong",
    "gameTitleEn": "Deception: Murder in Hong Kong",
    "gameImage": "https://cf.geekdo-images.com/1COY3oeK9aN2_XNimKaNww__thumb/img/8IWDjnSYX-tYAVRgfq-W3y1b_Ww=/fit-in/200x150/filters:strip_icc()/pic3033330.jpg",
    "date": "2022-04-09",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-2",
        "name": "기성",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-19",
        "name": "성범",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-23",
        "name": "어진",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-35",
        "name": "자까",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-40",
        "name": "제이든",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-42",
        "name": "지원",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-48",
        "name": "토리",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-49",
        "name": "한",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-09T21:56:59.000Z",
    "updatedAt": "2022-04-23T21:21:05.000Z"
  },
  {
    "id": "play-4d434564-ce9f-4d13-bc84-28067d697189",
    "gameId": "game-32",
    "gameTitleKr": "Gizmos",
    "gameTitleEn": "Gizmos",
    "gameImage": "https://cf.geekdo-images.com/zin82Hg4MXck86t8fzbsdA__thumb/img/e-UqOrMfsLCh2T_igK3wkoFrOu8=/fit-in/200x150/filters:strip_icc()/pic4169718.png",
    "date": "2022-04-09",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 38,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 26,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-04-09T22:22:15.000Z",
    "updatedAt": "2022-04-23T21:21:11.000Z"
  },
  {
    "id": "play-69fbf540-016e-474f-aa3b-a53405ac7e73",
    "gameId": "game-4",
    "gameTitleKr": "Assassin's Creed: Valhalla Orlog Dice Game",
    "gameTitleEn": "Assassin's Creed: Valhalla Orlog Dice Game",
    "gameImage": "https://cf.geekdo-images.com/gMOwN7M4ELcxSSXm1H4WGg__thumb/img/9wLVmnksazph5E6RM_G_xHJs2es=/fit-in/200x150/filters:strip_icc()/pic6610983.png",
    "date": "2022-04-10",
    "durationMinutes": 45,
    "locationId": "loc-4",
    "locationName": "까페그랑쥬",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-10T15:04:47.000Z",
    "updatedAt": "2022-04-10T15:05:30.000Z"
  },
  {
    "id": "play-4b3e77a3-9145-411e-8f36-178a30bed364",
    "gameId": "game-4",
    "gameTitleKr": "Assassin's Creed: Valhalla Orlog Dice Game",
    "gameTitleEn": "Assassin's Creed: Valhalla Orlog Dice Game",
    "gameImage": "https://cf.geekdo-images.com/gMOwN7M4ELcxSSXm1H4WGg__thumb/img/9wLVmnksazph5E6RM_G_xHJs2es=/fit-in/200x150/filters:strip_icc()/pic6610983.png",
    "date": "2022-04-10",
    "durationMinutes": 45,
    "locationId": "loc-4",
    "locationName": "까페그랑쥬",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-04-10T15:57:23.000Z",
    "updatedAt": "2022-04-10T15:57:25.000Z"
  },
  {
    "id": "play-f6b9be69-2734-4b6f-8e2b-fcea6c4377b4",
    "gameId": "game-4",
    "gameTitleKr": "Assassin's Creed: Valhalla Orlog Dice Game",
    "gameTitleEn": "Assassin's Creed: Valhalla Orlog Dice Game",
    "gameImage": "https://cf.geekdo-images.com/gMOwN7M4ELcxSSXm1H4WGg__thumb/img/9wLVmnksazph5E6RM_G_xHJs2es=/fit-in/200x150/filters:strip_icc()/pic6610983.png",
    "date": "2022-04-10",
    "durationMinutes": 45,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-04-10T16:11:51.000Z",
    "updatedAt": "2022-04-10T16:11:57.000Z"
  },
  {
    "id": "play-267187b2-cfa0-497c-bfac-4c81a54bcc8d",
    "gameId": "game-4",
    "gameTitleKr": "Assassin's Creed: Valhalla Orlog Dice Game",
    "gameTitleEn": "Assassin's Creed: Valhalla Orlog Dice Game",
    "gameImage": "https://cf.geekdo-images.com/gMOwN7M4ELcxSSXm1H4WGg__thumb/img/9wLVmnksazph5E6RM_G_xHJs2es=/fit-in/200x150/filters:strip_icc()/pic6610983.png",
    "date": "2022-04-10",
    "durationMinutes": 45,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-04-10T16:27:28.000Z",
    "updatedAt": "2022-04-10T16:27:34.000Z"
  },
  {
    "id": "play-542f755d-7f76-4b6e-a2ca-ffb31fa9efc9",
    "gameId": "game-47",
    "gameTitleKr": "Puerto Rico",
    "gameTitleEn": "Puerto Rico",
    "gameImage": "https://cf.geekdo-images.com/cZ8h5HpbD6asCJuGuuuT-w__thumb/img/1GUPtGNfDR_CmbM7SYv2ABV1AeQ=/fit-in/200x150/filters:strip_icc()/pic4887895.jpg",
    "date": "2022-04-16",
    "durationMinutes": 45,
    "locationId": "loc-5",
    "locationName": "동욱형집",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 33,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-4",
        "name": "나율",
        "score": 34,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 30,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 26,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-47",
        "name": "찬우",
        "score": 33,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-16T11:41:41.000Z",
    "updatedAt": "2022-04-16T11:44:08.000Z"
  },
  {
    "id": "play-31afeee6-d7b9-4250-b261-01ed1af0ed4b",
    "gameId": "game-48",
    "gameTitleKr": "Q.E.",
    "gameTitleEn": "Q.E.",
    "gameImage": "https://cf.geekdo-images.com/47o_swlkRbfpMH3hnFZgtA__thumb/img/gT07BJ5Ynlopp-UIQRIySERKUmI=/fit-in/200x150/filters:strip_icc()/pic4383594.png",
    "date": "2022-04-16",
    "durationMinutes": 45,
    "locationId": "loc-5",
    "locationName": "동욱형집",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 48,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-4",
        "name": "나율",
        "score": 46,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 29,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 20,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-47",
        "name": "찬우",
        "score": 15,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-16T13:35:55.000Z",
    "updatedAt": "2022-04-16T13:36:40.000Z"
  },
  {
    "id": "play-0dac9379-eb8c-4bff-8b2e-421762782b34",
    "gameId": "game-3",
    "gameTitleKr": "Ark Nova",
    "gameTitleEn": "Ark Nova",
    "gameImage": "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__thumb/img/4KuHNTWSMPf8vTNDKSRMMI3oOv8=/fit-in/200x150/filters:strip_icc()/pic6293412.jpg",
    "date": "2022-04-16",
    "durationMinutes": 45,
    "locationId": "loc-5",
    "locationName": "동욱형집",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-47",
        "name": "찬우",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-16T21:51:44.000Z",
    "updatedAt": "2022-04-16T21:52:03.000Z"
  },
  {
    "id": "play-35e1726c-9017-4d76-8d75-63009ece3c3c",
    "gameId": "game-12",
    "gameTitleKr": "Carnegie",
    "gameTitleEn": "Carnegie",
    "gameImage": "https://cf.geekdo-images.com/QVmcfAXMs_JTKSDMRb_XBA__thumb/img/5YYI8RIRPJKZucMmKJIWkHvb1HY=/fit-in/200x150/filters:strip_icc()/pic5707830.jpg",
    "date": "2022-04-17",
    "durationMinutes": 138,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 141,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 89,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 147,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 126,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-17T10:54:37.000Z",
    "updatedAt": "2022-04-23T21:20:31.000Z"
  },
  {
    "id": "play-2a8acd91-2754-4b19-b24a-3b68062d36e7",
    "gameId": "game-67",
    "gameTitleKr": "The Great Wall",
    "gameTitleEn": "The Great Wall",
    "gameImage": "https://cf.geekdo-images.com/3P1cMmZ47nf_L1zLO-pKlg__thumb/img/TEMZ4S46PDoaI3X2enaNKKLthPE=/fit-in/200x150/filters:strip_icc()/pic5016682.jpg",
    "date": "2022-04-17",
    "durationMinutes": 242,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 159,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 153,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 144,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 189,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-17T15:39:17.000Z",
    "updatedAt": "2022-04-17T19:41:32.000Z"
  },
  {
    "id": "play-40532e39-26c8-4be0-8673-fbbd5f8e537d",
    "gameId": "game-14",
    "gameTitleKr": "Cascadia",
    "gameTitleEn": "Cascadia",
    "gameImage": "https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__thumb/img/tVSFjSxYEcw7sKj3unIIQV8kxoc=/fit-in/200x150/filters:strip_icc()/pic5100691.jpg",
    "date": "2022-04-19",
    "durationMinutes": 45,
    "locationId": "loc-3",
    "locationName": "까페",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 95,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 99,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-19T20:38:07.000Z",
    "updatedAt": "2022-04-19T20:39:16.000Z"
  },
  {
    "id": "play-e9829435-f5e4-40a5-8d8e-50d48ef892c0",
    "gameId": "game-14",
    "gameTitleKr": "Cascadia",
    "gameTitleEn": "Cascadia",
    "gameImage": "https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__thumb/img/tVSFjSxYEcw7sKj3unIIQV8kxoc=/fit-in/200x150/filters:strip_icc()/pic5100691.jpg",
    "date": "2022-04-19",
    "durationMinutes": 45,
    "locationId": "loc-3",
    "locationName": "까페",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 91,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 87,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-04-19T20:38:07.000Z",
    "updatedAt": "2022-04-19T21:17:43.000Z"
  },
  {
    "id": "play-6e610e3d-e763-44d2-b023-13a8d77144b0",
    "gameId": "game-65",
    "gameTitleKr": "The Downfall of Pompeii",
    "gameTitleEn": "The Downfall of Pompeii",
    "gameImage": "https://cf.geekdo-images.com/eZjGZ9O4hdUnc47rDgAgRg__thumb/img/Ii0rodwBgEzpHofswh32VECo1xk=/fit-in/200x150/filters:strip_icc()/pic1685805.jpg",
    "date": "2022-04-23",
    "durationMinutes": 43,
    "locationId": "loc-8",
    "locationName": "삼동모임",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-6",
        "name": "늑대",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-10",
        "name": "로제언니",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-11",
        "name": "로제오빠",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-23T12:45:50.000Z",
    "updatedAt": "2022-04-23T19:02:43.000Z"
  },
  {
    "id": "play-e966681d-a3bc-44eb-95da-130faabd0c29",
    "gameId": "game-35",
    "gameTitleKr": "Haspelknecht: The Story of Early Coal Mining",
    "gameTitleEn": "Haspelknecht: The Story of Early Coal Mining",
    "gameImage": "https://cf.geekdo-images.com/fulMbj3UT2AzhW2uLB-pOg__thumb/img/eJpM3O3PorabJEJNidybPB8ZEIM=/fit-in/200x150/filters:strip_icc()/pic3070755.jpg",
    "date": "2022-04-23",
    "durationMinutes": 143,
    "locationId": "loc-8",
    "locationName": "삼동모임",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 76,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-6",
        "name": "늑대",
        "score": 58,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-11",
        "name": "로제오빠",
        "score": 81,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-23T14:05:45.000Z",
    "updatedAt": "2022-04-23T19:41:17.000Z"
  },
  {
    "id": "play-6d6c35d7-1009-4084-990b-61dee21d130e",
    "gameId": "game-66",
    "gameTitleKr": "The Gallerist",
    "gameTitleEn": "The Gallerist",
    "gameImage": "https://cf.geekdo-images.com/ie1GSt1XV04sXQXt-3O1UQ__thumb/img/O0H84AvXp139U865gRLGiAo9-gA=/fit-in/200x150/filters:strip_icc()/pic2503200.png",
    "date": "2022-04-23",
    "durationMinutes": 197,
    "locationId": "loc-8",
    "locationName": "삼동모임",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 144,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-6",
        "name": "늑대",
        "score": 101,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-10",
        "name": "로제언니",
        "score": 75,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-11",
        "name": "로제오빠",
        "score": 64,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-23T17:44:39.000Z",
    "updatedAt": "2022-04-23T21:03:47.000Z"
  },
  {
    "id": "play-9725c32c-3aaf-48fc-987e-2d679e7b2ebc",
    "gameId": "game-12",
    "gameTitleKr": "Carnegie",
    "gameTitleEn": "Carnegie",
    "gameImage": "https://cf.geekdo-images.com/QVmcfAXMs_JTKSDMRb_XBA__thumb/img/5YYI8RIRPJKZucMmKJIWkHvb1HY=/fit-in/200x150/filters:strip_icc()/pic5707830.jpg",
    "date": "2022-04-24",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 112,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 141,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 132,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-04-24T11:40:46.000Z",
    "updatedAt": "2022-04-24T11:41:10.000Z"
  },
  {
    "id": "play-65460023-dd9b-4815-a650-d22de2cebc91",
    "gameId": "game-67",
    "gameTitleKr": "The Great Wall",
    "gameTitleEn": "The Great Wall",
    "gameImage": "https://cf.geekdo-images.com/3P1cMmZ47nf_L1zLO-pKlg__thumb/img/TEMZ4S46PDoaI3X2enaNKKLthPE=/fit-in/200x150/filters:strip_icc()/pic5016682.jpg",
    "date": "2022-04-24",
    "durationMinutes": 223,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 136,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 158,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 167,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 176,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-04-24T13:41:44.000Z",
    "updatedAt": "2022-04-24T17:24:53.000Z"
  },
  {
    "id": "play-e2725f74-d62e-4692-9e9e-493d6f418ac9",
    "gameId": "game-14",
    "gameTitleKr": "Cascadia",
    "gameTitleEn": "Cascadia",
    "gameImage": "https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__thumb/img/tVSFjSxYEcw7sKj3unIIQV8kxoc=/fit-in/200x150/filters:strip_icc()/pic5100691.jpg",
    "date": "2022-04-24",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 99,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 82,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 94,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 77,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-24T18:42:56.000Z",
    "updatedAt": "2022-04-24T18:43:27.000Z"
  },
  {
    "id": "play-2e512e89-24b1-41f2-b9da-d0a7bc904e12",
    "gameId": "game-3",
    "gameTitleKr": "Ark Nova",
    "gameTitleEn": "Ark Nova",
    "gameImage": "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__thumb/img/4KuHNTWSMPf8vTNDKSRMMI3oOv8=/fit-in/200x150/filters:strip_icc()/pic6293412.jpg",
    "date": "2022-04-24",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 24,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 10,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": -14,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-04-24T21:56:26.000Z",
    "updatedAt": "2022-04-24T21:57:04.000Z"
  },
  {
    "id": "play-7a210a5f-063e-42ea-93d8-1049a1763824",
    "gameId": "game-30",
    "gameTitleKr": "Foundations of Rome",
    "gameTitleEn": "Foundations of Rome",
    "gameImage": "https://cf.geekdo-images.com/lRB91NF3OPeSff2o17NX3Q__thumb/img/CWAVZWfBegleQWJVhkehmDmxnbU=/fit-in/200x150/filters:strip_icc()/pic6706206.jpg",
    "date": "2022-04-28",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 97,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 107,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-28T22:05:18.000Z",
    "updatedAt": "2022-05-01T11:14:57.000Z"
  },
  {
    "id": "play-95ccadd1-9d2f-4410-8545-f06957f519bc",
    "gameId": "game-30",
    "gameTitleKr": "Foundations of Rome",
    "gameTitleEn": "Foundations of Rome",
    "gameImage": "https://cf.geekdo-images.com/lRB91NF3OPeSff2o17NX3Q__thumb/img/CWAVZWfBegleQWJVhkehmDmxnbU=/fit-in/200x150/filters:strip_icc()/pic6706206.jpg",
    "date": "2022-04-28",
    "durationMinutes": 39,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 78,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 80,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 72,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-04-28T22:05:18.000Z",
    "updatedAt": "2022-05-01T11:04:57.000Z"
  },
  {
    "id": "play-a67de3d4-6e2f-4574-b66f-71d19f5f7a62",
    "gameId": "game-12",
    "gameTitleKr": "Carnegie",
    "gameTitleEn": "Carnegie",
    "gameImage": "https://cf.geekdo-images.com/QVmcfAXMs_JTKSDMRb_XBA__thumb/img/5YYI8RIRPJKZucMmKJIWkHvb1HY=/fit-in/200x150/filters:strip_icc()/pic5707830.jpg",
    "date": "2022-05-01",
    "durationMinutes": 107,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 147,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 160,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 122,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-05-01T11:27:09.000Z",
    "updatedAt": "2022-05-01T13:13:46.000Z"
  },
  {
    "id": "play-75f9aa78-dc42-4a0b-b475-091f29fb9c06",
    "gameId": "game-20",
    "gameTitleKr": "De Magische Markt van Cameloot",
    "gameTitleEn": "De Magische Markt van Cameloot",
    "gameImage": "https://cf.geekdo-images.com/kAAllrKaOmn4e5p0G7ZKpA__thumb/img/eb7QFxpAS_ceZf8-nfBRrLle58U=/fit-in/200x150/filters:strip_icc()/pic5991084.png",
    "date": "2022-05-01",
    "durationMinutes": 34,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 13,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-14",
        "name": "민호섬마을",
        "score": 11,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-40",
        "name": "제이든",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 10,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-49",
        "name": "한",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-01T13:25:36.000Z",
    "updatedAt": "2022-05-01T13:59:23.000Z"
  },
  {
    "id": "play-9473c1e4-0a5e-4edf-b420-1e0fcbb68f9b",
    "gameId": "game-16",
    "gameTitleKr": "Codenames: Pictures",
    "gameTitleEn": "Codenames: Pictures",
    "gameImage": "https://cf.geekdo-images.com/Q2u-Nk68Wb1iLjxh_dfsIg__thumb/img/6-1EOESE196KVKw4xOJ5rge56j0=/fit-in/200x150/filters:strip_icc()/pic3476592.jpg",
    "date": "2022-05-01",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-14",
        "name": "민호섬마을",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-40",
        "name": "제이든",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-49",
        "name": "한",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-01T14:40:49.000Z",
    "updatedAt": "2022-05-01T14:41:14.000Z"
  },
  {
    "id": "play-8d604f1f-b3c4-4c4d-906e-0963f4618291",
    "gameId": "game-23",
    "gameTitleKr": "Dice Throne: Season Two – Battle Chest",
    "gameTitleEn": "Dice Throne: Season Two – Battle Chest",
    "gameImage": "https://cf.geekdo-images.com/lJkCMk1jwCl-KHSPZJCPZQ__thumb/img/93EGDw0NSm91SomXH38d4XvhlSk=/fit-in/200x150/filters:strip_icc()/pic4441140.jpg",
    "date": "2022-05-01",
    "durationMinutes": 45,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-01T17:54:51.000Z",
    "updatedAt": "2022-05-01T17:55:20.000Z"
  },
  {
    "id": "play-ef73efd8-e9f5-4f45-b449-35c559943e48",
    "gameId": "game-34",
    "gameTitleKr": "Great Western Trail",
    "gameTitleEn": "Great Western Trail",
    "gameImage": "https://cf.geekdo-images.com/u1l0gH7sb_vnvDvoO_QHqA__thumb/img/9lxFidyDb8j6D1vobx4e3UwZ-FI=/fit-in/200x150/filters:strip_icc()/pic4887376.jpg",
    "date": "2022-05-05",
    "durationMinutes": 145,
    "locationId": "loc-10",
    "locationName": "이매아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 62,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 48,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 70,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 101,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-05T10:38:52.000Z",
    "updatedAt": "2022-05-05T13:04:15.000Z"
  },
  {
    "id": "play-ec848f65-3e02-4931-8e35-d7cc75fab792",
    "gameId": "game-40",
    "gameTitleKr": "Mysthea",
    "gameTitleEn": "Mysthea",
    "gameImage": "https://cf.geekdo-images.com/jfk-kD0mrLQ6XEKQfO5TuQ__thumb/img/tU3byM579bW1HtseUzW1IWtxmjo=/fit-in/200x150/filters:strip_icc()/pic3980663.png",
    "date": "2022-05-05",
    "durationMinutes": 217,
    "locationId": "loc-10",
    "locationName": "이매아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 288,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 242,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 192,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 174,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-05T15:19:20.000Z",
    "updatedAt": "2022-05-05T18:56:49.000Z"
  },
  {
    "id": "play-c9b1a0e2-4770-4d1a-9ffa-cc730de8a65e",
    "gameId": "game-73",
    "gameTitleKr": "Viticulture Essential Edition",
    "gameTitleEn": "Viticulture Essential Edition",
    "gameImage": "https://cf.geekdo-images.com/l_PRU2lVlX9seScRFcvFlA__thumb/img/pULDtVd75QZgGfvSMhr6Rs07vK8=/fit-in/200x150/filters:strip_icc()/pic6500949.jpg",
    "date": "2022-05-05",
    "durationMinutes": 129,
    "locationId": "loc-10",
    "locationName": "이매아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 21,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 34,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 30,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 23,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-05T19:30:14.000Z",
    "updatedAt": "2022-05-05T21:39:22.000Z"
  },
  {
    "id": "play-ae6df297-71e1-4313-af7a-7f855eac318c",
    "gameId": "game-26",
    "gameTitleKr": "Eldorádó Legendája",
    "gameTitleEn": "Eldorádó Legendája",
    "gameImage": "https://cf.geekdo-images.com/IHOUjBZ9ziMeYTRWp2hYAA__thumb/img/_dAo-_rzbTzm_oIQscu7NSQ5-hE=/fit-in/200x150/filters:strip_icc()/pic4848678.jpg",
    "date": "2022-05-07",
    "durationMinutes": 45,
    "locationId": "loc-2",
    "locationName": "기타",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-9",
        "name": "뚜뚜",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-07T11:49:53.000Z",
    "updatedAt": "2022-05-07T12:26:27.000Z"
  },
  {
    "id": "play-a066af21-d386-4bd2-801c-5460660d66f0",
    "gameId": "game-31",
    "gameTitleKr": "Galaxy Trucker",
    "gameTitleEn": "Galaxy Trucker",
    "gameImage": "https://cf.geekdo-images.com/1gQABuftAVgk1qshkMyDEw__thumb/img/Ovni6sWuvyfj9LWn-hnHzpCELF8=/fit-in/200x150/filters:strip_icc()/pic6125184.jpg",
    "date": "2022-05-08",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 50,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 46,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-08T19:58:44.000Z",
    "updatedAt": "2022-05-08T19:59:21.000Z"
  },
  {
    "id": "play-ad239abb-9b6b-4174-b375-96ea39b7f122",
    "gameId": "game-3",
    "gameTitleKr": "Ark Nova",
    "gameTitleEn": "Ark Nova",
    "gameImage": "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__thumb/img/4KuHNTWSMPf8vTNDKSRMMI3oOv8=/fit-in/200x150/filters:strip_icc()/pic6293412.jpg",
    "date": "2022-05-15",
    "durationMinutes": 186,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 23,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": -20,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": -30,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-15T10:10:32.000Z",
    "updatedAt": "2022-05-15T13:42:47.000Z"
  },
  {
    "id": "play-b259d598-c407-4ab5-8c6a-60f1db75fc3f",
    "gameId": "game-14",
    "gameTitleKr": "Cascadia",
    "gameTitleEn": "Cascadia",
    "gameImage": "https://cf.geekdo-images.com/MjeJZfulbsM1DSV3DrGJYA__thumb/img/tVSFjSxYEcw7sKj3unIIQV8kxoc=/fit-in/200x150/filters:strip_icc()/pic5100691.jpg",
    "date": "2022-05-15",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 94,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 87,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 82,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 85,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-15T15:31:26.000Z",
    "updatedAt": "2022-05-15T15:31:48.000Z"
  },
  {
    "id": "play-1285ab91-0272-49ad-8386-5252a6e33430",
    "gameId": "game-73",
    "gameTitleKr": "Viticulture Essential Edition",
    "gameTitleEn": "Viticulture Essential Edition",
    "gameImage": "https://cf.geekdo-images.com/l_PRU2lVlX9seScRFcvFlA__thumb/img/pULDtVd75QZgGfvSMhr6Rs07vK8=/fit-in/200x150/filters:strip_icc()/pic6500949.jpg",
    "date": "2022-05-21",
    "durationMinutes": 120,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 28,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-31",
        "name": "이보람",
        "score": 23,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 16,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-05-21T10:51:36.000Z",
    "updatedAt": "2022-05-21T12:51:50.000Z"
  },
  {
    "id": "play-e1038c6a-ee6e-4236-a60b-3bb68474a021",
    "gameId": "game-37",
    "gameTitleKr": "Kanban EV",
    "gameTitleEn": "Kanban EV",
    "gameImage": "https://cf.geekdo-images.com/L2Wn-zUqkcHgqvwvY212Ig__thumb/img/RQunBacBw949DkYBgzoS5YaXgJo=/fit-in/200x150/filters:strip_icc()/pic4924232.jpg",
    "date": "2022-05-21",
    "durationMinutes": 143,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 157,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 148,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-31",
        "name": "이보람",
        "score": 145,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 95,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-21T13:55:52.000Z",
    "updatedAt": "2022-05-21T16:18:40.000Z"
  },
  {
    "id": "play-309e6fbe-b86b-4c1a-9eec-c5e55b875ce6",
    "gameId": "game-30",
    "gameTitleKr": "Foundations of Rome",
    "gameTitleEn": "Foundations of Rome",
    "gameImage": "https://cf.geekdo-images.com/lRB91NF3OPeSff2o17NX3Q__thumb/img/CWAVZWfBegleQWJVhkehmDmxnbU=/fit-in/200x150/filters:strip_icc()/pic6706206.jpg",
    "date": "2022-05-21",
    "durationMinutes": 64,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 70,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 73,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-31",
        "name": "이보람",
        "score": 51,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 77,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-05-21T16:59:17.000Z",
    "updatedAt": "2022-05-21T18:02:57.000Z"
  },
  {
    "id": "play-3e982a4c-af87-4b91-942f-c91a97233cf4",
    "gameId": "game-13",
    "gameTitleKr": "Cartographers",
    "gameTitleEn": "Cartographers",
    "gameImage": "https://cf.geekdo-images.com/GifbnAmsA4lfEcDkeaC9VA__thumb/img/TTxZzwbna07hMcPQ0xaFtT10egE=/fit-in/200x150/filters:strip_icc()/pic4397932.png",
    "date": "2022-05-21",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 112,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 89,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-31",
        "name": "이보람",
        "score": 71,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 91,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-21T18:27:04.000Z",
    "updatedAt": "2022-05-21T19:22:50.000Z"
  },
  {
    "id": "play-ab6da1a8-2c1d-4a15-8e35-bd543d4f40fe",
    "gameId": "game-37",
    "gameTitleKr": "Kanban EV",
    "gameTitleEn": "Kanban EV",
    "gameImage": "https://cf.geekdo-images.com/L2Wn-zUqkcHgqvwvY212Ig__thumb/img/RQunBacBw949DkYBgzoS5YaXgJo=/fit-in/200x150/filters:strip_icc()/pic4924232.jpg",
    "date": "2022-05-28",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 160,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 105,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 163,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 157,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-28T17:06:25.000Z",
    "updatedAt": "2022-05-28T17:07:02.000Z"
  },
  {
    "id": "play-61f8c49d-818c-4b90-8168-8a4898df7efd",
    "gameId": "game-26",
    "gameTitleKr": "Eldorádó Legendája",
    "gameTitleEn": "Eldorádó Legendája",
    "gameImage": "https://cf.geekdo-images.com/IHOUjBZ9ziMeYTRWp2hYAA__thumb/img/_dAo-_rzbTzm_oIQscu7NSQ5-hE=/fit-in/200x150/filters:strip_icc()/pic4848678.jpg",
    "date": "2022-05-28",
    "durationMinutes": 45,
    "locationId": "loc-2",
    "locationName": "기타",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-05-28T17:07:12.000Z",
    "updatedAt": "2022-05-28T17:07:21.000Z"
  },
  {
    "id": "play-e06688d2-db80-4097-a729-118df14d5b7e",
    "gameId": "game-34",
    "gameTitleKr": "Great Western Trail",
    "gameTitleEn": "Great Western Trail",
    "gameImage": "https://cf.geekdo-images.com/u1l0gH7sb_vnvDvoO_QHqA__thumb/img/9lxFidyDb8j6D1vobx4e3UwZ-FI=/fit-in/200x150/filters:strip_icc()/pic4887376.jpg",
    "date": "2022-05-28",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 63,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 86,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 83,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 35,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-05-28T19:06:05.000Z",
    "updatedAt": "2022-05-28T19:06:19.000Z"
  },
  {
    "id": "play-558f1c57-e3e5-4ce9-a6aa-575cb3095a5d",
    "gameId": "game-33",
    "gameTitleKr": "Goat 'n' Goat",
    "gameTitleEn": "Goat 'n' Goat",
    "gameImage": "https://cf.geekdo-images.com/Xeo_VTXKeE-abG1HGXaYCA__thumb/img/e1sSKsULVaCBVht-_SuM71htAIg=/fit-in/200x150/filters:strip_icc()/pic5128780.jpg",
    "date": "2022-05-28",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 22,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 14,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 14,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 10,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-05-28T19:50:33.000Z",
    "updatedAt": "2022-05-28T19:51:02.000Z"
  },
  {
    "id": "play-32794ac0-47f7-4847-b3b8-3b9577ef9dce",
    "gameId": "game-56",
    "gameTitleKr": "Silver",
    "gameTitleEn": "Silver",
    "gameImage": "https://cf.geekdo-images.com/e7ii83ya4tVD-4f1E-Alpg__thumb/img/uXIwkF8JqP2mYeK8ZGPHL_GPRrQ=/fit-in/200x150/filters:strip_icc()/pic4741826.jpg",
    "date": "2022-06-01",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 34,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-31",
        "name": "이보람",
        "score": 43,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 52,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 42,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-06-01T12:58:25.000Z",
    "updatedAt": "2022-06-01T12:59:04.000Z"
  },
  {
    "id": "play-1402e7b9-6f08-4d79-871c-bb60f3922a39",
    "gameId": "game-48",
    "gameTitleKr": "Q.E.",
    "gameTitleEn": "Q.E.",
    "gameImage": "https://cf.geekdo-images.com/47o_swlkRbfpMH3hnFZgtA__thumb/img/gT07BJ5Ynlopp-UIQRIySERKUmI=/fit-in/200x150/filters:strip_icc()/pic4383594.png",
    "date": "2022-06-01",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 0,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-31",
        "name": "이보람",
        "score": 22,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 41,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 28,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-06-01T12:59:14.000Z",
    "updatedAt": "2022-06-01T12:59:39.000Z"
  },
  {
    "id": "play-3f7f6bd6-8e37-4aa3-897a-cfb2ae69a899",
    "gameId": "game-52",
    "gameTitleKr": "Sagrada",
    "gameTitleEn": "Sagrada",
    "gameImage": "https://cf.geekdo-images.com/PZt3EAAGV3dFIVuwMR0AEw__thumb/img/1m4aryOW1MOpq-8jGkF6gDTJmCY=/fit-in/200x150/filters:strip_icc()/pic3525224.jpg",
    "date": "2022-06-01",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 61,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-31",
        "name": "이보람",
        "score": 58,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 69,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 39,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-06-01T19:01:40.000Z",
    "updatedAt": "2022-06-01T19:02:18.000Z"
  },
  {
    "id": "play-3bf1eaa3-0d0b-49f1-9b0f-eb6c8809c3a8",
    "gameId": "game-45",
    "gameTitleKr": "Perseverance: Castaway Chronicles – Episodes 1 & 2",
    "gameTitleEn": "Perseverance: Castaway Chronicles – Episodes 1 & 2",
    "gameImage": "https://cf.geekdo-images.com/CH7U514WgN1EMGFYN63KsQ__thumb/img/dozFHWuJhtY-cK5mmMHMwJLth7w=/fit-in/200x150/filters:strip_icc()/pic5440227.jpg",
    "date": "2022-06-05",
    "durationMinutes": 45,
    "locationId": "loc-8",
    "locationName": "삼동모임",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 81,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-10",
        "name": "로제언니",
        "score": 105,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-11",
        "name": "로제오빠",
        "score": 89,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 88,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-06-05T12:30:01.000Z",
    "updatedAt": "2022-06-05T18:30:26.000Z"
  },
  {
    "id": "play-fbbf894d-fdac-4f8b-85d2-de787886ec11",
    "gameId": "game-24",
    "gameTitleKr": "Dinosaur Island: Rawr 'n Write",
    "gameTitleEn": "Dinosaur Island: Rawr 'n Write",
    "gameImage": "https://cf.geekdo-images.com/xRP9jo5gfwhfFkgxQBgWTw__thumb/img/Ax_lCMYmPvnu1qYP0-nRAjcVBO8=/fit-in/200x150/filters:strip_icc()/pic5622932.png",
    "date": "2022-06-05",
    "durationMinutes": 45,
    "locationId": "loc-8",
    "locationName": "삼동모임",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 139,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-10",
        "name": "로제언니",
        "score": 89,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-11",
        "name": "로제오빠",
        "score": 120,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 91,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-06-05T18:31:28.000Z",
    "updatedAt": "2022-06-05T20:50:22.000Z"
  },
  {
    "id": "play-80f27ab4-eaa7-4b6a-8e86-aa57204d4d03",
    "gameId": "game-12",
    "gameTitleKr": "Carnegie",
    "gameTitleEn": "Carnegie",
    "gameImage": "https://cf.geekdo-images.com/QVmcfAXMs_JTKSDMRb_XBA__thumb/img/5YYI8RIRPJKZucMmKJIWkHvb1HY=/fit-in/200x150/filters:strip_icc()/pic5707830.jpg",
    "date": "2022-06-06",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 138,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 85,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 121,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 97,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2022-06-06T12:19:57.000Z",
    "updatedAt": "2022-06-06T12:20:24.000Z"
  },
  {
    "id": "play-4cfa0442-ae34-469b-b6b6-2383163b143a",
    "gameId": "game-5",
    "gameTitleKr": "Azul",
    "gameTitleEn": "Azul",
    "gameImage": "https://cf.geekdo-images.com/tz19PfklMdAdjxV9WArraA__thumb/img/debo694HgBaIBeNGyxu1ELUbQGA=/fit-in/200x150/filters:strip_icc()/pic3718275.jpg",
    "date": "2022-06-06",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 63,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 40,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 33,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 49,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-06-06T13:04:48.000Z",
    "updatedAt": "2022-06-06T13:05:14.000Z"
  },
  {
    "id": "play-4b255b8a-b7b6-4587-a213-3d05a88311f2",
    "gameId": "game-58",
    "gameTitleKr": "Spirit Island",
    "gameTitleEn": "Spirit Island",
    "gameImage": "https://cf.geekdo-images.com/a13ieMPP2s0KEaKNYmtH5w__thumb/img/SKiHQ4zAj8uVdtwxOYKIveY9jCo=/fit-in/200x150/filters:strip_icc()/pic3615739.png",
    "date": "2022-06-06",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-06-06T15:28:52.000Z",
    "updatedAt": "2022-06-06T15:29:02.000Z"
  },
  {
    "id": "play-e7555cbf-bad3-4e49-92d2-0706aab491c7",
    "gameId": "game-44",
    "gameTitleKr": "Perfumery",
    "gameTitleEn": "Perfumery",
    "gameImage": "https://cf.geekdo-images.com/tKxLWf24e1OumRtz9Pg6oQ__thumb/img/PLhA6LEAuS-PhD1MdGa0bX4hhl0=/fit-in/200x150/filters:strip_icc()/pic5965937.jpg",
    "date": "2022-06-06",
    "durationMinutes": 109,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 41,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 54,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 60,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-06-06T16:08:27.000Z",
    "updatedAt": "2022-06-06T17:56:49.000Z"
  },
  {
    "id": "play-1a5e5506-6cbf-4f8c-b0dd-0c08dec133a0",
    "gameId": "game-46",
    "gameTitleKr": "Photosynthesis",
    "gameTitleEn": "Photosynthesis",
    "gameImage": "https://cf.geekdo-images.com/HhkYuVxMy-XrRCBWmZ78Eg__thumb/img/eVdvmMALg8vjPr6eDoj-mqvDbUc=/fit-in/200x150/filters:strip_icc()/pic3364832.jpg",
    "date": "2022-06-06",
    "durationMinutes": 45,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 72,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 74,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 78,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2022-06-06T18:26:44.000Z",
    "updatedAt": "2022-06-06T19:22:13.000Z"
  },
  {
    "id": "play-f9066149-78e5-4571-95e8-465476f3d822",
    "gameId": "game-185",
    "gameTitleKr": "타반누시: 우르의 건축가들",
    "gameTitleEn": "타반누시: 우르의 건축가들",
    "gameImage": "https://cf.geekdo-images.com/0WmXXnvravcDiiQvJum0xA__thumb/img/3x8ADI1ZjsvXVziRdeGFOWLbZJ0=/fit-in/200x150/filters:strip_icc()/pic6428410.jpg",
    "date": "2023-04-15",
    "durationMinutes": 45,
    "playerScores": [],
    "createdAt": "2023-04-15T21:53:18.000Z",
    "updatedAt": "2023-04-15T21:54:26.000Z"
  },
  {
    "id": "play-4ece4041-a026-42cf-b284-9a2ce9eeb5a0",
    "gameId": "game-186",
    "gameTitleKr": "케일러스 1303",
    "gameTitleEn": "케일러스 1303",
    "gameImage": "https://cf.geekdo-images.com/AmDxG1Bbkr4cNC2d8XO-7A__thumb/img/MZ0JIjoGOhvDb8fG1IO8hn03768=/fit-in/200x150/filters:strip_icc()/pic4978911.jpg",
    "date": "2023-04-15",
    "durationMinutes": 45,
    "playerScores": [],
    "createdAt": "2023-04-15T21:55:17.000Z",
    "updatedAt": "2023-04-15T21:55:50.000Z"
  },
  {
    "id": "play-2a8a9c03-a536-47f3-82c7-8685024d53fc",
    "gameId": "game-189",
    "gameTitleKr": "Darwin's Journey",
    "gameTitleEn": "Darwin's Journey",
    "gameImage": "https://cf.geekdo-images.com/-A_ABjMw4PdoAZrH-FjiiA__thumb/img/_rJRtHzqatLg9OQM0x1UaC1cRGY=/fit-in/200x150/filters:strip_icc()/pic5726930.png",
    "date": "2023-07-02",
    "durationMinutes": 214,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 99,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 139,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 124,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-32",
        "name": "이상민",
        "score": 163,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2023-07-02T10:22:40.000Z",
    "updatedAt": "2023-07-02T13:57:44.000Z"
  },
  {
    "id": "play-5f2e1368-d9be-439b-acbe-ffaf7abcd631",
    "gameId": "game-40",
    "gameTitleKr": "Mysthea",
    "gameTitleEn": "Mysthea",
    "gameImage": "https://cf.geekdo-images.com/jfk-kD0mrLQ6XEKQfO5TuQ__thumb/img/tU3byM579bW1HtseUzW1IWtxmjo=/fit-in/200x150/filters:strip_icc()/pic3980663.png",
    "date": "2023-07-02",
    "durationMinutes": 222,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 183,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 143,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 182,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-32",
        "name": "이상민",
        "score": 136,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2023-07-02T15:44:08.000Z",
    "updatedAt": "2023-07-02T19:25:25.000Z"
  },
  {
    "id": "play-6c11cdc9-34a2-4bea-8e71-311fa7b68683",
    "gameId": "game-189",
    "gameTitleKr": "Darwin's Journey",
    "gameTitleEn": "Darwin's Journey",
    "gameImage": "https://cf.geekdo-images.com/-A_ABjMw4PdoAZrH-FjiiA__thumb/img/_rJRtHzqatLg9OQM0x1UaC1cRGY=/fit-in/200x150/filters:strip_icc()/pic5726930.png",
    "date": "2023-07-09",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 151,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 132,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 156,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2023-07-09T18:04:47.000Z",
    "updatedAt": "2023-07-09T18:05:38.000Z"
  },
  {
    "id": "play-7c158db1-969f-4576-a7bb-7b352e10c13a",
    "gameId": "game-190",
    "gameTitleKr": "Rallyman: GT",
    "gameTitleEn": "Rallyman: GT",
    "gameImage": "https://cf.geekdo-images.com/kbM9yrDsWSfN7O054urxlA__thumb/img/x6YrgrrpBJ-K3oYRYjv1BTf5tWQ=/fit-in/200x150/filters:strip_icc()/pic4350196.jpg",
    "date": "2023-07-09",
    "durationMinutes": 18,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 3,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 1,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2023-07-09T18:05:43.000Z",
    "updatedAt": "2023-07-09T18:23:51.000Z"
  },
  {
    "id": "play-3e155262-804f-4cab-bdc3-db42eb207c52",
    "gameId": "game-191",
    "gameTitleKr": "Through the Ages: A New Story of Civilization",
    "gameTitleEn": "Through the Ages: A New Story of Civilization",
    "gameImage": "https://cf.geekdo-images.com/fVwPntkJKgaEo0rIC0RwpA__thumb/img/31usGlzlBReEFf60bcgbvDTjwCg=/fit-in/200x150/filters:strip_icc()/pic2663291.jpg",
    "date": "2023-09-09",
    "durationMinutes": 349,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 300,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 200,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 0,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2023-09-09T11:08:39.000Z",
    "updatedAt": "2023-09-09T17:29:56.000Z"
  },
  {
    "id": "play-9b7b3a05-4557-453c-bc19-f71c289d62d2",
    "gameId": "game-202",
    "gameTitleKr": "Ham's Sandwich Shop",
    "gameTitleEn": "Ham's Sandwich Shop",
    "gameImage": "https://cf.geekdo-images.com/UID0grA6WNdiSvlWR2jU-A__thumb/img/FDJ2WR9oqx0ae6qkNSV85DiyNbs=/fit-in/200x150/filters:strip_icc()/pic7336325.jpg",
    "date": "2024-03-10",
    "durationMinutes": 19,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-54",
        "name": "민경",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-03-10T10:37:35.000Z",
    "updatedAt": "2024-03-10T10:56:11.000Z"
  },
  {
    "id": "play-e72427b4-5904-4431-ba6e-7c4a075bd0ac",
    "gameId": "game-203",
    "gameTitleKr": "Distilled",
    "gameTitleEn": "Distilled",
    "gameImage": "https://cf.geekdo-images.com/8YPBUoAlAvGSfcRTxr7EZQ__thumb/img/JKBgv_MiQOOCmzS4KVzwjPW_yso=/fit-in/200x150/filters:strip_icc()/pic7104213.png",
    "date": "2024-03-10",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 119,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-54",
        "name": "민경",
        "score": 111,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 95,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 85,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-03-10T15:13:57.000Z",
    "updatedAt": "2024-03-10T15:14:20.000Z"
  },
  {
    "id": "play-9db2baed-d0d0-4e1e-8992-bbb9340297b2",
    "gameId": "game-204",
    "gameTitleKr": "Distilled: Africa & Middle East Expansion",
    "gameTitleEn": "Distilled: Africa & Middle East Expansion",
    "gameImage": "https://cf.geekdo-images.com/SwUK0Xe9k7iH_8b07Yx-fQ__thumb/img/CXaBp4-84doNpO2Mpxbvdl8EKm8=/fit-in/200x150/filters:strip_icc()/pic7104218.png",
    "date": "2024-03-10",
    "durationMinutes": 45,
    "playerScores": [],
    "createdAt": "2024-03-10T15:39:53.000Z",
    "updatedAt": "2024-03-10T15:39:56.000Z"
  },
  {
    "id": "play-36808260-c3ab-4206-a504-e11c21d30c41",
    "gameId": "game-191",
    "gameTitleKr": "Through the Ages: A New Story of Civilization",
    "gameTitleEn": "Through the Ages: A New Story of Civilization",
    "gameImage": "https://cf.geekdo-images.com/fVwPntkJKgaEo0rIC0RwpA__thumb/img/31usGlzlBReEFf60bcgbvDTjwCg=/fit-in/200x150/filters:strip_icc()/pic2663291.jpg",
    "date": "2024-03-10",
    "durationMinutes": 408,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-54",
        "name": "민경",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-03-10T16:33:08.000Z",
    "updatedAt": "2024-03-10T23:20:22.000Z"
  },
  {
    "id": "play-06da8b09-8b5f-4809-8803-5f2a3b7d35d8",
    "gameId": "game-84",
    "gameTitleKr": "Tiny Epic Dungeons",
    "gameTitleEn": "Tiny Epic Dungeons",
    "gameImage": "https://cf.geekdo-images.com/rDOnDFAwGXi_fVsfp-ZCqw__thumb/img/azj8SnpTtQHp1C7W1QoO8y9yyys=/fit-in/200x150/filters:strip_icc()/pic6029065.jpg",
    "date": "2024-03-16",
    "durationMinutes": 67,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-03-16T14:20:26.000Z",
    "updatedAt": "2024-03-16T15:26:46.000Z"
  },
  {
    "id": "play-b8819e2f-0304-42bb-90be-22768e6f3ab2",
    "gameId": "game-191",
    "gameTitleKr": "Through the Ages: A New Story of Civilization",
    "gameTitleEn": "Through the Ages: A New Story of Civilization",
    "gameImage": "https://cf.geekdo-images.com/fVwPntkJKgaEo0rIC0RwpA__thumb/img/31usGlzlBReEFf60bcgbvDTjwCg=/fit-in/200x150/filters:strip_icc()/pic2663291.jpg",
    "date": "2024-03-16",
    "durationMinutes": 251,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 140,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 75,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 181,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-03-16T15:26:51.000Z",
    "updatedAt": "2024-03-16T19:37:03.000Z"
  },
  {
    "id": "play-e038a583-6da4-4a0a-8081-da23367f11c6",
    "gameId": "game-139",
    "gameTitleKr": "Dune: Imperium",
    "gameTitleEn": "Dune: Imperium",
    "gameImage": "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__thumb/img/JGgY-nBmkyB8WRp8vcoBLlNMQ5U=/fit-in/200x150/filters:strip_icc()/pic5666597.jpg",
    "date": "2024-03-16",
    "durationMinutes": 118,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 11,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 6,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-03-16T20:00:33.000Z",
    "updatedAt": "2024-03-16T21:58:08.000Z"
  },
  {
    "id": "play-cfd9e18a-01c0-4bdd-a967-91a40ae2e567",
    "gameId": "game-206",
    "gameTitleKr": "Arborea",
    "gameTitleEn": "Arborea",
    "gameImage": "https://cf.geekdo-images.com/KHT8Ex0wvRs5wAWPNo3xNg__thumb/img/3RNpeYrdE_ns9Q9MEJgjks73ESg=/fit-in/200x150/filters:strip_icc()/pic7230067.png",
    "date": "2024-04-10",
    "durationMinutes": 229,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 339,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 188,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 256,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 304,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-04-10T11:55:47.000Z",
    "updatedAt": "2024-04-10T15:44:08.000Z"
  },
  {
    "id": "play-3ad18f53-9584-484f-bcc3-dc5c2df9805e",
    "gameId": "game-207",
    "gameTitleKr": "Isle of Skye: Big Box",
    "gameTitleEn": "Isle of Skye: Big Box",
    "gameImage": "https://cf.geekdo-images.com/yppfyHm2fcjPnEE3JPma4g__thumb/img/zoIlkS-6YRd7iSgNWBS3EEiK7QU=/fit-in/200x150/filters:strip_icc()/pic7244974.jpg",
    "date": "2024-04-10",
    "durationMinutes": 9,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 84,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 29,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 64,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 54,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-04-10T16:49:12.000Z",
    "updatedAt": "2024-04-10T16:57:44.000Z"
  },
  {
    "id": "play-9062158f-206d-4873-97c6-e277c6b63079",
    "gameId": "game-208",
    "gameTitleKr": "Heat: Pedal to the Metal",
    "gameTitleEn": "Heat: Pedal to the Metal",
    "gameImage": "https://cf.geekdo-images.com/-vOrd4bOspibyohYExLqWg__thumb/img/2GbaKvYOzWIxfgbYTk2R9puiyzo=/fit-in/200x150/filters:strip_icc()/pic6940449.png",
    "date": "2024-04-10",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 1,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-04-10T18:07:00.000Z",
    "updatedAt": "2024-04-10T18:07:15.000Z"
  },
  {
    "id": "play-beb82a5a-1c52-49d8-bca9-e3fa9959cf20",
    "gameId": "game-195",
    "gameTitleKr": "Amritsar: The Golden Temple",
    "gameTitleEn": "Amritsar: The Golden Temple",
    "gameImage": "https://cf.geekdo-images.com/GF21q3A5-3xNClH8MiwAbg__thumb/img/zmyjCI6wyL92DqszJC4FI_s2syo=/fit-in/200x150/filters:strip_icc()/pic7526676.jpg",
    "date": "2024-04-13",
    "durationMinutes": 224,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 84,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 101,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-42",
        "name": "지원",
        "score": 89,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 98,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-04-13T11:39:33.000Z",
    "updatedAt": "2024-04-13T15:23:32.000Z"
  },
  {
    "id": "play-8cfe9a05-ab69-4fb7-b861-08cbbefd8cac",
    "gameId": "game-211",
    "gameTitleKr": "Harmonies",
    "gameTitleEn": "Harmonies",
    "gameImage": "https://cf.geekdo-images.com/A_XP2_VN3ugyqPhezowB_w__thumb/img/ln5eKAzhse2PIHvWn7bu-jiW_uk=/fit-in/200x150/filters:strip_icc()/pic8026369.png",
    "date": "2024-04-13",
    "durationMinutes": 41,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 85,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 93,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-42",
        "name": "지원",
        "score": 673,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 93,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-04-13T15:47:13.000Z",
    "updatedAt": "2024-04-13T16:28:08.000Z"
  },
  {
    "id": "play-b10352f8-dc7e-4431-90cd-5b22724ed28f",
    "gameId": "game-166",
    "gameTitleKr": "Wingspan",
    "gameTitleEn": "Wingspan",
    "gameImage": "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__thumb/img/VNToqgS2-pOGU6MuvIkMPKn_y-s=/fit-in/200x150/filters:strip_icc()/pic4458123.jpg",
    "date": "2024-04-13",
    "durationMinutes": 98,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 86,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 80,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-42",
        "name": "지원",
        "score": 72,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 90,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-04-13T17:32:37.000Z",
    "updatedAt": "2024-04-13T19:09:44.000Z"
  },
  {
    "id": "play-85a6204d-a8e1-4213-a49a-6302f8744c73",
    "gameId": "game-206",
    "gameTitleKr": "Arborea",
    "gameTitleEn": "Arborea",
    "gameImage": "https://cf.geekdo-images.com/KHT8Ex0wvRs5wAWPNo3xNg__thumb/img/3RNpeYrdE_ns9Q9MEJgjks73ESg=/fit-in/200x150/filters:strip_icc()/pic7230067.png",
    "date": "2024-04-20",
    "durationMinutes": 196,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 330,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 328,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 142,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-04-20T12:04:45.000Z",
    "updatedAt": "2024-04-20T15:19:55.000Z"
  },
  {
    "id": "play-91e8a1d1-cc39-4421-aef2-ce0e36cd0766",
    "gameId": "game-213",
    "gameTitleKr": "Run, Mule, Run",
    "gameTitleEn": "Run, Mule, Run",
    "date": "2024-04-20",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 0,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 4,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-04-20T15:48:05.000Z",
    "updatedAt": "2024-04-20T15:49:08.000Z"
  },
  {
    "id": "play-c7d74513-06b4-4e6e-87ea-24f1f2fe7dd8",
    "gameId": "game-213",
    "gameTitleKr": "Run, Mule, Run",
    "gameTitleEn": "Run, Mule, Run",
    "date": "2024-04-20",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 4,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 1,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-04-20T16:07:40.000Z",
    "updatedAt": "2024-04-20T16:08:13.000Z"
  },
  {
    "id": "play-d49d0317-7940-434a-8942-c9a81006402b",
    "gameId": "game-213",
    "gameTitleKr": "Run, Mule, Run",
    "gameTitleEn": "Run, Mule, Run",
    "date": "2024-04-20",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 1,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 4,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-04-20T16:23:05.000Z",
    "updatedAt": "2024-04-20T16:23:23.000Z"
  },
  {
    "id": "play-e2fb06f4-2735-4e38-b5c1-57fd14c51036",
    "gameId": "game-214",
    "gameTitleKr": "스플렌더: Pokémon (Splendor: Pokémon)",
    "gameTitleEn": "스플렌더: Pokémon (Splendor: Pokémon)",
    "gameImage": "https://cf.geekdo-images.com/o6HpiLCBBFvc7XvBv7DEig__thumb/img/cP3zFhQXbpOo4jMbXWgPShAdn4E=/fit-in/200x150/filters:strip_icc()/pic7902371.jpg",
    "date": "2024-04-20",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 18,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 11,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 12,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-04-20T16:58:57.000Z",
    "updatedAt": "2024-04-20T16:59:29.000Z"
  },
  {
    "id": "play-3d8a431a-688f-4ed1-b88b-edbce43e554c",
    "gameId": "game-215",
    "gameTitleKr": "BOOoop.",
    "gameTitleEn": "BOOoop.",
    "gameImage": "https://cf.geekdo-images.com/8BBZ9D9xq4hxgiHoF6IfQw__thumb/img/QG4fEdIVRuf1mOo56TX7rkMbruU=/fit-in/200x150/filters:strip_icc()/pic7442719.png",
    "date": "2024-04-20",
    "durationMinutes": 22,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-04-20T17:46:59.000Z",
    "updatedAt": "2024-04-20T18:08:19.000Z"
  },
  {
    "id": "play-e5e8f798-0394-4914-91de-c284a8ba941a",
    "gameId": "game-215",
    "gameTitleKr": "BOOoop.",
    "gameTitleEn": "BOOoop.",
    "gameImage": "https://cf.geekdo-images.com/8BBZ9D9xq4hxgiHoF6IfQw__thumb/img/QG4fEdIVRuf1mOo56TX7rkMbruU=/fit-in/200x150/filters:strip_icc()/pic7442719.png",
    "date": "2024-04-20",
    "durationMinutes": 33,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-04-20T18:08:26.000Z",
    "updatedAt": "2024-04-20T18:40:41.000Z"
  },
  {
    "id": "play-80faa27f-3090-4e06-ac47-d39965b45ee9",
    "gameId": "game-216",
    "gameTitleKr": "The Fox Experiment",
    "gameTitleEn": "The Fox Experiment",
    "gameImage": "https://cf.geekdo-images.com/wzvBp42eSal9UrL2EgOjyw__thumb/img/EVGDAoyPls95_nGayGjGLChQ0GM=/fit-in/200x150/filters:strip_icc()/pic7557488.png",
    "date": "2024-04-22",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 84,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 61,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-04-22T20:26:16.000Z",
    "updatedAt": "2024-04-22T20:26:48.000Z"
  },
  {
    "id": "play-54c61c78-376a-4415-b539-0f349e1e5b12",
    "gameId": "game-166",
    "gameTitleKr": "Wingspan",
    "gameTitleEn": "Wingspan",
    "gameImage": "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__thumb/img/VNToqgS2-pOGU6MuvIkMPKn_y-s=/fit-in/200x150/filters:strip_icc()/pic4458123.jpg",
    "date": "2024-04-27",
    "durationMinutes": 146,
    "locationId": "loc-5",
    "locationName": "동욱형집",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 79,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-4",
        "name": "나율",
        "score": 80,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 69,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 54,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-47",
        "name": "찬우",
        "score": 80,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-04-27T14:34:02.000Z",
    "updatedAt": "2024-04-27T16:59:09.000Z"
  },
  {
    "id": "play-b4f2d9ef-b6ca-4271-acc4-2734225c193d",
    "gameId": "game-131",
    "gameTitleKr": "Crusaders: Thy Will Be Done",
    "gameTitleEn": "Crusaders: Thy Will Be Done",
    "gameImage": "https://cf.geekdo-images.com/XkWDxerdbSpZ1UtxWv-a7Q__thumb/img/wV7u4aTmFP14tdzo1EUH9LvsQZ4=/fit-in/200x150/filters:strip_icc()/pic6740264.jpg",
    "date": "2024-05-01",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 118,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 65,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 71,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-05-01T14:15:34.000Z",
    "updatedAt": "2024-05-01T14:16:16.000Z"
  },
  {
    "id": "play-741bc548-6d2a-4fcb-baae-ff183f08ae29",
    "gameId": "game-189",
    "gameTitleKr": "Darwin's Journey",
    "gameTitleEn": "Darwin's Journey",
    "gameImage": "https://cf.geekdo-images.com/-A_ABjMw4PdoAZrH-FjiiA__thumb/img/_rJRtHzqatLg9OQM0x1UaC1cRGY=/fit-in/200x150/filters:strip_icc()/pic5726930.png",
    "date": "2024-05-01",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 160,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 145,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 223,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-05-01T17:27:53.000Z",
    "updatedAt": "2024-05-01T17:28:47.000Z"
  },
  {
    "id": "play-b172006f-9052-44b9-8f17-c9d7cf49289e",
    "gameId": "game-217",
    "gameTitleKr": "Thrill Bomb",
    "gameTitleEn": "Beat the 8 Ball",
    "gameImage": "https://cf.geekdo-images.com/GJd_qJDrgtEbTiFzKKIoOg__thumb/img/cBTR1dbvjUVIBDL9sUFfap8GVY8=/fit-in/200x150/filters:strip_icc()/pic7542345.jpg",
    "date": "2024-05-01",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-05-01T18:03:06.000Z",
    "updatedAt": "2024-05-01T18:03:23.000Z"
  },
  {
    "id": "play-9b30c4cb-19fd-4395-a52e-38de2602326e",
    "gameId": "game-218",
    "gameTitleKr": "Millimemory",
    "gameTitleEn": "Millimemory",
    "gameImage": "https://cf.geekdo-images.com/WF1umNtdqTPJm5Awfu5paA__thumb/img/Mo0GyDJkP8bqdXOznFAylGxeQJ4=/fit-in/200x150/filters:strip_icc()/pic7736468.png",
    "date": "2024-05-05",
    "durationMinutes": 3,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-55",
        "name": "랑매",
        "score": 10,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 8,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 8,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-49",
        "name": "한",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-05-05T13:04:54.000Z",
    "updatedAt": "2024-05-05T13:07:47.000Z"
  },
  {
    "id": "play-93614403-70a0-46ac-aa82-9e3656001170",
    "gameId": "game-219",
    "gameTitleKr": "Mind MGMT: The Psychic Espionage “Game.”",
    "gameTitleEn": "Mind MGMT: The Psychic Espionage “Game.”",
    "gameImage": "https://cf.geekdo-images.com/hYP-VIJGRFR8yB78-UN7Rg__thumb/img/e0Yk_RzMK0b7jwcoR96UeJpjy3c=/fit-in/200x150/filters:strip_icc()/pic5154610.jpg",
    "date": "2024-05-05",
    "durationMinutes": 26,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "role": "Recruiter",
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "role": "Rogue Agent",
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "winner": false,
        "startPlayer": false,
        "role": "Rogue Agent",
        "newPlayer": true
      }
    ],
    "createdAt": "2024-05-05T14:33:46.000Z",
    "updatedAt": "2024-05-05T14:59:18.000Z"
  },
  {
    "id": "play-db155fb4-6162-495c-adbc-298d9d669a93",
    "gameId": "game-220",
    "gameTitleKr": "The Voyages of Marco Polo",
    "gameTitleEn": "The Voyages of Marco Polo",
    "gameImage": "https://cf.geekdo-images.com/n1G7_aWToLAAB7Mqt8iwyA__thumb/img/qfEgrXBN5L1EeMQ91siw6r_OoL4=/fit-in/200x150/filters:strip_icc()/pic2461346.png",
    "date": "2024-05-05",
    "durationMinutes": 140,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 28,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 55,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-48",
        "name": "토리",
        "score": 86,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-49",
        "name": "한",
        "score": 41,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-05-05T19:13:11.000Z",
    "updatedAt": "2024-05-05T21:32:29.000Z"
  },
  {
    "id": "play-d71d3d5a-50c0-48ea-99b6-67f44d61225f",
    "gameId": "game-30",
    "gameTitleKr": "Foundations of Rome",
    "gameTitleEn": "Foundations of Rome",
    "gameImage": "https://cf.geekdo-images.com/lRB91NF3OPeSff2o17NX3Q__thumb/img/CWAVZWfBegleQWJVhkehmDmxnbU=/fit-in/200x150/filters:strip_icc()/pic6706206.jpg",
    "date": "2024-06-01",
    "durationMinutes": 111,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 99,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 121,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 126,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 101,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 115,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-06-01T13:36:40.000Z",
    "updatedAt": "2024-06-01T15:27:25.000Z"
  },
  {
    "id": "play-ce336c8e-7f2d-466f-a4cc-84815915a362",
    "gameId": "game-125",
    "gameTitleKr": "Twilight Imperium: Fourth Edition",
    "gameTitleEn": "Twilight Imperium: Fourth Edition",
    "gameImage": "https://cf.geekdo-images.com/_Ppn5lssO5OaildSE-FgFA__thumb/img/lfEukJE0JsoZZObaF9K9YnFp62E=/fit-in/200x150/filters:strip_icc()/pic3727516.jpg",
    "date": "2024-06-06",
    "durationMinutes": 413,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-40",
        "name": "제이든",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-48",
        "name": "토리",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-06-06T12:11:08.000Z",
    "updatedAt": "2024-06-06T19:03:20.000Z"
  },
  {
    "id": "play-8d53e625-11a0-4e74-8901-559588983585",
    "gameId": "game-196",
    "gameTitleKr": "The White Castle",
    "gameTitleEn": "The White Castle",
    "gameImage": "https://cf.geekdo-images.com/qXT1U-nFh9PE8ujfdmI7dA__thumb/img/ru1l95gdKNXSsByDglE9Xxgu0kE=/fit-in/200x150/filters:strip_icc()/pic7754663.jpg",
    "date": "2024-06-08",
    "durationMinutes": 75,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 59,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 62,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 60,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-06-08T10:33:48.000Z",
    "updatedAt": "2024-06-08T11:47:57.000Z"
  },
  {
    "id": "play-f756d2e2-41cd-4e79-941f-6283f44d022d",
    "gameId": "game-221",
    "gameTitleKr": "Dune: Imperium – Uprising",
    "gameTitleEn": "Dune: Imperium – Uprising",
    "gameImage": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__thumb/img/H6qmxJrRFjtOAPZOfDoZ480-46I=/fit-in/200x150/filters:strip_icc()/pic7664424.jpg",
    "date": "2024-06-08",
    "durationMinutes": 29,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 10,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 12,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 7,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 10,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-06-08T15:36:36.000Z",
    "updatedAt": "2024-06-08T16:05:22.000Z"
  },
  {
    "id": "play-2b1daa66-012d-4988-b2bb-11a5ea3142a0",
    "gameId": "game-222",
    "gameTitleKr": "Give Me The Treasure",
    "gameTitleEn": "Give Me The Treasure",
    "gameImage": "https://cf.geekdo-images.com/qMmBBSspOLrGA7ixttBqaA__thumb/img/23wvWoEtk0Slw8dJUcCuUsY0ndg=/fit-in/200x150/filters:strip_icc()/pic7960998.jpg",
    "date": "2024-06-08",
    "durationMinutes": 5,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 30,
        "winner": true,
        "startPlayer": false,
        "role": "1 Team",
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 27,
        "winner": false,
        "startPlayer": false,
        "role": "2 Team",
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 27,
        "winner": false,
        "startPlayer": false,
        "role": "2 Team",
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 30,
        "winner": true,
        "startPlayer": false,
        "role": "1 Team",
        "newPlayer": true
      }
    ],
    "createdAt": "2024-06-08T16:39:19.000Z",
    "updatedAt": "2024-06-08T17:07:34.000Z"
  },
  {
    "id": "play-b8940fa3-9597-4410-87e7-2dfa91ff1caf",
    "gameId": "game-164",
    "gameTitleKr": "Dead Reckoning",
    "gameTitleEn": "Dead Reckoning",
    "gameImage": "https://cf.geekdo-images.com/4q_5Ox7oYtK3Ma73iRtfAg__thumb/img/TU4UOoot_zqqUwCEmE_wFnLRRCY=/fit-in/200x150/filters:strip_icc()/pic4650725.jpg",
    "date": "2024-06-08",
    "durationMinutes": 267,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 112,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 69,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 67,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 78,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-06-08T17:11:15.000Z",
    "updatedAt": "2024-06-08T21:37:18.000Z"
  },
  {
    "id": "play-555ec176-be0e-48c1-b9bc-5ede219d520c",
    "gameId": "game-225",
    "gameTitleKr": "Mysthea: The Fall",
    "gameTitleEn": "Mysthea: The Fall",
    "gameImage": "https://cf.geekdo-images.com/qXkWezHpvu8AZbhWzJrlfw__thumb/img/80tqFHQjiBvJ824I84is-fACt7A=/fit-in/200x150/filters:strip_icc()/pic4683829.jpg",
    "date": "2024-06-15",
    "durationMinutes": 108,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-06-15T13:50:34.000Z",
    "updatedAt": "2024-06-15T15:37:43.000Z"
  },
  {
    "id": "play-1f2aa97b-e70f-4db3-a4eb-6795c056e0c7",
    "gameId": "game-164",
    "gameTitleKr": "Dead Reckoning",
    "gameTitleEn": "Dead Reckoning",
    "gameImage": "https://cf.geekdo-images.com/4q_5Ox7oYtK3Ma73iRtfAg__thumb/img/TU4UOoot_zqqUwCEmE_wFnLRRCY=/fit-in/200x150/filters:strip_icc()/pic4650725.jpg",
    "date": "2024-06-15",
    "durationMinutes": 153,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 77,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 95,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 79,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-06-15T16:08:46.000Z",
    "updatedAt": "2024-06-15T18:41:06.000Z"
  },
  {
    "id": "play-854941b2-f636-4383-b0f7-b5144bad483c",
    "gameId": "game-213",
    "gameTitleKr": "Run, Mule, Run",
    "gameTitleEn": "Run, Mule, Run",
    "date": "2024-06-22",
    "durationMinutes": 21,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 5,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 5,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-06-22T11:19:39.000Z",
    "updatedAt": "2024-06-22T11:39:59.000Z"
  },
  {
    "id": "play-471ef0ce-1280-475e-bded-24e94b8829f0",
    "gameId": "game-201",
    "gameTitleKr": "Apiary",
    "gameTitleEn": "Apiary",
    "gameImage": "https://cf.geekdo-images.com/dT1vJbUizZFmJAphKg-byA__thumb/img/X3_vUM9wGDabo0Goc3iCZE7IfWM=/fit-in/200x150/filters:strip_icc()/pic7720813.png",
    "date": "2024-06-22",
    "durationMinutes": 61,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 61,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 66,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 63,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 66,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-06-22T13:33:31.000Z",
    "updatedAt": "2024-06-22T14:33:50.000Z"
  },
  {
    "id": "play-eda68a7f-8dab-4927-86bd-148b655b82a5",
    "gameId": "game-195",
    "gameTitleKr": "Amritsar: The Golden Temple",
    "gameTitleEn": "Amritsar: The Golden Temple",
    "gameImage": "https://cf.geekdo-images.com/GF21q3A5-3xNClH8MiwAbg__thumb/img/zmyjCI6wyL92DqszJC4FI_s2syo=/fit-in/200x150/filters:strip_icc()/pic7526676.jpg",
    "date": "2024-06-22",
    "durationMinutes": 129,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 108,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 84,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 73,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 95,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-06-22T15:26:46.000Z",
    "updatedAt": "2024-06-22T17:35:33.000Z"
  },
  {
    "id": "play-5c9b830a-8245-4e17-919b-d60b9ce169a9",
    "gameId": "game-226",
    "gameTitleKr": "Exploding Kittens: Good Vs Evil",
    "gameTitleEn": "Exploding Kittens: Good Vs Evil",
    "gameImage": "https://cf.geekdo-images.com/VwOSk5hqgFJLDPPbX0lqDQ__thumb/img/BN28qTWphcdrkMTx-fcCYRJLS5M=/fit-in/200x150/filters:strip_icc()/pic7633899.png",
    "date": "2024-06-22",
    "durationMinutes": 45,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-06-22T18:15:30.000Z",
    "updatedAt": "2024-06-22T18:16:29.000Z"
  },
  {
    "id": "play-d503c6f5-e21c-4448-a8be-fbd55c90a822",
    "gameId": "game-226",
    "gameTitleKr": "Exploding Kittens: Good Vs Evil",
    "gameTitleEn": "Exploding Kittens: Good Vs Evil",
    "gameImage": "https://cf.geekdo-images.com/VwOSk5hqgFJLDPPbX0lqDQ__thumb/img/BN28qTWphcdrkMTx-fcCYRJLS5M=/fit-in/200x150/filters:strip_icc()/pic7633899.png",
    "date": "2024-06-22",
    "durationMinutes": 45,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-06-22T18:17:43.000Z",
    "updatedAt": "2024-06-22T18:17:54.000Z"
  },
  {
    "id": "play-de7a032e-4d96-4048-bbf6-4e5c3f9b6a94",
    "gameId": "game-227",
    "gameTitleKr": "Pig Pile",
    "gameTitleEn": "Pig Pile",
    "gameImage": "https://cf.geekdo-images.com/laH1FJu03n3IlqQjBPiI9w__thumb/img/Z7DLe4zyxdqmnH2jDstR2hOz3MA=/fit-in/200x150/filters:strip_icc()/pic1937580.jpg",
    "date": "2024-06-22",
    "durationMinutes": 32,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 6,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-06-22T18:18:00.000Z",
    "updatedAt": "2024-06-22T18:49:32.000Z"
  },
  {
    "id": "play-e24a5f91-6aef-4435-9a33-ebc77cfcc01e",
    "gameId": "game-195",
    "gameTitleKr": "Amritsar: The Golden Temple",
    "gameTitleEn": "Amritsar: The Golden Temple",
    "gameImage": "https://cf.geekdo-images.com/GF21q3A5-3xNClH8MiwAbg__thumb/img/zmyjCI6wyL92DqszJC4FI_s2syo=/fit-in/200x150/filters:strip_icc()/pic7526676.jpg",
    "date": "2024-06-30",
    "durationMinutes": 107,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 92,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 78,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 85,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-06-30T13:44:06.000Z",
    "updatedAt": "2024-06-30T15:30:25.000Z"
  },
  {
    "id": "play-a8ca0b69-d163-4d4b-9e4b-bcaa9f5abc02",
    "gameId": "game-221",
    "gameTitleKr": "Dune: Imperium – Uprising",
    "gameTitleEn": "Dune: Imperium – Uprising",
    "gameImage": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__thumb/img/H6qmxJrRFjtOAPZOfDoZ480-46I=/fit-in/200x150/filters:strip_icc()/pic7664424.jpg",
    "date": "2024-06-30",
    "durationMinutes": 88,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 11,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-06-30T15:54:33.000Z",
    "updatedAt": "2024-06-30T17:21:37.000Z"
  },
  {
    "id": "play-b36a17bb-2095-4ad2-bd76-b006af789888",
    "gameId": "game-211",
    "gameTitleKr": "Harmonies",
    "gameTitleEn": "Harmonies",
    "gameImage": "https://cf.geekdo-images.com/A_XP2_VN3ugyqPhezowB_w__thumb/img/ln5eKAzhse2PIHvWn7bu-jiW_uk=/fit-in/200x150/filters:strip_icc()/pic8026369.png",
    "date": "2024-07-13",
    "durationMinutes": 49,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 114,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-57",
        "name": "민기",
        "score": 84,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 100,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 105,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-07-13T09:56:31.000Z",
    "updatedAt": "2024-07-13T10:45:14.000Z"
  },
  {
    "id": "play-a72dd7f5-d1d7-42d8-a239-a9ea55b12019",
    "gameId": "game-30",
    "gameTitleKr": "Foundations of Rome",
    "gameTitleEn": "Foundations of Rome",
    "gameImage": "https://cf.geekdo-images.com/lRB91NF3OPeSff2o17NX3Q__thumb/img/CWAVZWfBegleQWJVhkehmDmxnbU=/fit-in/200x150/filters:strip_icc()/pic6706206.jpg",
    "date": "2024-07-13",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 110,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-57",
        "name": "민기",
        "score": 105,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 114,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 109,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-07-13T13:15:02.000Z",
    "updatedAt": "2024-07-13T13:15:26.000Z"
  },
  {
    "id": "play-087585e8-a71f-4912-bd1b-18de24120d82",
    "gameId": "game-228",
    "gameTitleKr": "Stereo Mind",
    "gameTitleEn": "Stereo Mind",
    "gameImage": "https://cf.geekdo-images.com/-1TgU6qGcYIzaNM9I5Mcyw__thumb/img/troHRzUruPqPk0-BQLbh4waCItU=/fit-in/200x150/filters:strip_icc()/pic7029156.jpg",
    "date": "2024-07-13",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-57",
        "name": "민기",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-07-13T13:41:48.000Z",
    "updatedAt": "2024-07-13T13:41:57.000Z"
  },
  {
    "id": "play-7ec26e26-d844-4b57-a34c-ff85d043002c",
    "gameId": "game-221",
    "gameTitleKr": "Dune: Imperium – Uprising",
    "gameTitleEn": "Dune: Imperium – Uprising",
    "gameImage": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__thumb/img/H6qmxJrRFjtOAPZOfDoZ480-46I=/fit-in/200x150/filters:strip_icc()/pic7664424.jpg",
    "date": "2024-07-13",
    "durationMinutes": 142,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 7,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-57",
        "name": "민기",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 10,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-07-13T14:25:19.000Z",
    "updatedAt": "2024-07-13T16:46:23.000Z"
  },
  {
    "id": "play-dfecd414-717f-4f00-8840-e559778e2783",
    "gameId": "game-229",
    "gameTitleKr": "Barcelona",
    "gameTitleEn": "Barcelona",
    "gameImage": "https://cf.geekdo-images.com/clBx1kfB-8OpO86B2-vsgg__thumb/img/8w625ctGlolYNodQdbXJtyOC3wg=/fit-in/200x150/filters:strip_icc()/pic7442376.jpg",
    "date": "2024-07-13",
    "durationMinutes": 149,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 348,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 286,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 285,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-07-13T16:59:18.000Z",
    "updatedAt": "2024-07-13T19:27:27.000Z"
  },
  {
    "id": "play-964b9cee-7f6a-43ac-8929-ec87abbe3709",
    "gameId": "game-230",
    "gameTitleKr": "Faraway",
    "gameTitleEn": "Faraway",
    "gameImage": "https://cf.geekdo-images.com/u1cwi9BWSKsPxSkVO0BzbA__thumb/img/5G45GN8CE7pq38fJMMocmPtV4_U=/fit-in/200x150/filters:strip_icc()/pic7570101.png",
    "date": "2024-07-14",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 81,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 44,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-07-14T16:15:01.000Z",
    "updatedAt": "2024-07-14T16:15:21.000Z"
  },
  {
    "id": "play-ca93d6e9-5ede-4eca-b919-a36b54148856",
    "gameId": "game-230",
    "gameTitleKr": "Faraway",
    "gameTitleEn": "Faraway",
    "gameImage": "https://cf.geekdo-images.com/u1cwi9BWSKsPxSkVO0BzbA__thumb/img/5G45GN8CE7pq38fJMMocmPtV4_U=/fit-in/200x150/filters:strip_icc()/pic7570101.png",
    "date": "2024-07-14",
    "durationMinutes": 15,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 55,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 76,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-07-14T16:15:23.000Z",
    "updatedAt": "2024-07-14T16:29:31.000Z"
  },
  {
    "id": "play-4a003cae-a5ec-44e0-a255-502d09540c50",
    "gameId": "game-230",
    "gameTitleKr": "Faraway",
    "gameTitleEn": "Faraway",
    "gameImage": "https://cf.geekdo-images.com/u1cwi9BWSKsPxSkVO0BzbA__thumb/img/5G45GN8CE7pq38fJMMocmPtV4_U=/fit-in/200x150/filters:strip_icc()/pic7570101.png",
    "date": "2024-07-14",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 76,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 56,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-07-14T16:47:38.000Z",
    "updatedAt": "2024-07-14T16:47:42.000Z"
  },
  {
    "id": "play-5dd055aa-36e1-461f-85ed-da97df9f9fea",
    "gameId": "game-125",
    "gameTitleKr": "Twilight Imperium: Fourth Edition",
    "gameTitleEn": "Twilight Imperium: Fourth Edition",
    "gameImage": "https://cf.geekdo-images.com/_Ppn5lssO5OaildSE-FgFA__thumb/img/lfEukJE0JsoZZObaF9K9YnFp62E=/fit-in/200x150/filters:strip_icc()/pic3727516.jpg",
    "date": "2024-07-20",
    "durationMinutes": 505,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 6,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 10,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-40",
        "name": "제이든",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 7,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-48",
        "name": "토리",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-07-20T17:51:30.000Z",
    "updatedAt": "2024-07-20T20:16:57.000Z"
  },
  {
    "id": "play-2d877584-f0b2-460d-8a27-d643aa2dbc78",
    "gameId": "game-221",
    "gameTitleKr": "Dune: Imperium – Uprising",
    "gameTitleEn": "Dune: Imperium – Uprising",
    "gameImage": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__thumb/img/H6qmxJrRFjtOAPZOfDoZ480-46I=/fit-in/200x150/filters:strip_icc()/pic7664424.jpg",
    "date": "2024-07-21",
    "durationMinutes": 128,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 11,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 8,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-48",
        "name": "토리",
        "score": 6,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-07-21T13:52:32.000Z",
    "updatedAt": "2024-07-21T15:59:41.000Z"
  },
  {
    "id": "play-bfba6db7-b2af-40a4-b55a-4d8d978933ae",
    "gameId": "game-184",
    "gameTitleKr": "Scarface 1920",
    "gameTitleEn": "Scarface 1920",
    "gameImage": "https://cf.geekdo-images.com/b0HXxXK40QsTwSxynD2DDA__thumb/img/dPCm4RXyLyc4kz1m15R5fbko8jM=/fit-in/200x150/filters:strip_icc()/pic5926553.jpg",
    "date": "2024-07-21",
    "durationMinutes": 236,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 211,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-21",
        "name": "신가",
        "score": 36,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 134,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-07-21T17:10:38.000Z",
    "updatedAt": "2024-07-21T21:06:36.000Z"
  },
  {
    "id": "play-f73fdbac-eaa1-43f9-9b7e-813ba710a409",
    "gameId": "game-200",
    "gameTitleKr": "Anunnaki: Dawn of the Gods",
    "gameTitleEn": "Anunnaki: Dawn of the Gods",
    "gameImage": "https://cf.geekdo-images.com/4LzP3k9XhXmkr21w1-fBbg__thumb/img/6Y1_Q1Abt0zvDDBCkIcId3qil5Q=/fit-in/200x150/filters:strip_icc()/pic7812441.png",
    "date": "2024-07-28",
    "durationMinutes": 120,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 78,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 39,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 57,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-07-28T12:01:19.000Z",
    "updatedAt": "2024-07-28T14:00:44.000Z"
  },
  {
    "id": "play-7e738856-9b41-4e86-960a-74e00349d64a",
    "gameId": "game-209",
    "gameTitleKr": "Ryozen",
    "gameTitleEn": "Ryozen",
    "gameImage": "https://cf.geekdo-images.com/zKB3b2eZZW9gSV-EvNQ3kg__thumb/img/YpWpO1J6CS9P9TO8ZbKV97XsQ9w=/fit-in/200x150/filters:strip_icc()/pic6504498.png",
    "date": "2024-07-28",
    "durationMinutes": 107,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 50,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 49,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 66,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 39,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-07-28T15:50:13.000Z",
    "updatedAt": "2024-07-28T20:17:51.000Z"
  },
  {
    "id": "play-75681e4b-d824-41e7-827b-907db1912233",
    "gameId": "game-231",
    "gameTitleKr": "Odin",
    "gameTitleEn": "Odin",
    "gameImage": "https://cf.geekdo-images.com/hh5YOk9OQ3e0uJbMOfvT2g__thumb/img/bYaPoCwSz2lq-tAtb_60fPqiNzA=/fit-in/200x150/filters:strip_icc()/pic7921978.jpg",
    "date": "2024-07-28",
    "durationMinutes": 45,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-07-28T18:11:26.000Z",
    "updatedAt": "2024-07-28T18:21:48.000Z"
  },
  {
    "id": "play-13d0d587-455d-4c45-b288-c29f3edadc3c",
    "gameId": "game-232",
    "gameTitleKr": "Oh Really?",
    "gameTitleEn": "Oh Really?",
    "gameImage": "https://cf.geekdo-images.com/DAHWxwS-BaxCA5c9UV_VwQ__thumb/img/_sCR8vrnoBsIdbQ_7UQC2Wo2yrI=/fit-in/200x150/filters:strip_icc()/pic6858976.png",
    "date": "2024-07-28",
    "durationMinutes": 45,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 22,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 17,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 12,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 16,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-07-28T18:19:55.000Z",
    "updatedAt": "2024-07-28T18:21:22.000Z"
  },
  {
    "id": "play-1ccd1ea0-2284-4c76-a929-009020606a23",
    "gameId": "game-184",
    "gameTitleKr": "Scarface 1920",
    "gameTitleEn": "Scarface 1920",
    "gameImage": "https://cf.geekdo-images.com/b0HXxXK40QsTwSxynD2DDA__thumb/img/dPCm4RXyLyc4kz1m15R5fbko8jM=/fit-in/200x150/filters:strip_icc()/pic5926553.jpg",
    "date": "2024-08-10",
    "durationMinutes": 156,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 149,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 62,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 49,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-08-10T12:05:38.000Z",
    "updatedAt": "2024-08-10T14:41:05.000Z"
  },
  {
    "id": "play-d49817ec-a43c-4789-8450-a8f506395f81",
    "gameId": "game-233",
    "gameTitleKr": "Buffet Boss",
    "gameTitleEn": "Buffet Boss",
    "gameImage": "https://cf.geekdo-images.com/7Mb5W1k3KeOSuFdCp3EqUA__thumb/img/0KVlPAKRu9tApGf1sZ6ZBIk62GA=/fit-in/200x150/filters:strip_icc()/pic7079382.jpg",
    "date": "2024-08-10",
    "durationMinutes": 21,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 25,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 36,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 31,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-10T14:50:07.000Z",
    "updatedAt": "2024-08-10T15:10:39.000Z"
  },
  {
    "id": "play-42dd7c9f-d84c-4aa6-b15b-ace30e48bc56",
    "gameId": "game-221",
    "gameTitleKr": "Dune: Imperium – Uprising",
    "gameTitleEn": "Dune: Imperium – Uprising",
    "gameImage": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__thumb/img/H6qmxJrRFjtOAPZOfDoZ480-46I=/fit-in/200x150/filters:strip_icc()/pic7664424.jpg",
    "date": "2024-08-10",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 12,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-08-10T17:00:58.000Z",
    "updatedAt": "2024-08-10T17:01:12.000Z"
  },
  {
    "id": "play-58a77fcf-38c8-464d-b1b4-979e077fc8d2",
    "gameId": "game-10",
    "gameTitleKr": "Brass: Birmingham",
    "gameTitleEn": "Brass: Birmingham",
    "gameImage": "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__thumb/img/o18rjEemoWaVru9Y2TyPwuIaRfE=/fit-in/200x150/filters:strip_icc()/pic3490053.jpg",
    "date": "2024-08-10",
    "durationMinutes": 6989,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 173,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 152,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 117,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-10T17:00:58.000Z",
    "updatedAt": "2024-08-15T13:29:28.000Z"
  },
  {
    "id": "play-9338963c-d2c9-48d2-9034-be1bc99dcbc3",
    "gameId": "game-235",
    "gameTitleKr": "Coffee Rush: Piece of Cake",
    "gameTitleEn": "Coffee Rush: Piece of Cake",
    "gameImage": "https://cf.geekdo-images.com/AK0XaFXem8Pdeu3dU4kggA__thumb/img/Zms29KxsTwbhSfbAzftb_EPMlIE=/fit-in/200x150/filters:strip_icc()/pic7968971.jpg",
    "date": "2024-08-15",
    "durationMinutes": 162,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 7,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 7,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-15T13:45:04.000Z",
    "updatedAt": "2024-08-15T16:26:15.000Z"
  },
  {
    "id": "play-e2bdeb92-0271-4d28-b390-9e7b147dba0a",
    "gameId": "game-236",
    "gameTitleKr": "Shogun no Katana",
    "gameTitleEn": "Shogun no Katana",
    "gameImage": "https://cf.geekdo-images.com/XdXFnbesrDbKVlhLS64LHw__thumb/img/__dDwotcUJz2Oj5lgXAaRxwmnys=/fit-in/200x150/filters:strip_icc()/pic5667351.jpg",
    "date": "2024-08-15",
    "durationMinutes": 123,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 155,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 77,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 123,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-15T16:26:17.000Z",
    "updatedAt": "2024-08-15T18:28:55.000Z"
  },
  {
    "id": "play-33da4466-b9aa-410c-94df-df9e8f214b11",
    "gameId": "game-236",
    "gameTitleKr": "Shogun no Katana",
    "gameTitleEn": "Shogun no Katana",
    "gameImage": "https://cf.geekdo-images.com/XdXFnbesrDbKVlhLS64LHw__thumb/img/__dDwotcUJz2Oj5lgXAaRxwmnys=/fit-in/200x150/filters:strip_icc()/pic5667351.jpg",
    "date": "2024-08-16",
    "durationMinutes": 118,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 160,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 152,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 129,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-08-16T18:22:23.000Z",
    "updatedAt": "2024-08-16T20:19:26.000Z"
  },
  {
    "id": "play-664e57bf-f72c-43f8-899b-838de13e504b",
    "gameId": "game-10",
    "gameTitleKr": "Brass: Birmingham",
    "gameTitleEn": "Brass: Birmingham",
    "gameImage": "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__thumb/img/o18rjEemoWaVru9Y2TyPwuIaRfE=/fit-in/200x150/filters:strip_icc()/pic3490053.jpg",
    "date": "2024-08-21",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 140,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 156,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 136,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-08-21T20:37:41.000Z",
    "updatedAt": "2024-08-21T20:38:03.000Z"
  },
  {
    "id": "play-58c6cbc1-15e8-4c20-be35-d14c41d10ea7",
    "gameId": "game-230",
    "gameTitleKr": "Faraway",
    "gameTitleEn": "Faraway",
    "gameImage": "https://cf.geekdo-images.com/u1cwi9BWSKsPxSkVO0BzbA__thumb/img/5G45GN8CE7pq38fJMMocmPtV4_U=/fit-in/200x150/filters:strip_icc()/pic7570101.png",
    "date": "2024-08-21",
    "durationMinutes": 15,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 105,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 63,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 50,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-21T20:51:19.000Z",
    "updatedAt": "2024-08-21T21:06:18.000Z"
  },
  {
    "id": "play-f1aa5087-3be5-4710-888d-3c679f3f2cc9",
    "gameId": "game-230",
    "gameTitleKr": "Faraway",
    "gameTitleEn": "Faraway",
    "gameImage": "https://cf.geekdo-images.com/u1cwi9BWSKsPxSkVO0BzbA__thumb/img/5G45GN8CE7pq38fJMMocmPtV4_U=/fit-in/200x150/filters:strip_icc()/pic7570101.png",
    "date": "2024-08-21",
    "durationMinutes": 17,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 60,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 48,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 65,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-08-21T21:06:20.000Z",
    "updatedAt": "2024-08-21T21:23:00.000Z"
  },
  {
    "id": "play-8c9f190b-245c-4cfb-b1e6-1e6fd293d93f",
    "gameId": "game-237",
    "gameTitleKr": "Grand Austria Hotel",
    "gameTitleEn": "Grand Austria Hotel",
    "gameImage": "https://cf.geekdo-images.com/GlCmHjdLwv3SqSjv52ToGw__thumb/img/WXzXZh50EGKd1U2fg75fCbFIL_8=/fit-in/200x150/filters:strip_icc()/pic6966955.jpg",
    "date": "2024-08-25",
    "durationMinutes": 175,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 186,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 171,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 180,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-25T11:00:58.000Z",
    "updatedAt": "2024-08-25T13:55:36.000Z"
  },
  {
    "id": "play-3fc0fa3f-64e6-4d47-9b09-7752212bf0e1",
    "gameId": "game-214",
    "gameTitleKr": "스플렌더: Pokémon (Splendor: Pokémon)",
    "gameTitleEn": "스플렌더: Pokémon (Splendor: Pokémon)",
    "gameImage": "https://cf.geekdo-images.com/o6HpiLCBBFvc7XvBv7DEig__thumb/img/cP3zFhQXbpOo4jMbXWgPShAdn4E=/fit-in/200x150/filters:strip_icc()/pic7902371.jpg",
    "date": "2024-08-25",
    "durationMinutes": 45,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 20,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 13,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 11,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-25T15:29:17.000Z",
    "updatedAt": "2024-08-25T15:29:42.000Z"
  },
  {
    "id": "play-cda2b281-52f3-4d80-93aa-c18c7697cc0c",
    "gameId": "game-10",
    "gameTitleKr": "Brass: Birmingham",
    "gameTitleEn": "Brass: Birmingham",
    "gameImage": "https://cf.geekdo-images.com/x3zxjr-Vw5iU4yDPg70Jgw__thumb/img/o18rjEemoWaVru9Y2TyPwuIaRfE=/fit-in/200x150/filters:strip_icc()/pic3490053.jpg",
    "date": "2024-08-25",
    "durationMinutes": 111,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 162,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 136,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 143,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-25T15:31:10.000Z",
    "updatedAt": "2024-08-25T17:21:57.000Z"
  },
  {
    "id": "play-8239f803-de69-4781-b728-1b4e0c0c3c10",
    "gameId": "game-62",
    "gameTitleKr": "Suzume-Jong",
    "gameTitleEn": "Suzume-Jong",
    "gameImage": "https://cf.geekdo-images.com/64XnEhoewbAiSxNCXgII9w__thumb/img/GEj9jULlS4rgRzBhemgbx1epBrw=/fit-in/200x150/filters:strip_icc()/pic4591244.jpg",
    "date": "2024-08-25",
    "durationMinutes": 32,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 70,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 12,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 38,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-25T17:37:18.000Z",
    "updatedAt": "2024-08-25T18:09:13.000Z"
  },
  {
    "id": "play-d2ce8e9b-eed5-4403-ac18-dcd29174aa2f",
    "gameId": "game-236",
    "gameTitleKr": "Shogun no Katana",
    "gameTitleEn": "Shogun no Katana",
    "gameImage": "https://cf.geekdo-images.com/XdXFnbesrDbKVlhLS64LHw__thumb/img/__dDwotcUJz2Oj5lgXAaRxwmnys=/fit-in/200x150/filters:strip_icc()/pic5667351.jpg",
    "date": "2024-08-31",
    "durationMinutes": 185,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 183,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 89,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 77,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 168,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-31T10:12:48.000Z",
    "updatedAt": "2024-08-31T13:17:43.000Z"
  },
  {
    "id": "play-8551c6c7-1f91-4aa6-925a-3e00fa6f0c26",
    "gameId": "game-221",
    "gameTitleKr": "Dune: Imperium – Uprising",
    "gameTitleEn": "Dune: Imperium – Uprising",
    "gameImage": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__thumb/img/H6qmxJrRFjtOAPZOfDoZ480-46I=/fit-in/200x150/filters:strip_icc()/pic7664424.jpg",
    "date": "2024-08-31",
    "durationMinutes": 127,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 12,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-08-31T13:51:53.000Z",
    "updatedAt": "2024-08-31T15:58:49.000Z"
  },
  {
    "id": "play-9637b287-ebc5-4d1f-b5bc-545d807699c9",
    "gameId": "game-214",
    "gameTitleKr": "스플렌더: Pokémon (Splendor: Pokémon)",
    "gameTitleEn": "스플렌더: Pokémon (Splendor: Pokémon)",
    "gameImage": "https://cf.geekdo-images.com/o6HpiLCBBFvc7XvBv7DEig__thumb/img/cP3zFhQXbpOo4jMbXWgPShAdn4E=/fit-in/200x150/filters:strip_icc()/pic7902371.jpg",
    "date": "2024-08-31",
    "durationMinutes": 49,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 16,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 16,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 16,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 18,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-31T16:12:26.000Z",
    "updatedAt": "2024-08-31T17:00:34.000Z"
  },
  {
    "id": "play-5bf09fd8-e96d-4785-a3d4-c36d0af256f6",
    "gameId": "game-230",
    "gameTitleKr": "Faraway",
    "gameTitleEn": "Faraway",
    "gameImage": "https://cf.geekdo-images.com/u1cwi9BWSKsPxSkVO0BzbA__thumb/img/5G45GN8CE7pq38fJMMocmPtV4_U=/fit-in/200x150/filters:strip_icc()/pic7570101.png",
    "date": "2024-08-31",
    "durationMinutes": 21,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 57,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 66,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 49,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 75,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-31T17:12:15.000Z",
    "updatedAt": "2024-08-31T17:33:03.000Z"
  },
  {
    "id": "play-d5ae265d-422d-4c76-a4ac-ae9884641f7c",
    "gameId": "game-213",
    "gameTitleKr": "Run, Mule, Run",
    "gameTitleEn": "Run, Mule, Run",
    "date": "2024-08-31",
    "durationMinutes": 11,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 4,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 1,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-31T17:39:05.000Z",
    "updatedAt": "2024-08-31T17:49:09.000Z"
  },
  {
    "id": "play-fa367220-e0a3-4206-a13b-f4ca2d4d430c",
    "gameId": "game-3",
    "gameTitleKr": "Ark Nova",
    "gameTitleEn": "Ark Nova",
    "gameImage": "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__thumb/img/4KuHNTWSMPf8vTNDKSRMMI3oOv8=/fit-in/200x150/filters:strip_icc()/pic6293412.jpg",
    "date": "2024-08-31",
    "durationMinutes": 178,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 134,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 73,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 78,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-08-31T19:54:47.000Z",
    "updatedAt": "2024-08-31T22:52:38.000Z"
  },
  {
    "id": "play-a913ef91-1de3-47f1-a0ba-39fe4965a85a",
    "gameId": "game-236",
    "gameTitleKr": "Shogun no Katana",
    "gameTitleEn": "Shogun no Katana",
    "gameImage": "https://cf.geekdo-images.com/XdXFnbesrDbKVlhLS64LHw__thumb/img/__dDwotcUJz2Oj5lgXAaRxwmnys=/fit-in/200x150/filters:strip_icc()/pic5667351.jpg",
    "date": "2024-09-29",
    "durationMinutes": 177,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 193,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 202,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 199,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 155,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-09-29T13:52:04.000Z",
    "updatedAt": "2024-09-29T16:48:57.000Z"
  },
  {
    "id": "play-6d8213c5-bbda-4448-9def-ce05f68a7d30",
    "gameId": "game-140",
    "gameTitleKr": "Yellow & Yangtze",
    "gameTitleEn": "Yellow & Yangtze",
    "gameImage": "https://cf.geekdo-images.com/BxHQLD5nnVltDWXt4OKsgQ__thumb/img/Xf9hEf74SZfcOi0ZbNhdUW6BTt0=/fit-in/200x150/filters:strip_icc()/pic3938502.jpg",
    "date": "2024-09-29",
    "durationMinutes": 90,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 5,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-09-29T17:06:11.000Z",
    "updatedAt": "2024-09-29T18:35:32.000Z"
  },
  {
    "id": "play-bf5904a3-1c38-4d4a-bc31-c767a29912f4",
    "gameId": "game-238",
    "gameTitleKr": "Perspectives",
    "gameTitleEn": "Perspectives",
    "gameImage": "https://cf.geekdo-images.com/2rDKsXHGRLNdoXb0K48HcQ__thumb/img/gNA4Q5pFNki09PoMTOOBEm__k94=/fit-in/200x150/filters:strip_icc()/pic7723935.jpg",
    "date": "2024-10-12",
    "durationMinutes": 140,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 16,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-54",
        "name": "민경",
        "score": 16,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 16,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 16,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-10-12T10:20:10.000Z",
    "updatedAt": "2024-10-12T15:22:05.000Z"
  },
  {
    "id": "play-352452e3-40ac-4cf3-b835-fb74af3f2ba8",
    "gameId": "game-239",
    "gameTitleKr": "Murder Mystery Mini: CANARY tells no tales",
    "gameTitleEn": "Murder Mystery Mini: CANARY tells no tales",
    "gameImage": "https://cf.geekdo-images.com/fD9wrkqcdmuri-egtUxECA__thumb/img/sqNGBHnzZt2UhkXAkEZ4mC90PZk=/fit-in/200x150/filters:strip_icc()/pic8059682.png",
    "date": "2024-10-12",
    "durationMinutes": 136,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 15,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-54",
        "name": "민경",
        "score": 23,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 10,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 14,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-10-12T15:28:38.000Z",
    "updatedAt": "2024-10-12T17:45:32.000Z"
  },
  {
    "id": "play-5ee69fea-1569-4339-962e-ff562efd2d6f",
    "gameId": "game-30",
    "gameTitleKr": "Foundations of Rome",
    "gameTitleEn": "Foundations of Rome",
    "gameImage": "https://cf.geekdo-images.com/lRB91NF3OPeSff2o17NX3Q__thumb/img/CWAVZWfBegleQWJVhkehmDmxnbU=/fit-in/200x150/filters:strip_icc()/pic6706206.jpg",
    "date": "2024-10-12",
    "durationMinutes": 120,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 123,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-54",
        "name": "민경",
        "score": 115,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 120,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 117,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-10-12T18:46:00.000Z",
    "updatedAt": "2024-10-12T20:45:28.000Z"
  },
  {
    "id": "play-222fc939-026c-404a-a1a2-ce43a77496ae",
    "gameId": "game-196",
    "gameTitleKr": "The White Castle",
    "gameTitleEn": "The White Castle",
    "gameImage": "https://cf.geekdo-images.com/qXT1U-nFh9PE8ujfdmI7dA__thumb/img/ru1l95gdKNXSsByDglE9Xxgu0kE=/fit-in/200x150/filters:strip_icc()/pic7754663.jpg",
    "date": "2024-10-20",
    "durationMinutes": 100,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 66,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 68,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 84,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 75,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-10-20T16:37:49.000Z",
    "updatedAt": "2024-10-20T18:17:13.000Z"
  },
  {
    "id": "play-971169fa-384c-4906-a9d6-44f43aea9a8b",
    "gameId": "game-37",
    "gameTitleKr": "Kanban EV",
    "gameTitleEn": "Kanban EV",
    "gameImage": "https://cf.geekdo-images.com/L2Wn-zUqkcHgqvwvY212Ig__thumb/img/RQunBacBw949DkYBgzoS5YaXgJo=/fit-in/200x150/filters:strip_icc()/pic4924232.jpg",
    "date": "2024-10-20",
    "durationMinutes": 127,
    "locationId": "loc-9",
    "locationName": "섬마을",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 191,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 142,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 174,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-10-20T18:57:55.000Z",
    "updatedAt": "2024-10-20T21:04:30.000Z"
  },
  {
    "id": "play-4b374cd6-d49d-4e4e-9052-a92a60f0f10c",
    "gameId": "game-240",
    "gameTitleKr": "Tabriz",
    "gameTitleEn": "Tabriz",
    "gameImage": "https://cf.geekdo-images.com/6CWLTZyvVl2bG5PLEjFL4g__thumb/img/UHna4kCredJdoLYFbY4RBHutl9o=/fit-in/200x150/filters:strip_icc()/pic6785937.jpg",
    "date": "2024-11-02",
    "durationMinutes": 12,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 24,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 20,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 21,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 15,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-02T12:24:11.000Z",
    "updatedAt": "2024-11-02T12:36:01.000Z"
  },
  {
    "id": "play-41b6830c-3591-4dfd-b989-19d2e232fc0d",
    "gameId": "game-241",
    "gameTitleKr": "Awkward Guests: The Walton Case",
    "gameTitleEn": "Awkward Guests: The Walton Case",
    "gameImage": "https://cf.geekdo-images.com/Awopfw5_5Qyh-7YcSbtudA__thumb/img/HHn3So0Mum6VZliDmEnB2LwfeQ0=/fit-in/200x150/filters:strip_icc()/pic4870482.jpg",
    "date": "2024-11-02",
    "durationMinutes": 107,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-02T13:00:38.000Z",
    "updatedAt": "2024-11-02T14:47:29.000Z"
  },
  {
    "id": "play-1d7b3b77-a87f-473c-9e88-8dc01aacbc0e",
    "gameId": "game-242",
    "gameTitleKr": "Orapa Mine",
    "gameTitleEn": "Orapa Mine",
    "gameImage": "https://cf.geekdo-images.com/AA9S_-ZXnIFS0ABiFxmZ9w__thumb/img/7rgnYRe9NpOSpixs0FXmEGkKfxU=/fit-in/200x150/filters:strip_icc()/pic8307047.jpg",
    "date": "2024-11-02",
    "durationMinutes": 22,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-02T14:50:57.000Z",
    "updatedAt": "2024-11-02T15:12:14.000Z"
  },
  {
    "id": "play-b1de0176-ef28-4fbd-89d5-2d7fc87df0b9",
    "gameId": "game-243",
    "gameTitleKr": "Forest Shuffle",
    "gameTitleEn": "Forest Shuffle",
    "gameImage": "https://cf.geekdo-images.com/08bC8NviSTNc4Zvur4pueA__thumb/img/Xq8TNBmMl3Z7DoynvbUXchFAztc=/fit-in/200x150/filters:strip_icc()/pic7578350.jpg",
    "date": "2024-11-02",
    "durationMinutes": 69,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 66,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 113,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 85,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 74,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-02T15:45:08.000Z",
    "updatedAt": "2024-11-02T16:53:34.000Z"
  },
  {
    "id": "play-8bc5cf39-e3e9-46c0-ade5-e4a743ed19ed",
    "gameId": "game-244",
    "gameTitleKr": "Woodcraft",
    "gameTitleEn": "Woodcraft",
    "gameImage": "https://cf.geekdo-images.com/S1_USNVBwzwidSpxAoKhuw__thumb/img/26QtSRyUNOySkhtk6tnkzVqPx5A=/fit-in/200x150/filters:strip_icc()/pic6940296.jpg",
    "date": "2024-11-02",
    "durationMinutes": 153,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 86,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 102,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 88,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 85,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-02T16:53:36.000Z",
    "updatedAt": "2024-11-02T19:26:14.000Z"
  },
  {
    "id": "play-77501e82-9ad6-4c81-a2c0-2db91b94774e",
    "gameId": "game-242",
    "gameTitleKr": "Orapa Mine",
    "gameTitleEn": "Orapa Mine",
    "gameImage": "https://cf.geekdo-images.com/AA9S_-ZXnIFS0ABiFxmZ9w__thumb/img/7rgnYRe9NpOSpixs0FXmEGkKfxU=/fit-in/200x150/filters:strip_icc()/pic8307047.jpg",
    "date": "2024-11-16",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-16T13:49:20.000Z",
    "updatedAt": "2024-11-16T13:49:43.000Z"
  },
  {
    "id": "play-364e46b4-5d29-4dfb-86a2-fb188ac3197a",
    "gameId": "game-242",
    "gameTitleKr": "Orapa Mine",
    "gameTitleEn": "Orapa Mine",
    "gameImage": "https://cf.geekdo-images.com/AA9S_-ZXnIFS0ABiFxmZ9w__thumb/img/7rgnYRe9NpOSpixs0FXmEGkKfxU=/fit-in/200x150/filters:strip_icc()/pic8307047.jpg",
    "date": "2024-11-16",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-11-16T13:49:45.000Z",
    "updatedAt": "2024-11-16T13:49:50.000Z"
  },
  {
    "id": "play-dfeaf873-c3b5-47d4-8339-15cdcfb4143c",
    "gameId": "game-3",
    "gameTitleKr": "Ark Nova",
    "gameTitleEn": "Ark Nova",
    "gameImage": "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__thumb/img/4KuHNTWSMPf8vTNDKSRMMI3oOv8=/fit-in/200x150/filters:strip_icc()/pic6293412.jpg",
    "date": "2024-11-16",
    "durationMinutes": 170,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 123,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 83,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 96,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 75,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-16T13:49:57.000Z",
    "updatedAt": "2024-11-16T16:39:59.000Z"
  },
  {
    "id": "play-f93068ca-828e-41c1-8ed8-23ee4f013de7",
    "gameId": "game-211",
    "gameTitleKr": "Harmonies",
    "gameTitleEn": "Harmonies",
    "gameImage": "https://cf.geekdo-images.com/A_XP2_VN3ugyqPhezowB_w__thumb/img/ln5eKAzhse2PIHvWn7bu-jiW_uk=/fit-in/200x150/filters:strip_icc()/pic8026369.png",
    "date": "2024-11-16",
    "durationMinutes": 35,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 95,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 85,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 70,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 66,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-16T16:53:30.000Z",
    "updatedAt": "2024-11-16T17:28:05.000Z"
  },
  {
    "id": "play-cf74b161-01b7-44be-808b-bf9838fb0f9b",
    "gameId": "game-245",
    "gameTitleKr": "Butterfly Garden",
    "gameTitleEn": "Butterfly Garden",
    "gameImage": "https://cf.geekdo-images.com/M0ZpA1fZEv5rxNa7-i-DaA__thumb/img/jUkutHcSpODn5UO7N2Cq_nfof3s=/fit-in/200x150/filters:strip_icc()/pic7961037.jpg",
    "date": "2024-11-16",
    "durationMinutes": 36,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 7,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 7,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 7,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-16T17:38:33.000Z",
    "updatedAt": "2024-11-16T18:14:20.000Z"
  },
  {
    "id": "play-d031d210-6f2f-46bf-80a3-02222895d129",
    "gameId": "game-233",
    "gameTitleKr": "Buffet Boss",
    "gameTitleEn": "Buffet Boss",
    "gameImage": "https://cf.geekdo-images.com/7Mb5W1k3KeOSuFdCp3EqUA__thumb/img/0KVlPAKRu9tApGf1sZ6ZBIk62GA=/fit-in/200x150/filters:strip_icc()/pic7079382.jpg",
    "date": "2024-11-16",
    "durationMinutes": 13,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 16,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 31,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 46,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 32,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-16T20:02:37.000Z",
    "updatedAt": "2024-11-16T20:15:32.000Z"
  },
  {
    "id": "play-81297df0-c3c9-44c1-8375-e0d343299f44",
    "gameId": "game-246",
    "gameTitleKr": "Sunset Over Water",
    "gameTitleEn": "Sunset Over Water",
    "gameImage": "https://cf.geekdo-images.com/YMh3d_JC-mTNFGPp8KS4wg__thumb/img/AhPpxnU3qNCQ2MAzGYKH7nbBKx4=/fit-in/200x150/filters:strip_icc()/pic3750065.png",
    "date": "2024-11-16",
    "durationMinutes": 46,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 33,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 26,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 33,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 28,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-16T20:21:51.000Z",
    "updatedAt": "2024-11-16T21:07:34.000Z"
  },
  {
    "id": "play-851349c8-2e06-4261-8281-745e44622df8",
    "gameId": "game-247",
    "gameTitleKr": "Surfosaurus MAX",
    "gameTitleEn": "Surfosaurus MAX",
    "gameImage": "https://cf.geekdo-images.com/_oIGFfPMAa0gHWNy7kJp7g__thumb/img/sDjXtzwxUmWreaMwHw8ofJaCaKc=/fit-in/200x150/filters:strip_icc()/pic7618281.jpg",
    "date": "2024-11-16",
    "durationMinutes": 27,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 66,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 66,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 45,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 58,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-16T21:30:09.000Z",
    "updatedAt": "2024-11-16T21:56:55.000Z"
  },
  {
    "id": "play-4c933ac3-56e2-4a9a-8c5b-8a0097d89557",
    "gameId": "game-248",
    "gameTitleKr": "Monkey Palace",
    "gameTitleEn": "Monkey Palace",
    "gameImage": "https://cf.geekdo-images.com/E0_jjeKtADvRnn0vSVGgeQ__thumb/img/oZkmJTRjIayLYOCs8eStlOVEEgo=/fit-in/200x150/filters:strip_icc()/pic8445137.png",
    "date": "2024-11-17",
    "durationMinutes": 62,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 32,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 38,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 23,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-17T10:11:17.000Z",
    "updatedAt": "2024-11-17T11:13:15.000Z"
  },
  {
    "id": "play-f5cccf55-feb0-4b41-9cbe-3f8f4c20664f",
    "gameId": "game-249",
    "gameTitleKr": "Horrified: World of Monsters",
    "gameTitleEn": "Horrified: World of Monsters",
    "gameImage": "https://cf.geekdo-images.com/vAXjjR0NGxe6ByES2O3smg__thumb/img/xHn0-ZUuuaeae1Qel_6m7BQQxMg=/fit-in/200x150/filters:strip_icc()/pic8266078.png",
    "date": "2024-11-17",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-17T16:40:44.000Z",
    "updatedAt": "2024-11-17T16:41:18.000Z"
  },
  {
    "id": "play-1fa02715-1132-40ce-827a-f8cb8d4c95a5",
    "gameId": "game-196",
    "gameTitleKr": "The White Castle",
    "gameTitleEn": "The White Castle",
    "gameImage": "https://cf.geekdo-images.com/qXT1U-nFh9PE8ujfdmI7dA__thumb/img/ru1l95gdKNXSsByDglE9Xxgu0kE=/fit-in/200x150/filters:strip_icc()/pic7754663.jpg",
    "date": "2024-11-17",
    "durationMinutes": 85,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 65,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 43,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 61,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 49,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-11-17T16:41:21.000Z",
    "updatedAt": "2024-11-17T18:06:13.000Z"
  },
  {
    "id": "play-5c987030-59c8-4073-84c1-ffc8bb6d49c9",
    "gameId": "game-178",
    "gameTitleKr": "Marvel Dice Throne",
    "gameTitleEn": "Marvel Dice Throne",
    "gameImage": "https://cf.geekdo-images.com/LEkxd7ts6JwMvNBkz6Eavw__thumb/img/42MA7lGbfeM-hePXc7Dy3JwBj9k=/fit-in/200x150/filters:strip_icc()/pic6796048.jpg",
    "date": "2024-11-30",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-30T15:07:47.000Z",
    "updatedAt": "2024-11-30T15:08:11.000Z"
  },
  {
    "id": "play-05519904-d8fc-4fff-957a-554fdf397a5b",
    "gameId": "game-178",
    "gameTitleKr": "Marvel Dice Throne",
    "gameTitleEn": "Marvel Dice Throne",
    "gameImage": "https://cf.geekdo-images.com/LEkxd7ts6JwMvNBkz6Eavw__thumb/img/42MA7lGbfeM-hePXc7Dy3JwBj9k=/fit-in/200x150/filters:strip_icc()/pic6796048.jpg",
    "date": "2024-11-30",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-30T15:08:12.000Z",
    "updatedAt": "2024-11-30T15:08:25.000Z"
  },
  {
    "id": "play-6170ea77-13e1-4814-bc97-f8e87ee71a59",
    "gameId": "game-158",
    "gameTitleKr": "Dwellings of Eldervale",
    "gameTitleEn": "Dwellings of Eldervale",
    "gameImage": "https://cf.geekdo-images.com/qJQXn0kvzvHBKWzSQN7vpw__thumb/img/nyFpcKV3cBOVO1pEImnBYLc_BRE=/fit-in/200x150/filters:strip_icc()/pic4742944.jpg",
    "date": "2024-11-30",
    "durationMinutes": 177,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 75,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 73,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 69,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 100,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-30T15:08:28.000Z",
    "updatedAt": "2024-11-30T18:05:10.000Z"
  },
  {
    "id": "play-8ee73507-c5ed-4df7-8b9d-f02bd442f510",
    "gameId": "game-242",
    "gameTitleKr": "Orapa Mine",
    "gameTitleEn": "Orapa Mine",
    "gameImage": "https://cf.geekdo-images.com/AA9S_-ZXnIFS0ABiFxmZ9w__thumb/img/7rgnYRe9NpOSpixs0FXmEGkKfxU=/fit-in/200x150/filters:strip_icc()/pic8307047.jpg",
    "date": "2024-11-30",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "role": "Host",
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-11-30T18:50:16.000Z",
    "updatedAt": "2024-11-30T18:51:01.000Z"
  },
  {
    "id": "play-f2422e72-52b7-49e4-ba5e-b1e1c49282d1",
    "gameId": "game-242",
    "gameTitleKr": "Orapa Mine",
    "gameTitleEn": "Orapa Mine",
    "gameImage": "https://cf.geekdo-images.com/AA9S_-ZXnIFS0ABiFxmZ9w__thumb/img/7rgnYRe9NpOSpixs0FXmEGkKfxU=/fit-in/200x150/filters:strip_icc()/pic8307047.jpg",
    "date": "2024-11-30",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "winner": false,
        "startPlayer": false,
        "role": "Host",
        "newPlayer": false
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-11-30T19:08:01.000Z",
    "updatedAt": "2024-11-30T19:08:16.000Z"
  },
  {
    "id": "play-b7901115-42a1-43a2-b2df-9bf79ab4027a",
    "gameId": "game-221",
    "gameTitleKr": "Dune: Imperium – Uprising",
    "gameTitleEn": "Dune: Imperium – Uprising",
    "gameImage": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__thumb/img/H6qmxJrRFjtOAPZOfDoZ480-46I=/fit-in/200x150/filters:strip_icc()/pic7664424.jpg",
    "date": "2024-11-30",
    "durationMinutes": 125,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 7,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 7,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 10,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-11-30T19:45:34.000Z",
    "updatedAt": "2024-11-30T21:49:43.000Z"
  },
  {
    "id": "play-0a35bd4e-5dfb-484e-b4a2-d3328394a3a7",
    "gameId": "game-250",
    "gameTitleKr": "Black Forest",
    "gameTitleEn": "Black Forest",
    "gameImage": "https://cf.geekdo-images.com/zyc92pV4Mn2G6HCegMGPWQ__thumb/img/eBQt7m5f9RtsZfBgCNhJER6f5CA=/fit-in/200x150/filters:strip_icc()/pic8194217.jpg",
    "date": "2024-12-14",
    "durationMinutes": 7,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 31,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 38,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 40,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-12-14T12:05:39.000Z",
    "updatedAt": "2024-12-14T12:12:29.000Z"
  },
  {
    "id": "play-00b0a8ed-08f9-4ce8-8a5c-03c36fcd4778",
    "gameId": "game-251",
    "gameTitleKr": "3 Chapters",
    "gameTitleEn": "3 Chapters",
    "gameImage": "https://cf.geekdo-images.com/77nPGdBzl0m03yIn516RfA__thumb/img/_KfIjEhwo8ZC5Y2xpzeTICwx0xI=/fit-in/200x150/filters:strip_icc()/pic8349618.png",
    "date": "2024-12-14",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 15,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 12,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 6,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 11,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-12-14T12:48:40.000Z",
    "updatedAt": "2024-12-14T12:49:29.000Z"
  },
  {
    "id": "play-278958fb-549e-41bc-8631-616e9569ffc9",
    "gameId": "game-251",
    "gameTitleKr": "3 Chapters",
    "gameTitleEn": "3 Chapters",
    "gameImage": "https://cf.geekdo-images.com/77nPGdBzl0m03yIn516RfA__thumb/img/_KfIjEhwo8ZC5Y2xpzeTICwx0xI=/fit-in/200x150/filters:strip_icc()/pic8349618.png",
    "date": "2024-12-14",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 15,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 13,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 24,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-12-14T13:00:42.000Z",
    "updatedAt": "2024-12-14T13:01:23.000Z"
  },
  {
    "id": "play-9765f001-ace1-4c0a-b388-0eb85c1a4b4a",
    "gameId": "game-252",
    "gameTitleKr": "Perch",
    "gameTitleEn": "Perch",
    "gameImage": "https://cf.geekdo-images.com/1t6J2QHaLMjmomBnHrtwxA__thumb/img/wr9PCDczDC32135gaLxTOILZPds=/fit-in/200x150/filters:strip_icc()/pic7558885.png",
    "date": "2024-12-14",
    "durationMinutes": 120,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 58,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 79,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 62,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 72,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-12-14T13:46:13.000Z",
    "updatedAt": "2024-12-14T15:45:32.000Z"
  },
  {
    "id": "play-1b75614c-bdf4-4335-9131-f79bafcdb72e",
    "gameId": "game-253",
    "gameTitleKr": "Stella Quest",
    "gameTitleEn": "Stella Quest",
    "gameImage": "https://cf.geekdo-images.com/m6Xr5i_VniFbRl6iazdirg__thumb/img/EBef1Dorf-bYcBk0Xn-46X3zzYw=/fit-in/200x150/filters:strip_icc()/pic8302898.jpg",
    "date": "2024-12-14",
    "durationMinutes": 27,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 0,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 8,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 12,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 11,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-12-14T15:55:25.000Z",
    "updatedAt": "2024-12-14T16:22:28.000Z"
  },
  {
    "id": "play-10ee168d-07c2-4a3a-89cd-8ba63182e95b",
    "gameId": "game-253",
    "gameTitleKr": "Stella Quest",
    "gameTitleEn": "Stella Quest",
    "gameImage": "https://cf.geekdo-images.com/m6Xr5i_VniFbRl6iazdirg__thumb/img/EBef1Dorf-bYcBk0Xn-46X3zzYw=/fit-in/200x150/filters:strip_icc()/pic8302898.jpg",
    "date": "2024-12-14",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 11,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 13,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 0,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-12-14T16:43:46.000Z",
    "updatedAt": "2024-12-14T16:44:20.000Z"
  },
  {
    "id": "play-7b1d9831-7ec9-40b7-a10d-e6185e128516",
    "gameId": "game-248",
    "gameTitleKr": "Monkey Palace",
    "gameTitleEn": "Monkey Palace",
    "gameImage": "https://cf.geekdo-images.com/E0_jjeKtADvRnn0vSVGgeQ__thumb/img/oZkmJTRjIayLYOCs8eStlOVEEgo=/fit-in/200x150/filters:strip_icc()/pic8445137.png",
    "date": "2024-12-14",
    "durationMinutes": 40,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 22,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 20,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 24,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 30,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-12-14T17:04:39.000Z",
    "updatedAt": "2024-12-14T17:44:26.000Z"
  },
  {
    "id": "play-e059d174-45b4-443a-b0f5-48abbbc5e1b4",
    "gameId": "game-254",
    "gameTitleKr": "OPEN",
    "gameTitleEn": "OPEN",
    "gameImage": "https://cf.geekdo-images.com/P0rjA4DFBCkRqhBs_N1-yw__thumb/img/cduxRwEv7pWakt9zkHADH3w6km0=/fit-in/200x150/filters:strip_icc()/pic7177424.png",
    "date": "2024-12-14",
    "durationMinutes": 23,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 35,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-12-14T17:54:06.000Z",
    "updatedAt": "2024-12-14T18:17:01.000Z"
  },
  {
    "id": "play-860cd76d-de6a-4398-9d43-ec9c6a02213a",
    "gameId": "game-254",
    "gameTitleKr": "OPEN",
    "gameTitleEn": "OPEN",
    "gameImage": "https://cf.geekdo-images.com/P0rjA4DFBCkRqhBs_N1-yw__thumb/img/cduxRwEv7pWakt9zkHADH3w6km0=/fit-in/200x150/filters:strip_icc()/pic7177424.png",
    "date": "2024-12-14",
    "durationMinutes": 26,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 22,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-12-14T18:17:03.000Z",
    "updatedAt": "2024-12-14T18:42:36.000Z"
  },
  {
    "id": "play-4d52ff35-be69-4d7f-94bc-49f014e7db29",
    "gameId": "game-250",
    "gameTitleKr": "Black Forest",
    "gameTitleEn": "Black Forest",
    "gameImage": "https://cf.geekdo-images.com/zyc92pV4Mn2G6HCegMGPWQ__thumb/img/eBQt7m5f9RtsZfBgCNhJER6f5CA=/fit-in/200x150/filters:strip_icc()/pic8194217.jpg",
    "date": "2024-12-28",
    "durationMinutes": 83,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 44,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 37,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 39,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-12-28T10:37:30.000Z",
    "updatedAt": "2024-12-28T11:59:42.000Z"
  },
  {
    "id": "play-4c301902-7073-4360-b330-7e184414dee2",
    "gameId": "game-255",
    "gameTitleKr": "Evergreen",
    "gameTitleEn": "Evergreen",
    "gameImage": "https://cf.geekdo-images.com/71I0Ku92KgjaW_ZokJidCA__thumb/img/3BpSIoMWf4ig9_S-CTMpoo3KdfU=/fit-in/200x150/filters:strip_icc()/pic6872745.png",
    "date": "2024-12-28",
    "durationMinutes": 65,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 161,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 145,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 131,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 123,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-12-28T12:13:55.000Z",
    "updatedAt": "2024-12-28T13:38:11.000Z"
  },
  {
    "id": "play-d77757da-aa67-4317-967f-1b6d1e1a9b8a",
    "gameId": "game-256",
    "gameTitleKr": "Mycelia",
    "gameTitleEn": "Mycelia",
    "gameImage": "https://cf.geekdo-images.com/0DDStf5eJUgtSpBzXyYhig__thumb/img/RsWfjhvdiz2DMYijRU6hOOZMPyQ=/fit-in/200x150/filters:strip_icc()/pic7431245.jpg",
    "date": "2024-12-28",
    "durationMinutes": 127,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 40,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 38,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 50,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 23,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2024-12-28T14:33:27.000Z",
    "updatedAt": "2024-12-28T16:40:41.000Z"
  },
  {
    "id": "play-be67c53f-4693-4af3-8ad9-e166e80fa58a",
    "gameId": "game-208",
    "gameTitleKr": "Heat: Pedal to the Metal",
    "gameTitleEn": "Heat: Pedal to the Metal",
    "gameImage": "https://cf.geekdo-images.com/-vOrd4bOspibyohYExLqWg__thumb/img/2GbaKvYOzWIxfgbYTk2R9puiyzo=/fit-in/200x150/filters:strip_icc()/pic6940449.png",
    "date": "2024-12-28",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-37",
        "name": "정",
        "score": 1,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2024-12-28T18:02:33.000Z",
    "updatedAt": "2024-12-28T18:02:48.000Z"
  },
  {
    "id": "play-b826ba7f-3ded-44cd-a528-90f2c23c7752",
    "gameId": "game-257",
    "gameTitleKr": "Bonanza",
    "gameTitleEn": "Bohnanza",
    "gameImage": "https://cf.geekdo-images.com/8SADtu_4zBH_UJrCo935Iw__thumb/img/vwTEQOWA3Mw__ztkTMulOgJ82Pw=/fit-in/200x150/filters:strip_icc()/pic6348964.jpg",
    "date": "2025-01-26",
    "durationMinutes": 45,
    "locationId": "loc-5",
    "locationName": "동욱형집",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 14,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-4",
        "name": "나율",
        "score": 16,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 11,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 16,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-01-26T11:22:45.000Z",
    "updatedAt": "2025-01-26T11:23:55.000Z"
  },
  {
    "id": "play-7d5f01ad-79ba-4ecc-978f-702112265a72",
    "gameId": "game-258",
    "gameTitleKr": "Avenue",
    "gameTitleEn": "Avenue",
    "gameImage": "https://cf.geekdo-images.com/BDbJI4_g5FIpblE7OU0vog__thumb/img/0tuyJAX1b-qySV2lebkzUFQM-Kg=/fit-in/200x150/filters:strip_icc()/pic3113106.jpg",
    "date": "2025-01-26",
    "durationMinutes": 35,
    "locationId": "loc-5",
    "locationName": "동욱형집",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 28,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-4",
        "name": "나율",
        "score": 54,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 49,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 26,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-01-26T11:28:49.000Z",
    "updatedAt": "2025-01-26T12:04:02.000Z"
  },
  {
    "id": "play-c33dfad4-bc0b-4567-a998-76466ff77f3f",
    "gameId": "game-259",
    "gameTitleKr": "Beyond the Horizon",
    "gameTitleEn": "Beyond the Horizon",
    "gameImage": "https://cf.geekdo-images.com/yaCOVF7EN1T3y1RDLPqpXg__thumb/img/nIZGWEy6CgL_j7qmkIhDW9hlt-c=/fit-in/200x150/filters:strip_icc()/pic8209513.jpg",
    "date": "2025-01-26",
    "durationMinutes": 171,
    "locationId": "loc-5",
    "locationName": "동욱형집",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 107,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-4",
        "name": "나율",
        "score": 39,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 49,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 76,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-01-26T14:19:30.000Z",
    "updatedAt": "2025-01-26T17:11:16.000Z"
  },
  {
    "id": "play-5c04a04b-95c4-4f94-9349-c8972d060350",
    "gameId": "game-259",
    "gameTitleKr": "Beyond the Horizon",
    "gameTitleEn": "Beyond the Horizon",
    "gameImage": "https://cf.geekdo-images.com/yaCOVF7EN1T3y1RDLPqpXg__thumb/img/nIZGWEy6CgL_j7qmkIhDW9hlt-c=/fit-in/200x150/filters:strip_icc()/pic8209513.jpg",
    "date": "2025-01-26",
    "durationMinutes": 128,
    "locationId": "loc-5",
    "locationName": "동욱형집",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 98,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-4",
        "name": "나율",
        "score": 39,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 34,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 26,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-01-26T17:27:20.000Z",
    "updatedAt": "2025-01-26T19:35:30.000Z"
  },
  {
    "id": "play-6126f3f9-b89e-4505-9e4b-4332dbb88aa3",
    "gameId": "game-153",
    "gameTitleKr": "Deep Sea Adventure",
    "gameTitleEn": "Deep Sea Adventure",
    "gameImage": "https://cf.geekdo-images.com/owyKXaa5SPB2HG9F_MueNQ__thumb/img/poEY0PMTpz4X_SOUaPjs6G7qr7o=/fit-in/200x150/filters:strip_icc()/pic3169827.png",
    "date": "2025-01-26",
    "durationMinutes": 22,
    "locationId": "loc-5",
    "locationName": "동욱형집",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-4",
        "name": "나율",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-01-26T19:37:31.000Z",
    "updatedAt": "2025-01-26T19:59:36.000Z"
  },
  {
    "id": "play-59376331-19c2-49d9-a21c-1f80071147f4",
    "gameId": "game-259",
    "gameTitleKr": "Beyond the Horizon",
    "gameTitleEn": "Beyond the Horizon",
    "gameImage": "https://cf.geekdo-images.com/yaCOVF7EN1T3y1RDLPqpXg__thumb/img/nIZGWEy6CgL_j7qmkIhDW9hlt-c=/fit-in/200x150/filters:strip_icc()/pic8209513.jpg",
    "date": "2025-01-27",
    "durationMinutes": 136,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 80,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 61,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 97,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-01-27T12:47:21.000Z",
    "updatedAt": "2025-01-27T15:03:45.000Z"
  },
  {
    "id": "play-115b2d18-71b4-4cdb-9a61-f551ff48f73e",
    "gameId": "game-184",
    "gameTitleKr": "Scarface 1920",
    "gameTitleEn": "Scarface 1920",
    "gameImage": "https://cf.geekdo-images.com/b0HXxXK40QsTwSxynD2DDA__thumb/img/dPCm4RXyLyc4kz1m15R5fbko8jM=/fit-in/200x150/filters:strip_icc()/pic5926553.jpg",
    "date": "2025-01-27",
    "durationMinutes": 182,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 106,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 18,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 106,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-01-27T15:33:47.000Z",
    "updatedAt": "2025-01-27T18:36:16.000Z"
  },
  {
    "id": "play-5b648e10-a2b5-496a-9a8a-e15f8c246ed2",
    "gameId": "game-260",
    "gameTitleKr": "xing",
    "gameTitleEn": "xing",
    "date": "2025-01-27",
    "durationMinutes": 15,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 21,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 34,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 34,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-01-27T18:50:46.000Z",
    "updatedAt": "2025-01-27T19:06:40.000Z"
  },
  {
    "id": "play-4037519c-ecd3-4023-a1e2-69a1cd358b06",
    "gameId": "game-3",
    "gameTitleKr": "Ark Nova",
    "gameTitleEn": "Ark Nova",
    "gameImage": "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__thumb/img/4KuHNTWSMPf8vTNDKSRMMI3oOv8=/fit-in/200x150/filters:strip_icc()/pic6293412.jpg",
    "date": "2025-01-27",
    "durationMinutes": 99,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 114,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 109,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-01-27T19:26:59.000Z",
    "updatedAt": "2025-01-27T21:06:22.000Z"
  },
  {
    "id": "play-c1f6a334-04a5-42b3-beb2-d188399c0aca",
    "gameId": "game-261",
    "gameTitleKr": "Sky Team",
    "gameTitleEn": "Sky Team",
    "gameImage": "https://cf.geekdo-images.com/uXMeQzNenHb3zK7Hoa6b2w__thumb/img/WyPClajMWU9lV5BdCXiZnqdZgmU=/fit-in/200x150/filters:strip_icc()/pic7398904.jpg",
    "date": "2025-02-02",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "notes": "몬트리올 국제공항",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "role": "부기장",
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "role": "기장",
        "newPlayer": true
      }
    ],
    "createdAt": "2025-02-02T11:40:26.000Z",
    "updatedAt": "2025-02-02T11:44:57.000Z"
  },
  {
    "id": "play-8756ca75-0b09-44ab-9308-cdead4570db4",
    "gameId": "game-261",
    "gameTitleKr": "Sky Team",
    "gameTitleEn": "Sky Team",
    "gameImage": "https://cf.geekdo-images.com/uXMeQzNenHb3zK7Hoa6b2w__thumb/img/WyPClajMWU9lV5BdCXiZnqdZgmU=/fit-in/200x150/filters:strip_icc()/pic7398904.jpg",
    "date": "2025-02-02",
    "durationMinutes": 14,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "notes": "하츠필드-잭슨 공항",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-02-02T11:54:19.000Z",
    "updatedAt": "2025-02-02T12:08:52.000Z"
  },
  {
    "id": "play-7dfa252b-bccc-4b5b-a468-01963d359775",
    "gameId": "game-261",
    "gameTitleKr": "Sky Team",
    "gameTitleEn": "Sky Team",
    "gameImage": "https://cf.geekdo-images.com/uXMeQzNenHb3zK7Hoa6b2w__thumb/img/WyPClajMWU9lV5BdCXiZnqdZgmU=/fit-in/200x150/filters:strip_icc()/pic7398904.jpg",
    "date": "2025-02-02",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "notes": "쿠알라룸푸르",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-02-02T12:31:22.000Z",
    "updatedAt": "2025-02-02T12:31:46.000Z"
  },
  {
    "id": "play-4e940b8b-f84e-414f-b876-70095ee0ae2d",
    "gameId": "game-259",
    "gameTitleKr": "Beyond the Horizon",
    "gameTitleEn": "Beyond the Horizon",
    "gameImage": "https://cf.geekdo-images.com/yaCOVF7EN1T3y1RDLPqpXg__thumb/img/nIZGWEy6CgL_j7qmkIhDW9hlt-c=/fit-in/200x150/filters:strip_icc()/pic8209513.jpg",
    "date": "2025-02-02",
    "durationMinutes": 156,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 71,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 117,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 40,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-02-02T13:16:46.000Z",
    "updatedAt": "2025-02-02T15:52:30.000Z"
  },
  {
    "id": "play-e6ed9368-dd8a-4c68-927f-a7f368bd9302",
    "gameId": "game-259",
    "gameTitleKr": "Beyond the Horizon",
    "gameTitleEn": "Beyond the Horizon",
    "gameImage": "https://cf.geekdo-images.com/yaCOVF7EN1T3y1RDLPqpXg__thumb/img/nIZGWEy6CgL_j7qmkIhDW9hlt-c=/fit-in/200x150/filters:strip_icc()/pic8209513.jpg",
    "date": "2025-02-02",
    "durationMinutes": 124,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 108,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 101,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 115,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-02-02T16:00:29.000Z",
    "updatedAt": "2025-02-02T18:04:40.000Z"
  },
  {
    "id": "play-71783832-2a43-4642-bb4e-767233ba8dd1",
    "gameId": "game-214",
    "gameTitleKr": "스플렌더: Pokémon (Splendor: Pokémon)",
    "gameTitleEn": "스플렌더: Pokémon (Splendor: Pokémon)",
    "gameImage": "https://cf.geekdo-images.com/o6HpiLCBBFvc7XvBv7DEig__thumb/img/cP3zFhQXbpOo4jMbXWgPShAdn4E=/fit-in/200x150/filters:strip_icc()/pic7902371.jpg",
    "date": "2025-02-02",
    "durationMinutes": 31,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 20,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 20,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 19,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-02-02T18:21:22.000Z",
    "updatedAt": "2025-02-02T18:52:39.000Z"
  },
  {
    "id": "play-9b572481-5da9-4ce4-8894-144ea47d81e8",
    "gameId": "game-262",
    "gameTitleKr": "Rock Hard: 1977",
    "gameTitleEn": "Rock Hard: 1977",
    "gameImage": "https://cf.geekdo-images.com/CrJdKWVGgg24btEKtxNyzA__thumb/img/iQkfQCZiXs2r4igjeAe_4bHgmks=/fit-in/200x150/filters:strip_icc()/pic8288389.jpg",
    "date": "2025-02-15",
    "durationMinutes": 122,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 73,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 20,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 85,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 85,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-02-15T11:39:58.000Z",
    "updatedAt": "2025-02-15T13:42:30.000Z"
  },
  {
    "id": "play-5d2cd60f-315d-427f-b722-6447a693ca4d",
    "gameId": "game-263",
    "gameTitleKr": "Number 9",
    "gameTitleEn": "NMBR 9",
    "gameImage": "https://cf.geekdo-images.com/a6j6yZmBJ5J2hcuo0KOW-A__thumb/img/w62iXqdK9cU_QCAwJffXewexjaU=/fit-in/200x150/filters:strip_icc()/pic3328269.jpg",
    "date": "2025-02-15",
    "durationMinutes": 19,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 84,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 96,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 65,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 55,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-02-15T14:01:29.000Z",
    "updatedAt": "2025-02-15T14:21:02.000Z"
  },
  {
    "id": "play-2297a5ca-4666-473b-a7c8-f5be82299d4f",
    "gameId": "game-264",
    "gameTitleKr": "Raising Robots",
    "gameTitleEn": "Raising Robots",
    "gameImage": "https://cf.geekdo-images.com/kGmrDjZ1ZZ3HddqqN8aqnQ__thumb/img/JfazUjPd-mKowbCESp0nYgYYJ1U=/fit-in/200x150/filters:strip_icc()/pic7366753.png",
    "date": "2025-02-15",
    "durationMinutes": 103,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 87,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 110,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 81,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 116,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-02-15T17:09:00.000Z",
    "updatedAt": "2025-02-15T18:52:32.000Z"
  },
  {
    "id": "play-563c5a92-81d8-4fc1-896b-3dea123f9967",
    "gameId": "game-265",
    "gameTitleKr": "Wind the Film!",
    "gameTitleEn": "Photograph",
    "gameImage": "https://cf.geekdo-images.com/hZxtHIrpYhtkrkx5etMBBQ__thumb/img/m3WxHxBnv4JaP3NU5UmR3Ano20Y=/fit-in/200x150/filters:strip_icc()/pic7245179.jpg",
    "date": "2025-02-15",
    "durationMinutes": 45,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 21,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 8,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 19,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 29,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-02-15T19:09:00.000Z",
    "updatedAt": "2025-02-15T19:54:24.000Z"
  },
  {
    "id": "play-ce380fd2-5618-4a3a-ba50-c71f446887de",
    "gameId": "game-219",
    "gameTitleKr": "Mind MGMT: The Psychic Espionage “Game.”",
    "gameTitleEn": "Mind MGMT: The Psychic Espionage “Game.”",
    "gameImage": "https://cf.geekdo-images.com/hYP-VIJGRFR8yB78-UN7Rg__thumb/img/e0Yk_RzMK0b7jwcoR96UeJpjy3c=/fit-in/200x150/filters:strip_icc()/pic5154610.jpg",
    "date": "2025-02-16",
    "durationMinutes": 46,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "role": "Recruiter",
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "role": "Rogue Agent",
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-02-16T11:19:34.000Z",
    "updatedAt": "2025-02-16T12:05:17.000Z"
  },
  {
    "id": "play-af70b8a5-0d82-429f-8596-8367f5577562",
    "gameId": "game-219",
    "gameTitleKr": "Mind MGMT: The Psychic Espionage “Game.”",
    "gameTitleEn": "Mind MGMT: The Psychic Espionage “Game.”",
    "gameImage": "https://cf.geekdo-images.com/hYP-VIJGRFR8yB78-UN7Rg__thumb/img/e0Yk_RzMK0b7jwcoR96UeJpjy3c=/fit-in/200x150/filters:strip_icc()/pic5154610.jpg",
    "date": "2025-02-16",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "role": "Recruiter",
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "role": "Rogue Agent",
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-02-16T13:06:34.000Z",
    "updatedAt": "2025-02-16T13:06:53.000Z"
  },
  {
    "id": "play-4f92841a-6970-4ea8-b5df-20c0884621fc",
    "gameId": "game-219",
    "gameTitleKr": "Mind MGMT: The Psychic Espionage “Game.”",
    "gameTitleEn": "Mind MGMT: The Psychic Espionage “Game.”",
    "gameImage": "https://cf.geekdo-images.com/hYP-VIJGRFR8yB78-UN7Rg__thumb/img/e0Yk_RzMK0b7jwcoR96UeJpjy3c=/fit-in/200x150/filters:strip_icc()/pic5154610.jpg",
    "date": "2025-02-16",
    "durationMinutes": 62,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "role": "Recruiter",
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "role": "Rogue Agent",
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-02-16T13:06:55.000Z",
    "updatedAt": "2025-02-16T14:08:26.000Z"
  },
  {
    "id": "play-4d46a8d0-5dad-41f5-a779-502dfb785c00",
    "gameId": "game-221",
    "gameTitleKr": "Dune: Imperium – Uprising",
    "gameTitleEn": "Dune: Imperium – Uprising",
    "gameImage": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__thumb/img/H6qmxJrRFjtOAPZOfDoZ480-46I=/fit-in/200x150/filters:strip_icc()/pic7664424.jpg",
    "date": "2025-02-16",
    "durationMinutes": 94,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 6,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 10,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-02-16T14:40:17.000Z",
    "updatedAt": "2025-02-16T16:14:11.000Z"
  },
  {
    "id": "play-008c7578-4f44-4c63-8ab9-b8ea5bac70c7",
    "gameId": "game-32",
    "gameTitleKr": "Gizmos",
    "gameTitleEn": "Gizmos",
    "gameImage": "https://cf.geekdo-images.com/zin82Hg4MXck86t8fzbsdA__thumb/img/e-UqOrMfsLCh2T_igK3wkoFrOu8=/fit-in/200x150/filters:strip_icc()/pic4169718.png",
    "date": "2025-02-16",
    "durationMinutes": 28,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 49,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 29,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-02-16T16:28:41.000Z",
    "updatedAt": "2025-02-16T16:56:50.000Z"
  },
  {
    "id": "play-c2a4d4b7-ad57-4b1a-b007-da86a21bd983",
    "gameId": "game-32",
    "gameTitleKr": "Gizmos",
    "gameTitleEn": "Gizmos",
    "gameImage": "https://cf.geekdo-images.com/zin82Hg4MXck86t8fzbsdA__thumb/img/e-UqOrMfsLCh2T_igK3wkoFrOu8=/fit-in/200x150/filters:strip_icc()/pic4169718.png",
    "date": "2025-02-16",
    "durationMinutes": 23,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 42,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 42,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-02-16T16:56:51.000Z",
    "updatedAt": "2025-02-16T17:19:53.000Z"
  },
  {
    "id": "play-bb733d1c-c4e5-41fd-9c96-aef2b444a943",
    "gameId": "game-178",
    "gameTitleKr": "Marvel Dice Throne",
    "gameTitleEn": "Marvel Dice Throne",
    "gameImage": "https://cf.geekdo-images.com/LEkxd7ts6JwMvNBkz6Eavw__thumb/img/42MA7lGbfeM-hePXc7Dy3JwBj9k=/fit-in/200x150/filters:strip_icc()/pic6796048.jpg",
    "date": "2025-02-16",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-02-16T18:23:23.000Z",
    "updatedAt": "2025-02-16T18:23:45.000Z"
  },
  {
    "id": "play-eefb5643-c146-4007-beee-160d2275215a",
    "gameId": "game-267",
    "gameTitleKr": "Century: Golem Edition",
    "gameTitleEn": "Century: Golem Edition",
    "gameImage": "https://cf.geekdo-images.com/1bihoShOuqaCuZJXB3Q2gQ__thumb/img/dvGQkdnwtcwAmcxHR_7J17OsLjQ=/fit-in/200x150/filters:strip_icc()/pic3936124.jpg",
    "date": "2025-02-22",
    "durationMinutes": 42,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 71,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-58",
        "name": "모래상어",
        "score": 46,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 60,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 54,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-02-22T13:10:07.000Z",
    "updatedAt": "2025-02-22T13:52:54.000Z"
  },
  {
    "id": "play-c1e3447a-d574-40e1-a6cb-c082b5ace11a",
    "gameId": "game-262",
    "gameTitleKr": "Rock Hard: 1977",
    "gameTitleEn": "Rock Hard: 1977",
    "gameImage": "https://cf.geekdo-images.com/CrJdKWVGgg24btEKtxNyzA__thumb/img/iQkfQCZiXs2r4igjeAe_4bHgmks=/fit-in/200x150/filters:strip_icc()/pic8288389.jpg",
    "date": "2025-02-22",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 89,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-58",
        "name": "모래상어",
        "score": 38,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 75,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 51,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-02-22T16:43:24.000Z",
    "updatedAt": "2025-02-22T16:43:43.000Z"
  },
  {
    "id": "play-31e279e5-28a3-4732-9334-eaa515a1adb5",
    "gameId": "game-162",
    "gameTitleKr": "Tavarua",
    "gameTitleEn": "Tavarua",
    "gameImage": "https://cf.geekdo-images.com/7Thfly7Q8y_MwrBJvev1fQ__thumb/img/1uR1tR6nNqp1N5TvvICS-VuV0vg=/fit-in/200x150/filters:strip_icc()/pic3884903.jpg",
    "date": "2025-02-22",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-58",
        "name": "모래상어",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-02-22T18:09:47.000Z",
    "updatedAt": "2025-02-22T18:10:15.000Z"
  },
  {
    "id": "play-dc400fbc-78ab-49c2-a693-fdcc229e0a2e",
    "gameId": "game-268",
    "gameTitleKr": "Hegemony: Lead Your Class to Victory",
    "gameTitleEn": "Hegemony: Lead Your Class to Victory",
    "gameImage": "https://cf.geekdo-images.com/DCLgJlrvB-EqL6A3WgQLMQ__thumb/img/9yp6ANJx6cqdQqQ6hkNr3zA88vw=/fit-in/200x150/filters:strip_icc()/pic5715770.jpg",
    "date": "2025-03-01",
    "durationMinutes": 218,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-48",
        "name": "토리",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-03-01T15:53:10.000Z",
    "updatedAt": "2025-03-01T19:32:14.000Z"
  },
  {
    "id": "play-e4676ed4-0c1c-430c-b697-eb8d663a9652",
    "gameId": "game-269",
    "gameTitleKr": "Nucleum",
    "gameTitleEn": "Nucleum",
    "gameImage": "https://cf.geekdo-images.com/fIVUaMvbfy6GCOgfxt7xaw__thumb/img/jKsO4nKmtNjX5bfH7aCPeK7hsqU=/fit-in/200x150/filters:strip_icc()/pic7647168.jpg",
    "date": "2025-03-09",
    "durationMinutes": 229,
    "locationId": "loc-15",
    "locationName": "브레인푸딩",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 144,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 160,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 55,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-03-09T10:24:09.000Z",
    "updatedAt": "2025-03-09T14:56:46.000Z"
  },
  {
    "id": "play-0a68462d-9a0a-477d-aebe-e9f5d1117dc5",
    "gameId": "game-268",
    "gameTitleKr": "Hegemony: Lead Your Class to Victory",
    "gameTitleEn": "Hegemony: Lead Your Class to Victory",
    "gameImage": "https://cf.geekdo-images.com/DCLgJlrvB-EqL6A3WgQLMQ__thumb/img/9yp6ANJx6cqdQqQ6hkNr3zA88vw=/fit-in/200x150/filters:strip_icc()/pic5715770.jpg",
    "date": "2025-03-09",
    "durationMinutes": 189,
    "locationId": "loc-15",
    "locationName": "브레인푸딩",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 61,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 66,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 63,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-03-09T15:16:09.000Z",
    "updatedAt": "2025-03-09T18:25:28.000Z"
  },
  {
    "id": "play-7277e076-74ce-4efe-bdc0-6ddb14fb7552",
    "gameId": "game-178",
    "gameTitleKr": "Marvel Dice Throne",
    "gameTitleEn": "Marvel Dice Throne",
    "gameImage": "https://cf.geekdo-images.com/LEkxd7ts6JwMvNBkz6Eavw__thumb/img/42MA7lGbfeM-hePXc7Dy3JwBj9k=/fit-in/200x150/filters:strip_icc()/pic6796048.jpg",
    "date": "2025-03-16",
    "durationMinutes": 87,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "role": "블랙팬서",
        "newPlayer": false
      },
      {
        "playerId": "player-58",
        "name": "모래상어",
        "winner": false,
        "startPlayer": false,
        "role": "스파이더맨",
        "newPlayer": true
      }
    ],
    "createdAt": "2025-03-16T13:50:05.000Z",
    "updatedAt": "2025-03-16T15:17:08.000Z"
  },
  {
    "id": "play-16a3031e-5c75-451e-b09c-00be5ea5f622",
    "gameId": "game-262",
    "gameTitleKr": "Rock Hard: 1977",
    "gameTitleEn": "Rock Hard: 1977",
    "gameImage": "https://cf.geekdo-images.com/CrJdKWVGgg24btEKtxNyzA__thumb/img/iQkfQCZiXs2r4igjeAe_4bHgmks=/fit-in/200x150/filters:strip_icc()/pic8288389.jpg",
    "date": "2025-03-16",
    "durationMinutes": 97,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 50,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "score": 51,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-58",
        "name": "모래상어",
        "score": 32,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "score": 60,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-03-16T15:17:09.000Z",
    "updatedAt": "2025-03-16T16:53:51.000Z"
  },
  {
    "id": "play-4514cbaa-8d14-41b3-9b14-77f10ca3e952",
    "gameId": "game-221",
    "gameTitleKr": "Dune: Imperium – Uprising",
    "gameTitleEn": "Dune: Imperium – Uprising",
    "gameImage": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__thumb/img/H6qmxJrRFjtOAPZOfDoZ480-46I=/fit-in/200x150/filters:strip_icc()/pic7664424.jpg",
    "date": "2025-03-16",
    "durationMinutes": 137,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 12,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-58",
        "name": "모래상어",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "score": 7,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-03-16T17:36:56.000Z",
    "updatedAt": "2025-03-16T19:54:04.000Z"
  },
  {
    "id": "play-8fa19871-8bc6-4204-b142-58154f076dae",
    "gameId": "game-270",
    "gameTitleKr": "1%: A Game of Strategic Chance",
    "gameTitleEn": "1%: A Game of Strategic Chance",
    "gameImage": "https://cf.geekdo-images.com/K2spoKKeCHm7OHonaSdK3g__thumb/img/aRHiqdERA2rlcG5XmLNL1DxSZF0=/fit-in/200x150/filters:strip_icc()/pic7293478.jpg",
    "date": "2025-03-16",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-58",
        "name": "모래상어",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-03-16T20:22:25.000Z",
    "updatedAt": "2025-03-16T20:32:17.000Z"
  },
  {
    "id": "play-f838bb6a-1462-48aa-b346-6ecb0edd8cea",
    "gameId": "game-270",
    "gameTitleKr": "1%: A Game of Strategic Chance",
    "gameTitleEn": "1%: A Game of Strategic Chance",
    "gameImage": "https://cf.geekdo-images.com/K2spoKKeCHm7OHonaSdK3g__thumb/img/aRHiqdERA2rlcG5XmLNL1DxSZF0=/fit-in/200x150/filters:strip_icc()/pic7293478.jpg",
    "date": "2025-03-16",
    "durationMinutes": 12,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-58",
        "name": "모래상어",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-03-16T20:32:42.000Z",
    "updatedAt": "2025-03-16T20:44:59.000Z"
  },
  {
    "id": "play-4ccdc873-b86c-4491-a1c8-44f4a76ea947",
    "gameId": "game-271",
    "gameTitleKr": "Wyrmspan",
    "gameTitleEn": "Wyrmspan",
    "gameImage": "https://cf.geekdo-images.com/oXUkkh9uq3zBVWQ8mbgMfQ__thumb/img/Ic3yRKTjVe26RgDzIdLsKn8Hztk=/fit-in/200x150/filters:strip_icc()/pic7947338.png",
    "date": "2025-04-21",
    "durationMinutes": 107,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 90,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 84,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-04-21T19:27:47.000Z",
    "updatedAt": "2025-04-21T21:15:10.000Z"
  },
  {
    "id": "play-33b89588-f8e8-466f-b911-c5c877f778be",
    "gameId": "game-52",
    "gameTitleKr": "Sagrada",
    "gameTitleEn": "Sagrada",
    "gameImage": "https://cf.geekdo-images.com/PZt3EAAGV3dFIVuwMR0AEw__thumb/img/1m4aryOW1MOpq-8jGkF6gDTJmCY=/fit-in/200x150/filters:strip_icc()/pic3525224.jpg",
    "date": "2025-04-26",
    "durationMinutes": 52,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 52,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 50,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-24",
        "name": "연우",
        "score": 70,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-04-26T15:15:12.000Z",
    "updatedAt": "2025-04-26T16:07:01.000Z"
  },
  {
    "id": "play-5f77262d-4b6f-4f67-bdb6-2c10c2fb7d3e",
    "gameId": "game-43",
    "gameTitleKr": "On Mars",
    "gameTitleEn": "On Mars",
    "gameImage": "https://cf.geekdo-images.com/Nm0Iw8NoiM9V8IsifimGBw__thumb/img/4GFbhkEWyIublXmikE2Tep6wSIQ=/fit-in/200x150/filters:strip_icc()/pic4357658.jpg",
    "date": "2025-04-26",
    "durationMinutes": 199,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 110,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 97,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-24",
        "name": "연우",
        "score": 48,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-04-26T17:26:41.000Z",
    "updatedAt": "2025-04-26T20:46:07.000Z"
  },
  {
    "id": "play-4c7b9172-cf69-45a6-b947-c604a46d54ad",
    "gameId": "game-272",
    "gameTitleKr": "Challengers!",
    "gameTitleEn": "Challengers!",
    "gameImage": "https://cf.geekdo-images.com/GtLESZ4ZjqikK12bjBTmig__thumb/img/66Emb1wn1JD_5_9XdsYY2DgMVMA=/fit-in/200x150/filters:strip_icc()/pic7040521.jpg",
    "date": "2025-05-01",
    "durationMinutes": 33,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 23,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 16,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 32,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 14,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-01T09:41:37.000Z",
    "updatedAt": "2025-05-01T10:20:26.000Z"
  },
  {
    "id": "play-47e7d7c2-fdb0-4dfb-8fa3-b5dfb1090c21",
    "gameId": "game-273",
    "gameTitleKr": "SETI: Search for Extraterrestrial Intelligence",
    "gameTitleEn": "SETI: Search for Extraterrestrial Intelligence",
    "gameImage": "https://cf.geekdo-images.com/_BUXOVRDU9g_eRwgpR5ZZw__thumb/img/icamIZ4nP3HHH3vczZqTr1hQgKY=/fit-in/200x150/filters:strip_icc()/pic8160466.jpg",
    "date": "2025-05-04",
    "durationMinutes": 200,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 174,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 129,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 154,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 151,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-04T13:24:36.000Z",
    "updatedAt": "2025-05-04T16:44:24.000Z"
  },
  {
    "id": "play-241530e2-3b58-423d-9337-c5548a85e7e1",
    "gameId": "game-218",
    "gameTitleKr": "Millimemory",
    "gameTitleEn": "Millimemory",
    "gameImage": "https://cf.geekdo-images.com/WF1umNtdqTPJm5Awfu5paA__thumb/img/Mo0GyDJkP8bqdXOznFAylGxeQJ4=/fit-in/200x150/filters:strip_icc()/pic7736468.png",
    "date": "2025-05-04",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 8,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 12,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 0,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 13,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-05-04T17:10:18.000Z",
    "updatedAt": "2025-05-04T17:10:59.000Z"
  },
  {
    "id": "play-75eff92d-e5f4-4fc2-b3bc-43542164ec04",
    "gameId": "game-274",
    "gameTitleKr": "가지각새",
    "gameTitleEn": "Nanatoridori",
    "gameImage": "https://cf.geekdo-images.com/NBgCJ5Xam4XJQIxrD_IadA__thumb/img/iTA9x3VrhS04RImFFbg1mzgGbs4=/fit-in/200x150/filters:strip_icc()/pic8267729.jpg",
    "date": "2025-05-04",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-04T17:34:07.000Z",
    "updatedAt": "2025-05-04T17:34:15.000Z"
  },
  {
    "id": "play-9b4c9820-411d-447e-b325-2a3ef3e3be3d",
    "gameId": "game-30",
    "gameTitleKr": "Foundations of Rome",
    "gameTitleEn": "Foundations of Rome",
    "gameImage": "https://cf.geekdo-images.com/lRB91NF3OPeSff2o17NX3Q__thumb/img/CWAVZWfBegleQWJVhkehmDmxnbU=/fit-in/200x150/filters:strip_icc()/pic6706206.jpg",
    "date": "2025-05-04",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 124,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 89,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 103,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 96,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-05-04T19:03:57.000Z",
    "updatedAt": "2025-05-04T19:05:25.000Z"
  },
  {
    "id": "play-f4316fbf-9260-49fd-81fa-ecc3c06d39aa",
    "gameId": "game-273",
    "gameTitleKr": "SETI: Search for Extraterrestrial Intelligence",
    "gameTitleEn": "SETI: Search for Extraterrestrial Intelligence",
    "gameImage": "https://cf.geekdo-images.com/_BUXOVRDU9g_eRwgpR5ZZw__thumb/img/icamIZ4nP3HHH3vczZqTr1hQgKY=/fit-in/200x150/filters:strip_icc()/pic8160466.jpg",
    "date": "2025-05-06",
    "durationMinutes": 152,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 185,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 170,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 200,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-06T09:45:11.000Z",
    "updatedAt": "2025-05-06T12:17:03.000Z"
  },
  {
    "id": "play-9e7bcc9f-8a5a-4914-9040-5529361a325a",
    "gameId": "game-275",
    "gameTitleKr": "Room Share",
    "gameTitleEn": "Room Share",
    "gameImage": "https://cf.geekdo-images.com/ItD_G7n7zrshmlVrJ0i7VA__thumb/img/ONVQQq4yT7VbRpDb810MEwMWUiA=/fit-in/200x150/filters:strip_icc()/pic8643033.png",
    "date": "2025-05-06",
    "durationMinutes": 27,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 6,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 0,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-06T12:25:34.000Z",
    "updatedAt": "2025-05-06T12:54:22.000Z"
  },
  {
    "id": "play-006e62b2-305d-4489-8ad0-4f52244781f6",
    "gameId": "game-276",
    "gameTitleKr": "Salton Sea",
    "gameTitleEn": "Salton Sea",
    "gameImage": "https://cf.geekdo-images.com/pP4AVa3WNYvn2nWpE-Q6xw__thumb/img/dXEMvFFhoIj3QkSoK4YTCbAsJEo=/fit-in/200x150/filters:strip_icc()/pic7821718.png",
    "date": "2025-05-06",
    "durationMinutes": 205,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 77,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 62,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 95,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-06T14:03:54.000Z",
    "updatedAt": "2025-05-06T17:30:41.000Z"
  },
  {
    "id": "play-6bd08183-17ed-465f-b0a7-73469ef0dec1",
    "gameId": "game-277",
    "gameTitleKr": "Hallertau",
    "gameTitleEn": "Hallertau",
    "gameImage": "https://cf.geekdo-images.com/AdJBpY_o7PQEcoJPU1QdTg__thumb/img/4E7KeT1tnpwc5e4DJujgh8R8eCk=/fit-in/200x150/filters:strip_icc()/pic5869977.jpg",
    "date": "2025-05-11",
    "durationMinutes": 139,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 73,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 78,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 93,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 97,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-11T11:14:04.000Z",
    "updatedAt": "2025-05-11T13:33:10.000Z"
  },
  {
    "id": "play-d40a23bd-167f-405f-af99-715a21b2c72b",
    "gameId": "game-278",
    "gameTitleKr": "HITSTER",
    "gameTitleEn": "HITSTER",
    "gameImage": "https://cf.geekdo-images.com/R4aQbIo0KZ6npxfhUc7ZYw__thumb/img/fnJz2hI7VjmEKxXUrztqU4XNlms=/fit-in/200x150/filters:strip_icc()/pic6958739.png",
    "date": "2025-05-11",
    "durationMinutes": 44,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-11T14:10:25.000Z",
    "updatedAt": "2025-05-11T14:54:55.000Z"
  },
  {
    "id": "play-cd3f56a4-17bf-40a8-bf0d-38f67d97e52d",
    "gameId": "game-278",
    "gameTitleKr": "HITSTER",
    "gameTitleEn": "HITSTER",
    "gameImage": "https://cf.geekdo-images.com/R4aQbIo0KZ6npxfhUc7ZYw__thumb/img/fnJz2hI7VjmEKxXUrztqU4XNlms=/fit-in/200x150/filters:strip_icc()/pic6958739.png",
    "date": "2025-05-11",
    "durationMinutes": 12,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-05-11T14:54:56.000Z",
    "updatedAt": "2025-05-11T15:06:46.000Z"
  },
  {
    "id": "play-1254b650-feb6-4fc2-9ee3-bd31e141c5e6",
    "gameId": "game-276",
    "gameTitleKr": "Salton Sea",
    "gameTitleEn": "Salton Sea",
    "gameImage": "https://cf.geekdo-images.com/pP4AVa3WNYvn2nWpE-Q6xw__thumb/img/dXEMvFFhoIj3QkSoK4YTCbAsJEo=/fit-in/200x150/filters:strip_icc()/pic7821718.png",
    "date": "2025-05-11",
    "durationMinutes": 134,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 81,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 33,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 46,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 70,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-05-11T15:13:54.000Z",
    "updatedAt": "2025-05-11T17:27:51.000Z"
  },
  {
    "id": "play-17af9b98-2c26-424c-b170-af7145719e6c",
    "gameId": "game-281",
    "gameTitleKr": "GOLD",
    "gameTitleEn": "GOLD",
    "gameImage": "https://cf.geekdo-images.com/O2Dsoc2CfpnQXxojyLGB1A__thumb/img/rNnsEQJdxF7iOM7RYFMrWhYAn6E=/fit-in/200x150/filters:strip_icc()/pic5529511.png",
    "date": "2025-05-11",
    "durationMinutes": 13,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 10,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 10,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 14,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 17,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-11T17:43:32.000Z",
    "updatedAt": "2025-05-11T17:56:29.000Z"
  },
  {
    "id": "play-51ab4cbc-a611-423a-85a7-03c9652c5af6",
    "gameId": "game-280",
    "gameTitleKr": "Smart10",
    "gameTitleEn": "Smart10",
    "gameImage": "https://cf.geekdo-images.com/pwa0lKfmlE4PvFo-YVxrLQ__thumb/img/4RXK5M7g8_GRW_2HjyLdTjS3_fw=/fit-in/200x150/filters:strip_icc()/pic4945756.jpg",
    "date": "2025-05-11",
    "durationMinutes": 17,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 18,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 8,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 17,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 14,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-11T17:58:22.000Z",
    "updatedAt": "2025-05-11T18:14:59.000Z"
  },
  {
    "id": "play-77f6edb4-7943-4637-b22c-13ecdde1b049",
    "gameId": "game-282",
    "gameTitleKr": "스위스 사는 스미스씨",
    "gameTitleEn": "Mr. Smith Living in Swiss",
    "gameImage": "https://cf.geekdo-images.com/zdqSZOMcr0D8pF4mFrzR6Q__thumb/img/ju0yix8D_oWkG8xSXaiLRbj0NzY=/fit-in/200x150/filters:strip_icc()/pic8350696.jpg",
    "date": "2025-05-11",
    "durationMinutes": 45,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-11T18:27:58.000Z",
    "updatedAt": "2025-05-11T18:28:13.000Z"
  },
  {
    "id": "play-861e2a48-f21b-4379-ac15-502ba6ea28e3",
    "gameId": "game-282",
    "gameTitleKr": "스위스 사는 스미스씨",
    "gameTitleEn": "Mr. Smith Living in Swiss",
    "gameImage": "https://cf.geekdo-images.com/zdqSZOMcr0D8pF4mFrzR6Q__thumb/img/ju0yix8D_oWkG8xSXaiLRbj0NzY=/fit-in/200x150/filters:strip_icc()/pic8350696.jpg",
    "date": "2025-05-11",
    "durationMinutes": 3,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-05-11T18:28:14.000Z",
    "updatedAt": "2025-05-11T18:31:29.000Z"
  },
  {
    "id": "play-71629014-c160-4e88-91e7-45885ff7dce0",
    "gameId": "game-283",
    "gameTitleKr": "Ciao, Ciao...",
    "gameTitleEn": "Ciao, Ciao...",
    "gameImage": "https://cf.geekdo-images.com/Jvj9u2383gDQNj_KKx8TiA__thumb/img/czxTcPE5qQa164I7O8vuYvrxe4A=/fit-in/200x150/filters:strip_icc()/pic5763720.jpg",
    "date": "2025-05-11",
    "durationMinutes": 22,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 1,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 0,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 0,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 7,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-11T18:35:08.000Z",
    "updatedAt": "2025-05-11T18:58:33.000Z"
  },
  {
    "id": "play-3e665980-866a-4f78-81c4-2db08ef7fefd",
    "gameId": "game-284",
    "gameTitleKr": "Topito",
    "gameTitleEn": "Topito",
    "gameImage": "https://cf.geekdo-images.com/wYb7M6O3Ap4CX1EyG-7P1g__thumb/img/_xyJSdaSGVEwuSJrLJSdAeNXhoY=/fit-in/200x150/filters:strip_icc()/pic3750973.jpg",
    "date": "2025-05-11",
    "durationMinutes": 11,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-11T19:00:40.000Z",
    "updatedAt": "2025-05-11T19:11:53.000Z"
  },
  {
    "id": "play-9e922a7e-d5a1-47e2-b879-3d8f783bb566",
    "gameId": "game-285",
    "gameTitleKr": "Wonky",
    "gameTitleEn": "Wonky",
    "gameImage": "https://cf.geekdo-images.com/69XxHTUVrlf35jBq-_3h0g__thumb/img/KDWQJmbLDIJ6v1UjnOvBhXfKwPY=/fit-in/200x150/filters:strip_icc()/pic8172774.jpg",
    "date": "2025-05-11",
    "durationMinutes": 17,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-11T19:13:16.000Z",
    "updatedAt": "2025-05-11T19:30:14.000Z"
  },
  {
    "id": "play-08d36b97-dbc4-46de-bb9f-967eccb6dd17",
    "gameId": "game-286",
    "gameTitleKr": "The Lord of the Rings: Duel for Middle-earth",
    "gameTitleEn": "The Lord of the Rings: Duel for Middle-earth",
    "gameImage": "https://cf.geekdo-images.com/EybxJlUc9rz7F7HVFLqsdw__thumb/img/rojFW0-h-bteedVG4aJXG1x7V0o=/fit-in/200x150/filters:strip_icc()/pic8378939.jpg",
    "date": "2025-05-17",
    "durationMinutes": 15,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "role": "가운데땅정복(사우론)",
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-17T13:19:59.000Z",
    "updatedAt": "2025-05-17T14:07:02.000Z"
  },
  {
    "id": "play-e632e30e-e92e-42bd-911b-de014f3b464e",
    "gameId": "game-286",
    "gameTitleKr": "The Lord of the Rings: Duel for Middle-earth",
    "gameTitleEn": "The Lord of the Rings: Duel for Middle-earth",
    "gameImage": "https://cf.geekdo-images.com/EybxJlUc9rz7F7HVFLqsdw__thumb/img/rojFW0-h-bteedVG4aJXG1x7V0o=/fit-in/200x150/filters:strip_icc()/pic8378939.jpg",
    "date": "2025-05-17",
    "durationMinutes": 2,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "role": "반지원정(사우론)",
        "newPlayer": false
      }
    ],
    "createdAt": "2025-05-17T14:04:03.000Z",
    "updatedAt": "2025-05-17T14:06:28.000Z"
  },
  {
    "id": "play-3b65f33f-20f1-44d8-b847-b7853d8bdf48",
    "gameId": "game-286",
    "gameTitleKr": "The Lord of the Rings: Duel for Middle-earth",
    "gameTitleEn": "The Lord of the Rings: Duel for Middle-earth",
    "gameImage": "https://cf.geekdo-images.com/EybxJlUc9rz7F7HVFLqsdw__thumb/img/rojFW0-h-bteedVG4aJXG1x7V0o=/fit-in/200x150/filters:strip_icc()/pic8378939.jpg",
    "date": "2025-05-17",
    "durationMinutes": 24,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "role": "지역수(반지원정대)",
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-05-17T14:23:12.000Z",
    "updatedAt": "2025-05-17T14:47:12.000Z"
  },
  {
    "id": "play-71d8a2a2-fa48-4bc3-a30b-b9dce0bf73a2",
    "gameId": "game-278",
    "gameTitleKr": "HITSTER",
    "gameTitleEn": "HITSTER",
    "gameImage": "https://cf.geekdo-images.com/R4aQbIo0KZ6npxfhUc7ZYw__thumb/img/fnJz2hI7VjmEKxXUrztqU4XNlms=/fit-in/200x150/filters:strip_icc()/pic6958739.png",
    "date": "2025-05-24",
    "durationMinutes": 22,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-61",
        "name": "홍지수",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-24T11:15:05.000Z",
    "updatedAt": "2025-05-24T11:37:14.000Z"
  },
  {
    "id": "play-c3a7b225-9334-4b40-9075-6a1eb43bec95",
    "gameId": "game-248",
    "gameTitleKr": "Monkey Palace",
    "gameTitleEn": "Monkey Palace",
    "gameImage": "https://cf.geekdo-images.com/E0_jjeKtADvRnn0vSVGgeQ__thumb/img/oZkmJTRjIayLYOCs8eStlOVEEgo=/fit-in/200x150/filters:strip_icc()/pic8445137.png",
    "date": "2025-05-24",
    "durationMinutes": 29,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 32,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 40,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-61",
        "name": "홍지수",
        "score": 38,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-24T12:00:36.000Z",
    "updatedAt": "2025-05-24T12:29:45.000Z"
  },
  {
    "id": "play-880cc566-e363-4420-a948-42bf332e366c",
    "gameId": "game-15",
    "gameTitleKr": "Century: Spice Road",
    "gameTitleEn": "Century: Spice Road",
    "gameImage": "https://cf.geekdo-images.com/0_KEDk4lCvryf1Ju3YQJxA__thumb/img/FticvQmaT_qfdrX-hpSSK1ttRb0=/fit-in/200x150/filters:strip_icc()/pic3339551.jpg",
    "date": "2025-05-24",
    "durationMinutes": 32,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 73,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 55,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-61",
        "name": "홍지수",
        "score": 58,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-24T13:05:49.000Z",
    "updatedAt": "2025-05-24T13:38:44.000Z"
  },
  {
    "id": "play-cf11f1a7-8323-4272-86d0-ba3a90b7f32d",
    "gameId": "game-247",
    "gameTitleKr": "Surfosaurus MAX",
    "gameTitleEn": "Surfosaurus MAX",
    "gameImage": "https://cf.geekdo-images.com/_oIGFfPMAa0gHWNy7kJp7g__thumb/img/sDjXtzwxUmWreaMwHw8ofJaCaKc=/fit-in/200x150/filters:strip_icc()/pic7618281.jpg",
    "date": "2025-05-24",
    "durationMinutes": 13,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 88,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 26,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-61",
        "name": "홍지수",
        "score": 66,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-24T13:54:04.000Z",
    "updatedAt": "2025-05-24T14:07:38.000Z"
  },
  {
    "id": "play-820f8125-7169-4ae4-ac7c-4334beea4030",
    "gameId": "game-139",
    "gameTitleKr": "Dune: Imperium",
    "gameTitleEn": "Dune: Imperium",
    "gameImage": "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__thumb/img/JGgY-nBmkyB8WRp8vcoBLlNMQ5U=/fit-in/200x150/filters:strip_icc()/pic5666597.jpg",
    "date": "2025-05-24",
    "durationMinutes": 77,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 11,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-61",
        "name": "홍지수",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-24T14:52:56.000Z",
    "updatedAt": "2025-05-24T16:09:50.000Z"
  },
  {
    "id": "play-a1e0b7f0-23ea-4f21-be86-0ead5bfcb11e",
    "gameId": "game-213",
    "gameTitleKr": "Run, Mule, Run",
    "gameTitleEn": "Run, Mule, Run",
    "date": "2025-05-24",
    "durationMinutes": 13,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 4,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-61",
        "name": "홍지수",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-24T16:26:26.000Z",
    "updatedAt": "2025-05-24T16:39:10.000Z"
  },
  {
    "id": "play-11c0d6d1-67e1-423b-af79-e03601db8b9f",
    "gameId": "game-48",
    "gameTitleKr": "Q.E.",
    "gameTitleEn": "Q.E.",
    "gameImage": "https://cf.geekdo-images.com/47o_swlkRbfpMH3hnFZgtA__thumb/img/gT07BJ5Ynlopp-UIQRIySERKUmI=/fit-in/200x150/filters:strip_icc()/pic4383594.png",
    "date": "2025-05-24",
    "durationMinutes": 16,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 42,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 0,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-61",
        "name": "홍지수",
        "score": 31,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-24T17:10:33.000Z",
    "updatedAt": "2025-05-24T17:27:04.000Z"
  },
  {
    "id": "play-9aee3b9f-645c-4317-a9a9-ad3880d043de",
    "gameId": "game-2",
    "gameTitleKr": "Adrenaline",
    "gameTitleEn": "Adrenaline",
    "gameImage": "https://cf.geekdo-images.com/TiNI7bUCR2RPFMlvKEC9TQ__thumb/img/nnWEA6jjVsxPSuEC_Ooph9kzO_g=/fit-in/200x150/filters:strip_icc()/pic3476604.jpg",
    "date": "2025-05-24",
    "durationMinutes": 64,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 30,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 30,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-61",
        "name": "홍지수",
        "score": 18,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-24T18:04:57.000Z",
    "updatedAt": "2025-05-24T19:08:46.000Z"
  },
  {
    "id": "play-50749aae-e3e6-48b5-ac8d-7b339b3ac923",
    "gameId": "game-287",
    "gameTitleKr": "ニャイスコード (Nyaice! CODE)",
    "gameTitleEn": "ニャイスコード (Nyaice! CODE)",
    "gameImage": "https://cf.geekdo-images.com/JzRiqpkWjsbwCvBXCKKGow__thumb/img/E3QkQ8OIeqLFCpBRM-K_PuMXxFk=/fit-in/200x150/filters:strip_icc()/pic7900316.png",
    "date": "2025-05-25",
    "durationMinutes": 34,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-25T11:22:08.000Z",
    "updatedAt": "2025-05-25T11:56:03.000Z"
  },
  {
    "id": "play-69a95d0b-6f2c-4b39-b39b-ef563561c1bc",
    "gameId": "game-288",
    "gameTitleKr": "Dog Poker / Cat Poker",
    "gameTitleEn": "Dog Poker / Cat Poker",
    "gameImage": "https://cf.geekdo-images.com/FTalOz0oiLlAyESmXBNwqQ__thumb/img/YxRBK6bZ8nZjd612R5WlkuBO8Jc=/fit-in/200x150/filters:strip_icc()/pic8343587.jpg",
    "date": "2025-05-25",
    "durationMinutes": 17,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-25T11:58:00.000Z",
    "updatedAt": "2025-05-25T12:15:25.000Z"
  },
  {
    "id": "play-ac8c2ede-b400-4505-9a4e-8c0858f27fca",
    "gameId": "game-289",
    "gameTitleKr": "Mole Poker",
    "gameTitleEn": "Mole Poker",
    "gameImage": "https://cf.geekdo-images.com/RClHiw5h_0zkx0oqef7MEw__thumb/img/9JlAHpd9awtSPsaqzX2guhbpUlg=/fit-in/200x150/filters:strip_icc()/pic8567670.jpg",
    "date": "2025-05-25",
    "durationMinutes": 11,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-25T12:16:15.000Z",
    "updatedAt": "2025-05-25T12:27:40.000Z"
  },
  {
    "id": "play-68b87b91-73ae-451b-a62e-6beb3151add8",
    "gameId": "game-288",
    "gameTitleKr": "Dog Poker / Cat Poker",
    "gameTitleEn": "Dog Poker / Cat Poker",
    "gameImage": "https://cf.geekdo-images.com/FTalOz0oiLlAyESmXBNwqQ__thumb/img/YxRBK6bZ8nZjd612R5WlkuBO8Jc=/fit-in/200x150/filters:strip_icc()/pic8343587.jpg",
    "date": "2025-05-25",
    "durationMinutes": 27,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 38,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 58,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 57,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 102,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-05-25T12:28:59.000Z",
    "updatedAt": "2025-05-25T12:55:43.000Z"
  },
  {
    "id": "play-08ba9ef4-d940-402b-bd25-e134ece3bcd9",
    "gameId": "game-290",
    "gameTitleKr": "Trick & Snipers",
    "gameTitleEn": "Trick & Snipers",
    "gameImage": "https://cf.geekdo-images.com/RyCkeY5XNMsMwFAanvjMpg__thumb/img/qBDIyUjxL1m_XMiTvbOYsw2qyC0=/fit-in/200x150/filters:strip_icc()/pic8195413.jpg",
    "date": "2025-05-25",
    "durationMinutes": 12,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-25T12:56:17.000Z",
    "updatedAt": "2025-05-25T13:08:51.000Z"
  },
  {
    "id": "play-2d8a341d-43d2-43b3-948c-e113b14c8cf9",
    "gameId": "game-290",
    "gameTitleKr": "Trick & Snipers",
    "gameTitleEn": "Trick & Snipers",
    "gameImage": "https://cf.geekdo-images.com/RyCkeY5XNMsMwFAanvjMpg__thumb/img/qBDIyUjxL1m_XMiTvbOYsw2qyC0=/fit-in/200x150/filters:strip_icc()/pic8195413.jpg",
    "date": "2025-05-25",
    "durationMinutes": 8,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-05-25T13:08:52.000Z",
    "updatedAt": "2025-05-25T13:17:15.000Z"
  },
  {
    "id": "play-e13393df-8b9d-4923-88f8-4b0ed13ccbe6",
    "gameId": "game-278",
    "gameTitleKr": "HITSTER",
    "gameTitleEn": "HITSTER",
    "gameImage": "https://cf.geekdo-images.com/R4aQbIo0KZ6npxfhUc7ZYw__thumb/img/fnJz2hI7VjmEKxXUrztqU4XNlms=/fit-in/200x150/filters:strip_icc()/pic6958739.png",
    "date": "2025-05-25",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-05-25T14:20:10.000Z",
    "updatedAt": "2025-05-25T14:20:19.000Z"
  },
  {
    "id": "play-c4e56782-046b-446a-b88b-52127058edf2",
    "gameId": "game-279",
    "gameTitleKr": "Windmill Valley",
    "gameTitleEn": "Windmill Valley",
    "gameImage": "https://cf.geekdo-images.com/Z3mBHQuawFfI3ZTQ8Z64CA__thumb/img/Oo7FfbdgRd9GXJxb7-CMiU9jD9w=/fit-in/200x150/filters:strip_icc()/pic7796391.jpg",
    "date": "2025-05-25",
    "durationMinutes": 141,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 121,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 168,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 157,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 159,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-25T15:14:38.000Z",
    "updatedAt": "2025-05-25T17:36:34.000Z"
  },
  {
    "id": "play-70795e1f-1913-4c7b-bb84-060c90f00bca",
    "gameId": "game-291",
    "gameTitleKr": "TRICKTAKERs",
    "gameTitleEn": "TRICKTAKERs",
    "gameImage": "https://cf.geekdo-images.com/82FhiRTZdJQUa1Z8H33Tag__thumb/img/mLI0Pyem2uCMWxn6i9__W3YXcHU=/fit-in/200x150/filters:strip_icc()/pic7958476.png",
    "date": "2025-05-25",
    "durationMinutes": 42,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-25T17:47:11.000Z",
    "updatedAt": "2025-05-25T18:30:05.000Z"
  },
  {
    "id": "play-a9cc6fc0-4cb4-4362-a219-ac6c278fe4b6",
    "gameId": "game-291",
    "gameTitleKr": "TRICKTAKERs",
    "gameTitleEn": "TRICKTAKERs",
    "gameImage": "https://cf.geekdo-images.com/82FhiRTZdJQUa1Z8H33Tag__thumb/img/mLI0Pyem2uCMWxn6i9__W3YXcHU=/fit-in/200x150/filters:strip_icc()/pic7958476.png",
    "date": "2025-05-25",
    "durationMinutes": 42,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-05-25T18:30:06.000Z",
    "updatedAt": "2025-05-25T19:12:05.000Z"
  },
  {
    "id": "play-f9c3d116-7f6e-42b3-96e1-837153cc3b48",
    "gameId": "game-278",
    "gameTitleKr": "HITSTER",
    "gameTitleEn": "HITSTER",
    "gameImage": "https://cf.geekdo-images.com/R4aQbIo0KZ6npxfhUc7ZYw__thumb/img/fnJz2hI7VjmEKxXUrztqU4XNlms=/fit-in/200x150/filters:strip_icc()/pic6958739.png",
    "date": "2025-05-31",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-48",
        "name": "토리",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-31T13:20:03.000Z",
    "updatedAt": "2025-05-31T13:20:21.000Z"
  },
  {
    "id": "play-a68f7dc5-9611-48c2-84e4-5e24c7b80988",
    "gameId": "game-273",
    "gameTitleKr": "SETI: Search for Extraterrestrial Intelligence",
    "gameTitleEn": "SETI: Search for Extraterrestrial Intelligence",
    "gameImage": "https://cf.geekdo-images.com/_BUXOVRDU9g_eRwgpR5ZZw__thumb/img/icamIZ4nP3HHH3vczZqTr1hQgKY=/fit-in/200x150/filters:strip_icc()/pic8160466.jpg",
    "date": "2025-05-31",
    "durationMinutes": 223,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 179,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 162,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 196,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-48",
        "name": "토리",
        "score": 138,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-31T13:47:28.000Z",
    "updatedAt": "2025-05-31T17:31:04.000Z"
  },
  {
    "id": "play-491b156f-04f6-4907-a182-43f9c94d8de1",
    "gameId": "game-230",
    "gameTitleKr": "Faraway",
    "gameTitleEn": "Faraway",
    "gameImage": "https://cf.geekdo-images.com/u1cwi9BWSKsPxSkVO0BzbA__thumb/img/5G45GN8CE7pq38fJMMocmPtV4_U=/fit-in/200x150/filters:strip_icc()/pic7570101.png",
    "date": "2025-05-31",
    "durationMinutes": 27,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 65,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 72,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 31,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-48",
        "name": "토리",
        "score": 49,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-31T17:55:32.000Z",
    "updatedAt": "2025-05-31T18:22:37.000Z"
  },
  {
    "id": "play-dd1bf3a7-efb7-4b26-9b99-d88c9afa78a6",
    "gameId": "game-247",
    "gameTitleKr": "Surfosaurus MAX",
    "gameTitleEn": "Surfosaurus MAX",
    "gameImage": "https://cf.geekdo-images.com/_oIGFfPMAa0gHWNy7kJp7g__thumb/img/sDjXtzwxUmWreaMwHw8ofJaCaKc=/fit-in/200x150/filters:strip_icc()/pic7618281.jpg",
    "date": "2025-05-31",
    "durationMinutes": 20,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 80,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 66,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-48",
        "name": "토리",
        "score": 46,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-31T18:35:52.000Z",
    "updatedAt": "2025-05-31T18:56:14.000Z"
  },
  {
    "id": "play-02b79da2-4499-49f1-8efb-269e49577948",
    "gameId": "game-7",
    "gameTitleKr": "Barrage",
    "gameTitleEn": "Barrage",
    "gameImage": "https://cf.geekdo-images.com/jEPmWvvYpqkWrKOzqIHFsg__thumb/img/kMLIpeqA6UcUvQg2AdMwwQoEIfU=/fit-in/200x150/filters:strip_icc()/pic4336469.png",
    "date": "2025-05-31",
    "durationMinutes": 127,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-48",
        "name": "토리",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-05-31T21:06:21.000Z",
    "updatedAt": "2025-05-31T23:12:56.000Z"
  },
  {
    "id": "play-5efed45e-63d2-4463-8d51-ce8ba40cf60a",
    "gameId": "game-247",
    "gameTitleKr": "Surfosaurus MAX",
    "gameTitleEn": "Surfosaurus MAX",
    "gameImage": "https://cf.geekdo-images.com/_oIGFfPMAa0gHWNy7kJp7g__thumb/img/sDjXtzwxUmWreaMwHw8ofJaCaKc=/fit-in/200x150/filters:strip_icc()/pic7618281.jpg",
    "date": "2025-06-06",
    "durationMinutes": 23,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 43,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-4",
        "name": "나율",
        "score": 23,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 38,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 22,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-47",
        "name": "찬우",
        "score": 35,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-06T09:09:24.000Z",
    "updatedAt": "2025-06-06T09:32:19.000Z"
  },
  {
    "id": "play-ebed7be9-6efe-4f4a-8122-3c80f5e746ed",
    "gameId": "game-262",
    "gameTitleKr": "Rock Hard: 1977",
    "gameTitleEn": "Rock Hard: 1977",
    "gameImage": "https://cf.geekdo-images.com/CrJdKWVGgg24btEKtxNyzA__thumb/img/iQkfQCZiXs2r4igjeAe_4bHgmks=/fit-in/200x150/filters:strip_icc()/pic8288389.jpg",
    "date": "2025-06-06",
    "durationMinutes": 194,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 69,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-4",
        "name": "나율",
        "score": 76,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 73,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "score": 58,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-47",
        "name": "찬우",
        "score": 76,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-06T10:37:24.000Z",
    "updatedAt": "2025-06-06T14:56:54.000Z"
  },
  {
    "id": "play-f687d73d-9c3d-45e5-843b-8baa5c42a9dd",
    "gameId": "game-252",
    "gameTitleKr": "Perch",
    "gameTitleEn": "Perch",
    "gameImage": "https://cf.geekdo-images.com/1t6J2QHaLMjmomBnHrtwxA__thumb/img/wr9PCDczDC32135gaLxTOILZPds=/fit-in/200x150/filters:strip_icc()/pic7558885.png",
    "date": "2025-06-06",
    "durationMinutes": 96,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-4",
        "name": "나율",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-46",
        "name": "진수",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-47",
        "name": "찬우",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-06T16:08:13.000Z",
    "updatedAt": "2025-06-06T17:45:58.000Z"
  },
  {
    "id": "play-2da55a8d-2f0f-4a75-a273-767a21c41e74",
    "gameId": "game-86",
    "gameTitleKr": "타케노코: 빅 박스 (Takenoko Big Box)",
    "gameTitleEn": "타케노코: 빅 박스 (Takenoko Big Box)",
    "gameImage": "https://cf.geekdo-images.com/ftEf8xYezaxOs7k6sMKlTA__thumb/img/px9_f991af_rIHm2PuAPM22tiB8=/fit-in/200x150/filters:strip_icc()/pic5658681.jpg",
    "date": "2025-06-07",
    "durationMinutes": 72,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 18,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 24,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 32,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-61",
        "name": "홍지수",
        "score": 27,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-07T12:44:12.000Z",
    "updatedAt": "2025-06-07T13:56:39.000Z"
  },
  {
    "id": "play-0423ac83-2774-4257-a58a-7908a8b34be4",
    "gameId": "game-203",
    "gameTitleKr": "Distilled",
    "gameTitleEn": "Distilled",
    "gameImage": "https://cf.geekdo-images.com/8YPBUoAlAvGSfcRTxr7EZQ__thumb/img/JKBgv_MiQOOCmzS4KVzwjPW_yso=/fit-in/200x150/filters:strip_icc()/pic7104213.png",
    "date": "2025-06-07",
    "durationMinutes": 143,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 102,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 90,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 143,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-61",
        "name": "홍지수",
        "score": 102,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-07T14:52:43.000Z",
    "updatedAt": "2025-06-07T17:15:57.000Z"
  },
  {
    "id": "play-09244615-af45-4d24-8e16-046cb0ea5772",
    "gameId": "game-292",
    "gameTitleKr": "Las Vegas",
    "gameTitleEn": "Las Vegas",
    "gameImage": "https://cf.geekdo-images.com/aQJ0HRKx2mobP0g3FCeR_Q__thumb/img/7g-l6beAu5RtsAykBhoO7kMWexc=/fit-in/200x150/filters:strip_icc()/pic1261796.jpg",
    "date": "2025-06-07",
    "durationMinutes": 51,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 32,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 45,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 30,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-61",
        "name": "홍지수",
        "score": 31,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-07T17:31:20.000Z",
    "updatedAt": "2025-06-07T18:22:31.000Z"
  },
  {
    "id": "play-a2b93307-67bd-4469-bea5-ded3e3d4bde1",
    "gameId": "game-294",
    "gameTitleKr": "Tokyo Highway",
    "gameTitleEn": "Tokyo Highway",
    "gameImage": "https://cf.geekdo-images.com/dF6ZKbrhMWz-c01iD3gg6Q__thumb/img/6zZobzuDSxfMhTJyIZiZLRz0520=/fit-in/200x150/filters:strip_icc()/pic8485703.jpg",
    "date": "2025-06-07",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-61",
        "name": "홍지수",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-07T19:42:57.000Z",
    "updatedAt": "2025-06-07T19:43:23.000Z"
  },
  {
    "id": "play-5c75e3c1-8af6-4033-8e4a-86da3e73935b",
    "gameId": "game-266",
    "gameTitleKr": "Dungeon Drop",
    "gameTitleEn": "Dungeon Drop",
    "gameImage": "https://cf.geekdo-images.com/2bOgBKLIBz6unXaq68e8Dg__thumb/img/jDd3NmR7tEC9xwC3s0nfMTq20qU=/fit-in/200x150/filters:strip_icc()/pic6220061.png",
    "date": "2025-06-07",
    "durationMinutes": 4,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 12,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 18,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 18,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-61",
        "name": "홍지수",
        "score": 24,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-07T20:36:27.000Z",
    "updatedAt": "2025-06-07T20:40:40.000Z"
  },
  {
    "id": "play-9c660c2f-96b8-4270-821a-3c849da6eb1e",
    "gameId": "game-271",
    "gameTitleKr": "Wyrmspan",
    "gameTitleEn": "Wyrmspan",
    "gameImage": "https://cf.geekdo-images.com/oXUkkh9uq3zBVWQ8mbgMfQ__thumb/img/Ic3yRKTjVe26RgDzIdLsKn8Hztk=/fit-in/200x150/filters:strip_icc()/pic7947338.png",
    "date": "2025-06-14",
    "durationMinutes": 166,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 126,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 122,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 94,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 94,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-06-14T12:52:27.000Z",
    "updatedAt": "2025-06-14T15:38:44.000Z"
  },
  {
    "id": "play-237d3f3a-6fd9-4c1d-8418-011295a49b06",
    "gameId": "game-295",
    "gameTitleKr": "Ra",
    "gameTitleEn": "Ra",
    "gameImage": "https://cf.geekdo-images.com/k7lG683LBZdvFyS-FH-MpA__thumb/img/6KTtiknxxGwd0ARKrlsdoXFtHfI=/fit-in/200x150/filters:strip_icc()/pic6746812.png",
    "date": "2025-06-14",
    "durationMinutes": 53,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 34,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 28,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 39,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 30,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-14T16:01:45.000Z",
    "updatedAt": "2025-06-14T16:55:34.000Z"
  },
  {
    "id": "play-d49fd2d1-8473-4187-81a2-3270882f45fb",
    "gameId": "game-196",
    "gameTitleKr": "The White Castle",
    "gameTitleEn": "The White Castle",
    "gameImage": "https://cf.geekdo-images.com/qXT1U-nFh9PE8ujfdmI7dA__thumb/img/ru1l95gdKNXSsByDglE9Xxgu0kE=/fit-in/200x150/filters:strip_icc()/pic7754663.jpg",
    "date": "2025-06-14",
    "durationMinutes": 107,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 59,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 51,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 50,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 62,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-06-14T17:33:56.000Z",
    "updatedAt": "2025-06-14T19:21:30.000Z"
  },
  {
    "id": "play-47320d42-3688-4e14-b2ec-3ff9fa4b3ad9",
    "gameId": "game-273",
    "gameTitleKr": "SETI: Search for Extraterrestrial Intelligence",
    "gameTitleEn": "SETI: Search for Extraterrestrial Intelligence",
    "gameImage": "https://cf.geekdo-images.com/_BUXOVRDU9g_eRwgpR5ZZw__thumb/img/icamIZ4nP3HHH3vczZqTr1hQgKY=/fit-in/200x150/filters:strip_icc()/pic8160466.jpg",
    "date": "2025-06-14",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 170,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 197,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 159,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 136,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-06-14T23:38:53.000Z",
    "updatedAt": "2025-06-14T23:39:23.000Z"
  },
  {
    "id": "play-bf98bdfe-10b0-44aa-8ac2-47744036f654",
    "gameId": "game-298",
    "gameTitleKr": "Battle Line",
    "gameTitleEn": "Battle Line",
    "gameImage": "https://cf.geekdo-images.com/RnbZfspkPRfr6EMkRkac2Q__thumb/img/HUtyu4RUS0dBnNNSVGO88hWtHnw=/fit-in/200x150/filters:strip_icc()/pic149717.jpg",
    "date": "2025-06-22",
    "durationMinutes": 44,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-22T10:29:07.000Z",
    "updatedAt": "2025-06-22T11:13:25.000Z"
  },
  {
    "id": "play-382218b7-6305-4994-9709-dce2256bac36",
    "gameId": "game-299",
    "gameTitleKr": "Revolver",
    "gameTitleEn": "Revolver",
    "gameImage": "https://cf.geekdo-images.com/sMB1mpJfZIpMsFwYg7SRXQ__thumb/img/N-zVJJdx1iE4xZXVJI2em-PDVh0=/fit-in/200x150/filters:strip_icc()/pic2237528.jpg",
    "date": "2025-06-22",
    "durationMinutes": 101,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "role": "Colty Gang",
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "winner": true,
        "startPlayer": false,
        "role": "McReady",
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-22T11:35:00.000Z",
    "updatedAt": "2025-06-22T13:16:24.000Z"
  },
  {
    "id": "play-92e27d13-0dbb-497b-a3d5-9f522d87bbd6",
    "gameId": "game-300",
    "gameTitleKr": "Hero Realms",
    "gameTitleEn": "Hero Realms",
    "gameImage": "https://cf.geekdo-images.com/6xc4TuJynN5o_ZF0fHOdAA__thumb/img/sMbWo--LyzJw_weK0h1ESSPqdtU=/fit-in/200x150/filters:strip_icc()/pic6162556.png",
    "date": "2025-06-22",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-22T14:35:07.000Z",
    "updatedAt": "2025-06-22T14:35:30.000Z"
  },
  {
    "id": "play-d2a09add-f162-4c91-a00f-188a2c2344ce",
    "gameId": "game-300",
    "gameTitleKr": "Hero Realms",
    "gameTitleEn": "Hero Realms",
    "gameImage": "https://cf.geekdo-images.com/6xc4TuJynN5o_ZF0fHOdAA__thumb/img/sMbWo--LyzJw_weK0h1ESSPqdtU=/fit-in/200x150/filters:strip_icc()/pic6162556.png",
    "date": "2025-06-22",
    "durationMinutes": 17,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-06-22T14:36:43.000Z",
    "updatedAt": "2025-06-22T14:53:40.000Z"
  },
  {
    "id": "play-37553f9a-bf66-4aff-b8ef-461a73fc5437",
    "gameId": "game-273",
    "gameTitleKr": "SETI: Search for Extraterrestrial Intelligence",
    "gameTitleEn": "SETI: Search for Extraterrestrial Intelligence",
    "gameImage": "https://cf.geekdo-images.com/_BUXOVRDU9g_eRwgpR5ZZw__thumb/img/icamIZ4nP3HHH3vczZqTr1hQgKY=/fit-in/200x150/filters:strip_icc()/pic8160466.jpg",
    "date": "2025-06-22",
    "durationMinutes": 213,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 267,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 175,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-22T15:13:54.000Z",
    "updatedAt": "2025-06-22T18:46:51.000Z"
  },
  {
    "id": "play-b927969d-5daa-47c9-8a5c-f60932da966c",
    "gameId": "game-208",
    "gameTitleKr": "Heat: Pedal to the Metal",
    "gameTitleEn": "Heat: Pedal to the Metal",
    "gameImage": "https://cf.geekdo-images.com/-vOrd4bOspibyohYExLqWg__thumb/img/2GbaKvYOzWIxfgbYTk2R9puiyzo=/fit-in/200x150/filters:strip_icc()/pic6940449.png",
    "date": "2025-06-29",
    "durationMinutes": 35,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 1,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-29T11:40:49.000Z",
    "updatedAt": "2025-06-29T12:16:08.000Z"
  },
  {
    "id": "play-564ca7cf-a7b3-41a6-9898-51da7500ae07",
    "gameId": "game-208",
    "gameTitleKr": "Heat: Pedal to the Metal",
    "gameTitleEn": "Heat: Pedal to the Metal",
    "gameImage": "https://cf.geekdo-images.com/-vOrd4bOspibyohYExLqWg__thumb/img/2GbaKvYOzWIxfgbYTk2R9puiyzo=/fit-in/200x150/filters:strip_icc()/pic6940449.png",
    "date": "2025-06-29",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 2,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "score": 1,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-06-29T13:23:05.000Z",
    "updatedAt": "2025-06-29T13:23:11.000Z"
  },
  {
    "id": "play-ccc98130-8f8c-4634-817b-81f6e96aa0d6",
    "gameId": "game-7",
    "gameTitleKr": "Barrage",
    "gameTitleEn": "Barrage",
    "gameImage": "https://cf.geekdo-images.com/jEPmWvvYpqkWrKOzqIHFsg__thumb/img/kMLIpeqA6UcUvQg2AdMwwQoEIfU=/fit-in/200x150/filters:strip_icc()/pic4336469.png",
    "date": "2025-06-29",
    "durationMinutes": 171,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 99,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "score": 94,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "score": 88,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "score": 51,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-29T14:07:23.000Z",
    "updatedAt": "2025-06-29T16:58:26.000Z"
  },
  {
    "id": "play-2ae195d4-8fdb-4a3e-8538-2f0e2b00b0df",
    "gameId": "game-301",
    "gameTitleKr": "nana: Christmas Edition",
    "gameTitleEn": "nana: Christmas Edition",
    "gameImage": "https://cf.geekdo-images.com/CGnp5QoZkWkXWpG1_7iMkg__thumb/img/9tSti3Hfko29ptei5uNuPOtDtnE=/fit-in/200x150/filters:strip_icc()/pic7730999.jpg",
    "date": "2025-06-29",
    "durationMinutes": 21,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-29T17:12:19.000Z",
    "updatedAt": "2025-06-29T17:33:12.000Z"
  },
  {
    "id": "play-3a2ef8f6-0bc4-470f-9f98-627ea4de56cf",
    "gameId": "game-301",
    "gameTitleKr": "nana: Christmas Edition",
    "gameTitleEn": "nana: Christmas Edition",
    "gameImage": "https://cf.geekdo-images.com/CGnp5QoZkWkXWpG1_7iMkg__thumb/img/9tSti3Hfko29ptei5uNuPOtDtnE=/fit-in/200x150/filters:strip_icc()/pic7730999.jpg",
    "date": "2025-06-29",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-06-29T17:33:13.000Z",
    "updatedAt": "2025-06-29T17:33:17.000Z"
  },
  {
    "id": "play-925aff69-cc6d-4ab5-8d71-2715ec958717",
    "gameId": "game-301",
    "gameTitleKr": "nana: Christmas Edition",
    "gameTitleEn": "nana: Christmas Edition",
    "gameImage": "https://cf.geekdo-images.com/CGnp5QoZkWkXWpG1_7iMkg__thumb/img/9tSti3Hfko29ptei5uNuPOtDtnE=/fit-in/200x150/filters:strip_icc()/pic7730999.jpg",
    "date": "2025-06-29",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-06-29T17:33:18.000Z",
    "updatedAt": "2025-06-29T17:33:20.000Z"
  },
  {
    "id": "play-8f446b91-6601-4cb0-bad0-fedcf3a45564",
    "gameId": "game-270",
    "gameTitleKr": "1%: A Game of Strategic Chance",
    "gameTitleEn": "1%: A Game of Strategic Chance",
    "gameImage": "https://cf.geekdo-images.com/K2spoKKeCHm7OHonaSdK3g__thumb/img/aRHiqdERA2rlcG5XmLNL1DxSZF0=/fit-in/200x150/filters:strip_icc()/pic7293478.jpg",
    "date": "2025-06-29",
    "durationMinutes": 25,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-06-29T17:33:23.000Z",
    "updatedAt": "2025-06-29T17:58:50.000Z"
  },
  {
    "id": "play-6e3d9c34-a07a-4089-92c8-39a19589c6fe",
    "gameId": "game-302",
    "gameTitleKr": "Sweet Lands",
    "gameTitleEn": "Sweet Lands",
    "gameImage": "https://cf.geekdo-images.com/qmCyTIgGhdSON0bMUk8qjQ__thumb/img/7NwXv2G1UPErGTvHHm-R6wdYsoY=/fit-in/200x150/filters:strip_icc()/pic8329173.jpg",
    "date": "2025-07-13",
    "durationMinutes": 250,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 233,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 231,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 171,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 174,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-13T10:47:44.000Z",
    "updatedAt": "2025-07-13T14:57:51.000Z"
  },
  {
    "id": "play-f0f2c74a-f0c0-4be5-a585-86d8553ee4fe",
    "gameId": "game-303",
    "gameTitleKr": "Thunder Road: Vendetta – Maximum Chrome",
    "gameTitleEn": "Thunder Road: Vendetta – Maximum Chrome",
    "gameImage": "https://cf.geekdo-images.com/8GePHY93STfcwWXt9R0T1Q__thumb/img/4cEZOHgZWll3Z3SM0PA9lxMJhFE=/fit-in/200x150/filters:strip_icc()/pic8631039.jpg",
    "date": "2025-07-13",
    "durationMinutes": 88,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-13T16:18:05.000Z",
    "updatedAt": "2025-07-13T17:46:21.000Z"
  },
  {
    "id": "play-8994d16f-5c24-4c4c-bb58-bdf4b6647821",
    "gameId": "game-304",
    "gameTitleKr": "피나콜라 다이스",
    "gameTitleEn": "Piña Coladice",
    "gameImage": "https://cf.geekdo-images.com/QzRniP5vC4BD1b4Y5aswqQ__thumb/img/Y3QCUxp-Ua0UbgkevH--IRCymeM=/fit-in/200x150/filters:strip_icc()/pic8043570.png",
    "date": "2025-07-17",
    "durationMinutes": 11,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 16,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 17,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-17T20:32:21.000Z",
    "updatedAt": "2025-07-17T20:44:08.000Z"
  },
  {
    "id": "play-442d2251-836e-41ad-93a2-9e5cc1c2c9d4",
    "gameId": "game-305",
    "gameTitleKr": "Orapa Space",
    "gameTitleEn": "Orapa Space",
    "gameImage": "https://cf.geekdo-images.com/Rs7QiydHk_XHxnAOSYhUig__thumb/img/xzb4zlQOFZ_ESmfuL_wM5oQth0Y=/fit-in/200x150/filters:strip_icc()/pic8954539.png",
    "date": "2025-07-17",
    "durationMinutes": 32,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-17T20:56:38.000Z",
    "updatedAt": "2025-07-17T21:28:54.000Z"
  },
  {
    "id": "play-882d831e-a0a7-4a70-9b93-7dd3c804282b",
    "gameId": "game-306",
    "gameTitleKr": "Very Bad Lands: Brachio",
    "gameTitleEn": "Very Bad Lands: Brachio",
    "gameImage": "https://cf.geekdo-images.com/Q43sjWyowGAzTD91xSpmJA__thumb/img/SlthN2SsqngfYr1QXCy6D8ShM4w=/fit-in/200x150/filters:strip_icc()/pic8248133.png",
    "date": "2025-07-19",
    "durationMinutes": 45,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-19T16:22:24.000Z",
    "updatedAt": "2025-07-19T16:23:40.000Z"
  },
  {
    "id": "play-a4f6290b-7f67-4001-b726-767dbb31d0bf",
    "gameId": "game-307",
    "gameTitleKr": "ONDA",
    "gameTitleEn": "ONDA",
    "gameImage": "https://cf.geekdo-images.com/vd0pWYhTDeThGnuFIydFqw__thumb/img/42z5FrWrhjZJAraWdAF3st8w0Ic=/fit-in/200x150/filters:strip_icc()/pic8181455.png",
    "date": "2025-07-19",
    "durationMinutes": 45,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-19T16:24:31.000Z",
    "updatedAt": "2025-07-19T16:24:46.000Z"
  },
  {
    "id": "play-5edebea9-4dd0-4d74-beca-567f15c30ff0",
    "gameId": "game-308",
    "gameTitleKr": "Robotrick",
    "gameTitleEn": "Robotrick",
    "gameImage": "https://cf.geekdo-images.com/8O1vZvD5Dd83ejNDVsv2Iw__thumb/img/OtaJqdCxRN1YS_Nmw0pUEWalIzk=/fit-in/200x150/filters:strip_icc()/pic7738861.jpg",
    "date": "2025-07-19",
    "durationMinutes": 22,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 34,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 25,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 43,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-19T16:28:27.000Z",
    "updatedAt": "2025-07-19T16:51:04.000Z"
  },
  {
    "id": "play-7866dd8b-08ec-4836-935e-c31e15651a40",
    "gameId": "game-309",
    "gameTitleKr": "MOW",
    "gameTitleEn": "MOW",
    "gameImage": "https://cf.geekdo-images.com/O2SuILovfm8pbrMzYD-YQQ__thumb/img/kkgAiUuoQO5KeYkp56x01gzK02I=/fit-in/200x150/filters:strip_icc()/pic6884031.png",
    "date": "2025-07-19",
    "durationMinutes": 34,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 104,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 57,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 62,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 67,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-19T16:54:43.000Z",
    "updatedAt": "2025-07-19T17:28:30.000Z"
  },
  {
    "id": "play-0e2b986d-ccea-4e8b-967a-8dcf351ba90a",
    "gameId": "game-271",
    "gameTitleKr": "Wyrmspan",
    "gameTitleEn": "Wyrmspan",
    "gameImage": "https://cf.geekdo-images.com/oXUkkh9uq3zBVWQ8mbgMfQ__thumb/img/Ic3yRKTjVe26RgDzIdLsKn8Hztk=/fit-in/200x150/filters:strip_icc()/pic7947338.png",
    "date": "2025-07-20",
    "durationMinutes": 126,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 122,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 82,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 92,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 126,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-07-20T12:28:28.000Z",
    "updatedAt": "2025-07-20T14:34:39.000Z"
  },
  {
    "id": "play-b21c58c1-a415-4763-8135-53be217ee04f",
    "gameId": "game-7",
    "gameTitleKr": "Barrage",
    "gameTitleEn": "Barrage",
    "gameImage": "https://cf.geekdo-images.com/jEPmWvvYpqkWrKOzqIHFsg__thumb/img/kMLIpeqA6UcUvQg2AdMwwQoEIfU=/fit-in/200x150/filters:strip_icc()/pic4336469.png",
    "date": "2025-07-20",
    "durationMinutes": 135,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 92,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 86,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 111,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 71,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-20T14:38:00.000Z",
    "updatedAt": "2025-07-20T16:53:29.000Z"
  },
  {
    "id": "play-d904a393-8f0d-440c-8509-89de3a369c69",
    "gameId": "game-310",
    "gameTitleKr": "Die Crew: Mission Tiefsee",
    "gameTitleEn": "The Crew: Mission Deep Sea",
    "gameImage": "https://cf.geekdo-images.com/VuBqZ1sMaDAVVHF_OEJP4g__thumb/img/EdacXlcFZ06YK0-ZKa0oKwL4VCw=/fit-in/200x150/filters:strip_icc()/pic5988903.jpg",
    "date": "2025-07-20",
    "durationMinutes": 62,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-20T18:45:42.000Z",
    "updatedAt": "2025-07-20T19:52:20.000Z"
  },
  {
    "id": "play-c37466c7-1bd2-4005-8148-c321caedf378",
    "gameId": "game-211",
    "gameTitleKr": "Harmonies",
    "gameTitleEn": "Harmonies",
    "gameImage": "https://cf.geekdo-images.com/A_XP2_VN3ugyqPhezowB_w__thumb/img/ln5eKAzhse2PIHvWn7bu-jiW_uk=/fit-in/200x150/filters:strip_icc()/pic8026369.png",
    "date": "2025-07-20",
    "durationMinutes": 35,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 103,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 99,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 116,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 84,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-07-20T19:52:32.000Z",
    "updatedAt": "2025-07-20T20:27:18.000Z"
  },
  {
    "id": "play-600087d8-d9ae-4529-b7d1-c7f837677919",
    "gameId": "game-303",
    "gameTitleKr": "Thunder Road: Vendetta – Maximum Chrome",
    "gameTitleEn": "Thunder Road: Vendetta – Maximum Chrome",
    "gameImage": "https://cf.geekdo-images.com/8GePHY93STfcwWXt9R0T1Q__thumb/img/4cEZOHgZWll3Z3SM0PA9lxMJhFE=/fit-in/200x150/filters:strip_icc()/pic8631039.jpg",
    "date": "2025-07-21",
    "durationMinutes": 95,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-07-21T20:05:01.000Z",
    "updatedAt": "2025-07-21T21:39:54.000Z"
  },
  {
    "id": "play-8b3dbbb8-3274-415b-89ba-6de378f0da14",
    "gameId": "game-247",
    "gameTitleKr": "Surfosaurus MAX",
    "gameTitleEn": "Surfosaurus MAX",
    "gameImage": "https://cf.geekdo-images.com/_oIGFfPMAa0gHWNy7kJp7g__thumb/img/sDjXtzwxUmWreaMwHw8ofJaCaKc=/fit-in/200x150/filters:strip_icc()/pic7618281.jpg",
    "date": "2025-07-21",
    "durationMinutes": 21,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 94,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 53,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 17,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 68,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-21T21:51:16.000Z",
    "updatedAt": "2025-07-21T22:12:49.000Z"
  },
  {
    "id": "play-acfe9c38-4592-42b9-8590-c29de70b6d85",
    "gameId": "game-302",
    "gameTitleKr": "Sweet Lands",
    "gameTitleEn": "Sweet Lands",
    "gameImage": "https://cf.geekdo-images.com/qmCyTIgGhdSON0bMUk8qjQ__thumb/img/7NwXv2G1UPErGTvHHm-R6wdYsoY=/fit-in/200x150/filters:strip_icc()/pic8329173.jpg",
    "date": "2025-07-27",
    "durationMinutes": 212,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 245,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 193,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 226,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-27T12:05:09.000Z",
    "updatedAt": "2025-07-27T15:36:54.000Z"
  },
  {
    "id": "play-8947eb0b-666d-455a-968c-f2c0f1c19bd2",
    "gameId": "game-311",
    "gameTitleKr": "Dune: Imperium – Bloodlines",
    "gameTitleEn": "Dune: Imperium – Bloodlines",
    "gameImage": "https://cf.geekdo-images.com/6g0FIZJK1zujPSrKuToCZw__thumb/img/niL2urMdy3ExhhQzbtMdsFUbSW4=/fit-in/200x150/filters:strip_icc()/pic8350442.jpg",
    "date": "2025-07-27",
    "durationMinutes": 122,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 10,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 7,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-27T16:47:35.000Z",
    "updatedAt": "2025-07-27T18:49:20.000Z"
  },
  {
    "id": "play-68256f54-0ffb-48cd-a5cf-a8f4e5e8f5aa",
    "gameId": "game-270",
    "gameTitleKr": "1%: A Game of Strategic Chance",
    "gameTitleEn": "1%: A Game of Strategic Chance",
    "gameImage": "https://cf.geekdo-images.com/K2spoKKeCHm7OHonaSdK3g__thumb/img/aRHiqdERA2rlcG5XmLNL1DxSZF0=/fit-in/200x150/filters:strip_icc()/pic7293478.jpg",
    "date": "2025-07-27",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-07-27T19:17:03.000Z",
    "updatedAt": "2025-07-27T19:17:12.000Z"
  },
  {
    "id": "play-e9cd1217-d7dd-48f0-b3a0-6e113eaa1ae4",
    "gameId": "game-270",
    "gameTitleKr": "1%: A Game of Strategic Chance",
    "gameTitleEn": "1%: A Game of Strategic Chance",
    "gameImage": "https://cf.geekdo-images.com/K2spoKKeCHm7OHonaSdK3g__thumb/img/aRHiqdERA2rlcG5XmLNL1DxSZF0=/fit-in/200x150/filters:strip_icc()/pic7293478.jpg",
    "date": "2025-07-27",
    "durationMinutes": 3,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-07-27T19:18:09.000Z",
    "updatedAt": "2025-07-27T19:20:49.000Z"
  },
  {
    "id": "play-1e01b22c-ee82-4b5f-9236-2cd2beb3bf78",
    "gameId": "game-270",
    "gameTitleKr": "1%: A Game of Strategic Chance",
    "gameTitleEn": "1%: A Game of Strategic Chance",
    "gameImage": "https://cf.geekdo-images.com/K2spoKKeCHm7OHonaSdK3g__thumb/img/aRHiqdERA2rlcG5XmLNL1DxSZF0=/fit-in/200x150/filters:strip_icc()/pic7293478.jpg",
    "date": "2025-07-27",
    "durationMinutes": 4,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-07-27T19:21:01.000Z",
    "updatedAt": "2025-07-27T19:24:39.000Z"
  },
  {
    "id": "play-a8a4bdb6-7825-4214-bc74-87ef2708fc69",
    "gameId": "game-312",
    "gameTitleKr": "Civolution",
    "gameTitleEn": "Civolution",
    "gameImage": "https://cf.geekdo-images.com/DahMIPzUpexvhUPAG3dGbA__thumb/img/uzogBNlLw3GBuGa1T6_8oQbADnY=/fit-in/200x150/filters:strip_icc()/pic8303209.jpg",
    "date": "2025-08-24",
    "durationMinutes": 217,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 188,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 172,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 128,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-08-24T12:40:29.000Z",
    "updatedAt": "2025-08-24T16:17:33.000Z"
  },
  {
    "id": "play-6ceaee16-4189-4d17-a759-7006f6be48c9",
    "gameId": "game-313",
    "gameTitleKr": "Galactic Cruise",
    "gameTitleEn": "Galactic Cruise",
    "gameImage": "https://cf.geekdo-images.com/l-LMcklO683dyVlnRZS3mg__thumb/img/8usx0HfsTXTpE2kklVRMtJGAwFY=/fit-in/200x150/filters:strip_icc()/pic7556818.jpg",
    "date": "2025-08-24",
    "durationMinutes": 170,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 106,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 101,
        "winner": false,
        "startPlayer": true,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 138,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-08-24T17:57:45.000Z",
    "updatedAt": "2025-08-24T20:48:06.000Z"
  },
  {
    "id": "play-922a87f0-2b1b-4f1c-8897-293b1387c406",
    "gameId": "game-313",
    "gameTitleKr": "Galactic Cruise",
    "gameTitleEn": "Galactic Cruise",
    "gameImage": "https://cf.geekdo-images.com/l-LMcklO683dyVlnRZS3mg__thumb/img/8usx0HfsTXTpE2kklVRMtJGAwFY=/fit-in/200x150/filters:strip_icc()/pic7556818.jpg",
    "date": "2025-08-25",
    "durationMinutes": 165,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 145,
        "winner": true,
        "startPlayer": true,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 136,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 117,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-08-25T20:33:21.000Z",
    "updatedAt": "2025-08-25T23:18:41.000Z"
  },
  {
    "id": "play-14976262-e49b-4690-b5ee-0fd12b0d4453",
    "gameId": "game-313",
    "gameTitleKr": "Galactic Cruise",
    "gameTitleEn": "Galactic Cruise",
    "gameImage": "https://cf.geekdo-images.com/l-LMcklO683dyVlnRZS3mg__thumb/img/8usx0HfsTXTpE2kklVRMtJGAwFY=/fit-in/200x150/filters:strip_icc()/pic7556818.jpg",
    "date": "2025-08-31",
    "durationMinutes": 275,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 199,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 144,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "score": 159,
        "winner": false,
        "startPlayer": true,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-08-31T11:25:40.000Z",
    "updatedAt": "2025-08-31T16:00:37.000Z"
  },
  {
    "id": "play-de37876d-d279-4323-9ef2-d927a51cc105",
    "gameId": "game-214",
    "gameTitleKr": "스플렌더: Pokémon (Splendor: Pokémon)",
    "gameTitleEn": "스플렌더: Pokémon (Splendor: Pokémon)",
    "gameImage": "https://cf.geekdo-images.com/o6HpiLCBBFvc7XvBv7DEig__thumb/img/cP3zFhQXbpOo4jMbXWgPShAdn4E=/fit-in/200x150/filters:strip_icc()/pic7902371.jpg",
    "date": "2025-08-31",
    "durationMinutes": 36,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 18,
        "winner": true,
        "startPlayer": true,
        "newPlayer": true
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "score": 14,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-08-31T16:00:41.000Z",
    "updatedAt": "2025-08-31T16:36:56.000Z"
  },
  {
    "id": "play-930398a3-17cd-40e9-b6c5-861e10aba502",
    "gameId": "game-304",
    "gameTitleKr": "피나콜라 다이스",
    "gameTitleEn": "Piña Coladice",
    "gameImage": "https://cf.geekdo-images.com/QzRniP5vC4BD1b4Y5aswqQ__thumb/img/Y3QCUxp-Ua0UbgkevH--IRCymeM=/fit-in/200x150/filters:strip_icc()/pic8043570.png",
    "date": "2025-08-31",
    "durationMinutes": 15,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "winner": true,
        "startPlayer": true,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-08-31T16:41:39.000Z",
    "updatedAt": "2025-08-31T16:56:54.000Z"
  },
  {
    "id": "play-dac39bfa-3cbb-4583-92e5-bf50a3c0ae94",
    "gameId": "game-313",
    "gameTitleKr": "Galactic Cruise",
    "gameTitleEn": "Galactic Cruise",
    "gameImage": "https://cf.geekdo-images.com/l-LMcklO683dyVlnRZS3mg__thumb/img/8usx0HfsTXTpE2kklVRMtJGAwFY=/fit-in/200x150/filters:strip_icc()/pic7556818.jpg",
    "date": "2025-09-15",
    "durationMinutes": 161,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 170,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 209,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 219,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-09-15T20:10:22.000Z",
    "updatedAt": "2025-09-15T22:51:25.000Z"
  },
  {
    "id": "play-91611699-203b-4083-852b-8d0299cb2b33",
    "gameId": "game-313",
    "gameTitleKr": "Galactic Cruise",
    "gameTitleEn": "Galactic Cruise",
    "gameImage": "https://cf.geekdo-images.com/l-LMcklO683dyVlnRZS3mg__thumb/img/8usx0HfsTXTpE2kklVRMtJGAwFY=/fit-in/200x150/filters:strip_icc()/pic7556818.jpg",
    "date": "2025-09-20",
    "durationMinutes": 226,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 152,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-32",
        "name": "이상민",
        "score": 93,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 113,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-09-20T11:44:27.000Z",
    "updatedAt": "2025-09-20T15:30:08.000Z"
  },
  {
    "id": "play-d7a05fab-38fe-444a-8cd9-35d652c1acfa",
    "gameId": "game-315",
    "gameTitleKr": "서부 탐험대",
    "gameTitleEn": "Corps of Discovery: Ultimate Edition",
    "gameImage": "https://cf.geekdo-images.com/xaQb63Z5RO0ySyilFWitTQ__small/img/fVKbl2CIRnItn0MpUaWURpR-22c=/fit-in/200x150/filters:strip_icc()/pic8831596.png",
    "date": "2025-09-20",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-09-20T17:06:38.000Z",
    "updatedAt": "2025-09-20T17:07:25.000Z"
  },
  {
    "id": "play-4cdb9f02-26a2-4f40-b545-aacb3378d698",
    "gameId": "game-315",
    "gameTitleKr": "서부 탐험대",
    "gameTitleEn": "Corps of Discovery: Ultimate Edition",
    "gameImage": "https://cf.geekdo-images.com/xaQb63Z5RO0ySyilFWitTQ__small/img/fVKbl2CIRnItn0MpUaWURpR-22c=/fit-in/200x150/filters:strip_icc()/pic8831596.png",
    "date": "2025-09-20",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-09-20T17:07:26.000Z",
    "updatedAt": "2025-09-20T17:07:33.000Z"
  },
  {
    "id": "play-d7f56003-da86-465d-8595-84b2aa85d61c",
    "gameId": "game-315",
    "gameTitleKr": "서부 탐험대",
    "gameTitleEn": "Corps of Discovery: Ultimate Edition",
    "gameImage": "https://cf.geekdo-images.com/xaQb63Z5RO0ySyilFWitTQ__small/img/fVKbl2CIRnItn0MpUaWURpR-22c=/fit-in/200x150/filters:strip_icc()/pic8831596.png",
    "date": "2025-09-20",
    "durationMinutes": 33,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-09-20T17:07:41.000Z",
    "updatedAt": "2025-09-20T17:41:18.000Z"
  },
  {
    "id": "play-c0202354-dcc2-49be-a0a9-e60d53739b47",
    "gameId": "game-313",
    "gameTitleKr": "Galactic Cruise",
    "gameTitleEn": "Galactic Cruise",
    "gameImage": "https://cf.geekdo-images.com/l-LMcklO683dyVlnRZS3mg__thumb/img/8usx0HfsTXTpE2kklVRMtJGAwFY=/fit-in/200x150/filters:strip_icc()/pic7556818.jpg",
    "date": "2025-09-21",
    "durationMinutes": 200,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 185,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 161,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 133,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-09-21T09:34:35.000Z",
    "updatedAt": "2025-09-21T12:54:42.000Z"
  },
  {
    "id": "play-41e8f3cb-5da8-4a71-96fe-d6969128a7d8",
    "gameId": "game-313",
    "gameTitleKr": "Galactic Cruise",
    "gameTitleEn": "Galactic Cruise",
    "gameImage": "https://cf.geekdo-images.com/l-LMcklO683dyVlnRZS3mg__thumb/img/8usx0HfsTXTpE2kklVRMtJGAwFY=/fit-in/200x150/filters:strip_icc()/pic7556818.jpg",
    "date": "2025-09-21",
    "durationMinutes": 199,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 259,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 195,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 198,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-09-21T14:07:57.000Z",
    "updatedAt": "2025-09-21T17:27:14.000Z"
  },
  {
    "id": "play-03954026-1beb-4dc0-9c2b-f87cb911c79a",
    "gameId": "game-315",
    "gameTitleKr": "서부 탐험대",
    "gameTitleEn": "Corps of Discovery: Ultimate Edition",
    "gameImage": "https://cf.geekdo-images.com/xaQb63Z5RO0ySyilFWitTQ__small/img/fVKbl2CIRnItn0MpUaWURpR-22c=/fit-in/200x150/filters:strip_icc()/pic8831596.png",
    "date": "2025-09-21",
    "durationMinutes": 25,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-09-21T21:13:43.000Z",
    "updatedAt": "2025-09-21T21:38:37.000Z"
  },
  {
    "id": "play-e4f4c38e-b776-4667-b477-39581c536ceb",
    "gameId": "game-315",
    "gameTitleKr": "서부 탐험대",
    "gameTitleEn": "Corps of Discovery: Ultimate Edition",
    "gameImage": "https://cf.geekdo-images.com/xaQb63Z5RO0ySyilFWitTQ__small/img/fVKbl2CIRnItn0MpUaWURpR-22c=/fit-in/200x150/filters:strip_icc()/pic8831596.png",
    "date": "2025-09-21",
    "durationMinutes": 34,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-09-21T21:39:12.000Z",
    "updatedAt": "2025-09-21T22:13:04.000Z"
  },
  {
    "id": "play-0df7f06c-acd4-4113-9df9-b46acffbaa0e",
    "gameId": "game-313",
    "gameTitleKr": "Galactic Cruise",
    "gameTitleEn": "Galactic Cruise",
    "gameImage": "https://cf.geekdo-images.com/l-LMcklO683dyVlnRZS3mg__thumb/img/8usx0HfsTXTpE2kklVRMtJGAwFY=/fit-in/200x150/filters:strip_icc()/pic7556818.jpg",
    "date": "2025-09-27",
    "durationMinutes": 209,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 195,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "score": 175,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-58",
        "name": "모래상어",
        "score": 118,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "score": 167,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-09-27T17:44:38.000Z",
    "updatedAt": "2025-09-27T21:13:14.000Z"
  },
  {
    "id": "play-473de0a2-3362-4cba-9099-3ec4555035f4",
    "gameId": "game-316",
    "gameTitleKr": "Luthier",
    "gameTitleEn": "Luthier",
    "gameImage": "https://cf.geekdo-images.com/NNOCMpxKchQb_ByLmvDfRQ__small/img/hgZk4xlsFSfbXyMy2Y32dFqXCHM=/fit-in/200x150/filters:strip_icc()/pic8145392.png",
    "date": "2025-10-11",
    "durationMinutes": 231,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 101,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 87,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 60,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-10-11T14:24:52.000Z",
    "updatedAt": "2025-10-11T18:16:34.000Z"
  },
  {
    "id": "play-fa6480c3-5929-407f-b73d-5b61e2a2a0bc",
    "gameId": "game-316",
    "gameTitleKr": "Luthier",
    "gameTitleEn": "Luthier",
    "gameImage": "https://cf.geekdo-images.com/NNOCMpxKchQb_ByLmvDfRQ__small/img/hgZk4xlsFSfbXyMy2Y32dFqXCHM=/fit-in/200x150/filters:strip_icc()/pic8145392.png",
    "date": "2025-10-18",
    "durationMinutes": 211,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 104,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 91,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 87,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 100,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-10-18T13:07:47.000Z",
    "updatedAt": "2025-10-18T16:38:36.000Z"
  },
  {
    "id": "play-976896a7-d0a2-4d03-9f87-705f37d0581b",
    "gameId": "game-270",
    "gameTitleKr": "1%: A Game of Strategic Chance",
    "gameTitleEn": "1%: A Game of Strategic Chance",
    "gameImage": "https://cf.geekdo-images.com/K2spoKKeCHm7OHonaSdK3g__thumb/img/aRHiqdERA2rlcG5XmLNL1DxSZF0=/fit-in/200x150/filters:strip_icc()/pic7293478.jpg",
    "date": "2025-10-18",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-10-18T17:10:35.000Z",
    "updatedAt": "2025-10-18T17:11:21.000Z"
  },
  {
    "id": "play-0571c4ec-15b9-48d7-944d-33f53b4e0294",
    "gameId": "game-270",
    "gameTitleKr": "1%: A Game of Strategic Chance",
    "gameTitleEn": "1%: A Game of Strategic Chance",
    "gameImage": "https://cf.geekdo-images.com/K2spoKKeCHm7OHonaSdK3g__thumb/img/aRHiqdERA2rlcG5XmLNL1DxSZF0=/fit-in/200x150/filters:strip_icc()/pic7293478.jpg",
    "date": "2025-10-18",
    "durationMinutes": 17,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-10-18T17:11:42.000Z",
    "updatedAt": "2025-10-18T17:28:35.000Z"
  },
  {
    "id": "play-950dfd6e-e381-488b-bb8b-8eb3589a18f4",
    "gameId": "game-46",
    "gameTitleKr": "Photosynthesis",
    "gameTitleEn": "Photosynthesis",
    "gameImage": "https://cf.geekdo-images.com/HhkYuVxMy-XrRCBWmZ78Eg__thumb/img/eVdvmMALg8vjPr6eDoj-mqvDbUc=/fit-in/200x150/filters:strip_icc()/pic3364832.jpg",
    "date": "2025-10-18",
    "durationMinutes": 84,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 49,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 65,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 65,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 73,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-10-18T18:04:12.000Z",
    "updatedAt": "2025-10-18T19:27:52.000Z"
  },
  {
    "id": "play-f971093c-04a3-462f-bede-e21c84bde610",
    "gameId": "game-262",
    "gameTitleKr": "Rock Hard: 1977",
    "gameTitleEn": "Rock Hard: 1977",
    "gameImage": "https://cf.geekdo-images.com/CrJdKWVGgg24btEKtxNyzA__thumb/img/iQkfQCZiXs2r4igjeAe_4bHgmks=/fit-in/200x150/filters:strip_icc()/pic8288389.jpg",
    "date": "2025-10-18",
    "durationMinutes": 110,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 74,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-1",
        "name": "경민",
        "score": 33,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 70,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 57,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-10-18T20:28:54.000Z",
    "updatedAt": "2025-10-18T22:21:22.000Z"
  },
  {
    "id": "play-bc9d0821-4c5d-4ac8-b255-4bd305ee295c",
    "gameId": "game-316",
    "gameTitleKr": "Luthier",
    "gameTitleEn": "Luthier",
    "gameImage": "https://cf.geekdo-images.com/NNOCMpxKchQb_ByLmvDfRQ__small/img/hgZk4xlsFSfbXyMy2Y32dFqXCHM=/fit-in/200x150/filters:strip_icc()/pic8145392.png",
    "date": "2025-10-19",
    "durationMinutes": 6,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 99,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 102,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-48",
        "name": "토리",
        "score": 85,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 106,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-10-19T17:31:44.000Z",
    "updatedAt": "2025-10-19T17:37:29.000Z"
  },
  {
    "id": "play-56f218dd-a440-4442-ae74-427803657169",
    "gameId": "game-196",
    "gameTitleKr": "The White Castle",
    "gameTitleEn": "The White Castle",
    "gameImage": "https://cf.geekdo-images.com/qXT1U-nFh9PE8ujfdmI7dA__thumb/img/ru1l95gdKNXSsByDglE9Xxgu0kE=/fit-in/200x150/filters:strip_icc()/pic7754663.jpg",
    "date": "2025-10-19",
    "durationMinutes": 114,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 55,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 66,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-48",
        "name": "토리",
        "score": 46,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 54,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-10-19T19:20:30.000Z",
    "updatedAt": "2025-10-19T21:14:41.000Z"
  },
  {
    "id": "play-0927c43d-adba-460d-adf0-46e40f76bcb7",
    "gameId": "game-317",
    "gameTitleKr": "The White Castle Duel",
    "gameTitleEn": "The White Castle Duel",
    "gameImage": "https://cf.geekdo-images.com/7jnU8jv4wym7vtDG3n4xYA__small/img/Ep_GWy6XNlBV794L3lYwcK4dqoc=/fit-in/200x150/filters:strip_icc()/pic8918307.jpg",
    "date": "2025-10-25",
    "durationMinutes": 77,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 44,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 67,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-10-25T14:06:30.000Z",
    "updatedAt": "2025-10-25T15:25:12.000Z"
  },
  {
    "id": "play-ba4f399d-1ca8-4616-a48f-f8a1af5933b6",
    "gameId": "game-317",
    "gameTitleKr": "The White Castle Duel",
    "gameTitleEn": "The White Castle Duel",
    "gameImage": "https://cf.geekdo-images.com/7jnU8jv4wym7vtDG3n4xYA__small/img/Ep_GWy6XNlBV794L3lYwcK4dqoc=/fit-in/200x150/filters:strip_icc()/pic8918307.jpg",
    "date": "2025-10-25",
    "durationMinutes": 2,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 36,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 51,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-10-25T16:05:51.000Z",
    "updatedAt": "2025-10-25T16:08:15.000Z"
  },
  {
    "id": "play-2208d3c0-e421-4514-aa72-a1b53c38ba2a",
    "gameId": "game-318",
    "gameTitleKr": "스트림스 메트로",
    "gameTitleEn": "스트림스 메트로",
    "date": "2025-10-25",
    "durationMinutes": 11,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 136,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 74,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-10-25T16:14:46.000Z",
    "updatedAt": "2025-10-25T16:26:58.000Z"
  },
  {
    "id": "play-490495c7-70e8-40cc-b6b7-b2140d4ba974",
    "gameId": "game-319",
    "gameTitleKr": "TomaToss",
    "gameTitleEn": "TomaToss",
    "gameImage": "https://cf.geekdo-images.com/KoMzUo6DULFy_v4MaGaRUw__small/img/wEv8_SRYPsKNnQ1cd1LBkKVTqgk=/fit-in/200x150/filters:strip_icc()/pic9051927.jpg",
    "date": "2025-10-25",
    "durationMinutes": 14,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 50,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 37,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-10-25T17:09:46.000Z",
    "updatedAt": "2025-10-25T17:23:49.000Z"
  },
  {
    "id": "play-f4fc0fbb-4f36-4944-988e-8443c875de91",
    "gameId": "game-316",
    "gameTitleKr": "Luthier",
    "gameTitleEn": "Luthier",
    "gameImage": "https://cf.geekdo-images.com/NNOCMpxKchQb_ByLmvDfRQ__small/img/hgZk4xlsFSfbXyMy2Y32dFqXCHM=/fit-in/200x150/filters:strip_icc()/pic8145392.png",
    "date": "2025-10-26",
    "durationMinutes": 155,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 116,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 73,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 81,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 86,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-10-26T10:42:17.000Z",
    "updatedAt": "2025-10-26T13:17:29.000Z"
  },
  {
    "id": "play-f836ebe4-bb2d-4db5-b28b-c0ebd5550b53",
    "gameId": "game-320",
    "gameTitleKr": "Blind Jack",
    "gameTitleEn": "Blind Jack",
    "gameImage": "https://cf.geekdo-images.com/6TlFH_pzkAkIWBb8gvZYDg__small/img/pShGO9-zJogSmtuAHvnwMDvs6NA=/fit-in/200x150/filters:strip_icc()/pic8894537.png",
    "date": "2025-10-26",
    "durationMinutes": 31,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-10-26T13:31:23.000Z",
    "updatedAt": "2025-10-26T14:03:09.000Z"
  },
  {
    "id": "play-9910d8e5-ec8e-43ee-adef-8757c469a2f3",
    "gameId": "game-321",
    "gameTitleKr": "Flip 7",
    "gameTitleEn": "Flip 7",
    "gameImage": "https://cf.geekdo-images.com/YrQxEB9Ef0kQorRApzG5vQ__small/img/_dNNsSelyw9qUEOIXBRt6PE_1us=/fit-in/200x150/filters:strip_icc()/pic8780246.jpg",
    "date": "2025-10-26",
    "durationMinutes": 21,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 145,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 45,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 221,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 179,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-10-26T14:03:14.000Z",
    "updatedAt": "2025-10-26T14:24:05.000Z"
  },
  {
    "id": "play-8c88a81f-6c17-4d04-ab2f-5ad20d10f5b5",
    "gameId": "game-319",
    "gameTitleKr": "TomaToss",
    "gameTitleEn": "TomaToss",
    "gameImage": "https://cf.geekdo-images.com/KoMzUo6DULFy_v4MaGaRUw__small/img/wEv8_SRYPsKNnQ1cd1LBkKVTqgk=/fit-in/200x150/filters:strip_icc()/pic9051927.jpg",
    "date": "2025-10-26",
    "durationMinutes": 15,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 20,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 29,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 36,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 17,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-10-26T14:29:18.000Z",
    "updatedAt": "2025-10-26T14:44:47.000Z"
  },
  {
    "id": "play-e40ddac3-c8b9-4330-a169-3252560f492a",
    "gameId": "game-322",
    "gameTitleKr": "Golem",
    "gameTitleEn": "Golem",
    "gameImage": "https://cf.geekdo-images.com/9wDd5YVER3lwpGO3v5EkTA__small/img/81chTLWy3JxqRTktAuE4Nb4LamI=/fit-in/200x150/filters:strip_icc()/pic5374175.jpg",
    "date": "2025-10-26",
    "durationMinutes": 163,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 119,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 103,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 102,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-10-26T14:50:01.000Z",
    "updatedAt": "2025-10-26T17:33:33.000Z"
  },
  {
    "id": "play-dcffdadb-4343-4fb8-8349-cd937a5beb3e",
    "gameId": "game-323",
    "gameTitleKr": "Dinky Dungeon",
    "gameTitleEn": "Dinky Dungeon",
    "gameImage": "https://cf.geekdo-images.com/LNBkdIP7k4Mxd3lc1fP2yw__small/img/zw2_cxezST-vF-_zYsVSQi6hAa8=/fit-in/200x150/filters:strip_icc()/pic8171811.png",
    "date": "2025-10-26",
    "durationMinutes": 13,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 14,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 20,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-10-26T17:41:17.000Z",
    "updatedAt": "2025-10-26T17:54:55.000Z"
  },
  {
    "id": "play-5d47a357-2a98-4822-901f-a88e8102ef7a",
    "gameId": "game-324",
    "gameTitleKr": "Five Tribes: The Djinns of Naqala",
    "gameTitleEn": "Five Tribes: The Djinns of Naqala",
    "gameImage": "https://cf.geekdo-images.com/dmo-WD6HZHVUPrbVHunaTw__small/img/I6KVJlQgS1GfWDPSWAFNqce4Cgc=/fit-in/200x150/filters:strip_icc()/pic2055255.jpg",
    "date": "2025-10-26",
    "durationMinutes": 40,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 96,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 121,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 134,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-10-26T18:31:01.000Z",
    "updatedAt": "2025-10-26T19:11:38.000Z"
  },
  {
    "id": "play-0afbbe4f-1cee-4992-9843-12439d179425",
    "gameId": "game-215",
    "gameTitleKr": "BOOoop.",
    "gameTitleEn": "BOOoop.",
    "gameImage": "https://cf.geekdo-images.com/8BBZ9D9xq4hxgiHoF6IfQw__thumb/img/QG4fEdIVRuf1mOo56TX7rkMbruU=/fit-in/200x150/filters:strip_icc()/pic7442719.png",
    "date": "2025-11-02",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-11-02T11:32:54.000Z",
    "updatedAt": "2025-11-02T11:33:06.000Z"
  },
  {
    "id": "play-9f87c8fd-249d-4c4d-84c1-64f16e33e69f",
    "gameId": "game-305",
    "gameTitleKr": "Orapa Space",
    "gameTitleEn": "Orapa Space",
    "gameImage": "https://cf.geekdo-images.com/Rs7QiydHk_XHxnAOSYhUig__thumb/img/xzb4zlQOFZ_ESmfuL_wM5oQth0Y=/fit-in/200x150/filters:strip_icc()/pic8954539.png",
    "date": "2025-11-02",
    "durationMinutes": 37,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-11-02T11:33:09.000Z",
    "updatedAt": "2025-11-02T12:10:14.000Z"
  },
  {
    "id": "play-5c1ae12f-80d3-4e84-8fee-738914c8f791",
    "gameId": "game-305",
    "gameTitleKr": "Orapa Space",
    "gameTitleEn": "Orapa Space",
    "gameImage": "https://cf.geekdo-images.com/Rs7QiydHk_XHxnAOSYhUig__thumb/img/xzb4zlQOFZ_ESmfuL_wM5oQth0Y=/fit-in/200x150/filters:strip_icc()/pic8954539.png",
    "date": "2025-11-02",
    "durationMinutes": 86,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-11-02T12:10:28.000Z",
    "updatedAt": "2025-11-02T13:35:58.000Z"
  },
  {
    "id": "play-c7441f93-dced-4675-a83b-f6d5f3769839",
    "gameId": "game-325",
    "gameTitleKr": "스위시",
    "gameTitleEn": "Swish",
    "gameImage": "https://cf.geekdo-images.com/zzbOtVGaOfJArqg660wM3g__small/img/1PUK0Jphzw5Sjqa01oDQmKYk2cg=/fit-in/200x150/filters:strip_icc()/pic8782824.jpg",
    "date": "2025-11-02",
    "durationMinutes": 9,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 25,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 30,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-11-02T13:36:00.000Z",
    "updatedAt": "2025-11-02T13:45:32.000Z"
  },
  {
    "id": "play-cea29fc6-2537-4af7-a24e-9777647892a6",
    "gameId": "game-247",
    "gameTitleKr": "Surfosaurus MAX",
    "gameTitleEn": "Surfosaurus MAX",
    "gameImage": "https://cf.geekdo-images.com/_oIGFfPMAa0gHWNy7kJp7g__thumb/img/sDjXtzwxUmWreaMwHw8ofJaCaKc=/fit-in/200x150/filters:strip_icc()/pic7618281.jpg",
    "date": "2025-11-16",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 81,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-63",
        "name": "이민정",
        "score": 47,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 57,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "score": 37,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-11-16T13:23:03.000Z",
    "updatedAt": "2025-11-16T13:24:38.000Z"
  },
  {
    "id": "play-dcc47c8f-6a2b-45d1-ac21-d4ade8b5d116",
    "gameId": "game-30",
    "gameTitleKr": "Foundations of Rome",
    "gameTitleEn": "Foundations of Rome",
    "gameImage": "https://cf.geekdo-images.com/lRB91NF3OPeSff2o17NX3Q__thumb/img/CWAVZWfBegleQWJVhkehmDmxnbU=/fit-in/200x150/filters:strip_icc()/pic6706206.jpg",
    "date": "2025-11-16",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 74,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-63",
        "name": "이민정",
        "score": 83,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 78,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "score": 60,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-11-16T14:45:11.000Z",
    "updatedAt": "2025-11-16T14:45:43.000Z"
  },
  {
    "id": "play-96615594-872a-4ade-9774-5f0677becca3",
    "gameId": "game-326",
    "gameTitleKr": "Modern Art",
    "gameTitleEn": "Modern Art",
    "gameImage": "https://cf.geekdo-images.com/wLto-xaabHwKQe_Bc4iD1Q__small/img/AUqMholGVlwXLjMcxwiziE_7Ffw=/fit-in/200x150/filters:strip_icc()/pic3458036.png",
    "date": "2025-11-16",
    "durationMinutes": 76,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 388,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-63",
        "name": "이민정",
        "score": 323,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 396,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "score": 321,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-11-16T14:56:15.000Z",
    "updatedAt": "2025-11-16T16:12:18.000Z"
  },
  {
    "id": "play-f0e6761d-fb41-4da8-a6ce-5dd8b46dcfe0",
    "gameId": "game-158",
    "gameTitleKr": "Dwellings of Eldervale",
    "gameTitleEn": "Dwellings of Eldervale",
    "gameImage": "https://cf.geekdo-images.com/qJQXn0kvzvHBKWzSQN7vpw__thumb/img/nyFpcKV3cBOVO1pEImnBYLc_BRE=/fit-in/200x150/filters:strip_icc()/pic4742944.jpg",
    "date": "2025-11-16",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 87,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-63",
        "name": "이민정",
        "score": 60,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 34,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-62",
        "name": "재용",
        "score": 50,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-11-16T19:05:35.000Z",
    "updatedAt": "2025-11-16T19:06:01.000Z"
  },
  {
    "id": "play-40e487d0-d605-43a3-be53-e91b36c6d791",
    "gameId": "game-327",
    "gameTitleKr": "Fromage",
    "gameTitleEn": "Fromage",
    "gameImage": "https://cf.geekdo-images.com/h87Ft6qXbzwPifN7WGnx2Q__small/img/0qK0Iu8ahtXtY4E8UFJib4hQ1hw=/fit-in/200x150/filters:strip_icc()/pic7452200.jpg",
    "date": "2025-11-23",
    "durationMinutes": 44,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 59,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 76,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 59,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 63,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-11-23T10:41:07.000Z",
    "updatedAt": "2025-11-23T11:25:18.000Z"
  },
  {
    "id": "play-b5093e3d-c399-4461-a4b8-75f7a06f661b",
    "gameId": "game-316",
    "gameTitleKr": "Luthier",
    "gameTitleEn": "Luthier",
    "gameImage": "https://cf.geekdo-images.com/NNOCMpxKchQb_ByLmvDfRQ__small/img/hgZk4xlsFSfbXyMy2Y32dFqXCHM=/fit-in/200x150/filters:strip_icc()/pic8145392.png",
    "date": "2025-11-23",
    "durationMinutes": 179,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 98,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 94,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 94,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 90,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-11-23T12:54:30.000Z",
    "updatedAt": "2025-11-23T15:53:02.000Z"
  },
  {
    "id": "play-ec69b321-aae0-48aa-908b-c28ef7858b2b",
    "gameId": "game-262",
    "gameTitleKr": "Rock Hard: 1977",
    "gameTitleEn": "Rock Hard: 1977",
    "gameImage": "https://cf.geekdo-images.com/CrJdKWVGgg24btEKtxNyzA__thumb/img/iQkfQCZiXs2r4igjeAe_4bHgmks=/fit-in/200x150/filters:strip_icc()/pic8288389.jpg",
    "date": "2025-11-23",
    "durationMinutes": 96,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 75,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 47,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 49,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 72,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-11-23T16:40:25.000Z",
    "updatedAt": "2025-11-23T18:16:42.000Z"
  },
  {
    "id": "play-26e9d7f4-2a54-4daf-9211-beaa78834c54",
    "gameId": "game-328",
    "gameTitleKr": "Flamecraft Duals",
    "gameTitleEn": "Flamecraft Duals",
    "gameImage": "https://cf.geekdo-images.com/wIpk8_5xO9Hh3cAPvWAslQ__small/img/rLl3hBXX7FLdQQyCfEXyt_HIN8M=/fit-in/200x150/filters:strip_icc()/pic8706498.png",
    "date": "2025-11-30",
    "durationMinutes": 18,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 38,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 25,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-11-30T18:14:02.000Z",
    "updatedAt": "2025-11-30T18:32:34.000Z"
  },
  {
    "id": "play-f9d5c2c1-eb1d-4832-b281-416b0ff862f4",
    "gameId": "game-328",
    "gameTitleKr": "Flamecraft Duals",
    "gameTitleEn": "Flamecraft Duals",
    "gameImage": "https://cf.geekdo-images.com/wIpk8_5xO9Hh3cAPvWAslQ__small/img/rLl3hBXX7FLdQQyCfEXyt_HIN8M=/fit-in/200x150/filters:strip_icc()/pic8706498.png",
    "date": "2025-11-30",
    "durationMinutes": 28,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 45,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 51,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-11-30T18:41:05.000Z",
    "updatedAt": "2025-11-30T19:09:21.000Z"
  },
  {
    "id": "play-23818a5d-a4f6-4d91-b745-10dadb37b743",
    "gameId": "game-327",
    "gameTitleKr": "Fromage",
    "gameTitleEn": "Fromage",
    "gameImage": "https://cf.geekdo-images.com/h87Ft6qXbzwPifN7WGnx2Q__small/img/0qK0Iu8ahtXtY4E8UFJib4hQ1hw=/fit-in/200x150/filters:strip_icc()/pic7452200.jpg",
    "date": "2025-12-07",
    "durationMinutes": 59,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 73,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 66,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 70,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 66,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-12-07T13:01:36.000Z",
    "updatedAt": "2025-12-07T14:00:29.000Z"
  },
  {
    "id": "play-180e0bbe-20d5-468c-a191-3a3387465a83",
    "gameId": "game-40",
    "gameTitleKr": "Mysthea",
    "gameTitleEn": "Mysthea",
    "gameImage": "https://cf.geekdo-images.com/jfk-kD0mrLQ6XEKQfO5TuQ__thumb/img/tU3byM579bW1HtseUzW1IWtxmjo=/fit-in/200x150/filters:strip_icc()/pic3980663.png",
    "date": "2025-12-07",
    "durationMinutes": 179,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 198,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 154,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 171,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 174,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-12-07T14:45:40.000Z",
    "updatedAt": "2025-12-07T17:45:00.000Z"
  },
  {
    "id": "play-f157050e-a212-40fd-bffc-a76461f1091f",
    "gameId": "game-329",
    "gameTitleKr": "Mistborn: The Deckbuilding Game",
    "gameTitleEn": "Mistborn: The Deckbuilding Game",
    "gameImage": "https://cf.geekdo-images.com/Fr_k9-uU3hEUnw_3s-UnZQ__small/img/YLbnyONFWmI-9bu5J30aZke7BjI=/fit-in/200x150/filters:strip_icc()/pic8290518.png",
    "date": "2025-12-08",
    "durationMinutes": 76,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": true,
        "startPlayer": true,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-12-08T20:42:02.000Z",
    "updatedAt": "2025-12-08T21:58:23.000Z"
  },
  {
    "id": "play-06a6c240-32a3-43ad-81ef-21c2f890d24a",
    "gameId": "game-189",
    "gameTitleKr": "Darwin's Journey",
    "gameTitleEn": "Darwin's Journey",
    "gameImage": "https://cf.geekdo-images.com/-A_ABjMw4PdoAZrH-FjiiA__thumb/img/_rJRtHzqatLg9OQM0x1UaC1cRGY=/fit-in/200x150/filters:strip_icc()/pic5726930.png",
    "date": "2025-12-13",
    "durationMinutes": 165,
    "locationId": "loc-16",
    "locationName": "홍까페",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 153,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "score": 162,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "score": 65,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 140,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2025-12-13T20:25:04.000Z",
    "updatedAt": "2025-12-13T23:10:53.000Z"
  },
  {
    "id": "play-0d9dd059-6cd9-4143-8592-9ecf5d4db54a",
    "gameId": "game-330",
    "gameTitleKr": "Renature",
    "gameTitleEn": "Renature",
    "gameImage": "https://cf.geekdo-images.com/w1KgNmpX0_oo3Y9ENmtj0w__small/img/JUJRim178mCB90Q1r93Ibv_ViDY=/fit-in/200x150/filters:strip_icc()/pic5535714.jpg",
    "date": "2025-12-13",
    "durationMinutes": 52,
    "locationId": "loc-16",
    "locationName": "홍까페",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 62,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-60",
        "name": "가갸",
        "score": 70,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-59",
        "name": "솔",
        "score": 54,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 46,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-12-13T23:47:26.000Z",
    "updatedAt": "2025-12-14T00:39:28.000Z"
  },
  {
    "id": "play-1d798d30-87bd-451c-9c4b-d7a24bc7fa8f",
    "gameId": "game-331",
    "gameTitleKr": "탁상탐정단: 황혼에 웃는 소녀",
    "gameTitleEn": "탁상탐정단: 황혼에 웃는 소녀",
    "date": "2025-12-21",
    "durationMinutes": 78,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "notes": "20점\n추가점수\n2점\n2점",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2025-12-21T10:09:57.000Z",
    "updatedAt": "2025-12-21T11:29:33.000Z"
  },
  {
    "id": "play-b57cd7bf-cad5-4cd3-9fcc-ef375d3e643d",
    "gameId": "game-327",
    "gameTitleKr": "Fromage",
    "gameTitleEn": "Fromage",
    "gameImage": "https://cf.geekdo-images.com/h87Ft6qXbzwPifN7WGnx2Q__small/img/0qK0Iu8ahtXtY4E8UFJib4hQ1hw=/fit-in/200x150/filters:strip_icc()/pic7452200.jpg",
    "date": "2026-01-03",
    "durationMinutes": 80,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 85,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 74,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-47",
        "name": "찬우",
        "score": 52,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-01-03T09:54:53.000Z",
    "updatedAt": "2026-01-03T11:14:53.000Z"
  },
  {
    "id": "play-43d22f77-f819-4853-b506-6f75e09a2620",
    "gameId": "game-158",
    "gameTitleKr": "Dwellings of Eldervale",
    "gameTitleEn": "Dwellings of Eldervale",
    "gameImage": "https://cf.geekdo-images.com/qJQXn0kvzvHBKWzSQN7vpw__thumb/img/nyFpcKV3cBOVO1pEImnBYLc_BRE=/fit-in/200x150/filters:strip_icc()/pic4742944.jpg",
    "date": "2026-01-03",
    "durationMinutes": 195,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 71,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 94,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-47",
        "name": "찬우",
        "score": 92,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-01-03T12:42:57.000Z",
    "updatedAt": "2026-01-03T15:59:30.000Z"
  },
  {
    "id": "play-23ca42bb-098f-4a2d-81dc-a717551628f5",
    "gameId": "game-32",
    "gameTitleKr": "Gizmos",
    "gameTitleEn": "Gizmos",
    "gameImage": "https://cf.geekdo-images.com/zin82Hg4MXck86t8fzbsdA__thumb/img/e-UqOrMfsLCh2T_igK3wkoFrOu8=/fit-in/200x150/filters:strip_icc()/pic4169718.png",
    "date": "2026-01-03",
    "durationMinutes": 48,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 30,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 20,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-47",
        "name": "찬우",
        "score": 38,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-01-03T16:26:24.000Z",
    "updatedAt": "2026-01-03T17:14:23.000Z"
  },
  {
    "id": "play-6a0a2154-5091-4adb-a3c6-b69126852f93",
    "gameId": "game-32",
    "gameTitleKr": "Gizmos",
    "gameTitleEn": "Gizmos",
    "gameImage": "https://cf.geekdo-images.com/zin82Hg4MXck86t8fzbsdA__thumb/img/e-UqOrMfsLCh2T_igK3wkoFrOu8=/fit-in/200x150/filters:strip_icc()/pic4169718.png",
    "date": "2026-01-03",
    "durationMinutes": 66,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 32,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 33,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-47",
        "name": "찬우",
        "score": 20,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-01-03T17:16:56.000Z",
    "updatedAt": "2026-01-03T18:23:16.000Z"
  },
  {
    "id": "play-f88e517f-62c7-4b4a-81a2-3398423e7c63",
    "gameId": "game-319",
    "gameTitleKr": "TomaToss",
    "gameTitleEn": "TomaToss",
    "gameImage": "https://cf.geekdo-images.com/KoMzUo6DULFy_v4MaGaRUw__small/img/wEv8_SRYPsKNnQ1cd1LBkKVTqgk=/fit-in/200x150/filters:strip_icc()/pic9051927.jpg",
    "date": "2026-01-03",
    "durationMinutes": 24,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 31,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 27,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-47",
        "name": "찬우",
        "score": 30,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-01-03T18:26:17.000Z",
    "updatedAt": "2026-01-03T18:49:55.000Z"
  },
  {
    "id": "play-549cd1df-6efa-4ab3-b415-8af51b04c126",
    "gameId": "game-148",
    "gameTitleKr": "Lost Ruins of Arnak",
    "gameTitleEn": "Lost Ruins of Arnak",
    "gameImage": "https://cf.geekdo-images.com/6GqH14TJJhza86BX5HCLEQ__thumb/img/J8SVmGOJXZGxNjkT3xYNQU7Haxg=/fit-in/200x150/filters:strip_icc()/pic5674958.jpg",
    "date": "2026-01-11",
    "durationMinutes": 4,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 68,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 76,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 75,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 88,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-01-11T14:02:12.000Z",
    "updatedAt": "2026-01-11T14:06:42.000Z"
  },
  {
    "id": "play-adc40a22-e2b7-4662-975e-88b896ffe610",
    "gameId": "game-3",
    "gameTitleKr": "Ark Nova",
    "gameTitleEn": "Ark Nova",
    "gameImage": "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__thumb/img/4KuHNTWSMPf8vTNDKSRMMI3oOv8=/fit-in/200x150/filters:strip_icc()/pic6293412.jpg",
    "date": "2026-01-11",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 106,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 0,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 119,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 99,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-01-11T14:02:12.000Z",
    "updatedAt": "2026-01-11T18:29:05.000Z"
  },
  {
    "id": "play-932f52a0-b735-46d0-92ab-c93d15b4ebe4",
    "gameId": "game-268",
    "gameTitleKr": "Hegemony: Lead Your Class to Victory",
    "gameTitleEn": "Hegemony: Lead Your Class to Victory",
    "gameImage": "https://cf.geekdo-images.com/DCLgJlrvB-EqL6A3WgQLMQ__thumb/img/9yp6ANJx6cqdQqQ6hkNr3zA88vw=/fit-in/200x150/filters:strip_icc()/pic5715770.jpg",
    "date": "2026-01-18",
    "durationMinutes": 346,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 101,
        "winner": true,
        "startPlayer": false,
        "role": "정부",
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 89,
        "winner": false,
        "startPlayer": false,
        "role": "중산층",
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 69,
        "winner": false,
        "startPlayer": false,
        "role": "노동자",
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 64,
        "winner": false,
        "startPlayer": false,
        "role": "자본가",
        "newPlayer": true
      }
    ],
    "createdAt": "2026-01-18T11:04:29.000Z",
    "updatedAt": "2026-01-18T16:50:55.000Z"
  },
  {
    "id": "play-6a5ed940-7bf3-4743-98b6-e85f7d9288c7",
    "gameId": "game-327",
    "gameTitleKr": "Fromage",
    "gameTitleEn": "Fromage",
    "gameImage": "https://cf.geekdo-images.com/h87Ft6qXbzwPifN7WGnx2Q__small/img/0qK0Iu8ahtXtY4E8UFJib4hQ1hw=/fit-in/200x150/filters:strip_icc()/pic7452200.jpg",
    "date": "2026-01-18",
    "durationMinutes": 60,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 80,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 62,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 75,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 80,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-01-18T17:21:42.000Z",
    "updatedAt": "2026-01-18T18:21:33.000Z"
  },
  {
    "id": "play-7f5ab12a-77f4-40fb-b938-5d60098c2c3e",
    "gameId": "game-332",
    "gameTitleKr": "Ada's Dream",
    "gameTitleEn": "Ada's Dream",
    "gameImage": "https://cf.geekdo-images.com/i3YeleJsNmnvcKdwgW3TKA__small/img/PnqlbLRuC-3OB7dWtElkQkhLdxg=/fit-in/200x150/filters:strip_icc()/pic8030666.jpg",
    "date": "2026-01-24",
    "durationMinutes": 210,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 98,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 133,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 131,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 92,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-01-24T10:59:50.000Z",
    "updatedAt": "2026-01-24T14:29:50.000Z"
  },
  {
    "id": "play-7c832712-5496-44af-a4f3-e655544572b9",
    "gameId": "game-333",
    "gameTitleKr": "Phoenix New Horizon",
    "gameTitleEn": "Phoenix New Horizon",
    "gameImage": "https://cf.geekdo-images.com/qdUx6XBGT3KATMtacOM0jg__small/img/-_4K-pbIl1Yy4bRS1wMxRuFeEyE=/fit-in/200x150/filters:strip_icc()/pic8162751.jpg",
    "date": "2026-01-24",
    "durationMinutes": 121,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 40,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 44,
        "winner": false,
        "startPlayer": true,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 92,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 138,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-01-24T15:56:24.000Z",
    "updatedAt": "2026-01-24T17:57:48.000Z"
  },
  {
    "id": "play-cfbc5cd0-6d5c-4918-9e02-3027378b1048",
    "gameId": "game-334",
    "gameTitleKr": "Castle Combo",
    "gameTitleEn": "Castle Combo",
    "gameImage": "https://cf.geekdo-images.com/rGomBfj0FGrZM-w3h5HFWQ__small/img/DnptKBxT6l_W2B3jGXdnEDEkDM0=/fit-in/200x150/filters:strip_icc()/pic8250341.png",
    "date": "2026-01-24",
    "durationMinutes": 31,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 68,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 66,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 78,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 84,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-01-24T18:07:46.000Z",
    "updatedAt": "2026-01-24T18:39:05.000Z"
  },
  {
    "id": "play-51cc48f6-6727-4043-bf3f-8d8c4c7616b8",
    "gameId": "game-85",
    "gameTitleKr": "Celestia",
    "gameTitleEn": "Celestia",
    "gameImage": "https://cf.geekdo-images.com/8kl6m6m_unthBPw9SxoDQQ__thumb/img/vK6rBE3ZjolzG6jEVxJj49MBIc4=/fit-in/200x150/filters:strip_icc()/pic6973677.png",
    "date": "2026-01-24",
    "durationMinutes": 37,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 34,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 64,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 48,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 50,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-01-24T18:42:18.000Z",
    "updatedAt": "2026-01-24T19:19:31.000Z"
  },
  {
    "id": "play-28c28f0c-bee6-4386-adab-ac8ee4a81e7d",
    "gameId": "game-85",
    "gameTitleKr": "Celestia",
    "gameTitleEn": "Celestia",
    "gameImage": "https://cf.geekdo-images.com/8kl6m6m_unthBPw9SxoDQQ__thumb/img/vK6rBE3ZjolzG6jEVxJj49MBIc4=/fit-in/200x150/filters:strip_icc()/pic6973677.png",
    "date": "2026-01-24",
    "durationMinutes": 18,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 51,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 56,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 43,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 52,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-01-24T19:19:54.000Z",
    "updatedAt": "2026-01-24T19:37:51.000Z"
  },
  {
    "id": "play-721f0eb1-5c59-466f-8c47-4fc5fb44100d",
    "gameId": "game-85",
    "gameTitleKr": "Celestia",
    "gameTitleEn": "Celestia",
    "gameImage": "https://cf.geekdo-images.com/8kl6m6m_unthBPw9SxoDQQ__thumb/img/vK6rBE3ZjolzG6jEVxJj49MBIc4=/fit-in/200x150/filters:strip_icc()/pic6973677.png",
    "date": "2026-01-24",
    "durationMinutes": 45,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 40,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 55,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 49,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 33,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-01-24T19:59:26.000Z",
    "updatedAt": "2026-01-24T19:59:41.000Z"
  },
  {
    "id": "play-b13fe3f8-6136-4826-b219-b55dadfbab45",
    "gameId": "game-332",
    "gameTitleKr": "Ada's Dream",
    "gameTitleEn": "Ada's Dream",
    "gameImage": "https://cf.geekdo-images.com/i3YeleJsNmnvcKdwgW3TKA__small/img/PnqlbLRuC-3OB7dWtElkQkhLdxg=/fit-in/200x150/filters:strip_icc()/pic8030666.jpg",
    "date": "2026-01-25",
    "durationMinutes": 192,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 114,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 93,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 97,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-01-25T12:21:25.000Z",
    "updatedAt": "2026-01-25T15:33:38.000Z"
  },
  {
    "id": "play-c2e72f06-ca8d-441c-8895-be57db4777b9",
    "gameId": "game-332",
    "gameTitleKr": "Ada's Dream",
    "gameTitleEn": "Ada's Dream",
    "gameImage": "https://cf.geekdo-images.com/i3YeleJsNmnvcKdwgW3TKA__small/img/PnqlbLRuC-3OB7dWtElkQkhLdxg=/fit-in/200x150/filters:strip_icc()/pic8030666.jpg",
    "date": "2026-01-25",
    "durationMinutes": 142,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 137,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 141,
        "winner": true,
        "startPlayer": true,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 108,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-01-25T15:49:08.000Z",
    "updatedAt": "2026-01-25T18:10:56.000Z"
  },
  {
    "id": "play-695bbeb0-fe42-432d-9719-aa57f1c01b31",
    "gameId": "game-327",
    "gameTitleKr": "Fromage",
    "gameTitleEn": "Fromage",
    "gameImage": "https://cf.geekdo-images.com/h87Ft6qXbzwPifN7WGnx2Q__small/img/0qK0Iu8ahtXtY4E8UFJib4hQ1hw=/fit-in/200x150/filters:strip_icc()/pic7452200.jpg",
    "date": "2026-01-25",
    "durationMinutes": 29,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 73,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 57,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 75,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-01-25T18:27:18.000Z",
    "updatedAt": "2026-01-25T18:56:10.000Z"
  },
  {
    "id": "play-ed3a82b1-16c7-4cfa-8c70-4ba1b031d578",
    "gameId": "game-335",
    "gameTitleKr": "Parks (Second Edition)",
    "gameTitleEn": "Parks (Second Edition)",
    "gameImage": "https://cf.geekdo-images.com/hHnw1JGLaEkJXaOv8bm6YQ__small/img/VueCGH75QOD4dv0yeaKqQZgTqMo=/fit-in/200x150/filters:strip_icc()/pic8660069.jpg",
    "date": "2026-02-03",
    "durationMinutes": 84,
    "locationId": "loc-6",
    "locationName": "마이홈",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 39,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 38,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-02-03T20:08:00.000Z",
    "updatedAt": "2026-02-03T21:32:09.000Z"
  },
  {
    "id": "play-e9b54f3f-7ac6-494c-b326-3e13496ddd72",
    "gameId": "game-332",
    "gameTitleKr": "Ada's Dream",
    "gameTitleEn": "Ada's Dream",
    "gameImage": "https://cf.geekdo-images.com/i3YeleJsNmnvcKdwgW3TKA__small/img/PnqlbLRuC-3OB7dWtElkQkhLdxg=/fit-in/200x150/filters:strip_icc()/pic8030666.jpg",
    "date": "2026-02-05",
    "durationMinutes": 176,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 146,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 132,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 127,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-02-05T18:58:07.000Z",
    "updatedAt": "2026-02-05T21:54:32.000Z"
  },
  {
    "id": "play-03240cdc-339c-43b9-9385-63d9cc319368",
    "gameId": "game-336",
    "gameTitleKr": "Ethnos: 2nd Edition",
    "gameTitleEn": "Ethnos: 2nd Edition",
    "gameImage": "https://cf.geekdo-images.com/3pOKNbsS7iV-9foX1GPQFw__small/img/bYsQNBw0fOEnQVS2AynUE9Qgl80=/fit-in/200x150/filters:strip_icc()/pic8542015.jpg",
    "date": "2026-02-14",
    "durationMinutes": 61,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 75,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 100,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 78,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-64",
        "name": "이소현",
        "score": 107,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 94,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-02-14T12:45:20.000Z",
    "updatedAt": "2026-02-14T13:45:58.000Z"
  },
  {
    "id": "play-ff16e6de-faad-4e6b-89e8-4aab2495b4c7",
    "gameId": "game-337",
    "gameTitleKr": "프리세이지",
    "gameTitleEn": "Présages",
    "gameImage": "https://cf.geekdo-images.com/WngBXWndu_CCMCH9dU64Qg__small/img/Q3101xU5fikxR4yCsiiFv92WZJ4=/fit-in/200x150/filters:strip_icc()/pic8642520.jpg",
    "date": "2026-02-14",
    "durationMinutes": 65,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": true,
        "startPlayer": false,
        "role": "팀1",
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "role": "팀2",
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": true,
        "startPlayer": false,
        "role": "팀1",
        "newPlayer": true
      },
      {
        "playerId": "player-64",
        "name": "이소현",
        "winner": false,
        "startPlayer": false,
        "role": "팀2",
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "role": "팀2",
        "newPlayer": true
      }
    ],
    "createdAt": "2026-02-14T13:57:16.000Z",
    "updatedAt": "2026-02-14T15:02:39.000Z"
  },
  {
    "id": "play-7ba121da-2d2c-4a8d-b4b2-bf6428b3caa7",
    "gameId": "game-332",
    "gameTitleKr": "Ada's Dream",
    "gameTitleEn": "Ada's Dream",
    "gameImage": "https://cf.geekdo-images.com/i3YeleJsNmnvcKdwgW3TKA__small/img/PnqlbLRuC-3OB7dWtElkQkhLdxg=/fit-in/200x150/filters:strip_icc()/pic8030666.jpg",
    "date": "2026-02-28",
    "durationMinutes": 158,
    "locationId": "loc-11",
    "locationName": "지니어스",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 142,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-65",
        "name": "근수",
        "score": 88,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-66",
        "name": "김영찬",
        "score": 73,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-67",
        "name": "박대열",
        "score": 87,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-02-28T14:43:43.000Z",
    "updatedAt": "2026-02-28T17:21:19.000Z"
  },
  {
    "id": "play-a7cb6204-f170-40fa-a034-33fe92a73176",
    "gameId": "game-332",
    "gameTitleKr": "Ada's Dream",
    "gameTitleEn": "Ada's Dream",
    "gameImage": "https://cf.geekdo-images.com/i3YeleJsNmnvcKdwgW3TKA__small/img/PnqlbLRuC-3OB7dWtElkQkhLdxg=/fit-in/200x150/filters:strip_icc()/pic8030666.jpg",
    "date": "2026-03-07",
    "durationMinutes": 168,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 180,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 151,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 123,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-03-07T14:36:22.000Z",
    "updatedAt": "2026-03-16T19:41:42.000Z"
  },
  {
    "id": "play-c8ab5ec1-c711-45dc-885d-f08444f75776",
    "gameId": "game-338",
    "gameTitleKr": "르사파",
    "gameTitleEn": "Resafa",
    "gameImage": "https://cf.geekdo-images.com/aTDLIq7UfNrcORpwbU61UA__small/img/0-tVIFJeyTO5erNPcU9T1IaGKt8=/fit-in/200x150/filters:strip_icc()/pic8361340.jpg",
    "date": "2026-03-21",
    "durationMinutes": 271,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 136,
        "winner": false,
        "startPlayer": true,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 162,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 141,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-03-21T14:00:31.000Z",
    "updatedAt": "2026-03-21T18:31:25.000Z"
  },
  {
    "id": "play-52b8b827-54fb-4fe2-ae27-8382b2440d88",
    "gameId": "game-338",
    "gameTitleKr": "르사파",
    "gameTitleEn": "Resafa",
    "gameImage": "https://cf.geekdo-images.com/aTDLIq7UfNrcORpwbU61UA__small/img/0-tVIFJeyTO5erNPcU9T1IaGKt8=/fit-in/200x150/filters:strip_icc()/pic8361340.jpg",
    "date": "2026-03-21",
    "durationMinutes": 26,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 155,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 164,
        "winner": false,
        "startPlayer": true,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 175,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-03-21T18:31:28.000Z",
    "updatedAt": "2026-03-21T18:57:01.000Z"
  },
  {
    "id": "play-362b13a8-e6db-43fa-9a65-43db078465c5",
    "gameId": "game-221",
    "gameTitleKr": "Dune: Imperium – Uprising",
    "gameTitleEn": "Dune: Imperium – Uprising",
    "gameImage": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__thumb/img/H6qmxJrRFjtOAPZOfDoZ480-46I=/fit-in/200x150/filters:strip_icc()/pic7664424.jpg",
    "date": "2026-03-21",
    "durationMinutes": 139,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 10,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 4,
        "winner": false,
        "startPlayer": true,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 12,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-03-21T20:13:40.000Z",
    "updatedAt": "2026-03-21T22:32:40.000Z"
  },
  {
    "id": "play-40ea4a5e-7ef6-4761-a6f2-6c10a0b0c9a8",
    "gameId": "game-339",
    "gameTitleKr": "바이마르: 민주주의를 위한 투쟁",
    "gameTitleEn": "Weimar: The Fight for Democracy",
    "gameImage": "https://cf.geekdo-images.com/3K82rRzulrDxik2FK7p_HA__small/img/LrOSpfsi8SlrJ_oYL7PjrgEYYn8=/fit-in/200x150/filters:strip_icc()/pic6657971.jpg",
    "date": "2026-04-18",
    "durationMinutes": 349,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 9,
        "winner": true,
        "startPlayer": false,
        "role": "DNVP",
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": -3,
        "winner": false,
        "startPlayer": false,
        "role": "KPD",
        "newPlayer": true
      },
      {
        "playerId": "player-15",
        "name": "민호형",
        "score": 6,
        "winner": false,
        "startPlayer": false,
        "role": "Zentrum",
        "newPlayer": true
      },
      {
        "playerId": "player-45",
        "name": "진석",
        "score": 0,
        "winner": false,
        "startPlayer": true,
        "role": "SPD",
        "newPlayer": true
      }
    ],
    "createdAt": "2026-04-18T13:19:34.000Z",
    "updatedAt": "2026-04-18T19:23:30.000Z"
  },
  {
    "id": "play-82860aaf-ac83-466b-8ff8-cad2f3397b79",
    "gameId": "game-340",
    "gameTitleKr": "Wanted Wombats",
    "gameTitleEn": "Wanted Wombats",
    "gameImage": "https://cf.geekdo-images.com/Hu86BcFEi4ZV0KC1nxAhxQ__small/img/2cbWRU-EpY0HjPXUgCJfyz1enoU=/fit-in/200x150/filters:strip_icc()/pic9279321.png",
    "date": "2026-04-26",
    "durationMinutes": 45,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-04-26T12:29:11.000Z",
    "updatedAt": "2026-04-26T12:29:48.000Z"
  },
  {
    "id": "play-0765d805-adda-4354-bf89-ec5b67324cd1",
    "gameId": "game-341",
    "gameTitleKr": "Ticket to Ride Legacy: Legends of the West",
    "gameTitleEn": "Ticket to Ride Legacy: Legends of the West",
    "gameImage": "https://cf.geekdo-images.com/2H0pJddVJA3r6btqRNLG1g__small/img/scMQ04r1admTpyvH91g9DbZEncg=/fit-in/200x150/filters:strip_icc()/pic7541330.png",
    "date": "2026-04-26",
    "durationMinutes": 523,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 1380,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 1096,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 1216,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 974,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-04-26T12:36:49.000Z",
    "updatedAt": "2026-05-03T18:07:41.000Z"
  },
  {
    "id": "play-e22a294f-9003-4534-916c-ce5f305bdc2a",
    "gameId": "game-342",
    "gameTitleKr": "Speakeasy",
    "gameTitleEn": "Speakeasy",
    "gameImage": "https://cf.geekdo-images.com/Y7vIlh-m_Ugnv0jrUuOW3g__small/img/pTIdvbosIWlLSxorWRMWkUkeSj8=/fit-in/200x150/filters:strip_icc()/pic8165052.jpg",
    "date": "2026-05-01",
    "durationMinutes": 312,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 363,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 404,
        "winner": false,
        "startPlayer": true,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 301,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 420,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-05-01T09:55:57.000Z",
    "updatedAt": "2026-05-01T16:50:22.000Z"
  },
  {
    "id": "play-88ecd69c-3dd5-4ab4-bc8d-ccdab591fcaa",
    "gameId": "game-342",
    "gameTitleKr": "Speakeasy",
    "gameTitleEn": "Speakeasy",
    "gameImage": "https://cf.geekdo-images.com/Y7vIlh-m_Ugnv0jrUuOW3g__small/img/pTIdvbosIWlLSxorWRMWkUkeSj8=/fit-in/200x150/filters:strip_icc()/pic8165052.jpg",
    "date": "2026-05-01",
    "durationMinutes": 205,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 335,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 298,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 320,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 423,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-05-01T17:33:35.000Z",
    "updatedAt": "2026-05-01T20:58:41.000Z"
  },
  {
    "id": "play-c731f86c-d3e8-447a-84d7-001ff1abdcd7",
    "gameId": "game-343",
    "gameTitleKr": "Nokosu Dice",
    "gameTitleEn": "Nokosu Dice",
    "gameImage": "https://cf.geekdo-images.com/lbtoLuxIdsY82pJydTZVBQ__small/img/caYZg_oGMJ9bWl4Ot4PEzLa4Pu8=/fit-in/200x150/filters:strip_icc()/pic5069035.jpg",
    "date": "2026-05-03",
    "durationMinutes": 48,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-05-03T18:23:57.000Z",
    "updatedAt": "2026-05-03T19:12:16.000Z"
  },
  {
    "id": "play-6295e604-a897-4bac-8b82-7536a98a30cd",
    "gameId": "game-66",
    "gameTitleKr": "The Gallerist",
    "gameTitleEn": "The Gallerist",
    "gameImage": "https://cf.geekdo-images.com/ie1GSt1XV04sXQXt-3O1UQ__thumb/img/O0H84AvXp139U865gRLGiAo9-gA=/fit-in/200x150/filters:strip_icc()/pic2503200.png",
    "date": "2026-05-30",
    "durationMinutes": 88,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-05-30T11:03:19.000Z",
    "updatedAt": "2026-05-30T12:31:46.000Z"
  },
  {
    "id": "play-05540658-7efa-4363-823f-3c7055ab1ee4",
    "gameId": "game-344",
    "gameTitleKr": "Splitz",
    "gameTitleEn": "Splitz",
    "gameImage": "https://cf.geekdo-images.com/rkWWk_pMIJlR6RTBJGMF5w__small/img/WrovQvaacL_TqQI0O0kN5QkDuqI=/fit-in/200x150/filters:strip_icc()/pic8889427.jpg",
    "date": "2026-07-04",
    "durationMinutes": 62,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 24,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 24,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 18,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-07-04T13:15:22.000Z",
    "updatedAt": "2026-07-04T14:17:55.000Z"
  },
  {
    "id": "play-80cc5e7a-ad5c-4fb0-8c06-5e360999ffa8",
    "gameId": "game-345",
    "gameTitleKr": "슈팅 피쉬",
    "gameTitleEn": "Throw Fish",
    "gameImage": "https://cf.geekdo-images.com/T8_akQ0t5SUSNhBy0sygXQ__small/img/1fmRE9aFg39Ck1UswlJiHDTx1qA=/fit-in/200x150/filters:strip_icc()/pic9391562.jpg",
    "date": "2026-07-04",
    "durationMinutes": 25,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-07-04T14:24:42.000Z",
    "updatedAt": "2026-07-04T14:50:29.000Z"
  },
  {
    "id": "play-ae655fc5-228f-4756-9be3-87b069335d71",
    "gameId": "game-342",
    "gameTitleKr": "Speakeasy",
    "gameTitleEn": "Speakeasy",
    "gameImage": "https://cf.geekdo-images.com/Y7vIlh-m_Ugnv0jrUuOW3g__small/img/pTIdvbosIWlLSxorWRMWkUkeSj8=/fit-in/200x150/filters:strip_icc()/pic8165052.jpg",
    "date": "2026-07-04",
    "durationMinutes": 196,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 436,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-29",
        "name": "은서",
        "score": 374,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 169,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-07-04T16:41:43.000Z",
    "updatedAt": "2026-07-04T19:57:59.000Z"
  },
  {
    "id": "play-287e2cbf-999e-43eb-ac01-c8c7a37e42a4",
    "gameId": "game-346",
    "gameTitleKr": "Covenant",
    "gameTitleEn": "Covenant",
    "gameImage": "https://cf.geekdo-images.com/4XkIFGbIAXtA-pDb6nlvsg__small/img/uQ9etIk8_uvoJuVA9ZzTtNYORKg=/fit-in/200x150/filters:strip_icc()/pic8968542.jpg",
    "date": "2026-07-05",
    "durationMinutes": 302,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 66,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 51,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 70,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 83,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-07-05T10:04:41.000Z",
    "updatedAt": "2026-07-05T15:07:26.000Z"
  },
  {
    "id": "play-41c2a197-b671-4a2e-8e87-2788c3c15ff9",
    "gameId": "game-347",
    "gameTitleKr": "야단법석 달리기",
    "gameTitleEn": "Magical Athlete",
    "gameImage": "https://cf.geekdo-images.com/1uW8t9AkuqOF0xjv_sXKgw__small/img/tWEmoT1EaoYUpbwrTGCLMHaaZGs=/fit-in/200x150/filters:strip_icc()/pic9106864.png",
    "date": "2026-07-05",
    "durationMinutes": 27,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 10,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-07-05T15:34:13.000Z",
    "updatedAt": "2026-07-05T16:01:50.000Z"
  },
  {
    "id": "play-fe14e20b-213e-4cbb-bd53-95a251dff1d2",
    "gameId": "game-66",
    "gameTitleKr": "The Gallerist",
    "gameTitleEn": "The Gallerist",
    "gameImage": "https://cf.geekdo-images.com/ie1GSt1XV04sXQXt-3O1UQ__thumb/img/O0H84AvXp139U865gRLGiAo9-gA=/fit-in/200x150/filters:strip_icc()/pic2503200.png",
    "date": "2026-07-05",
    "durationMinutes": 190,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 95,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 118,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-56",
        "name": "준수",
        "score": 87,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 134,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-07-05T16:08:15.000Z",
    "updatedAt": "2026-07-05T19:17:54.000Z"
  },
  {
    "id": "play-a3c1ccbd-c532-4155-a2cd-5a6ee9aad3e0",
    "gameId": "game-348",
    "gameTitleKr": "Revenant",
    "gameTitleEn": "Revenant",
    "gameImage": "https://cf.geekdo-images.com/3jI41d32ExxZua8WiP_Zhg__small/img/ZVr_VfjGozJFWXHsdp2aI2zGFps=/fit-in/200x150/filters:strip_icc()/pic8426405.jpg",
    "date": "2026-07-11",
    "durationMinutes": 351,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 86,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-12",
        "name": "률",
        "score": 83,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 79,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-41",
        "name": "제이크",
        "score": 76,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-07-11T13:15:03.000Z",
    "updatedAt": "2026-07-11T19:06:26.000Z"
  },
  {
    "id": "play-ac0fafe4-86f1-4122-a410-f7b312340a67",
    "gameId": "game-348",
    "gameTitleKr": "Revenant",
    "gameTitleEn": "Revenant",
    "gameImage": "https://cf.geekdo-images.com/3jI41d32ExxZua8WiP_Zhg__small/img/ZVr_VfjGozJFWXHsdp2aI2zGFps=/fit-in/200x150/filters:strip_icc()/pic8426405.jpg",
    "date": "2026-07-12",
    "durationMinutes": 355,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 111,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 113,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 94,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-07-12T10:36:52.000Z",
    "updatedAt": "2026-07-12T16:32:20.000Z"
  },
  {
    "id": "play-9806bd16-1c81-4e87-8ed4-a1b5edbce52f",
    "gameId": "game-214",
    "gameTitleKr": "스플렌더: Pokémon (Splendor: Pokémon)",
    "gameTitleEn": "스플렌더: Pokémon (Splendor: Pokémon)",
    "gameImage": "https://cf.geekdo-images.com/o6HpiLCBBFvc7XvBv7DEig__thumb/img/cP3zFhQXbpOo4jMbXWgPShAdn4E=/fit-in/200x150/filters:strip_icc()/pic7902371.jpg",
    "date": "2026-07-12",
    "durationMinutes": 37,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 12,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 20,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 14,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-07-12T16:55:11.000Z",
    "updatedAt": "2026-07-12T17:32:04.000Z"
  },
  {
    "id": "play-a2a8e7fd-2953-4fe1-a89c-2985b2e27494",
    "gameId": "game-221",
    "gameTitleKr": "Dune: Imperium – Uprising",
    "gameTitleEn": "Dune: Imperium – Uprising",
    "gameImage": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__thumb/img/H6qmxJrRFjtOAPZOfDoZ480-46I=/fit-in/200x150/filters:strip_icc()/pic7664424.jpg",
    "date": "2026-07-12",
    "durationMinutes": 110,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 8,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 11,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 5,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-07-12T17:46:37.000Z",
    "updatedAt": "2026-07-12T19:36:07.000Z"
  },
  {
    "id": "play-01d70e40-eb93-4fdc-8fb3-5e1f412576fd",
    "gameId": "game-351",
    "gameTitleKr": "죄악의 카니발",
    "gameTitleEn": "Carnival of Sins",
    "gameImage": "https://cf.geekdo-images.com/oMti7rShEBXXOnr1IWyOTg__small/img/xwkZq8FbnKAIAuJpyDtsvY1_C3I=/fit-in/200x150/filters:strip_icc()/pic8909267.jpg",
    "date": "2026-07-25",
    "durationMinutes": 45,
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 67,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 86,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 79,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-07-25T10:59:40.000Z",
    "updatedAt": "2026-07-25T13:14:49.000Z"
  },
  {
    "id": "play-c058cdfa-a6f5-44fb-bea7-25aba24bea31",
    "gameId": "game-348",
    "gameTitleKr": "Revenant",
    "gameTitleEn": "Revenant",
    "gameImage": "https://cf.geekdo-images.com/3jI41d32ExxZua8WiP_Zhg__small/img/ZVr_VfjGozJFWXHsdp2aI2zGFps=/fit-in/200x150/filters:strip_icc()/pic8426405.jpg",
    "date": "2026-07-25",
    "durationMinutes": 165,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 93,
        "winner": false,
        "startPlayer": true,
        "newPlayer": false
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 111,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 114,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-07-25T14:33:54.000Z",
    "updatedAt": "2026-07-25T17:18:34.000Z"
  },
  {
    "id": "play-a00ea75f-947a-46f4-8172-285832ce944e",
    "gameId": "game-352",
    "gameTitleKr": "해녀: Sea Divers of Jeju",
    "gameTitleEn": "해녀: Sea Divers of Jeju",
    "gameImage": "https://cf.geekdo-images.com/siUEgwQgNvxyg2sDpc1PlA__small/img/vtuhZMctFvgQo-8WHeNkGTujOlk=/fit-in/200x150/filters:strip_icc()/pic9531187.jpg",
    "date": "2026-07-25",
    "durationMinutes": 35,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 94,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 126,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 189,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-07-25T17:36:07.000Z",
    "updatedAt": "2026-07-25T18:11:07.000Z"
  },
  {
    "id": "play-45796020-9050-42ce-86a9-97e44d6b3b01",
    "gameId": "game-353",
    "gameTitleKr": "Puerto Rico 1897: Special Edition",
    "gameTitleEn": "Puerto Rico 1897: Special Edition",
    "gameImage": "https://cf.geekdo-images.com/ewNPD8vcrsXVfuVc9_E6hg__small/img/fEkdPMxyjK8G9uqdRPT14Q-UCVo=/fit-in/200x150/filters:strip_icc()/pic8376834.jpg",
    "date": "2026-08-08",
    "durationMinutes": 45,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 47,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 35,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 30,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-08-08T11:57:21.000Z",
    "updatedAt": "2026-08-08T11:58:55.000Z"
  },
  {
    "id": "play-c1e086b7-b93b-42d8-a26f-c3d047e53115",
    "gameId": "game-354",
    "gameTitleKr": "Tzolk'in: The Mayan Calendar",
    "gameTitleEn": "Tzolk'in: The Mayan Calendar",
    "gameImage": "https://cf.geekdo-images.com/kXf7mDyDYuHg6oe8yTUIEA__small/img/or9mAn4ClljY_wO_zvsLJDqs9tU=/fit-in/200x150/filters:strip_icc()/pic4604439.jpg",
    "date": "2026-08-08",
    "durationMinutes": 45,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 60,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 85,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 54,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-08-08T15:07:13.000Z",
    "updatedAt": "2026-08-08T15:08:16.000Z"
  },
  {
    "id": "play-1e5c65ab-32f3-43a9-a0a2-35a197b70646",
    "gameId": "game-148",
    "gameTitleKr": "Lost Ruins of Arnak",
    "gameTitleEn": "Lost Ruins of Arnak",
    "gameImage": "https://cf.geekdo-images.com/6GqH14TJJhza86BX5HCLEQ__thumb/img/J8SVmGOJXZGxNjkT3xYNQU7Haxg=/fit-in/200x150/filters:strip_icc()/pic5674958.jpg",
    "date": "2026-08-08",
    "durationMinutes": 114,
    "locationId": "loc-14",
    "locationName": "푸른하늘",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 101,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-7",
        "name": "동욱형",
        "score": 71,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-51",
        "name": "형석",
        "score": 73,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-08-08T18:23:39.000Z",
    "updatedAt": "2026-08-08T20:17:54.000Z"
  },
  {
    "id": "play-93b791f0-d99c-41fd-aca4-c2e1fc3e026d",
    "gameId": "game-346",
    "gameTitleKr": "Covenant",
    "gameTitleEn": "Covenant",
    "gameImage": "https://cf.geekdo-images.com/4XkIFGbIAXtA-pDb6nlvsg__small/img/uQ9etIk8_uvoJuVA9ZzTtNYORKg=/fit-in/200x150/filters:strip_icc()/pic8968542.jpg",
    "date": "2026-08-11",
    "durationMinutes": 190,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 79,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 81,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-43",
        "name": "지현",
        "score": 78,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-08-11T19:12:48.000Z",
    "updatedAt": "2026-08-11T22:23:18.000Z"
  },
  {
    "id": "play-471d7683-7c74-4bdb-afbd-42ae5e57502e",
    "gameId": "game-355",
    "gameTitleKr": "다다다",
    "gameTitleEn": "DaDaDa",
    "gameImage": "https://cf.geekdo-images.com/D_3ZIKuG3QKIXh3nIhA4eA__small/img/an0nadyVSOAFLG2dICig-nor4ZE=/fit-in/200x150/filters:strip_icc()/pic8172351.jpg",
    "date": "2026-08-15",
    "durationMinutes": 23,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-08-15T11:38:38.000Z",
    "updatedAt": "2026-08-15T12:01:52.000Z"
  },
  {
    "id": "play-7790c0f3-8307-413e-9fd4-fe3773ee934f",
    "gameId": "game-221",
    "gameTitleKr": "Dune: Imperium – Uprising",
    "gameTitleEn": "Dune: Imperium – Uprising",
    "gameImage": "https://cf.geekdo-images.com/UVUkjMV_Q2paVUIUP30Vvw__thumb/img/H6qmxJrRFjtOAPZOfDoZ480-46I=/fit-in/200x150/filters:strip_icc()/pic7664424.jpg",
    "date": "2026-08-15",
    "durationMinutes": 147,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 12,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 8,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 6,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 7,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-08-15T12:44:21.000Z",
    "updatedAt": "2026-08-15T15:11:54.000Z"
  },
  {
    "id": "play-97eaaa54-38dd-4221-8442-54abba23f7dd",
    "gameId": "game-7",
    "gameTitleKr": "Barrage",
    "gameTitleEn": "Barrage",
    "gameImage": "https://cf.geekdo-images.com/jEPmWvvYpqkWrKOzqIHFsg__thumb/img/kMLIpeqA6UcUvQg2AdMwwQoEIfU=/fit-in/200x150/filters:strip_icc()/pic4336469.png",
    "date": "2026-08-15",
    "durationMinutes": 155,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 114,
        "winner": true,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 60,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 89,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 101,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-08-15T16:19:32.000Z",
    "updatedAt": "2026-08-15T18:54:43.000Z"
  },
  {
    "id": "play-f6dc14b2-c4a0-439d-a053-97acfdc152f1",
    "gameId": "game-347",
    "gameTitleKr": "야단법석 달리기",
    "gameTitleEn": "Magical Athlete",
    "gameImage": "https://cf.geekdo-images.com/1uW8t9AkuqOF0xjv_sXKgw__small/img/tWEmoT1EaoYUpbwrTGCLMHaaZGs=/fit-in/200x150/filters:strip_icc()/pic9106864.png",
    "date": "2026-08-15",
    "durationMinutes": 24,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 3,
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "score": 9,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 10,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-08-15T19:33:43.000Z",
    "updatedAt": "2026-08-15T19:57:19.000Z"
  },
  {
    "id": "play-95101cab-beeb-4d0f-8dc0-ba7763c522bb",
    "gameId": "game-270",
    "gameTitleKr": "1%: A Game of Strategic Chance",
    "gameTitleEn": "1%: A Game of Strategic Chance",
    "gameImage": "https://cf.geekdo-images.com/K2spoKKeCHm7OHonaSdK3g__thumb/img/aRHiqdERA2rlcG5XmLNL1DxSZF0=/fit-in/200x150/filters:strip_icc()/pic7293478.jpg",
    "date": "2026-08-15",
    "durationMinutes": 32,
    "locationId": "loc-13",
    "locationName": "가천대아지트",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      },
      {
        "playerId": "player-53",
        "name": "민서(토노)",
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-27",
        "name": "우석",
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "winner": false,
        "startPlayer": false,
        "newPlayer": false
      }
    ],
    "createdAt": "2026-08-15T20:25:56.000Z",
    "updatedAt": "2026-08-15T20:58:05.000Z"
  },
  {
    "id": "play-86d7bd9c-c85c-499b-9762-a489cdd24453",
    "gameId": "game-357",
    "gameTitleKr": "Katan",
    "gameTitleEn": "Catan",
    "gameImage": "https://cf.geekdo-images.com/0XODRpReiZBFUffEcqT5-Q__small/img/SNVfF23OQafv3u8xdFolJnMkBoM=/fit-in/200x150/filters:strip_icc()/pic9156909.png",
    "date": "2026-08-17",
    "durationMinutes": 45,
    "locationId": "loc-17",
    "locationName": "이매집",
    "playerScores": [
      {
        "playerId": "player-52",
        "name": "Nana",
        "score": 4,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-34",
        "name": "이지영",
        "score": 6,
        "winner": false,
        "startPlayer": false,
        "newPlayer": true
      },
      {
        "playerId": "player-68",
        "name": "이지원",
        "score": 10,
        "winner": true,
        "startPlayer": false,
        "newPlayer": true
      }
    ],
    "createdAt": "2026-08-17T19:09:20.000Z",
    "updatedAt": "2026-08-17T19:10:09.000Z"
  }
];

export const SEED_CHALLENGES: Challenge[] = [
  {
    "id": "challenge-2026-10x10",
    "title": "2026년 10x10 챌린지",
    "type": "10x10",
    "targetPlaysPerGame": 10,
    "year": 2026,
    "startDate": "2026-01-01",
    "endDate": "2026-12-31",
    "gameIds": [
      "game-221",
      "game-32",
      "game-3",
      "game-270",
      "game-30",
      "game-313",
      "game-230",
      "game-7",
      "game-213",
      "game-214"
    ],
    "completed": false,
    "createdAt": "2026-08-28T09:04:22.560Z"
  }
];
