<?php
/**
 * The public-facing functionality of the plugin.
 *
 * @link       https://t.me/manzoorwanijk
 * @since      1.0.0
 *
 * @package    WPTelegram_Widget
 * @subpackage WPTelegram_Widget/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    WPTelegram_Widget
 * @subpackage WPTelegram_Widget/public
 * @author     Manzoor Wani
 */
class WPTelegram_Widget_Public {

	/**
	 * Title of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $title    Title of the plugin
	 */
	protected $title;

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * The suffix to be used for JS and CSS files
	 *
	 * @since 1.0.0
	 * @access private
	 * @var string $suffix The suffix to be used for JS and CSS files.
	 */
	private $suffix;

	/**
	 * The Telegram API
	 *
	 * @since 1.0.0
	 * @access private
	 * @var WPTelegram_Bot_API $tg_api Telegram API Object.
	 */
	private $tg_api;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since 1.0.0
	 *
	 * @param string $title       Title of the plugin.
	 * @param string $plugin_name The name of the plugin.
	 * @param string $version     The version of this plugin.
	 */
	public function __construct( $title, $plugin_name, $version ) {

		$this->title       = $title;
		$this->plugin_name = $plugin_name;
		$this->version     = $version;

		// Use minified libraries if SCRIPT_DEBUG is turned off.
		$this->suffix = ( defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ) ? '' : '.min';
	}

	/**
	 * Register the stylesheets for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		wp_enqueue_style( $this->plugin_name, WPTELEGRAM_WIDGET_URL . '/public/css/wptelegram-widget-public' . $this->suffix . '.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		wp_enqueue_script( $this->plugin_name, WPTELEGRAM_WIDGET_URL . '/public/js/wptelegram-widget-public' . $this->suffix . '.js', array( 'jquery' ), $this->version, false );

	}

	/**
	 * Register the URL rewrite
	 *
	 * @since    1.4.0
	 */
	public function add_rewrite_rules() {

		add_rewrite_tag( '%core%', '([^&]+)' );
		add_rewrite_tag( '%module%', '([^&]+)' );
		add_rewrite_tag( '%action%', '([^&]+)' );
		add_rewrite_tag( '%username%', '([^&]+)' );
		add_rewrite_tag( '%message_id%', '([^&]+)' );

		add_rewrite_rule( '^wptelegram/widget/view/@([a-zA-Z]\w{3,30}[^\W_])/([0-9]+)/?', 'index.php?core=wptelegram&module=widget&action=view&username=$matches[1]&message_id=$matches[2]', 'top' );
	}

	/**
	 * Set widget Message Template based on WP Query.
	 *
	 * @since 1.4.0
	 * @param string $template The page template to be used.
	 */
	public function set_message_template( $template ) {

		global $wp_query;
		$qvs = $wp_query->query_vars;

		if ( isset( $qvs['core'], $qvs['module'], $qvs['action'], $qvs['username'], $qvs['message_id'] ) && 'wptelegram' === $qvs['core'] && 'widget' === $qvs['module'] ) {

			if ( 'view' === $qvs['action'] ) {

				$saved_username   = strtolower( WPTG_Widget()->options()->get( 'username' ) );
				// Whether to allow embeds for all channels.
				$allow_all_embeds = apply_filters( 'wptelegram_widget_allow_embeds_for_all', true, $qvs['username'] );
				// Dynamic filter based on the username.
				$allow_all_embeds = apply_filters( "wptelegram_widget_allow_embeds_for_{$qvs['username']}", $allow_all_embeds );

				if ( $allow_all_embeds || strtolower( $qvs['username'] ) === $saved_username ) {
					$template = dirname( __FILE__ ) . '/partials/message-view.php';
				} else {
					status_header( 401 );
					exit;
				}
			}
		}

		return $template;
	}

