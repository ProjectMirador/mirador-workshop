import Mirador from 'mirador/dist/es/src/index';
import examplePlugin from './plugins/example_plugin';

const config = {
    id: 'mirador-viewer',
    windows: [{
        manifestId: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
    }],
    window: {
        sideBarOpen: true,
        sideBarPanel: 'annotations',
        highlightAllAnnotations: true,
    },
    workspace: {
        showZoomControls: true,
    }
};

const plugins = [];

Mirador.viewer(config, plugins);