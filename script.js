// Small interactive behavior for the homepage
document.addEventListener('DOMContentLoaded', function () {
	var btn = document.getElementById('cta');
	if (btn) btn.addEventListener('click', function () {
		// gentle greeting - could open a contact form later
		alert('Hello, World!');
	});

	// Add keyboard-friendly nav focus for small screens
	var navLinks = document.querySelectorAll('.main-nav a');
	navLinks.forEach(function (l) { l.addEventListener('click', function () { l.blur(); }); });
});