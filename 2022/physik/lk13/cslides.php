<!doctype html>
<html>
<head>
        <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="/slides/public/dist/reset.css">
    <link rel="stylesheet" href="/slides/public/dist/reveal.css">
    <link rel="stylesheet" href="/slides/public/dist/theme/black.css">
    <link rel="stylesheet" href="/slides/public/plugin/highlight/monokai.css">
    <style>
        :root {
            --r-link-color: #7a3;
            --r-link-color-dark: #583;
            --r-link-color-hover: #9d5;
            --r-selection-background-color: #583;
        }

        .floating-button {
            color: var(--r-link-color);
            width: 2rem;
            margin: 1rem;
            position: fixed;
            top: 0;
            right: 0;
            z-index: 60;
            transition: .2s;
        }
        .floating-button:hover { color: var(--r-link-color-hover) }
        .floating-button.hidden {
            opacity: 0;
            visibility: hidden;
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            let timeout;
            document.addEventListener('mousemove', e => {
                document.querySelector('.floating-button').classList.remove('hidden');
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    document.querySelector('.floating-button').classList.add('hidden');
                }, 2000);
            });
        });
    </script>
</head>
<body>
    <a class="floating-button" href="<?php echo './'.$_GET['md']; ?>"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 20 20" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3,10A3,3 0 0 1 5,4 2,2 0 1 1 11,4 3,3 0 0 1 13,10M8,8V16M5,13L8,16 11,13"/></svg>
</a>
    <div class="reveal">
        <div class="slides">
            <section data-markdown><?=file_get_contents($_GET['md'])?>
            </section>
        </div>
    </div>

    <script src="/slides/public/dist/reveal.js"></script>
    <script src="/slides/public/plugin/notes/notes.js"></script>
    <script src="/slides/public/plugin/markdown/markdown.js"></script>
    <script src="/slides/public/plugin/highlight/highlight.js"></script>
    <script src="/slides/public/plugin/math/math.js"></script>
    <script>
        // More info about initialization & config:
        // - https://revealjs.com/initialization/
        // - https://revealjs.com/config/
        Reveal.initialize({
            hash: true,

            // Learn about plugins: https://revealjs.com/plugins/
            plugins: [ RevealMarkdown, RevealHighlight, RevealNotes, RevealMath ]
        });
    </script>
</body>
</html>
