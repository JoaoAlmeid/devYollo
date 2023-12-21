module.exports = {
    packager: 'yarn',
    externals: {
        sentry: '@sentry/profiling-node'
    },
    bundle: true,
    minify: true,
    sourcemap: true,
    keepNames: true,
    watch: {
        pattern: "src/**/*.(ts|ejs)",
    }
}