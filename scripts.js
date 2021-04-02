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

  // scrolls to top of screen using arrow
  $("#backToTopIcon").click(function () {
    window.scrollTo({
      top: 0,
    });
  });

  // shows and hides back to top arrow
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#backToTopSec").show();
    } else {
      $("#backToTopSec").hide();
    }
  });

});
