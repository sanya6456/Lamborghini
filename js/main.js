//FIRST page menu fas fa-... hover effects
$(document).ready(function(){
  $('.fa-cog').hover(function(){
    $(this).css('transform','scale(1.4) rotate(90deg)');
    $(this).css('transition','transform 1.5s');
  });
  $('.fa-cog').mouseleave(function(){
    $(this).css('transform','scale(1) rotate(0deg)');
    $(this).css('transition','transform 1.5s');
  });

  $('.fa-comment-alt').hover(function(){
    $(this).css('transform','scale(1.4)');
    $(this).css('transition','transform 0.5s');
  });
  $('.fa-comment-alt').mouseleave(function(){
    $(this).css('transform','scale(1)');
    $(this).css('transition','transform 0.5s');
  });

  $('.fa-search').hover(function(){
    $(this).css('transform','scale(1.4)');
    $(this).css('transition','transform 0.5s');
  });
  $('.fa-search').mouseleave(function(){
    $(this).css('transform','scale(1)');
    $(this).css('transition','transform 0.5s');
  });
});
//______end of FIRST page menu fas fa-... hover effects_____

//ON CLICK menu modells
$(document).ready(function(){
  $('.modelsscroll').click(function(){
    $('html, body').animate({
      scrollTop: $(".container").offset().top
  }, 800);
  });  
});
//_____end of on click modells_____


//SWIPER config!!!
  $(document).ready(function () {
    //initialize swiper when document ready
    var swiper = new Swiper ('.swiper-container', {
        speed:400,
        slidesPerView:1,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });
  });
// ______End Of Swiper config_____

//active class on car configurator menu
  $(document).ready(function(){
    $('ul a').on('click', function(){
      $('ul a').removeClass('active');
      $(this).addClass('active');
    });
  });
//______end of active class______

//SELECT CARS!!
//Select AventadorSVJ
$(document).ready(function(){
  $('.svj').on('click', function(){
    $('.svj011').siblings().addClass('hidelambo');
    $('.svj011').removeClass('hidelambo').fadeOut(0.1).fadeIn(1000);
    $('.swipertitle h2').text('Aventador SVJ 63').fadeOut(0.1);
    $('.swipertitle p').text('Real emotions shape the future').fadeOut(0.1);
    $('.swipertitle h2').text('Aventador SVJ 63').fadeIn(300);
    $('.swipertitle p').text('Real emotions shape the future').fadeIn(600);
  });
  // select aventador svj roadster
  $('.svjroadster').on('click', function(){
    $('.svjroadster011').siblings().addClass('hidelambo');
    $('.svjroadster011').removeClass('hidelambo').fadeOut(0.1).fadeIn(1000);
    $('.swipertitle h2').text('Aventador SVJ 63 roadster edition').fadeOut(0.1);
    $('.swipertitle p').text('Real emotions shape the future').fadeOut(0.1);
    $('.swipertitle h2').text('Aventador SVJ 63 roadster edition').fadeIn(300);
    $('.swipertitle p').text('Real emotions shape the future').fadeIn(600);
  });
  //select aventador s roadster
  $('.sroadster').on('click', function(){
    $('.sroadster011').siblings().addClass('hidelambo');
    $('.sroadster011').removeClass('hidelambo').fadeOut(0.1).fadeIn(1000);
    $('.swipertitle h2').text('Aventador S roadster edition').fadeOut(0.1);
    $('.swipertitle p').text('Real emotions shape the future').fadeOut(0.1);
    $('.swipertitle h2').text('Aventador S roadster edition').fadeIn(300);
    $('.swipertitle p').text('Real emotions shape the future').fadeIn(600);
  });
  //select aventador s
  $('.s').on('click', function(){
    $('.s011').siblings().addClass('hidelambo');
    $('.s011').removeClass('hidelambo').fadeOut(0.1).fadeIn(1000);
    $('.swipertitle h2').text('Aventador S').fadeOut(0.1);
    $('.swipertitle p').text('Real emotions shape the future').fadeOut(0.1);
    $('.swipertitle h2').text('Aventador S').fadeIn(300);
    $('.swipertitle p').text('Real emotions shape the future').fadeIn(600);
  });
  $('.svj,.s,.sroadster,.svjroadster').on('click', function(){
    $('.swipertitle .titleh3').addClass('hidden');
    $('.swipertitle .titleh4').addClass('hidden');
  });
});
//____end of select cars!!____


//hamburgermenu display
$(document).ready(function(){
  $('.hamburgermenushow').hide();
  $('.burgericon').click(function(){
    $(this).hide();
    $('.hamburgermenushow').show(600);
    $('.hamburgermenushow').mouseleave(function(){
      $(this).hide(800);
      $('.burgericon').show(600);
    });
  });
});

//burger icon scale back 1
$(document).ready(function(){
  $('.burgericon').hover(function(){
    $(this).css('transform','scale(1.2)');
    $(this).css('transition','transform 0.5s ease');
  });
  $('.burgericon').mouseleave(function(){
    $(this).css('transform','scale(1)');
    $(this).css('transition','transform 0.5s ease');
  });
});

//set responsive page 1 navbar
$(document).ready(function(){
  
});
//__ end of set responsive navbar____


