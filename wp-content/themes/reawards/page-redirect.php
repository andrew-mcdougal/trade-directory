<?php
/*
* Template Name: Page: Redirect
*/

?>
<?php the_post(); ?>
<?php header( "location: " . get_field('redirect_url') ); ?>