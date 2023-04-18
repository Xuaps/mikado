import { View, Callback } from "../infra/view";

export default function (onSubmit: Callback): View {
  return [
    `
      <form id="form">
        <input type="text" name="goal" />
        <button type="submit">Set goal</input>
      </form>`,
    [
      {
        name: "form",
        event: "submit",
        callback: (data: FormData) => onSubmit(data.get("goal").toString()),
      },
    ],
  ];
}
