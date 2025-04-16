


const checked = document.querySelectorAll(".buy-now-imput");
// checked.addEventListener("click", () => {
//   checked.classList.toggle("checked");
// });
// const checked = document.querySelector(li :nth-child(2));
// checked.addEventListener("click", () => {
//   checked.classList.toggle("checked");
// });
// const checked = document.querySelector(li :nth-child(3));
// checked.addEventListener("click", () => {
//   checked.classList.toggle("checked");
// });

checked.forEach((li) => {
    li.addEventListener("click", () => {
        li.classList.toggle("checked");
    });
  });