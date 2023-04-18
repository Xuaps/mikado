import { View } from "../view";

export default function (onSubmit: (goal: string) => Promise<View>): View {
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
