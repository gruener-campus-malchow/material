<?php
$path = $_GET['md'];

// disallow network requests
// for whatever reason all php file input operations will also operate on URLs with no way to disable it
if (preg_match('@://@', $path)) die();
// disallow non-markdown files
// this is a preventive measure to make sure this script won't print out source code
if (!preg_match('@\.md$@', $path)) die();

// here's the necessary html tags to load the markdown parser:
?><!doctype html>
<meta charset="utf-8">
<link rel="stylesheet" href="https://gcm.schule/public/css/markdeep.css">
<script src="https://gcm.schule/public/js/markdeep.min.js"></script>
<?php
// load the actual file
echo file_get_contents($path);

