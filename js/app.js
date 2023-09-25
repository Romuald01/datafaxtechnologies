"use strict";
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-button");
const menu = document.querySelector(".menu-list");

menu.classList.add("hidden");

hamburger.addEventListener("click", function () {
  menu.classList.remove("hidden");

  document.getElementById("menu").style.width = "100%";
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", function () {
  menu.classList.add("hidden");

  document.getElementById("menu").style.width = "0%";
});
