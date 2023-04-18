import { View } from "./view";

export function update([content, events]: View) {
  document.getElementById("root").innerHTML = content;
  if (events.length > 0) {
    const element = document.getElementById(events[0].name);
    const callback = (e: { preventDefault: () => void }) => {
      const formData = new FormData(element as HTMLFormElement);
      events[0].callback(formData).then(update);

      e.preventDefault();
    };

    element.addEventListener(events[0].event, callback);
  }
}
