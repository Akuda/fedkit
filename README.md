# fedkit-assemble
Version: 1.0.1

[![Build Status](https://travis-ci.org/PJL101/fedkit-assemble.svg?branch=master)](https://travis-ci.org/PJL101/fedkit-assemble)
[![devDependency Status](https://david-dm.org/PJL101/fedkit-assemble/dev-status.svg)](https://david-dm.org/PJL101/fedkit-assemble
  #info=devDependencies)

* Author: [Phil Lennon](http://iampjl.co.uk)
* Source: [github.com/PJL101/fedkit-assemble](http://github.com/PJL101/fedkit-assemble)
* Twitter: [@PJL101](http://twitter.com/pjl101)
* Email: [enquiry@iampjl.co.uk](mailto:enquiry@iampjl.co.uk)

-

**Note:** [Foley](https://github.com/PJL101/foley) is the next version of my Frontend workflow. It uses Gulp, PostCSS, Webpack, Metalsmith, etc. It is highly recommended to use that instead.

-

fedkit-assemble is a fast, stable, well tested and opinionated frontend development workflow, containing:

* Grunt 0.4,
* Assemble 0.4,
* Libsass 3.2,
* Susy 2.2,
* SASS-MQ 3,
* PostCSS with Autoprefixer, will change fallback and media query packer,
* CSS Comb,
* CSS PX to REM,
* Critical CSS,
* Imagemin,
* Grunticon,
* JSHint,
* Automatic custom Modernizr build,
* HTMLmin,
* All frontend dependences use bower for easy management.

Use fedkit-assemble as a base and tailor to your specific needs. Comments, suggestions & pull requests are always welcome. See the [issues list](https://github.com/PJL101/fedkit-assemble/issues) for more information about future enhancements and changes.

## Install

Download the latest stable release from [GitHub](https://github.com/PJL101/fedkit-assemble/releases). Once this has been done:

* Install Node 0.12 or above (Node 0.10 is not supported but may work),
* run `npm install grunt-cli -g && npm install bower -g && npm install bower-installer -g`,
* Navigate to the workflow folder in command line terminal,
* run `npm install`,
* run `grunt`.

## How to use

* `grunt` - Build website, watch for changes & start server,
* `grunt prd` - Build minified website,
* `grunt reset` - Delete generated website and downloaded bower files.

## Bower

[Bower](http://bower.io) is used to automatically pull in frontend dependences such as jQuery. The workflow takes the relevant files and integrates them into the relevant folders ready for use. Please see bower.json for an example on how this works.

## Known Issues

* Critical CSS task is only performed on the 'prd' task due to watch issues,
