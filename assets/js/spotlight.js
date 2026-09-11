// Efeito de Iluminação Dinâmica Spotlight (Estilo Linear / Raycast)
export function initSpotlight() {
  const cards = document.querySelectorAll(".spotlight-card");
  if (!cards.length) return;

  const handleMouseMove = (e) => {
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  window.addEventListener("mousemove", handleMouseMove, { passive: true });
}
