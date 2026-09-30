// ==========================================================================
// ADWAY DIGITAL - 3D INTERACTIVE AGENCY LOGIC
// Domain: adwaydigital.org | WhatsApp: +91-9760094558 | Call: 8923815818
// ==========================================================================

const WHATSAPP_NUMBER = "919760094558";
const CALLING_NUMBER = "8923815818";

// Services database (All 12 services from flyer - NO PRICES)
const SERVICES_DATA = [
  {
    id: "ai_videos",
    title: "AI Videos",
    category: "ai",
    badge: "AI Powered",
    icon: "fa-solid fa-robot",
    description: "Create stunning, realistic AI-powered videos with AI avatars, multi-lingual voiceovers, and script writing.",
    features: ["Realistic AI Avatars", "Multi-lingual Voiceover", "HD & 4K Video Render", "Fast 24-Hour Turnaround"]
  },
  {
    id: "ai_presentation",
    title: "AI Presentation",
    category: "ai",
    badge: "AI Powered",
    icon: "fa-solid fa-display",
    description: "Professional & engaging slide presentations crafted with AI design aesthetics for business pitches.",
    features: ["Custom Slide Decks", "Infographics & Charts", "Brand Theme Customization", "PowerPoint & PDF Formats"]
  },
  {
    id: "bulk_sms",
    title: "Bulk SMS",
    category: "messaging",
    badge: "Instant Reach",
    icon: "fa-solid fa-comment-dots",
    description: "Reach your audience in seconds with DLT-verified promotional and transactional SMS gateways.",
    features: ["Instant High-Speed Gateway", "Custom Sender ID", "DLT Approved Templates", "Real-Time Delivery Reports"]
  },
  {
    id: "whatsapp_message",
    title: "WhatsApp Message",
    category: "messaging",
    badge: "High Open Rate",
    icon: "fa-brands fa-whatsapp",
    description: "Connect directly with your customers on WhatsApp with interactive buttons, images, and catalog broadcasts.",
    features: ["Rich Media Attachments", "Interactive Action Buttons", "Targeted Broadcast Lists", "Automated Lead Responses"]
  },
  {
    id: "voice_sms",
    title: "Voice SMS",
    category: "messaging",
    badge: "Voice Call",
    icon: "fa-solid fa-phone-volume",
    description: "Send voice messages with ease using pre-recorded automated OBD call broadcasting.",
    features: ["Pre-recorded Audio Voice Broadcast", "Multi-language Audio Support", "Auto-redial on Busy Lines", "Detailed Call Logs"]
  },
  {
    id: "social_marketing",
    title: "Facebook, Instagram & YouTube Marketing",
    category: "digital",
    badge: "Brand Growth",
    icon: "fa-solid fa-bullhorn",
    description: "Boost your brand presence, acquire leads, and grow followers across Facebook, Instagram, and YouTube.",
    features: ["Targeted Social Media Ads", "Reels & Shorts Content", "Audience Demographics Setup", "Lead Generation & Analytics"]
  },
  {
    id: "led_van_ads",
    title: "LED Van Ads",
    category: "outdoor",
    badge: "Mobile Outdoor",
    icon: "fa-solid fa-truck-front",
    description: "On-the-go advertising that works! HD LED screen vans moving through high-traffic markets and city locations.",
    features: ["High-Brightness Outdoor Displays", "Custom City Route Mapping", "Audio Broadcast Sound System", "Geo-Targeted Local Visibility"]
  },
  {
    id: "hoarding",
    title: "Hoarding",
    category: "outdoor",
    badge: "Mass Visibility",
    icon: "fa-solid fa-square-poll-vertical",
    description: "Big visibility, bigger impact! Prime location billboards and hoardings for maximum brand awareness.",
    features: ["Prime Highways & City Junctions", "All-Weather Heavy Flex Print", "Night Illumination Lighting", "Complete Maintenance Support"]
  },
  {
    id: "animation_ad",
    title: "Animation Ad",
    category: "animation",
    badge: "Creative 2D/3D",
    icon: "fa-solid fa-wand-magic-sparkles",
    description: "Creative 2D and 3D animation ads that bring your brand story to life and captivate social media viewers.",
    features: ["Custom Character Motion", "Catchy Visual & Special Effects", "Background Score Included", "Optimized for Instagram & YouTube"]
  },
  {
    id: "jingles",
    title: "Jingles",
    category: "animation",
    badge: "Audio Branding",
    icon: "fa-solid fa-music",
    description: "Memorable sound, catchy intros, and custom music jingles created specifically for your brand.",
    features: ["Professional Vocal Recording", "Studio Music Composition", "Radio & Digital Ready Audio", "Commercial Use Rights"]
  },
  {
    id: "wedding_invitation",
    title: "Wedding & Birthday Invitation",
    category: "animation",
    badge: "Special Moments",
    icon: "fa-solid fa-heart",
    description: "Beautiful digital video invites, animated caricatures, and royal cards for special moments.",
    features: ["3D Royal & Floral Themes", "Custom Photos & Details", "WhatsApp Shareable Video", "Background Music Selection"]
  },
  {
    id: "video_editing",
    title: "Video Editing",
    category: "animation",
    badge: "Professional Edit",
    icon: "fa-solid fa-scissors",
    description: "Turn your ideas into amazing videos with professional cuts, captions, color grading, and motion graphics.",
    features: ["Reels & Shorts Formatting", "Engaging Subtitles & Graphics", "Color Grading & Sound Polish", "Copyright-free Audio"]
  },
  {
    id: "app_web_dev",
    title: "Android / iOS App & 3D Web Development",
    category: "digital",
    badge: "App & 3D Web",
    icon: "fa-solid fa-mobile-screen-button",
    description: "Professional Android & iOS mobile application development along with responsive 2D, 3D, and interactive website development.",
    features: ["Native Android & iOS Mobile Apps", "2D, 3D & Interactive Websites", "Mobile-First Responsive UI/UX", "Fast Performance & Secure Backend"]
  }
];

