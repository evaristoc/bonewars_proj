<script lang="ts">
	interface CompProps {
		flashInnerText: String;
		flashSrc: string;
		flashVid: string;
		flashAlt: string;
		innerTextrotation: number;
		imgrotation: number;
		contentbgcolor: string;
		contenttop: number;
		contentleft: number;
		imgtop: number;
		imgleft: number;
	}

	let {
		flashInnerText,
		flashSrc,
		flashVid,
		flashAlt,
		innerTextrotation,
		imgrotation,
		contentbgcolor,
		contenttop,
		contentleft,
		imgtop,
		imgleft
	}: CompProps = $props();

	let finrot = 25;
	let hide_bg = $state(true);
</script>

<div class="flash">
	<img
		class="flash-img"
		src={flashSrc}
		alt={flashAlt}
		style:rotate="{imgrotation}deg"
		style:--finrot="{finrot}deg"
		style:top="{imgtop}rem"
		style:left="{imgleft}rem"
	/>
	{#if !hide_bg}
		<video autoplay muted loop id="flash-video" aria-label="fossilpit">
			<source src={flashVid} type="video/mp4" />
		</video>
	{/if}
	<div
		class="flash-content"
		style:rotate="{innerTextrotation}deg"
		style:top="{contenttop}rem"
		style:left="{contentleft}rem"
		onmouseenter={() => {
			hide_bg = false;
			console.log(hide_bg);
		}}
		onmouseleave={() => {
			hide_bg = true;
		}}
		role="navigation"
		aria-label={flashInnerText}
	>
		<a href="." target="_self" rel="opener" style:background={contentbgcolor}>{flashInnerText}</a>
	</div>
</div>

<style>
	#flash-video {
		position: fixed;
		z-index: 50;
		right: 0;
		bottom: 0;
		min-width: 100%;
		min-height: 100%;
		filter: contrast(200%) invert(85%) sepia(25%) drop-shadow(-30px -30px red);
	}

	.flash-content {
		position: absolute;
		padding: 0px;
		z-index: 100;
		font-size: 1.7rem;
		background-color: white;
		border-radius: 12px;
		outline-offset: 4px;
		transition: all 200ms ease-in-out;
	}

	.flash-content:hover {
		font-size: 1.9rem;
	}

	a {
		display: block;
		border-radius: 12px;
		padding: 12px 42px;
		background: hsl(345deg 100% 47%);
		transform: translateY(-6px);
	}

	a:link {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.flash-img {
		position: absolute;
		animation: swing 5500ms ease-in-out infinite;
		width: 22rem;
		height: 20rem;
		min-height: 300px;
		min-width: 380px;
	}

	@keyframes swing {
		0% {
			transform: rotate(0);
		}
		50% {
			transform: rotate(var(--finrot));
		}
		100% {
			transform: rotate(0);
		}
	}
</style>
