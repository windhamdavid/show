$(function () {
    $('.animated-gif').each(function (i, e) {
        disableGif(e)
    });
});

Reveal.addEventListener('slidechanged', initAnimatedGifs);
Reveal.addEventListener('ready', initAnimatedGifs);

function initAnimatedGifs(event) {
    $('.animated-gif', event.currentSlide).each(function (i, e) {
        enableGif(e)
    });
    if (event.previousSlide)
        $('.animated-gif', event.previousSlide).each(function (i, e) {
            disableGif(e)
        });
}

function enableGif(e) {
    var src = $(e).attr("src")
    $(e).attr('src', src.replace('-image.gif', '.gif'));
}

function disableGif(e) {
    var src = $(e).attr("src")
    $(e).attr('src', src.replace('.gif', '-image.gif'));
}