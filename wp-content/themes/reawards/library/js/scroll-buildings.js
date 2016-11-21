function mobileBuildingAnimations() {

	// Add Controller that runs these animations
	var mobileController = new ScrollMagic.Controller({
	


	});



	new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: 100
    })
    .setClassToggle('.building-fader', 'alive') // add class toggle
    //.addIndicators({name: 'buildings fade in'})
    .addTo(mobileController);


    // Target the svg path id
	var $logo = $("path#logo");

	// build tween duration and type
	var logoLineTween = new TimelineMax()
	.add(TweenMax.to($logo, 0.5, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw logo for 1.0 seconds

    // build animation scene
    new ScrollMagic.Scene({
        triggerElement: '.f2', // triggers at top of window
        triggerHook: 'onLeave',
        duration: 200, // 400px of scroll
        tweenChanges: true, // make the tween happen
        offset: -200
    })
    
    // add scene to ScrollMagic Controller (scrollDrawing)
    .setTween(logoLineTween)
    //.addIndicators({name: "Logo shape draw"})
    .addTo(mobileController);



// home intro heading fade in
new ScrollMagic.Scene({
    triggerElement: ".f2", 
    triggerHook: 'onLeave',
    offset: -250
})
.setClassToggle(".header-container h2", "active")
//.addIndicators({name: "header fade in"})
.addTo(mobileController);

// home text 1 fade in
new ScrollMagic.Scene({
    triggerElement: ".f2", 
    triggerHook: 'onLeave',
    offset: -150
})
.setClassToggle(".home-text h3", "active")
//.addIndicators({name: "h3 fade in"})
.addTo(mobileController);

// home text 2 fade in
new ScrollMagic.Scene({
    triggerElement: ".f2", 
    triggerHook: 'onLeave',
    offset: -50
})
.setClassToggle(".home-text p", "active")
//.addIndicators({name: "p fade in"})
.addTo(mobileController);









// building 1 light up
new ScrollMagic.Scene({
    triggerElement: ".f2", 
    triggerHook: 'onLeave',
    offset: 230,
    duration: 250
})
.setClassToggle(".f2", "build-1-on")
//.addIndicators({name: "building 1 fade in"})
.addTo(mobileController);

// building 2 light up
new ScrollMagic.Scene({
    triggerElement: ".f2", 
    triggerHook: 'onLeave',
    offset: 530,
    duration: 250
})
.setClassToggle(".f2", "build-2-on")
//.addIndicators({name: "building 2 fade in"})
.addTo(mobileController);

// building 1 light up
new ScrollMagic.Scene({
    triggerElement: ".f2", 
    triggerHook: 'onLeave',
    offset: 830,
    duration: 200
})
.setClassToggle(".f2", "build-3-on")
//.addIndicators({name: "building 3 fade in"})
.addTo(mobileController);

// building 1 light up
new ScrollMagic.Scene({
    triggerElement: ".f2", 
    triggerHook: 'onLeave',
    offset: 1080,
    duration: 200
})
.setClassToggle(".f2", "build-4-on")
//.addIndicators({name: "building 4 fade in"})
.addTo(mobileController);

// building 1 light up
new ScrollMagic.Scene({
    triggerElement: ".f2", 
    triggerHook: 'onLeave',
    offset: 1400,
    duration: 250
})
.setClassToggle(".f2", "build-5-on")
//.addIndicators({name: "building 5 fade in"})
.addTo(mobileController);

// building 1 light up
new ScrollMagic.Scene({
    triggerElement: ".f2", 
    triggerHook: 'onLeave',
    offset: 1780,
    duration: 220
})
.setClassToggle(".f2", "build-6-on")
//.addIndicators({name: "building 6 fade in"})
.addTo(mobileController);

// building 1 light up
new ScrollMagic.Scene({
    triggerElement: ".f2", 
    triggerHook: 'onLeave',
    offset: 2050,
    duration: 250
})
.setClassToggle(".f2", "build-7-on")
//.addIndicators({name: "building 7 fade in"})
.addTo(mobileController);

// building 1 light up
new ScrollMagic.Scene({
    triggerElement: ".f2", 
    triggerHook: 'onLeave',
    offset: 2330
})
.setClassToggle(".f2", "build-8-on")
//.addIndicators({name: "building 8 fade in"})
.addTo(mobileController);




















	

	/************************* Scroll scene: Logo outer line draw *************************/

	/************************* Scroll scene: Logo inner icon scale up bounce effect *************************/

	// Note: this animation is css keyframe located in animations.css

	new ScrollMagic.Scene({
		triggerElement: ".f2", 
		triggerHook: 'onLeave',
		offset: 0
	})
	.setClassToggle(".svg-logo-inner", "active") // add class toggle
	//.addIndicators({name: "logo icon inner"}) // add indicators (requires plugin)
	.addTo(mobileController);


	/************************* Scroll scene: White Logo baseline animate left to right *************************/

	// Note: this animation is css keyframe located in animations.css

	new ScrollMagic.Scene({
		triggerElement: ".f2", 
		triggerHook: 'onLeave',
		offset: 0
	})
	.setClassToggle(".logo-white-path", "active") // add class toggle
	//.addIndicators({name: "white logo path"}) // add indicators (requires plugin)
	.addTo(mobileController);


	new ScrollMagic.Scene({
        triggerElement: '.f2',
        triggerHook: 'onLeave',
        duration: 800,
        offset: 800
    })
    .setTween('.svg-logo-inner', {left: 350}) // the element we want to move
    //.addIndicators({name: "logo move right"})
    //.addTo(mobileController);





































	




































}