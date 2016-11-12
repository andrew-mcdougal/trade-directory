<?php
/*
 Template Name: Page: Custom Search Results
 *
 * This is your custom page template. You can create as many of these as you need.
 * Simply name is "page-whatever.php" and in add the "Template Name" title at the
 * top, the same way it is here.
 *
 * When you create your page, you can just select the template and viola, you have
 * a custom page template to call your very own. Your mother would be so proud.
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/
?>

<?php get_header('search'); ?>

			<div id="content">

				<div id="inner-content" class="wrap cf">

						<main id="main" class="m-all t-3of3 d-7of7 cf" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

							<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<article id="post-<?php the_ID(); ?>" <?php post_class( 'cf' ); ?> role="article" itemscope itemtype="http://schema.org/BlogPosting">

								<section class="entry-content cf" itemprop="articleBody">
                                	<?php
									$list = array();
									$item = array();
									foreach($_POST as $key => $value){
										if($value != ''){
											$item['taxonomy'] = htmlspecialchars($key);
											$item['terms'] = htmlspecialchars($value);
											$item['field'] = 'slug';
											$list[] = $item;
										}
									}
									$cleanArray = array_merge(array('relation' => 'AND'), $list);
									?>
									<?php 
									$args['post_type'] = 'trade';
									$args['showposts'] = 9;
									$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
									$args['paged'] = $paged;
									$args['tax_query'] = $cleanArray;
									$the_query = new WP_Query( $args );
									?>


<div class="container services-container">
<?php echo ($the_query->found_posts > 0) ? '<h3 class="foundPosts">' . $the_query->found_posts. ' listings found</h3>' : '<h3 class="foundPosts">We found no results</h3>';?>
	<?php while ( $the_query->have_posts() ) : $the_query->the_post();?>
	<div class="columns four">
	<div class='content'>
      	<?php echo the_post_thumbnail( 'full' ); ?>
        <?php the_content() ?>
      </div>
	
	<?php
	$terms = get_the_terms($post->ID, 'trade_category' );
if ($terms && ! is_wp_error($terms)) :
	$term_slugs_arr = array();
	foreach ($terms as $term) {
	    $term_slugs_arr[] = $term->slug;
	}
	$terms_slug_str = join( " ", $term_slugs_arr);
endif;
//echo $terms_slug_str;

?>

</div>


	<?php endwhile; wp_reset_postdata();?>
	</div>

<div class="row page-navigation">
	 <?php next_posts_link('&laquo; Older Entries', $the_query->max_num_pages) ?>
	 <?php previous_posts_link('Newer Entries &raquo;') ?>
</div>




								</section>

							</article>

							<?php endwhile; else : ?>

									<article id="post-not-found" class="hentry cf">
											<header class="article-header">
												<h1><?php _e( 'Oops, Post Not Found!', 'bonestheme' ); ?></h1>
										</header>
											<section class="entry-content">
												<p><?php _e( 'Uh Oh. Something is missing. Try double checking things.', 'bonestheme' ); ?></p>
										</section>
										<footer class="article-footer">
												<p><?php _e( 'This is the error message in the page-custom.php template.', 'bonestheme' ); ?></p>
										</footer>
									</article>

							<?php endif; ?>

						</main>

				</div>

			</div>


<?php get_footer(); ?>
