// --- INFO PANEL LOGIC ---
const infoPanel = document.getElementById('infoPanel');
const infoContent = document.getElementById('infoContent');

function showInfo(exam) {
  const content = {
    ipmat: `<h3>IPMAT (Integrated Program in Management Aptitude Test)</h3><p>...</p>`, // Baad mein pura detail daal lena
    jipmat: `<h3>JIPMAT (Joint Integrated Program in Management Aptitude Test)</h3><p>...</p>`, // Same
    // ... aur exams ka html
  };
  infoContent.innerHTML = content[exam] || '<p>Details not available.</p>';
  infoPanel.classList.add('active');
}

function closeInfo() {
  infoPanel.classList.remove('active');
}

// --- CAROUSEL DOT NAVIGATION ---
function jumpToSlide(index) {
  const images = document.querySelector('.carousel-images');
  images.style.transition = 'transform 0.6s ease-in-out';
  images.style.transform = `translateX(-${index * 100}vw)`;
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

// --- HEADER ON SCROLL EFFECT ---
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// --- MOBILE NAV AND DROPDOWN LOGIC ---
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navbarLinks = document.getElementById('navbarLinks');
  const coursesDropdown = document.getElementById('coursesDropdown');

  // Hamburger menu toggle
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navbarLinks.classList.toggle('open');
    // Close any open dropdown in mobile nav
    coursesDropdown.classList.remove('open');
  });

  // Close mobile nav on link click (optional, improves UX)
  document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', function() {
      if(window.innerWidth < 900){
        hamburger.classList.remove('active');
        navbarLinks.classList.remove('open');
        coursesDropdown.classList.remove('open');
      }
    });
  });

  // Courses dropdown (for mobile: tap to expand)
  coursesDropdown.addEventListener('click', function(e){
    if(window.innerWidth < 900){
      e.preventDefault();
      coursesDropdown.classList.toggle('open');
    }
  });

  // Prevent desktop hover dropdown from interfering on mobile
  window.addEventListener('resize', function(){
    if(window.innerWidth >= 900){
      navbarLinks.classList.remove('open');
      hamburger.classList.remove('active');
      coursesDropdown.classList.remove('open');
    }
  });
});
