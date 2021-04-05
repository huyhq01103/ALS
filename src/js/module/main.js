import $ from "jquery";
import "slick-carousel";
/* eslint-disable */
const tabItem = document.querySelectorAll(".item, .sub-item");
const tabs = document.querySelectorAll(".tab, .timeline-item");
const btnModal = document.querySelectorAll(".guide, .btn-close");
const modal = document.querySelector(".overlay");
const body = document.querySelector("body");
const acc = document.querySelectorAll(".accordion");
const toggle = document.querySelectorAll(".toggle");
// $('h1').css('background', 'purple');
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
    target.classList.contains("tab") || target.classList.contains("timeline-item")
      ? target
      : target.parentElement;
  const group = item.dataset.actabGroup;
  const id = item.dataset.actabId;

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
$(document).on("click", '[data-toggle="class"]', function () {
  var $target = $($(this).data("target"));
  var classes = $(this).data("classes");
  $target.toggleClass(classes);
  return false;
});

const lang = document.querySelector(".btn-lang");
const scrollBtn = document.querySelector(".scroll-top");
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
scrollBtn.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const state = {
  isOpen: false,
};
$("#mainNav .navigation__link").bind("click", function (e) {
  e.preventDefault(); // prevent hard jump, the default behavior
  var target = $(this).data("jumb"); // Set the target as variable
  // perform animated scrolling by getting top-position of target-element and set it as scroll target
  window.scroll({
    top: $("#" + target).offset().top + 1,
    behavior: "smooth",
  });
  return false;
});
var menu = $(".right-nav"),
  menuOverlay = $(".nav-overlay");
function curtainUp() {
  menuOverlay.removeClass("curtain-down");
  menuOverlay.addClass("curtain-up");
}

function curtainDown() {
  menuOverlay.removeClass("curtain-up");
  menuOverlay.addClass("curtain-down");
}
$("#hamburger").bind("click", function (e) {
  e.preventDefault();
  $(this).toggleClass("is-active");
  $("body").toggleClass("overhiden");
  menu.toggleClass("is-active");
  if (state.isOpen) {
    curtainDown();
    state.isOpen = false;
    return;
  } else {
    curtainUp();
    state.isOpen = true;
  }
});
// $(".main-nav .navbar-item ").bind("click", function (e) {
//   var menu = $(".main-nav");
//   // $(".main-nav .navbar-item").removeClass('active');
//   $(this).toggleClass('active');
//   $("#hamburger").removeClass("is-active");
//   $("body").removeClass("overhiden");
//   menu.removeClass("is-active");
//   state.isOpen = false;
// });
// $(".nav-dropdown").on("click", function() {
//   if ($(this).hasClass("active")) {
//     $(this).removeClass("active");
//   } else {
//     $(".nav-dropdown").removeClass("active");
//     $(this).addClass("active");
//   }
// });

  // handle the expansion of mobile menu drop down nesting
  $('li.nav-dropdown').click(
    function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }

        if ($('.right-nav').hasClass('is-active')) {
            $(this).toggleClass('active');
        }
    }
);

$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $(".page-section").each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $(".navigation .navigation__link.active").removeClass("active");
        $(".navigation .navigation__link").eq(i).addClass("active");
      }
    });
  })
  .scroll();

$(".block-carousel").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".news-slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".main-carousel").slick({
  dots: true,
  dotsClass: 'slick-dots container',
  autoplay: true,
  infinite: false,
  speed: 300,
});

$(".corevalue-slider").slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$(".core-full-slider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

$(".mini .mini-img").click(function () {
  var currentImage =  $(".maxi");
  currentImage.addClass('fadeIn');
	setTimeout(function () {
		currentImage.removeClass('fadeIn');
	}, 500);
  currentImage.attr("src", $(this).attr("src"));
});

// TIME LINE 
$('.timeline-item').click(function(){
  $('.timeline-item').removeClass("active");
  $(this).addClass("active");
});

// DROPDOWN

function toggleClass(elem,className){
  if (elem.className.indexOf(className) !== -1){
    elem.className = elem.className.replace(className,'');
  }
  else{
    elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
  }

  return elem;
}

function toggleMenuDisplay(e){
  const dropdown = e.currentTarget.parentNode;
  const menu = dropdown.querySelector('.menu');
  const title = dropdown.querySelector('.title');
  toggleClass(title,'opened');
}

function handleOptionSelected(e){		
  const newValue = e.target.textContent + ' ';
  const titleElem = document.querySelector('.dropdown .title');
  toggleClass(titleElem,'opened');
  titleElem.textContent = newValue;
  $('.dropdown .title').removeClass('placeholder');
  //trigger custom event
  document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
    //setTimeout is used so transition is properly shown
}

//get elements
const dropdownTitle = document.querySelector('.dropdown .title');
const dropdownOptions = document.querySelectorAll('.dropdown .option');

//bind listeners to these elements
if(dropdownTitle){
  dropdownTitle.addEventListener('click', toggleMenuDisplay);
}

dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));

