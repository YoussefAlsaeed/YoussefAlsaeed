<script>
export default {
	setup() {
		return {
			bios: [
				{
					id: 1,
					bio:
						'I am a fresh graduate in Software Engineering from the Faculty of Computers and Artificial Intelligence, Cairo University, with excellent GPA. I have hands-on experience as a Java Developer intern at Link Development, where I developed Spring Boot components and integrated Kafka and ELK stack for log management. My technical skills span multiple programming languages, testing frameworks, and DevOps tools, including Docker and Kubernetes. I have successfully led and contributed to various projects, such as an Ai-powered LMS and a clinic reservation system. I am passionate about software development and continuously improving my skills through courses and practical experience.',
				},
			],
		};
	},
};
</script>

<template>
	<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
		<!-- About profile image -->
		<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
			<img
				src="@/assets/images/profile.jpeg"
				class="rounded-xl w-96"
				alt=""
			/>
		</div>

		<!-- About details -->
		<div class="w-full sm:w-3/4 text-left">
			<p
				v-for="bio in bios"
				:key="bio.id"
				class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
			>
				{{ bio.bio }}
			</p>
		</div>
	</div>
</template>
