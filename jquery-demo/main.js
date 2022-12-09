$("#btn").click(() => alert('Hello jQuery !'));

$(document).ready(() => $(".image").click(() => alert('Image clicked !')));

$("h1.heading").click(function () {
    $(this).hide()
});