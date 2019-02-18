rm -rf widget/build
rm -rf widget/index.php
rm -rf widget.zip
npm run prod
mv www/build widget
node scripts/index.js
zip -r widget.zip widget