// Initialize UI when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderMarquee();
  renderServices("all");
  setupTabFilters();
  setupMobileNav();
  setupSmoothScroll();
  setupNavbarScroll();
  setupEnquiryForm();
  setup3DTiltEffect();
  setup3DCursorSpotlight();
  initThreeJSBackground();
});

// Interactive 3D Cursor Spotlight Blob
function setup3DCursorSpotlight() {
  const glow = document.getElementById("cursor-glow-3d");
  if (!glow) return;

  window.addEventListener("mousemove", (e) => {
    glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
  });
}

// Three.js 3D Multi-Color Gradient Wireframe Background Engine
function initThreeJSBackground() {
  const canvas = document.getElementById("hero-3d-canvas");
  if (!canvas || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.z = 8;

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 1. Original 3D TorusKnot Mesh with Multi-Color Rainbow Vertex Gradient
  const torusGeo = new THREE.TorusKnotGeometry(2.4, 0.65, 140, 18);
  const vertexCount = torusGeo.attributes.position.count;
  const colorsArray = new Float32Array(vertexCount * 3);
  const tempColor = new THREE.Color();

  for (let i = 0; i < vertexCount; i++) {
    // Smooth HSL multi-color rainbow spectrum transition across 3D mesh
    const hue = (i / vertexCount) % 1.0;
    tempColor.setHSL(hue, 0.95, 0.58);

    colorsArray[i * 3] = tempColor.r;
    colorsArray[i * 3 + 1] = tempColor.g;
    colorsArray[i * 3 + 2] = tempColor.b;
  }

  torusGeo.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

  const torusMat = new THREE.MeshBasicMaterial({
    vertexColors: true,
    wireframe: true,
    transparent: true,
    opacity: 0.38
  });

  const torusKnot = new THREE.Mesh(torusGeo, torusMat);
  scene.add(torusKnot);

  // 2. Orbiting Multi-Color Polyhedrons
  const palette = [0x4353ff, 0xec4899, 0x7c3aed, 0xf59e0b, 0x06b6d4, 0x25d366];
  const octaGroup = new THREE.Group();

  for (let i = 0; i < 16; i++) {
    const octaGeo = new THREE.OctahedronGeometry(Math.random() * 0.4 + 0.2);
    const octaMat = new THREE.MeshBasicMaterial({
      color: palette[i % palette.length],
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const octa = new THREE.Mesh(octaGeo, octaMat);
    octa.position.set(
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 6
    );
    octaGroup.add(octa);
  }
  scene.add(octaGroup);

  // 3. Multi-Colored Floating Particle Starfield
  const particlesCount = 200;
  const positions = new Float32Array(particlesCount * 3);
  const particleColors = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

    tempColor.setHSL((i / particlesCount), 0.9, 0.6);
    particleColors[i * 3] = tempColor.r;
    particleColors[i * 3 + 1] = tempColor.g;
    particleColors[i * 3 + 2] = tempColor.b;
  }

  const particlesGeo = new THREE.BufferGeometry();
  particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

  const particlesMat = new THREE.PointsMaterial({
    size: 0.055,
    vertexColors: true,
    transparent: true,
    opacity: 0.7
  });
  const particleSystem = new THREE.Points(particlesGeo, particlesMat);
  scene.add(particleSystem);

  // Mouse interaction
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  window.addEventListener('mousemove', (event) => {
    mouseX = (event.clientX - windowHalfX) * 0.0015;
    mouseY = (event.clientY - windowHalfY) * 0.0015;
  });

  // Handle Resize
  window.addEventListener('resize', () => {
    if (!canvas) return;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);

    targetX += (mouseX - targetX) * 0.05;
    targetY += (mouseY - targetY) * 0.05;

    torusKnot.rotation.x += 0.004;
    torusKnot.rotation.y += 0.006;
    torusKnot.rotation.z += targetX * 0.5;

    octaGroup.rotation.y -= 0.003;
    octaGroup.rotation.x += targetY * 0.5;

    particleSystem.rotation.y += 0.001;

    scene.rotation.y = targetX * 0.8;
    scene.rotation.x = -targetY * 0.8;

    renderer.render(scene, camera);
  }

  animate();
}

// Advanced 3D Mouse Movement Card Tilt & Light Glare Effect
function setup3DTiltEffect() {
  const cards = document.querySelectorAll('.bento-card:not(.enquiry-3d-card), .metric-card, .marquee-card');
  cards.forEach(card => {
    // Add glare layer if not present
    if (!card.querySelector('.card-glare-3d')) {
      const glare = document.createElement('div');
      glare.className = 'card-glare-3d';
      glare.style.cssText = `
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        border-radius: inherit;
        pointer-events: none;
        background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 60%);
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 5;
      `;
      card.style.position = 'relative';
      card.style.overflow = 'hidden';
      card.appendChild(glare);
    }

    const glare = card.querySelector('.card-glare-3d');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -14;
      const rotateY = ((x - centerX) / centerX) * 14;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(18px)`;

      if (glare) {
        const percentX = (x / rect.width) * 100;
        const percentY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(255, 255, 255, 0.35) 0%, rgba(67, 83, 255, 0.05) 50%, transparent 80%)`;
        glare.style.opacity = '1';
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
      if (glare) glare.style.opacity = '0';
    });
  });
}

