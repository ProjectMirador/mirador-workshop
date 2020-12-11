import Mirador from 'mirador/dist/es/src/index';
import examplePlugin from './plugins/example_plugin';
import CustomMetadata from './components/custom_metadata';
import { getCanvas } from 'mirador/dist/es/src/state/selectors/canvases';

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
    mode: 'add',
    component: CustomMetadata,
    target: 'CanvasInfo',
    mapStateToProps: (state, { canvasId, windowId }) => ({
      imageSize: `${getCanvas(state, { canvasId, windowId }).getWidth()}x${getCanvas(state, { canvasId, windowId }).getHeight()}`,
    }),
  }
];

Mirador.viewer(config, plugins);
