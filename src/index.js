import Mirador from 'mirador/dist/es/src/index';
import examplePlugin from './plugins/example_plugin';

const config = {
  id: 'mirador-viewer',
  windows: [
    {
      manifestId: 'https://purl.stanford.edu/fr426cg9537/iiif/manifest',
    }
  ],
  themes: {
    cursed:{
      palette: {
        type: 'dark',
        primary: {
          main: '#ba55d3',
          dark: '#44dff6',
        },
        secondary: {
          main: '#7fff00',
        },
        shades: {
          dark: '#7fffd4',
          main: '#ffb6c1',
          light: '#7b68ee',
        },
      },
      typography:{
        fontFamily: ['Comic Sans MS',
                     'Papyrus'
                     ],
      },
    },
    // TASK: Set the cursed theme as the selected theme
    // TASK: Override the colors in the dark and light themes
  },
};

const plugins = [];

Mirador.viewer(config, plugins);