// Render Infinite Marquee Ticker Track
function renderMarquee() {
  const track1 = document.getElementById("marquee-track-1");
  const track2 = document.getElementById("marquee-track-2");
  if (!track1) return;

  const listDuplicated = [...SERVICES_DATA, ...SERVICES_DATA];

  const htmlTrack1 = listDuplicated.map(service => `
    <div class="marquee-card">
      <div>
        <div class="bento-header">
          <div class="service-icon-box">
            <i class="${service.icon}"></i>
          </div>
          <span class="service-badge-pill">${service.badge}</span>
        </div>
        <h3 class="service-title-text" style="font-size: 17px; margin-bottom: 6px;">${service.title}</h3>
        <p class="service-desc-text" style="font-size: 12.5px; margin-bottom: 12px; line-clamp: 2; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${service.description}</p>
      </div>

      <button onclick="enquireSpecificService('${service.title}')" class="btn-wa-enquire" style="padding: 8px 12px; font-size: 12px;">
        <i class="fa-brands fa-whatsapp"></i> Enquire on WhatsApp
      </button>
    </div>
  `).join('');

  track1.innerHTML = htmlTrack1;

  if (track2) {
    const reversedList = [...SERVICES_DATA].reverse();
    const track2Duplicated = [...reversedList, ...reversedList];
    track2.innerHTML = track2Duplicated.map(service => `
      <div class="marquee-card">
        <div>
          <div class="bento-header">
            <div class="service-icon-box">
              <i class="${service.icon}"></i>
            </div>
            <span class="service-badge-pill">${service.badge}</span>
          </div>
          <h3 class="service-title-text" style="font-size: 17px; margin-bottom: 6px;">${service.title}</h3>
          <p class="service-desc-text" style="font-size: 12.5px; margin-bottom: 12px; line-clamp: 2; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${service.description}</p>
        </div>

        <button onclick="enquireSpecificService('${service.title}')" class="btn-wa-enquire" style="padding: 8px 12px; font-size: 12px;">
          <i class="fa-brands fa-whatsapp"></i> Enquire on WhatsApp
        </button>
      </div>
    `).join('');
  }
}

