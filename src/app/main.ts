import * as mikado from "./mikado";
import "./style.css";
import * as ui from "./ui";
import * as Automerge from "@automerge/automerge";

type MikadoDoc = {
  goal: mikado.Goal;
};

let mikadoDoc = Automerge.init();

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
  const newGoal = mikado.setGoal(goal);
  ui.update(newGoal.title, newGoal.startingTime);
  mikadoDoc = Automerge.change(mikadoDoc, "Set goal", (doc: MikadoDoc) => {
    doc.goal = newGoal;
  });
};

ui.init(onGoalSetted);
