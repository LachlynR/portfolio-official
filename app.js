// jQuery which slides the nav up and down when the burger icon is clicked

$(document).ready(function() {
    $(".fa-bars").click(() => {
        $("nav").slideToggle('slow');
    })
})


if (screen.width > 487) {
    alert(`This is only available on screens less than 487px. Your screen width is ${screen.width}`)
}