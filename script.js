window.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const main = document.getElementById("main-content");

  setTimeout(() => {
    if (loader) loader.style.opacity = "0";

    setTimeout(() => {
      if (loader) loader.style.display = "none";
      if (main) {
        main.removeAttribute("hidden");
        main.style.visibility = "visible";
        main.style.opacity = "1";
        main.style.transition = "opacity 0.5s ease";

        setTimeout(() => {
          main.style.transition = "opacity 0.5s ease";
          main.style.opacity = "1";

          // ✅ Initialize AOS ONLY after content is visible
          AOS.init({ once: true, duration: 800 });
          AOS.refresh();
          window.dispatchEvent(new Event('load'));

        }, 100);
      }
    }, 600);
  }, 2500);
});



// Detect when sections exit the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (!entry.isIntersecting) {
        el.classList.add("fade-out");
      } else {
        el.classList.remove("fade-out");
      }
    });
  },
  {
    threshold: 0.25, // Start fading out when only 25% is left in view
  }
);

// Observe each section
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});





// === Music Toggle ===
const bgMusic = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");
const musicIcon = document.getElementById("music-icon");
let musicOn = true;

musicToggle.addEventListener("click", () => {
  if (musicOn) {
    bgMusic.volume = 1;
    const fadeOut = setInterval(() => {
      if (bgMusic.volume > 0.1) {
        bgMusic.volume -= 0.1;
      } else {
        bgMusic.pause();
        clearInterval(fadeOut);
      }
    }, 100);
    musicIcon.src = "assets/speaker-off.png";
  } else {
    bgMusic.volume = 0;
    bgMusic.play().catch(() => {});
    const fadeIn = setInterval(() => {
      if (bgMusic.volume < 0.9) {
        bgMusic.volume += 0.1;
      } else {
        clearInterval(fadeIn);
      }
    }, 100);
    musicIcon.src = "assets/speaker-on.png";
  }
  musicOn = !musicOn;
});

// === Theme Toggle ===
const themeIcon = document.getElementById("theme-icon");
let isDark = true;

themeIcon.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  themeIcon.src = isDark ? "assets/moon.png" : "assets/sun.png";
  isDark = !isDark;
});

// === Mouse Trail Effect ===
document.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "mouse-trail";
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 600);
});

// === Custom Cursor Follow ===
const cursor = document.getElementById("custom-cursor");
let mouseMoved = false;
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
document.addEventListener("mousemove", (e) => {
  if (!mouseMoved) {
    mouseMoved = true;

    // Show custom cursor
    if (cursor) cursor.style.display = "block";

    // Fade in particles
    const particles = document.getElementById("particles-js");
    if (particles) particles.style.opacity = "1";
  }

  // Move cursor
  if (cursor) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  }
});

// === Allow Autoplay After Click ===
document.addEventListener("click", () => {
  bgMusic.play().catch(() => {});
}, { once: true });

// === Load ParticlesJS ===
particlesJS.load("particles-js", "particles-config.js", function () {
  console.log("Particles loaded.");
});

// === Hamburger Menu ===
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// === Typing Animation ===
const typedTextElement = document.getElementById("typed-text");
const phrases = ["We Rise Above All", "Welcome to the Risers...", "Join the Adventure!", "Conquer. Create. Connect."];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentPhrase = phrases[phraseIndex];
  const currentText = currentPhrase.substring(0, charIndex);
  typedTextElement.textContent = currentText;

  if (!isDeleting && charIndex < currentPhrase.length) {
    charIndex++;
    typingSpeed = 100;
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    typingSpeed = 50;
  } else {
    isDeleting = !isDeleting;
    typingSpeed = isDeleting ? 1000 : 500;
    if (!isDeleting) {
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(type, typingSpeed);
}
type();
