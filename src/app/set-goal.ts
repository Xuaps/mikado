import * as mikado from "./mikado";
import renderTree from "./components/tree";
import { View } from "./view";

const setGoal = (data: FormData): Promise<View> => {
  const newGoal = mikado.setGoal(data.get("goal").toString());
  // mikadoDoc = Automerge.change(mikadoDoc, "Set goal", (doc: MikadoDoc) => {
  //   doc.goal = newGoal;
  // });

  return Promise.resolve(renderTree(newGoal));
};

export default setGoal;
