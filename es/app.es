#!/usr/bin/env es

# setup global environment.
export * (load "./profile");

# import function(s) from module
var hello (import say-hello-to from "./module");

# do something
hello (arguments first:: ?* user-name);
