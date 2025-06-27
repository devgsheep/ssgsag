window.addEventListener("load", function () {
  // Api 데이터

  const optionApiData = [
    {
      id: 1,
      link: "#",
      image: "images/r1.png",
      alt: "hot1",
      option: [{ style: "purple", text: "대외활동" }],
      name: "[고용노동부] 2025 미래내일 일경험 인턴십 참여자 모집",
      day: "D-188",
    },
    {
      id: 2,
      link: "#",
      image: "images/r2.png",
      alt: "hot2",
      option: [{ style: "blue", text: "공모전" }],
      name: "[한국언론진흥재단]제6회 뉴스읽기 뉴스일기 공모전 뉴스일기장 배포(~25/7)",
      day: "D-4",
    },
    {
      id: 3,
      link: "#",
      image: "images/r3.png",
      alt: "hot3",
      option: [{ style: "blue", text: "공모전" }],
      name: "[한국언론진흥재단] 제6회 뉴스읽기 뉴스일기 공모전",
      day: "D-35",
    },
    {
      id: 4,
      link: "#",
      image: "images/r4.png",
      alt: "hot4",
      option: [{ style: "blue", text: "공모전" }],
      name: "[제임스 다이슨 재단] 국제 엔지니어링 및 디자인 공모전 제임스 다이슨 어워드 2025",
      day: "D-20",
    },
    {
      id: 5,
      link: "#",
      image: "images/r5.png",
      alt: "hot1",
      option: [{ style: "blue", text: "공모전" }],
      name: "[(주)패스프리] 패스프리 로고 디자인 공모전",
      day: "D-35",
    },
    {
      id: 6,
      link: "#",
      image: "images/r6.png",
      alt: "hot1",
      option: [{ style: "blue", text: "공모전" }],
      name: "[YTN] YTN서울타워 숏폼 공모전",
      day: "D-4",
    },
    {
      id: 7,
      link: "#",
      image: "images/r7.png",
      alt: "hot1",
      option: [{ style: "blue", text: "공모전" }],
      name: "[TWC스튜디오] '내 동네의 숨은 스팟: 로컬 인사이더' 전국 대학생 슬로건 공모전",
      day: "D-4",
    },
    {
      id: 8,
      link: "#",
      image: "images/r8.png",
      alt: "hot1",
      option: [{ style: "blue", text: "공모전" }],
      name: "[문화체육관광부X경기도] 2025 경기도 공공디자인 공모전",
      day: "D-1",
    },
  ];

  const mouseName = "hot_up_mouse";
  const upWrap = document.querySelector(".hot_wrap");

  let html = ``;

  for (let i = 0; i < optionApiData.length; i++) {
    let tag = `
<a href=${optionApiData[i].link} class="hot_up_image">
    <div class="hot_image">
        <img src=${optionApiData[i].image} alt=${optionApiData[i].alt} />
    </div>
    <div class="hot_up_text">
        <div class="hot_up_option">`;
    for (let j = 0; j < optionApiData[i].option.length; j++) {
      tag += `<span class="option_${optionApiData[i].option[j].style}">${optionApiData[i].option[j].text}</span>`;
    }
    tag =
      tag +
      `</div>
        <div class="hot_up_name">
        ${optionApiData[i].name}
        </div>
        <div class="hot_up_day">${optionApiData[i].day}</div>
    </div>
</a>
    `;

    html += tag;
  }

  upWrap.innerHTML = html;

  const bts = document.querySelectorAll(".hot_up_image");

  bts.forEach(function (item) {
    // hot_up_image의 내부 .hot_image img
    const zoomImg = item.querySelector(".hot_image img");

    item.addEventListener("mouseenter", function () {
      removemouse();

      // 포커스가 갔을때 배경색 + 배율 10%
      item.classList.add(mouseName);
      if (zoomImg) {
        zoomImg.style.transition = "transform 0.3s ease";
        zoomImg.style.transform = "scale(1.1)";
      }
    });

    // 포커스가 떠났을 때 확대배율 정상적으로
    item.addEventListener("mouseleave", function () {
      item.classList.remove(mouseName);
      if (zoomImg) {
        zoomImg.style.transform = "scale(1)";
      }
    });

    // 포커스가 떠났을 때 배경색 제거
    function removemouse() {
      bts.forEach(function (item) {
        item.classList.remove(mouseName);
      });
    }
  });
});
