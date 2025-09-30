<script>
	import Flash from '$lib/components/Flash.svelte';
	import pitVideo from '$lib/assets/videos/Recording 2025-05-23 230753.mp4';
	import mapScreen from '$lib/assets/images/sections/section01.jpg';
	import statsScreen from '$lib/assets/images/sections/section02.jpg';

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
			imgtop: 0,
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
			contentleft: 58,
			imgtop: 0,
			imgleft: 58
		}
	};
</script>

<video autoplay muted loop id="fossilpitvideo" aria-label="fossilpit">
	<source src={pitVideo} type="video/mp4" />
</video>
<div class="title">
	<h1>Race for Dinosaurs</h1>
</div>
<div class="content">
	<Flash {...dataset.section01} />
	<Flash {...dataset.section02} />
</div>

<style>
	#fossilpitvideo {
		position: fixed;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		filter: contrast(200%) sepia(10%) drop-shadow(-30px -30px red);
	}
	.title {
		position: fixed;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		color: #f1f1f1;
		width: 100%;
		padding: 20px;
		font-size: 5rem;
		margin-bottom: 1rem;
		color: #efeae6;
		letter-spacing: 1px;
		margin-bottom: 1rem;
		width: auto;
		box-shadow: 0px 10px 0px 5px rgb(51, 50, 50);

		/*animation-name: titleFadeIn;*/
		animation-duration: 0.09s; /*0.05 ---- 10 step*/
		animation-timing-function: steps(10, jump-both);
		animation-direction: alternate;
		animation-iteration-count: infinite;
	}
</style>
