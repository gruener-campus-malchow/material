<!doctype html>
<html lang="de" dir="ltr">
<head>
    <meta charse⁄t="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="/cis/public/aurora.css">
	<title>Help – CampusSlides</title>
	<style>
		iframe, iframe.cis-block {
			border: none;
			padding: 0;
			flex-grow: 1;
			display: block;
		}

		h1 {
			margin-left: 1rem;
		}

		pre {
			margin: 0;
			height: 100%;
			overflow: auto;
		}

		.cis-centered {
			align-items: stretch;
            height: calc(100vh - 3rem);
		}

        .cis-block {
			position: relative;
        }

		.flag-de {
			position: absolute;
			width: 1rem;
			height: 1rem;
			top: 1rem;
			right: 1rem;
			background: linear-gradient(black 33.3%, red 33.3%, red 66.6%, gold 66.6%);
			border-radius: .2rem;
            box-shadow: 1px 2px 4px #0008;
		}
	</style>
	<style>
		.button-container {
			display: flex;
			gap: 1rem;
			justify-content: end;
		}

        .cis-header-detail-button {
            box-sizing: border-box;
            height: 2rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            display: flex;
            cursor: default;
            overflow: hidden;
        }

        .cis-header-detail-button .label {
            display: flex;
            align-items: center;
            padding: 0 .5rem;
            background: #583;
            z-index: 1;
        }

        .cis-header-detail-button .inner-button {
            display: flex;
            align-items: center;
            justify-content: center;
            border-left: 1px solid #ddd;
            max-width: 0;
            width: 2rem;
            transition: .2s .5s, background-color .2s, color .2s;
            margin-left: -1px;
            cursor: default;
        }

        .cis-header-detail-button:hover .inner-button {
            max-width: 2rem;
            margin-left: 0;
            transition: .2s;
        }

        .cis-header-detail-button .inner-button:hover {
            background-color: #ddd;
            color: #583;
        }
	</style>
</head>
<body>
	<div class="cis-header">
        <a class="cis-brand" href="/slides/"><svg class="cis-brand-logo" viewBox="0 -4 24 24" height="0"><path d="M6,4.13a4,4 0 102,6.52M7,8h-2M12,4.13a4,4 0 102,6.52M14,12v-5.5a2.25,2.25 0 114.5,0v3-3a2.25,2.25 0 114.5,0v5.5"/></svg><span class="cis-brand-title">CampusSlides</span></a>
        <div class="spacer"></div>
		<div class="button-container">
            <div class="cis-header-detail-button">
                <div class="label">help</div>
                <a class="inner-button" href="/slides/help/">en</a>
                <a class="inner-button" href="/slides/hilfe/">de</a>
                <a class="inner-button" href="/slides/beistand/">əp</a>
            </div>
		</div>
    </div>

	<div class="cis-centered">
		
		<section data-markdown><?=file_get_contents($_GET['md'])?></section>

	</div>
</body>
</html>

