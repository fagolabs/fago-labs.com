define([
  "jquery" //requires jquery
], function($) {
  var width = $(window).width();
  $(window).resize(function() {
    width = $(window).width();
    if (width < 768) {
      $("div[role='complementary']")
        .find(".search-blog")
        .css("display", "none");
      $(".mobile-search").css("display", "block");
      //   $(".seach-blog").css("display", "none");
    }
  });
  //   $(window).resize
  if (width < 768) {
    $("div[role='complementary']")
      .find(".search-blog")
      .css("display", "none");
    $(".mobile-search").css("display", "block");
    //   $(".seach-blog").css("display", "none");
  }
});
