import { setGoal } from "../mikado";

describe("set goal", () => {
  it("should set the goal title", () => {
    const goal = setGoal("new goal");

    expect(goal.title).toEqual("new goal");
  });

  it("should set the goal starting time", () => {
    jest.useFakeTimers().setSystemTime(new Date("2020-01-01"));
    const goal = setGoal("new goal");

    expect(goal.startingTime).toEqual(new Date("2020-01-01").getTime());
  });
});
