$(document).ready(function() {
  $(".menu-toggler").on("click", function() {
    $(this).toggleClass("open");
    $(".top-nav").toggleClass("open");
  });
  // once you click on the links menu closes
  $(".top-nav .nav-link").on("click", function() {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });
});
$("#up").on("click", function() {
  $("html, body").animate(
    {
      scrollTop: 0
    },
    2000
  );
});

AOS.init({
  easing: "ease",
  duration: 1800,
  once: true
});

$(function() {
  AOS.init();
});

// //when user clicks up button it scrolls to the topFunction
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
