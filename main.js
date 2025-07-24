// Show Tab code
function showTab(tabId, event) {
  document.getElementById('vision').style.display = 'none';
  document.getElementById('mission').style.display = 'none';
  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.classList.remove('active');
    btn.style.backgroundColor = '#fff';
    btn.style.color = '#1D0D5A';
    btn.style.borderColor = '#ccc';
  });
  document.getElementById(tabId).style.display = 'block';
  event.target.classList.add('active');
  event.target.style.backgroundColor = '#EB5525';
  event.target.style.color = 'white';
  event.target.style.borderColor = '#EB5525';
}

// Info Panel code
const infoPanel = document.getElementById('infoPanel');
const infoContent = document.getElementById('infoContent');

function showInfo(exam) {
 const content = {
        ipmat: `
          <h3>IPMAT (Integrated Program in Management Aptitude Test)</h3>
          <p><strong>A great career opportunity right after Class 12 from IIMs.</strong></p>
          <p><strong>Conducted by:</strong> IIM Indore and IIM Rohtak (separately)</p>
          <p><strong>Score also accepted by:</strong> IIM Ranchi, IIM Amritsar, IIM Shillong</p>
          <p><strong>Note:</strong> IIM Jammu and Bodh Gaya only accept JIPMAT</p>
          <table border="1" cellpadding="6" style="width:100%;margin:10px 0;border-collapse: collapse;">
            <thead>
              <tr><th colspan="2">📘 IPMAT Indore</th></tr>
            </thead>
            <tbody>
              <tr><td>Quant (MCQ)</td><td>~30 Qs, 40 mins</td></tr>
              <tr><td>Quant (Short Ans)</td><td>~15 Qs, 40 mins</td></tr>
              <tr><td>Verbal Ability (MCQ)</td><td>~45 Qs, 40 mins</td></tr>
              <tr><td><strong>Total Duration</strong></td><td><strong>120 minutes</strong></td></tr>
              <tr><td>Total Marks</td><td>100</td></tr>
            </tbody>
          </table>
          <table border="1" cellpadding="6" style="width:100%;margin:10px 0;border-collapse: collapse;">
            <thead>
              <tr><th colspan="2">📘 IPMAT Rohtak</th></tr>
            </thead>
            <tbody>
              <tr><td>Quant</td><td>40 Qs</td></tr>
              <tr><td>Logical Reasoning</td><td>40 Qs</td></tr>
              <tr><td>Verbal Ability</td><td>40 Qs</td></tr>
              <tr><td><strong>Total Duration</strong></td><td><strong>120 minutes</strong></td></tr>
              <tr><td>Total Marks</td><td>160</td></tr>
            </tbody>
          </table>
          <p><strong>Eligibility:</strong> Class 12 passed/appearing, typically 60%+ marks</p>
          <p><b>Age:</b> Born on/after Aug 1, 2005 (General)</p>
          <p><strong>Selection:</strong> Written test + Personal Interview (depends on IIM)</p>
          <p><strong>Why It Matters:</strong> Provides direct admission into IIMs & select top colleges like IIFT, Nirma, TAPMI, NALSAR, and Alliance via your IPMAT Indore score</p>
        `,
      // Keep other exams as-is for now. You can ask me later to update each one in full.
      jipmat: `
          <h3>JIPMAT (Joint Integrated Program in Management Aptitude Test)</h3>
          <p><strong>A unique gateway to IIM Jammu & IIM Bodh Gaya straight after Class 12.</strong></p>
          <p><strong>Conducted by:</strong> National Testing Agency (NTA)</p>
          <p><strong>Accepted by:</strong> IIM Jammu and IIM Bodh Gaya</p>
          <table border="1" cellpadding="6" style="width:100%;margin:10px 0;border-collapse: collapse;">
            <thead>
              <tr><th colspan="2">📘 JIPMAT Exam Structure</th></tr>
            </thead>
            <tbody>
              <tr><td>Quantitative Aptitude</td><td>33 Qs</td></tr>
              <tr><td>Logical Reasoning</td><td>33 Qs</td></tr>
              <tr><td>Verbal Ability</td><td>34 Qs</td></tr>
              <tr><td><strong>Total Duration</strong></td><td><strong>150 minutes</strong></td></tr>
              <tr><td>Total Marks</td><td>400</td></tr>
            </tbody>
          </table>
          <p><strong>Eligibility:</strong> Passed Class 12 with minimum 60% (General); age limits may apply</p>
          <p><strong>Selection:</strong> Based only on JIPMAT score (no interview)</p>
          <p><strong>Why It Matters:</strong> One of the most accessible paths to IIMs with only one test and no PI</p>
        `,
      bms:  `
        <h3>DU BMS (Bachelor of Management Studies)</h3>
<p><strong>Top-rated undergraduate management program offered by Delhi University colleges.</strong></p>
<p><strong>Conducted by:</strong> National Testing Agency (NTA) via <strong>CUET UG</strong></p>
<p><strong>Top Colleges:</strong> Shaheed Sukhdev College of Business Studies (SSCBS), Deen Dayal Upadhyaya College, Keshav Mahavidyalaya, College of Vocational Studies, etc.</p>

<table border="1" cellpadding="6" style="width:100%;margin:10px 0;border-collapse: collapse;">
  <thead>
    <tr><th colspan="2">📘 CUET for BMS (General Pattern)</th></tr>
  </thead>
  <tbody>
    <tr><td>General Test</td><td>50 Qs (Aptitude, Reasoning, GK)</td></tr>
    <tr><td>English</td><td>40–50 Qs</td></tr>
    <tr><td>Maths (Optional)</td><td>40 Qs (for some colleges)</td></tr>
    <tr><td><strong>Total Duration</strong></td><td><strong>2–2.5 hours</strong></td></tr>
  </tbody>
</table>

<p><strong>Eligibility:</strong> Class 12 passed/appearing from any stream (some colleges require Maths in 12th)</p>
<p><strong>Admission Process:</strong> Based on CUET UG score + centralized DU counseling via Common Seat Allocation System (CSAS)</p>
<p><strong>Why It Matters:</strong> DU BMS is among the most competitive UG management programs in India with top-tier placements and faculty.</p>
`,
      set: `
        <h3>SET – Symbiosis Entrance Test (BBA)</h3>
<p><strong>Entrance exam for Symbiosis International (Deemed) University’s BBA programs.</strong></p>
<p><strong>Conducted by:</strong> Symbiosis International University</p>
<p><strong>Accepted by:</strong> Symbiosis Pune (SCMS), Noida, Nagpur, Hyderabad</p>

<table border="1" cellpadding="6" style="width:100%;margin:10px 0;border-collapse: collapse;">
  <thead>
    <tr><th colspan="2">📘 SET BBA Exam Structure</th></tr>
  </thead>
  <tbody>
    <tr><td>General English</td><td>16 Qs</td></tr>
    <tr><td>Quantitative Aptitude</td><td>16 Qs</td></tr>
    <tr><td>General Awareness</td><td>16 Qs</td></tr>
    <tr><td>Analytical & Logical Reasoning</td><td>12 Qs</td></tr>
    <tr><td><strong>Total Marks</strong></td><td><strong>60</strong></td></tr>
    <tr><td><strong>WAT (Essay)</strong></td><td>Yes – post-exam (15 mins)</td></tr>
  </tbody>
</table>

<p><strong>Mode:</strong> Computer-Based Test (CBT)</p>
<p><strong>Eligibility:</strong> Passed/appearing Class 12 (any stream)</p>
<p><strong>Selection:</strong> Based on SET score + PI-WAT rounds</p>
<p><strong>Why It Matters:</strong> SCMS Pune and other Symbiosis campuses offer excellent infrastructure, industry exposure, and placements.</p>
`,
      npat: `
       <h3>NPAT (NMIMS Programs After Twelfth)</h3>
       <p><strong>Official entrance exam for BBA & other UG programs at NMIMS campuses.</strong></p>
       <p><strong>Conducted by:</strong> NMIMS University (Deemed to be University)</p>
       <p><strong>Accepted by:</strong> NMIMS Mumbai, Navi Mumbai, Bengaluru, Hyderabad, Indore, Shirpur</p>

<table border="1" cellpadding="6" style="width:100%;margin:10px 0;border-collapse: collapse;">
  <thead>
    <tr><th colspan="2">📘 NPAT Exam Structure</th></tr>
  </thead>
  <tbody>
    <tr><td>Quantitative & Numerical Ability</td><td>40 Qs</td></tr>
    <tr><td>Logical Reasoning</td><td>40 Qs</td></tr>
    <tr><td>Verbal Ability</td><td>40 Qs</td></tr>
    <tr><td><strong>Total Duration</strong></td><td><strong>100 minutes</strong></td></tr>
    <tr><td>Total Marks</td><td>120</td></tr>
  </tbody>
</table>

<p><strong>Eligibility:</strong> Passed/appearing in Class 12 (any stream). Minimum 60% for Mumbai campus.</p>
<p><strong>Mode:</strong> Online, Proctored from Home or Test Centre (varies yearly)</p>
<p><strong>Courses Offered:</strong> BBA, B.Com (Hons), B.Sc Finance, Branding & Advertising, Liberal Arts</p>
<p><strong>Why It Matters:</strong> NMIMS BBA is among the top private UG management programs in India, with great placements and international exposure.</p>
`,
      christ: `
        <h3>Christ University BBA Entrance</h3>
<p><strong>Institutional-level entrance test for various BBA specializations.</strong></p>
<p><strong>Conducted by:</strong> Christ (Deemed to be University)</p>
<p><strong>Campuses:</strong> Bengaluru (Main), Delhi NCR, Pune-Lavasa, and others</p>

<table border="1" cellpadding="6" style="width:100%;margin:10px 0;border-collapse: collapse;">
  <thead>
    <tr><th colspan="2">📘 Christ BBA Entrance Pattern</th></tr>
  </thead>
  <tbody>
    <tr><td>English Language</td><td>25 Qs</td></tr>
    <tr><td>General Knowledge</td><td>20 Qs</td></tr>
    <tr><td>Quantitative Aptitude</td><td>20 Qs</td></tr>
    <tr><td>Reasoning</td><td>25 Qs</td></tr>
    <tr><td>Data Analysis & Interpretation</td><td>10 Qs</td></tr>
    <tr><td><strong>Total</strong></td><td><strong>100 Qs, 120 mins</strong></td></tr>
  </tbody>
</table>

<p><strong>Selection Process:</strong> Entrance Test + Micro Presentation + Personal Interview</p>
<p><strong>Why It Matters:</strong> Christ is a top private university with diverse BBA options and strong academic culture.</p>
`,
      xaviers: `
        <h3>St. Xavier’s BMS Entrance Test</h3>
<p><strong>Institute-level entrance test for the Bachelor of Management Studies program.</strong></p>
<p><strong>Conducted by:</strong> St. Xavier’s College (Autonomous), Mumbai</p>

<table border="1" cellpadding="6" style="width:100%;margin:10px 0;border-collapse: collapse;">
  <thead>
    <tr><th colspan="2">📘 Xavier’s BMS Entrance Pattern</th></tr>
  </thead>
  <tbody>
    <tr><td>English Language & Comprehension</td><td>20 Qs</td></tr>
    <tr><td>Logical Reasoning</td><td>20 Qs</td></tr>
    <tr><td>Quantitative Skills</td><td>20 Qs</td></tr>
    <tr><td>General Knowledge & Current Affairs</td><td>20 Qs</td></tr>
    <tr><td>Critical Thinking</td><td>20 Qs</td></tr>
    <tr><td><strong>Total</strong></td><td><strong>100 Qs</strong></td></tr>
  </tbody>
</table>

<p><strong>Eligibility:</strong> Passed Class 12 with minimum marks; age restrictions apply</p>
<p><strong>Selection:</strong> Entrance Test + Academic Performance (Class 12)</p>
<p><strong>Why It Matters:</strong> Xavier’s Mumbai is one of India’s most prestigious institutions for liberal and management education.</p>
` ,
    };
      infoContent.innerHTML = content[exam] || '<p>Details not available.</p>';
      infoPanel.classList.add('active');
    }
  // ... (poori showInfo function yahan)

