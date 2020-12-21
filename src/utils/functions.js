$(document).ready(() => {
  var scrollTop = 0;
  $(window).scroll(() => {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $(".header, .scrolltop").addClass("show");
    } else if (scrollTop < 100) {
      $(".header, .scrolltop").removeClass("show");
    }
  });
});
