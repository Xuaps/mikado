import { View } from "../infra/view";
import { Goal } from "../mikado";

export default function ({ title, startingTime }: Goal): View {
  return [`<p>${title} - ${startingTime}</p>`, []];
}
