import { View } from "../view";

export default function ({
  title,
  startingTime,
}: {
  title: string;
  startingTime: number;
}): View {
  return [`<p>${title} - ${startingTime}</p>`, []];
}
