$(function() {
    $(this).keydown(function(event) {
        let key = $(this).find('.key[data-key='+event.which+']'),
            sound = $(this).find('audio[data-key='+event.which+']')[0];
        key.toggleClass('playing');
        sound.play();
        sound.currentTime = 0;
    });
    $(this).keyup(function(event) {
        let key = $(this).find('.key[data-key='+event.which+']');
        key.toggleClass('playing');
    });
});