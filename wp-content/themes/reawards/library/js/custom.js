$(document).ready(function() {

function elementsFadeIn() {
	$('.page-fader').css('opacity', 1);
}

setTimeout(elementsFadeIn, 1000);


var viewportHeight = $(window).height() -145;
var viewportWidth = $(window).width();

$('.viewport-size').click(function() {
    alert('height: ' +viewportHeight +' width: ' +viewportWidth);
});







// start back at top of page for home page only
if ($("body").hasClass("home")) {
    
  $(window).unload(function() {
    $('body').scrollTop(0);
  });
}






// Add class to the body if coming from the anchor link
var url=document.location.hash;
if(url != ''){
  $(document.body).addClass('no-intro-bro');
}

// scroll down if coming from the anchor link
function scrollHome() {
  $("html, body").animate({scrollTop: $('#anchor').offset().top }, 2000);
}

if ($("body").hasClass("no-intro-bro")) {
  setTimeout(scrollHome, 510);
}



/*** Search ***/
$('.search-icon').on('click', function(){
    $('.morphsearch').addClass('open');
    $('input.morphsearch-input').focus();
});

$('.morphsearch-close.open').on('click', function(){
    $(this).removeClass('open');
});

(function() {
    var morphSearch = document.getElementById( 'morphsearch' ),
        input = morphSearch.querySelector( 'input.morphsearch-input' ),
        ctrlClose = morphSearch.querySelector( 'span.morphsearch-close' ),
        isOpen = isAnimating = false,
        // show/hide search area
        toggleSearch = function(evt) {
            // return if open and the input gets focused
            if( evt.type.toLowerCase() === 'focus' && isOpen ) return false;

            var offsets = morphsearch.getBoundingClientRect();
            if( isOpen ) {
                classie.remove( morphSearch, 'open' );

                // trick to hide input text once the search overlay closes 
                // todo: hardcoded times, should be done after transition ends
                if( input.value !== '' ) {
                    setTimeout(function() {
                        classie.add( morphSearch, 'hideInput' );
                        setTimeout(function() {
                            classie.remove( morphSearch, 'hideInput' );
                            input.value = '';
                        }, 300 );
                    }, 500);
                }
                
                input.blur();
            }
            else {
                classie.add( morphSearch, 'open' );
            }
            isOpen = !isOpen;
        };

    // events
    input.addEventListener( 'focus', toggleSearch );
    ctrlClose.addEventListener( 'click', toggleSearch );
    // esc key closes search overlay
    // keyboard navigation events
    document.addEventListener( 'keydown', function( ev ) {
        var keyCode = ev.keyCode || ev.which;
        if( keyCode === 27 && isOpen ) {
            toggleSearch(ev);
        }
    } );


    /***** for demo purposes only: don't allow to submit the form *****/
    //morphSearch.querySelector( 'button[type="submit"]' ).addEventListener( 'click', function(ev) { ev.preventDefault(); } );
})();


/*** Responsive full screen nav ***/
function mobileNavShow() {
    $( '.mobile-nav .contents').css('opacity', 1);
    $( '.mobile-nav .contents' ).center();
}

function mobileNavHide() {
    $( '.mobile-nav .contents').css('opacity', 0);
    $('.mobile-nav').removeClass('open');
}


/*** Responsive full screen nav ***/
$('.mobile .fa').on('click', function(){
    $('.mobile-nav').addClass('open');
    setTimeout(mobileNavShow, 510);
});

$('.mobile-nav-close').on('click', function(){
    setTimeout(mobileNavHide, 510);
});


























	











/* This function:
	
	1. Finds all paths in SECOND (hidden) svg
	2. Calculates path length
	3. Adds stroke array and offset so they can be animated in ScrollMagic scenes
*/


function hideSVGPaths() {

    var paths = $('.hidden-svg').find('path'); 								// 1. Finds all paths in SECOND (hidden) svg

    //for each PATH..
    $.each( paths, function() {

        //get the total length
        var pathLength = this.getTotalLength();						// 2. Calculates path length
        var totalLength = Math.ceil(pathLength);

        //set PATHs to invisible
        $(this).css({
            'stroke-dashoffset': totalLength,
            'stroke-dasharray': totalLength + ' ' + totalLength 		// 3. Adds stroke array and offset so they can be animated in ScrollMagic scenes
        });
    });
}

hideSVGPaths();


}); // end document ready


// Setup cloud class change
function cloudsSlow() {
    $('.clouds').removeClass('after');
    $('.clouds').addClass('slow');
}

$(document).scroll(function() {
    //console.log($(document).scrollTop());
    
    if ($('.clouds').hasClass('after')) {
        setTimeout(cloudsSlow, 1000);

    }

    // play video on iPad/iPhone
    $('.video-overlay').bind("click tap", function(){
        $("#bgvid").get(0).play();
    });
})






$(window).load(function() {
    // centralize #some-element against the window
    $( '.intro-container' ).center();
});





/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );












							

