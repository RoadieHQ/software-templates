# Roadie Plugins monorepo

Welcome to Roadie plugins monorepo!

_This plugin was created through a scaffolder template_

## Getting started

This is a TypeScript monorepo repository containing a place to hold and develop Roadie plugins. 

### Repository structure

The root level contains configuration files to hold the structure of the monorepo and a top level package.json file. 

The folder `packages` hosts the actual plugins and code files related to them in individual folders. Each plugin has their own `package.json` configuration pre-filled with some useful scripts to develop, build and deploy Roadie plugins.

### Installing

This repository needs `node.js` (> 18.x) and `NPM` installed.

To install needed dependencies, run:
`npm i` or `npm install`

### Running and developing plugins

Plugins within the repository can all be run from within the root folder. 

Example commands, if your plugin is named `my-plugin`

#### Run in development mode

This will build the plugin code and start a webserver to host the generated Roadie compatible plugin assets.

`npm run develop --workspace=my-plugin`

#### Run in development mode, with a file watcher

This will build the plugin code and start a webserver while listening to file changes within the plugin folder. Each change to a file restarts the webserver, allowing for a faster development workflow

`npm run develop:watch --workspace=my-plugin`


#### Bundling a production build of a plugin

This will build your wanted plugin and output the generated Roadie compatible assets to the defined folder, so they can be uploaded to a static hosting site.

` npm run build --workspace=my-plugin --host https://my-static-hosting.com/my-plugin`


#### Bundling a production build of a plugin and uploading it to AWS S3

This will build your wanted plugin and output the generated Roadie compatible assets to the defined folder, and uploads the generated Roadie compatible assets to AWS S3. The command uses environment variables `S3_BUCKET_NAME` & `S3_BUCKET_PREFIX` to determine the S3 bucket and path. Normal AWS credential chain is used to determine AWS credentials.

` npm run build:upload:s3 --workspace=my-plugin --host https://my-static-hosting.com/my-plugin`




> For more information, take a look at the package.json within the plugin folder and Roadie CLI documentation in https://www.npmjs.com/package/@roadiehq/roadie-cli
