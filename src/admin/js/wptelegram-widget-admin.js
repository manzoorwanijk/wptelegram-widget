'use strict';

(function ($) {
	'use strict';

	var app1 = {};

	app1.configure = function () {
		app1.settings_block = $('#wptelegram-widget-settings');
	};

	app1.init = function () {
		app1.configure();
		app1.remove_junk();
	};

	app1.remove_junk = function () {
		if (app1.settings_block.length) {
			app1.settings_block.siblings().remove();
		}
	};

	$(app1.init);
})(jQuery);
