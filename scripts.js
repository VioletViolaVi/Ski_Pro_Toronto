$("document").ready(function () {
  // toggles small nav
  $("#barsBg .fas.fa-bars").on("click", () => {
    $("#smallNavBg").slideToggle();
  });

  // shows socials
  $("#toggleSocials .fas.fa-angle-down").on("click", () => {
    $("#socials").fadeToggle("fast");
  });
});
