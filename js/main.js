$(function() {
    /*AOS Instance */
    AOS.init();
    // $('.armour__image').hover(function(){
    //     $('.armour-sockets-img').addClass('active')
    // });

    // $('.armour__image').on(function(){
    //     $('.armour-sockets-img').removeClass('active')
    // });

    $(window).scroll(function() {    // this will work when your window scrolled.
        var height = $(window).scrollTop();  //getting the scrolling height of window
        if(height  > 900) {
          $(".header-top").addClass('fixed');
          $(".submenu").addClass('fixed');
          $('.menu').css({'background': '#0b0b0b'});


        } else{
          $(".header-top").removeClass('fixed');
          $(".submenu").removeClass('fixed');
          $('.menu').css({'background': 'transparent'});

        }
      });

      $('[data-scroll]').on('click', function (event) {
        event.preventDefault();
  
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
  
        console.log(elementOffset);
  
        $('html, body').animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    document.getElementById("menuToggle").onclick = function() {open()};

function open() {
    document.getElementById("menu").classList.toggle("show");
}
});