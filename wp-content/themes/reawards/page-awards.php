<?php
/*
* Template Name: Page: Awards
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

				<div class="award-icons row">
					<div class="column one-third">
						<img src="<?php echo get_template_directory_uri(); ?>/img/icon-innovation.png" />
						<p>Innovation</p>
					</div>
					<div class="column one-third">
						<img src="<?php echo get_template_directory_uri(); ?>/img/icon-service.png" />
						<p>Service and Marketing Excellence</p>
					</div>
					<div class="column one-third">
						<img src="<?php echo get_template_directory_uri(); ?>/img/icon-community.png" />
						<p>Community</p>
					</div>
				</div>

				<div class="clear"></div>

				<div class='entry-content'>
					<p><?php the_field('secondary_content'); ?></p>
				</div>

			



			

<?php
    $args = array(
      'post_type' => 'award',
      
      
    );
    $products = new WP_Query( $args );
    if( $products->have_posts() ) {

    	echo '<div class="accordion">';

      while( $products->have_posts() ) {
        $products->the_post();
        ?>
        <div class="single-award">
        	<a href="javascript:void(0);"><i class="fa fa-plus-square-o"></i><h4><?php the_title() ?></h4></a>
        	<div class="award-content"><p><?php the_content() ?></p></div>
        </div>
        <?php
      }
      echo '</div>';
    }



    else {
      echo 'No awards found here.';
    }
  ?>

			</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
