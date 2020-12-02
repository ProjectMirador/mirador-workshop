import Mirador from 'mirador/dist/es/src/index';
import examplePlugin from './plugins/example_plugin';

const config = {
    id: 'mirador-viewer',
    windows: [{
        manifestId: 'https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json',
        view: 'gallery',
    }],
    window: {
        allowClose: false, // Prevent the user from closing this window
        allowMaximize: false,
        defaultSideBarPanel: 'info',
        sideBarOpenByDefault: true,
        views: [ // Only allow the user to select single and gallery view
            { key: 'single' },
            { key: 'gallery' },
        ]
    },
    workspace: {
        type: 'mosaic',
    },
    workspaceControlPanel: {
        enabled: false, // Remove extra workspace settings
    },
};

const plugins = [];

Mirador.viewer(config, plugins);