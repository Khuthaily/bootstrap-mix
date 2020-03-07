let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.sourceMaps();

// keep paths; e.g., fontawesome
mix.options({
    processCssUrls: false,
});

mix.js('src/js/lib.js', 'dist/js/')
    .js('src/js/app.js', 'dist/js/')
    .sass('src/scss/lib.scss', 'dist/css/')
    .sass('src/scss/app.scss', 'dist/css/')
    .copyDirectory('node_modules/@fortawesome/fontawesome-free/webfonts', 'dist/webfonts')
    .setPublicPath('dist'); // This is solves the '95% emitting issue'