	/**
	 * Render the HTML of the widget message.
	 *
	 * @since  1.3.0
	 *
	 * @param string $username The Telegram channel/group username.
	 * @param int    $message_id Unique identifier of group/channel message.
	 */
	public function render_single_message( $username, $message_id ) {

		$saved_username = WPTG_Widget()->options()->get( 'username' );

		$url = $this->get_telegram_post_embed_url( $username, $message_id );

		$html = $this->get_post_html_from_telegram( $url );

		if ( empty( $html ) ) {
			return;
		}

		if ( extension_loaded( 'mbstring' ) ) {
			// fix the issue with Cyrillic characters.
			$html = mb_convert_encoding( $html, 'UTF-8', mb_detect_encoding( $html ) );
			$html = mb_convert_encoding( $html, 'HTML-ENTITIES', 'UTF-8' );
		}

		$dom = new DOMDocument();

		@$dom->loadHTML( $html );

		$final_output = $this->get_the_single_message_output( $dom );

		if ( strtolower( $saved_username ) !== strtolower( $username ) ) {
			echo $final_output;
			return;
		}

		if ( $this->post_still_exists_on_telegram( $dom ) ) {
			echo $final_output;
			return;
		}

		// remove the post from saved messages.
		$this->remove_post( $message_id );
	}

	/**
	 * Retrieve post html from Telegram.
	 *
	 * @since  1.5.0
	 *
	 * @param string $url The Telegram channel/group post URL.
	 */
	public function get_post_html_from_telegram( $url ) {

		$args = array(
			'headers' => array( 'wptelegram_bot' => true ), // for proxy check.
		);

		$response = wp_remote_get( $url, $args );
		$code     = wp_remote_retrieve_response_code( $response );
		$html     = wp_remote_retrieve_body( $response );

		if ( 200 !== $code ) {
			return false;
		}

		return $html;
	}

	/**
	 * Remove the post message from saved messages.
	 *
	 * @since  1.3.0
	 *
	 * @param int $message_id Unique identifier of group/channel message.
	 */
	public function remove_post( $message_id ) {

		$messages = WPTG_Widget()->options()->get( 'messages', array() );

		// use array_keys() instead of array_search().
		$keys = array_keys( $messages, $message_id );
		unset( $messages[ reset( $keys ) ] );

		// destroy keys.
		$messages = array_values( $messages );

		WPTG_Widget()->options()->set( 'messages', $messages );
	}

	/**
	 * Get the widget HTML after processing.
	 *
	 * @since  1.5.0
	 *
	 * @param DOMDocument $dom The dom object for the post HTML.
	 */
	public function get_the_single_message_output( $dom ) {

		/* Inject Override style */
		$heads = $dom->getElementsByTagName( 'head' );
		// for some weird PHP installations.
		if ( $heads->length ) {
			$head                 = $heads->item( 0 );
			$style_elm            = $dom->createElement( 'style', 'body.body_widget_post { min-width: initial; }' );
			$elm_type_attr        = $dom->createAttribute( 'type' );
			$elm_type_attr->value = 'text/css';
			$style_elm->appendChild( $elm_type_attr );
			$head->appendChild( $style_elm );
		}
		/* Inject Override style */

		/* Remove Google Analytics Code to avoid console errors */
		$scripts = $dom->getElementsByTagName( 'script' );
		foreach ( $scripts as $script ) {

			if ( false !== strpos( $script->nodeValue, 'GoogleAnalyticsObject' ) ) {
				$script->parentNode->removeChild ( $script );
				break;
			}
		}
		/* Remove Google Analytics Code to avoid console errors */

		$html = $dom->saveHTML();

		return (string) apply_filters( 'wptelegram_widget_single_message_output', $html, $dom );
	}

	/**
	 * If the post is found - not deleted.
	 *
	 * Searches for "tgme_widget_message_error" class
	 * in the widget HTML
	 *
	 * @since  1.5.0
	 *
	 * @param DOMDocument $dom The dom object for the post HTML.
	 */
	public function post_still_exists_on_telegram( $dom ) {
		$finder    = new DomXPath( $dom );
		$classname = 'tgme_widget_message_error';
		$nodes     = $finder->query( "//*[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]" );

		foreach ( $nodes as $node ) {

			if ( preg_match( '/not found/i', $node->nodeValue ) ) {

				return false;
			}
		}

		return true;
	}

	/**
	 * Render the HTML of the widget message.
	 *
	 * @since  1.5.0
	 *
	 * @param string $username The Telegram channel/group username.
	 * @param int    $message_id Unique identifier of group/channel message.
	 */
	public function get_telegram_post_embed_url( $username, $message_id ) {

		$url  = "https://t.me/{$username}/{$message_id}";
		$args = array(
			'embed' => true,
		);
		if ( isset( $_GET['userpic'] ) ) {
			$args['userpic'] = sanitize_text_field( wp_unslash( $_GET['userpic'] ) );
		}

		$url = add_query_arg( $args, $url );

		return (string) apply_filters( 'wptelegram_widget_embed_url', $url, $username );
	}

