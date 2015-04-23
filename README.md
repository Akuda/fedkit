# FEDkit

[![Build Status](https://travis-ci.org/Akuda/fedkit.svg?branch=master)](https://travis-ci.org/Akuda/fedkit)
[![Dependency Status](https://www.versioneye.com/user/projects/5538dc9d7f43bc3f440004df/badge.svg?style=flat)](https://www.versioneye.com/user/projects/5538dc9d7f43bc3f440004df)

This is a basic but well tested frontend development workflow. The workflow contains:

* Grunt 0.4
* Assemble 0.4
* Libsass 3.1
* Autoprefixer 3
* CSS PX to REM
* SASS-MQ 3
* Singularity.gs 1.6
* BrowserSync 2
* Imagemin
* JSHint

This project is currently undocumented. There are some deliberate omissions in the workflow such as bower, HTML minification and similar, but the workflow is pretty fast at what it does and is stable.

Coming in the future is a more extensive, opinionated and feature packed workflow 'fedkit'.

## Install

Install Node 0.10 or 0.12, then run 'npm install'.

## How to use

* 'grunt' - Build website, watch for changes & start server,
* 'grunt prd' - Build minified website,
* 'grunt reset' - Delete website and all generated files.

## BrowserSync

With BrowserSync, you can view the website on multiple devices and actions are sent to all of them at the same time. See the UI link after running the grunt task for more information.

## Known Issues

* Libsass 3.1 currently doesn't support sourcemaps properly and is disabled,
* IE8 support is untested,
* Singularity.gs warns about Breakpoint being missing on compile but it's not a problem. SASS-MQ is far better anyway,
* No full documentation.

