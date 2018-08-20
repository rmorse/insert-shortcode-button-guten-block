<?php
/**
 * Plugin Name: Insert Shortcode Gutenberg Block
 * Plugin URI: https://github.com/rmorse/insert-shortcode-button-guten-block
 * Description: Insert Shortcodes into the RichText editor of your Gutenberg Block, using a Toolbar Button
 * Author: 
 * Author URI: https://codeamp.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