	/**
	 * Registers shortcode to display channel feed.
	 *
	 * @since    1.0.0
	 *
	 * @param array $atts The shortcode attributes.
	 */
	public static function feed_widget_shortcode( $atts ) {

		// fetch messages.
		$messages = array_reverse( WPTG_Widget()->options()->get( 'messages', array() ) );

		if ( empty( $messages ) ) {
			return;
		}

		$defaults = array(
			'num_messages' => 5,
			'widget_width' => 100,
			'author_photo' => 'auto',
		);

		// use global options.
		foreach ( $defaults as $key => $default ) {
			$defaults[ $key ] = WPTG_Widget()->options()->get( $key, $default );
		}

		$args = shortcode_atts( $defaults, $atts, 'wptelegram-widget' );

		$args = array_map( 'sanitize_text_field', $args );

		$username = WPTG_Widget()->options()->get( 'username' );

		$num_messages = absint( $args['num_messages'] );

		if ( ! $num_messages ) {
			$num_messages = 5;
		}

		$messages = array_slice( $messages, 0, $num_messages );

		$widget_width = absint( $args['widget_width'] );
		$author_photo = $args['author_photo'];

		if ( ! $widget_width || $widget_width > 100 ) {
			$widget_width = 100;
		}

		switch ( $author_photo ) {
			case 'always_show':
				$userpic = 'true';
				break;
			case 'always_hide':
				$userpic = 'false';
				break;
			default:
				$userpic = null;
				break;
		}

		$message_view_urls = array();

		foreach ( $messages as $message_id ) {

			$message_view_urls[] = self::get_message_view_url( $username, $message_id, $userpic );
		}

		set_query_var( 'message_view_urls', $message_view_urls );
		set_query_var( 'widget_width', $widget_width );

		ob_start();
		$overridden_template = locate_template( 'wptelegram-widget/widget-view.php' );
		if ( $overridden_template ) {
			/**
			 * The value returned by locate_template() is a path to file.
			 * if either the child theme or the parent theme have overridden the template.
			 */

			if ( self::is_valid_template( $overridden_template ) ) {
				load_template( $overridden_template );
			}
		} else {
			/*
			 * If neither the child nor parent theme have overridden the template,
			 * we load the template from the 'partials' sub-directory of the directory this file is in.
			 */
			load_template( dirname( __FILE__ ) . '/partials/widget-view.php' );
		}
		$html = ob_get_contents();
		ob_get_clean();
		return $html;
	}

	/**
	 * Get the iframe URL for a message view.
	 *
	 * @since 1.4.0
	 *
	 * @param string $username   The Telegram channel/group username.
	 * @param int    $message_id Unique identifier of group/channel message.
	 * @param string $userpic    Whether to display the user pic or not.
	 *
	 * @return string
	 */
	public static function get_message_view_url( $username, $message_id, $userpic = null ) {

		$use_ugly_urls = apply_filters( 'wptelegram_widget_view_use_ugly_urls', false, $username );

		// check for permalink structure.
		$structure = get_option( 'permalink_structure' );

		if ( empty( $structure ) || $use_ugly_urls ) {

			$args = array(
				'core'       => 'wptelegram',
				'module'     => 'widget',
				'action'     => 'view',
				'username'   => $username,
				'message_id' => $message_id,
			);

			$url = add_query_arg( $args, site_url() );

		} else {

			$url = site_url( "/wptelegram/widget/view/@{$username}/{$message_id}/" );
		}

		if ( ! is_null( $userpic ) ) {
			$url = add_query_arg( 'userpic', $userpic, $url );
		}

		return (string) apply_filters( 'wptelegram_widget_message_view_url', $url, $username, $message_id, $userpic );
	}

	/**
	 * Check whether the template path is valid.
	 *
	 * @since 1.3.0
	 * @param string $template The template path.
	 *
	 * @return bool
	 */
	private static function is_valid_template( $template ) {
		/**
		 * Only allow templates that are in the active theme directory,
		 * parent theme directory, or the /wp-includes/theme-compat/ directory
		 * (prevent directory traversal attacks)
		 */
		$valid_paths = array_map(
			'realpath',
			array(
				get_stylesheet_directory(),
				get_template_directory(),
				ABSPATH . WPINC . '/theme-compat/',
			)
		);

		$path = realpath( $template );

		foreach ( $valid_paths as $valid_path ) {
			if ( preg_match( '#\A' . preg_quote( $valid_path ) . '#', $path ) ) {
				return true;
			}
		}
		return false;
	}

