"use strict";
const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-hamburger");
const menu = document.querySelector(".menu-list");
const abilityText = document.querySelector(".ability_text");
const hid = document.querySelector(".hide-paragraph");
const paragraph = document.querySelector(".paragraph-text");
const abilityBtn = document.querySelectorAll(".ability-text-content");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
modal.classList.add("hidden");

for (let i = 0; i < abilityBtn.length; i++)
  abilityBtn[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

closeModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});

hamburger.addEventListener("click", function () {
  menu.classList.remove("hidden");
});

closeBtn.addEventListener("click", function () {
  menu.classList.add("hidden");
});

// function heading() {

// }
