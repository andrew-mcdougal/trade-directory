<?php
/*
Author: Eddie Machado
URL: http://themble.com/bones/

This is where you can drop your custom functions or
just edit things like thumbnail sizes, header images,
sidebars, comments, etc.
*/

// LOAD BONES CORE (if you remove this, the theme will break)
require_once( 'library/bones.php' );

// CUSTOMIZE THE WORDPRESS ADMIN (off by default)
// require_once( 'library/admin.php' );

/*********************
LAUNCH BONES
Let's get everything up and running.
*********************/

function bones_ahoy() {

  //Allow editor style.
  add_editor_style( get_stylesheet_directory_uri() . '/library/css/editor-style.css' );

  // let's get language support going, if you need it
  load_theme_textdomain( 'bonestheme', get_template_directory() . '/library/translation' );

  // USE THIS TEMPLATE TO CREATE CUSTOM POST TYPES EASILY
  require_once( 'library/custom-post-type.php' );

  // launching operation cleanup
  add_action( 'init', 'bones_head_cleanup' );
  // A better title
  add_filter( 'wp_title', 'rw_title', 10, 3 );
  // remove WP version from RSS
  add_filter( 'the_generator', 'bones_rss_version' );
  // remove pesky injected css for recent comments widget
  add_filter( 'wp_head', 'bones_remove_wp_widget_recent_comments_style', 1 );
  // clean up comment styles in the head
  add_action( 'wp_head', 'bones_remove_recent_comments_style', 1 );
  // clean up gallery output in wp
  add_filter( 'gallery_style', 'bones_gallery_style' );

  // enqueue base scripts and styles
  add_action( 'wp_enqueue_scripts', 'bones_scripts_and_styles', 999 );
  // ie conditional wrapper

  // launching this stuff after theme setup
  bones_theme_support();

  // adding sidebars to Wordpress (these are created in functions.php)
  add_action( 'widgets_init', 'bones_register_sidebars' );

  // cleaning up random code around images
  add_filter( 'the_content', 'bones_filter_ptags_on_images' );
  // cleaning up excerpt
  add_filter( 'excerpt_more', 'bones_excerpt_more' );

} /* end bones ahoy */

// let's get this party started
add_action( 'after_setup_theme', 'bones_ahoy' );


/************* OEMBED SIZE OPTIONS *************/

if ( ! isset( $content_width ) ) {
	$content_width = 680;
}

/************* THUMBNAIL SIZE OPTIONS *************/

// Thumbnail sizes
add_image_size( 'bones-thumb-600', 600, 150, true );
add_image_size( 'bones-thumb-300', 300, 100, true );

/*
to add more sizes, simply copy a line from above
and change the dimensions & name. As long as you
upload a "featured image" as large as the biggest
set width or height, all the other sizes will be
auto-cropped.

To call a different size, simply change the text
inside the thumbnail function.

For example, to call the 300 x 100 sized image,
we would use the function:
<?php the_post_thumbnail( 'bones-thumb-300' ); ?>
for the 600 x 150 image:
<?php the_post_thumbnail( 'bones-thumb-600' ); ?>

You can change the names and dimensions to whatever
you like. Enjoy!
*/

add_filter( 'image_size_names_choose', 'bones_custom_image_sizes' );

function bones_custom_image_sizes( $sizes ) {
	return array_merge( $sizes, array(
		'bones-thumb-600' => __('600px by 150px'),
		'bones-thumb-300' => __('300px by 100px'),
	) );
}

/*
The function above adds the ability to use the dropdown menu to select
the new images sizes you have just created from within the media manager
when you add media to your content blocks. If you add more image sizes,
duplicate one of the lines in the array and name it according to your
new image size.
*/

/************* THEME CUSTOMIZE *********************/

