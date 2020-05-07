# CYOA App Form Page - Builds CYOA App from form

Builds a CYOA standalone html page, same as the one here, except this version is just a form for non-developers.

### Notes

This form doesn't 'build' but infact just hase the b64 outputs of the original which then wrap the form's json output.

## Embedding Everything , why & how

...

#### TODO
-  testing, collapse effects, styling, validation, expanded example
- json/export working - imported files not shown!

#### Possible future additions
- discount logic (requires bigger rewrite)

## Building a CYOA

- Requires some js/dev knowledge, until a simpler process can be built.
- Clone the repo `git clone https://github.com/aronedwards91/CYOA-Viewer.git`
- at the root run  `yarn install` (npm may work, but haven't tested)
- Then use `yarn start` to run dev, or if just want the .html file run `yarn build`, only he .html is required.

## -

## Setup & other stuff

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Then Ejected to Webpack to allow for single html packaging thanks to [pomo](https://stackoverflow.com/questions/51949719/is-there-a-way-to-build-a-react-app-in-a-single-html-file)

#### Available Scripts

In the project directory, you can run:

- `yarn start`

Runs the development mode @ <br />
Open [http://localhost:3000](http://localhost:3000). Hot reloads.

- `yarn build`

Builds the app for production to the `build` folder.<br />
Other files will be in the folder but only the index.html is required.
