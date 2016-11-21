<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package rea
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="footer-inner max-width">
			<div class="three columns footer-logo">
				<img src="<?php echo get_template_directory_uri(); ?>/img/footer-logo-2x.png" />
			</div>
			<div class="six columns footer-middle">
				<p><?php echo date('Y'); ?> Annual REA Excellence Awards</p>
				<?php $footer_menu = array( 
				'menu_id' => '3',
				'container' => '',
				
				
	            
	           
				

				); 

				wp_nav_menu($footer_menu);
				?>
			</div>
			<div class="three columns footer-social">
				<a href="https://twitter.com/realestate_au" target="_blank"><i class="fa fa-twitter"></i></a>
				<a href="https://www.facebook.com/realestateAus/" target="_blank"><i class="fa fa-facebook-official"></i></a>
				<a href="https://plus.google.com/+realestatecomau/" target="_blank"><i class="fa fa-google-plus"></i></a>
			</div>
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->


<?php wp_footer(); ?>

</body>
</html>
