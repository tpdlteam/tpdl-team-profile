const heroContent = document.querySelector(".content__hero");
const logoPath = document.querySelector("#logo__path");

const path = document.querySelector("#line__path");

const pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;

path.style.strokeDashoffset = pathLength;

path.getBoundingClientRect();

window.addEventListener("scroll", function (e) {
  const documentScrollTop = document.documentElement.scrollTop;

  const scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);
  if (documentScrollTop < 600) {
    const currentPosY = documentScrollTop / 3;
    heroContent.style.transform = `translateY(-${currentPosY}px)`;
  }
  const drawLength = pathLength * scrollPercentage;

  if (documentScrollTop >= 50 && documentScrollTop < 400) {
    path.style.strokeDashoffset = pathLength - drawLength;
  }

  console.log(documentScrollTop);

  if (documentScrollTop < 3000) {
    if (documentScrollTop < 800) {
      path.style.strokeDashoffset = pathLength;
    }

    if (documentScrollTop >= 600) {
      path.style.strokeDashoffset = pathLength - drawLength - 200;
    }

    if (documentScrollTop >= 800) {
      path.style.strokeDashoffset = pathLength - drawLength - 400;
    }

    if (documentScrollTop >= 1200) {
      path.style.strokeDashoffset = pathLength - drawLength - 600;
    }

    if (documentScrollTop >= 1600) {
      path.style.strokeDashoffset = pathLength - drawLength - 800;
    }

    if (documentScrollTop >= 1800) {
      path.style.strokeDashoffset = pathLength - drawLength - 1300;
    }

    if (documentScrollTop >= 1800) {
      path.style.strokeDashoffset = pathLength - drawLength - 1600;
    }

    if (documentScrollTop >= 2000) {
      path.style.strokeDashoffset = pathLength - drawLength - 1900;
    }

    if (documentScrollTop >= 2300) {
      path.style.strokeDashoffset = pathLength - drawLength - 2300;
    }
  }

  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";
  } else {
    path.style.strokeDasharray = pathLength + " " + pathLength;
  }

  if (documentScrollTop >= 3000) {
    logoPath.style.fill = "black";
  }
  if (documentScrollTop < 3000) {
    logoPath.style.fill = "white";
  }
});

// details information
const detailsInformation = document.querySelector(".details_informations");

const viewDetails = (number) => {
  if (number) {
    detailsInformation.classList.toggle("show");
    setTimeout(() => (document.body.style.overflowY = "hidden"), 500);
  } else {
    detailsInformation.classList.remove("show");
    document.body.style.overflowY = "scroll";
  }
};
