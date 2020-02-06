define([
  "jquery" //requires jquery
], function($) {
  $(document).ready(function() {
    // $("#carouselExampleIndicators").carousel("pause");
    $("#carousel-text-prev").on("click", async function() {
      // setTimeout(function() {
      //   // $("#carousel-text-prev").removeAttr("href");
      //   $("#carousel-text-prev").attr("href", ".carousel");
      // }, 1000);
      await $("#carousel-prev")[0].click();
      // setTimeout(function() {
      //   $("#carousel-text-prev").removeAttr("href");
      //   // $("#carousel-text-prev").attr("href", ".carousel");
      // }, 180);
    });
    $(".carousel-control-next").on("click", async function() {
      // setTimeout(function() {
      //   // $("#carousel-text-prev").removeAttr("href");
      //   $("#carousel-text-next").attr("href", ".carousel");
      // }, 1000);
      await $("#carousel-next")[0].click();
      // setTimeout(function() {
      //   $("#carousel-text-next").removeAttr("href");
      // }, 180);
    });
  });
});
