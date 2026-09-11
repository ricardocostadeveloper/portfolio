export function hoverChangeDescription(nameCard, text) {
  const changeDescription = document.querySelector(".changeDescription");
  const el = document.querySelector(nameCard);

  if (!el || !changeDescription) return;

  el.addEventListener("mouseenter", () => {
    changeDescription.innerHTML = text;
  });

  el.addEventListener("mouseleave", () => {
    changeDescription.innerHTML = `*passe o cursor do mouse ou toque no card para ver os detalhes*`;
  });

  el.addEventListener("click", () => {
    changeDescription.innerHTML = text;
  });
}
