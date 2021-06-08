import Mirador from 'mirador/dist/es/src/index';
import examplePlugin from './plugins/example_plugin';

// Example: Workspace type set to Elastic 
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
        height: 5000, // height of the elastic mode's virtual canvas
        viewportPosition: { // center coordinates for the elastic mode workspace
            x: 0,
            y: 0,
        },
        width: 5000, // width of the elastic mode's virtual canvas
    }
};

const plugins = [];

Mirador.viewer(config, plugins);