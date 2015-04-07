# FEDkit-legacy

This is based off an unreleased workflow I used to use. However, it has been streamlined & updated with some modern technologies:

* Grunt 0.4.x
* Assemble 0.4.x
* Libsass 3.1
* SASS-MQ 3.1.2
* Singularity.gs 1.6.2
* BrowserSync 2.x

This project is undocumented and not really meant for public consumption but feel free to use it if it is useful. It is currently missing some of the basic things like bower, HTML minification and alike but it is pretty fast at what it does.

The 'Proper' FedKit is coming in the future with documentation and much more jazzy stuff.

NOTE: Singularity.gs warns about Breakpoint being missing on compile but it's not a problem. SASS-MQ is far better anyway.

## Install

Install Node 0.10 or 0.12, then run 'npm install'

## How to use

* 'grunt' - Build website, watch for changes & start server
* 'grunt prd' - Build minified website
* 'grunt reset' - Delete website and all generated files

## BrowserSync

With BrowserSync, you can view the website on multiple devices and actions are sent to all of them at the same time. See the UI link after running the grunt task for more information.
