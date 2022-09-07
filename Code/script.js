/* || Header navigation menu */

const hamburgerIcon = document.querySelector(".hamburger-menu");

hamburgerIcon.addEventListener("click", function (event) {
  // Finally add the active class to the actual clicked button
  event.target.classList.add("header-mobile-nav-active");
});

/* || Add active class to product size */

const productSizeAlternatives = document.querySelectorAll(
  ".product-info-size-alternative"
);

for (const sizeAlternative of productSizeAlternatives) {
  sizeAlternative.addEventListener("click", function (event) {
    // Get the active size alternatives, loop through it, and remove the active class
    let sizeAlternatives = document.querySelectorAll(
      ".product-info-size-active"
    );
    for (let i = 0; i < sizeAlternatives.length; i++) {
      sizeAlternatives[i].classList.remove("product-info-size-active");
    }

    // Finally add the active class to the actual clicked button
    event.target.classList.add("product-info-size-active");
  });
}

/* || Accordion */

const accordionItems = document.querySelectorAll(".accordion-item-header");

for (const accordionItem of accordionItems) {
  accordionItem.addEventListener("click", function () {
    let accordionItemActiveContent = document.querySelectorAll(
      ".accordion-item-active"
    );
    for (let i = 0; i < accordionItemActiveContent.length; i++) {
      accordionItemActiveContent[i].classList.remove("accordion-item-active");
    }
    //Add the active class to the header of the clicked accordion item
    this.classList.toggle("accordion-item-active");

    // Make a variable for the accordion-content, then toggle it on and off when needed.
    let accordionItemContent = this.nextElementSibling;
    accordionItemContent.classList.add("accordion-item-active");
  });
}
