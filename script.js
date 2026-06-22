AOS.init({
  duration: 1000,
  once: false,
  offset: 100
});


new Typed(".typing", {
  strings: [
    "Java Full Stack Developer",
    "Frontend Designer",
    "Problem Solver",
    "Software Engineer"
  ],

  typeSpeed: 70,
  backSpeed: 45,
  backDelay: 1500,
  loop: true,
  smartBackspace: true
});


tsParticles.load("particles-js", {
  background: {
    color: {
      value: "transparent"
    }
  },

  particles: {
    number: {
      value: 60
    },

    color: {
      value: "#73e2dd"
    },

    links: {
      enable: true,
      distance: 150,
      color: "#73e2dd",
      opacity: 0.3,
      width: 1
    },

    move: {
      enable: true,
      speed: 1,
      direction: "none",
      outModes: {
        default: "bounce"
      }
    },

    opacity: {
      value: 0.5
    },

    size: {
      value: {
        min: 1,
        max: 4
      }
    }
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      },

      onClick: {
        enable: true,
        mode: "push"
      }
    },

    modes: {
      grab: {
        distance: 180,
        links: {
          opacity: 0.6
        }
      },

      push: {
        quantity: 4
      }
    }
  }
});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX - 200 + "px";
  glow.style.top = e.clientY - 200 + "px";
});


const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    nav.style.background =
      "rgba(2,6,23,0.95)";
  }
  else {
    nav.style.background =
      "rgba(2,6,23,0.65)";
  }

});

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop - 200;

    const sectionHeight =
      section.clientHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY <
      sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") ===
      "#" + current
    ) {
      link.classList.add("active");
    }

  });

});



const themeBtn =
  document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

  document.body.classList.toggle("light");

  if (
    document.body.classList.contains(
      "light"
    )
  ) {
    themeBtn.classList.remove("fa-moon");
    themeBtn.classList.add("fa-sun");
  }
  else {
    themeBtn.classList.remove("fa-sun");
    themeBtn.classList.add("fa-moon");
  }

});


const buttons =
  document.querySelectorAll(".btn");

buttons.forEach((btn) => {

  btn.addEventListener("mouseenter",
    () => {
      btn.style.transform =
        "translateY(-8px)";
    }
  );

  btn.addEventListener("mouseleave",
    () => {
      btn.style.transform =
        "translateY(0)";
    }
  );

});


const cards =
  document.querySelectorAll(
    ".card, .project-card"
  );

cards.forEach((card) => {

  card.addEventListener("mousemove",
    (e) => {

      const rect =
        card.getBoundingClientRect();

      const x =
        e.clientX - rect.left;

      const y =
        e.clientY - rect.top;

      card.style.transform =
        `
        perspective(1000px)
        rotateX(${(y - rect.height / 2) / 20}deg)
        rotateY(${(rect.width / 2 - x) / 20}deg)
        translateY(-10px)
        `;
    });

  card.addEventListener("mouseleave",
    () => {

      card.style.transform =
        `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
        `;
    });

});

const topBtn =
  document.createElement("div");

topBtn.innerHTML =
  '<i class="fa-solid fa-arrow-up"></i>';

topBtn.style.position = "fixed";
topBtn.style.right = "30px";
topBtn.style.bottom = "30px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#73e2dd";
topBtn.style.color = "#000";
topBtn.style.display = "flex";
topBtn.style.justifyContent =
  "center";
topBtn.style.alignItems =
  "center";
topBtn.style.cursor = "pointer";
topBtn.style.opacity = "0";
topBtn.style.transition = ".4s";
topBtn.style.zIndex = "999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {
    topBtn.style.opacity = "1";
  }
  else {
    topBtn.style.opacity = "0";
  }

});

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


window.addEventListener("load", () => {

  const profile =
    document.querySelector(".profile-box");

  profile.style.opacity = "0";
  profile.style.transform =
    "scale(.7)";

  setTimeout(() => {

    profile.style.transition =
      "1s";

    profile.style.opacity = "1";
    profile.style.transform =
      "scale(1)";

  }, 400);

});


console.log(
  "%cHey Recruiter 👋",
  "font-size:25px;color:#73e2dd;font-weight:bold;"
);

console.log(
  "%cDesigned and Developed by Abhay Lokare",
  "font-size:16px;color:#ffffff;"
);