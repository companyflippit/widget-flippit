import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'flippitwidget',
  outputTargets:[
    {
      type: 'www',
      baseUrl: '/'
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/globals/resizeSlider.scss',
        'src/globals/variables.scss',
        'src/globals/mixins.scss',
        'src/globals/palette.scss',
      ]
    })
  ]
};
