"use strict";
const hamburger = document.querySelector(".hamburger");
// const closeBtn = document.querySelector(".close-hamburger");
const closeMenu = document.querySelector(".close-hamburger");
const menu = document.querySelector(".menu-list");
const abilityText = document.querySelector(".ability-text");
const hid = document.querySelector(".hide-paragraph");
const paragraph = document.querySelector(".paragraph-text");
const abilityBtn = document.querySelectorAll(".modal-button");
const experienceBtn = document.querySelectorAll(".exp-modal-button");
const modal = document.querySelector(".modal");
const experienceModal = document.querySelector(".expmodal");
const closeAbilityModal = document.querySelectorAll(".close-modal");
const closeExperienceModal = document.querySelectorAll(".close-modal");
const overlay = document.querySelector(".overlay");
closeMenu.classList.add("hidden");
menu.classList.add("hidden");
hamburger.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.remove("hidden");
  closeMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.add("hidden");
});
modal.classList.add("hidden");
experienceModal.classList.add("hidden");

//display ability modal
for (let i = 0; i < abilityBtn.length; i++)
  abilityBtn[i].addEventListener("click", function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
//display experience modal
for (let i = 0; i < experienceBtn.length; i++)
  experienceBtn[i].addEventListener("click", function () {
    experienceModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

for (let i = 0; i < closeAbilityModal.length; i++) {
  closeAbilityModal[i].addEventListener("click", function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
}

for (let i = 0; i < closeExperienceModal.length; i++) {
  closeExperienceModal[i].addEventListener("click", function () {
    experienceModal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
}
