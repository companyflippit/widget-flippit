const fs = require('fs');
 
const createFile = (stencilLoadFunction) => {
  return `
    <?php
      /*
      Plugin Name: Flippit
      */
      add_action( 'wp_head', 'my_header_scripts' );
      function my_header_scripts(){
        ?>
          <meta name="viewport" content="width=device-width, initial-scale=1", minimal-ui>
          <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
          <script src="/wp-content/plugins/widget/index.js"></script>
          <script data-resources-url="/wp-content/plugins/widget/build/flippitwidget/">
            ${stencilLoadFunction}
          </script>
    <?php
    }`;
};

const createIndexPHP = (err, contents) => {
  const afterFirstScritpTag = contents.split('<script data-resources-url="/build/flippitwidget/">')[1];
  const stencilLoadFunction = afterFirstScritpTag.split('</script>')[0];
  fs.appendFile('widget/index.php', createFile(stencilLoadFunction), (err) => {
    if (err) {
      throw err;
    }
    console.log('Saved!');
  });
};


fs.readFile('www/index.html', 'utf8', createIndexPHP);