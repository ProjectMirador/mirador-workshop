# mirador-workshop

## Setup your computer for Mirador development in advance

During the workshop you will be learning to customize [Mirador](https://projectmirador.org/) while following along on your local computer. We ask that you set up your development environment in advance of the workshop. Developers may do this in a variety of different ways. Please do this however you feel most comfortable. You will need to be able to do the following:

 - Run this Mirador application using Webpack
 - Edit files in this repository and see the changes in a browser
 
 
 We recommend using the [Firefox](https://www.mozilla.org/firefox/download) or [Chrome](https://www.google.com/chrome/) browser for development with the following add-ons:
  - Redux DevTools - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/) | [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
  - React DevTools - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) | [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)


## Development system requirements

 - node.js version v12.18.0 or greater ([Download node.js](https://nodejs.org/en/download/))
 - npm version v6.14.4 or greater ([Download npm](https://nodejs.org/en/download/))

### To test your setup

Clone https://github.com/ProjectMirador/mirador-workshop

1. Run `$ npm install` from a terminal to install dependencies
1. Run `$ npm start` to start a development server and build a development version of your Mirador installation.
1. The browser should open a page that when eventually built you will see a Mirador viewer load at `http://localhost:8080`

## npm script commands available

| Command | Description |
|---|---|
| `npm start ` | Builds your Mirador project and starts a server that runs at `http://localhost:8080` |
| `npm build` | Builds a production ready build of your Mirador project in `/dist` |
