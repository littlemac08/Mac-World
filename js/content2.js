const content2Wrap = document.querySelector('.content2_wrap')
const content2 = document.querySelector('.content2')

gsap.set(content2, { width: '0%' });

gsap.to(content2, {
    width: '100%',
    duration: 1,
    scrollTrigger: {
    trigger: content2Wrap,
    start: 'top+=20% bottom',
    end: 'top+=20% bottom', 
    scrub: true,
    // onComplete: () => {
    //   gsap.kill(PF1Content1); // 애니메이션 완료 후 content2의 애니메이션을 중지
    //   gsap.set(PF1Content1, { opacity: 'initial' });
    // },
    },
});

ScrollTrigger.create({
  trigger: content2Wrap,
  start: 'top top',
  end: 'bottom top',
  // markers:true,
  onEnter: () => {
    sideMenuBtn.classList.remove('whiteContent'); // 트리거에 진입한 경우 클래스 추가
  },
  onLeaveBack: () => {
    sideMenuBtn.classList.add('whiteContent'); // 트리거를 벗어난 경우 클래스 제거
  },
});
const PF1 = document.querySelector('.content2_PF1')
gsap.set(PF1, { left: '100%'});

gsap.to(PF1, {
    left: '0',
    duration: 1,
    scrollTrigger: {
    trigger: content2Wrap,
    start: 'center bottom',
    end: 'bottom bottom',
    pin: true,
    scrub: true,
    },
});

// gsap.set(PF1, {opacity: '1'})
// gsap.to(PF1, {
//   opacity: '0',
//   left:'-100%',
//   duration: 1,
//   scrollTrigger: {
//     trigger: content2Wrap,
//     start: 'left left',
//     end: 'left left',
//     scrub: true,
//     markers: true,
//   },
// });

const PF1Content1 = document.querySelector('.PF1_content1')
const PF1Img1 = document.querySelector('.PF1_img1')

PF1Img1.addEventListener('click',function(){
  PF1Img1.classList.add('active')
  setTimeout(() => {
    window.location.href = "https://littlemac08.github.io/homework/"; // 2초 후에 링크로 이동합니다.
  }, 1500); 
  setTimeout(()=>{
    PF1Img1.classList.remove('active')
  }, 2000)
})

PF1Img1.addEventListener('mouseover',function(){
  PF1Img1.classList.remove('hover_not');
  PF1Img1.classList.add('hover');
})

PF1Img1.addEventListener('mouseout',function(){
  PF1Img1.classList.add('hover_not');
  PF1Img1.classList.remove('hover');

  setTimeout(()=>{
    PF1Img1.classList.remove('hover_not');
  }, 100)
})

gsap.set(PF1Content1, {opacity:1})

gsap.to(PF1Content1,{
  opacity:0,
  left:'-50%',
  zIndex:-1,
  duration: 1,
  scrollTrigger: {
    trigger: PF1,
    start: 'top+=20% left',
    end: 'bottom left',
    scrub: true,
  }
})



const PF1Content2 = document.querySelector('.PF1_content2')
const PF1Img2 = document.querySelector('.PF1_img2')

PF1Img2.addEventListener('click',function(){
  PF1Img2.classList.add('active')
  setTimeout(() => {
    window.location.href = "https://littlemac08.github.io/teamProject_finally/"; // 2초 후에 링크로 이동합니다.
  }, 1500); 
  setTimeout(()=>{
    PF1Img2.classList.remove('active')
  }, 2000)
})

PF1Img2.addEventListener('mouseover',function(){
  PF1Img2.classList.remove('hover_not');
  PF1Img2.classList.add('hover');
})

PF1Img2.addEventListener('mouseout',function(){
  PF1Img2.classList.add('hover_not');
  PF1Img2.classList.remove('hover');

  setTimeout(()=>{
    PF1Img2.classList.remove('hover_not');
  }, 100)
})

gsap.set(PF1Content2, {opacity:1})

gsap.to(PF1Content2,{
  opacity:0,
  left:'-150%',
  duration: 1,
  zIndex: '-1',
  scrollTrigger: {
    trigger: PF1,
    start: 'center left',
    end: 'bottom left',
    scrub: true,
  }
})

const PF1Content3 = document.querySelector('.PF1_content3')
const PF1Img3 = document.querySelector('.PF1_img3')

PF1Img3.addEventListener('click',function(){
  PF1Img3.classList.add('active')
  setTimeout(() => {
    window.location.href = "https://www.genesis.com/kr/ko/main.html"; // 2초 후에 링크로 이동합니다.
  }, 1500); 
  setTimeout(()=>{
    PF1Img3.classList.remove('active')
  }, 2000)
})

PF1Img3.addEventListener('mouseover',function(){
  PF1Img3.classList.remove('hover_not');
  PF1Img3.classList.add('hover');
})

PF1Img3.addEventListener('mouseout',function(){
  PF1Img3.classList.add('hover_not');
  PF1Img3.classList.remove('hover');

  setTimeout(()=>{
    PF1Img3.classList.remove('hover_not');
  }, 100)
})

gsap.set(PF1Content3, {opacity:0})

gsap.to(PF1Content3,{
  opacity:1,
  left:'-40%',
  duration: 1,
  scrollTrigger: {
    trigger: PF1,
    start: 'center left',
    end: 'bottom left',
    scrub: true,
  }
})

const PF1Content4 = document.querySelector('.PF1_content4')
const PF1Img4 = document.querySelector('.PF1_img4')

PF1Img4.addEventListener('click',function(){
  PF1Img4.classList.add('active')
  setTimeout(() => {
    window.location.href = "https://www.genesis.com/kr/ko/main.html"; // 2초 후에 링크로 이동합니다.
  }, 1500); 
  setTimeout(()=>{
    PF1Img4.classList.remove('active')
  }, 2000)
})

PF1Img4.addEventListener('mouseover',function(){
  PF1Img4.classList.remove('hover_not');
  PF1Img4.classList.add('hover');
})

PF1Img4.addEventListener('mouseout',function(){
  PF1Img4.classList.add('hover_not');
  PF1Img4.classList.remove('hover');

  setTimeout(()=>{
    PF1Img4.classList.remove('hover_not');
  }, 100)
})

gsap.set(PF1Content4, {opacity:0})

gsap.to(PF1Content4,{
  opacity:1,
  left:'-30%',
  duration: 1,
  scrollTrigger: {
    trigger: PF1,
    start: 'center left',
    end: 'bottom left',
    scrub: true,
  }
})