module.exports = (api, options, rootOptions) => {
  // modify package.json fields
  api.extendPackage({
    scripts: {
      test: 'vue-cli-service test'
    }
  })

  // copy and render all files in ./template with ejs
  // api.render('./template')

  if (options.foo) {
    // conditionally generate files
  }
}