/* 
  A good tutorial for creating your own Sections, Controls and Settings:
  http://code.tutsplus.com/series/a-guide-to-the-wordpress-theme-customizer--wp-33722
  
  Good articles on modifying the default options:
  http://natko.com/changing-default-wordpress-theme-customization-api-sections/
  http://code.tutsplus.com/tutorials/digging-into-the-theme-customizer-components--wp-27162
  
  To do:
  - Create a js for the postmessage transport method
  - Create some sanitize functions to sanitize inputs
  - Create some boilerplate Sections, Controls and Settings
*/

function bones_theme_customizer($wp_customize) {
  // $wp_customize calls go here.
  //
  // Uncomment the below lines to remove the default customize sections 

  // $wp_customize->remove_section('title_tagline');
  // $wp_customize->remove_section('colors');
  // $wp_customize->remove_section('background_image');
  // $wp_customize->remove_section('static_front_page');
  // $wp_customize->remove_section('nav');

  // Uncomment the below lines to remove the default controls
  // $wp_customize->remove_control('blogdescription');
  
  // Uncomment the following to change the default section titles
  // $wp_customize->get_section('colors')->title = __( 'Theme Colors' );
  // $wp_customize->get_section('background_image')->title = __( 'Images' );
}

add_action( 'customize_register', 'bones_theme_customizer' );

/************* ACTIVE SIDEBARS ********************/

// Sidebars & Widgetizes Areas
function bones_register_sidebars() {
	register_sidebar(array(
		'id' => 'sidebar1',
		'name' => __( 'Sidebar 1', 'bonestheme' ),
		'description' => __( 'The first (primary) sidebar.', 'bonestheme' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h4 class="widgettitle">',
		'after_title' => '</h4>',
	));

	/*
	to add more sidebars or widgetized areas, just copy
	and edit the above sidebar code. In order to call
	your new sidebar just use the following code:

	Just change the name to whatever your new
	sidebar's id is, for example:

	register_sidebar(array(
		'id' => 'sidebar2',
		'name' => __( 'Sidebar 2', 'bonestheme' ),
		'description' => __( 'The second (secondary) sidebar.', 'bonestheme' ),
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h4 class="widgettitle">',
		'after_title' => '</h4>',
	));

	To call the sidebar in your template, you can just copy
	the sidebar.php file and rename it to your sidebar's name.
	So using the above example, it would be:
	sidebar-sidebar2.php

	*/
} // don't remove this bracket!


/************* COMMENT LAYOUT *********************/

// Comment Layout
function bones_comments( $comment, $args, $depth ) {
   $GLOBALS['comment'] = $comment; ?>
  <div id="comment-<?php comment_ID(); ?>" <?php comment_class('cf'); ?>>
	<article  class="cf">
	  <header class="comment-author vcard">
		<?php
		/*
		  this is the new responsive optimized comment image. It used the new HTML5 data-attribute to display comment gravatars on larger screens only. What this means is that on larger posts, mobile sites don't have a ton of requests for comment images. This makes load time incredibly fast! If you'd like to change it back, just replace it with the regular wordpress gravatar call:
		  echo get_avatar($comment,$size='32',$default='<path_to_url>' );
		*/
		?>
		<?php // custom gravatar call ?>
		<?php
		  // create variable
		  $bgauthemail = get_comment_author_email();
		?>
		<img data-gravatar="http://www.gravatar.com/avatar/<?php echo md5( $bgauthemail ); ?>?s=40" class="load-gravatar avatar avatar-48 photo" height="40" width="40" src="<?php echo get_template_directory_uri(); ?>/library/images/nothing.gif" />
		<?php // end custom gravatar call ?>
		<?php printf(__( '<cite class="fn">%1$s</cite> %2$s', 'bonestheme' ), get_comment_author_link(), edit_comment_link(__( '(Edit)', 'bonestheme' ),'  ','') ) ?>
		<time datetime="<?php echo comment_time('Y-m-j'); ?>"><a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ) ?>"><?php comment_time(__( 'F jS, Y', 'bonestheme' )); ?> </a></time>

	  </header>
	  <?php if ($comment->comment_approved == '0') : ?>
		<div class="alert alert-info">
		  <p><?php _e( 'Your comment is awaiting moderation.', 'bonestheme' ) ?></p>
		</div>
	  <?php endif; ?>
	  <section class="comment_content cf">
		<?php comment_text() ?>
	  </section>
	  <?php comment_reply_link(array_merge( $args, array('depth' => $depth, 'max_depth' => $args['max_depth']))) ?>
	</article>
  <?php // </li> is added by WordPress automatically ?>
<?php
} // don't remove this bracket!


