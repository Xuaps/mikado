type Mikado = {
  setGoal: (goal: string) => void;
  getGoal: () => { title: string; startingTime: number };
};

export default function newMikado(): Mikado {
  let mikado = {
    goal: "",
    startingTime: Date.now(),
  };

  const setGoal = (goal: string): void => {
    mikado = { ...mikado, goal };
  };

  const getGoal = (): { title: string; startingTime: number } => {
    return {
      title: mikado.goal,
      startingTime: mikado.startingTime,
    };
  };

  return { setGoal, getGoal };
}
