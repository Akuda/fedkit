# FEDkit

[![Build Status](https://travis-ci.org/Akuda/fedkit.svg?branch=master)](https://travis-ci.org/Akuda/fedkit)
[![Dependency Status](https://www.versioneye.com/user/projects/5538dc9d7f43bc3f440004df/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5538dc9d7f43bc3f440004df)

* Source: [github.com/Akuda/fedkit](http://github.com/Akuda/fedkit)
* Author: [Phil Lennon](http://akuda.co.uk)
* Twitter: [@PJL101](http://twitter.com/pjl101)

-

FEDkit is a fast, stable, and well tested frontend development workflow, containing:

* Grunt 0.4
* Assemble 0.4
* Libsass 3.1
* Singularity.gs 1.6
* SASS-MQ 3
* CSS PX to REM
* Autoprefixer 5
* Imagemin
* JSHint
* BrowserSync 2.6

There are some omissions by design such as bower, HTML minification and similar, because this workflow is designed to be as fast and easy to use as possible. Use it as a base and tailor it to your specific needs.

Comments, sugggestions & pull requests are always welcome. See the [issues list](https://github.com/Akuda/fedkit/issues) for more information about future enchancements and changes.

## First time install

* Either, download the latest stable release from [GitHub](https://github.com/Akuda/fedkit/releases).
* Or, clone the git repo — 'git clone https://github.com/Akuda/fedkit.git'.

Once this has been done:

* Install Node 0.10, 0.12 or io.js,
* Navigate to the workflow folder in command line terminal,
* run 'npm install -g grunt-cli',
* run 'npm install',
* run 'grunt'.

## How to use

* 'grunt' - Build website, watch for changes & start server,
* 'grunt prd' - Build minified website,
* 'grunt reset' - Delete generated website.

## BrowserSync

With BrowserSync, you can view the website on multiple devices and actions are sent to all of them at the same time. See the UI link after running the grunt task for more information.

## Known Issues

* Libsass 3.1 currently doesn't support sourcemaps properly and is disabled,
* Singularity.gs warns about Breakpoint being missing on compile but it's not a problem. SASS-MQ is far better anyway,
* No full documentation.

