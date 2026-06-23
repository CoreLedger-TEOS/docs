(function () {
  function closeSiblingProductSections(openToggle) {
    var productNav = openToggle.closest('.md-nav[data-md-level="0"]');
    if (!productNav) {
      return;
    }

    var toggles = productNav.querySelectorAll(
      ':scope > .md-nav__list > .md-nav__item > .md-nav__toggle'
    );

    toggles.forEach(function (toggle) {
      if (toggle !== openToggle) {
        toggle.checked = false;
      }
    });
  }

  function bindProductAccordion() {
    var productToggles = document.querySelectorAll(
      '.md-sidebar--primary .md-nav[data-md-level="0"] > .md-nav__list > .md-nav__item > .md-nav__toggle'
    );

    productToggles.forEach(function (toggle) {
      toggle.addEventListener('change', function () {
        if (toggle.checked) {
          closeSiblingProductSections(toggle);
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindProductAccordion);
  } else {
    bindProductAccordion();
  }
})();
