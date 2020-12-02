import React, { Component } from 'react';

export default function ({ TargetComponent, targetProps  }) {
  return <TargetComponent {...targetProps} />;
}
