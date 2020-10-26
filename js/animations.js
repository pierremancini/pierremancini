$(document).ready(function(){

  $(".dropdown-trigger").click(function() {

    // Toggle the "is-active" class on "dropdown"
    $(".dropdown-trigger").parent(".dropdown").toggleClass("is-active");
  });
});