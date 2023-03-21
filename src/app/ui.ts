export function update(
  content: string,
  events: {
    name: string;
    event: string;
    callback: (props: any) => [content: string, events: []];
  }[]
) {
  document.getElementById("root").innerHTML = content;
  if (events.length > 0) {
    const element = document.getElementById(events[0].name);
    const callback = (e: { preventDefault: () => void }) => {
      const formData = new FormData(element as HTMLFormElement);
      update(...events[0].callback(formData));

      e.preventDefault();
    };

    element.addEventListener(events[0].event, callback);
  }
}
