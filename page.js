window.onload = function () {
  const imgSlide = document.querySelector(".img-slide");

  // 복제
  const clone = imgSlide.cloneNode(true);

  // 복제본 추가
  document.querySelector(".slide-wrap").appendChild(clone);

  // 원본, 복제본 위치 지정
  document.querySelector(".img-slide").offsetWidth + "px";

  // 클래스 할당
  imgSlide.classList.add("original");
  clone.classList.add("clone");
};
