import Mirador from 'mirador/dist/es/src/index';
import examplePlugin from './plugins/example_plugin';

const config = {
    id: 'mirador-viewer',
    windows: [{
        manifestId: 'https://www.e-codices.unifr.ch/metadata/iiif/gau-Fragment/manifest.json',
    }],
    window: {
        sideBarOpen: true,
        sideBarPanel: 'canvas',
    }
};

const plugins = [];

Mirador.viewer(config, plugins);