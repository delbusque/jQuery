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

$('#btn-2').click(() => $('#image').toggle(100, () => {
    $('#image-2').fadeToggle(200)
}))

$("#btn-1").click(() => {
    $('main').fadeTo(500, 0.5);
});

$('#btn-3').click(() => {
    $('#image').animate({
        ['border-radius']: '85px',
    }, 500)
})

