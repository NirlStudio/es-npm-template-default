#!/usr/bin/env sugly

# setup environment
var * (load "./profile");

# import function(s) from module
var hello (import say-hello-to from "./module");

# do something
hello (arguments first:: ?* user-name);
