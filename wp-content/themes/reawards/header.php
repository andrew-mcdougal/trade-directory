<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package rea
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">


	<!-- extra shizz -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,400italic|Roboto+Condensed:400,300,700">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/normalize.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/style.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/demo.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/animations.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/fraynework.css">
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/buildings.css">
    
    <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/library/css/responsive.css">

    <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css">


    <script src="https://use.typekit.net/lyi8qif.js"></script>
    <script>try{Typekit.load({ async: true });}catch(e){}</script>

    <script src="<?php echo get_template_directory_uri(); ?>/library/js/lib/jquery.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/lib/greensock/TweenMax.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/lib/greensock/plugins/ScrollToPlugin.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/lib/greensock/plugins/CSSPlugin.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/DrawSVGPlugin.min.js"></script>
    
    <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/lib/modernizr.custom.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/lib/iscroll-probe.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/ScrollMagic.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/animation.gsap.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/debug.addIndicators.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/ScrollToPlugin.min.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/demo.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/center.js"></script>
    

    <script src="<?php echo get_template_directory_uri(); ?>/library/js/custom.js"></script>

    <!-- Animation scenes -->
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/scroll-setup.js"></script>
    <!--<script src="<?php echo get_template_directory_uri(); ?>/library/js/scroll-dongs.js"></script>-->
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/scroll-buildings.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/intro-animation.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/content.js"></script>
    <script src="<?php echo get_template_directory_uri(); ?>/library/js/succinct.js"></script>



<?php wp_head(); ?>
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css">


<script>

</script>


<script>
$( '.preloader-inner' ).center();
</script>

</head>

<body <?php body_class(); ?>>



<!-- Preloader -->
<div id="preloader">
    <div class="preloader-inner">
        <?php get_template_part('svg/inline', 'rea-logo-preload.svg'); ?>
    </div>
</div>

<script>
// Preloader animation
$( '.preloader-inner' ).center();

var preloadPath = document.querySelector('.preload-shape');
var length = preloadPath.getTotalLength();

// Set up the starting positions
preloadPath.style.strokeDasharray = length + ' ' + length;
preloadPath.style.strokeDashoffset = length;
// Trigger a layout so styles are calculated & the browser





var preloadTl = new TimelineMax( {

});

// the timeline
function preloaderAnim(){
    preloadTl
    .add( TweenMax.to(preloadPath, 1.3, {strokeDashoffset: 0, yoyo: true, repeat: -1, ease:Power1.easeInOut}));
}

preloaderAnim();

// Home page animation


