const btn = document.querySelectorAll("button");

btn.forEach((bt) => {
  bt.addEventListener("click", () => {
    bt.classList.toggle("active");
  });
});
