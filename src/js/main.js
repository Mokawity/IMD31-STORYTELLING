import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".header-parallax",
    start: "top top",
    end: "+=500",
    scrub: true,
  },
});

tl.add("parallax");

tl.to(
  ".layer-1",
  {
    y: "25%",
  },
  "parallax"
);

tl.to(
  ".layer-3",
  {
    y: "5%",
  },
  "parallax"
);

tl.to(
  ".layer-2",
  {
    y: "-30%",
  },
  "parallax"
);

gsap.to(".img-1", {
  scrollTrigger: {
    trigger: ".img-1",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-1", {
  scrollTrigger: {
    trigger: ".img-1",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-2", {
  scrollTrigger: {
    trigger: ".img-2",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-2", {
  scrollTrigger: {
    trigger: ".img-2",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-3", {
  scrollTrigger: {
    trigger: ".img-3",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-3", {
  scrollTrigger: {
    trigger: ".img-3",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-4", {
  scrollTrigger: {
    trigger: ".img-4",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-4", {
  scrollTrigger: {
    trigger: ".img-4",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-5", {
  scrollTrigger: {
    trigger: ".img-5",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-5", {
  scrollTrigger: {
    trigger: ".img-5",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-6", {
  scrollTrigger: {
    trigger: ".img-6",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-6", {
  scrollTrigger: {
    trigger: ".img-6",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-7", {
  scrollTrigger: {
    trigger: ".img-7",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-7", {
  scrollTrigger: {
    trigger: ".img-7",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-8", {
  scrollTrigger: {
    trigger: ".img-8",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-8", {
  scrollTrigger: {
    trigger: ".img-8",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-9", {
  scrollTrigger: {
    trigger: ".img-9",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-9", {
  scrollTrigger: {
    trigger: ".img-9",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-10", {
  scrollTrigger: {
    trigger: ".img-10",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-10", {
  scrollTrigger: {
    trigger: ".img-10",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-11", {
  scrollTrigger: {
    trigger: ".img-11",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-11", {
  scrollTrigger: {
    trigger: ".img-11",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-12", {
  scrollTrigger: {
    trigger: ".img-12",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-12", {
  scrollTrigger: {
    trigger: ".img-12",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-13", {
  scrollTrigger: {
    trigger: ".img-13",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-13", {
  scrollTrigger: {
    trigger: ".img-13",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-14", {
  scrollTrigger: {
    trigger: ".img-14",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-14", {
  scrollTrigger: {
    trigger: ".img-14",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-15", {
  scrollTrigger: {
    trigger: ".img-15",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-15", {
  scrollTrigger: {
    trigger: ".img-15",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-16", {
  scrollTrigger: {
    trigger: ".img-16",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-16", {
  scrollTrigger: {
    trigger: ".img-16",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-17", {
  scrollTrigger: {
    trigger: ".img-17",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-17", {
  scrollTrigger: {
    trigger: ".img-17",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-18", {
  scrollTrigger: {
    trigger: ".img-18",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-18", {
  scrollTrigger: {
    trigger: ".img-18",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});

gsap.to(".img-19", {
  scrollTrigger: {
    trigger: ".img-19",
    start: "top 100%",
  },
  y: "-40px",
  duration: 1.5,
  delay: 1,
});

gsap.from(".img-19", {
  scrollTrigger: {
    trigger: ".img-19",
    start: "top 100%",
  },
  opacity: 0,
  duration: 2,
  delay: 1,
});
