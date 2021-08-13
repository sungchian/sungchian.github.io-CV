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
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
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
    
});