const menu = document.querySelector("#menu");
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
