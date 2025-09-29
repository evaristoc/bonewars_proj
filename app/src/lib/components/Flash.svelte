<script>
	let { flashInnerText, src, alt, innerTextrotation, imgrotation } = $props();
</script>

<div class="flash">
	<p class="flash-content" style:rotate={innerTextrotation}>{flashInnerText}</p>
	<img class="flash-img" {src} {alt} style:rotate={imgrotation} />
</div>

<style>
</style>
