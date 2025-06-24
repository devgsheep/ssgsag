window.addEventListener("load", function () {
  // Api 데이터

  const optionApiData = [
    {
      id: 1,
      link: "#",
      image: "images/c1.png",
      alt: "pick1",
      option: [{ style: "blue", text: "공모전" }],
      ad: "AD",
      up: "UP",
      name: "[LX판토스] NEXT ESG 미래를 설계하는 아이디어 챌린지",
      day: "D-5",
    },
    {
      id: 2,
      link: "#",
      image: "images/c2.png",
      alt: "pick2",
      option: [{ style: "blue", text: "공모전" }],
      name: "[대홍기획] 제42회 DCA 대홍 크리에이티브 어워드(~7/17)",
      day: "D-23",
    },
    {
      id: 3,
      link: "#",
      image: "images/c3.png",
      alt: "pick3",
      option: [{ style: "purple", text: "대외활동" }],
      name: "[LG유플러스] 대학생 엠버서더 유쓰피릿 16기 모집 (~7/6 자정)",
      day: "D-12",
    },
    {
      id: 4,
      link: "#",
      image: "images/c4.png",
      alt: "pick4",
      option: [
        { style: "red", text: "인턴쉽" },
        { style: "address", text: "경기 성남시 분당구" },
      ],
      name: "[LX판토스] NEXT ESG 미래를 설계하는 아이디어 챌린지",
      day: "D-7",
    },
  ];

  const mouseName = "pick_contest_mouse";
  const contestWrap = document.querySelector(".pick_contest_wrap");

  let html = ``;

  for (let i = 0; i < optionApiData.length; i++) {
    let tag = `
<a href=${optionApiData[i].link} class="pick_contest_image">
    <div class="pick_image">
        <img src=${optionApiData[i].image} alt=${optionApiData[i].alt} />
    </div>
    <div class="pick_contest_text">
        <div class="pick_contest_option">
            <span class="pick_left">`;
    for (let j = 0; j < optionApiData[i].option.length; j++) {
      tag += `<span class="option_${optionApiData[i].option[j].style}">${optionApiData[i].option[j].text}</span>`;
    }
    tag = tag + `</span>`;
    if (optionApiData[i].ad != undefined) {
      tag = tag + `<span class="option_ad">${optionApiData[i].ad}</span>`;
    }
    tag =
      tag +
      `</div>
        <div class="pick_contest_name">`;
    if (optionApiData[i].up != undefined) {
      tag =
        tag +
        `
         <span class="pick_up">${optionApiData[i].up}</span>`;
    }
    tag =
      tag +
      `
        ${optionApiData[i].name}
        </div>
        <div class="pick_contest_day">${optionApiData[i].day}</div>
    </div>
</a>
    `;

    html += tag;
  }

  contestWrap.innerHTML = html;

  const bts = document.querySelectorAll(".pick_contest_image");

  bts.forEach(function (item) {
    // pick_contest_image의 내부 .pick_image img
    const zoomImg = item.querySelector(".pick_image img");

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
