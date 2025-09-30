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
	}
</style>
