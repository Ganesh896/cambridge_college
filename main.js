"use strict";

const toggle = document.querySelector(".toggle");
const close = document.querySelector(".close");
const menu = document.querySelector(".nav-items");

toggle.addEventListener("click", () => {
  menu.classList.add("show");
});

close.addEventListener("click", () => {
  menu.classList.remove("show");
});

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.home_content, .course, .campus, .facilities, .testimonial, .section`,
  {
    interval: 200,
  }
);
