const reveals = document.querySelectorAll(
  ".reveal, .reveal-left, .reveal-right, .zoom-reveal"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.15
  }
);

reveals.forEach(el => observer.observe(el));


const menuBtn = document.querySelector("#menuBtn");
const closeMenu = document.querySelector("#closeMenu");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileOverlay = document.querySelector("#mobileOverlay");

console.log(menuBtn);
console.log(closeMenu);
console.log(mobileMenu);
console.log(mobileOverlay);

if (menuBtn && closeMenu && mobileMenu && mobileOverlay) {

  function openMenu() {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");

    mobileOverlay.classList.remove("opacity-0", "invisible");
    mobileOverlay.classList.add("opacity-100");

    document.body.classList.add("overflow-hidden");
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");

    mobileOverlay.classList.remove("opacity-100");
    mobileOverlay.classList.add("opacity-0", "invisible");

    document.body.classList.remove("overflow-hidden");
  }

  menuBtn.addEventListener("click", openMenu);
  closeMenu.addEventListener("click", closeMobileMenu);
  mobileOverlay.addEventListener("click", closeMobileMenu);
}



function toggleMobileMenu() {
  const menuDrawer = document.getElementById('mobileMenu');
  const isClosed = menuDrawer.classList.contains('-translate-x-full');

  if (isClosed) {
    menuDrawer.classList.remove('-translate-x-full');
    menuDrawer.classList.add('translate-x-0');
    // Stops behind-the-scenes scrolling layout anomalies
    document.body.classList.add('overflow-hidden');
  } else {
    menuDrawer.classList.remove('translate-x-0');
    menuDrawer.classList.add('-translate-x-full');
    document.body.classList.remove('overflow-hidden');
  }
}
// 1. Triggered on mouse enter: Begins loading and background video loop execution
function handleMediaPlay(cardContainer) {
  const videoElement = cardContainer.querySelector('video');
  if (videoElement) {
    videoElement.play().catch(error => {
      // Catches browser-level security autoplay block anomalies gracefully
      console.log("Autoplay buffer paused until explicit system link context interaction.");
    });
  }
}
// 2. Triggered on mouse leave: Halts video frame loop and rewinds track safely
function handleMediaPause(cardContainer) {
  const videoElement = cardContainer.querySelector('video');
  if (videoElement) {
    videoElement.pause();
    // Optional: Rewinds video back to frame zero so it restarts cleanly next hover
    videoElement.currentTime = 0;
  }
}



document.addEventListener("DOMContentLoaded", () => {
  const statsSection = document.getElementById("statsSection");
  const countElements = document.querySelectorAll(".count-target");
  const animationDuration = 2000; // Complete counting in exactly 2 seconds (2000ms)

  // Function responsible for the smooth math increments
  const startCounting = () => {
    countElements.forEach(element => {
      const targetValue = parseInt(element.getAttribute("data-target"), 10);
      const startTime = performance.now();

      const updateNumber = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        // Linear progress calculation clamped cleanly between 0 and 1
        const progress = Math.min(elapsedTime / animationDuration, 1);

        // Smoothly multiply total value by animation time progress percentage
        const currentValue = Math.floor(progress * targetValue);
        element.textContent = currentValue;

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          element.textContent = targetValue; // Hard-locks final true number
        }
      };

      requestAnimationFrame(updateNumber);
    });
  };

  // Intersection Observer monitors user scrolling actions
  const scrollObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // If section is visible on screen, execute numbers counting
      if (entry.isIntersecting) {
        startCounting();
        observer.unobserve(entry.target); // Kill observer so it only runs once
      }
    });
  }, {
    threshold: 0.2 // Triggers when at least 20% of the grid section is visible
  });

  if (statsSection) {
    scrollObserver.observe(statsSection);
  }
});





const slider = document.getElementById("testimonialSlider");
const slides = document.querySelectorAll("#testimonialSlider > div");
const nextBtn = document.getElementById("nextTestimonial");
const prevBtn = document.getElementById("prevTestimonial");
let currentSlide = 0;

function updateSlider() {
  slider.style.transform =
    `translateX(-${currentSlide * 100}%)`;
}
nextBtn.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlider();
});

setInterval(() => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlider();
}, 5000);