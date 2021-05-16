const mix = require('laravel-mix')
const fs = require('fs')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

const viewsDirs = [
    'resources/js/views'
]

viewsDirs.forEach(viewsDir => {
    compileReactViewsRecursively(viewsDir)
})

function compileReactViewsRecursively(dir) {
    const items = fs.readdirSync(dir)
    items.forEach(item => {
        if (item.endsWith('.tsx')) {
            mix.ts(dir + '/' + item, 'public/js').react()
        }
        else {
            compileReactViewsRecursively(dir + '/' + item)
        }
    })
}