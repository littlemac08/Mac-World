  //-- main visual part
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
      //-- main visual textin mouseover function
      function textMouseOver(){
        mainTextIn[0].classList.add('active') //en text opacity:0 (default is opacity:1)
        mainTextIn[1].classList.add('active') //ko text opacity:1 (default is opacity:0)
      }
      //-- main visual textin mouseout function
      function textMouseOut(){
        mainTextIn[0].classList.remove('active') //en text opacity:1(be default)
        mainTextIn[1].classList.remove('active') //ko text opacity:0(be default)
      }
      //-- main visual textin translate activate
      mainText.addEventListener('mouseover',textMouseOver)
      mainText.addEventListener('mouseout',textMouseOut)

      //-- main visual  video rate function
      function mainvideoRate(rate) {
        mainVideo.playbackRate = rate;
      }
      mainvideoRate(1.5)

      function typingTextIn(){
        let typing = document.getElementById('typing_en');

        let typewriter = new Typewriter(typing, {
            loop: false,
            delay: 5,
            deleteSpeed: 0,
        });
          typewriter
          // .pauseFor(300) // ms 동안 일시정지
          // .deleteChars(7) // 글자 끝에서 제거할 내용
          .typeString('<p><span >Welcome</span> to my special space,</p>') // 타자기 효과로 입력할 내용
          .typeString('<p>where <span >web coding</span> works come alive.</p>') // 타자기 효과로 입력할 내용
          .typeString('<p>Explore creative <span >designs</span></p>') // 타자기 효과로 입력할 내용
          .typeString('<p>and innovative <span >technologies</span></p>') // 타자기 효과로 입력할 내용
          .typeString('<p><span >enjoy</span> my world.</p>') // 타자기 효과로 입력할 내용
          .pauseFor(1000) // ms 동안 일시정지
          .start() // 효과 실행
      }


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

//-- main content section
window.addEventListener('scroll',function(){
  if(window.scrollY >= 950){
    sideMenuBtn.classList.add('whiteContent')
  } else {
    sideMenuBtn.classList.remove('whiteContent')
  }
})

