// Simple nav toggle & set year
document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".nav-toggle");
  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      // attempt to toggle nearest nav sibling
      const header = btn.closest(".header-grid");
      const nav = header
        ? header.querySelector(".nav")
        : document.querySelector(".nav");
      if (nav)
        nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });
  });

  // set year in footers
  const y = new Date().getFullYear();
  ["year", "year2", "year3", "year4"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = y;
  });
});
