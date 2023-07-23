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

// FUNCTIONS

const init = function () {
  viewMoreBtn.forEach(function (btn) {
    btn.classList.add("view-more_hidden");
  });
};
init();

// Open panels

// const openPanel = function () {
//   panels.forEach(function(p) {
//     p.classList.remove("hidden");
//     p.classList.add("panel-move-left");
//   })
// };

const openAboutPanel = function () {
  aboutPanel.classList.remove("hidden");
  aboutPanel.classList.remove("panel-move-right");
  const panelMoveLeft = function () {
    aboutPanel.classList.add("panel-move-left");
  };
  setTimeout(panelMoveLeft, 100);
};
const openResumePanel = function () {
  resumePanel.classList.remove("hidden");
  resumePanel.classList.remove("panel-move-right");
  const panelMoveLeft = function () {
    resumePanel.classList.add("panel-move-left");
  };
  setTimeout(panelMoveLeft, 100);
};

const openContactPanel = function () {
  contactPanel.classList.remove("hidden");
  contactPanel.classList.remove("panel-move-right");
  const panelMoveLeft = function () {
    contactPanel.classList.add("panel-move-left");
  };
  setTimeout(panelMoveLeft, 100);
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
  };
  setTimeout(hiddenPanel, 600);
  panels.forEach((p) => p.classList.remove("panel-move-left"));
  panels.forEach((p) => p.classList.add("panel-move-right"));
};

const overlayDisactive = function () {
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
  main.classList.remove("move-right");
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

// Closing panels

panelCloseEl.forEach((el) =>
  el.addEventListener("mouseover", panelCloseElActive)
);
panelCloseEl.forEach((el) =>
  el.addEventListener("mouseleave", panelCloseElPassive)
);

panelCloseEl.forEach((el) => el.addEventListener("click", closePanel));

panelCloseEl.forEach((el) => el.addEventListener("click", overlayDisactive));
