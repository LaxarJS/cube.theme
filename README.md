# LaxarJS Cube Theme

> A LaxarJS theme, for use by LaxarJS tools and demo applications.


## Installation

Install the `laxar-cube.theme` and the required webpack [SCSS](http://sass-lang.com/) support into your application using npm:

```sh
$ npm install --save laxar-cube.theme
$ npm install --save-dev node-sass sass-loader
```

Then, activate the theme in your application configuration (usually `init.js`):

```js
// load themed artifacts:
import artifacts from 'laxar-loader/artifacts?flow=main&theme=cube';

// have the runtime select the theme:
const configuration = { theme: 'cube', /* ... */ };

create( [ /* adapters */ ], artifacts, configuration )
   // if enabling tooling, you should also go for the theme:
   .tooling( require( 'laxar-loader/debug-info?flow=main&theme=cube' ) )
   // .flow( ... )
   // .bootstrap( ... )
```

For webpack, this can be simplified by using the theme-provided options for the _sass-loader_:

```js
module.exports = {
   // ...
   resolve: [
      // ...
      alias: {
         // ...
         'cube.theme': 'laxar-cube.theme'
      }
   ],
   module: {
      rules: [
         // ...,
         {
            test: /[/](laxar-)?cube[.]theme[/].*[.]s[ac]ss$/,
            loader: 'sass-loader',
            options: require( 'laxar-cube.theme/sass-options' )
         }
      ]
   }
};
```

The cube.theme is now used in the application.
To create theme-specific styles for layouts, widgets and controls, add a `cube.theme` folder right next an artifacts `default.theme` folder, and define CSS/HTML there.
