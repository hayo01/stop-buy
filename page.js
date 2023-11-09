window.onload = function () {
  /** byebye **/
  const windowWidth = window.innerWidth;
  const imgSlide = document.querySelector(".img-slide");

  // 전체 화면의 크기에 맞추어 이미지 추가
  const slideCount = windowWidth / imgSlide.clientWidth;
  if (slideCount >= 1) {
    for (let i = 0; i <= slideCount; i++) {
      imgSlide.innerHTML += `<li><div id="bye"><img src="./assets/images/bye.jpg" alt="" /></div></li>`;
    }
  }

  const clone = imgSlide.cloneNode(true); // 복제

  document.querySelector(".slide-wrap").appendChild(clone); // 복제본 추가
  document.querySelector(".img-slide").offsetWidth + "px"; // 원본, 복제본 위치 지정

  imgSlide.classList.add("original"); // 클래스 할당
  clone.classList.add("clone");
};
