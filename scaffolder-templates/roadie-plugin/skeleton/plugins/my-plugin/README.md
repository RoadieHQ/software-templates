# my-plugin

Welcome to the ${{ values.plugin_name }} plugin!

_This plugin was created through the Backstage CLI_

## Getting started

To install needed dependencies, run:
`npm i` or `npm install`

### Standalone development

You can serve the plugin in isolation by running `npm start` in the plugin directory.
This method of serving the plugin provides quicker iteration speed and a faster startup and hot reloads.
It is only meant for local development, and the setup for it can be found inside the [/dev](dev) directory.

### Developing against Roadie instances

Each command defined below will provide instructions on how to install the plugin to Roadie application.

#### Run in development mode

This will build the plugin code and start a webserver to host the generated Roadie compatible plugin assets.

`npm run develop`

#### Run in development mode, with a file watcher

This will build the plugin code and start a webserver while listening to file changes within the plugin folder. Each change to a file restarts the webserver, allowing for a faster development workflow

`npm run develop:watch`


#### Bundling a production build of a plugin

This will build your wanted plugin and output the generated Roadie compatible assets to the defined folder, so they can be uploaded to a static hosting site.

` npm run build --host https://my-static-hosting.com/${{ values.plugin_name }}`


#### Bundling a production build of a plugin and uploading it to AWS S3

This will build your wanted plugin and output the generated Roadie compatible assets to the defined folder, and uploads the generated Roadie compatible assets to AWS S3. The command uses environment variables `S3_BUCKET_NAME` & `S3_BUCKET_PREFIX` to determine the S3 bucket and path. Normal AWS credential chain is used to determine AWS credentials.

` npm run build:upload:s3 --host https://my-static-hosting.com/${{ values.plugin_name }}`



> For more information, take a look at the package.json within the plugin folder and Roadie CLI documentation in https://www.npmjs.com/package/@roadiehq/roadie-cli
