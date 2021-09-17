document.querySelectorAll(".carousel1").forEach((carousel1) => {
    const items = carousel1.querySelectorAll(".carousel1-item");
    const buttonsHtml = Array.from(items, () => {
        return `<span class="carousel1-button"></span>`;
    });

    carousel1.insertAdjacentHTML(
        "beforeend",
        `
          <div class="carousel1-nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );

    const buttons = carousel1.querySelectorAll(".carousel1-button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            // un-select all the items
            items.forEach((item) =>
                item.classList.remove("carousel1-item--selected")
            );
            buttons.forEach((button) =>
                button.classList.remove("carousel1-button--selected")
            );

            items[i].classList.add("carousel1-item--selected");
            button.classList.add("carousel1-button--selected");
        });
    });

    // Select the first item on page load
    items[0].classList.add("carousel1-item--selected");
    buttons[0].classList.add("carousel1-button--selected");
});
