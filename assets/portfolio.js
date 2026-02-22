document.addEventListener("DOMContentLoaded", () => {
  // Gest° du theme
  const boutonTheme = document.getElementById("bouton-theme");
  const htmlElement = document.documentElement;

  // verifie si un theme est deja save
  const themeSauvegarde = localStorage.getItem("theme");
  const systemePrefereSombre = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (themeSauvegarde) {
    htmlElement.setAttribute("data-theme", themeSauvegarde);
  } else if (systemePrefereSombre) {
    htmlElement.setAttribute("data-theme", "dark");
  }

  // Quand on click sur le boutton
  boutonTheme.addEventListener("click", () => {
    const themeActuel = htmlElement.getAttribute("data-theme");
    const nouveauTheme = themeActuel === "dark" ? "light" : "dark";

    htmlElement.setAttribute("data-theme", nouveauTheme);
    localStorage.setItem("theme", nouveauTheme);
  });

  // Animation au scroll
  const elementsApparition = document.querySelectorAll(".apparition");

  const observateurApparition = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("actif");
        }
      });
    },
    {
      root: null,
      threshold: 0.15,
      rootMargin: "0px",
    },
  );

  elementsApparition.forEach((el) => observateurApparition.observe(el));
});
