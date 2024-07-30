$(document).ready(function() {
  const swiper = new Swiper(".swiper", {
    speed: 1700,
    spaceBetween: 100,
    mousewheel: true,
    direction: "vertical",
    parallax: true
  });
  //$("header .cont").css("min-height", $(window).height());
  $(".nav-link").mPageScroll2id({
    offset: 0
  });
  $("#go-to-top").goTop({
    appear: 200,
    scrolltime: 800,
    src: "fa fa-arrow-circle-up",
    width: 45,
    place: "right",
    fadein: 500,
    fadeout: 500,
    opacity: 0.5,
    marginX: 3,
    marginY: 8
  });
  //Mobile menu
  $(".mobile").hide();
  $("#burg").on("click", function(){
    $(".mobile").slideToggle();
  });
  $(".mobile .nav-link").on("click", function(){
    $(".mobile").slideToggle();
  });
  $(document).mouseup(function(e){
    if (!$(".mobile").is(e.target) && $(".mobile").has(e.target).length === 0){
      $(".mobile").fadeOut();
    }
  });
  //Counter
  var clock;
  clock = $(".clock").FlipClock({
    clockFace: "DailyCounter",
    autoStart: false,
    callbacks: {
      stop: function() {
        $(".message").html("Прием заявок окончен.");
      }
    }
  });
  var dt = "May 02 2020 00:00:00";
  var first = new Date(dt);
  var last = Date.now();
  var rem = first - last;
  rem /=1000;
  clock.setTime(rem);
  clock.setCountdown(true);
  clock.start();
});