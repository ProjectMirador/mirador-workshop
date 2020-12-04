import Mirador from 'mirador/dist/es/src/index';
import miradorImageToolsPlugin from 'mirador-image-tools/es/plugins/miradorImageToolsPlugin.js';
import examplePlugin from './plugins/example_plugin';

const config = {
  id: 'mirador-viewer',
  windows: [
    {
      imageToolsEnabled: true,
      imageToolsOpen: true,
      manifestId: 'https://purl.stanford.edu/fr426cg9537/iiif/manifest',
    }
  ],
};

const plugins = [...miradorImageToolsPlugin];

Mirador.viewer(config, plugins);