// Render Services Grid
function renderServices(filterCategory = "all") {
  const container = document.getElementById("services-grid");
  if (!container) return;

  const filtered = filterCategory === "all" 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(item => item.category === filterCategory);

  container.innerHTML = filtered.map(service => `
    <div class="bento-card" data-category="${service.category}">
      <div>
        <div class="bento-header">
          <div class="service-icon-box">
            <i class="${service.icon}"></i>
          </div>
          <span class="service-badge-pill">${service.badge}</span>
        </div>
        <h3 class="service-title-text">${service.title}</h3>
        <p class="service-desc-text">${service.description}</p>
        
        <ul class="service-bullets">
          ${service.features.map(f => `<li><i class="fa-solid fa-circle-check text-blue-600 mr-2" style="color:#4353ff; margin-right:8px;"></i> ${f}</li>`).join('')}
        </ul>
      </div>

      <div style="padding-top: 16px; border-top: 1px solid #e2e8f0;">
        <button onclick="enquireSpecificService('${service.title}')" class="btn-wa-enquire">
          <i class="fa-brands fa-whatsapp text-lg"></i> Enquire for ${service.title}
        </button>
      </div>
    </div>
  `).join('');

  setup3DTiltEffect();
}

// Enquire strictly for ONE specific product/service via WhatsApp
function enquireSpecificService(serviceTitle) {
  const message = `Hello Adway Digital! 👋\n\nI am interested in inquiring about: *${serviceTitle}*.\nPlease share details and options for this service. Thank you!`;
  const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  openWhatsAppSafe(url);
}

// Setup Tab Filter Event Listeners
function setupTabFilters() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const category = tab.getAttribute("data-filter");
      renderServices(category);
    });
  });
}

// Interactive 3D Service Enquiry Form Logic
function setupEnquiryForm() {
  const form = document.getElementById("general-enquiry-form");
  const chips = document.querySelectorAll(".chip-3d");
  const selectElem = document.getElementById("enq-service");

  // Sync 3D chips with select dropdown
  if (chips.length > 0 && selectElem) {
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        const val = chip.getAttribute("data-value");
        if (val) {
          selectElem.value = val;
          chips.forEach(c => c.classList.remove("active"));
          chip.classList.add("active");
        }
      });
    });

    selectElem.addEventListener("change", () => {
      const selectedVal = selectElem.value;
      chips.forEach(c => {
        if (c.getAttribute("data-value") === selectedVal) {
          c.classList.add("active");
        } else {
          c.classList.remove("active");
        }
      });
    });
  }

  if (form) {
    form.addEventListener("submit", sendDirectWhatsAppEnquiry);
  }
}

