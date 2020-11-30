import Mirador from 'mirador/dist/es/src/index';
import examplePlugin from './plugins/example_plugin';

const config = {
    id: 'mirador-viewer',
    windows: [{
            manifestId: 'https://purl.stanford.edu/fr426cg9537/iiif/manifest',
        },
        {
            manifestId: 'https://purl.stanford.edu/qg074bz5077/iiif/manifest',
        },
        {
            manifestId: 'https://purl.stanford.edu/wj335sy2632/iiif/manifest',
        }
    ],
    workspace: {
        type: 'elastic',
    }
};

const plugins = [];

Mirador.viewer(config, plugins);