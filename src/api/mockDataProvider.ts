import { DataProvider, EventData } from "./types";

export class MockDataProvider implements DataProvider {
  getEventsData(): Promise<EventData[]> {
    return new Promise((resolve, reject) => {
      const events: EventData[] = [
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
          name: "Capcom Showcase",
          date: new Date("2023-06-12T22:00:00+00:00"),
          description: `Capcom в рамках SGF провёдет получасовую трансляцию, на которой как минимум точно покажут Dragon’s Dogma 2, Exoprimal и Ghost Trick.`,
          rumors: [],
          youtubeLink: "https://www.youtube.com/@CapcomUSA",
        },
        {
          id: 0,
          name: "Annapurna Interactive",
          date: new Date("2023-06-29T19:00:00+00:00"),
          description: `Annapurna Interactive обещает показать новые анонсы и больше информации о Silent Hill: Townfall.`,
          rumors: [],
          youtubeLink: "https://www.youtube.com/@AnnapurnaInteractive",
        },
      ];
      resolve(events);
    });
  }
}
