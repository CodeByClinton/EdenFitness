document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("#class-btns button");
  const articlesContainer = document.getElementById("class-content");
  const contentContainer = document.querySelector("#classes-container");
  const classesButtonsSection = document.getElementById("class-btns");

  let activeClassButton =
    document.querySelector("#class-btns button.active") || buttons[0];

  let classButtonFocusEnabled = true;

  const loadClass = (gymClass) => {
    return new Promise((resolve, reject) => {
      fetch(`/api/classes/?title=${gymClass}`)
        .then((response) => response.json())
        .then((data) => {
          const contentHTML = data
            .map((gymClass) => {
              const gymClassBody = gymClass.body
                .split("\n")
                .filter((paragraph) => paragraph.trim() !== "")
                .map((paragraph) => {
                  const targetPhrase = "Contact us";
                  const anchor = `
                  <a href="#contact-us" class="text-aero group">
                    <span class="bg-center-x bg-gradient-to-r from-aero to-aero bg-[length:0%_3px] bg-bottom bg-no-repeat transition-all duration-500 ease-out group-hover:bg-[position:center_bottom] group-hover:bg-[length:100%_3px] hover:drop-shadow-jet-700 dark:hover:drop-shadow-anti-flash_white-700">${targetPhrase}</span>
                  </a>`;
                  return `<p class="pb-fluid-8-24 text-justify font-ubuntu">${paragraph.replace(targetPhrase, anchor)}</p>`;
                })
                .join("");
              return `
              <article data-article-id="${gymClass.title}" class="">
                <div class="">
                  <img class="" src="${gymClass.image}" alt="image"/>
                </div>
                <h5 class="">${gymClass.title}</h5>
                <div class="">${gymClassBody}</div>
              </article>`;
            })
            .join("");

          articlesContainer.classList.add("animate__fadeOut");
          articlesContainer.addEventListener(
            "animationend",
            () => {
              articlesContainer.innerHTML = contentHTML;
              articlesContainer.classList.remove("animate__fadeOut");
              articlesContainer.classList.add("animate__fadeIn");
              resolve();
            },
            { once: true },
          );
        })
        .catch((error) => {
          console.error("Error loading class content:", error);
          reject(error);
        });
    });
  };

  const defaultButton = buttons[0].getAttribute("data-button-id");
  loadClass(defaultButton).then(() => {});

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const gymClass = button.getAttribute("data-button-id");

      buttons.forEach((btn) => {
        btn.classList.remove("active");
        btn.classList.remove("animate-bounceLow");
      });

      button.classList.add("active");
      activeClassButton = button;

      requestAnimationFrame(() => {
        activeClassButton.classList.add("animate-bounceLow");
      });

      loadClass(gymClass).then(() => {
        if (isLandscape()) {
          const updatedArticles = document.querySelectorAll(
            "#class-content article",
          );
          const article = Array.from(updatedArticles).find(
            (article) => article.getAttribute("data-article-id") === gymClass,
          );

          if (article) {
            const articleRect = article.getBoundingClientRect();
            const offset = computeClamp();
            const scrollPosition = window.scrollY + articleRect.top - offset;
            window.scrollTo({ top: scrollPosition, behavior: "smooth" });
          }
        } else {
          contentContainer.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  });

  document.addEventListener("click", (event) => {
    if (!classButtonFocusEnabled) return;
    if (
      !event.target.closest("#class-btns") &&
      event.target.closest("#classes")
    ) {
      activeClassButton.focus();
    }
  });

  function computeClamp() {
    const min = 0.625 * 16;
    const max = 2.5 * 16;
    const mid = 0.3571 * 16 + (1.3393 * window.innerWidth) / 100;
    return Math.max(min, Math.min(max, mid));
  }

  function isLandscape() {
    return window.matchMedia("(orientation: landscape)").matches;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && classButtonFocusEnabled) {
          activeClassButton.focus();
          activeClassButton.classList.add("animate-bounceLow");
        }
      });
    },
    {
      root: null,
      threshold: 0.2,
    },
  );

  observer.observe(classesButtonsSection);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));

      classButtonFocusEnabled = false;

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setTimeout(() => {
        classButtonFocusEnabled = true;
      }, 1000);
    });
  });
});
