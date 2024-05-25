<script lang="ts">
	import { onMount } from 'svelte';
	import anime from 'animejs';

	let state = "none";
	let src = "/runningbuncle/starbuncle_run_purple_border.gif";
	let changeBegan = 0;

	onMount(() => {
		anime({
			targets: '.buncle-box',
			translateX: ["-25%", "80%"],
			delay: 1000,
			endDelay: 1000,
			loop: true,
			duration: 3500,
			direction: 'alternate',
			easing: 'linear',
			changeBegin: function(anim) {
				changeBegan++;
				if(changeBegan % 2 === 1) {
					state = "FORWARDS";
					src = "/runningbuncle/starbuncle_run_purple_border.gif";
				} else {
					state = "BACKWARDS";
					src = "/runningbuncle/starbuncle_run_purple_border.gif";
				}
			},
			changeComplete: function(anim) {
				if(changeBegan % 2 === 1) {
					state = "WAITING";
					src = "/runningbuncle/lilly.png";
				}
			}
		});
	});
</script>

<style>
    .buncle-container {
        position: relative;
        overflow: hidden;
        height: 50px;
        flex-grow: 1;
    }

    .buncle-box {
        position: absolute;
        height: 50px;
    }

    .buncle {
        height: 50px;
				margin-left: -3px;
    }

    .buncle-name {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

		.mirrored {
        transform: scaleX(-1);
				margin-left: -7px;
		}
</style>


<div class="buncle-container">
	<p class="buncle-name">Bailey</p>
	<div class="buncle-box bg-surface-100-800-token w-full">
		<img {src} alt="animated running Starbuncle" class="buncle" class:mirrored={state === "BACKWARDS"}/>
	</div>
</div>