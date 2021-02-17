<?php
/**
 * The base class of the plugin.
 *
 * @link       https://t.me/manzoorwanijk
 * @since      1.0.0
 *
 * @package    WPTelegram\Widget
 * @subpackage WPTelegram\Widget\includes
 */

namespace WPTelegram\Widget\includes;

/**
 * The base class of the plugin.
 *
 * The base class of the plugin.
 *
 * @package    WPTelegram\Widget
 * @subpackage WPTelegram\Widget\includes
 * @author     Manzoor Wani <@manzoorwanijk>
 */
abstract class BaseClass {

	/**
	 * The plugin class instance.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Main $plugin The plugin class instance.
	 */
	protected $plugin;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since 1.0.0
	 * @param Main $plugin The plugin class instance.
	 */
	public function __construct( $plugin ) {

		$this->plugin = $plugin;
	}
}
