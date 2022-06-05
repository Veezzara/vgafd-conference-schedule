import { DataProvider, EventData } from "./types";

export class MockDataProvider implements DataProvider {
  getEventsData(): Promise<EventData[]> {
    return new Promise((resolve, reject) => {
      const events: EventData[] = [
        {
          id: 0,
          name: "Conference Name 1",
          date: new Date("2022-06-12T17:00:00+0000"),
          description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Labore temporibus eveniet perferendis aliquid magnam ex est officiis 
          neque numquam culpa officia cupiditate dicta nisi quod porro, eligendi, nesciunt enim impedit?`,
          rumors: [
            {
              source: "http://localhost:3000",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dolor placeat quo voluptate nobis? Et commodi neque molestias hic, autem repellendus.`,
            },
            {
              source: "http://localhost:3000",
              description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dolor placeat quo voluptate nobis? Et commodi neque molestias hic, autem repellendus.`,
            },
          ],
          bingoOptions: [
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
            "bingo",
          ],
        },
        {
          id: 0,
          name: "Conference Name 2",
          date: new Date("2022-06-08T22:00:00+0000"),
          description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Labore temporibus eveniet perferendis aliquid magnam ex est officiis 
          neque numquam culpa officia cupiditate dicta nisi quod porro, eligendi, nesciunt enim impedit?`,
          rumors: [],
        },
        {
          id: 0,
          name: "Conference Name 3",
          date: new Date("2022-05-08T20:00:00+0000"),
          description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Labore temporibus eveniet perferendis aliquid magnam ex est officiis 
          neque numquam culpa officia cupiditate dicta nisi quod porro, eligendi, nesciunt enim impedit?`,
          rumors: [],
        },
        {
          id: 0,
          name: "Conference Name 4",
          date: new Date("2022-05-08T22:00:00+0000"),
          description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
          Labore temporibus eveniet perferendis aliquid magnam ex est officiis 
          neque numquam culpa officia cupiditate dicta nisi quod porro, eligendi, nesciunt enim impedit?`,
          rumors: [],
        },
      ];
      resolve(events);
    });
  }
}
