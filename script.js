gsap.registerPlugin(TextPlugin);
const body = document.querySelector("body");

function leaveTransition() {
  return gsap.to(".transition", {
    height: "100%",
    duration: 0.8,
    ease: "power4.inOut",
  });
}

function enterTransition() {
  return gsap.to(".transition", {
    delay: 0.3,
    duration: 0.8,
    height: 0,
    ease: "power4.inOut",
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      name: "opacity-transition",
      async leave() {
        await leaveTransition();
      },
      enter(data) {
        enterTransition();
        if (data.next.namespace == "skills") {
          skillsAnimation();
        } else if (data.next.namespace == "projects") {
          projectsAnimation();
        } else if (data.next.namespace == "home") {
          indexAnimation();
        }
      },
      once(data) {
        enterTransition();
        if (data.next.namespace == "skills") {
          skillsAnimation();
        } else if (data.next.namespace == "projects") {
          projectsAnimation();
        } else if (data.next.namespace == "home") {
          indexAnimation();
        }
      },
      after() {},
    },
  ],
});

function indexAnimation() {
  gsap.fromTo(
    ".index-overlay__hello",
    {
      text: "Привет",
    },
    {
      text: "Hello",
      duration: 1,
      delay: 1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    }
  );

  gsap.fromTo(
    ".index-overlay__name",
    {
      text: "Я Ваге Галстян",
    },
    {
      text: "I`m Vahe Galstyan",
      duration: 1,
      delay: 1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    }
  );

  gsap.fromTo(
    ".index-overlay__introduction",
    {
      text: "Давайте знакомиться!",
    },
    {
      text: "Let's get acquainted!",
      duration: 1,
      delay: 1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    }
  );

  gsap.fromTo(
    ".index-overlay__button",
    {
      text: "НАВЫКИ",
    },
    {
      text: "SKILLS",
      duration: 1,
      delay: 1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    }
  );
  body.style.overflow = "hidden";
}

//skills
function skillsAnimation() {
  let tl = gsap.timeline();

  gsap.fromTo(
    ".skills-overlay__title",
    {
      text: "Навыки",
    },
    {
      text: "Skills",
      duration: 1,
      delay: 1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    }
  );

  gsap.fromTo(
    ".skills-overlay__bottom-button",
    {
      text: "ПРОЕКТЫ",
    },
    {
      text: "PROJECTS",
      duration: 1,
      delay: 1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    }
  );

  gsap.fromTo(
    ".skills-overlay__top-button",
    {
      text: "ДОМОЙ",
    },
    {
      text: "HOME",
      duration: 1,
      delay: 1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    }
  );

  tl.to(".skills__item", {
    delay: 1,
    duration: 1,
    backgroundColor: "white",
    color: "black",
    stagger: {
      each: 0.2,
      grid: "auto",
      from: "start",
    },
  }).to(".skills__item", {
    duration: 1,
    repeat: -1,
    yoyo: true,
    boxShadow: `0px 0px 51px 0px rgba(255, 255, 255, 0.35)`,
    stagger: {
      each: 0.1,
      grid: "auto",
      from: "start",
    },
  });
}

function projectsAnimation() {
  gsap.fromTo(
    ".projects-overlay__title",
    {
      text: "Проекты",
    },
    {
      text: "Projects",
      // width: "20vw",
      duration: 1,
      delay: 1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    }
  );

  gsap.fromTo(
    ".projects-overlay__top-button",
    {
      text: "НАВЫКИ",
    },
    {
      text: "SKILLS",
      duration: 1,
      delay: 1,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    }
  );

  body.style.overflow = "auto";
}
