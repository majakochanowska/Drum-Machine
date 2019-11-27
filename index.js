$(function() {

    $('.drum-pad').each(function() {
        $(this).on('click', function() {
            $(this).children()[0].play()
        })
    })
})