try {
    // Add jQuery
    window.$ = window.jQuery = require('jquery');
    // Add popper
    window.Popper = require('popper.js');
    // Add bootstrap
    require('bootstrap');
} catch (e) {}