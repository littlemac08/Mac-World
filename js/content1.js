gsap.registerPlugin(ScrollTrigger);

//
gsap.set(hideTypeAudio, { volume: '0.8' });

gsap.to(hideTypeAudio, {
  volume: 0,
  duration: 1,
  scrollTrigger: {
    trigger: content1Wrap,
    start: 'top center',
    end: 'bottom bottom', 
    scrub: true,
  },
});

const box1 = document.querySelector('.box1');

//-- box1 move control
gsap.set(box1, { left: '-100%' });

gsap.to(box1, {
  left: '0',
  duration: 1,
  scrollTrigger: {
    trigger: content1Wrap,
    start: 'top center',
    end: 'bottom bottom', 
    scrub: true,
  },
});
//-- box1 opacity control
gsap.set(box1, { opacity: '0' });

gsap.to(box1, {
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: content1Wrap,
    start: 'center+=20% bottom',
    end: 'bottom bottom', 
    scrub: true,
  },
});

//-- box2 move control
const box2 = document.querySelector('.box2');

gsap.set(box2, { right: '-100%' });

gsap.to(box2, {
  right: '0%',
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: content1Wrap,
    start: 'top center',
    end: 'bottom bottom', 
    scrub: true,
  },
});

//-- box3 move control
const box3 = document.querySelector('.box3');

gsap.set(box3, { right: '-100%', opacity: 0});

gsap.to(box3, {
  right: '0',
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: content1Wrap,
    start: 'top center',
    end: 'center+=5% center', 
    scrub: true,
    onEnter: () => {
      box3.classList.add('active');
    },

  },
});




//-- box2 hover
const box2VideoDefault = document.querySelector('.content1_box2_default')
const box2Videohover = document.querySelector('.content1_box2_hover')


function box2Hover(){
  box2VideoDefault.classList.add('active')
  box2Videohover.classList.add('active')
}
function box2Out(){
  box2VideoDefault.classList.remove('active')
  box2Videohover.classList.remove('active')
}

box2.addEventListener('mouseover',box2Hover)
box2.addEventListener('mouseout',box2Out)
