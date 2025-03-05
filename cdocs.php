<?php
$path = $_GET['md'];

// disallow network requests
// for whatever reason all php file input operations will also operate on URLs with no way to disable it
if (preg_match('@://@', $path)) die();
// disallow non-markdown files
// this is a preventive measure to make sure this script won't print out source code.
// yes, manipulation of get parameters should be blocked by the htaccess config, but in this case it's better to be safe than sorry.
if (!preg_match('@\.md$@', $path)) die();

// files ending in ".slides.md" get served as slides
$is_slides = preg_match('@\.slides\.md$@', $path);

if ($is_slides):
// slides html:
?><!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<title>GCM Slides</title>
		<link rel="stylesheet" href="https://docs.gcm.schule/public/slides.css">
		<script src="https://docs.gcm.schule/public/render-public.js"></script>
		<style>
			#md-content {
				display: none;
			}
		</style>
		<script>
			addEventListener('load', () => {
				slides.render(document.getElementById('md-content').value);
			});
		</script>
	</head>
	<body>
		<textarea id="md-content"><?=file_get_contents($path)?></textarea>
	</body>
</html>
<?php



else:
// markdeep html:
?><!doctype html>
<meta charset="utf-8">
<link rel="stylesheet" href="https://gcm.schule/public/css/markdeep.css">
<script src="https://gcm.schule/public/js/markdeep.min.js"></script>
<?=file_get_contents($path);?>
<?php endif;

