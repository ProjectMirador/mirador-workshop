import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { LabelValueMetadata } from 'mirador/dist/es/src/components/LabelValueMetadata';


export default function({ imageSize }) {
    return < >
        <
        Typography
    variant = "h5"
    component = "h6" >
        Custom metadata <
        /Typography> <
    LabelValueMetadata labelValuePairs = {
        [{ label: 'Image size', values: [imageSize] }]
    }
    /> < / > ;
}