</script>



	<!-- #masthead -->
	<div class="header">

        <!-- full page search -->
        <div id="morphsearch" class="morphsearch" method="get" action="<?php bloginfo('home'); ?>">
            <form class="morphsearch-form">
                <input class="morphsearch-input" type="search" placeholder="What are you looking for?"/>
                <button class="morphsearch-submit" type="submit">Search</button>
            </form>
            <div class="morphsearch-content">
            </div><!-- /morphsearch-content -->
            <span class="morphsearch-close"></span>
        </div><!-- /morphsearch -->

        <!-- full page responsive nav -->
        <div class="mobile-nav">
            <div class="contents">
                <!-- full logo -->
                <?php get_template_part('svg/inline', 'rea-logo-mobile.svg'); ?>
                <?php $custom_menu = array( 
                    'theme_location' => 'primary', 
                    'menu_id' => 'primary-menu',
                    'container' => '',
                    'items_wrap' => '<ul class="mobile-menu">%3$s</ul>',
                    ); 
                    wp_nav_menu($custom_menu);
                ?>
            </div>
            <span class="mobile-nav-close"></span>
        </div>



		<div class="header-float-container">
        	<div class="header-left"></div>
    	</div>
		
		<div class="site-width">
			<a href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php get_template_part('svg/inline', 'rea-logo-header.svg'); ?></a>
			<?php $custom_menu = array( 
				'theme_location' => 'primary', 
				'menu_id' => 'primary-menu',
				'container' => '',
				
				'items_wrap' => '<ul class="main-nav">%3$s<svg class="search-icon" width="26px" height="26px" viewBox="1284 30 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	                    <path d="M1288.72273,44.9001623 C1290.19747,46.3691558 1292.15828,47.1780032 1294.24377,47.1780032 C1296.32933,47.1780032 1298.29014,46.3691558 1299.7648,44.9001623 C1301.23955,43.43125 1302.05156,41.4780844 1302.05156,39.400974 C1302.05156,37.3232955 1301.23955,35.3704545 1299.7648,33.901461 C1298.29014,32.4325487 1296.32933,31.6233766 1294.24377,31.6233766 C1292.15828,31.6233766 1290.19747,32.4325487 1288.72273,33.901461 C1287.24807,35.3704545 1286.43606,37.3236201 1286.43606,39.400974 C1286.43606,41.4780844 1287.24807,43.43125 1288.72273,44.9001623 L1288.72273,44.9001623 Z M1307.07602,53.1863636 C1307.19922,53.3090909 1307.36277,53.3766234 1307.53723,53.3766234 C1307.71137,53.3766234 1307.87499,53.3090909 1307.99812,53.1863636 L1308.08343,53.1013799 C1308.20664,52.9787338 1308.27444,52.8157468 1308.27444,52.642289 C1308.27444,52.4685065 1308.20664,52.3056006 1308.08343,52.1828734 L1301.40219,45.5276786 C1301.24786,45.7061688 1301.08611,45.8799513 1300.91743,46.0479708 C1300.74843,46.2163149 1300.57396,46.3774351 1300.3951,46.5311688 L1307.07602,53.1863636 Z M1287.57051,32.7534091 C1289.35303,30.9778409 1291.72315,30 1294.24377,30 L1294.24409,30 C1296.7648,30 1299.13491,30.9778409 1300.9171,32.7534091 C1302.69962,34.5289773 1303.68129,36.8898539 1303.68129,39.4006494 C1303.68129,41.1144481 1303.22391,42.7577922 1302.36699,44.1931006 L1309.23573,51.0350649 C1309.66672,51.4643669 1309.90417,52.0351461 1309.90417,52.642289 C1309.90417,53.249513 1309.66672,53.820211 1309.23573,54.249513 L1309.15074,54.3341721 C1308.71976,54.763474 1308.14683,55 1307.53723,55 C1306.92771,55 1306.3547,54.763474 1305.92372,54.3341721 L1299.05498,47.4922078 C1297.61405,48.3457792 1295.96427,48.8013799 1294.24409,48.8013799 C1291.72315,48.8013799 1289.35303,47.823539 1287.57051,46.0479708 C1285.788,44.2727273 1284.80633,41.9118506 1284.80633,39.4006494 C1284.80633,36.8898539 1285.788,34.5289773 1287.57051,32.7534091 L1287.57051,32.7534091 Z" id="Search" stroke="none" fill="#D41633" fill-rule="evenodd"></path>
	                </svg></ul>',
				

				); 

				wp_nav_menu($custom_menu);
				?>

            <div class="mobile nav-box">
                <svg class="search-icon" width="26px" height="26px" viewBox="1284 30 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M1288.72273,44.9001623 C1290.19747,46.3691558 1292.15828,47.1780032 1294.24377,47.1780032 C1296.32933,47.1780032 1298.29014,46.3691558 1299.7648,44.9001623 C1301.23955,43.43125 1302.05156,41.4780844 1302.05156,39.400974 C1302.05156,37.3232955 1301.23955,35.3704545 1299.7648,33.901461 C1298.29014,32.4325487 1296.32933,31.6233766 1294.24377,31.6233766 C1292.15828,31.6233766 1290.19747,32.4325487 1288.72273,33.901461 C1287.24807,35.3704545 1286.43606,37.3236201 1286.43606,39.400974 C1286.43606,41.4780844 1287.24807,43.43125 1288.72273,44.9001623 L1288.72273,44.9001623 Z M1307.07602,53.1863636 C1307.19922,53.3090909 1307.36277,53.3766234 1307.53723,53.3766234 C1307.71137,53.3766234 1307.87499,53.3090909 1307.99812,53.1863636 L1308.08343,53.1013799 C1308.20664,52.9787338 1308.27444,52.8157468 1308.27444,52.642289 C1308.27444,52.4685065 1308.20664,52.3056006 1308.08343,52.1828734 L1301.40219,45.5276786 C1301.24786,45.7061688 1301.08611,45.8799513 1300.91743,46.0479708 C1300.74843,46.2163149 1300.57396,46.3774351 1300.3951,46.5311688 L1307.07602,53.1863636 Z M1287.57051,32.7534091 C1289.35303,30.9778409 1291.72315,30 1294.24377,30 L1294.24409,30 C1296.7648,30 1299.13491,30.9778409 1300.9171,32.7534091 C1302.69962,34.5289773 1303.68129,36.8898539 1303.68129,39.4006494 C1303.68129,41.1144481 1303.22391,42.7577922 1302.36699,44.1931006 L1309.23573,51.0350649 C1309.66672,51.4643669 1309.90417,52.0351461 1309.90417,52.642289 C1309.90417,53.249513 1309.66672,53.820211 1309.23573,54.249513 L1309.15074,54.3341721 C1308.71976,54.763474 1308.14683,55 1307.53723,55 C1306.92771,55 1306.3547,54.763474 1305.92372,54.3341721 L1299.05498,47.4922078 C1297.61405,48.3457792 1295.96427,48.8013799 1294.24409,48.8013799 C1291.72315,48.8013799 1289.35303,47.823539 1287.57051,46.0479708 C1285.788,44.2727273 1284.80633,41.9118506 1284.80633,39.4006494 C1284.80633,36.8898539 1285.788,34.5289773 1287.57051,32.7534091 L1287.57051,32.7534091 Z" id="Search" stroke="none" fill="#D41633" fill-rule="evenodd"></path>
                </svg>
                <i class="fa fa-bars"></i>
            </div>
		</div>
    </div>
	<!-- #masthead -->
