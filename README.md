jQuery.overflowMenu
===================

The jQuery overflow menu plugin creates a drop down menu to prevent the menu to overflow to the next line or when the number of menu items exceeds the given maximum. Check the [demo](https://miwebb.github.io/jQuery.overflowMenu/) for more information.

## Example

### HTML

<pre>&lt;html>
	&lt;body>
		&lt;nav class="menu">
			&lt;ul>
				&lt;li>Home&lt;/li>
				&lt;li>About&lt;/li>
				&lt;li>Contact&lt;/li>
			&lt;/ul>
		&lt;/nav>
	&lt;/body>
&lt;/html></pre>

### CSS
<pre>&lt;link rel="stylesheet" href="assets/css/jquery.overflowmenu.css" /></pre>

### Javascript

<pre>&lt;script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js">&lt;/script>
&lt;script type="text/javascript" src="assets/js/jquery.overflowmenu.min.js">&lt;/script>
&lt;script type="text/javascript">
$(window).load(function() {
	$('.menu').overflowMenu();
});
&lt;/script></pre>

## Options

<pre>$('.menu').overflowMenu({
	// The maximum numbers of items before the menu will overflow. When the value is 0, the drop down menu will only show if the items overflow the menu.
	maximumItems: 0,

	// Outer element
	element: 'div',

	// Class and data- name
	class: 'overflow-menu',

	// Insert content before the menu
	insertBefore: '',

	// Insert content after the menu
	insertAfter: ''
});</pre>
