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
const panels = document.querySelectorAll(".panel");
const aboutPanel = document.getElementById("about");
const resumePanel = document.getElementById("resume");
const contactPanel = document.getElementById("contact");
const overlay = document.getElementById("overlay");
const main = document.getElementById("main");
const body = document.body;
const viewMoreBtn = document.querySelectorAll(".view_more__btn");
const panelCloseEl = document.querySelectorAll(".panel-close img");
const yearField = document.getElementById("year");
const arrowDown = document.getElementById("down-arrow");

// FUNCTIONS

// Open panels

const openPanel = function () {
  this.classList.remove("hidden");
  this.classList.remove("panel-move-right");
  const panelMoveLeft = () => {
    this.classList.add("panel-move-left");
  };
  setTimeout(panelMoveLeft, 100);

  overlay.classList.add("overlay--active");
  main.classList.remove("move-right");
  main.classList.add("move-left");
  body.classList.add("overflow-hidden");
};

// Close panels

const panelCloseElActive = function () {
  panelCloseEl.forEach((p) => (p.style.opacity = "1"));
};

const panelCloseElPassive = function () {
  panelCloseEl.forEach((p) => (p.style.opacity = "0.2"));
};

const closePanel = function () {
  const hiddenPanel = function () {
    panels.forEach((p) => p.classList.add("hidden"));
    viewMoreBtn.forEach((btn) => btn.classList.add("view-more_init"));
  };
  setTimeout(hiddenPanel, 600);
  panels.forEach((p) => p.classList.remove("panel-move-left"));
  panels.forEach((p) => p.classList.add("panel-move-right"));
  const removeOverlay = function () {
    overlay.classList.remove("overlay--active");
  };
  setTimeout(removeOverlay, 600);
  const moveLeftRem = function () {
    main.classList.remove("move-left");
  };
  setTimeout(moveLeftRem, 100);
  const moveRightAdd = function () {
    main.classList.add("move-right");
  };
  setTimeout(moveRightAdd, 100);
  body.classList.remove("overflow-hidden");
};

// Boxes content moving up and view more appearing

const moveUp = function (e) {
  const currentBox = e.target;
  const currentBoxContent = currentBox.querySelector(".content_move");
  const currentViewMoreBtn = currentBox.querySelector(".view_more__btn");

  currentBoxContent.classList.remove("move-down");
  currentBoxContent.classList.add("move-up");

  currentViewMoreBtn.classList.remove("view-more_init");
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

// Year display

const displayYear = function () {
  const now = new Date();
  const year = now.getFullYear();

  yearField.textContent = `${year}`;
};
displayYear();

// EVENT LISTENERS

// Box content moving up and down

boxes.addEventListener("mouseover", moveUp);
boxes.addEventListener("mouseout", moveDown);

// Panels opening
box1.addEventListener("click", openPanel.bind(aboutPanel));
box2.addEventListener("click", openPanel.bind(resumePanel));
box3.addEventListener("click", openPanel.bind(contactPanel));

// Panels closing

panelCloseEl.forEach((el) =>
  el.addEventListener("mouseover", panelCloseElActive)
);
panelCloseEl.forEach((el) =>
  el.addEventListener("mouseleave", panelCloseElPassive)
);

panelCloseEl.forEach((el) => el.addEventListener("click", closePanel));

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && overlay.classList.contains("overlay--active")) {
    closePanel();
    console.log("ESC press!");
  }
});

overlay.addEventListener("click", closePanel);

// Arrow down

arrowDown.addEventListener("click", function () {
  boxes.getBoundingClientRect();
  boxes.scrollIntoView({ behavior: "smooth" });
});
