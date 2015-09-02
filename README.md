
# Smaato UI Framework

> Smaato UI Framework (React, SCSS)

Work on examples in the `src/examples` directory.

Work on framework components in the `src/framework` directory.

## Getting Started

#### Setup & Run

```bash
npm install
npm install -g gulp
gulp
```

#### View

```bash
open http://localhost:8000/
```

#### Production

```bash
gulp production
```

_Generates minified distribution with sourcemaps in ./dist/_

## Contributing to the framework

#### Folder structure

Here is a simplified view of the folder structure of the framework source.

```bash
src
├── assets
│   └── icons
├── examples
│   ├── _partials
│   │   ├── _componentLayout.jade
│   │   ├── _head.jade
│   │   ├── _integrationLayout.jade
│   │   └── _nav.jade
│   ├── components
│   │   └── titleBar.jade
│   ├── index.js
│   ├── index.scss
│   └── integrations
│       └── tableView.jade
└── framework
    ├── _index.scss
    ├── index.js
    └── titleBar
        ├── TitleBar.jsx
        ├── TitleBar.spec.jsx
        ├── TitleBarButton.jsx
        ├── _index.scss
        ├── _titleBar.scss
        └── _titleBarButton.scss
```

`examples`

Contains the files the demo the different components in the framework.
Documents their use from a UX/UI point of view, as well as how to use their
interfaces as React components.

`framework`

Contains the SCSS and JSX files that form the core of the framework.

#### Concepts

##### A component should have, at minimum, a JSX file, a SCSS file, and a test.

In the TitleBar example above, this would be the TitleBar.jsx file, the TitleBar.spec.jsx file,
and the _titleBar.scss file.  (The _index.scss file doesn't count since it isn't
supposed to contain any styles; instead it just imports the component SCSS files.)

If additional components live inside the same folder (e.g. TitleBarButton above),
they should also consist of an additional set of these 3 files.

##### Each component should be documented.

This means that each component (and its associated components, such as TitleBarButton)
should be documented in a file in the `examples/components` directory.

##### Component integrations should also be documented.

Composing components together into common UI patterns should be documented in
the `examples/integrations` directory.

## Usage

Install this repo as an NPM dependency to gain access to its UI components.

#### As a React library

In your JS:

```javascript
import framework from 'path/to/node_modules/ui-framework/src/framework/index.js';
var TitleBar = framework.TitleBar;
// Now you can use the TitleBar React component.
```

#### As a SCSS library

In your SCSS:

```javascript
@import 'path/to/node_modules/ui-framework/src/framework/index';
// Now you can use the SCSS styles, mixins, functions, and variables.
```

Keep in mind that you will be expected to use PostCSS and Autoprefixer to
add vendor-prefixed properties to your compiled CSS.

#### As a CSS library

This is not yet supported but we can add the compiled CSS file to the repo, so
that simpler projects will have access to the CSS, if such a use case arises.