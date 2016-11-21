function buildingAnimations() {
	/*************************
	Scroll scenes: 
		Pin second panel

	Notes: Animation occurs as soon as user scrolls down the page.
*************************/
	
	// Add Controller that runs these animations
	var pinPanel = new ScrollMagic.Controller({
	});

	/************************* 
	Scroll scene: 
		Pin second panel 
	*************************/

	// this scene keeps the second panel PINNED in same spot for duration of scrolling
	var scene = new ScrollMagic.Scene({
		triggerElement: '.f2',
		triggerHook: 'onLeave',
		offset: -85,
		duration: 16000
	})
	//.setPin('.f2') // the element we want to pin
	.addIndicators({name: 'PIN the SCENE'})
	//.addTo(pinPanel); // Add Scene to ScrollMagic Controller

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/



/*************************
	Scroll scenes: 
		Animate clouds in to scene
*************************/
	
	// Add Controller that runs these animations
	var cloudsAppear = new ScrollMagic.Controller({
	});

	/************************* 
	Scroll scene: 
		Pin second panel 
	*************************/

	// this scene keeps the second panel PINNED in same spot for duration of scrolling
	var scene = new ScrollMagic.Scene({
		triggerElement: '.f2',
		triggerHook: 'onLeave',
		offset: 460,
	})
	.setClassToggle('.clouds', 'after') // the element we want to pin
	.addIndicators({name: 'clouds come IN!'})
	//.addTo(cloudsAppear);

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/






/************************* Scroll scene: Logo inner icon scale up bounce effect *************************/

	// Note: this animation is css keyframe located in animations.css

	new ScrollMagic.Scene({
		triggerElement: ".f2", 
		triggerHook: 'onLeave',
		offset: 500
	})
	.setClassToggle(".svg-logo-inner", "active") // add class toggle
	//////.addIndicators({name: "logo icon inner"}) // add indicators (requires plugin)
	.addTo(iconAnimation);






/*************************
	Scroll scenes: 
		Logo outer line draw
		Logo outer line pinned to position
		Logo inner icon scale up bounce effect
		Logo inner icon pinned to position

	Notes: Animation occurs as soon as user scrolls down the page.
*************************/
	
	// Add Controller that runs these animations
	var iconAnimation = new ScrollMagic.Controller({
		reset: true
	});


/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

	/************************* Scroll scene: Logo outer line draw *************************/

	// Target the svg path id
	var $logo = $("path#logo");

	// build tween duration and type
	var logoLineTween = new TimelineMax()
		.add(TweenMax.to($logo, 1, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw logo for 1.0 seconds


	// build animation scene
	new ScrollMagic.Scene({
		triggerElement: '.f2', // triggers at top of window
		triggerHook: 'onLeave',
		duration: 400, // 400px of scroll
		tweenChanges: true, // make the tween happen
		offset: 100
	})
	
	// add scene to ScrollMagic Controller (scrollDrawing)
	.setTween(logoLineTween)
	//////.addIndicators({name: "Logo shape draw"})
	.addTo(iconAnimation);

	/************************* Scroll scene: Logo outer line draw *************************/

	/************************* Scroll scene: Logo inner icon scale up bounce effect *************************/

	// Note: this animation is css keyframe located in animations.css

	new ScrollMagic.Scene({
		triggerElement: ".f2", 
		triggerHook: 'onLeave',
		offset: 500
	})
	.setClassToggle(".svg-logo-inner", "active") // add class toggle
	//////.addIndicators({name: "logo icon inner"}) // add indicators (requires plugin)
	.addTo(iconAnimation);


	/************************* Scroll scene: White Logo baseline animate left to right *************************/

	// Note: this animation is css keyframe located in animations.css

	new ScrollMagic.Scene({
		triggerElement: ".f2", 
		triggerHook: 'onLeave',
		offset: 500
	})
	.setClassToggle(".logo-white-path", "active") // add class toggle
	////////.addIndicators({name: "white logo path"}) // add indicators (requires plugin)
	.addTo(iconAnimation);

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

	


	/*************************
        Scroll scenes: 
            Animate building container left to move from building to building
    *************************/

    /************************* Scroll scene: Logo move right to center of first building *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2',
        triggerHook: 'onLeave',
        duration: 800,
        offset: 800
    })
    .setTween('.svg-logo-inner', {left: 313}) // the element we want to move
    //////.addIndicators({name: "logo move right"})
    .addTo(iconAnimation);

    /*----------------------------------------------------------------------------------------------------------------------------------------------------------*/


	/************************* Scroll scene: Baseline animate color red left to right *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2',
        triggerHook: 'onLeave',
        duration: 800,
        offset: 800
    })
    .setTween('.logo-red-path', {width: 290}) // width of red path
    //////.addIndicators({name: "baseline animation color"})

    // Add Scene to ScrollMagic Controller
    .addTo(iconAnimation);








































































/*************************
        Scroll scenes: 
            Animate building container in to hide any animation setups
    *************************/
        
        // Add Controller that runs these animations
        var buildingShow = new ScrollMagic.Controller({

            reset: true
        });


    /*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
    /*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
    /*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

        /************************* Scroll scene: Animate building container in to hide any animation setups *************************/

        new ScrollMagic.Scene({
            triggerElement: '.f2', 
            triggerHook: 'onLeave',
            offset: 460
        })
        .setClassToggle('.building-fader', 'alive') // add class toggle
        //.addIndicators({name: 'buildings fade in'})
        .addTo(buildingShow);

        /*----------------------------------------------------------------------------------------------------------------------------------------------------------*/



    /*************************
        Scroll scenes: 
            Animate building container left to move from building to building
    *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2',
        triggerHook: 'onLeave',
        duration: 800,
        offset: 2500
    })
    .setTween('#building-container', {
        left: -185
    })
    //.addIndicators({name: "animate buildings left on scroll 1"})
    .addTo(buildingShow);

    new ScrollMagic.Scene({
        triggerElement: '.f2',
        triggerHook: 'onLeave',
        duration: 800,
        offset: 4200
    })
    .setTween('#building-container', {
        left: -517
    })
    //.addIndicators({name: "animate buildings left on scroll 2"})
    .addTo(buildingShow);

    new ScrollMagic.Scene({
        triggerElement: '.f2',
        triggerHook: 'onLeave',
        duration: 800,
        offset: 6000
    })
    .setTween('#building-container', {
        left: -950
    })
    //.addIndicators({name: "animate buildings left on scroll 3"})
    .addTo(buildingShow);

    new ScrollMagic.Scene({
        triggerElement: '.f2',
        triggerHook: 'onLeave',
        duration: 800,
        offset: 7600
    })
    .setTween('#building-container', {
        left: -1272
    })
    //.addIndicators({name: "animate buildings left on scroll 4"})
    .addTo(buildingShow);

    new ScrollMagic.Scene({
        triggerElement: '.f2',
        triggerHook: 'onLeave',
        duration: 800,
        offset: 9000
    })
    .setTween('#building-container', {
        left: -1660
    })
    //.addIndicators({name: "animate buildings left on scroll 5"})
    .addTo(buildingShow);

    new ScrollMagic.Scene({
        triggerElement: '.f2',
        triggerHook: 'onLeave',
        duration: 800,
        offset: 10400
    })
    .setTween('#building-container', {
        left: -2121
    })
    //.addIndicators({name: "animate buildings left on scroll 6"})
    .addTo(buildingShow);

    new ScrollMagic.Scene({
        triggerElement: '.f2',
        triggerHook: 'onLeave',
        duration: 800,
        offset: 11800
    })
    .setTween('#building-container', {
        left: -2500
    })
    //.addIndicators({name: "animate buildings left on scroll 7"})
    .addTo(buildingShow);

    /*----------------------------------------------------------------------------------------------------------------------------------------------------------*/








































































/*************************
    Scroll scenes: 
        Draw building one walls
        Opacity animate building lights
        Animate building one button link

    Notes: All walls require 1 x these:
                                
                                1. SVG path variable e.g: var $b1w1 = $("path#wall-01");
                                2. Path animation variable e.g: var building1wall1
                                3. ScrollMagic scene with setTween
                                
*************************/

    // Add Controller that runs these animations
    var drawBuildings = new ScrollMagic.Controller({
        reset: true
    });


/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/

    /************************* Scroll scene: Draw building one walls *************************/

    // 1.
    // Target the svg path id
    var $b1w1 = $("#building-1 #wall-01");
    var $b1w2 = $("#building-1 #wall-02");
    var $b1w3 = $("#building-1 #wall-03");
    var $b1w4 = $("#building-1 #wall-04");
    var $b1w5 = $("#building-1 #wall-05");
    var $b1w6 = $("#building-1 #wall-06");
    var $b1w7 = $("#building-1 #wall-07");
    var $b1w8 = $("#building-1 #wall-08");


    // 2.
    // Wall line animations
    var building1wall1 = new TimelineMax()
    .add(TweenMax.to($b1w1, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building1wall2 = new TimelineMax()
    .add(TweenMax.to($b1w2, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building1wall3 = new TimelineMax()
    .add(TweenMax.to($b1w3, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building1wall4 = new TimelineMax()
    .add(TweenMax.to($b1w4, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building1wall5 = new TimelineMax()
    .add(TweenMax.to($b1w5, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building1wall6 = new TimelineMax()
    .add(TweenMax.to($b1w6, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building1wall7 = new TimelineMax()
    .add(TweenMax.to($b1w7, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building1wall8 = new TimelineMax()
    .add(TweenMax.to($b1w8, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds



    // 3.
    // ScrollMagic scenes with setTween

    var wallDrawDuration = 200;

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: 800 
    })
    .setTween(building1wall1)
    //.addIndicators({name: "Building 1 wall 1 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: 820 //
    })
    .setTween(building1wall2)
    //.addIndicators({name: "Building 1 wall 2 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: 840
    })
    .setTween(building1wall3)
    //.addIndicators({name: "Building 1 wall 3 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: 860
    })
    .setTween(building1wall4)
    //.addIndicators({name: "Building 1 wall 4 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: 880
    })
    .setTween(building1wall5)
    //.addIndicators({name: "Building 1 wall 5 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: 900
    })
    .setTween(building1wall6)
    //.addIndicators({name: "Building 1 wall 6 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: 920
    })
    .setTween(building1wall7)
    //.addIndicators({name: "Building 1 wall 7 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: 940
    })
    .setTween(building1wall8)
    //.addIndicators({name: "Building 1 wall 8 draw"})
    .addTo(drawBuildings);

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/


/************************* Scroll scene: Opacity animate building lights *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: 1150,
        duration: 1350
    })
    .setClassToggle('.all-buildings-2', 'lightup-1') // add class toggle
    //.addIndicators({name: 'building 1 lights'})
    .addTo(drawBuildings);



/************************* Scroll scene: Building ONE Dong line animate red *************************/

    // Target the svg path id
    var $b1dong = $("#building-1 .dong path");


    // Dong line animation
    var building1dong = new TimelineMax()
    .add(TweenMax.to($b1dong, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds


    // ScrollMagic scenes with setTween
    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: 200,
        tweenChanges: true,
        offset: 1500 
    })
    .setTween(building1dong)
    //.addIndicators({name: "Building 1 dong line"})
    .addTo(drawBuildings);




    /************************* Scroll scene: Building ONE Dong link show *************************/

    new ScrollMagic.Scene({
        triggerElement: ".f2", 
        triggerHook: 'onLeave',
        offset: 1700,
        duration: 800
    })
    .setClassToggle(".dong-1", "active") // add class toggle
    //.addIndicators({name: "Building 1 dong link show"})
    .addTo(drawBuildings);



    /************************* Scroll scene: Fade out building 1 *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: 2600
    })
    .setClassToggle('.all-buildings-2', 'no-focus-1') // add class toggle
    //.addIndicators({name: 'fade out building 1'})
    .addTo(drawBuildings);






    /************************* Scroll scene: Draw building two walls *************************/

    // 1.
    // Target the svg path id
    var $b2w1 = $("#building-2 #wall-01");
    var $b2w2 = $("#building-2 #wall-02");
    var $b2w3 = $("#building-2 #wall-03");
    var $b2w4 = $("#building-2 #wall-04");
    var $b2sq = $("#building-2 #squiggle");
    var $b2p1 = $("#building-2 #power-line-1");
    var $b2p2 = $("#building-2 #power-line-2");


    // 2.
    // Wall line animations
    var building2wall1 = new TimelineMax()
    .add(TweenMax.to($b2w1, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building2wall2 = new TimelineMax()
    .add(TweenMax.to($b2w2, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building2wall3 = new TimelineMax()
    .add(TweenMax.to($b2w3, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building2wall4 = new TimelineMax()
    .add(TweenMax.to($b2w4, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building2squiggle = new TimelineMax()
    .add(TweenMax.to($b2sq, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building2p1 = new TimelineMax()
    .add(TweenMax.to($b2p1, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building2p2 = new TimelineMax()
    .add(TweenMax.to($b2p2, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds



    // 3.
    // ScrollMagic scenes with setTween

    var wallDrawDuration = 200;
    var building1Offset = 2600;

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building1Offset 
    })
    .setTween(building2wall1)
    //.addIndicators({name: "Building 2 wall 1 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building1Offset + 20
    })
    .setTween(building2wall2)
    //.addIndicators({name: "Building 2 wall 2 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building1Offset + 40
    })
    .setTween(building2wall3)
    //.addIndicators({name: "Building 2 wall 3 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building1Offset + 60
    })
    .setTween(building2wall4)
    //.addIndicators({name: "Building 2 wall 4 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building1Offset + 300
    })
    .setTween(building2squiggle)
    //.addIndicators({name: "Building 2 squiggle draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building1Offset + 220
    })
    .setTween(building2p1)
    //.addIndicators({name: "Building 2 power line 1 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building1Offset + 200
    })
    .setTween(building2p2)
    //.addIndicators({name: "Building 2 power line 2 draw"})
    .addTo(drawBuildings);

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/


/************************* Scroll scene: Opacity animate building lights *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: building1Offset + 200,
        duration: 1500
    })
    .setClassToggle('.all-buildings-2', 'lightup-2') // add class toggle
    //.addIndicators({name: 'building 2 lights'})
    .addTo(drawBuildings);



/************************* Scroll scene: Building ONE Dong line animate red *************************/

    // Target the svg path id
    var $b2dong = $("#building-2 .dong path");


    // Dong line animation
    var building2dong = new TimelineMax()
    .add(TweenMax.to($b2dong, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds


    // ScrollMagic scenes with setTween
    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: 200,
        tweenChanges: true,
        offset: building1Offset + 600 
    })
    .setTween(building2dong)
    //.addIndicators({name: "Building 1 dong line"})
    .addTo(drawBuildings);




    /************************* Scroll scene: Building ONE Dong link show *************************/

    new ScrollMagic.Scene({
        triggerElement: ".f2", 
        triggerHook: 'onLeave',
        offset: building1Offset +800,
        duration: 800
    })
    .setClassToggle(".dong-2", "active") // add class toggle
    //.addIndicators({name: "Building 2 dong link show"})
    .addTo(drawBuildings);



    /************************* Scroll scene: Fade out building 1 *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: 4300
    })
    .setClassToggle('.all-buildings-2', 'no-focus-2') // add class toggle
    //.addIndicators({name: 'fade out building 2'})
    .addTo(drawBuildings);









    /************************* Scroll scene: Draw building three walls *************************/

    // 1.
    // Target the svg path id
    var $b3w1 = $("#building-3 #wall-01");
    var $b3w2 = $("#building-3 #wall-02");
    var $b3w3 = $("#building-3 #wall-03");
    var $b3w4 = $("#building-3 #wall-04");
    var $b3w5 = $("#building-3 #wall-05");
    var $b3w6 = $("#building-3 #wall-06");
    var $b3w7 = $("#building-3 #curve-01");
    var $b3w8 = $("#building-3 #curve-02");


    // 2.
    // Wall line animations
    var building3wall1 = new TimelineMax()
    .add(TweenMax.to($b3w1, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building3wall2 = new TimelineMax()
    .add(TweenMax.to($b3w2, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building3wall3 = new TimelineMax()
    .add(TweenMax.to($b3w3, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building3wall4 = new TimelineMax()
    .add(TweenMax.to($b3w4, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building3wall5 = new TimelineMax()
    .add(TweenMax.to($b3w5, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building3wall6 = new TimelineMax()
    .add(TweenMax.to($b3w6, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building3wall7 = new TimelineMax()
    .add(TweenMax.to($b3w7, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building3wall8 = new TimelineMax()
    .add(TweenMax.to($b3w8, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds



    // 3.
    // ScrollMagic scenes with setTween

    var wallDrawDuration = 200;
    var building2Offset = 4300;

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building2Offset
    })
    .setTween(building3wall1)
    //.addIndicators({name: "Building 3 wall 1 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building2Offset + 20
    })
    .setTween(building3wall2)
    //.addIndicators({name: "Building 3 wall 2 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building2Offset + 40
    })
    .setTween(building3wall3)
    //.addIndicators({name: "Building 3 wall 3 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building2Offset + 60
    })
    .setTween(building3wall4)
    //.addIndicators({name: "Building 3 wall 4 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building2Offset + 80
    })
    .setTween(building3wall4)
    //.addIndicators({name: "Building 3 wall 4 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building2Offset + 100
    })
    .setTween(building3wall5)
    //.addIndicators({name: "Building 3 wall 5 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building2Offset + 120
    })
    .setTween(building3wall6)
    //.addIndicators({name: "Building 3 wall 6 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building2Offset + 140
    })
    .setTween(building3wall7)
    //.addIndicators({name: "Building 3 wall 7 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building2Offset + 160
    })
    .setTween(building3wall8)
    //.addIndicators({name: "Building 3 wall 8 draw"})
    .addTo(drawBuildings);

    

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/


/************************* Scroll scene: Opacity animate building lights *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: building2Offset + 200,
        duration: 1600
    })
    .setClassToggle('.all-buildings-2', 'lightup-3') // add class toggle
    //.addIndicators({name: 'building 3 lights'})
    .addTo(drawBuildings);



/************************* Scroll scene: Building ONE Dong line animate red *************************/

    // Target the svg path id
    var $b3dong = $("#building-3 .dong path");


    // Dong line animation
    var building3dong = new TimelineMax()
    .add(TweenMax.to($b3dong, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds


    // ScrollMagic scenes with setTween
    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: 200,
        tweenChanges: true,
        offset: building2Offset + 600 
    })
    .setTween(building3dong)
    //.addIndicators({name: "Building 3 dong line"})
    .addTo(drawBuildings);




    /************************* Scroll scene: Building ONE Dong link show *************************/

    new ScrollMagic.Scene({
        triggerElement: ".f2", 
        triggerHook: 'onLeave',
        offset: building2Offset + 800,
        duration: 900
    })
    .setClassToggle(".dong-3", "active") // add class toggle
    //.addIndicators({name: "Building 3 dong link show"})
    .addTo(drawBuildings);



    /************************* Scroll scene: Fade out building 1 *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: 6100
    })
    .setClassToggle('.all-buildings-2', 'no-focus-3') // add class toggle
    //.addIndicators({name: 'fade out building 3'})
    .addTo(drawBuildings);






    /************************* Scroll scene: Draw building four walls *************************/

    // 1.
    // Target the svg path id
    var $b4w1 = $("#building-4 #wall-01");
    var $b4w2 = $("#building-4 #wall-02");
    var $b4w3 = $("#building-4 #wall-03");
    var $b4w4 = $("#building-4 #wall-04");
    var $b4w5 = $("#building-4 #wall-05");
    var $b4w6 = $("#building-4 #wall-06");


    // 2.
    // Wall line animations
    var building4wall1 = new TimelineMax()
    .add(TweenMax.to($b4w1, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building4wall2 = new TimelineMax()
    .add(TweenMax.to($b4w2, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building4wall3 = new TimelineMax()
    .add(TweenMax.to($b4w3, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building4wall4 = new TimelineMax()
    .add(TweenMax.to($b4w4, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building4wall5 = new TimelineMax()
    .add(TweenMax.to($b4w5, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building4wall6 = new TimelineMax()
    .add(TweenMax.to($b4w6, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds



    // 3.
    // ScrollMagic scenes with setTween

    var wallDrawDuration = 200;
    var building3Offset = 6100;

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building3Offset 
    })
    .setTween(building4wall1)
    //.addIndicators({name: "Building 4 wall 1 draw. Building 4 wall 1 draw. Building 4 wall 1 draw. Building 4 wall 1 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building3Offset +20
    })
    .setTween(building4wall2)
    //.addIndicators({name: "Building 4 wall 2 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building3Offset +40
    })
    .setTween(building4wall3)
    //.addIndicators({name: "Building 4 wall 3 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building3Offset +60
    })
    .setTween(building4wall4)
    //.addIndicators({name: "Building 4 wall 4 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building3Offset +80
    })
    .setTween(building4wall5)
    //.addIndicators({name: "Building 4 wall 5 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building3Offset +100
    })
    .setTween(building4wall6)
    //.addIndicators({name: "Building 4 wall 6 draw"})
    .addTo(drawBuildings);




    /*----------------------------------------------------------------------------------------------------------------------------------------------------------*/


/************************* Scroll scene: Opacity animate building lights *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: building3Offset +200,
        duration: 1330
    })
    .setClassToggle('.all-buildings-2', 'lightup-4') // add class toggle
    //.addIndicators({name: 'building 4 lights'})
    .addTo(drawBuildings);



/************************* Scroll scene: Building ONE Dong line animate red *************************/

    // Target the svg path id
    var $b4dong = $("#building-4 .dong path");


    // Dong line animation
    var building4dong = new TimelineMax()
    .add(TweenMax.to($b4dong, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds


    // ScrollMagic scenes with setTween
    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: 200,
        tweenChanges: true,
        offset: building3Offset +600 
    })
    .setTween(building4dong)
    //.addIndicators({name: "Building 4 dong line"})
    .addTo(drawBuildings);




    /************************* Scroll scene: Building ONE Dong link show *************************/

    new ScrollMagic.Scene({
        triggerElement: ".f2", 
        triggerHook: 'onLeave',
        offset: building3Offset +770,
        duration: 750
    })
    .setClassToggle(".dong-4", "active") // add class toggle
    //.addIndicators({name: "Building 4 dong link show"})
    .addTo(drawBuildings);



    /************************* Scroll scene: Fade out building 1 *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: building3Offset +1530
    })
    .setClassToggle('.all-buildings-2', 'no-focus-4') // add class toggle
    //.addIndicators({name: 'fade out building 4'})
    .addTo(drawBuildings);

    

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/



    /************************* Scroll scene: Draw building five walls *************************/

    // 1.
    // Target the svg path id
    var $b5w1 = $("#building-5 #wall-01");
    var $b5w2 = $("#building-5 #wall-02");
    var $b5w3 = $("#building-5 #wall-03");
    var $b5w4 = $("#building-5 #wall-04");
    var $b5w5 = $("#building-5 #wall-05");
    var $b5w6 = $("#building-5 #wall-06");


    // 2.
    // Wall line animations
    var building5wall1 = new TimelineMax()
    .add(TweenMax.to($b5w1, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building5wall2 = new TimelineMax()
    .add(TweenMax.to($b5w2, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building5wall3 = new TimelineMax()
    .add(TweenMax.to($b5w3, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building5wall4 = new TimelineMax()
    .add(TweenMax.to($b5w4, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building5wall5 = new TimelineMax()
    .add(TweenMax.to($b5w5, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building5wall6 = new TimelineMax()
    .add(TweenMax.to($b5w6, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds



    // 3.
    // ScrollMagic scenes with setTween

    var wallDrawDuration = 200;
    var building4Offset = 7700;

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building4Offset 
    })
    .setTween(building5wall1)
    //.addIndicators({name: "Building 5 wall 1 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building4Offset +20
    })
    .setTween(building5wall2)
    //.addIndicators({name: "Building 5 wall 2 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building4Offset +40
    })
    .setTween(building5wall3)
    //.addIndicators({name: "Building 5 wall 3 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building4Offset +60
    })
    .setTween(building5wall4)
    //.addIndicators({name: "Building 5 wall 4 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building4Offset +60
    })
    .setTween(building5wall5)
    //.addIndicators({name: "Building 5 wall 5 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building4Offset +60
    })
    .setTween(building5wall6)
    //.addIndicators({name: "Building 5 wall 6 draw"})
    .addTo(drawBuildings);

    

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/


/************************* Scroll scene: Opacity animate building lights *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: building4Offset +200,
        duration: 1330
    })
    .setClassToggle('.all-buildings-2', 'lightup-5') // add class toggle
    //.addIndicators({name: 'building 5 lights'})
    .addTo(drawBuildings);



/************************* Scroll scene: Building ONE Dong line animate red *************************/

    // Target the svg path id
    var $b5dong = $("#building-5 .dong path");


    // Dong line animation
    var building5dong = new TimelineMax()
    .add(TweenMax.to($b5dong, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds


    // ScrollMagic scenes with setTween
    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: 200,
        tweenChanges: true,
        offset: building4Offset +570 
    })
    .setTween(building5dong)
    //.addIndicators({name: "Building 5 dong line"})
    .addTo(drawBuildings);




    /************************* Scroll scene: Building ONE Dong link show *************************/

    new ScrollMagic.Scene({
        triggerElement: ".f2", 
        triggerHook: 'onLeave',
        offset: building4Offset +720,
        duration: 580
    })
    .setClassToggle(".dong-5", "active") // add class toggle
    //.addIndicators({name: "Building 5 dong link show"})
    .addTo(drawBuildings);



    /************************* Scroll scene: Fade out building 1 *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: building4Offset +1350
    })
    .setClassToggle('.all-buildings-2', 'no-focus-5') // add class toggle
    //.addIndicators({name: 'fade out building 1'})
    .addTo(drawBuildings);


/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/



    /************************* Scroll scene: Draw building six walls *************************/

    // 1.
    // Target the svg path id
    var $b6w1 = $("#building-6 #wall-01");
    var $b6w2 = $("#building-6 #wall-02");
    var $b6w3 = $("#building-6 #wall-03");
    var $b6w4 = $("#building-6 #wall-04");
    var $b6w5 = $("#building-6 #wall-05");
    var $b6w6 = $("#building-6 #wall-06");
    var $b6w7 = $("#building-6 #wall-07");
    var $b6w8 = $("#building-6 #wall-08");
    var $b6w9 = $("#building-6 #wall-09");
    var $b6w10 = $("#building-6 #wall-10");


    // 2.
    // Wall line animations
    var building6wall1 = new TimelineMax()
    .add(TweenMax.to($b6w1, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building6wall2 = new TimelineMax()
    .add(TweenMax.to($b6w2, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building6wall3 = new TimelineMax()
    .add(TweenMax.to($b6w3, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building6wall4 = new TimelineMax()
    .add(TweenMax.to($b6w4, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building6wall5 = new TimelineMax()
    .add(TweenMax.to($b6w5, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building6wall6 = new TimelineMax()
    .add(TweenMax.to($b6w6, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building6wall7 = new TimelineMax()
    .add(TweenMax.to($b6w7, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building6wall8 = new TimelineMax()
    .add(TweenMax.to($b6w8, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building6wall9 = new TimelineMax()
    .add(TweenMax.to($b6w9, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building6wall10 = new TimelineMax()
    .add(TweenMax.to($b6w10, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds



    // 3.
    // ScrollMagic scenes with setTween

    var wallDrawDuration = 200;
    var building5Offset = 9100;

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building5Offset 
    })
    .setTween(building6wall1)
    //.addIndicators({name: "Building 6 wall 1 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building5Offset +20
    })
    .setTween(building6wall2)
    //.addIndicators({name: "Building 6 wall 2 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building5Offset +40
    })
    .setTween(building6wall3)
    //.addIndicators({name: "Building 6 wall 3 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building5Offset +60
    })
    .setTween(building6wall4)
    //.addIndicators({name: "Building 6 wall 4 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building5Offset +60
    })
    .setTween(building6wall5)
    //.addIndicators({name: "Building 6 wall 5 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building5Offset +60
    })
    .setTween(building6wall6)
    //.addIndicators({name: "Building 6 wall 6 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building5Offset +60
    })
    .setTween(building6wall7)
    //.addIndicators({name: "Building 6 wall 7 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building5Offset +60
    })
    .setTween(building6wall8)
    //.addIndicators({name: "Building 6 wall 8 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building5Offset +60
    })
    .setTween(building6wall9)
    //.addIndicators({name: "Building 6 wall 9 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building5Offset +60
    })
    .setTween(building6wall10)
    //.addIndicators({name: "Building 6 wall 10 draw"})
    .addTo(drawBuildings);

    

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/


/************************* Scroll scene: Opacity animate building lights *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: building5Offset +200,
        duration: 1330
    })
    .setClassToggle('.all-buildings-2', 'lightup-6') // add class toggle
    //.addIndicators({name: 'building 6 lights'})
    .addTo(drawBuildings);



/************************* Scroll scene: Building ONE Dong line animate red *************************/

    // Target the svg path id
    var $b6dong = $("#building-6 .dong path");


    // Dong line animation
    var building6dong = new TimelineMax()
    .add(TweenMax.to($b6dong, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds


    // ScrollMagic scenes with setTween
    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: 200,
        tweenChanges: true,
        offset: building5Offset +570 
    })
    .setTween(building6dong)
    //.addIndicators({name: "Building 6 dong line"})
    .addTo(drawBuildings);




    /************************* Scroll scene: Building ONE Dong link show *************************/

    new ScrollMagic.Scene({
        triggerElement: ".f2", 
        triggerHook: 'onLeave',
        offset: building5Offset +720,
        duration: 580
    })
    .setClassToggle(".dong-6", "active") // add class toggle
    //.addIndicators({name: "Building 6 dong link show"})
    .addTo(drawBuildings);



    /************************* Scroll scene: Fade out building 1 *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: building5Offset +1350
    })
    .setClassToggle('.all-buildings-2', 'no-focus-6') // add class toggle
    //.addIndicators({name: 'fade out building 6'})
    .addTo(drawBuildings);





/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/



    /************************* Scroll scene: Draw building seven walls *************************/

    // 1.
    // Target the svg path id
    var $b7w1 = $("#building-7 #wall-01");
    var $b7w2 = $("#building-7 #wall-02");
    var $b7w3 = $("#building-7 #wall-03");
    var $b7w4 = $("#building-7 #wall-04");
    var $b7w5 = $("#building-7 #wall-05");
    var $b7w6 = $("#building-7 #wall-06");
    var $b7w7 = $("#building-7 #wall-07");


    // 2.
    // Wall line animations
    var building7wall1 = new TimelineMax()
    .add(TweenMax.to($b7w1, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building7wall2 = new TimelineMax()
    .add(TweenMax.to($b7w2, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building7wall3 = new TimelineMax()
    .add(TweenMax.to($b7w3, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building7wall4 = new TimelineMax()
    .add(TweenMax.to($b7w4, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building7wall5 = new TimelineMax()
    .add(TweenMax.to($b7w5, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building7wall6 = new TimelineMax()
    .add(TweenMax.to($b7w6, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building7wall7 = new TimelineMax()
    .add(TweenMax.to($b7w7, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds



    // 3.
    // ScrollMagic scenes with setTween

    var wallDrawDuration = 200;
    var building6Offset = 10550;

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building6Offset 
    })
    .setTween(building7wall1)
    //.addIndicators({name: "Building 7 wall 1 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building6Offset +20
    })
    .setTween(building7wall2)
    //.addIndicators({name: "Building 7 wall 2 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building6Offset +40
    })
    .setTween(building7wall3)
    //.addIndicators({name: "Building 7 wall 3 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building6Offset +60
    })
    .setTween(building7wall4)
    //.addIndicators({name: "Building 7 wall 4 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building6Offset +60
    })
    .setTween(building7wall5)
    //.addIndicators({name: "Building 7 wall 5 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building6Offset +60
    })
    .setTween(building7wall6)
    //.addIndicators({name: "Building 7 wall 6 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building6Offset +60
    })
    .setTween(building7wall7)
    //.addIndicators({name: "Building 7 wall 7 draw"})
    .addTo(drawBuildings);

    

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/


/************************* Scroll scene: Opacity animate building lights *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: building6Offset +200,
        duration: 1330
    })
    .setClassToggle('.all-buildings-2', 'lightup-7') // add class toggle
    //.addIndicators({name: 'building 7 lights'})
    .addTo(drawBuildings);


/************************* Scroll scene: Building ONE Dong line animate red *************************/

    // Target the svg path id
    var $b7dong = $("#building-7 .dong path");


    // Dong line animation
    var building7dong = new TimelineMax()
    .add(TweenMax.to($b7dong, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds


    // ScrollMagic scenes with setTween
    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: 200,
        tweenChanges: true,
        offset: building6Offset +570 
    })
    .setTween(building7dong)
    //.addIndicators({name: "Building 7 dong line"})
    .addTo(drawBuildings);

    /************************* Scroll scene: Building ONE Dong link show *************************/

    new ScrollMagic.Scene({
        triggerElement: ".f2", 
        triggerHook: 'onLeave',
        offset: building6Offset +720,
        duration: 580
    })
    .setClassToggle(".dong-7", "active") // add class toggle
    //.addIndicators({name: "Building 7 dong link show"})
    .addTo(drawBuildings);



    /************************* Scroll scene: Fade out building 1 *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: building6Offset +1310
    })
    .setClassToggle('.all-buildings-2', 'no-focus-7') // add class toggle
    //.addIndicators({name: 'fade out building 7'})
    .addTo(drawBuildings);


/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/



    /************************* Scroll scene: Draw building eight walls *************************/

    // 1.
    // Target the svg path id
    var $b8w1 = $("#building-8 #wall-01");
    var $b8w2 = $("#building-8 #wall-02");
    var $b8w3 = $("#building-8 #wall-03");
    var $b8w4 = $("#building-8 #wall-04");
    var $b8w5 = $("#building-8 #wall-05");
    var $b8w6 = $("#building-8 #wall-06");


    // 2.
    // Wall line animations
    var building8wall1 = new TimelineMax()
    .add(TweenMax.to($b8w1, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building8wall2 = new TimelineMax()
    .add(TweenMax.to($b8w2, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building8wall3 = new TimelineMax()
    .add(TweenMax.to($b8w3, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building8wall4 = new TimelineMax()
    .add(TweenMax.to($b8w4, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building8wall5 = new TimelineMax()
    .add(TweenMax.to($b8w5, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds

    var building8wall6 = new TimelineMax()
    .add(TweenMax.to($b8w6, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds



    // 3.
    // ScrollMagic scenes with setTween

    var wallDrawDuration = 200;
    var building7Offset = 11900;

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building7Offset 
    })
    .setTween(building8wall1)
    //.addIndicators({name: "Building 8 wall 1 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building7Offset +20
    })
    .setTween(building8wall2)
    //.addIndicators({name: "Building 8 wall 2 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building7Offset +40
    })
    .setTween(building8wall3)
    //.addIndicators({name: "Building 8 wall 3 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building7Offset +60
    })
    .setTween(building8wall4)
    //.addIndicators({name: "Building 8 wall 4 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building7Offset +80
    })
    .setTween(building8wall5)
    //.addIndicators({name: "Building 8 wall 5 draw"})
    .addTo(drawBuildings);

    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: wallDrawDuration,
        tweenChanges: true,
        offset: building7Offset +280
    })
    .setTween(building8wall6)
    //.addIndicators({name: "Building 8 wall 6 draw"})
    .addTo(drawBuildings);

    

/*----------------------------------------------------------------------------------------------------------------------------------------------------------*/


/************************* Scroll scene: Opacity animate building lights *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: building7Offset +300,
        duration: 1330
    })
    .setClassToggle('.all-buildings-2', 'lightup-8') // add class toggle
    //.addIndicators({name: 'building 8 lights'})
    .addTo(drawBuildings);


/************************* Scroll scene: Building ONE Dong line animate red *************************/

    // Target the svg path id
    var $b8dong = $("#building-8 .dong path");


    // Dong line animation
    var building8dong = new TimelineMax()
    .add(TweenMax.to($b8dong, 0.3, {strokeDashoffset: 0, ease:Linear.easeNone})); // draw wall for 1.0 seconds


    // ScrollMagic scenes with setTween
    new ScrollMagic.Scene({
        triggerElement: ".f2",
        triggerHook: 'onLeave',
        duration: 200,
        tweenChanges: true,
        offset: building7Offset +570 
    })
    .setTween(building8dong)
    //.addIndicators({name: "Building 8 dong line"})
    .addTo(drawBuildings);

    /************************* Scroll scene: Building ONE Dong link show *************************/

    new ScrollMagic.Scene({
        triggerElement: ".f2", 
        triggerHook: 'onLeave',
        offset: building7Offset +720,
        duration: 580
    })
    .setClassToggle(".dong-8", "active") // add class toggle
    //.addIndicators({name: "Building 8 dong link show"})
    .addTo(drawBuildings);



    /************************* Scroll scene: Fade out building 1 *************************/

    new ScrollMagic.Scene({
        triggerElement: '.f2', 
        triggerHook: 'onLeave',
        offset: building6Offset +1310
    })
    .setClassToggle('.all-buildings-2', 'no-focus-8') // add class toggle
    //.addIndicators({name: 'fade out building 7'})
    .addTo(drawBuildings);
}



