/**
 * Copyright 2017 aixigo AG
 * Released under the MIT license.
 * http://laxarjs.org/license
 */
/* eslint-env node */

const path = require( 'path' );
const pkgDir = require( 'pkg-dir' );

function resolveWithin( [ dependency, subDirectory ] ) {
   const dependencyRoot = pkgDir.sync( require.resolve( dependency ) );
   return path.join( dependencyRoot, subDirectory );
}

const dependencyPaths = [
   [ 'laxar-uikit', 'themes/default.theme/scss' ],
   [ 'laxar-uikit', 'scss' ],
   [ 'bootstrap-sass', 'assets/stylesheets' ]
].map( resolveWithin );

const includePaths = [ path.resolve( __dirname, 'scss' ) ]
   .concat( dependencyPaths )
   .concat( [ path.resolve( process.cwd(), 'node_modules' ) ] );

module.exports = {
   includePaths
};
