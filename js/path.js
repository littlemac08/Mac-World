
// const pathWrap = document.querySelector('.onePath');
// const path1 = document.querySelector('.path1');
// const path1Length =path1.getTotalLength();


// path1.style.strokeDasharray = path1Length
// path1.style.strokeDashoffset = calcDashoffset(window.innerHeight*0.8, pathWrap, path1Length)

// function calcDashoffset(scrollY, element, length) {
//     const ratio = (scrollY - element.offsetTop) / element.offsetHeight
//     const value = length - (length * ratio)
//     console.log(value)
//     return value < 0 ? 0 : value > length ? length : value
// }

// function scrollHandler(){
//     const scrollY = window.scrollY + (window.innerHeight * 0.8)
//     path1.style.storkeDashoffset = calcDashoffset(scrollY, pathWrap, path1Length)
// }

const pathWrap = document.querySelector('.onePath');
const pathWrapT = document.querySelector('.onePath svg');
const path1 = document.querySelector('.path1');
const path1Length = path1.getTotalLength();

// 초기 상태에서 경로가 완전히 숨겨지도록 설정
path1.style.strokeDasharray = `${path1Length} ${path1Length}`;
path1.style.strokeDashoffset = `${path1Length}`;

function scrollHandler() {
  const scrollY = -window.scrollY + (window.innerHeight * 0.8);
  const ratio = -(scrollY - pathWrap.offsetTop) / pathWrap.clientHeight;
  const offset = path1Length * ratio;
  path1.style.strokeDashoffset = `${path1Length - offset}`;
}


window.addEventListener('scroll', scrollHandler);

ScrollTrigger.create({
  trigger: pathWrapT,
  start: 'bottom bottom-=50%',
  end: 'bottom bottom-=50%', 
  // markers: true,
  onEnter: () => {
    pathWrapT.classList.add('active')
    sideMenuBtn.classList.add('whiteContent'); // 트리거를 벗어난 경우 클래스 제거
  },
  onLeaveBack: () => {
    pathWrapT.classList.remove('active')
    sideMenuBtn.classList.remove('whiteContent'); // 트리거를 벗어난 경우 클래스 제거
  },
});





