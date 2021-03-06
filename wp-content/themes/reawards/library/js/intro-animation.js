$(document).ready(function() {

    


	/* This next function:
		
		1. Finds all paths in SECOND (hidden) svg
		2. Calculates path length
		3. Adds stroke array and offset so they can be animated in ScrollMagic scenes
	*/


	function hideSVGPathsIntro() {

	    var paths = $('.logo-intro').find('path#shape'); 								// 1. Finds all paths in SECOND (hidden) svg

	    //for each PATH..
	    $.each( paths, function() {

	        //get the total length
	        var pathLength = this.getTotalLength();						// 2. Calculates path length
	        var totalLength = Math.ceil(pathLength);

	        //set PATHs to invisible
	        $(this).css({
	            'stroke-dashoffset': totalLength +1,
	            'stroke-dasharray': totalLength + ' ' + totalLength +1		// 3. Adds stroke array and offset so they can be animated in ScrollMagic scenes
	        });
	    });
	}

	hideSVGPathsIntro();


























    






    



    /***

    1. Detect window height and change class if required
    2. Change class of scroll nav if clicked to appear 'active'
    3. Scroll to exact pixel for large screens
    4. Scroll to exact pixel for small screens

    ***/

    // 1. Detect window height and change class if required
    function windowSize() {
        windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
        windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    }
    
    windowSize();
        $( window ).resize(function() {
            windowSize();
    });

    function screenHeightClass() {
        if(windowHeight >= 900) {
            $('body').addClass('big-screen').removeClass('small-screen').removeClass('no-building-animation');
        } else if(windowHeight >= 768 && windowHeight < 900){
            $('body').addClass('small-screen').removeClass('big-screen').removeClass('no-building-animation');
        } else {
            $('body').removeClass('small-screen').removeClass('big-screen').addClass('no-building-animation');
        }
    }

    function screenWidthClass() {
        if(windowWidth >= 600) {
            $('body').addClass('wide-screen').removeClass('no-building-animation');
        } else {
            $('body').removeClass('wide-screen').addClass('no-building-animation');
        }
    }

    // Fire.
    screenHeightClass();
    screenWidthClass();

    // And recheck if window gets resized.
    $(window).bind('resize',function(){
        screenHeightClass();
        screenWidthClass();
    });



    // 2. Change class of scroll nav if clicked to appear 'active'
    $('.scroll-nav li').click(function() {
        $("li.current-scroll").removeClass("current-scroll");
        $(this).addClass('current-scroll');
    });


    
    var scrollTime = 4;

    // 3. Scroll to exact pixel for large screens
    $('.big-screen .scroll-1').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:1750}, ease:Expo.easeOut});});
    $('.big-screen .scroll-2').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:3000}, ease:Expo.easeOut});});
    $('.big-screen .scroll-3').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:4700}, ease:Expo.easeOut});});
    $('.big-screen .scroll-4').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:6500}, ease:Expo.easeOut});});
    $('.big-screen .scroll-5').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:8200}, ease:Expo.easeOut});});
    $('.big-screen .scroll-6').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:9700}, ease:Expo.easeOut});});
    $('.big-screen .scroll-7').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:11200}, ease:Expo.easeOut});});
    $('.big-screen .scroll-8').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:12700}, ease:Expo.easeOut});});
    $('.big-screen .scroll-9').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:14000}, ease:Expo.easeOut});});


    // 4. Scroll to exact pixel for small screens
    $('.small-screen .scroll-1').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:1500}, ease:Expo.easeOut});});
    $('.small-screen .scroll-2').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:3000}, ease:Expo.easeOut});});
    $('.small-screen .scroll-3').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:4700}, ease:Expo.easeOut});});
    $('.small-screen .scroll-4').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:6500}, ease:Expo.easeOut});});
    $('.small-screen .scroll-5').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:8200}, ease:Expo.easeOut});});
    $('.small-screen .scroll-6').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:9700}, ease:Expo.easeOut});});
    $('.small-screen .scroll-7').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:11000}, ease:Expo.easeOut});});
    $('.small-screen .scroll-8').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:12500}, ease:Expo.easeOut});});
    $('.small-screen .scroll-9').click(function(){TweenLite.to(window, scrollTime, {scrollTo:{y:14000}, ease:Expo.easeOut});});


    








}); // end document ready







// Play intro animation once preloader is totally complete


