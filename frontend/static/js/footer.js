document.addEventListener("DOMContentLoaded", function () {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  const efFooterLogo = document.getElementById("efLogoShape2");

  if (prefersDarkMode) {
    efFooterLogo.classList.remove("fill-onyx-600");
    efFooterLogo.classList.add("fill-anti-flash_white-400");
  } else {
    efFooterLogo.classList.remove("fill-anti-flash_white-400");
    efFooterLogo.classList.add("fill-onyx-600");
  }
});
