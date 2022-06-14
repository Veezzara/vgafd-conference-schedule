import { DataProvider, EventData } from "./types";

export class MockDataProvider implements DataProvider {
  getEventsData(): Promise<EventData[]> {
    return new Promise((resolve, reject) => {
      const events: EventData[] = [
        // {
        //   id: 0,
        //   name: "UploadVR Showcase",
        //   date: new Date("2022-06-09T15:00:00+00:00"),
        //   description: `Стрим, посвященный новым VR-играм.`,
        //   rumors: [],
        //   youtubeLink: "https://www.youtube.com/c/Uploadvr",
        // },
        // {
        //   id: 0,
        //   name: "Summer Game Fest",
        //   date: new Date("2022-06-09T18:00:00+00:00"),
        //   description: `Открытие Summer Game Fest. Джефф Кейли вновь открывает свою презентацию
        //   с огромной кучей разработчиков и крупных издателей. Стоит ожидать ребут Saints Row, 
        //   The Callisto Protocol и дополнение для Cuphead. `,
        //   rumors: [
        //     {
        //       source:
        //         "https://twitter.com/griffinmatta/status/1533723063451361280?s=20&t=TgYFYtRNPeAaY5LWqRFSrA",
        //       description: `О своём участии на SGF сказал PR-директор Team Cherry, которая в данный момент работает
        //       над Hollow Knight: Silksong.`,
        //     },
        //     {
        //       source: "https://vk.com/wall-102576019_227381",
        //       description: `Redfall и Starfield мелькали в промо SGF, так что стоит ожидать эти игры и тут.`,
        //     },
        //   ],
        //   twitchLink: "https://www.twitch.tv/thegameawards",
        // },
        // {
        //   id: 0,
        //   name: "Devolver Digital Countdown to Marketing",
        //   date: new Date("2022-06-09T22:00:00+00:00"),
        //   description: `Презентация от Деволверов, в которой примет участие Suda51.`,
        //   rumors: [],
        //   twitchLink: "https://www.twitch.tv/devolverdigital",
        // },
        // {
        //   id: 0,
        //   name: "IGN Expo",
        //   date: new Date("2022-06-10T16:00:00+00:00"),
        //   description: `Презентация от игрового портала IGN, на котором покажут геймплей и анонсы игр.`,
        //   rumors: [],
        //   twitchLink: "https://www.twitch.tv/ign",
        //   youtubeLink: "https://www.youtube.com/c/IGN",
        // },
        // {
        //   id: 0,
        //   name: "Netflix Geeked Week Gaming",
        //   date: new Date("2022-06-10T17:00:00+00:00"),
        //   description: `Трансляция от Netflix, полностью посвященная видеоиграм.`,
        //   rumors: [],
        //   youtubeLink: "https://www.youtube.com/c/Netflix",
        // },

        // {
        //   id: 0,
        //   name: "Guerrilla Collective Showcase 3",
        //   date: new Date("2022-06-11T15:00:00+00:00"),
        //   description: `Выставка, посвященная инди-играм — с запуском геймплейных демо в Steam, анонсами и трейлерами.`,
        //   rumors: [],
        //   twitchLink: "https://www.twitch.tv/guerrillacollective",
        //   youtubeLink: "https://www.youtube.com/c/GuerrillaCollective/",
        // },
        // {
        //   id: 0,
        //   name: "Wholesome Games Direct",
        //   date: new Date("2022-06-11T16:30:00+00:00"),
        //   description: `Ещё одна презентация, полностью посвященная инди, на которой обещают показать более 100 игр.`,
        //   rumors: [],
        //   youtubeLink: "https://www.youtube.com/c/WholesomeGames",
        // },
        // {
        //   id: 0,
        //   name: "Future Games Show",
        //   date: new Date("2022-06-11T19:00:00+00:00"),
        //   description: `Трансляция от издания GamesRadar+ с трейлерами грядущих игр.`,
        //   rumors: [],
        //   twitchLink: "https://www.twitch.tv/gamesradar",
        //   youtubeLink: "https://www.youtube.com/user/GamesRadar",
        // },
        {
          id: 0,
          name: "Xbox & Bethesda Games Showcase",
          date: new Date("2022-06-12T17:00:00+00:00"),
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
            {
              source: "https://vk.com/wall-26546605_2475881",
              description: `Microsoft зарегистрировала торговую марку Contraband, и появился шанс на появление игры на грядущей презентации.`,
            },
          ],
          twitchLink: "https://www.twitch.tv/Xbox",
          youtubeLink: "https://www.youtube.com/user/xbox/hub",
          bingoOptions: [
            "Новый сезон в Sea of Thieves",
            "Forza Motorsport 8 / DLC для Horizons 5",
            "DLC для Cyberpunk 2077",
            "Дата выхода The Pit для F76",
            "Новая игра Compulsion Games",
            "GTA V",
            "Ремастеры Fallout 3/NV",
            "Дата HellBlade 2",
            "ММО от IO Interactive",
            "Gears 6",
            "Grounded 1.0",
            "Баттлрояль по Halo",
            "Фил Спенсер ебёт",
            "КАМБЭК СКЕЙЛБАУНД",
            "Индиана Джонс / Wolfenstein 3",
            "Новая игра по Minecraft'у",
            "QUAKE",
            "Новая игра от InXile",
            "Avowed",
            "Трейлер аддона для TESO",
            "Deathloop в геймпассе",
            "Gears of War Collection на PC",
            "Геймплей Contraband",
            "GoldenEye 007",
            "\"Доступно уже сейчаc\"",
          ],
        },
        {
          id: 0,
          name: "PC Gaming Show",
          date: new Date("2022-06-12T19:30:00+00:00"),
          description: `Ежегодная крупная выставка, которую все смотрят из-за Фрэнки Уорд. 
          Покажут около 40-50 тайтлов - среди которых есть и Warhammer 40,000: Space Marine 2.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/pcgamer",
          youtubeLink: "https://www.youtube.com/pcgamer",
        },
        // {
        //   id: 0,
        //   name: "Epic Games Store Summer Showcase",
        //   date: new Date("2022-06-10T18:00:00+00:00"),
        //   description: `Epic Games расскажет о нескольких анонсах, включая игры и обновление своего лаунчера.`,
        //   rumors: [],
        //   twitchLink: "https://www.twitch.tv/epicgames",
        // },
        // {
        //   id: 0,
        //   name: "Future of Play Direct",
        //   date: new Date("2022-06-11T17:30:00+00:00"),
        //   description: `Шоу с показом игр от независимых разработчиков. Среди присутствующих участников - издатель Humble Games.`,
        //   rumors: [],
        //   youtubeLink: "https://www.youtube.com/c/heyglitch",
        // },
        {
          id: 0,
          name: "Guerrilla Collective Showcase 3.5",
          date: new Date("2022-06-13T20:00:00+00:00"),
          description: `Вторая онлайн-трансляция о инди от независимых разработчиков и издателей.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/guerrillacollective",
          youtubeLink: "https://www.youtube.com/c/GuerrillaCollective",
        },
        {
          id: 0,
          name: "Capcom Showcase",
          date: new Date("2022-06-13T22:00:00+00:00"),
          description: `Небольшая презентация от Capcom, где она расскажет об уже анонсированных играх.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/capcomusa",
        },
        {
          id: 0,
          name: "Xbox Games Showcase Extended",
          date: new Date("2022-06-14T17:00:00+00:00"),
          description: `"Расширенная" игровая презентация от Microsoft, где нам расскажут более подробно о играх, показанных на их прошлой презентации.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/Xbox",
          youtubeLink: "https://www.youtube.com/user/xbox/hub",
        },
        {
          id: 0,
          name: "Prime Matter Anniversary Showcase",
          date: new Date("2022-06-17T17:00:00+00:00"),
          description: `Стрим от издателя Koch Media, под которым собираются издавать новый Painkiller, PayDay 3 и ещё несколько тайтлов.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/primemattergg",
          youtubeLink: "https://www.youtube.com/c/PrimeMatter",
        },
      ];
      resolve(events);
    });
  }
}
