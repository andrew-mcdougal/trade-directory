<?php
/**
 * rea functions and definitions.
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package rea
 */

if ( ! function_exists( 'reawards_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function reawards_setup() {
	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on rea, use a find and replace
	 * to change 'reawards' to the name of your theme in all the template files.
	 */
	load_theme_textdomain( 'reawards', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	 */
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => esc_html__( 'Primary', 'reawards' ),
	) );

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	/*
	 * Enable support for Post Formats.
	 * See https://developer.wordpress.org/themes/functionality/post-formats/
	 */
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
	) );

	// Set up the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'reawards_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif;
add_action( 'after_setup_theme', 'reawards_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function reawards_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'reawards_content_width', 640 );
}
add_action( 'after_setup_theme', 'reawards_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function reawards_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'reawards' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'reawards' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'reawards_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function reawards_scripts() {
	

	wp_enqueue_script( 'reawards-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

	wp_enqueue_script( 'reawards-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'reawards_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';













add_filter('show_admin_bar', '__return_false');





// Our custom post type function
function my_custom_post_product() {
  $labels = array(
    'name'               => _x( 'Awards', 'post type general name' ),
    'singular_name'      => _x( 'Award', 'post type singular name' ),
    'add_new'            => _x( 'Add New', 'book' ),
    'add_new_item'       => __( 'Add New Award' ),
    'edit_item'          => __( 'Edit Award' ),
    'new_item'           => __( 'New Awards' ),
    'all_items'          => __( 'All Awards' ),
    'view_item'          => __( 'View Award' ),
    'search_items'       => __( 'Search Awards' ),
    'not_found'          => __( 'No Awards found' ),
    'not_found_in_trash' => __( 'No Awards found in the Trash' ), 
    'parent_item_colon'  => '',
    'menu_name'          => 'Awards'
  );
  $args = array(
    'labels'        => $labels,
    'description'   => 'Holds our award data',
    'public'        => true,
    'menu_position' => 5,
    'supports'      => array( 'title', 'editor', 'revisions' ),
    'has_archive'   => true,
  );
  register_post_type( 'award', $args ); 
}


add_action( 'init', 'my_custom_post_product' );
// Hooking up our function to theme setup
add_action( 'init', 'create_posttype' );

function my_taxonomies_product() {
  $labels = array(
    'name'              => _x( 'Award Categories', 'taxonomy general name' ),
    'singular_name'     => _x( 'Award Category', 'taxonomy singular name' ),
    'search_items'      => __( 'Search Award Categories' ),
    'all_items'         => __( 'All Award Categories' ),
    'edit_item'         => __( 'Edit Award Category' ), 
    'update_item'       => __( 'Update Award Category' ),
    'add_new_item'      => __( 'Add New Award Category' ),
    'new_item_name'     => __( 'New Award Category' ),
    'menu_name'         => __( 'Award Categories' ),
  );
  $args = array(
    'labels' => $labels,
    'hierarchical' => true,
  );
  register_taxonomy( 'award_category', 'award', $args );
}
add_action( 'init', 'my_taxonomies_product', 0 );











