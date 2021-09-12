const logoSVG = document.querySelector("#logo__svg");
const contentAnimation = document.querySelector(".content__animation");
const headerLogo = document.querySelector("#header__logo");
const path = document.querySelector("#line__path");
const logoLink = document.querySelectorAll(".logo__link");

const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;

path.style.strokeDashoffset = pathLength;

path.getBoundingClientRect();

const pathLengthObj = {
  5: 200,
  6: 400,
  7: 550,
  8: 750,
  9: 800,
  10: 900,
  11: 1000,
  12: 1100,
  13: 1200,
  14: 1300,
  15: 1450,
  16: 1650,
  17: 1900,
  18: 2500,
  19: 2700,
  20: 2800,
  21: 2900,
  22: 3000,
  23: 3200,
  24: 3300,
  25: 3450,
  26: 4000,
};

window.addEventListener("load", function (e) {
  const documentScrollTop = document.documentElement.scrollTop;
  const currentScrollTop = Math.floor(documentScrollTop / 100);
  let currentLength;
  if (currentScrollTop >= 27) currentLength = pathLengthObj[26];
  if (currentScrollTop < 27) currentLength = pathLengthObj[currentScrollTop];
  path.style.strokeDashoffset = pathLength - currentLength;

  if (documentScrollTop >= 2500) {
    if (!contentAnimation.classList.contains("show")) {
      contentAnimation.classList.add("show");
      console.log(contentAnimation);
      setTimeout(() => (contentAnimation.style.zIndex = "-1"), 500);
    }
  }
  if (documentScrollTop < 2500) {
    if (contentAnimation.classList.contains("show")) {
      contentAnimation.style.zIndex = "2";
      contentAnimation.classList.remove("show");
    }
  }
});

window.addEventListener("scroll", function (e) {
  const documentScrollTop = document.documentElement.scrollTop;

  if (documentScrollTop <= 2600) {
    if (documentScrollTop <= 500) {
      path.style.strokeDashoffset = pathLength - 250;
    }

    if (documentScrollTop > 500) {
      const currentScrollTop = Math.floor(documentScrollTop / 100);
      const currentLength = pathLengthObj[currentScrollTop];
      path.style.strokeDashoffset = pathLength - currentLength;
    }
  }

  if (documentScrollTop >= 3100) {
    logoSVG.classList.add("logo__black");
  }
  if (documentScrollTop < 3100) {
    logoSVG.classList.remove("logo__black");
  }

  if (documentScrollTop >= 2500) {
    if (!contentAnimation.classList.contains("show")) {
      contentAnimation.classList.add("show");
      setTimeout(() => (contentAnimation.style.zIndex = "-1"), 500);
    }
  }

  if (documentScrollTop < 2500) {
    if (contentAnimation.classList.contains("show")) {
      contentAnimation.style.zIndex = "2";
      contentAnimation.classList.remove("show");
    }
  }
});

for (let i = 0; i < logoLink.length; i++) {
  logoLink[i].onclick = (e) => {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
    document.documentElement.style.scrollBehavior = 'smooth';
  };
}
