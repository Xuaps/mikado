export type Goal = {
  title: string;
  startingTime: number;
};

export const setGoal = (title: string): Goal => {
  return { title, startingTime: Date.now() };
};
