<?php
/*
* Template Name: Page: Contact Us
*/

get_header(); ?>

	<div id="section-header">
		<h2><?php echo empty( $post->post_parent ) ? get_the_title( $post->ID ) : get_the_title( $post->post_parent ); ?></h2>
	</div>

	<div id="primary" class="content-area">

		<main id="main" class="site-main max-width" role="main">

			<div class="main-inner">

				<?php
				while ( have_posts() ) : the_post();
				?>
				<header class="entry-header">
					<h1 class="entry-title">We would love to hear from you!</h1>
				</header>

				<div class="entry-content">

				<?php
					the_content();
				endwhile; // End of the loop.
				?>

			</div>

			</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
