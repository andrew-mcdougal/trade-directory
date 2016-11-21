<?php
/*
* Template Name: Page: FAQs
*/

get_header(); ?>

	<div id="section-header">
		<h2><?php echo empty( $post->post_parent ) ? get_the_title( $post->ID ) : get_the_title( $post->post_parent ); ?></h2>
	</div>

	<div id="primary" class="content-area">

<!-- Sub nav -->
<div id="sub-nav-container" class="sub-nav">
	<div class="max-width">
		<a class="back-to-menu" href="javascript:void(0);">
			<i class="fa fa-angle-left"></i>
			<p>Back to Menu</p>
		</a>
		<ul class="main-inner">
		<?php
		if($post->post_parent)
		$children = wp_list_pages("sort_column=menu_order&depth=1&title_li=&child_of=".$post->post_parent."&echo=0"); else
		$children = wp_list_pages("sort_column=menu_order&depth=1&title_li=&child_of=".$post->ID."&echo=0");
		if ($children) { ?>
		<?php echo $children; ?>
		<?php } ?>
		</ul>
		<a class="more-menu not-clicked" href="javascript:void(0);">
			<p>More</p>
			<i class="fa fa-angle-down"></i>
		</a>
	</div>
	<?php the_title( '<p class="mobile-sub-nav-header">', '</p>' ); ?>
</div>
<!-- Sub nav -->

		<main id="main" class="site-main max-width" role="main">

			<div class="main-inner">

				<?php
				while ( have_posts() ) : the_post();
					get_template_part( 'template-parts/content', 'page' );
				endwhile; // End of the loop.
				?>

				
				<!-- the faqs -->
				<?php if( have_rows('faq') ): ?>

				<div class="accordion">
	
				<?php while( have_rows('faq') ): the_row();

				// vars
				$question = get_sub_field('question');
				$answer = get_sub_field('answer');

				?>

			        <div class="single-award">
			        	<a href="javascript:void(0);"><i class="fa fa-plus-square-o"></i><h4><?php echo $question; ?></h4></a>
			        	<div class="award-content"><p><?php echo $answer; ?></p></div>
			        </div>

				    <?php endwhile; ?>
				</div><!-- end accordion -->

				<?php endif; ?>

			</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
