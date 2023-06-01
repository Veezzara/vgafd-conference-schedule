import { DataProvider, EventData } from "./types";

export class MockDataProvider implements DataProvider {
  getEventsData(): Promise<EventData[]> {
    return new Promise((resolve, reject) => {
      const events: EventData[] = [
        {
          id: 0,
          name: "Xbox & Bethesda Games Showcase",
          date: new Date("2023-06-11T17:00:00+00:00"),
          description: `Большое шоу об играх от внутренних студий Microsoft и новинках Game Pass. Сразу после трансляции будет отдельная выставка, целиком посвященная Starfield.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/Xbox",
          youtubeLink: "https://www.youtube.com/user/xbox/hub",
          bingoOptions: [
            "Hellblade 2 релиз в этом году",
            "Геймплей Contraband",
            "Куча CGI-трейлеров без даты релиза",
            "ONE MORE GAME...",
            "Age of Mythology Retold",
            "МАЙНКРАФТ ЭТО МОЯ ЖИЗНЬ",
            "Анонс новой игры inXile",
            "Новый трейлер DLC для TESO/F76",
            "Ещё одна коллаборация в SoT",
            "Gears of War Collection",
            "Halo TATANKA / 4 сезон",
            "Atomic Heart DLC#1",
            "Фил Спенсер не ебёт",
            "Lies of P с датой релиза",
            "Indiana Jones / Wolfenstein 3",
            "Project Keystone",
            "QUAKE",
            "Brutal Legend 2",
            "Новый трейлер Avowed",
            "Партнерка с IO Interactive (Project 007/Dragon)",
            "Fable",
            "Новая игра Compulsion Games",
            "Forza Motorsport с датой релиза",
            "State of Decay 3",
            '"Доступно уже сейчаc"',
          ],
        },
        {
          id: 0,
          name: "PC Gaming Show",
          date: new Date("2023-06-11T20:00:00+00:00"),
          description: `Ежегодная крупная выставка, которую все смотрят из-за Фрэнки Уорд. Только в этот раз без Фрэнки, ведь ведущим в этом году будет Шон Плотт.
          Покажут Baldur's Gate 3, Frostpunk 2, Dune: Awakening, новую игр от Klei (Don't Starve), а также 51 игру от других разработчиков.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/pcgamer",
          youtubeLink: "https://www.youtube.com/pcgamer",
        },
        {
          id: 0,
          name: "Guerrilla Collective",
          date: new Date("2023-06-07T16:00:00+00:00"),
          description: `Онлайн-трансляция о инди от независимых разработчиков и издателей. Трансляция будет идти ежедневно вплоть до 12-го июня.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/guerrillacollective",
          youtubeLink: "https://www.youtube.com/c/GuerrillaCollective",
        },
        {
          id: 0,
          name: "Xbox Games Showcase Extended",
          date: new Date("2023-06-13T17:00:00+00:00"),
          description: `"Расширенная" игровая презентация от Microsoft, где нам расскажут более подробно о играх, показанных на их прошлой презентации.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/Xbox",
          youtubeLink: "https://www.youtube.com/user/xbox/hub",
        },
        {
          id: 0,
          name: "Summer Game Fest",
          date: new Date("2023-06-08T19:00:00+00:00"),
          description: `Джефф Кейли в очередной раз попытается сделать свою замену E3, в этот раз с ещё большим количеством различных издателей.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/thegameawards",
          youtubeLink: "https://www.youtube.com/@thegameawards/videos",
        },
        {
          id: 0,
          name: "Future Games Show",
          date: new Date("2023-06-10T17:00:00+00:00"),
          description: `Ежегодное мероприятие от издания Gamesradar. Анонсы, интервью с разработчиками и геймплейные кадры ожидаемых игр.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/gamesradar",
          youtubeLink: "https://www.youtube.com/user/GamesRadar",
        },
        {
          id: 0,
          name: "Ubisoft Forward",
          date: new Date("2023-06-12T17:00:00+00:00"),
          description: `Выставка от Ubisoft возвращается, чтобы поделиться новостями о уже анонсированных проектах и дать новые анонсы. Beyond Good and Evil 2 NEVER.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/ubisoft",
          youtubeLink: "https://www.youtube.com/c/ubisoft",
        },
        {
          id: 0,
          name: "THQ Nordic Digital Showcase",
          date: new Date("2023-08-11T19:00:00+00:00"),
          description: `Будет представлена новая информация о Alone in the Dark, Outcast 2, Trine 5 и других неуказанных играх, а также несколько новых анонсов.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/thqnordicinside",
          youtubeLink: "https://www.youtube.com/c/thqnordic",
        },
        {
          id: 0,
          name: "Gamescom",
          date: new Date("2023-08-22T18:00:00+00:00"),
          description: `Вторая замена E3 после SGF начинается в конце августа и продлится с 22 по 27 число. Ожидаются как анонсы, так и показы уже анонсированных ранее игр.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/gamescom",
          youtubeLink:
            "https://www.youtube.com/channel/UCHo_GVNoKNqfJx6zUGRd6YQ/videos",
        },
        {
          id: 0,
          name: "TennoCon",
          date: new Date("2023-08-26T15:00:00+00:00"),
          description: `Будут новые анонсы касательно Warframe и, возможно, что-нибудь интересное по Soulframe.`,
          rumors: [],
          twitchLink: "https://www.twitch.tv/warframe",
          youtubeLink: "https://www.youtube.com/user/playwarframe",
        },
        {
          id: 0,
          name: "RGG Summit",
          date: new Date("2023-06-16T03:00:00+00:00"),
          description: `Команда поделится информацией о своих грядущих играх или анонсирует проекты, о которых прежде не рассказывала. Стоит ожидать больше информации о Like a Dragon 8.`,
          rumors: [],
          youtubeLink: "https://www.youtube.com/watch?v=UG4HE9Q3wek",
        },
        {
          id: 0,
          name: "Devolver Direct",
          date: new Date("2023-06-09T22:00:00+00:00"),
          description: `Очередная безумная-ежегодная трансляция от Devolver Digital. Не переживайте - Hotline Miami 3 не будет.`,
          rumors: [],
          youtubeLink: "https://www.youtube.com/@DevolverDigital",
        },
      ];
      resolve(events);
    });
  }
}
