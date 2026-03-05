document.addEventListener("DOMContentLoaded", () => {
  const tabWrap = document.getElementById("menuTabs");
  const grid = document.getElementById("offerGrid");

  if (!tabWrap || !grid) return;

  const tabs = tabWrap.querySelectorAll(".menuTab");
  const cards = grid.querySelectorAll(".offerCard");

  function setActive(menu) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.menu === menu;

      tab.setAttribute("aria-pressed", isActive ? "true" : "false");
      tab.classList.toggle("text-primary", isActive);
      tab.classList.toggle("text-tertiary/80", !isActive);
    });

    cards.forEach((card) => {
      const show = card.dataset.menu === menu;
      card.classList.toggle("hidden", !show);
    });
  }

  setActive("pizza");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setActive(tab.dataset.menu);
    });
  });
});