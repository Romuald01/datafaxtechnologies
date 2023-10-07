"use strict";
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-hamburger");
const menu = document.querySelector(".menu-list");
const exp = document.getElementById(".experience-div");
const hid = document.querySelector(".hide-paragraph");
const paragraph = document.querySelector(".paragraph-text");

hamburger.addEventListener("click", function () {
  menu.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  menu.classList.add("hidden");
});
