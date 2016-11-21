<!doctype html>

<!--[if lt IE 7]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9 lt-ie8"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html <?php language_attributes(); ?> class="no-js lt-ie9"><![endif]-->
<!--[if gt IE 8]><!--> <html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->

	<head>
		<meta charset="utf-8">

		<?php // force Internet Explorer to use the latest rendering engine available 
		$termlist = array();
		$item = array();
		foreach($_POST as $key => $value){
			if($value != ''){
				$item['terms'] = htmlspecialchars($value);
				$termlist[] = $item['terms']; // get values for set title
			}
		}
		$cleanArray = array_merge(array('relation' => 'AND'), $list);
		
		$delimiters = array(' , ',' | ');
		$i = 0;
		foreach ($termlist as $value) {
			$termlist[$i] .= $delimiters[$i];
			$i++;
		}
		$terms = implode($termlist);
		$FinalText = ucwords($terms);
		?>
		<meta http-equiv="X-UA-Compatible" content="IE=edge">

		<title><?php echo $FinalText ?></title>
        <meta name="description" content="Find the best <?php echo $termlist[0]; ?>traders in <?php echo $termlist[1]; ?>This site has the best directory of <?php echo $termlist[0]; ?>and <?php echo $termlist[0]; ?>supplies in <?php echo $termlist[1]; ?>in the <?php echo $termlist[2]; ?>." />

		<?php // mobile meta (hooray!) ?>
		<meta name="HandheldFriendly" content="True">
		<meta name="MobileOptimized" content="320">
		<meta name="viewport" content="width=device-width, initial-scale=1"/>

		<?php // icons & favicons (for more: http://www.jonathantneal.com/blog/understand-the-favicon/) ?>
		<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/library/images/apple-touch-icon.png">
		<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
		<!--[if IE]>
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
		<![endif]-->
		<?php // or, set /favicon.ico for IE10 win ?>
		<meta name="msapplication-TileColor" content="#f01d4f">
		<meta name="msapplication-TileImage" content="<?php echo get_template_directory_uri(); ?>/library/images/win8-tile-icon.png">
            <meta name="theme-color" content="#121212">

		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

		<?php // wordpress head functions ?>
		<?php wp_head(); ?>
		<?php // end of wordpress head ?>

		<?php // drop Google Analytics Here ?>
		<?php // end analytics ?>

	</head>

	<body id="trade" <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">

		<div id="container">

			<header class="header" role="banner" itemscope itemtype="http://schema.org/WPHeader">

				<div id="inner-header" class="wrap cf">

					<?php // to use a image just replace the bloginfo('name') with your img src and remove the surrounding <p> ?>
					<p id="logo" class="h1" itemscope itemtype="http://schema.org/Organization"><a href="<?php echo home_url(); ?>" rel="nofollow"><?php bloginfo('name'); ?></a></p>

					<?php // if you'd like to use the site description you can un-comment it below ?>
					<?php // bloginfo('description'); ?>


					<nav role="navigation" itemscope itemtype="http://schema.org/SiteNavigationElement">
						<?php wp_nav_menu(array(
    					         'container' => false,                           // remove nav container
    					         'container_class' => 'menu cf',                 // class of container (should you choose to use it)
    					         'menu' => __( 'The Main Menu', 'bonestheme' ),  // nav name
    					         'menu_class' => 'nav top-nav cf',               // adding custom nav class
    					         'theme_location' => 'main-nav',                 // where it's located in the theme
    					         'before' => '',                                 // before the menu
        			               'after' => '',                                  // after the menu
        			               'link_before' => '',                            // before each link
        			               'link_after' => '',                             // after each link
        			               'depth' => 0,                                   // limit the depth of the nav
    					         'fallback_cb' => ''                             // fallback function (if there is one)
						)); ?>

					</nav>

					<div class="main-carousel">
					<?php while(has_sub_field('main_cards', 'option')): ?>
					<?php $image = get_sub_field('image'); ?>
					<?php $link = get_sub_field('link'); ?>
					
						<div class="business-pod">
							<div>
								<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
								<a href="<?php echo $link; ?>"><?php echo $link; ?></a>
							</div>
						</div>
					<?php endwhile; ?>
					</div>
<div class="container">
	<form class="row" method="post" action="<?php bloginfo('url');?>/trade-search-results/">
		<?php $taxonomies = get_object_taxonomies('trade');
		foreach($taxonomies as $tax){

		echo '<div class="columns three">';
			echo buildSelect($tax);
		echo '</div>';
		}
		?>
		<input class="columns three" type="submit"/>
	</form>
</div>


				</div>
			</header>