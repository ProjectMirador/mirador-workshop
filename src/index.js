import Mirador from 'mirador/dist/es/src/index';
import examplePlugin from './plugins/example_plugin';

// Example: Some IIIF manifests related to cats! 🐱
// TASK 1: Show the Washington State University manifest in the main viewer
// TASK 2: Add your own manifest to the catalog (Try https://researchworks.oclc.org/iiif-explorer/ for more cat photos)
// BONUS: Add the missing provider info for "[A leveret adopted by a cat]"
const config = {
    id: 'mirador-viewer',
    windows: [{ // These manifests will load in the viewer
            manifestId: 'https://damsssl.llgc.org.uk/iiif/2.0/1556378/manifest.json',
        },
        {
            manifestId: 'https://damsssl.llgc.org.uk/iiif/2.0/1487439/manifest.json',
            canvasIndex: 1,
        }
    ],
    catalog: [{ // These manifests are available in the catalog. 
            manifestId: 'https://damsssl.llgc.org.uk/iiif/2.0/1556378/manifest.json',
            provider: 'The National Library of Wales',
        },
        {
            manifestId: 'https://damsssl.llgc.org.uk/iiif/2.0/1487439/manifest.json',
        },
        {
            manifestId: 'https://cdm16866.contentdm.oclc.org/iiif/info/cchm_photo/5342/manifest.json',
            provider: 'Washington State University',
        },
        { // Secret cat on the 76th page
            manifestId: 'https://iiif.bodleian.ox.ac.uk/iiif/manifest/faeff7fb-f8a7-44b5-95ed-cff9a9ffd198.json',
            provider: 'Bodleian Libraries, University of Oxford',
        }
    ]
};

const plugins = [];

Mirador.viewer(config, plugins);