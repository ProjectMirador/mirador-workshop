import Mirador from 'mirador/dist/es/src/index';
import examplePlugin from './plugins/example_plugin';

const config = {
  id: 'mirador-viewer',
  windows: [
    {
      manifestId: 'https://purl.stanford.edu/fr426cg9537/iiif/manifest',
    }
  ],
};

const plugins = [];

Mirador.viewer(config, plugins);
