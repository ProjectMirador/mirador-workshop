import Mirador from 'mirador/dist/es/src/index';
import examplePlugin from './plugins/example_plugin';

// Example of different window view types
const config = {
    id: 'mirador-viewer',
    window: {
        // Set the default view type for all manifests without a viewingHint
        defaultView: 'single', // options: single, book, gallery, scroll
        views: [ // This is a copy of ProjectMirador/mirador's src/config/settings.js
            { key: 'single', behaviors: ['individuals'] },
            { key: 'book', behaviors: ['paged'] },
            { key: 'gallery' },
        ],
    },
    windows: [{
            // No viewing hint provided; use window: defaultView
            manifestId: 'https://purl.stanford.edu/fr426cg9537/iiif/manifest',
        },
        {
            // viewingHint: continuous --> automatically selects Scroll view
            manifestId: 'https://iiif.library.ucla.edu/ark%3A%2F21198%2Fzz001nwthk/manifest',
        },
        { // viewingHint: paged --> automatically selects Book view
            manifestId: 'https://wellcomelibrary.org/iiif/b18035723/manifest',
            canvasIndex: 1, // 
        },
        {
            // viewingHint: paged --> Manually set to Gallery view
            manifestId: 'https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json',
            view: 'gallery',
        }
        // TASK 1: remove the view: 'gallery' setting from the example above 
        // What view type will the window use after reloading? 
        // Does its manifest provide a viewingHint or behavior?

        // TASK 2: Delete { key: 'scroll', behaviors: ['continuous'] }. 
        // How does this change the view types for Ms. 46 Ṣālot bā᾽eneta bāreyā; Ṣalota Mastem? 

        // CHALLENGE: Change settings so that Ms. 46 Ṣālot bā᾽eneta bāreyā; Ṣalota Mastem is shown in Gallery view by default. 
        // Modify views so that it can be viewed in book view as well. 
        // (Hint: take a look at key: 'gallery'. 
    ],
};

const plugins = [];

Mirador.viewer(config, plugins);