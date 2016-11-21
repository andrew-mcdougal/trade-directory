// back to menu animation
$( document ).ready(function() {
  
  //create a timeline that calls myFunction() when it completes
  var backToMenu = new TimelineLite();

  // create the variables to animate
  var backArrow = $('.back-to-menu i');
  var backPara = $('.back-to-menu p');

  backArrow.css('opacity', 0.5);
  backPara.css('opacity', 0.5);

  // the timeline that will be called when sub nav is hovered
  backToMenu

  .pause()

  // add all the animations...
  .to(backPara, 0.25, {opacity: 1, ease:Power4.easeInOut})
  .fromTo(backPara, 0.25, {left: 40}, {left: 20}, '-=0.25')
  .to(backArrow, 0.25, {opacity: 1, ease:Power4.easeInOut}, '-=0.25')
  .fromTo(backArrow, 0.25, {left: 40}, {left: 0}, '-=0.25'); // end of animation




    // on hover do that stuff...

    $('.sub-nav').hover(function() {
      backToMenu.play();
    }, function() {
      backToMenu.reverse();
    });



    // Awards accordians
    $(".accordion .award-content").css('display', 'none');


  $('.accordion').find('a').click(function(){



      //Expand or collapse this panel
      $('.accordion .fa').addClass('fa-minus-square-o');
      $('.accordion .fa').addClass('fa-plus-square-o');
      $('.accordion a').removeClass('active');
      $(this).addClass('active');
      $(this).find('.fa').removeClass('fa-plus-square-o');
      $(this).find('.fa').addClass('fa-minus-square-o');
      $(this).next().slideToggle('slow');

      //Hide the other panels
      $(".accordion .award-content").not($(this).next()).slideUp('slow');

    });


  // Search truncate result 
  $('.search-content p').succinct({ size: 150});
  $('.in-the-media-page h2').succinct({ size: 100});

  
});




// form focus and populated change appearance
jQuery(document).ready(function($) {

 $(".form-half input").focus(function(){
   $(this).parent().addClass("focussed");

  }).blur(function(){
       $(this).parent().removeClass("focussed");
  });


$('.form-half input').keypress(function() {
  $(this).parent().addClass("something");
});

});







