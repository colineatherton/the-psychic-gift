export type ReaderConfig = {
  name: string;
  pin: number;
  description: string;
  specialties: {
    abilities: string[];
    tools: string[];
    topics: string[];
    themes: string[];
  };
  ctaText: string;
  imageUrl: string;
};

export type ReaderFeedItem = {
  id: number;
  displayName: string;
  imageUrl: string;
  status: 0 | 1 | 2; // 0 = offline, 1 = online, 2 = busy
  callEndTime: string | null;
};

export type ReaderFeedResponse = {
  content: ReaderFeedItem[];
};

export enum Status {
  online = "online",
  busy = "busy",
  offline = "offline",
}
