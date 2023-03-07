import newMikado from "./mikado";
import "./style.css";
import * as ui from "./ui";

const mikado = newMikado();

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
  mikado.setGoal(goal);
  const { title, startingTime } = mikado.getGoal();
  ui.update(title, startingTime);
};

ui.init(onGoalSetted);
