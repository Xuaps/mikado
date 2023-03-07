export function init(onSubmit: (goal: string) => void) {
  const form: HTMLElement = document.getElementById("form");
  function setGoal(e: { preventDefault: () => void }) {
    const formData = new FormData(form as HTMLFormElement);
    onSubmit(formData.get("goal").toString());

    e.preventDefault();
  }

  form.addEventListener("submit", setGoal);
}

export function update(title: string, startingTime: number) {
  document.getElementById(
    "root"
  ).innerHTML = `<p>${title} - ${startingTime}</p>`;
}
