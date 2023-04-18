import renderForm from "./components/form";
import onSetGoal from "./on-set-goal";
import { View } from "./view";

const onNewMikado = (): Promise<View> => {
  return Promise.resolve(renderForm(onSetGoal));
};

export default onNewMikado;
