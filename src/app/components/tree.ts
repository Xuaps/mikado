export default function ({
  title,
  startingTime,
}: {
  title: string;
  startingTime: number;
}): string {
  return `<p>${title} - ${startingTime}</p>`;
}
