(define "module" (= ()
  const module (import "./module");

  (should "(module os-platform) returns a string." (=> ()
    assert (module os-platform:: is-a string);
  ).
  (should "(module resolve-path file-name) ends with file-name." (=> ()
    assert (module resolve-path "file-name.txt":: ends-with "file-name.txt");
  ).
  (should "(module say-hello-to) returns 'Hello, World'." (=> ()
    assert "Hello, World" (module say-hello-to);
  ).
  (should "(module say-hello-to \"Tom\") returns 'Hello, Tom'." (=> ()
    assert "Hello, Tom" (module say-hello-to "Tom");
  ).
).
