function stars() {
  let count = 150;
  let scene = document.querySelector(".herosection");
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let duration = Math.random() * 10;
    let size = Math.random() * 2;

    star.style.left = x + "px";
    star.style.top = y + "px";
    star.style.width = 1 + size + "px";
    star.style.height = 1 + size + "px";

    star.style.animationDuration = 1 + duration + "s";
    star.style.animationDelay = duration + "s";

    scene.appendChild(star);
    i++;
  }
}
stars();

const hamBurgerIcon = document.getElementById("hamburgerIcon");
const links = document.querySelector(".links");
const closeIcon = document.getElementById("closeIcon");

hamBurgerIcon.addEventListener("click", () => {
  links.classList.add("active");
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  links.classList.remove("active");
  closeIcon.style.display = "none";
});


btn.addEventListener("click", function(){
  window.scrollTo(0,200);
})