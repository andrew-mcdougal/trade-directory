jQuery(document).ready(function($) { 




$('.bg-slides').superslides( {
  play: 2000,
  animation: 'fade'
});


$('.bg-slides').css({
  'position' : 'absolute',
  'z-index' : -1
});






    var iframe = document.querySelector('iframe');
    var player = new Vimeo.Player(iframe);

    player.addEvent('playProgress', onPlayProgress);
	player.addEvent('seek', onSeek);


    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });






});


