import * as mikado from "./mikado";
import "./style.css";
import * as ui from "./ui";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}

const onGoalSetted = (goal: string) => {
  const { title, startingTime } = mikado.setGoal(goal);
  ui.update(title, startingTime);
};

ui.init(onGoalSetted);
