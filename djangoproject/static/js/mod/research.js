define([
  "jquery" //requires jquery
], function($) {
  $(document).ready(function() {
    console.log("research");
    $(".up-in").on("click", async function() {
      var a = "#" + $(this).attr("id");
      // console.log($(a).children(".icon"));
      if (
        $(a)
          .children(".detail")
          .hasClass("active")
      ) {
        $(a)
          .find(".icon")
          .removeClass("icon-active");
        $(a)
          .children(".detail")
          .removeClass("active");
        $(a).removeClass("bg-active");
      } else {
        await removeAll();
        $(a)
          .find(".icon")
          .addClass("icon-active");
        $(a)
          .children(".detail")
          .addClass("active");
        $(a).addClass("bg-active");
      }
    });

    async function removeAll() {
      // console.log("a");
      $(".detail").removeClass("active");
      $(".icon").removeClass("icon-active");
      $(".up-in").removeClass("bg-active");
    }
  });
});
