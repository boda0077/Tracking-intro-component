const menu = document.querySelector(".menu");
const menuBtn = document.querySelector("#menuBtn");

const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("max-md:hidden");
  first.classList.toggle("rotate-[45deg]");
  first.classList.toggle("translate-x-[6px]");
  first.classList.toggle("translate-y-[6px]");
  third.classList.toggle("rotate-[-45deg]");
  third.classList.toggle("translate-x-[6px]");
  third.classList.toggle("translate-y-[-9px]");
  second.classList.toggle("opacity-0");
  second.classList.toggle("translate-x-[-6rem]");
});

let mm = gsap.matchMedia();

mm.add("(min-width:768px)", () => {
  gsap.from(".about", {
    opacity: 0,
    y: -50,
    duration: 1,
  });
  gsap.from(".img", {
    x: 50,
    opacity: 0,
    duration: 1,
  });
});

menuBtn.addEventListener("click", () => {
  gsap.from(".menu", {
    keyframes: {
      x: [700, -40, 0],
    },
    duration: 0.7,
    zIndex: 10,
  });
});
