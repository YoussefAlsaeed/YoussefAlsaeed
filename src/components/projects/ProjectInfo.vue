<script>
import feather from 'feather-icons';
/* eslint-disable */

export default {
	props: ['projectInfo'],

	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<template>
	<div class="block sm:flex gap-0 sm:gap-10 mt-14">
		<!-- Single project left section details -->
		<div class="w-full sm:w-1/3 text-left">
			<!-- Single project objectives -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.objectivesHeading || '' }}
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light">
					{{ projectInfo.objectivesDetails || '' }}
				</p>
			</div>

			<!-- Single project technologies -->
			<div class="mb-7">
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.technologies[0]?.title || '' }}
				</p>
				<p class="font-general-regular text-primary-dark dark:text-ternary-light">
					{{ projectInfo.technologies[0]?.techs?.join(', ') || '' }}
				</p>
			</div>

			<!-- Single project social sharing -->
			<div>
				<p class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2">
					{{ projectInfo.socialSharingsHeading || '' }}
				</p>
				<div class="flex items-center gap-3 mt-5">
					<a
						v-for="social in projectInfo.socialSharings"
						:key="social.id"
						:href="social.url"
						target="__blank"
						aria-label="Share Project"
						class="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-3 rounded-lg shadow-sm duration-500"
					>
						<i :data-feather="social.icon" class="w-6 lg:w-8 h-6 lg:h-8"></i>
					</a>
				</div>
			</div>
		</div>

		<!-- Single project right section details -->
		<div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
			<p class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
				{{ projectInfo.projectDetailsHeading || '' }}
			</p>
			<p
				v-for="projectDetail in projectInfo.projectDetails"
				:key="projectDetail.id"
				class="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
			>
				{{ projectDetail.details || '' }}
			</p>
		</div>
	</div>
</template>

<style scoped>
/* Additional styles to make the social sharing icons larger and more visible */
.social-icon {
	width: 2.5rem; /* Increase icon width */
	height: 2.5rem; /* Increase icon height */
	padding: 0.75rem; /* Increase padding */
	background-color: var(--color-ternary-light); /* Light background for better visibility */
	border-radius: 0.5rem; /* Rounded corners */
	transition: background-color 0.3s, transform 0.3s; /* Smooth transition for hover effect */
}

.social-icon:hover {
	background-color: var(--color-primary-dark); /* Change background on hover */
	transform: scale(1.1); /* Slightly enlarge icon on hover */
}

.social-icon i {
	width: 100%; /* Ensure icon fills container */
	height: 100%; /* Ensure icon fills container */
	color: var(--color-ternary-dark); /* Icon color */
}
</style>
