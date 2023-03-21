import renderForm from "./components/form";
import setGoal from "./set-goal";

const newMikado = (): [
  string,
  { name: string; event: string; callback: (data: FormData) => [string, []] }[]
] => {
  return [
    renderForm(),
    [
      {
        name: "form",
        event: "submit",
        callback: setGoal,
      },
    ],
  ];
};

export default newMikado;
