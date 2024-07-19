<script>
import feather from 'feather-icons';
import ProjectHeader from '../components/projects/ProjectHeader.vue';
import ProjectGallery from '../components/projects/ProjectGallery.vue';
import ProjectInfo from '../components/projects/ProjectInfo.vue';
// import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects.vue';
import projects from '../data/projects.js';

export default {
	name: 'SingleProject',
	components: {
		ProjectHeader,
		ProjectGallery,
		ProjectInfo,
		// ProjectRelatedProjects,
	},
	data() {
		return {
			project: null,
		};
	},
	created() {
		const projectId = this.$route.params.id;
		this.project = projects.find((project) => project.id == projectId);
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div v-if="project" class="container mx-auto mt-10 sm:mt-20">
		<!-- Project header -->
		<ProjectHeader :singleProjectHeader="project.singleProjectHeader" />

		<!-- Project gallery -->
		<ProjectGallery :projectImages="project.projectImages" />

		<!-- Project information -->
		<ProjectInfo :projectInfo="project.projectInfo" />

		<!-- Project related projects -->
		<!-- <ProjectRelatedProjects :relatedProject="project.relatedProjects" /> -->
	</div>
	<div v-else class="container mx-auto mt-10 sm:mt-20">
		<p>Project not found.</p>
	</div>
</template>

<style scoped></style>
