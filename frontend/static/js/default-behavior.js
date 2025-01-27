document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    if (e.target.matches('a[href^="#"]')) {
      e.preventDefault();

      const targetId = e.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 0;

        const targetRect = targetElement.getBoundingClientRect();
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const elementTop = targetRect.top + scrollTop;

        window.scrollTo({
          top: elementTop - offset,
          behavior: "smooth",
        });
      } else {
        console.error(`Element with ID "${targetId}" not found.`);
      }
    }
  });
});
