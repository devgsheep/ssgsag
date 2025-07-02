window.addEventListener("load", function () {
  // Api 데이터

  const optionApiData = [
    {
      id: 1,
      link: "#",
      image: "images/n1.png",
      alt: "soon1",
      option: [{ style: "blue", text: "공모전" }],
      name: "[LX판토스] NEXT ESG 미래를 설계하는 아이디어 챌린지",
      day: "D-5",
    },
    {
      id: 2,
      link: "#",
      image: "images/n2.png",
      alt: "soon2",
      option: [
        { style: "red", text: "인턴십" },
        { style: "address", text: "서울 강남구" },
      ],
      name: "[PTKOREA/인턴] 데이터 분석",
      day: "D-13",
    },
    {
      id: 3,
      link: "#",
      image: "images/n3.png",
      alt: "soon3",
      option: [{ style: "blue", text: "공모전" }],
      name: "[BMW 코리아 미래재단] Young Innovator Dream Project 2025",
      day: "D-18",
    },
    {
      id: 4,
      link: "#",
      image: "images/n4.png",
      alt: "soon4",
      option: [
        { style: "red", text: "인턴십" },
        { style: "address", text: "서울 서초구" },
      ],
      name: "[당근마켓] Software Engineer Intern, Backend - Local Business(운영)",
      day: "D-7",
    },
    {
      id: 5,
      link: "#",
      image: "images/n5.png",
      alt: "soon1",
      option: [
        { style: "red", text: "인턴십" },
        { style: "address", text: "서울 서초" },
      ],
      name: "[당근마켓] Software Engineer Intern, Frontend - Local Business (운영)",
      day: "D-7",
    },
    {
      id: 6,
      link: "#",
      image: "images/n6.png",
      alt: "soon1",
      option: [
        { style: "red", text: "인턴십" },
        { style: "address", text: "경남 사천시" },
      ],
      name: "[한국항공우주산업] HR 체험형 인턴 모집(~6/29(일))",
      day: "D-4",
    },
    {
      id: 7,
      link: "#",
      image: "images/n7.png",
      alt: "soon1",
      option: [
        { style: "red", text: "인턴십" },
        { style: "address", text: "경기 성남시 분당구" },
      ],
      name: "[카카오뱅크] 콘텐츠 제작 어시스턴트 (체험형 인턴)",
      day: "D-6",
    },
    {
      id: 8,
      link: "#",
      image: "images/n8.png",
      alt: "soon1",
      option: [
        { style: "red", text: "인턴십" },
        { style: "address", text: "경기 성남시 분당구" },
      ],
      name: "[카카오뱅크] 제휴사업 지원 어시스턴트 (체험형 인턴)",
      day: "D-5",
    },
  ];

  const mouseName = "soon_up_mouse";
  const upWrap = document.querySelector(".soon_li");

  let html = ``;

  for (let i = 0; i < optionApiData.length; i++) {
    let tag = `
<a href=${optionApiData[i].link} class="soon_up_image">
    <div class="soon_image">
        <img src=${optionApiData[i].image} alt=${optionApiData[i].alt} />
    </div>
    <div class="soon_up_text">
        <div class="soon_up_option">`;
    for (let j = 0; j < optionApiData[i].option.length; j++) {
      tag += `<span class="option_${optionApiData[i].option[j].style}">${optionApiData[i].option[j].text}</span>`;
    }
    tag =
      tag +
      `</div>
        <div class="soon_up_name">
        ${optionApiData[i].name}
        </div>
        <div class="soon_up_day">${optionApiData[i].day}</div>
    </div>
</a>
    `;

    html += tag;
  }

  upWrap.innerHTML = html;

  const bts = document.querySelectorAll(".soon_up_image");

  bts.forEach(function (item) {
    // soon_up_image의 내부 .soon_image img
    const zoomImg = item.querySelector(".soon_image img");

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
