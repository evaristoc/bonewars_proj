<script>
	import Flash from '$lib/components/Flash.svelte';
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
			contentleft: 16,
			imgtop: 0,
			imgleft: 16
		}
	};
</script>

<Flash {...dataset.section01} />
<Flash {...dataset.section02} />
