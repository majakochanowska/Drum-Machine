$(function() {

    $('.drum-pad').each(function() {
        $(this).on('click', function() {
            $(this).children()[0].play();
            $('#display').html($(this).attr('id'))
        })
    });

    $(document).on('keydown', function(event) {
        if (event.which == 81) {
            $('audio#Q')[0].play();
            $('#Q').parent().addClass('active');
            $('#display').html($('#heater-1').attr('id'))
        }
        else if (event.which == 87) {
            $('audio#W')[0].play();
            $('#W').parent().addClass('active');
            $('#display').html($('#heater-2').attr('id'))
        }
        else if (event.which == 69) {
            $('audio#E')[0].play();
            $('#E').parent().addClass('active');
            $('#display').html($('#heater-3').attr('id'))
        }
        else if (event.which == 65) {
            $('audio#A')[0].play();
            $('#A').parent().addClass('active');
            $('#display').html($('#heater-4').attr('id'))
        }
        else if (event.which == 83) {
            $('audio#S')[0].play();
            $('#S').parent().addClass('active');
            $('#display').html($('#clap').attr('id'))
        }
        else if (event.which == 68) {
            $('audio#D')[0].play();
            $('#D').parent().addClass('active');
            $('#display').html($('#open-hh').attr('id'))
        }
        else if (event.which == 90) {
            $('audio#Z')[0].play();
            $('#Z').parent().addClass('active');
            $('#display').html($('#kick-n-hat').attr('id'))
        }
        else if (event.which == 88) {
            $('audio#X')[0].play();
            $('#X').parent().addClass('active');
            $('#display').html($('#kick').attr('id'))
        }
        else if (event.which == 67) {
            $('audio#C')[0].play();
            $('#C').parent().addClass('active');
            $('#display').html($('#closed-hh').attr('id'))
        }
    });

    $(document).on('keyup', function() {
        $('button').removeClass('active')
    })
})
