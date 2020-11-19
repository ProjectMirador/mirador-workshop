import React, { Component } from 'react';

class ExamplePlugin extends Component {
  render() {
    console.log('Plugin rendered');
    return (
      <div>
        Hello World
      </div>
    );
  }
}

export default {
  target: 'WorkspaceControlPanelButtons',
  mode: 'add',
  component: ExamplePlugin,
}