function checkBody() {

if($("body").hasClass("no-building-animation")) {
	//alert('no animation');
}
else {
	//alert('yes animation');
	buildingAnimations();
}

}

$(window).load(function() {
	checkBody();
});


$(window).bind('resize',function(){
    checkBody();
});


$(document).ready(function() {

	






















/* This function:
	
	1. Finds all paths in SECOND (hidden) svg
	2. Calculates path length
	3. Adds stroke array and offset so they can be animated in ScrollMagic scenes
*/


function hideSVGPaths() {

    var paths = $('.all-buildings-2').find('path'); 								// 1. Finds all paths in SECOND (hidden) svg

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

hideSVGPaths();


}); // end document ready



$(document).ready(function() {


var $head = $('.header-container h2');
var $para = $('.f2 h3');
var $stage = $('#stage-2');
var $clouds = $('.clouds');
var $logo = $("path#logo");
var $logoInner = $(".svg-logo-inner");
var $whitePath = $(".logo-white-path");
var $redPath = $(".logo-red-path");
var $dongPath1 = $(".dong-1 path");
var $dongPath2 = $(".dong-2 path");

var $buildings1 = $('.all-buildings-1');
var $buildings2 = $('.all-buildings-2');

// Building 1
var $b1w1 = $("#building-1 #wall-01");
var $b1w2 = $("#building-1 #wall-02");
var $b1w3 = $("#building-1 #wall-03");
var $b1w4 = $("#building-1 #wall-04");
var $b1w5 = $("#building-1 #wall-05");
var $b1w6 = $("#building-1 #wall-06");
var $b1w7 = $("#building-1 #wall-07");
var $b1w8 = $("#building-1 #wall-08");

// building lights
var $lights1 = $('.all-buildings-2 #building-1 .lights');

// Building 2
var $b2w1 = $("#building-2 #wall-01");
var $b2w2 = $("#building-2 #wall-02");
var $b2w3 = $("#building-2 #wall-03");
var $b2w4 = $("#building-2 #wall-04");
var $b2w5 = $("#building-2 #squiggle");
var $b2w6 = $("#building-2 #power-line-1");
var $b2w7 = $("#building-2 #power-line-2")

var $lights2 = $('.all-buildings-2 #building-2 .lights');


// dong links
var $dong1 = $(".dong-link.dong-1")
var $dong2 = $(".dong-link.dong-2")
var $dong3 = $(".dong-link.dong-3")
var $dong4 = $(".dong-link.dong-4")
var $dong5 = $(".dong-link.dong-5")
var $dong6 = $(".dong-link.dong-6")
var $dong7 = $(".dong-link.dong-7")
var $dong8 = $(".dong-link.dong-8")

	
// setup the elements (opacity, position etc.)
$head.css('opacity', 0);
$para.css('opacity', 0);
$stage.css('opacity', 0);


	// headings animation, when complete show the full buildings animation
	function headingAnimation() {
		headingTimeline = new TimelineMax();

		headingTimeline

			.add('startHead')
			.to($head, 0.5, {autoAlpha: 1, ease:Power1.easeOut})
	    	.fromTo($head, 0.5, {y: -20}, {y: 0, ease:Power1.easeOut}, '-=0.5')
	    	.to($para, 0.5, {autoAlpha: 1, ease:Power1.easeOut})
	    	.fromTo($para, 0.5, {y: -20}, {y: 0, ease:Power1.easeOut, onComplete: fullAnimation}, '-=0.5');

		
	}

	// the whole animation
	function fullAnimation() {

	    


		runAnimation.destroy(true);

	    buildingTimeline = new TimelineMax({onUpdate: updateSlider});

	    buildingTimeline

	    //.to($logo, 4, {drawSVG:"100%", ease:Power1.easeInOut})

	    	
	    	.add('endIntro')
	    	.to($stage, 1, {autoAlpha: 1, ease:Power1.easeOut}, 'endIntro')
	    	.fromTo($stage, 1, {x: 200}, {x: 0, ease:Power1.easeOut}, 'endIntro')


	    	.set($clouds, {className: '+=after'})
	    	.set($clouds, {className: '-=after'})
	    	.set($clouds, {className: '+=slow'})

	    	

	    	.to($logo, 1, {drawSVG:true, ease:Power1.easeIn}, '+=1')
	    	.to($logoInner, 0.5, { scaleX: 1, scaleY: 1, ease:Power1.easeIn })
	    	
	    	
	    	.fromTo($whitePath, 0.5, {width:0}, {width:'100%', ease:Power1.easeIn})
	    	.add('lineDraw')

	    	

	    	.to($logoInner, 1, {left: 313, ease:Power4.easeInOut}, 'lineDraw+=2')
	    	.to($redPath, 1, {width: 290, ease:Power4.easeInOut}, 'lineDraw+=2' )

	    	// Building 1 walls
	    	.add('wallsDraw1')
	    	.to($b1w1, 0.5, {drawSVG:true}, 'wallsDraw1-=0.5')
	    	.to($b1w2, 0.5, {drawSVG:true}, 'wallsDraw1-=0.5')
	    	.to($b1w3, 0.5, {drawSVG:true}, 'wallsDraw1-=0.5')
	    	.to($b1w4, 0.5, {drawSVG:true}, 'wallsDraw1-=0.5')
	    	.to($b1w5, 0.5, {drawSVG:true}, 'wallsDraw1-=0.5')
	    	.to($b1w6, 0.5, {drawSVG:true}, 'wallsDraw1-=0.5')
	    	.to($b1w7, 0.5, {drawSVG:true}, 'wallsDraw1-=0.5')
	    	.to($b1w8, 0.5, {drawSVG:true}, 'wallsDraw1-=0.5')
	    	// light up light paths
	    	.to($lights1, 0.5, {autoAlpha: 1, ease:Bounce.easeInOut})



	    	.to($dongPath1, 0.5, {drawSVG:true})
	    	.add('dong1')
	    
	    	
	    	.to($dong1, 0.1, {autoAlpha: 1}, 'dong1')
	    	
	    	
	    	.add('end1')

	    	.to($dong1, 0.1, {autoAlpha: 0, delay: 3}, 'end1')
	    	.to($dongPath1, 0.5, {drawSVG:'0%', delay: 3}, 'end1')

	    	.to($b1w1, 0.5, {drawSVG:'0%'}, 'end1+3.5')
	    	.to($b1w2, 0.5, {drawSVG:'0%'}, 'end1+3.5')
	    	.to($b1w3, 0.5, {drawSVG:'0%'}, 'end1+3.5')
	    	.to($b1w4, 0.5, {drawSVG:'0%'}, 'end1+3.5')
	    	.to($b1w5, 0.5, {drawSVG:'0%'}, 'end1+3.5')
	    	.to($b1w6, 0.5, {drawSVG:'0%'}, 'end1+3.5')
	    	.to($b1w7, 0.5, {drawSVG:'0%'}, 'end1+3.5')
	    	.to($b1w8, 0.5, {drawSVG:'0%'}, 'end1+3.5')
	    	.to($lights1, 0.5, {autoAlpha: 0, ease:Bounce.easeInOut}, 'end1+3.5')
	    	// Move stage across
	    	.add('move1')
	    	
	    	.to($buildings1, 1, {x: -390, ease:Power1.easeOut}, 'move1+=0.25')
	    	.to($buildings2, 1, {x: -390, ease:Power1.easeOut}, 'move1+=0.25')

	    	// Building 1 walls
	    	.add('wallsDraw2')
	    	.to($b2w1, 0.5, {drawSVG:true}, 'wallsDraw2-=0.5')
	    	.to($b2w2, 0.5, {drawSVG:true}, 'wallsDraw2-=0.5')
	    	.to($b2w3, 0.5, {drawSVG:true}, 'wallsDraw2-=0.5')
	    	.to($b2w4, 0.5, {drawSVG:true}, 'wallsDraw2-=0.5')
	    	.to($b2w5, 0.5, {drawSVG:true}, 'wallsDraw2-=0.5')
	    	.to($b2w6, 0.5, {drawSVG:true}, 'wallsDraw2-=0.5')
	    	.to($b2w7, 0.5, {drawSVG:true}, 'wallsDraw2-=0.5')
	    	// light up light paths
	    	.to($lights2, 0.5, {autoAlpha: 1, ease:Bounce.easeInOut})



	    	.to($dongPath2, 0.5, {drawSVG:true})
	    	.add('dong2')
	    
	    	
	    	.to($dong2, 0.1, {autoAlpha: 1}, 'dong2')
	    	
	    	
	    	
	    	
	    	

	    	//buildingTimeline.addPause()


	    	
	    	


		


	    	
	    	


	    	;

	    

	    function onStart() {console.log('animation started');}
	    function onUpdate() {
	    	console.log('animation is in progress');
	    	$head.text(i++);
	    }
	    function onComplete() {console.log('animation completed');}

	    //TweenLite.to($lines2, 5, {stroke: '#FFF', delay: 1});

	    // var timeline = new TimelineLite()

	    // timeline.to($lines1, 3, {stroke: 'red', ease:Power4.easeInOut}) // no comma or semi-colon
	    // .to($lines2, 3, {stroke: 'blue', ease:Power4.easeInOut}) // no comma or semi-colon
	    // .to($lines3, 3, {stroke: 'yellow', ease:Power4.easeInOut}); // semi-colon after last tween


	    

	}

	

// 4. Create a Slider to Control Playback
// 4. Create a Slider to Control Playback
$("#slider").slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  slide: function ( event, ui ) {
    buildingTimeline.pause();
    //adjust the timeline’s progress() based on slider value
    buildingTimeline.progress( ui.value/100 );
    }
});
 
// updateSlider function
function updateSlider() {
  $("#slider").slider("value", buildingTimeline.progress() *100);
} 






// Add Controller that runs these animations
var runAnimation = new ScrollMagic.Controller({
});

var scene = new ScrollMagic.Scene({
	triggerElement: '.f2',
	triggerHook: 'onLeave',
	offset: -200,
})

.on('start', function() {
	headingAnimation();
})
//.addIndicators({name: 'header anim should start'})
.addTo(runAnimation);

















	function scrollPageDown() {

		$("html, body").addClass('scrolling');

		$(".scrolling").animate({ 
	        
	        scrollTop: $(window).height() -85,
	        

	    },  500, 'easeOutCubic', function() {
	        //fullAnimation();
	    });
	}

	function scrollPageUp() {

		$("html, body").removeClass('scrolling');

		$("html, body").animate({ 
	        
	        scrollTop: -$(window).height() -85,
	        

	    },  2500);
	}


	$('.scroll-down').click(function(){
		scrollPageDown();
		return false;
	});


	(function () {
    var previousScroll = 0;

    $(window).scroll(function(){
       var currentScroll = $(this).scrollTop();
       if (currentScroll > previousScroll){
           //scrollPageDown();
       } else {
          //scrollPageUp();
       }
       previousScroll = currentScroll;
    });
}()); //run this anonymous function immediately



$(window).scroll(function () {

	if ($(document).scrollTop() > 100) {
			//scrollPageDown();
		} else {
			//scrollPageUp();
		}
	});


});














							

