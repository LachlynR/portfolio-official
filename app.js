// jQuery which slides the nav up and down when the burger icon is clicked

$(document).ready(function () {
  $(".fa-hamburger").click(() => {
    $("nav").slideToggle("slow");
  });
});