function animateValue() {
  const target = $('#countdown');
  const start = target.data('start');
  const end = target.data('end');
  if(target) {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(5000 / range));
    // var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        target.innerHTML = current;
        console.log(current);
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
  }
  
}
  
function registerEventListeners() {
    var elements = document.querySelectorAll('.purecounter');
    var intersectionSupported = intersectionListenerSupported();

    if (intersectionSupported) {
        var intersectionObserver = new IntersectionObserver(animateElements, {
            "root": null,
            "rootMargin": '20px',
            "threshold": 0.5
        });

        for (var i = 0; i < elements.length; i++) {
            intersectionObserver.observe(elements[i]);
        }
    } else {
        if (window.addEventListener) {
            animateLegacy(elements);

            window.addEventListener('scroll', function (e) {
                animateLegacy(elements);
            }, { "passive": true });
        }
    }
}

function animateLegacy(elements) {
    for (var i = 0; i < elements.length; i++) {
        var config = parseConfig(elements[i]);
        if (config.legacy === true && elementIsInView(elements[i])) {
            animateElements([elements[i]]);
        }
    }
}

function animateElements(elements, observer) {
    elements.forEach(function (element) {
        var elementConfig = typeof element.target !== "undefined" ? parseConfig(element.target) : parseConfig(element);

        if (elementConfig.duration <= 0) {
            return element.innerHTML = elementConfig.end.toFixed(elementConfig.decimals);
        }
        if ((!observer && !elementIsInView(element)) || (observer && element.intersectionRatio < 0.5)) {
            return element.target.innerHTML = elementConfig.start > elementConfig.end ? elementConfig.end : elementConfig.start;
        }

        setTimeout(function () {
            if (typeof element.target !== "undefined") {
                return startCounter(element.target, elementConfig);
            }

            return startCounter(element, elementConfig);
        }, elementConfig.delay);
    });
}

function startCounter(element, config) {
    var incrementsPerStep = (config.end - config.start) / (config.duration / config.delay);
    var countMode = 'inc';
    if (config.start > config.end) {
        countMode = 'dec';
        incrementsPerStep *= -1;
    }
    if (incrementsPerStep < 1 && config.decimals <= 0) {
        incrementsPerStep = 1;
    }

    var currentCount = config.decimals <= 0 ? parseInt(config.start) : parseFloat(config.start).toFixed(config.decimals);
    element.innerHTML = currentCount;

    if (config.once === true) {
        element.setAttribute('data-purecounter-duration', 0);
    }

    var counterWorker = setInterval(function () {
        var nextNum = nextNumber(currentCount, incrementsPerStep, config, countMode);
        element.innerHTML = formatNumber(nextNum, config);
        currentCount = nextNum;

        if ((currentCount >= config.end && countMode == 'inc') || (currentCount <= config.end && countMode == 'dec')) {
            clearInterval(counterWorker);

            if (currentCount != config.end) {
                element.innerHTML = config.decimals <= 0 ? parseInt(config.end) : parseFloat(config.end).toFixed(config.decimals);
            }
        }
    }, config.delay);
}

function parseConfig(element) {
    var configValues = [].filter.call(element.attributes, function (attribute) {
        return /^data-purecounter-/.test(attribute.name);
    });

    var newConfig = {
        start: 0,
        end: 9001,
        duration: 2000,
        delay: 10,
        once: true,
        decimals: 0,
        legacy: true,
    };

    for (var i = 0; i < configValues.length; i++) {
        var valueInd = configValues[i].name.replace('data-purecounter-', '');
        newConfig[valueInd.toLowerCase()] = valueInd.toLowerCase() == 'duration' ? parseInt(castDataType(configValues[i].value) * 1000) : castDataType(configValues[i].value);
    }

    return newConfig;
}

function nextNumber(number, steps, config, mode) {
    if (!mode) mode = 'inc';
    if (mode === 'inc') {
        return config.decimals <= 0 ? parseInt(number) + parseInt(steps) : parseFloat(number) + parseFloat(steps);
    }

    return config.decimals <= 0 ? parseInt(number) - parseInt(steps) : parseFloat(number) - parseFloat(steps);
}

function formatNumber(number, config) {
    return config.decimals <= 0 ? parseInt(number) : number.toLocaleString(undefined, { minimumFractionDigits: config.decimals, maximumFractionDigits: config.decimals });
}

function castDataType(data) {
    if (/^[0-9]+\.[0-9]+$/.test(data)) {
        return parseFloat(data);
    }
    if (/^[0-9]+$/.test(data)) {
        return parseInt(data);
    }
    return data;
}

function elementIsInView(element) {
    var top = element.offsetTop;
    var left = element.offsetLeft;
    var width = element.offsetWidth;
    var height = element.offsetHeight;

    while (element.offsetParent) {
        element = element.offsetParent;
        top += element.offsetTop;
        left += element.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}

function intersectionListenerSupported() {
    return ('IntersectionObserver' in window) &&
        ('IntersectionObserverEntry' in window) &&
        ('intersectionRatio' in window.IntersectionObserverEntry.prototype);
}


    registerEventListeners();

