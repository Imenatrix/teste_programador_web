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

const viewsDirs = {
    'resources/js/views' : ''
}

Object.keys(viewsDirs).forEach(dir => {
    compileReactViewsRecursively(dir, viewsDirs[dir])
})

function compileReactViewsRecursively(dir, prefix) {
    const items = fs.readdirSync(dir)
    items.forEach(item => {
        if (item.endsWith('.tsx')) {
            mix.ts(dir + '/' + item, 'public/js/' + prefix).react()
        }
        else {
            compileReactViewsRecursively(dir + '/' + item, prefix + '/' + item)
        }
    })
}