/*
This is a modification of a function found in the
twentythirteen theme where we can declare some
external fonts. If you're using Google Fonts, you
can replace these fonts, change it in your scss files
and be up and running in seconds.
*/
function bones_fonts() {
  wp_enqueue_style('googleFonts', '//fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic');
}

add_action('wp_enqueue_scripts', 'bones_fonts');






















































// Custom shit
/**
 * Proper way to enqueue scripts and styles
 */
function ontrend_add_styles_and_scripts() {
	// Sample load from cloud CSS
	wp_enqueue_style( 'prefix-font-awesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css', array(), '4.6.3' );

	//
	// JS
	//

	// jQuery
	wp_enqueue_script( 'jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js', array(), '' );

	// GSAP Animation & Timelines
	wp_enqueue_script( 'gsap-script', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js', array(), '' );

	// Responsive classes
	//wp_enqueue_script( 'responsive-classes-script', get_template_directory_uri() . '/library/js/jquery.responsive-classes.js', array(), '' );

	// Slick slider
	wp_enqueue_script( 'slick-script', get_template_directory_uri() . '/library/js/slick.min.js', array(), '' );

	// Match height
	wp_enqueue_script( 'height-script', get_template_directory_uri() . '/library/js/matchHeight.js', array(), '' );  

	// onTrend custom js
	wp_enqueue_script( 'ontrend-script', get_template_directory_uri() . '/library/js/ontrend.js', array(), '' );

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	//
	// CSS
	//
	// Fontawesome
	wp_enqueue_style( 'prefix-font-awesome', '//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css', array(), '4.0.3' );

	// Slick slider css
	wp_enqueue_style( 'slick-style', get_stylesheet_directory_uri() . '/library/css/slick.css', array(), '' );
	wp_enqueue_style( 'slick-theme-style', get_stylesheet_directory_uri() . '/library/css/slick-theme.css', array(), '' );

	// skeleton grid
  wp_enqueue_style( 'skeleton-style', get_stylesheet_directory_uri() . '/library/css/skeleton.css', array(), '' );

  // onTrend custom css
	wp_enqueue_style( 'ontrend-style', get_stylesheet_directory_uri() . '/library/css/ontrend.css', array(), '' );

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}

add_action( 'wp_enqueue_scripts', 'ontrend_add_styles_and_scripts' );



// Add custom post type TRADE
function custom_post_type_trade() {
  $labels = array(
    'name'               => _x( 'Trades', 'post type general name' ),
    'singular_name'      => _x( 'Trade', 'post type singular name' ),
    'add_new'            => _x( 'Add New', 'book' ),
    'add_new_item'       => __( 'Add New Trade' ),
    'edit_item'          => __( 'Edit Trade' ),
    'new_item'           => __( 'New Trade' ),
    'all_items'          => __( 'All Trades' ),
    'view_item'          => __( 'View Trade' ),
    'search_items'       => __( 'Search Trades' ),
    'not_found'          => __( 'No trades found' ),
    'not_found_in_trash' => __( 'No trades found in the Trash' ), 
    'parent_item_colon'  => '',
    'menu_name'          => 'Trades'
  );
  $args = array(
    'labels'        => $labels,
    'description'   => 'Holds our trades and trade specific data',
    'public'        => true,
    'menu_position' => 5,
    'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', ),
    'has_archive'   => true,
  );
  register_post_type( 'trade', $args ); 
}
add_action( 'init', 'custom_post_type_trade' );

