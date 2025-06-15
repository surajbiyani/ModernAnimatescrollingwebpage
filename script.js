function loading() {
  const tl = gsap.timeline();

  tl.to(".skyblue", {
    top: "-100%",
    delay: 0.5,
    duration: 5,
    ease: "expo.out",
  });

  tl.from(
    ".skyblue2",
    {
      top: "100%",
      duration: 5,
      ease: "expo.out",
    },
    "anim"
  );

  tl.to(
    ".loader h1",
    {
      duration: 3,
      color: "black",
    },
    "anim"
  );

  tl.to(".loader", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.querySelector(".loader").style.display = "none";
    },
  });
}

loading();

function locomo() {
  // Slow down video playback speed
  const video = document.querySelector(".loader video");
  video.playbackRate = 1;

  // Delay Locomotive Scroll init so loader is done first
  setTimeout(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
  }, 5000);

  document.querySelector(".footer h2").addEventListener("click", () => {
    scroll.scrollTo(0);
  });

  var Elements = document.querySelectorAll(".elements");
  var page2 = document.querySelector(".page2");

  Elements.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      var bgimg = elem.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgimg})`;
    });
  });
}

locomo();
