$(document).ready(function(){

  $(".dropdown-trigger").click(function() {

    // Toggle the "is-active" class on "dropdown"
    $(this).parent(".dropdown").toggleClass("is-active");
  });
});