// Require.js Module Loader - http://requirejs.org

define(["jquery"], function($) {
  var mods = [
    "mod/mobile-menu" // require mobile menu automatically
  ];

  $(document).ready(function() {
    $(window).scroll(function() {
      // console.log($("[role=banner]").offset().top);
      if ($("[role=banner]").offset().top == 0) {
        $("[role=banner]").removeClass("scroll");
      } else {
        $("[role=banner]").addClass("scroll");
      }
    });
    $("#dropdown")
      .add(".check1")
      .on("click", async function() {
        // console.log("a");
        if ($(this).hasClass("menu-mobile-open")) {
          $(this).removeClass("menu-mobile-open");
        } else {
          await removeNavAll();
          $(this).addClass("menu-mobile-open");
        }
      });
    async function removeNavAll() {
      $("#dropdown").removeClass("menu-mobile-open");
      $(".check1").removeClass("menu-mobile-open");
    }
    var width = $(window).width();
    $(window).resize(function() {
      width = $(window).width();
      console.log(width);
      if (width > 774) {
        $("#dropdown")
          .add(".check1")
          .hover(
            function() {
              $(this)
                .find(".dropdown-menu")
                .stop(true, true)
                .delay(200)
                .slideDown(200);
            },
            function() {
              $(this)
                .find(".dropdown-menu")
                .stop(true, true)
                .delay(200)
                .fadeOut(200);
            }
          );
      }
    });
    if (width > 774) {
      $("#dropdown")
        .add(".check1")
        .hover(
          function() {
            $(this)
              .find(".dropdown-menu")
              .stop(true, true)
              .delay(200)
              .slideDown(200);
          },
          function() {
            $(this)
              .find(".dropdown-menu")
              .stop(true, true)
              .delay(200)
              .fadeOut(200);
          }
        );
    }
  });
  // $(document).ready(function() {
  // console.log(
  //   $("#carouselExampleIndicators")
  //     .find(".active")
  //     .index()
  // );
  // $(".carousel-control-prev")
  //   .add(".carousel-control-next")
  //   .on("click", function() {
  //     $("#carouselText")
  //       .find(".carousel-item")
  //       .removeClass("active");
  //     // console.log(
  //     //   $("#carouselExampleIndicators")
  //     //     .find(".active")
  //     //     .index()
  //     // );
  //     $("#carouselText")
  //       .find(".carousel-item")
  //       .eq(
  //         $("#carouselExampleIndicators")
  //           .find(".active")
  //           .index()
  //       )
  //       .addClass("active");
  //   });
  // $(".carousel-control-prev").on("click", function() {
  //   console.log(
  //     $("#carouselExampleIndicators")
  //       .find(".active")
  //       .index()
  //   );
  //   $("#carouselText")
  //     .find(".carousel-item")
  //     .removeClass("active");
  //   $("#carouselText")
  //     .find(".carousel-item")
  //     .eq(
  //       $("#carouselExampleIndicators")
  //         .find(".active")
  //         .index()
  //     )
  //     .addClass("active");
  // });
  // });

  function hasClass(className) {
    if (!document.getElementsByClassName) {
      //class name function in old IE
      document.getElementsByClassName = function(search) {
        var d = document,
          elements,
          pattern,
          i,
          results = [];
        if (d.querySelectorAll) {
          // IE8
          return d.querySelectorAll("." + search);
        }
        if (d.evaluate) {
          // IE6, IE7
          pattern =
            ".//*[contains(concat(' ', @class, ' '), ' " + search + " ')]";
          elements = d.evaluate(pattern, d, null, 0, null);
          while ((i = elements.iterateNext())) {
            results.push(i);
          }
        } else {
          elements = d.getElementsByTagName("*");
          pattern = new RegExp("(^|\\s)" + search + "(\\s|$)");
          for (i = 0; i < elements.length; i++) {
            if (pattern.test(elements[i].className)) {
              results.push(elements[i]);
            }
          }
        }
        return results;
      };
    }
    return !!document.getElementsByClassName(className).length; //return a boolean
  }
  if (hasClass("research")) {
    mods.push("mod/research");
  }
  if (hasClass("homepage")) {
    mods.push("mod/homepage");
  }
  if (hasClass("solution")) {
    mods.push("mod/solution");
  }
  //feature list
  if (hasClass("list-features")) {
    mods.push("mod/list-feature");
  }

  //collapsing list
  if (hasClass("list-collapsing")) {
    mods.push("mod/list-collapsing");
  }

  if (hasClass("version-switcher")) {
    mods.push("mod/version-switcher");
  }

  if (hasClass("doc-floating-warning")) {
    mods.push("mod/floating-warning");
  }

  //fundraising heart
  if (hasClass("fundraising-heart")) {
    mods.push("mod/fundraising-heart");
  }
  //fundraising donation form
  if (hasClass("fundraising-index")) {
    mods.push("mod/fundraising-index");
  }

  //fundraising heroes list
  if (hasClass("heroes-section")) {
    mods.push("mod/fundraising-heroes");
  }

  if (hasClass("dashboard-index")) {
    mods.push("dashboard/index");
  }

  if (hasClass("dashboard-detail")) {
    mods.push("dashboard/detail");
  }

  // search form
  if (hasClass("search")) {
    mods.push("mod/search-key");
  }

  if (hasClass("stripe-custom-checkout")) {
    mods.push("mod/stripe-custom-checkout");
  }

  if (hasClass("django-hero-form")) {
    mods.push("mod/stripe-change-card");
  }

  if (hasClass("corporate-membership-join-form")) {
    mods.push("mod/corporate-member-join");
  }

  if (hasClass("messages")) {
    mods.push("mod/messages");
  }

  if (hasClass("code-block-caption") || hasClass("snippet")) {
    mods.push("mod/clippify");
  }

  if (hasClass("console-block")) {
    mods.push("mod/console-tabs");
  }

  require(mods);
});
