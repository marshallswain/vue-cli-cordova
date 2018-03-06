# vue-cli-cordova

## Adds a simple `cordova` Vue plugin to your project

It doesn't do much other than allow you to reference this.$cordova in place of window.cordova.  If you don't desire it, delete the file `plugin.cordova.js`, and remove the import from main.js.

## Adds `fastclick` to your project

You can learn more about FastClick here: https://github.com/ftlabs/fastclick.  It's added in main.js.

```
npm i fastclick
```

## Converts main.js to a Cordova-style entry

The included code stubs out some typical Cordova event handlers for you.  Check out `./examples/main.js` in this repo.

## Modifies public/index.html for Cordova compatibility



Check out `./examples/index.html` in this repo.  Notice that the script tag that imports `cordova.js` is missing.  It gets added by the `build-cordova.sh` script.

## Adds a `build:cordova` script to the package.json

The `build:cordova` script runs the `build-cordova.sh` shell script.