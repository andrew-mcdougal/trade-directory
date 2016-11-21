<?php
/**
* Template Name: Page: Home 2
*/

get_header(); ?>
<span id="fullpage">
    <!-- VIDEO -->
    <div class="video-overlay"></div>
    <video muted id="bgvid" loop>
      <!-- WCAG general accessibility recommendation is that media such as background video play through only once. Loop turned on for the purposes of illustration; if removed, the end of the video will fade in the same way created by pressing the "Pause" button  -->
    <source src="<?php echo get_template_directory_uri(); ?>/rea_vid.webm" type="video/webm">
    <source src="<?php echo get_template_directory_uri(); ?>/rea_vid.mp4" type="video/mp4">
    </video>


    <div class="fullscreen f1">
        <div class="intro-container">
            <div class="logo-intro">
                <?php get_template_part('svg/inline', 'rea-logo-intro.svg'); ?>
            </div>
            <h4>Exclusive within the Australian market, the AREAs focuses on recognising and celebrating the success of our customers who support every aspect of the property journey.</h4>
            <a class="intro-button scroll-down" href="javascript:void(0);">Find out why</a>
            <span class="scroll-arrow fa fa-angle-down scroll-down"></span>
        </div>
    </div>
    <!-- Fullscreen F2 -->
    <div class="fullscreen f2">
        <div class="header-container">
            <h2>Introducing the AREAs - the Annual REA Excellence Awards.</h2>
        </div>
        <h3>As your industry partner, REA Group is in a unique position to recognise and celebrate excellence in the property and media industries.</h3>

        <!-- This is where it all happens -->

        <div id="stage-2">
            <!-- BUILDINGS -->
            <div id="building-container" class="">

                <!-- DONGS -->
                <div class="dong-links-container">
                    <a class="dong-link dong-1" href="javascript:void(0);">
                        <p>Overview</p>
                    </a>
                    <a class="dong-link dong-2" href="javascript:void(0);">
                        <p>In The Media</p>
                    </a>
                    <a class="dong-link dong-3" href="javascript:void(0);">
                        <p>Categories &amp; Criteria</p>
                    </a>
                    <a class="dong-link dong-4" href="javascript:void(0);">
                        <p>The Judges</p>
                    </a>
                    <a class="dong-link dong-5" href="javascript:void(0);">
                        <p>Submissions</p>
                    </a>
                    <a class="dong-link dong-6" href="javascript:void(0);">
                        <p>The Event</p>
                    </a>
                    <a class="dong-link dong-7" href="javascript:void(0);">
                        <p>Gallery</p>
                    </a>
                    <a class="dong-link dong-8" href="javascript:void(0);">
                        <p>Contact Us</p>
                    </a>
                </div>

                <div class="all-buildings-1">
                    <?php get_template_part('svg/inline', 'skyline-1.1.11.svg'); ?>
                </div>
                <div class="all-buildings-2">
                    <?php get_template_part('svg/inline', 'skyline-1.3.2.svg'); ?>
                </div>
                <div class="clouds">
                    <?php get_template_part('svg/inline', 'clouds-1.1.svg'); ?>
                </div>
            </div>
            <!-- BUILDINGS -->

            <!-- REA logo -->
            <div class="rea-logo page-fader">
                <div class="logo-white-path">
                    <div class="logo-red-path"></div>
                </div>
                    <svg class="svg-logo-outer" viewBox="-14.1 11.9 76.1 76.1">
                        <path id="logo" d="M58.1 27.5c0 0 0.9-11.5-7.3-11.5s-52.9 0-52.9 0S-11 16-11 26.2s0 51.2 0 51.2 0.2 7.3 10.6 7.3 50 0 50 0 8.8 0.5 8.8-11.1"/>
                    </svg>

                    

                    <img class="svg-logo-inner" src="<?php echo get_template_directory_uri(); ?>/svg/svg-logo-inner.svg" />
                </div>
            </div>

            <div id="controls">
                <div id="slider"></div>
            </div>
            
        </div>


    </div>
    <!-- Fullscreen F2 -->
</span>
<?php
get_footer();
