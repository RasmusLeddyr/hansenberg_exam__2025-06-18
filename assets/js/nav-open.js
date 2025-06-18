const nav = document.querySelector(".page_nav");
const buttons = nav.querySelectorAll(".togl");
buttons.forEach((togl) => {
  togl.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});