// Global direct WhatsApp enquiry opening function
function sendDirectWhatsAppEnquiry(e) {
  if (e && e.preventDefault) e.preventDefault();

  const nameElem = document.getElementById("enq-name");
  const selectElem = document.getElementById("enq-service");
  const msgElem = document.getElementById("enq-message");

  const nameVal = nameElem && nameElem.value.trim() ? nameElem.value.trim() : "Valued Client";
  const selectedService = selectElem && selectElem.value ? selectElem.value : "Digital Marketing Services";
  const userMsg = msgElem && msgElem.value.trim() ? msgElem.value.trim() : "Please share details and campaign options.";

  const message = `Hello Adway Digital! 👋\n\n*NEW SERVICE ENQUIRY*\n• *Name*: ${nameVal}\n• *Service Requested*: ${selectedService}\n• *Requirements*: ${userMsg}\n\nPlease share details and options for this service. Thank you!`;

  const waUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
  
  openWhatsAppSafe(waUrl);
}

// Mobile Navigation Toggle
function setupMobileNav() {
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const icon = navToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        const icon = navToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-xmark");
        }
      });
    });
  }
}

// Sticky Navbar Scroll
function setupNavbarScroll() {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });
}

// Smooth Scrolling
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
}

function openWhatsAppSafe(url) {
  try {
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = url;
    }
  } catch (err) {
    window.location.href = url;
  }
}

// Adway Digital Direct Email Enquiry Handler (digitaladway@gmail.com)
function sendDirectAdwayEmailEnquiry(e) {
  if (e && e.preventDefault) e.preventDefault();

  const nameElem = document.getElementById("enq-name");
  const mobileElem = document.getElementById("enq-mobile");
  const emailElem = document.getElementById("enq-email");
  const selectElem = document.getElementById("enq-service");
  const msgElem = document.getElementById("enq-message");

  const nameVal = nameElem && nameElem.value.trim() ? nameElem.value.trim() : "Valued Client";
  const mobileVal = mobileElem && mobileElem.value.trim() ? mobileElem.value.trim() : "";
  const emailVal = emailElem && emailElem.value.trim() ? emailElem.value.trim() : "Not Provided";
  const selectedService = selectElem && selectElem.value ? selectElem.value : "General Information Enquiry";
  const userMsg = msgElem && msgElem.value.trim() ? msgElem.value.trim() : "Please share details and campaign options.";

  if (!nameVal || nameVal === "Valued Client") {
    alert("Full Name is mandatory. Please enter your full name.");
    if (nameElem) nameElem.focus();
    return;
  }
  if (!mobileVal) {
    alert("Mobile Number is mandatory. Please enter your mobile number.");
    if (mobileElem) mobileElem.focus();
    return;
  }
  if (!userMsg || userMsg === "Please share details and campaign options.") {
    alert("Enquiry Message is mandatory. Please enter your enquiry details.");
    if (msgElem) msgElem.focus();
    return;
  }

  const subject = `Adway Digital Service Enquiry: ${selectedService} - ${nameVal}`;
  const body = `Hello Adway Digital Team,\n\nA new enquiry has been submitted on adwaydigital.org:\n\nCLIENT ENQUIRY DETAILS:\n----------------------------------------\n• Full Name: ${nameVal}\n• Mobile Number (Mandatory): ${mobileVal}\n• Email Address: ${emailVal}\n• Service Enquired: ${selectedService}\n• Message / Requirements: ${userMsg}\n----------------------------------------\n\nPlease reach out to me at ${mobileVal} or ${emailVal}.\n\nThank you!`;

  // 1. Send via FormSubmit API to digitaladway@gmail.com inbox
  try {
    fetch("https://formsubmit.co/ajax/digitaladway@gmail.com", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: subject,
        name: nameVal,
        mobile: mobileVal,
        email: emailVal,
        service: selectedService,
        message: userMsg
      })
    }).catch(err => console.log("FormSubmit API background post:", err));
  } catch (err) {
    console.log(err);
  }

  // 2. Open Mailto fallback
  const mailtoUrl = `mailto:digitaladway@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;

  alert("Thank you! Your enquiry for " + selectedService + " is being sent directly to digitaladway@gmail.com.");
}