function introAnim() {

    // Add Controller that runs these animations
    var introAnimation = new ScrollMagic.Controller({
        reset: true
    });


/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

    /************************* Scroll scene: Draw icon outline *************************/




    var $introBox = $('.intro-container');

    var fadeTween = new TimelineMax()
    .add(TweenMax.to($introBox, 0.3, {opacity: 1, ease:Power1.easeOut, onComplete: lettersAnimation})); // draw wall for 1.0 seconds

    

    



    // 3. ScrollMagic scenes with setTween
    new ScrollMagic.Scene({
        triggerElement: ".f1",
        triggerHook: 'onLeave',
        duration: 500,
        tweenChanges: true,
        offset: -700
    })
    .setTween(fadeTween)
    //.addIndicators({name: "draw the logo path"})
    .addTo(introAnimation);



    // 1. Target the svg path
    var $shape = $("#rea-logo #shape");

    // TweenLite for house logo bounce scale effect
    var houseLogo = $('#rea-logo .house-logo');

    


    // the timeline
    var tl = new TimelineLite();

    // the variables
    
    var letterA1 = $('#rea-logo #area .area-a1');
    var letterA2 = $('#rea-logo #area .area-r');
    var letterA3 = $('#rea-logo #area .area-e');
    var letterA4 = $('#rea-logo #area .area-a2');
    // var annual = $('.annual');
    // var rea = $('.rea');
    // var excellence = $('.excellence');
    // var awards = $('.awards');
    var tagline = $('#rea-logo .annual-rea-excellence-awards');
    var introText = $('.intro-container h4');
    var introButton = $('.intro-button');
    var scrollArrow = $('.scroll-arrow');
    

    var fadeSpeed = 0.2;

    // the timeline that will be called after the rea line animation ends
    function lettersAnimation(){
        tl
            
            .to(introButton, fadeSpeed, {opacity: 1}) // intro button
            .add( TweenLite.to($shape, 1.3, {strokeDashoffset: 0, ease:Power1.easeInOut}))
            .add( TweenLite.fromTo(houseLogo, 1, {scale: 0}, {scale: 1, ease:Bounce.easeOut})) // logo scale bounce effect

            //.to(houseLogo, 0.5, {scale: 0.5}, '+=0.7')
            .to(letterA1, fadeSpeed, {opacity: 1}, '+=0') // A
            .to(letterA2, fadeSpeed, {opacity: 1}, '+=0.25') // R
            .to(letterA3, fadeSpeed, {opacity: 1}, '+=0.25') // E
            .to(letterA4, fadeSpeed, {opacity: 1}, '+=0.25') // A
            .to(tagline, fadeSpeed, {opacity: 1}, '+=0.7') // tagline

            .to(introText, fadeSpeed, {opacity: 1}, '+=1.5') // intro paragraph
            

            .to(scrollArrow, fadeSpeed, {opacity: 1}, '+=0.5') // intro arrow
            //.add( TweenMax.fromTo(scrollArrow, 1, {top: 0}, {top: 10, repeat: -1, yoyo: true, ease:Sine.easeOut})) // arrow effect 1
            //.add( TweenMax.fromTo(scrollArrow, 1, {top: 0}, {top: 10, repeat: -1, yoyo: true, ease:SlowMo.easeOut})) // arrow effect 2
            .add( TweenMax.fromTo(scrollArrow, 1, {top: 0}, {top: 10, repeat: -1, yoyo: true, ease:Elastic.easeIn})) // arrow effect 2

            ; // end of animation
    }
} // end function introAnim





// play video
function playVid() {
    document.getElementById("bgvid").play();
    introAnim();
    $('#preloader').css('display', 'none');
}



// preloader
function preloadEnd(){

    var $preloadLogo = $('.preloader-inner');
    var $preloadShape = $('.preload-shape');
    var $preloadHouse = $('.preload-house-logo');
    var $preloadStage = $('#preloader');

    var preloadTimeline = new TimelineMax({

        onComplete:playVid
    });


    preloadTimeline.to($preloadShape, 1, {opacity:0, ease:Power1.easeOut})
    preloadTimeline.to($preloadLogo, 1, {top:-200, ease: Elastic. easeIn.config( 1, 0.75)}, '-=0.25')
    preloadTimeline.to($preloadLogo, 0.5, {opacity:0, ease:Expo.easeInOut}, '-=0.25')
    preloadTimeline.to($preloadStage, 0.5, {opacity:0, ease:Expo.easeInOut})
    ;
}

window.onload = preloadEnd;





















							

