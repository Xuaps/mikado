import { View } from "../view";
import { Goal } from "../../mikado";

export default function ({ title, startingTime }: Goal): View {
  return [`<p>${title} - ${startingTime}</p>`, []];
}
