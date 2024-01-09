'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

/**
 * CONTACT FORM
 */
const form = document.getElementById("contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const request = new XMLHttpRequest();
  request.open("POST", "https://formsubmit.co/ajax/patrycjakarnik@gmail.com");
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(Object.fromEntries(formData.entries())));
  
  alert("Thank you for your message. We'll get back to you soon.");
  
  form.reset();
});
/**
 * NEWSLETTER
 */

/*function ml_webform_success_2909996() {
      var $ = ml_jQuery || jQuery;
      $('.ml-subscribe-form-2909996 .row-success').show();
      $('.ml-subscribe-form-2909996 .row-form').hide();
    }*/

   // function to toggle between the two sets of elements
    function toggleElements() {
      const h1_1 = document.getElementById("h1-1");
      const h1_2 = document.getElementById("h1-2");
      const p_1 = document.getElementById("p-1");
      const p_2 = document.getElementById("p-2");

      if (h1_1.style.display === "block") {
        h1_1.style.display = "none";
        p_1.style.display = "none";
        h1_2.style.display = "block";
        p_2.style.display = "block";
      } else {
        h1_1.style.display = "block";
        p_1.style.display = "block";
        h1_2.style.display = "none";
        p_2.style.display = "none";
      }
    }

    // initial call to the toggle function
    toggleElements();

    // set the interval to repeat the toggle function every 5 seconds
    setInterval(toggleElements, 5000);




/**
 * SHOP
 */

 function toggleHoverWindow() {
        var x = document.getElementById("hover-window");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }