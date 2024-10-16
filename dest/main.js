//changeHeader
function changeHeader() {
  const header = document.querySelector(".header");
  document.addEventListener("scroll", function () {
    let scrolY = window.scrollY;
    if (scrolY > 500) {
      header.classList.add("--bg-header");
    } else {
      header.classList.remove("--bg-header");
    }
  });
}
changeHeader();

// Progress
const progressBar = () => {
  let progress = document.querySelector(".progress");
  window.addEventListener("scroll", () => {
    let scrollY = window.scrollY;
    let percent =
      (scrollY / (document.body.offsetHeight - window.innerHeight)) * 100;
    progress.style.width = `${percent}%`;
  });
};
window.addEventListener("load", progressBar());

// //menu mobile
function menuMobile() {
  const btnmenu = document.querySelector(".btnmenu");
  const nav = document.querySelector(".nav");

  btnmenu.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("active");
    document.body.classList.toggle("--disbale-scroll");
  });
  //hide nav
  function hideNav() {
    btnmenu.classList.remove("active");
    nav.classList.remove("active");
  }
  //resize window
  window.addEventListener("resize", function () {
    let window = this.window.innerWidth;
    if (window > 992) {
      hideNav();
    }
  });
}
menuMobile();

//accordion
function accordion() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
accordion();

//Slider Photo
function sliderPhoto() {
  var slider = document.querySelector(".reviews__item");
  if (slider) {
    var flkty = new FlickityResponsive(slider, {
      // options
      cellAlign: "center",
      // contain: true,
      prevNextButtons: false,
      wrapAround: true,
      // freeScoll: true,
      groupCells: 2,
      // autoPlay: 1500,
      on: {
        ready: function () {
          console.log("Flickity is ready");
        },
        change: function (index) {
          console.log("Slide changed to");
        },
      },
      responsive: [
        {
          breakpoint: 920,
          settings: {
            groupCells: 1,
          },
        },
      ],
    });
  }
}
sliderPhoto();

//popup video

// //tabs
function handleTabs() {
  let tabs = document.querySelectorAll(".post__tabs-item"),
    listNews = document.querySelectorAll(".post__list");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      //remove
      tabs.forEach(function (tab) {
        tab.classList.remove("active");
      });

      //add active
      this.classList.add("active");

      //hide all list
      listNews.forEach(function (newslist) {
        newslist.classList.remove("active");
      });

      //get data-tab
      let id = this.dataset.tab;

      //add class active to list
      document.querySelector(".post__list-" + id).classList.add("active");
    });
  });
}
handleTabs();

//loading
function initLoading() {
  let loadedCount = 0,
    imgs = document.querySelectorAll("img").length,
    container = document.querySelector("body");
  let imgLoaded = imagesLoaded(container);
  imgLoaded
    .on("progress", (instance) => {
      loadedCount++;
      percent = Math.floor((loadedCount / imgs) * 100);
      handleLoading(percent);
    })
    .on("always", (instance) => {
      console.log("always");
    })
    .on("fail", (instance) => {
      console.log("fail");
    })
    .on("done", (instance) => {
      console.log("done");
      hideLoading();
    });
}
function handleLoading(percent) {
  const progress = document.querySelector(".loading__inner-progress"),
    textPerCenter = document.querySelector(".loading__percent");

  progress.style.width = `${percent}%`;
  textPerCenter.innerHTML = `${percent}%`;
}
function hideLoading() {
  const loading = document.querySelector(".loading"),
    body = document.querySelector("body");
  loading.classList.add("--hide");
  body.classList.remove("--disable-scroll");
}
initLoading();

function popupVideo() {
  let videos = document.querySelectorAll(
    ".today__item-video .video__item .video__item-img"
  );
  moadalVideo = document.querySelector(".popupvideo");
  iframeModalVideo = document.querySelector(
    ".popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe"
  );
  btnclose = document.querySelector(
    ".popupvideo .popupvideo__inner .popupvideo__inner-close"
  );

  videos.forEach(function (video) {
    //show model
    video.addEventListener("click", function () {
      moadalVideo.classList.add("active");
      //get id
      let dataID = video.getAttribute("data-video-src");

      //set iframe
      iframeModalVideo.setAttribute(
        "src",
        `https://www.youtube.com/embed/${dataID}?autoplay=1`
      );
      document.body.classList.add("--disbale-scroll");
    });
  });
  function closeModal() {
    //hide modal
    moadalVideo.classList.remove("active");
    //empty iframe
    iframeModalVideo.setAttribute("src", "");
    document.body.classList.remove("--disbale-scroll");
  }
  btnclose.addEventListener("click", function () {
    closeModal();
  });
}
popupVideo();
