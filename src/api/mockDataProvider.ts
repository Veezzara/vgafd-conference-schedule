import { DataProvider, EventData } from "./types";

export class MockDataProvider implements DataProvider {
  getEventsData(): Promise<EventData[]> {
    return new Promise((resolve, reject) => {
      const events: EventData[] = [
        {
          id: 0,
          name: "UploadVR Showcase",
          date: new Date("2022-06-09T15:00:00+0000"),
          description: `Стрим, посвященный новым VR-играм.`,
          rumors: [],
          youtubeLink: "https://www.youtube.com/c/Uploadvr",
        },
        {
          id: 0,
          name: "Summer Game Fest",
          date: new Date("2022-06-09T18:00:00+0000"),
          description: `Открытие Summer Game Fest. Джефф Кейли вновь открывает свою презентацию
          с огромной кучей разработчиков и крупных издателей. Стоит ожидать ребут Saints Row, 
          The Callisto Protocol и дополнение для Cuphead. `,
          rumors: [
            {
              source:
                "https://twitter.com/griffinmatta/status/1533723063451361280?s=20&t=TgYFYtRNPeAaY5LWqRFSrA",
              description: `О своём участии на SGF сказал PR-директор Team Cherry, которая в данный момент работает
              над Hollow Knight: Silksong.`,
            },
            {
              source: "https://vk.com/wall-102576019_227381",
              description: `Redfall и Starfield мелькали в промо SGF, так что стоит ожидать эти игры и тут.`,
            },
          ],
          twitchLink: "https://www.twitch.tv/thegameawards",
        },
        {
          id: 0,
          name: "Devolver Digital Countdown to Marketing",
          date: new Date("2022-06-09T22:00:00+0000"),
          description: `Презентация от Деволверов, в которой примет участие Suda51.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/devolverdigital",
        },
        {
          id: 0,
          name: "IGN Expo",
          date: new Date("2022-06-10T16:00:00+0000"),
          description: `Презентация от игрового портала IGN, на котором покажут геймплей и анонсы игр.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/ign",
          youtubeLink: "https://www.youtube.com/c/IGN",
        },
        {
          id: 0,
          name: "Netflix Geeked Week Gaming",
          date: new Date("2022-06-10T17:00:00+0000"),
          description: `Трансляция от Netflix, на которой расскажут о "Cyberpunk Edgerunners" (аниме студии Trigger)
          и втором сезоне Arcane.`,
          rumors: [],
          youtubeLink: "https://www.youtube.com/c/Netflix",
        },

        {
          id: 0,
          name: "Guerrilla Collective Showcase 3",
          date: new Date("2022-06-11T15:00:00+0000"),
          description: `Выставка, посвященная инди-играм — с запуском геймплейных демо в Steam, анонсами и трейлерами.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/guerrillacollective",
          youtubeLink: "https://www.youtube.com/c/GuerrillaCollective/",
        },
        {
          id: 0,
          name: "Wholesome Games Direct",
          date: new Date("2022-06-11T16:30:00+0000"),
          description: `Ещё одна презентация, полностью посвященная инди, на которой обещают показать более 100 игр.`,
          rumors: [],
          youtubeLink: "https://www.youtube.com/c/WholesomeGames",
        },
        {
          id: 0,
          name: "Future Games Show",
          date: new Date("2022-06-11T19:00:00+0000"),
          description: `Трансляция от издания GamesRadar+ с трейлерами грядущих игр.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/gamesradar",
          youtubeLink: "https://www.youtube.com/user/GamesRadar",
        },
        {
          id: 0,
          name: "Xbox & Bethesda Games Showcase",
          date: new Date("2022-06-12T17:00:00+0000"),
          description: `Большое шоу об играх от внутренних студий Microsoft и новинках Game Pass.`,
          rumors: [
            {
              source:
                "https://www.reddit.com/r/GamingLeaksAndRumours/comments/v55g8j/more_on_the_unannounced_goldeneye_007_quite_a_few/",
              description: `На выставке могут анонсировать переиздание "GoldenEye 007".`,
            },
            {
              source:
                "https://www.aroged.com/2022/06/05/obsidian-will-definitely-show-avowed-and-possibly-pentiment-at-xbox-bethesda-showcase-according-to-jez-corden/",
              description: `По словам Джеза Кордена, на выставке покажут две новые игры Obsidian Entertainment — уже ранее анонсированный "Avowed"
              и новую игру "Pentiment", вдохновлённую Disco Elysium'ом.`,
            },
            {
              source:
                "https://vk.com/wall-102576019_226678?hash=5348e4f0bb72ce8f82",
              description: `По информации от источников Shpeshal Nick, в этом году выйдет сборник ремастеров игр серии "Gears of War".`,
            },
          ],
          twitchLink: "https://www.twitch.tv/Xbox",
          youtubeLink: "https://www.youtube.com/user/GamesRadar",
        },
        {
          id: 0,
          name: "PC Gaming Show",
          date: new Date("2022-06-12T19:30:00+0000"),
          description: `Ежегодная крупная выставка, которую все смотрят из-за Фрэнки Уорд. 
          Покажут около 40-50 тайтлов - среди которых есть и Warhammer 40,000: Space Marine 2.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/pcgamer",
          youtubeLink: "https://www.youtube.com/pcgamer",
        },
      ];
      resolve(events);
    });
  }
}
