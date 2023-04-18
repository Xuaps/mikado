import "../style.css";
import * as ui from "./ui";
import onNewMikado from "../app/on-new-mikado";
// import * as Automerge from "@automerge/automerge";

// type MikadoDoc = {
//   goal: mikado.Goal;
// };

// let mikadoDoc = Automerge.init();

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

onNewMikado().then(ui.update);
