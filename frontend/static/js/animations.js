document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__animated", "animate__fadeInUp");
      }
    });
  });

  elements.forEach((el) => observer.observe(el));

  // burgerIcon.addEventListener("click", function () {
  //   sideNav.classList.remove("-translate-y-full");
  //   sideNav.classList.add("translate-y-0");

  //   document.body.classList.add("overflow-hidden");

  //   reel.classList.remove("hidden");
  //   reel.classList.add("flex");
  // });

  // closeIcon.addEventListener("click", function () {
  //   sideNav.classList.remove("translate-y-0");
  //   sideNav.classList.add("-translate-y-full");

  //   document.body.classList.remove("overflow-hidden");

  //   reel.classList.remove("flex");
  //   reel.classList.add("hidden");
  // });

  // navLinks.forEach((div) => {
  //   div.addEventListener("click", function () {
  //     const link = div.querySelector("a");
  //     if (link) {
  //       sideNav.classList.remove("translate-y-0");
  //       sideNav.classList.add("-translate-y-full");

  //       document.body.classList.remove("overflow-hidden");

  //       reel.classList.remove("flex");
  //       reel.classList.add("hidden");

  //       const targetId = link.getAttribute("href").substring(1);
  //       const targetElement = document.getElementById(targetId);
  //       if (targetElement) {
  //         setTimeout(() => {
  //           targetElement.scrollIntoView();
  //         }, 300);
  //       }
  //     }
  //   });
  // });
});
