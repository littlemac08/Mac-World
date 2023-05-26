  //-- main visual part
  const playButton = document.querySelector('.audio_play_button');
  const mainAudio = document.querySelector('.main_audio');
  const terms = document.querySelector('.terms')
  const hideTypeAudio = document.querySelector('.main_hide_audio')
  // let soundAgreed = localStorage.getItem('soundAgreed');
  let soundAgreed = false;
  
  playButton.addEventListener('click', function() {
    let result = confirm("사운드를 재생하시겠습니까?");
    if (result) {
      soundAgreed = true;
    }
    terms.classList.add('active')
  });
  // window.addEventListener('DOMContentLoaded', function() {
  //   if (soundAgreed === null) {
  //     localStorage.setItem('soundAgreed', 'false');
  //     terms.classList.remove('active');
  //   }
  //   if (soundAgreed === 'false') {
  //     terms.classList.remove('active');
  //   }
  // });
  
  // playButton.addEventListener('click', function() {
  //   let soundAgreed = localStorage.getItem('soundAgreed');
  
  //   if (soundAgreed !== 'true') {
  //     showConfirmation();
  //   }
  
  //   terms.classList.add('active');
  // });
  
  // function showConfirmation() {
  //   let result = confirm("사운드를 재생하시겠습니까?");
  //   if (result) {
  //     localStorage.setItem('soundAgreed', 'true');
  //   }
  // }

  function StartAudio(){
    if(soundAgreed === 'true'){
      if(window.scrollY <= 30){
        // hideTypeAudio.play()
      } else {
        // hideTypeAudio.pause();
        // hideTypeAudio.currentTime = 0;
      }
    }
  }
  document.addEventListener('DOMContentLoaded',StartAudio);


  const termsEn = document.querySelector('.terms_en')
  const termsKo = document.querySelector('.terms_ko')


  termsEn.addEventListener('mouseover', function(){
    termsEn.classList.add('active')
    termsKo.classList.add('active')
  })
  termsEn.addEventListener('mouseout', function(){
    termsEn.classList.remove('active')
    termsKo.classList.remove('active')
  })
  
  
    //-- main visual variable
    const masking = document.querySelector('.main_visual svg > rect') //call masking tag
    const body = document.querySelector('body') //call body tag
    const scrollIcon = document.querySelector('.main_icon') //call scroll icon
    const mainVideo = document.querySelector('.main_visual video') //call main video
    const mainText = document.querySelector('.main_hide') //call main visual text

    //-- main visual function
    function mainVisual(){
      if(window.scrollY >= 30){ //if scrollY reached 30px
        masking.classList.remove('up')  //mask scale down and opacity:1 (key frame)
        masking.classList.add('down') //mask scale up and opacity:0 (key frame)
        body.classList.add('active') //body background:#000
        scrollIcon.classList.add('active') //scroll icon opacity:0
        mainVideo.classList.add('active') //video opacity:0
        mainText.classList.add('active') //text left:0
        if(sideMenuPage.classList.contains('active')){ //if sidemenupage activate
          return
        } else { //if sidemenupage deactivate
          sideMenuBtn.classList.remove('hide') //sidemenubtn show 
        }
        
      } else {
        masking.classList.remove('down') //mask scale down and opacity:1 (key frame)
        masking.classList.add('up')  //mask scale down and opacity:1 (key frame)
        body.classList.remove('active') //body background:#fff
        scrollIcon.classList.remove('active') //scroll icon opacity:1
        mainVideo.classList.remove('active') //video opacity:1
        mainText.classList.remove('active') //text left:100%
        if(sideMenuPage.classList.contains('active')){ //if sidemenupage activate
          return
        } else { //if sidemenupage deactivate
          sideMenuBtn.classList.add('hide') //sidemenubtn display:none
        }
      } 
    }

    //-- main visual activate
    window.addEventListener('scroll',mainVisual)

      //-- main visual textin part
      //-- main visual textin variable
      const mainTextIn = document.querySelectorAll('.main_hide > div') //call main text
      const mainTextEn = document.querySelector('.main_hide_en')
      const mainTextKo = document.querySelector('.main_hide_ko')
      //-- main visual textin mouseover function
      function textMouseOver(){
        mainTextEn.classList.add('active') //en text opacity:0 (default is opacity:1)
        mainTextKo.classList.add('active') //ko text opacity:1 (default is opacity:0)
      }
      //-- main visual textin mouseout function
      function textMouseOut(){
        mainTextEn.classList.remove('active') //en text opacity:1(be default)
        mainTextKo.classList.remove('active') //ko text opacity:0(be default)
      }
      //-- main visual textin translate activate
      mainText.addEventListener('mouseover',textMouseOver)
      mainText.addEventListener('mouseout',textMouseOut)

      //-- main visual  video rate function
      function mainvideoRate(rate) {
        mainVideo.playbackRate = rate;
      }
      mainvideoRate(1.5)

      let typing = document.getElementById('typing_en');
      let typewriter = null;
      console.log(soundAgreed)
      function typingTextIn() {
          if (window.scrollY >= 30) {
              if (!typewriter && soundAgreed) {
                  hideTypeAudio.play();
                  hideTypeAudio.playbackRate = 1.05;
                  typewriter = new Typewriter(typing, {
                      loop: false,
                      delay: 70,
                      deleteSpeed: 0,
                  });
                  typewriter
                      .typeString('<p style="color:#fff; font-size:2rem;"><span class="textPoint">Welcome</span> to my special space,</p><br>')
                      .pauseFor(10) // ms 동안 일시정지
                      .typeString('<p style="color:#fff; font-size:2rem;">where <span class="textPoint">web coding</span> works come alive.</p><br>')
                      .pauseFor(10) // ms 동안 일시정지
                      .typeString('<p style="color:#fff; font-size:2rem;">Explore creative <span class="textPoint">designs</span></p><br>')
                      .pauseFor(10) // ms 동안 일시정지
                      .typeString('<p style="color:#fff; font-size:2rem;">and innovative <span class="textPoint">technologies</span></p><br>')
                      .pauseFor(10) // ms 동안 일시정지
                      .typeString('<p style="color:#fff; font-size:2rem;"><span class="textPoint">enjoy</span> my world.</p>')
                      .start();
              } else if (!typewriter && !soundAgreed) {
                  typewriter = new Typewriter(typing, {
                      loop: false,
                      delay: 70,
                      deleteSpeed: 0,
                  });
                  typewriter
                      .typeString('<p style="color:#fff; font-size:2rem;"><span class="textPoint">Welcome</span> to my special space,</p><br>')
                      .pauseFor(10) // ms 동안 일시정지
                      .typeString('<p style="color:#fff; font-size:2rem;">where <span class="textPoint">web coding</span> works come alive.</p><br>')
                      .pauseFor(10) // ms 동안 일시정지
                      .typeString('<p style="color:#fff; font-size:2rem;">Explore creative <span class="textPoint">designs</span></p><br>')
                      .pauseFor(10) // ms 동안 일시정지
                      .typeString('<p style="color:#fff; font-size:2rem;">and innovative <span class="textPoint">technologies</span></p><br>')
                      .pauseFor(10) // ms 동안 일시정지
                      .typeString('<p style="color:#fff; font-size:2rem;"><span class="textPoint">enjoy</span> my world.</p>')
                      .start();
            }
          } else {
              if (typewriter) {
                  typewriter
                      .deleteAll()
                      .stop();
                  typewriter = null;
                  hideTypeAudio.pause();
                  hideTypeAudio.currentTime = 0;
              }
          }
      }
      
      window.addEventListener('scroll', typingTextIn);
      
      
    



  //--side menu Part
  //--side menu variable
  const sideMenuBtn = document.querySelector('header .main_menu_btn') //call sidemenubtn
  const sideMenuPage = document.querySelector('.main_menu_page') //call sidemenupage

  //--side menu Btn click function
  function sideMenuBtnClick(){
    sideMenuPage.classList.toggle('active') //sidemenupage show&hide
    sideMenuBtn.classList.toggle('active') //sidemenubtn style change(default & clicked)
    if(window.scrollY <= 30){
      if(!sideMenuPage.classList.contains('active')){ //if sidemenupage deactivate
        sideMenuBtn.classList.add('hide') //
      }
    }
  }

  //--side menu click activate
  sideMenuBtn.addEventListener('click',sideMenuBtnClick)

  //-- side menu selector part
  //-- side menu selector variable      
  const sideMenu = document.querySelectorAll('.main_menu_page > ul > li ');
  const sideMenuBar = document.querySelector('.main_menu_bar');

  //-- side menu selector function
  function sideMenuSelector(event){
    event.onmouseover = function(){
      sideMenuBar.style = `top:${this.offsetTop}px`;
      //if(this.children[1]) this.children[1].style.display = 'block'; 
    }
    event.onmouseout = function(){
      sideMenuBar.style = `top:${this.offsetTop}px`;
    //if(this.children[1]) this.children[1].style.display = 'none'; 
    }
  }
  //-- side menu selector activate
  sideMenu.forEach(sideMenuSelector)

const content1Wrap = document.querySelector('.content1_wrap')


ScrollTrigger.create({
  trigger: content1Wrap,
  start: 'top top',
  end: 'bottom top',
  onEnter: () => {
    sideMenuBtn.classList.add('whiteContent'); // 트리거에 진입한 경우 클래스 추가
  },
  onLeaveBack: () => {
    sideMenuBtn.classList.remove('whiteContent'); // 트리거를 벗어난 경우 클래스 제거
  },
});

