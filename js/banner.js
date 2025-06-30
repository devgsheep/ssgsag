window.addEventListener("DOMContentLoaded", function () {
  const apiData = [
    {
      id: 1,
      link: "#",
      image: "images/mb1.png",
      imagelarge: "images/b2.png",
      alt: "배너1",
    },
    {
      id: 2,
      link: "#",
      image: "images/mb2.png",
      imagelarge: "images/b3.png",
      alt: "배너1",
    },
    {
      id: 3,
      link: "#",
      image: "images/mb3.png",
      imagelarge: "images/b4.png",
      alt: "배너1",
    },
    {
      id: 4,
      link: "#",
      image: "images/mb4.png",
      imagelarge: "images/b5.png",
      alt: "배너1",
    },
  ];

  // 슬라이드 개수
  const total = apiData.length;
  // 슬라이드 배치 장소
  const bannerPos = document.querySelector(".sw_banner .swiper-wrapper");
  let swiper;

  function renderSlides(isLargeScreen) {
    let htmlTag = "";

    for (let i = 0; i < total; i++) {
      const imgSrc = isLargeScreen ? apiData[i].imagelarge : apiData[i].image;
      htmlTag += `<div class="swiper-slide">
    <a href="${apiData[i].link}" class="banner_slide_item">
    <img src="${imgSrc}" alt="${apiData[i].alt}" />
    </a>
    </div>
    `;
    }

    bannerPos.innerHTML = htmlTag;
  }

  function initSwiper() {
    // 기존 swiper가 존재하면 제거
    if (swiper) swiper.destroy(true, true);

    swiper = new Swiper(".sw_banner", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 12,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".banner_slide_next",
        prevEl: ".banner_slide_prev",
      },
      pagination: {
        el: ".banner_slide_pg",
        clickable: true,
      },
      breakpoints: {
        760: {
          slidesPerView: "auto",
          spaceBetween: 80,
          centeredSlides: true,
        },
      },
    });
  }

  // 초기 상태
  let isLargeScreen = window.innerWidth >= 760;
  renderSlides(isLargeScreen);
  initSwiper();

  // 반응형 처리
  window.addEventListener("resize", () => {
    const newLarge = window.innerWidth >= 760;
    if (newLarge !== isLargeScreen) {
      isLargeScreen = newLarge;
      renderSlides(isLargeScreen);
      initSwiper();
    }
  });
});