function closeInfo() {
  infoPanel.classList.remove('active');
}

// Header scroll shadow
window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Hamburger and mobile nav code
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById('hamburger');
  const navbarLinks = document.getElementById('navbarLinks');
  const coursesDropdown = document.getElementById('coursesDropdown');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navbarLinks.classList.toggle('open');
    coursesDropdown.classList.remove('open');
  });

  document.querySelectorAll('.navbar-links a').forEach(link => {
    link.addEventListener('click', function() {
      if(window.innerWidth < 900){
        hamburger.classList.remove('active');
        navbarLinks.classList.remove('open');
        coursesDropdown.classList.remove('open');
      }
    });
  });

  coursesDropdown.addEventListener('click', function(e){
    if(window.innerWidth < 900){
      e.preventDefault();
      coursesDropdown.classList.toggle('open');
    }
  });

  window.addEventListener('resize', function(){
    if(window.innerWidth >= 900){
      navbarLinks.classList.remove('open');
      hamburger.classList.remove('active');
      coursesDropdown.classList.remove('open');
    }
  });

  // Carousel code
  let currentSlide = 0;
  let slideTimer;
  const images = document.querySelector('.carousel-images');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = images.children.length;

  function showSlide(index) {
    images.style.transition = 'transform 0.6s cubic-bezier(.75,0,.25,1)';
    images.style.transform = `translateX(-${index * 100}vw)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function jumpToSlide(index) {
    showSlide(index);
    resetAutoSlide();
  }

  function autoSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
    slideTimer = setTimeout(autoSlide, 4000);
  }

  function resetAutoSlide() {
    clearTimeout(slideTimer);
    slideTimer = setTimeout(autoSlide, 4000);
  }

  dots.forEach((dot, i) => {
    dot.onclick = function() { jumpToSlide(i); };
  });

  showSlide(currentSlide);
  slideTimer = setTimeout(autoSlide, 4000);

  // Attach globally if you use jumpToSlide from inline HTML
  window.jumpToSlide = jumpToSlide;
});
