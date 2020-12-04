import Mirador from 'mirador/dist/es/src/index';
import examplePlugin from './plugins/example_plugin';
import CustomBrand from './components/custom_brand';

const config = {
  id: 'mirador-viewer',
  windows: [
    {
      manifestId: 'https://purl.stanford.edu/fr426cg9537/iiif/manifest',
    }
  ],
};

const plugins = [
  {
    mode: 'wrap',
    component: CustomBrand,
    target: 'Branding',
  }
];

Mirador.viewer(config, plugins);
