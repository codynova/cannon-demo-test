const { createWebpackConfig, pluginCopyFiles } = require('../es2020-boilerplate/lib')

module.exports = (env, argv) => createWebpackConfig({
    argv,
    entries: {
        bundle: {
            file: './scripts/index.js',
            plugins: [
                pluginCopyFiles({ from: 'vendor', to: 'vendor' }),
            ],
        },
    },
})