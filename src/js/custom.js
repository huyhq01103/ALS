import $ from "jquery";
// import jQueryBridget from ('jquery-bridget');
// import Flickity from ('flickity');

// make Flickity a jQuery plugin
// jQueryBridget( 'flickity', Flickity, $ );
$("h1").css("background", "purple");
const tabItem = document.querySelectorAll(".item");
const tabs = document.querySelectorAll(".tab, .guide");
const btnModal = document.querySelectorAll(".guide, .btn-close");
const modal = document.querySelector(".overlay");
const body = document.querySelector("body");
const acc = document.querySelectorAll(".accordion");
const toggle = document.querySelectorAll(".toggle");
// $("h1").css("background", "purple");
// Accordion
acc.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
toggle.forEach(function (item) {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

function toggleShow() {
  const target = this;
  const item =
    target.classList.contains("tab") || target.classList.contains("guide")
      ? target
      : target.parentElement;
  const group = item.dataset.actabGroup;
  const id = item.dataset.actabId;
  console.log("group" + group);
  console.log("id" + id);
  tabs.forEach(function (tab) {
    if (tab.dataset.actabGroup === group) {
      if (tab.dataset.actabId === id) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    }
  });

  tabItem.forEach(function (item) {
    const tabItem = item;
    if (tabItem.dataset.actabGroup === group) {
      if (tabItem.dataset.actabId === id) {
        tabItem.classList.add("active");
      } else {
        tabItem.classList.remove("active");
      }
    }
  });
}

tabs.forEach(function (tab) {
  tab.addEventListener("click", toggleShow);
});

// Overlay modal
btnModal.forEach(function (item) {
  item.addEventListener("click", function () {
    overlay();
  });
});

function overlay() {
  modal.classList.toggle("active");
  body.classList.toggle("fixed");
}

window.onclick = function (event) {
  if (event.target === modal) {
    overlay();
  }
};
// $(document).on("click", '[data-toggle="class"]', function () {
//   var $target = $($(this).data("target"));
//   var classes = $(this).data("classes");
//   $target.toggleClass(classes);
//   return false;
// });

const lang = document.querySelector(".btn-lang");
const langNav = document.querySelector(".lang-nav");
const country = document.querySelector("span.country");
const flag = document.querySelectorAll(".flag");
const flags = ["vi", "en"];
lang.addEventListener("click", function () {
  langNav.classList.toggle("show");
});
flag.forEach(function (item) {
  const dataFlag = item.dataset.flag;
  item.addEventListener("click", function () {
    country.textContent = dataFlag;
    for (let i of flags) {
      if (lang.classList.contains(i)) {
        lang.classList.remove(i);
        lang.classList.add(dataFlag);
      } else {
        lang.classList.add(dataFlag);
      }
      langNav.classList.remove("show");
    }
  });
});
// BANNER
// var elem = document.querySelector('.main-carousel');
// var flkty = new Flickity( elem, {
//   // options
//   cellAlign: 'left',
//   contain: true
// });
// var flkty = new Flickity( '.main-carousel', {
//   // options
// });
// $(document).on("click", '[data-toggle="class"]', function () {
//   var $target = $($(this).data("target"));
//   var classes = $(this).data("classes");
//   $target.toggleClass(classes);
//   return false;
// });

