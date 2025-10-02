<script>
	import Flash from '$lib/components/Flash.svelte';
	import pitVideo from '$lib/assets/videos/Recording 2025-05-23 230753.mp4';
	import mapScreen from '$lib/assets/images/sections/section01.jpg';
	import statsScreen from '$lib/assets/images/sections/section02.jpg';
	import quizScreen from '$lib/assets/images/sections/section03.jpg';
	import interactScreen from '$lib/assets/images/sections/section04.jpg';

	const dataset = {
		section01: {
			flashInnerText: 'this is the map section',
			flashSrc: mapScreen,
			flashAlt: 'interactive map section',
			innerTextrotation: 20,
			imgrotation: 10,
			contentbgcolor: 'rgba(0, 188, 212, 1)',
			contenttop: 12,
			contentleft: 12,
			imgtop: 6,
			imgleft: 0
		},
		section02: {
			flashInnerText: 'this is the stats section',
			flashSrc: statsScreen,
			flashAlt: 'stats section',
			innerTextrotation: -20,
			imgrotation: -20,
			contentbgcolor: 'white',
			contenttop: 24,
			contentleft: 64,
			imgtop: 14,
			imgleft: 66
		},
		section03: {
			flashInnerText: 'this is the quiz section',
			flashSrc: quizScreen,
			flashAlt: 'quiz section',
			innerTextrotation: 12,
			imgrotation: -30,
			contentbgcolor: 'green',
			contenttop: 34,
			contentleft: 32,
			imgtop: 18,
			imgleft: 24
		},
		section04: {
			flashInnerText: 'this is the interactive section',
			flashSrc: interactScreen,
			flashAlt: 'interactive section',
			innerTextrotation: -8,
			imgrotation: 30,
			contentbgcolor: 'red',
			contenttop: 2,
			contentleft: 44,
			imgtop: 2,
			imgleft: 44
		}
	};

	let hide00 = false;
</script>

<video autoplay muted loop id="fossilpitvideo" aria-label="fossilpit">
	<source src={pitVideo} type="video/mp4" />
</video>
<div class="content" class:hide00>
	<Flash {...dataset.section01} />
	<Flash {...dataset.section02} />
	<Flash {...dataset.section03} />
	<Flash {...dataset.section04} />
</div>
<div class="title">
	<h1
		on:mouseenter={() => {
			hide00 = true;
		}}
		on:mouseleave={() => {
			hide00 = false;
		}}
	>
		<a
			href="/"
			on:click={(e) => {
				console.log(document.getElementsByClassName('title'));
			}}>Race for Dinosaurs</a
		>
	</h1>
	<p>
		A place to play and learn about one of the nastiest confrontations in the history of science
	</p>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Faculty+Glyphic&family=Rye&family=Xanh+Mono:ital@0;1&display=swap');
	#fossilpitvideo {
		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		filter: contrast(200%) invert(85%) sepia(25%) drop-shadow(-30px -30px red);
	}

	.title {
		position: fixed;
		bottom: 0;
		/*background: rgba(0, 0, 0, 0.5);*/
		/*color: #f1f1f1; color: #efeae6;*/
		color: rgba(150, 179, 75, 89%);
		background-image: linear-gradient(rgba(157, 141, 107, 25%), #333);
		height: auto;
		min-width: 100%;
		min-height: 100%;
		padding: 15px;
		width: auto;
	}

	.title h1 {
		position: absolute;
		top: 20px;
		font-family: 'Bungee Inline', sans-serif;
		font-weight: 400;
		font-style: normal;
		font-size: 10rem;
		letter-spacing: 1px;
		background-clip: text;
		color: trasparent;
		width: inherit;
		height: inherit;
	}

	.title p {
		display: none;
		position: absolute;
		font-size: 3rem;
		left: 0;
		bottom: 30px;
		color: magenta;
		width: 100%;
		padding: 20px;
	}

	.title h1:hover {
		color: magenta;
	}

	.title h1:hover ~ p {
		display: block;
	}

	.content.hide00 {
		display: none;
	}
</style>
