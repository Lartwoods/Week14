let btnRight = document.querySelector(".btnRight");
let slides = document.querySelectorAll("img");
let i = 0;

function next() {
  i++;
  if (i >= slides.length) {
    slides[i - 1].classList.remove("block");
    i = 0;
    slides[i].classList.add("block");
  } else {
    slides[i - 1].classList.remove("block");

    slides[i].classList.add("block");
  }
}

let btnLeft = document.querySelector(".btnLeft");
let slidesBack = document.querySelectorAll("img");
let h = 0;

function prev() {
  ++h;
  if (h >= slidesBack.length) {
    slidesBack[h - 1].classList.add("block");
    h = 0;
    slidesBack[h].classList.remove("block");
  } else {
    slidesBack[h - 1].classList.add("block");

    slidesBack[h].classList.remove("block");
  }
}
