import * as mikado from "../mikado";
import renderTree from "./components/tree";
import { View } from "./view";

const onSetGoal = (goal: string): Promise<View> => {
  const newGoal = mikado.setGoal(goal);
  // mikadoDoc = Automerge.change(mikadoDoc, "Set goal", (doc: MikadoDoc) => {
  //   doc.goal = newGoal;
  // });

  return Promise.resolve(renderTree(newGoal));
};

export default onSetGoal;
