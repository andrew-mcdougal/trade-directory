<?php
/**
 * The template for displaying all single posts.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package rea
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

				get_template_part( 'template-parts/content', get_post_format() );

				the_post_navigation();

			endwhile; // End of the loop.
			?>

		</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();