	/**
	 * Pull updates from Telegram
	 *
	 * @since 1.5.0
	 */
	public function may_be_fire_pull_updates() {

		if ( isset( $_GET['action'] ) && 'wptelegram_widget_pull_updates' === $_GET['action'] ) {
			do_action( 'wptelegram_widget_pull_the_updates' );
			exit( ':)' );
		}
	}

	/**
	 * Pull the updates from Telegram
	 *
	 * @since 1.5.0
	 */
	public function cron_pull_updates() {
		do_action( 'wptelegram_widget_pull_the_updates' );
	}

	/**
	 * Add custom schedules.
	 *
	 * @since 1.0.0
	 *
	 * @param array $schedules The WP Cron shedules.
	 */
	public function custom_cron_schedules( $schedules ) {
		$schedules['wptelegram_five_minutely'] = array(
			'interval' => 5 * MINUTE_IN_SECONDS, // Intervals in seconds.
			'display'  => __( 'Every 5 Minutes', 'wptelegram-widget' ),
		);
		return $schedules;
	}

	/**
	 * Do the necessary db upgrade, if needed
	 *
	 * @since    2.0.0
	 */
	public function do_upgrade() {

		$current_version = get_option( 'wptelegram_widget_ver', '1.2.0' );

		if ( ! version_compare( $current_version, WPTELEGRAM_WIDGET_VER, '<' ) ) {
			return;
		}

		do_action( 'wptelegram_widget_before_do_upgrade', $current_version );

		// the sequential upgrades
		// subsequent upgrade depends upon the previous one.
		$version_upgrades = array(
			'1.3.0', // first upgrade.
			'1.4.0',
			'1.5.0',
		);

		// always.
		if ( ! in_array( WPTELEGRAM_WIDGET_VER, $version_upgrades, true ) ) {
			$version_upgrades[] = WPTELEGRAM_WIDGET_VER;
		}

		foreach ( $version_upgrades as $target_version ) {

			if ( version_compare( $current_version, $target_version, '<' ) ) {

				$this->upgrade_to( $target_version );

				$current_version = $target_version;
			}
		}

		do_action( 'wptelegram_widget_after_do_upgrade', $current_version );
	}

	/**
	 * Upgrade to a specific version
	 *
	 * @since 2.0.0
	 *
	 * @param string $version The plugin verion to upgrade to.
	 */
	private function upgrade_to( $version ) {

		// 2.0.1 becomes 201
		$_version = str_replace( '.', '', $version );

		$method = array( $this, "upgrade_to_{$_version}" );

		if ( is_callable( $method ) ) {

			call_user_func( $method );
		}

		update_option( 'wptelegram_widget_ver', $version );
	}

	/**
	 * Upgrade to version 1.3.0
	 *
	 * @since    1.4.0
	 */
	private function upgrade_to_130() {

		$option   = 'wptelegram_widget_messages';
		$messages = get_option( $option, array() );

		if ( ! empty( $messages ) ) {

			WPTG_Widget()->options()->set( 'messages', $messages );
		}

		delete_option( $option );

		$transient = 'wptelegram_widget_last_update_id';
		$update_id = (int) get_site_transient( $transient );
		if ( $update_id ) {
			WPTG_Widget()->options()->set( 'last_update_id', $update_id );
			delete_site_transient( $transient );
		}

		// set cron event in case of active plugin update.
		if ( ! wp_next_scheduled( 'wptelegram_widget_pull_updates' ) ) {
			wp_schedule_event( time(), 'wptelegram_five_minutely', 'wptelegram_widget_pull_updates' );
		}
	}

	/**
	 * Upgrade to version 1.4.0
	 *
	 * @since    1.4.0
	 */
	private function upgrade_to_140() {
		flush_rewrite_rules();
	}

	/**
	 * Upgrade to version 1.5.0
	 *
	 * @since    1.5.0
	 */
	private function upgrade_to_150() {
		wp_clear_scheduled_hook( 'wptelegram_widget_pull_updates' );

		// set cron event in case of active plugin update.
		if ( ! wp_next_scheduled( 'wptelegram_widget_cron_pull_updates' ) ) {
			wp_schedule_event( time(), 'wptelegram_five_minutely', 'wptelegram_widget_cron_pull_updates' );
		}
	}
}
