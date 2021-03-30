<?php
/**
 * The main plugin file.
 *
 * @link              https://manzoorwani.dev
 * @since             1.0.0
 * @package           WPTelegram_Widget
 *
 * @wordpress-plugin
 * Plugin Name:       WP Telegram Widget
 * Plugin URI:        https://t.me/WPTelegram
 * Description:       Display the Telegram Public Channel or Group Feed in a WordPress widget or anywhere you want using a shortcode.
 * Version:           2.0.2
 * Author:            Manzoor Wani
 * Author URI:        https://manzoorwani.dev
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       wptelegram-widget
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Current plugin version.
 */
define( 'WPTELEGRAM_WIDGET_VER', '2.0.2' );

define( 'WPTELEGRAM_WIDGET_BASENAME', plugin_basename( __FILE__ ) );

define( 'WPTELEGRAM_WIDGET_DIR', untrailingslashit( plugin_dir_path( __FILE__ ) ) );

define( 'WPTELEGRAM_WIDGET_URL', untrailingslashit( plugins_url( '', __FILE__ ) ) );

/**
 * Include autoloader.
 */
require WPTELEGRAM_WIDGET_DIR . '/autoload.php';

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-wptelegram-widget-activator.php
 */
function activate_wptelegram_widget() {
	\WPTelegram\Widget\includes\Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-wptelegram-widget-deactivator.php
 */
function deactivate_wptelegram_widget() {
	\WPTelegram\Widget\includes\Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'activate_wptelegram_widget' );
register_deactivation_hook( __FILE__, 'deactivate_wptelegram_widget' );

/**
 * Begins execution of the plugin and acts as the main instance of WPTelegram_Widget.
 *
 * Returns the main instance of WPTelegram_Widget to prevent the need to use globals.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 *
 * @return \WPTelegram\Widget\includes\Main
 */
function WPTG_Widget() { // phpcs:ignore WordPress.NamingConventions.ValidFunctionName -- Ignore  snake_case

	return \WPTelegram\Widget\includes\Main::instance();
}

// Fire.
WPTG_Widget();

define( 'WPTELEGRAM_WIDGET_LOADED', true );
