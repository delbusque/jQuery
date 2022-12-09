$("#btn").click(() => alert('Hello jQuery !'));

$(document).ready(() => $(".image").click(() => alert('Image clicked !')));

$("h1.heading").click(function () {
    $(this).hide()
});

$('#p1').hover(function () {
    $(this).hide()
});

$('#p2').click(() => $('#p2').hide());

$('#p3').dblclick(() => $('#p3').hide());

$('#p4').mouseout(function () {
    $(this).hide();
});

$(document).keypress((e) => {
    if (e.which == 13) {
        $('#p5').hide()
    }
});
