# fedkit-assemble-legacy
Version: 0.6.2

[![Build Status](https://travis-ci.org/PJL101/fedkit-assemble-legacy.svg?branch=master)](https://travis-ci.org/PJL101/fedkit-assemble-legacy)
[![devDependency Status](https://david-dm.org/PJL101/fedkit-assemble-legacy/dev-status.svg)](https://david-dm.org/PJL101/fedkit-assemble-legacy
  #info=devDependencies)

* Author: [Phil Lennon](http://iampjl.co.uk)
* Source: [github.com/PJL101/fedkit-assemble-legacy](http://github.com/PJL101/fedkit-assemble-legacy)
* Twitter: [@PJL101](http://twitter.com/pjl101)
* Email: [enquiry@iampjl.co.uk](mailto:enquiry@iampjl.co.uk)

-

## NOTE: A new project based on the new [fedkit](https://github.com/PJL101/fedkit) and Assemble 0.6.0 will appear as [fedkit-assemble](https://github.com/PJL101/fedkit-assemble) when ready. As such, development effort has stopped. However, any critical issues will be addressed if required.

fedkit-assemble-legacy is a fast, stable, well tested and opinionated frontend development workflow, containing:

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

Use fedkit-assemble-legacy as a base and tailor to your specific needs. Comments, suggestions & pull requests are always welcome. See the [issues list](https://github.com/PJL101/fedkit-assemble-legacy/issues) for more information about future enhancements and changes.

## Variants

There are several variants of fedkit either in development or available now. They have the base frontend workflow with a site generator included. The current variants are:

* [fedkit](https://github.com/PJL101/fedkit) - New frontend kit built on the latest tools. PostCSS & Gulp based.
* [fedkit-legacy](https://github.com/PJL101/fedkit-legacy) - The legacy Grunt & SASS base frontend kit, without static site generator.

## Install

Download the latest stable release from [GitHub](https://github.com/PJL101/fedkit-assemble-legacy/releases). Once this has been done:

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
