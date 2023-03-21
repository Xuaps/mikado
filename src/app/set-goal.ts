import * as mikado from "./mikado";
import renderTree from "./components/tree";

const setGoal = (data: FormData): [string, []] => {
  const newGoal = mikado.setGoal(data.get("goal").toString());
  // mikadoDoc = Automerge.change(mikadoDoc, "Set goal", (doc: MikadoDoc) => {
  //   doc.goal = newGoal;
  // });

  return [renderTree(newGoal), []];
};

export default setGoal;
