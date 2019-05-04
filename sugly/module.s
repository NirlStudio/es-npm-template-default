const os (import "$os");
const path (import "$path");

export os-platform (os platform);

(export resolve-path (=> (name)
  path resolve -app-dir, name;
).

(export say-hello-to (=> user
  print 'Hello, $(user ?? "World")';
).
