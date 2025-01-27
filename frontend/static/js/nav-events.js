document.addEventListener("DOMContentLoaded", function () {
  fetch("/api/static-urls/")
    .then((response) => response.json())
    .then((urls) => {
      const darkModeActive = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      const efMainLogo = document.getElementById("ef-main-logo");
      const mainLogoAfWhite = urls.mainLogoAfWhite;
      const mainLogoJet = urls.mainLogoJet;

      const burgerIcon = document.getElementById("burger-icon");
      const burgerAfWhite = urls.burgerAfWhite;
      const burgerAero = urls.burgerAero;
      const burgerJet = urls.burgerJet;

      const homeIcon = document.getElementById("home-icon");
      const homeAfWhite = urls.homeAfWhite;
      const homeAero = urls.homeAero;
      const homeJet = urls.homeJet;

      const closeIcon = document.getElementById("close-icon");
      const closeAfWhite = urls.closeAfWhite;
      const closeAero = urls.closeAero;
      const closeJet = urls.closeJet;

      const header = document.getElementById("main-header");
      const nav = document.getElementById("main-nav");
      const sideNav = document.getElementById("side-nav");

      function handleMouseEvents(
        element,
        colorActive,
        colorDefault,
        colorScrolled,
      ) {
        element.addEventListener("mouseover", function () {
          element.src = colorActive;
        });

        element.addEventListener("mouseout", function () {
          if (window.scrollY > 0) {
            element.src = darkModeActive ? colorDefault : colorScrolled;
          } else {
            element.src = colorDefault;
          }
        });
      }

      handleMouseEvents(burgerIcon, burgerAero, burgerAfWhite, burgerJet);
      handleMouseEvents(homeIcon, homeAero, homeAfWhite, homeJet);

      function handleSideNavMouseEvent(
        element,
        colorActive,
        colorDefaultLight,
        colorDefaultDark,
      ) {
        element.addEventListener("mouseover", function () {
          element.src = colorActive;
        });

        element.addEventListener("mouseout", function () {
          if (!darkModeActive) {
            element.src = colorDefaultLight;
          } else {
            element.src = colorDefaultDark;
          }
        });
      }

      burgerIcon.addEventListener("click", function () {
        if (!darkModeActive) {
          closeIcon.src = closeJet;
        } else {
          closeIcon.src = closeAfWhite;
        }
      });

      handleSideNavMouseEvent(closeIcon, closeAero, closeJet, closeAfWhite);

      function handleScroll() {
        if (window.scrollY > 0) {
          if (!darkModeActive) {
            header.classList.remove("bg-transparent");
            header.classList.add("bg-white");
            nav.classList.remove("text-white");
            nav.classList.add("text-edenDark");
            burgerIcon.src = burgerJet;
            efMainLogo.src = mainLogoJet;
            homeIcon.src = homeJet;
          } else {
            header.classList.remove("bg-transparent");
            header.classList.add("bg-edenDark");
            efMainLogo.src = mainLogoAfWhite;
          }
        } else {
          if (!darkModeActive) {
            header.classList.remove("bg-white");
            header.classList.add("bg-transparent");
            nav.classList.remove("text-edenDark");
            nav.classList.add("text-white");
            homeIcon.src = homeAfWhite;
            burgerIcon.src = burgerAfWhite;
            efMainLogo.src = mainLogoAfWhite;
          } else {
            header.classList.remove("bg-edenDark");
            header.classList.add("bg-transparent");
            efMainLogo.src = mainLogoAfWhite;
          }
        }
      }

      window.addEventListener("scroll", handleScroll);
    });
});
