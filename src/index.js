import Mirador from 'mirador/dist/es/src/index';
import examplePlugin from './plugins/example_plugin';

// Example: Show Shakespeare's comedies with sidepanel and thumbnail strip open
// TASK: Change these settings to show "The Comedie of Errors" by default 
// CHALLENGE: Use the canvasId instead of canvasIndex
const config = {
    id: 'mirador-viewer',
    window: {
        // Use Index panel as default panel for all windows 
        sideBarPanel: 'canvas', // Configure which sidebar is selected by default. Options: info, attribution, canvas, annotations, search
    },
    windows: [{
        manifestId: 'https://iiif.bodleian.ox.ac.uk/iiif/manifest/390fd0e8-9eae-475d-9564-ed916ab9035c.json',
        thumbnailNavigationPosition: 'far-right',
        sideBarOpen: true, // Always show this manifest with sidebar open,
        canvasIndex: 22
    }],
};

const plugins = [];

Mirador.viewer(config, plugins);