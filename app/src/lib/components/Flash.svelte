<script lang="ts">
	interface CompProps {
		flashInnerText: String;
		flashSrc: string;
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
	<div
		class="flash-content"
		style:rotate="{innerTextrotation}deg"
		style:background={contentbgcolor}
		style:top="{contenttop}rem"
		style:left="{contentleft}rem"
	>
		<p><a href="/">{flashInnerText}</a></p>
	</div>
</div>

<style>
	.flash-content {
		position: absolute;
		padding: 8px;
		z-index: 100;
		font-size: 1.7rem;
		transition: all 200ms ease-in-out;
	}

	.flash-content:hover {
		font-size: 1.9rem;
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
