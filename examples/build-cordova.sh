# Create a fresh build.
npm run build
rm -rf cordova/www
cp -R dist/. cordova/www

# Remove absolute URLs from index.html just for the Cordova app.
perl -pi -e 's/href=\//href=/g' cordova/www/index.html
perl -pi -e 's/src=\//src=/g' cordova/www/index.html

# Append the cordova.js script to the end of the body
perl -pi -e 's/</body>/<script type="text/javascript" src="cordova.js"></script></body>/g' cordova/www/index.html


# Run the Cordova build.
cd cordova
cordova prepare
cordova build
