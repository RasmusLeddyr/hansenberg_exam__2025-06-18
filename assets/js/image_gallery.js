const img_gals = document.querySelectorAll(".img_gal");

img_gals.forEach((gal) => {
  // variables
  const main = gal.querySelector(".gal_main");
  const list = gal.querySelector(".gal_list");
  const items = list.querySelectorAll(".gal_item");
  const first_item = items[0];

  // initial update
  first_item.classList.add("selected");
  UpdateGal(main, first_item);

  // click events on buttons
  items.forEach((i) => {
    const btn = i.querySelector(".gal_btn");
    if (btn) {
      btn.addEventListener("click", () => {
        UpdateGal(main, i);
      });
    }
  });
});

// image update function
function UpdateGal(main, item) {
  main.innerHTML = item.innerHTML;
  main.parentNode.querySelector(".selected").classList.remove("selected");
  item.classList.add("selected");
}
