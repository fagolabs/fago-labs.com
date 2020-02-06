define([
  "jquery" //requires jquery
], function($) {
  $(document).ready(function() {
    console.log("solution");
    $(".mobile-menu").on("click", function() {
      if (
        $(this)
          .find(".menu-wrap")
          .hasClass("menu-open")
      ) {
        $(this)
          .find(".menu-wrap")
          .removeClass("menu-open");
      } else {
        $(this)
          .find(".menu-wrap")
          .addClass("menu-open");
      }
    });
  });
});
