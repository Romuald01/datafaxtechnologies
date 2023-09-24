"use strict";
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-list");
const overlayMenu = document.querySelector(".menu-list-overlay");

hamburger.addEventListener("click", function () {
  menu.classList.add("hidden");
  overlayMenu.classList.add("hidden");
});
