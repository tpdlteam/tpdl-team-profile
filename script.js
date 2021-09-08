const heroContent = document.querySelector(".content__hero");
const logoSVG = document.querySelector("#logo__svg");
const contentAnimation = document.querySelector(".content__animation");
const lineContent = document.querySelector(".content__animation_line");
const headerLogo = document.querySelector('#header__logo');
const path = document.querySelector("#line__path");

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
  17: 2000,
  18: 2500,
  19: 2700,
  20: 2800,
  21: 2900,
  22: 3000,
  23: 3200,
  24: 3300,
  25: 3450,
};

window.addEventListener("scroll", function (e) {
  const documentScrollTop = document.documentElement.scrollTop;

  if (documentScrollTop < 600) {
    const currentPosY = documentScrollTop / 3;
    heroContent.style.transform = `translateY(-${currentPosY}px)`;
  }

  if (documentScrollTop <= 2500) {
    if (documentScrollTop < 500) {
      path.style.strokeDashoffset = pathLength;
    }

    if (documentScrollTop >= 500) {
      const currentScrollTop = Math.floor(documentScrollTop / 100);
      const currentLength = pathLengthObj[currentScrollTop];
      path.style.strokeDashoffset = pathLength - currentLength;
    }
  }

  if (documentScrollTop >= 2700) {
    logoSVG.classList.add('logo__black');
  }
  console.log(documentScrollTop);
  if (documentScrollTop < 2700) {
    logoSVG.classList.remove('logo__black');
  }

  if (documentScrollTop >= 2300) {
    if (!contentAnimation.classList.contains("show"))
      setTimeout(() => {
        contentAnimation.classList.add("show");
      }, 1000);
      setTimeout(() => {
        contentAnimation.style.zIndex = '-1';
      }, 2250);
  }
  if (documentScrollTop >= 2500) {
    setTimeout(() => (lineContent.style.height = "100vh"), 500);
  }
  if (documentScrollTop < 2500) {
    lineContent.style.height = "0vh";
  }
  if (documentScrollTop >= 6800) {
    headerLogo.style.opacity = '0';
  }
  if (documentScrollTop < 6800) {
    headerLogo.style.opacity = '1';
  }
});
