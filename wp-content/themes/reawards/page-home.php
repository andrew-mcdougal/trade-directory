<?php
/**
* Template Name: Page: Home
*/

get_header(); ?>

<ul class="scroll-nav">
    <li class="scroll-1"></li>
    <li class="scroll-2"></li>
    <li class="scroll-3"></li>
    <li class="scroll-4"></li>
    <li class="scroll-5"></li>
    <li class="scroll-6"></li>
    <li class="scroll-7"></li>
    <li class="scroll-8"></li>
    <li class="scroll-9"></li>
</ul>

    <!-- VIDEO -->
    <div class="video-overlay no-show"></div>
    <video autoplay="autoplay" muted id="bgvid" class="no-show">
        <source src="<?php echo get_template_directory_uri(); ?>/rea_vid.ogv" type="video/ogg">
        <source src="<?php echo get_template_directory_uri(); ?>/rea_vid.webm" type="video/webm">
        <source src="<?php echo get_template_directory_uri(); ?>/rea_vid.mp4" type="video/mp4">
    </video>

    <div class="fullscreen f1 no-show">
        <div class="intro-container">
            <div class="logo-intro">
                <?php get_template_part('svg/inline', 'rea-logo-intro.svg'); ?>
            </div>
            <h4>Exclusive within the Australian market, the AREAs focus on recognising and celebrating the success of our customers who support every aspect of the property journey.</h4>
            <a class="intro-button scroll-down" href="#anchor">Find out why</a>
            <a href="#anchor" class="scroll-arrow fa fa-angle-down scroll-down"></a>
        </div>
    </div>

    <!-- Fullscreen F2 -->
    <div class="fullscreen f2">
        <div class="header-container">
            <h2>Introducing the AREAs - the Annual REA Excellence Awards</h2>
        </div>
        <span class="home-text">
            <h3>As your industry partner, REA Group is in a unique position to recognise and celebrate excellence in the property and media industries.</h3>
            <p class="scroll-help"><i class="fa fa-angle-down"></i> Scroll to learn more about the upcoming AREA Awards.</p>
        </span>


        <!-- This is where it all happens -->


        <div id="anchor"></div>

        <div id="stage">
            <!-- BUILDINGS -->
            <div id="building-container" class="building-fader" style="z-index: -1;">
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

            <!-- MOBILE BUILDINGS -->
            <div id="building-container-mobile" class="building-fader" style="z-index: -1;">
                <div class="all-buildings-1">
                    <?php get_template_part('svg/inline', 'skyline-mob-1.1.svg'); ?>
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

            <!-- DONGS -->
            <div class="dong-links-container">
                <a class="dong-link dong-1" href="<?php the_field('link_1'); ?>">
                    <p>Overview</p>
                </a>
                <a class="dong-link dong-2" href="<?php the_field('link_2'); ?>">
                    <p>In The Media</p>
                </a>
                <a class="dong-link dong-3" href="<?php the_field('link_3'); ?>">
                    <p>Categories &amp; Criteria</p>
                </a>
                <a class="dong-link dong-4" href="<?php the_field('link_4'); ?>">
                    <p>The Judges</p>
                </a>
                <a class="dong-link dong-5" href="<?php the_field('link_5'); ?>">
                    <p>Submissions</p>
                </a>
                <a class="dong-link dong-6" href="<?php the_field('link_6'); ?>">
                    <p>The Event</p>
                </a>
                <a class="dong-link dong-7" href="<?php the_field('link_7'); ?>">
                    <p>Gallery</p>
                </a>
                <a class="dong-link dong-8" href="<?php the_field('link_8'); ?>">
                    <p>Contact Us</p>
                </a>
            </div>
        </div>
    </div>
    <!-- Fullscreen F2 -->

<?php
get_footer();
