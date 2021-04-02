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
  $("#toggleSocials .fas.fa-caret-square-down").on("click", () => {
    $("#socials").fadeToggle("fast");
  });
});
