document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const tabs = [...document.querySelectorAll("[data-schedule-tab]")];
  const panels = [...document.querySelectorAll("[data-schedule-panel]")];

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const selected = tab.dataset.scheduleTab;
      tabs.forEach((item) => {
        const active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
      });
      panels.forEach((panel) => {
        panel.classList.toggle("is-hidden", panel.dataset.schedulePanel !== selected);
      });
    });
  });
});
