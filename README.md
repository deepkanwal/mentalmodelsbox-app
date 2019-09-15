# Mental Models Box (App)
This is the repository for the front-end for the [mentalmodelsbox.com](https://www.mentalmodelsbox.com) website. It's a basic [next.js](https://nextjs.org/) app deployed using [Zeit Now](https://zeit.co/). Data for the models is served using S3. 

A seperate [data repository](https://github.com/deepkanwal/mentalmodelsbox-data/) is used to manage the actual mental model data.

## Local Setup

After cloning, install dependencies using:
```
$ yarn install
```
Then, run the app using: 
```
$ yarn dev
```
Then, visit `http://localhost:3000` in your browser.

## Testing Model Changes

Changes to the model data (e.g. adding new models, modifing existing ones) can be tested by using local data instead of the production S3 file. To do this:

1. Install the `mentalmodelsbox-data` submodule. 
```
$ git submodule update --init
```
2. Generate the local `data.json` file.
```
$ yarn generate-data
```
3. Update the prod data flag in `api/modelsAPI.json` to false to use the local file.
```
const USE_PROD_DATA = false;
```

Anytime you make changes to model YAML files, re-run the `generate-data` script. 

Model data is stored in YAML files using Markdown. The `generate-data` script is used to convert these files to a single JSON file. The `upload-data` script is used to upload this file to S3.

## Style

This repo uses [Prettier](https://prettier.io) with the following settings:

* Indentation: 2 Spaces
* Line Width: 100
* Semicolons 
* Single Quotes `'` 
* JSX Bracket Same Line
