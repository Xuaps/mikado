export type CallbackHandler = (...props: any[]) => Promise<View>;

export type Event = {
  name: string;
  event: string;
  callback: CallbackHandler;
};

export type View = [string, Event[]];