function trade_taxonomy_trade() {
  $labels = array(
    'name'              => _x( 'Trade/Service Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'Trade/Service Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Trade/Service Categories' ),
    'all_items'         => __( 'All Trade/Service Categories' ),
    'parent_item'       => __( 'Parent Trade/Service Category' ),
    'parent_item_colon' => __( 'Parent Trade/Service Category:' ),
    'edit_item'         => __( 'Edit Trade/Service Category' ), 
    'update_item'       => __( 'Update Trade/Service Category' ),
    'add_new_item'      => __( 'Add New Trade/Service Category' ),
    'new_item_name'     => __( 'New Trade/Service Category' ),
    'menu_name'         => __( 'Trade/Service' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
    'rewrite' => array( 'hierarchical' => true ), // this makes hierarchical URLs
  );
  register_taxonomy( 'trade_category', 'trade', $args );
}
add_action( 'init', 'trade_taxonomy_trade', 0 );

function trade_taxonomy_state() {
  $labels = array(
    'name'              => _x( 'State Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'State Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search State Categories' ),
    'all_items'         => __( 'All State Categories' ),
    'parent_item'       => __( 'Parent State Category' ),
    'parent_item_colon' => __( 'Parent State Category:' ),
    'edit_item'         => __( 'Edit State Category' ), 
    'update_item'       => __( 'Update State Category' ),
    'add_new_item'      => __( 'Add New State Category' ),
    'new_item_name'     => __( 'New State Category' ),
    'menu_name'         => __( 'State' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
    'rewrite' => array( 'hierarchical' => true ), // this makes hierarchical URLs
  );
  register_taxonomy( 'state_category', 'trade', $args );
}
add_action( 'init', 'trade_taxonomy_state', 0 );

function trade_taxonomy_region() {
  $labels = array(
    'name'              => _x( 'Region Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'Region Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Region Categories' ),
    'all_items'         => __( 'All Region Categories' ),
    'parent_item'       => __( 'Parent Region Category' ),
    'parent_item_colon' => __( 'Parent Region Category:' ),
    'edit_item'         => __( 'Edit Region Category' ), 
    'update_item'       => __( 'Update Region Category' ),
    'add_new_item'      => __( 'Add New Region Category' ),
    'new_item_name'     => __( 'New Region Category' ),
    'menu_name'         => __( 'Region' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
    'rewrite' => array( 'hierarchical' => true ), // this makes hierarchical URLs
  );
  register_taxonomy( 'region_category', 'trade', $args );
}
add_action( 'init', 'trade_taxonomy_region', 0 );


// Build the category form
function buildSelect($tax){
	$terms = get_terms($tax);
	$x = '<select name="'. $tax .'">';
	$x .= '<option value="">Select '. ucfirst($tax) .'</option>';
	foreach ($terms as $term) {
	   $x .= '<option value="' . $term->slug . '">' . $term->name . '</option>';
	}
	$x .= '</select>';
	return $x;
}


// add ACF options
if( function_exists('acf_add_options_page') ) {
  
  acf_add_options_page();
  
}


/**
 * Recursively sort an array of taxonomy terms hierarchically. Child categories will be
 * placed under a 'children' member of their parent term.
 * @param Array   $cats     taxonomy term objects to sort
 * @param Array   $into     result array to put them in
 * @param integer $parentId the current parent ID to put them in
 */
function sort_terms_hierarchicaly(Array &$cats, Array &$into, $parentId = 0)
{
    foreach ($cats as $i => $cat) {
        if ($cat->parent == $parentId) {
            $into[$cat->term_id] = $cat;
            unset($cats[$i]);
        }
    }

    foreach ($into as $topCat) {
        $topCat->children = array();
        sort_terms_hierarchicaly($cats, $topCat->children, $topCat->term_id);
    }
}










/* DON'T DELETE THIS CLOSING TAG */ ?>
