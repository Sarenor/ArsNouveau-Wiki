<script lang="ts">
	import { onMount } from 'svelte';
	import anime from 'animejs';
	import { popup, type PopupSettings } from '@skeletonlabs/skeleton';

	let state = 'none';
	let changeBegan = 0;
	let starbuncles = [
		{
			name: 'Bailey',
			adopter: 'Ars Nouveau Team',
			bio: 'Ars Nouveau is a passion project brought to life by hundreds of contributions from the community. We hope you enjoy this Rainbow-buncle as much as we enjoy making this mod! Thanks for playing!"',
			color: 'red'
		}
	];
	let starbuncleIndex = 0;
	let src = '/runningbuncle/starbuncle_run_purple_border.gif';
	let popupSettings: PopupSettings = {
		event: 'hover',
		placement: 'bottom',
		target: 'bio-popup'
	};

	function getRandomStarbuncleIndex() {
		return Math.floor(Math.random() * starbuncles.length);
	}

	onMount(() => {
		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			anime({
				targets: '.buncle-box',
				translateX: ['-25%', '79%'],
				delay: 1000,
				endDelay: 1000,
				loop: true,
				duration: 3500,
				direction: 'alternate',
				easing: 'linear',
				changeBegin: function(anim) {
					changeBegan++;
					if (changeBegan % 2 === 1) {
						state = 'FORWARDS';
						src = '/runningbuncle/starbuncle_run_purple_border.gif';
					} else {
						state = 'BACKWARDS';
						src = '/runningbuncle/starbuncle_run_purple_border.gif';
					}
				},
				changeComplete: function(anim) {
					if (changeBegan % 2 === 1) {
						state = 'WAITING';
						src = '/runningbuncle/lilly.png';
					} else {
						starbuncleIndex = getRandomStarbuncleIndex();
					}
				}
			});
		}

		fetch('https://raw.githubusercontent.com/baileyholl/Ars-Nouveau/main/supporters.json')
			.then(response => response.json())
			.then(data => {
				starbuncles = data.starbuncleAdoptions;
				starbuncleIndex = getRandomStarbuncleIndex();
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


<div class="buncle-container" use:popup={popupSettings}>
	<div class="buncle-name flex flex-col items-center">
		<p>{starbuncles[starbuncleIndex].name}</p>
		<p class="text-xs text-gray-500">{starbuncles[starbuncleIndex].adopter}</p>
	</div>
	<div class="buncle-box bg-surface-100-800-token w-full">
		<img {src} alt="animated running Starbuncle" class="buncle" class:mirrored={state === "BACKWARDS"} />
	</div>
</div>

<div data-popup="bio-popup" class="card variant-filled-primary p-4 max-w-lg">
	{starbuncles[starbuncleIndex].bio}
	<div class="arrow variant-filled-secondary" />
</div>