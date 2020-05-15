// jQuery which slides the nav up and down when the burger icon is clicked

$(document).ready(function () {
  $(".fa-bars").click(() => {
    $("nav").slideToggle("slow");
  });
});
