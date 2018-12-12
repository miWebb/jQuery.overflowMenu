/*!
 * jQuery Overflow Menu v1.0.0
 *
 * Copyright 2014 miWebb
 * Released under the MIT license
 */

(function($, window, undefined) {
	'use strict';

	$.fn.overflowMenu = function(options) {
		// Options
		options = $.extend({}, $.fn.overflowMenu.defaults, options);

		// Init
		return this.each(function() {
			overflowMenu(this, options);
		});
	};

	$.fn.overflowMenu.defaults = {
		// Options
		overflow: horizontal,
		class: 'overflow-menu',

		// Insert
		insertBefore: '',
		insertAfter: ''
	};

	function overflowMenu(element, options) {
		// Check integer

		// Check horizontal or vertical

		// Error? console.log('invalid options: , expectected integer ');
	}

	function overflowMenuInteger() {
		
	}

	function overflowMenuDirection() {

	}
})(jQuery, window);
