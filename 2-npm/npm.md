# Node Package Manager (NPM)
## Help
`npm help` <br />
`npm help <command>`
## package.json
`npm init -y`
```
"main": "app.js",
"scripts": {
  "start": "node app.js",
  "test": "jest --coverage"
},
```
### Start the project
`node app.js`

`node .`
### Run scripts
`npm start`<br />
`npm test`

## Install packages
`npm install express ejs`<br />
`npm i jest -D`<br />
`npm i nodemon --location=global`

## npx
`npx express-generator --view=ejs express-site`

### List packages
`npm list`<br />
`npm list --location=global`

### package info
`npm view express`<br />
[npmjs.com](https://npmjs.com)

### Uninstall package
`npm uninstall express`

### Install specific version of package
`npm i express@3.0.0`

### Check for outdated packages
`npm outdated`<br />
`npm outdated --location=global`

## Semantic versioning
**Semantic versions:** Major-Minor-Patch
### package.json
^ means update minor-patch but not major

### Update packages
`npm update`<br />
`npm update express`<br />
`npm update --location=global`<br />

### Update major version
`npm i express@4`<br />