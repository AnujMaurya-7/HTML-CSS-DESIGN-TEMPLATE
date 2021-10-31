"use strict";
const hamburger = document.querySelector(".hamburger");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function trigger(params) {
  line1.classList.toggle("change");
  line2.classList.toggle("change");
  line3.classList.toggle("change");
  navMenu.classList.toggle("display");
});
