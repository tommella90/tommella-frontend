<template>
	<div class="about-me">
		<NavbarView/>
		<ParticlesBackgroundView/>
	</div>
</template>


<script>
import NavbarView from './NavbarView.vue';
import ParticlesBackgroundView from './ParticlesBackgroundView.vue';
  
export default {
	name: 'AboutMeView-View',
	components: {
		NavbarView,
		ParticlesBackgroundView
	}
}
</script>

<style scoped>
.about-me {
	font-size: 1.5em;
	color: #333;
	margin: 20px;
	}
</style>
  