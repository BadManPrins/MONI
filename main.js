const hibiscus = document.querySelector(".hibiscus");

window.addEventListener("load", () => {
  setTimeout(() => {
    hibiscus.classList.remove("closed");
    hibiscus.classList.add("open");
  }, 600);
});
