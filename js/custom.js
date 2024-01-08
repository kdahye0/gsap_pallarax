document.addEventListener("DOMContentLoaded", function () {
  Splitting(); //텍스트 분할
  // 문서에 있는 모든 컨텐츠가 로드되면 실행
  luxy.init(); // luxy.js 실행
  gsap.registerPlugin(ScrollTrigger); // gsap 플러그인 등록

  // GSAP 애니메이션 -----
  // 메인 텍스트 스트롤 업 효과
  const gTl = gsap.timeline(); // 타임라인이 등록이 되면 from to 효과에 이른 연속 효과 사용을 묶을 수 있음

  gTl.from(".title .char", 1, {
    opacity: 0,
    yPercent: 130,
    ease: "expo.out",
    stagger: 0.06,
  });

  // 글자 간격 줄어드는 효과
  // let chars = document.querySelectorAll('.title .char');
  // let marginStart = 30;
  // let marginEnd = 10;

  // gTl.from(chars, {
  //   duration: 1,
  //   opacity: 0,
  //   ease: 'linear',
  //   onUpdate: function () {
  //    let progress = this.progress();
  //    let currentMargin = marginStart + (marginEnd - marginStart) * progress;
  //    chars.forEach((char) => {
  //     char.style.margin = `0 ${currentMargin}px`;
  //    });
  //   },
  // });

  // 메인 이미지 애니메이션
  gTl.to(
    ".header__img",
    2, // 애니메이션 지속 시간 2초
    {
      // clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      clipPath: "circle(141.6% at 0 100%)",
      scale: 1.1,
      ease: "expo.out",
    },
    "1"
  );

  // 하단 텍스트 애니메이션
  gTl.from(
    ".header__marq",
    2,
    {
      opacity: 0,
      yPercent: 100,
      ease: "expo.out",
    },
    "1.2"
  );

  // scrollTrigger 공통 속성
  const commonScrollTrigger = {
    header: {
      trigger: ".header",
      start: ".top top", // 첫번째는 요소의 시작 위치. 두번째는 화면의 시작 위치
      scrub: 1.8, // 스크롤 동기화 여부, true일 경우 스크롤 타이밍에 맞춰 애니메이션 실행, 시간 적용시 지정된 시간 만큼 지연 후 애니메이션 실행
    },
    about: {
      trigger: '.about',
      start: 'top-bottom',
      scrub: 1.9,
    },
  };

  function headerAnimationWithScroll(){
    // 화면 스크롤 시 애니메이션 효과
    gsap.to(".title_paralax", {
      scrollTrigger: commonScrollTrigger.header,
      yPercent: -150, // y축으로 -150%만큼 이동
    });

    gsap.to(".header .stroke", {
      scrollTrigger: commonScrollTrigger.header,
      xPercent: 50, // y축으로 50%만큼 이동
    });

    gsap.to(".header__img", {
      scrollTrigger: commonScrollTrigger.header,
      xPercent: -70, // y축으로 70%만큼 이동
    });

    gsap.to(".header__img img", {
      scrollTrigger: commonScrollTrigger.header,
      scale: 1.3,
    });

    gsap.to(".header__marq-wrapper", {
      scrollTrigger: commonScrollTrigger.header,
      xPercent: -50,
    });

    gsap.to(".header__marq-star img", {
      scrollTrigger: commonScrollTrigger.header,
      rotate: -720,
    });
  }
  headerAnimationWithScroll();

  const gsapSquares = document.querySelector('.section_title_square');
  const rotateSquares = gsap.from(gsapSquares, 3, {
    rotation: 720,
  });

  ScrollTrigger.create({
    trigger: gsapSquares, // 애니메이션 대상
    animation: rotateSquares, // 애니메이션 효과
    start: 'top bottom',
    scrub: 1.9,
  });

  function aboutAnimationWithScroll() {
    gsap.from('.about_img', {
      scrollTrigger: commonScrollTrigger.about,
      yPercent: 80,
    });
     gsap.from(".about_img img", {
       scrollTrigger: commonScrollTrigger.about,
       scale: 1.6,
     });
     gsap.to(".about_txt", {
       scrollTrigger: commonScrollTrigger.about,
       yPercent: 50,
     });
  }
  
  aboutAnimationWithScroll();
}); // end of DOM Content Loaded Method
