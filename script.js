const progress = document.querySelector("#reading-progress");
const revealItems = document.querySelectorAll(
  ".before-letters, .section-heading, .letter, .quiet-pause, .poems-heading, .poem, .closing-note",
);
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateReadingProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const amount = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
  progress.style.transform = `scaleX(${amount})`;
}

window.addEventListener("scroll", updateReadingProgress, { passive: true });
window.addEventListener("resize", updateReadingProgress);
updateReadingProgress();

if ("IntersectionObserver" in window && !reduceMotion.matches) {
  revealItems.forEach((item) => item.classList.add("reveal"));
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
  );
  revealItems.forEach((item) => observer.observe(item));
}