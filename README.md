# Latitude CMS

This is the Latitude CMS, build with [Sanity](https://www.sanity.io).

## Requirements

To run this project you will need the yarn package manager installed on your computer and the Sanity CLI.

## Installation and usage

Install the sanity cli:

```bash
npm install -g @sanity/cli
```

Install the required dependencies:

```bash
yarn
```

Use the following script to run the development server:

```bash
yarn dev
```

Open [http://localhost:3333](http://localhost:3333) with your browser to see the result.

## Project structure

The project structure is the same found in any starter sanity project but with the schemas more segmented for better organization.

```bash
.
├── config
│ └── @sanity
├── dist
├── node_modules
├── plugins
├── schemas
│ ├── castMember.js
│ ├── crewMember.js
│ ├── movie.js
│ ├── person.js
│ ├── schema.js
│ └── screening.js
├── static
│ └── project-logo.svg
├── package.json
├── README.md
├── sanity.json
└── yarn.lock
```

- config - Holds the configuration files for the plugins you've installed. Out of the box, this folder will usually only contain a checksums file, which keeps track of whether the plugin has updated it's config format since the file was created.
- dist - Build destination folder.
- lib - A folder to place different utility and misc functions.
- plugins - Holds all "local" plugins. By local, we mean plugins that are specific to your Studio. Shared plugins are installed to node_modules like other npm modules. By default, this folder doesn't contain anything.
- schemas - Holds the data schema for your Studio. If you want the schema to reside elsewhere, just change the path specified in sanity.json.
  - documents - Contain schemas of type document.
  - objects - Contains schemas of type object.
- static - A folder to place static assets such as images, files etc that are related to Sanity Studio itself. Assets that are part of your content should be uploaded via the assets API.
- sanity.json - The main "configuration file" for your Studio. Defines which plugins to load, where your schema is located, the ID of your project etc.
- doc-structure and desk-structure - Override the default doc and desk for custom ones defined in the js files.
- yarn.lock - Locks your dependencies down to specific versions. We use yarn internally to manage dependencies.
- Also, package.json and node_modules are present, just like any other Node.js project.

## Libraries

All the libraries included in the package.json file of this project are the starting libraries that every Sanity project has.

## Scripts

Scripts available in the project:

- yarn dev: Run the development server
- yarn build: Build the project
- yarn deploy: Deploy changes to the sanity environment defined in the sanity.json
