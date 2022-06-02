export interface EventData {
  id: number;
  date: Date;
  name: string;
  description?: string;
  rumors: Rumor[];
  bingoOptions?: string[];
  youtubeLink?: string;
  twitchLink?: string;
}

export interface Rumor {
  source: string;
  description: string;
}

export interface DataProvider {
  getEventsData(): Promise<EventData[]>;
}
