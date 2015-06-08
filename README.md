# fedkit-assemble

[![Build Status](https://travis-ci.org/Akuda/fedkit-assemble.svg?branch=master)](https://travis-ci.org/Akuda/fedkit-assemble)
[![Dependency Status](https://www.versioneye.com/user/projects/5559e9088482f67bef00002d/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5559e9088482f67bef00002d)

* Source: [github.com/akuda/fedkit-assemble](http://github.com/akuda/fedkit-assemble)
* Author: [Phil Lennon](http://akuda.co.uk)
* Twitter: [@PJL101](http://twitter.com/pjl101)

-

fedkit-assemble is a fast, stable, and well tested frontend development workflow, containing:

* Grunt 0.4,
* Assemble 0.4,
* Libsass 3.2,
* Susy 2.2,
* SASS-MQ 3,
* CSS PX to REM,
* Autoprefixer 5,
* Imagemin,
* JSHint,
* HTMLmin,
* BrowserSync 2.6,
* Responsive IE8 support,
* All frontend dependences use bower for easy management.

Use fedkit as a base and tailor to your specific needs. Comments, sugggestions & pull requests are always welcome. See the [issues list](https://github.com/akuda/fedkit/issues) for more information about future enchancements and changes.

## Install

Either, download the latest stable release from [GitHub](https://github.com/akuda/fedkit-assemble/releases) or clone the git repository on the master branch — `git clone https://github.com/akuda-assemble/fedkit.git`.

Once this has been done:

* Install Node 0.12 or io.js 2.0 (Node 0.10.x is not supported but may work),
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

## BrowserSync

With BrowserSync, you can view the website on multiple devices and actions are sent to all of them at the same time. See the UI link after running the grunt task for more information.

## Known Issues

* Documentation is in progress,
* Grid and site examples need to be improved,
* No Windows testing.

