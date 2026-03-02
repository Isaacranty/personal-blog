// SECTION: Utility
const selectAll = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

// SECTION: Navigation + Views
const views = {
  home: document.getElementById("home"),
  about: document.getElementById("about"),
};

const navLinks = selectAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const target = link.dataset.nav;

    // Toggle active nav
    navLinks.forEach((btn) => btn.classList.toggle("is-active", btn === link));

    // Toggle visible view
    Object.entries(views).forEach(([key, section]) => {
      if (!section) return;
      section.classList.toggle("is-visible", key === target);
    });

    // Scroll to top of main content
    document.querySelector(".site-main").scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Make brand click go home
const brandLink = document.querySelector(".brand-mark");
if (brandLink) {
  brandLink.addEventListener("click", (event) => {
    event.preventDefault();
    const homeNav = document.querySelector('.nav-link[data-nav="home"]');
    if (homeNav) homeNav.click();
  });
}

// SECTION: Category Filtering
const categoryChips = selectAll(".chip");
const postCards = selectAll(".post-card");

categoryChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const category = chip.dataset.category;

    // Toggle active state on chips
    categoryChips.forEach((c) => c.classList.toggle("is-active", c === chip));

    // Filter post cards
    postCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      const shouldShow = category === "all" || cardCategory === category;
      card.style.display = shouldShow ? "block" : "none";
    });
  });
});

// SECTION: Footer Year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
