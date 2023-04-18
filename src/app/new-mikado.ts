import renderForm from "./components/form";
import setGoal from "./set-goal";
import { View } from "./infra/view";

const newMikado = (): Promise<View> => {
  return Promise.resolve(renderForm(setGoal));
};

export default newMikado;
