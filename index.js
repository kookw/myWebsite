// alert("Hello");

$(window).scroll(function() {
  if ($(document).scrollTop() > 50  && $(window).width()>975)  {
    $('nav').addClass('shrink');
    // $(".navbar").css('transition' : '0.3s');
  } else {
    $('nav').removeClass('shrink');
  }
});
