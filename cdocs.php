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
		<link rel="stylesheet" href="https://gcm.schule/slides/public/theme-dark.css">
		<title>CampusSlides</title>
	</head>
	<body>
		<div class="reveal">
			<div class="slides">
				<section data-markdown>
					<textarea data-template><?=file_get_contents($path)?></textarea>
				</section>
			</div>
		</div>
		
		<script src="https://gcm.schule/slides/public/dist/reveal.js"></script>
		<script src="https://gcm.schule/slides/public/plugin/notes/notes.js"></script>
		<script src="https://gcm.schule/slides/public/plugin/markdown/markdown.js"></script>
		<script src="https://gcm.schule/slides/public/plugin/highlight/highlight.js"></script>
		<script src="https://gcm.schule/slides/public/plugin/math/math.js"></script>
		<script>
		Reveal.initialize({
			hash: true,
			plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath ]
		});
		</script>
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

