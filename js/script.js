let a = false;

$(document).ready(function () {
  $('.toggle-menu').click(function(){
    if (!a) {
      $('.nav-mobile li').show();
      a = true;
    }else{
      $('.nav-mobile li').hide();
      a = false;
    }
  })

  $('.nav-mobile li').click(function(){
    $('.nav-mobile li').hide();
    a = false;
  })

  $('a[href="#o-nas"]').click(function(){
    $('html, body').animate({
        scrollTop: $('.about').offset().top
    }, 2000);
  })

  $('a[href="#oferta"]').click(function(){
    $('html, body').animate({
        scrollTop: $('.journal').offset().top
    }, 2000);
  })

  $('a[href="#kontakt"]').click(function(){
    $('html, body').animate({
        scrollTop: $('.order').offset().top
    }, 2000);
  })

  $('a[href="#jak-pracujemy"]').click(function(){
    $('html, body').animate({
        scrollTop: $('.how-we-work').offset().top
    }, 2000);
  })

  $('a[href="#opinie"]').click(function(){
    $('html, body').animate({
        scrollTop: $('.contact-and-opinions').offset().top
    }, 2000);
  })

  $('a[href="#newsletter"]').click(function(){
    $('html, body').animate({
        scrollTop: $('.newsletter').offset().top
    }, 2000);
  })
});
