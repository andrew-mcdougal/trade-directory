<?php
/*
* Template Name: Page: In the Media (blog)
*/

get_header(); ?>



	<div id="section-header">
		<h2><?php echo empty( $post->post_parent ) ? get_the_title( $post->ID ) : get_the_title( $post->post_parent ); ?></h2>
	</div>

	<div id="primary" class="content-area in-the-media-page">



		<main id="main" class="site-main max-width" role="main">

<?php if( have_rows('media') ): ?>

	

	<?php while( have_rows('media') ): the_row(); 

		// vars
		$date = get_sub_field('date');
		$content = get_sub_field('title');
		$link = get_sub_field('external_link');

		?>

				<a href="<?php echo $link; ?>" target="blank">
					<h5><?php echo $date ?></h5>
					<h2><?php echo $content ?></h2>
				</a>

	<?php endwhile; ?>

<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();



