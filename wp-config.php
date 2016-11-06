<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'trade-website');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'UvncLe35M^X6~/.+(>TQG0s !#/#+Z:>v+ OBO:-,tdR&H&ND=qq<Dq<7CGs-ZGG');
define('SECURE_AUTH_KEY',  'tV&u8%t5U%*+#SMa+6m/pi]n?R,xEY+nv.=1*5;k;;j#K&@w6o5x(X>jKe)`j7|F');
define('LOGGED_IN_KEY',    'lm3eUAe:[<ZlIcKMy7LZ/+(|GF[bl}6J.3&--_F.mZ[GvR>B= Anddx{vXt}mGgS');
define('NONCE_KEY',        '5JnJn~aK.eHM/N^!yn+^WS3JPl&J>PU<G0RXoT-z_5A?]E9bBj%Fv4GFg!#|_i-y');
define('AUTH_SALT',        'HNf;%Km24my>`&0qww,]Bzc_b]GaZRX7l@+mNBQg1@t+*$pI?`m5z_H[k|eFb}1o');
define('SECURE_AUTH_SALT', '^W)@vueL2P`p4fO,pV.9<ci.<(A-+Dgq(D1G3Y_y*e}Cmy4>|3uP+qMAx<#LZ{x(');
define('LOGGED_IN_SALT',   'P;x0gG^6=3A!|zADTUTrif${B[9J8DZ_Ldko|.D$-<{`P7m@s?HS>Kfh5a5Y,gid');
define('NONCE_SALT',       '>*1A!4*g-l@N|B--(d!t;&TidZ4:[X4@ 4+U#A*RgN{DxRJ$wxBg(XT~BT@P U5;');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
