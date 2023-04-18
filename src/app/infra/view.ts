export type Callback = (...props: any[]) => Promise<View>;

export type Event = {
  name: string;
  event: string;
  callback: Callback;
};

export type View = [string, Event[]];
