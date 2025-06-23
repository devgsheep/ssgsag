window.addEventListener("DOMContentLoaded", function () {
  const apiData = [
    {
      id: 1,
      link: "#",
      image: "images/b1.png",
      alt: "배너1",
    },
    {
      id: 2,
      link: "#",
      image: "images/b2.png",
      alt: "배너1",
    },
    {
      id: 3,
      link: "#",
      image: "images/b3.png",
      alt: "배너1",
    },
    {
      id: 4,
      link: "#",
      image: "images/b4.png",
      alt: "배너1",
    },
    {
      id: 5,
      link: "#",
      image: "images/b5.png",
      alt: "배너1",
    },
  ];

  // 슬라이드 개수
  const total = apiData.length;
  // 슬라이드 배치 장소
  const bannerPos = document.querySelector(".sw_banner .swiper-wrapper");

  let htmlTag = "";

  for (let i = 0; i < total; i++) {
    htmlTag += `<div class="swiper-slide">
    <a href="${apiData[i].link}" class="banner_slide_item">
    <img src="${apiData[i].image}" alt="${apiData[i].alt}" />
    </a>
    </div>
    `;
  }

  console.log(htmlTag);
  bannerPos.innerHTML = htmlTag;

  const swiper = new Swiper(".sw_banner", {
    slidesPerView: "auto", // 슬라이드 개수 자동계산
    centeredSlides: true, // 가운데 슬라이드 정렬
    spaceBetween: 80,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // 네비게이터 작동
    navigation: {
      nextEl: ".banner_slide_next",
      prevEl: ".banner_slide_prev",
    },
    pagination: {
      el: ".banner_slide_pg",
      clickable: true,
    },
  });
});
