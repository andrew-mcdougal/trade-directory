<?php
/**
 * The template for displaying search results pages.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#search-result
 *
 * @package rea
 */

get_header(); ?>

	<div id="section-header">
		<h2>Search Results</h2>
	</div>

	<div id="primary" class="content-area">
		<main id="main" class="site-main max-width" role="main">

			<div class="main-inner">

				<!-- page search -->
		        <div class="page-search">
		            <form class="page-search-form" method="get" action="<?php bloginfo('home'); ?>">
		                <input class="page-search-input" type="search" placeholder="What are you looking for?" value="<?php echo get_search_query() ?>" name="s" />
		                <button class="page-search-submit" type="submit">Search</button>
		            </form>
		        </div><!-- /page-search -->

		        <div class="search-count">
		        	<?php if ( have_posts() ) : global $wp_query; ?>
		        	<?php query_posts('showposts=-1'); ?>
		        	<p><?php echo $wp_query->found_posts.' results found'; ?></p>				
		        </div>
				<?php
				/* Start the Loop */
				while ( have_posts() ) : the_post();

					/**
					 * Run the loop for the search to output the results.
					 * If you want to overload this in a child theme then include a file
					 * called content-search.php and that will be used instead.
					 */
					get_template_part( 'template-parts/content', 'search' );

				endwhile;

				the_posts_navigation();

			else :

				get_template_part( 'template-parts/content', 'none' );

			endif; ?>

			</div>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
