export function initScrollReveal() {
  if (typeof ScrollReveal === "undefined") return;

  const sr = ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 1200,
    reset: false,
  });

  sr.reveal(".delaySmallReveal", { delay: 150 });
  sr.reveal(".delayMediumReveal", { delay: 250 });
  sr.reveal(".delayLargeReveal", { delay: 350 });
  sr.reveal(".delayExtraBigReveal", { delay: 450 });
  sr.reveal(".intervalCardReveal", { interval: 150 });
}
