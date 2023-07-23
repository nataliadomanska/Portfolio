"use strict";

// ELEMENTS //

const pageLoadingView = document.getElementById("page-loading");
const boxes = document.getElementById("boxes");
const box1 = document.querySelector(".box-1");
const box2 = document.querySelector(".box-2");
const box3 = document.querySelector(".box-3");
const moveUpBox1 = box1.querySelector(".content_move");
const moveUpBox2 = box2.querySelector(".content_move");
const moveUpBox3 = box3.querySelector(".content_move");
const aboutPanel = document.getElementById("about");
const resumePanel = document.getElementById("resume");
const contactPanel = document.getElementById("contact");
const overlay = document.getElementById("overlay");
const main = document.getElementById("main");
const body = document.body;
const viewMoreBtn = document.querySelectorAll(".view_more__btn");

// FUNCTIONS

const init = function () {
  viewMoreBtn.forEach(function (btn) {
    btn.classList.add("view-more_hidden");
  });
};
init();

// Open panels

const openAboutPanel = function () {
  aboutPanel.classList.remove("hidden");
  aboutPanel.classList.add("panel-move-left");
};
const openResumePanel = function () {
  resumePanel.classList.remove("hidden");
  resumePanel.classList.add("panel-move-left");
};

const openContactPanel = function () {
  contactPanel.classList.remove("hidden");
  contactPanel.classList.add("panel-move-left");
};

// Boxes content moving up and view more appearing

const moveUp = function (e) {
  const currentBox = e.target;
  const currentBoxContent = currentBox.querySelector(".content_move");
  const currentViewMoreBtn = currentBox.querySelector(".view_more__btn");

  currentBoxContent.classList.remove("move-down");
  currentBoxContent.classList.add("move-up");

  currentViewMoreBtn.classList.add("view-more_visible");
  currentViewMoreBtn.classList.remove("view-more_hidden");
};

// Boxes content moving down and view more disappearing

const moveDown = function (e) {
  const currentBox = e.target;
  const currentBoxContent = currentBox.querySelector(".content_move");
  const currentViewMoreBtn = currentBox.querySelector(".view_more__btn");

  currentBoxContent.classList.add("move-down");
  currentBoxContent.classList.remove("move-up");
  currentViewMoreBtn.classList.add("view-more_hidden");
  currentViewMoreBtn.classList.remove("view-more_visible");
};

// Overlay active

const overlayActive = function () {
  overlay.classList.add("overlay--active");
  main.classList.add("move-left");
  body.classList.add("overflow-hidden");
};

// EVENT LISTENERS

// Panels opening and overlay appearing
box1.addEventListener("click", openAboutPanel);
box2.addEventListener("click", openResumePanel);
box3.addEventListener("click", openContactPanel);

boxes.addEventListener("click", overlayActive);

// Box content moving up and down

boxes.addEventListener("mouseover", moveUp);
boxes.addEventListener("mouseout", moveDown);
