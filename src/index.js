import Mirador from 'mirador/dist/es/src/index';
import examplePlugin from './plugins/example_plugin';

// An example with a multilingual manifest. Metadata is available in English and German.
const config = {
    id: 'mirador-viewer',
    language: 'de', // Use German as the default UI language.
    // If metadata is available in the UI language, it will be displayed in the sidebar
    windows: [{
        manifestId: 'https://iiif.hab.de/object/mss_272-helmst/manifest.json',
    }],
    window: {
        sideBarOpen: true,
        showLocalePicker: true, // The metadata locale picker is hidden by default
    },
};

const plugins = [];

Mirador.viewer(config, plugins);