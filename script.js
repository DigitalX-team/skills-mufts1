  gsap.registerPlugin(ScrollTrigger);




gsap.to(".section1", {
   
   opacity:1, 
        scale: 1,

  });
document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!
  let tl1 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: '.firstsection',
      pin: true,
      start: '50% 50%', // when the top of the trigger hits the top of the viewport
      end: '300% 50%', // end after scrolling 500px beyond the start
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      markers: true,
    }
  })

  // add animations and labels to the timeline
  // tl1.to(".section1", 
  //   { 
  //     // x: 100, 
  //     duration: 1
  //    });



});

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

let lastScroll = 0;
let currentDirection = "right";
const slider = document.querySelector(".slide-line");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  const diff = currentScroll - lastScroll;

  // ignore very small scrolls (smoothness key 🔑)
  if (Math.abs(diff) < 5) return;

  if (diff > 0 && currentDirection !== "right") {
    slider.style.animationDirection = "normal";
    currentDirection = "right";
  }
  else if (diff < 0 && currentDirection !== "left") {
    slider.style.animationDirection = "reverse";
    currentDirection = "left";
  }

  lastScroll = currentScroll;
})