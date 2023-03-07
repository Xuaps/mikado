import newMikado from "../mikado";

describe("set goal", () => {
  it("should set the goal title", () => {
    const { setGoal, getGoal } = newMikado();
    const newGoal = "Example goal";

    setGoal(newGoal);

    expect(getGoal().title).toEqual(newGoal);
  });

  it("should set the goal starting time", () => {
    jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));
    const { setGoal, getGoal } = newMikado();
    const newGoal = "Example goal";

    setGoal(newGoal);

    expect(getGoal().startingTime).toEqual(1577836800000);
  });
});
