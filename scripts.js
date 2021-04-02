$("document").ready(function () {

  // toggles small nav
  $("#barsBg .fas.fa-bars").on("click", () => {
    $("#smallNavBg").slideToggle();
    $(".overlay").fadeToggle("fast");
  });

  // close small nav from overlay
  $(".overlay").on("click", () => {
    $("#smallNavBg").slideToggle();
    $(".overlay").css("display", "none");
  });

  // shows socials
  $("#toggleSocials .fas.fa-skiing").on("click", () => {
    $("#socials").fadeToggle("fast");
  });

  // goes back to top
  $("#backToTopIcon").on("click", () => {
    window.scrollTo({
      top: 0,
    });
  });

  // toggles back to top btn
  $(window).on("scroll", () => {
    if ($(this).scrollTop() > 300) {
      $("#backToTopSec").show();
    } else {
      $("#backToTopSec").hide();
    }
  });

});
