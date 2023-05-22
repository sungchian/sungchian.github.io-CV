$(document).ready(function() {
  
    $('.slick-slider').bxSlider({
        auto:true,
        speed: 3000,
        minSlides: 1,
        maxSlides: 1,
        controls: false,
        pause: 13000,
        // pause的時間要加上speed的時間才會剛好停留幾秒
        pager_short: false,
        auto_hover: true,
        // ticker: true,
        // tickerHover: true,
        //下面這句很重要，不然click事件會失效
        touchEnabled: false,
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Business Analyst", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.navbar .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .navbar-nav').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $( ".explore-button" ).hover(function() {
      $( this ).parent().addClass("hovered-card");
      }, function() {
        $( this ).parent().removeClass("hovered-card");
      }
    );

    $(".font-card").click(function(){
      $(".modal").css("display", "block");
      $(".modal-imgpic").attr("src", $(this).css("background-image").replace('url(','').replace(')','').replace(/\"/gi, ""));
    });

    $(".close").click(function(){
      $(".modal").css("display", "none");
    });

    $(".font-card").hover(function(){
      $(this).children(".font-card-title").css("opacity", "1");
    },function(){
      $(this).children(".font-card-title").css("opacity", "0");
    });
});

function sendEmail(){
  console.log($(".contect-title").html());
  switch($(".contect-title").html()){
    case "Your Name":
      localStorage.setItem("name", $(".contect-input").val());
      $(".contect-input").val("");
      $(".contect-title").html("Your Email");
    break;

    case "Your Email":
      localStorage.setItem("email", $(".contect-input").val());
      $(".contect-title").html("Your Content");
      $(".contect-input").css("display", "none");
      $(".contect-context").css("display", "block");
    break;

    case "Your Content":
      localStorage.setItem("content", $(".contect-context").val());
      Email.send({
        SecureToken : "b3f06aa4-9f72-4deb-849a-e78e5ab59f2f",
        To : 'bnbn870829.org@gmail.com',
        From : localStorage.getItem("email"),
        Subject : localStorage.getItem("name"),
        Body : localStorage.getItem("content")
      })
      .then(
        message => alert("Mail has been sent successfully")
      );
      $(".contect-context").val();
    break;
  }
    
  
  
  
  // Email.send({
  //   SecureToken : "b3f06aa4-9f72-4deb-849a-e78e5ab59f2f",
  //   To : 'bnbn870829.org@gmail.com',
  //   From : "bnbn870829.org@gmail.com",
  //   Subject : "This is the subject",
  //   Body : "And this is the body11111"
  // })
  // .then(
  //   message => alert("Mail has been sent successfully")
  // );
}