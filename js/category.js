window.addEventListener("load", function () {
  const mouseName = "category_mouse";
  const bts = document.querySelectorAll(".category_icon_image");

  bts.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      // category_mouse 클래스 제거
      removemouse();
      // 포커스가 갔을때 category_mouse 클래스 추가
      item.classList.add(mouseName);
    });

    // 포커스가 떠났을 때 제거
    function removemouse() {
      bts.forEach(function (item) {
        item.classList.remove(mouseName);
      });
    }
  });
});
