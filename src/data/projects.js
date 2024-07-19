/* eslint-disable */
const projects = [
	{
	  id: 3,
	  title: 'Log Management Component',
	  category: 'Web Application',
	  img: require('@/assets/images/log-management.jpg'),
	  singleProjectHeader: {
		singleProjectTitle: 'Log Management Component',
		singleProjectDate: 'Jul 2023 – Oct 2023',
		singleProjectTag: 'Web Application',
	  },
	  projectImages: [
		{
		  id: 1,
		  title: 'Log Management Component Image 1',
		  img: require('@/assets/images/log-management.jpg'),
		},
		// Add more images as needed
	  ],
	  projectInfo: {
		objectivesHeading: 'Objective',
		objectivesDetails: 'The Log Management Component, developed using Spring Boot, serves as a critical module for receiving, validating, and effectively managing log data. This component seamlessly integrates with both POST API requests and Kafka channels as inputs to the module, and outputs to log files and Kafka topics along with ELK integration.',
		technologies: [
		  {
			title: 'Tools & Technologies',
			techs: ['Spring Boot', 'Kafka', 'ELK Stack', 'OAuth 2.0', 'Keycloak', 'Docker'],
		  },
		],
		projectDetailsHeading: 'Description',
		projectDetails: [
		  {
			id: 1,
			details: 'Developed a Spring Boot component for receiving logs from clients and ensured log accuracy through validations before storing them. Also responsible for integrations with Kafka and ELK stack for enhanced log management. Provided security with OAuth 2.0 and Keycloak for SSO. Containerized the services using Docker.',
		  },
		],
		socialSharingsHeading: 'Share This',
		socialSharings: [
		  { id: 1, name: 'Github', icon: 'github', url: 'https://github.com/YoussefAlsaeed/Logger' },
		  // Add more social platforms as needed
		],
	  },
	  relatedProject: {
		relatedProjectsHeading: 'Related Projects',
		relatedProjects: [
		  {
			id: 1,
			title: 'Related Project 1',
			img: require('@/assets/images/ui-project-1.jpg'),
		  },
		],
	  },
	},
	{
	  id: 4,
	  title: 'Fawry System',
	  category: 'Web Application',
	  img: require('@/assets/images/fawry-system.jpg'),
	  singleProjectHeader: {
		singleProjectTitle: 'Fawry System',
		singleProjectDate: 'Jan 2022 – Mar 2022',
		singleProjectTag: 'Web Application',
	  },
	  projectImages: [
		{
		  id: 1,
		  title: 'Fawry System Image 1',
		  img: require('@/assets/images/fawry-system.jpg'),
		},
	  ],
	  projectInfo: {
		objectivesHeading: 'Objective',
		objectivesDetails: 'Application similar to Fawry to manage online payments, utilizing Spring Boot and REST API.',
		technologies: [
		  {
			title: 'Tools & Technologies',
			techs: ['Spring Boot', 'REST API'],
		  },
		],
		projectDetailsHeading: 'Description',
		projectDetails: [
		  {
			id: 1,
			details: 'Developed an application similar to Fawry for managing online payments, leveraging Spring Boot and REST API for backend services.',
		  },
		],
		socialSharingsHeading: 'Share This',
		socialSharings: [
		  { id: 1, name: 'Github', icon: 'github', url: 'https://github.com/YoussefAlsaeed/FawrySystemPhase2' },
		  // Add more social platforms as needed
		],
	  },
	  relatedProject: {
		relatedProjectsHeading: 'Related Projects',
		relatedProjects: [
		  {
			id: 1,
			title: 'Related Project 1',
			img: require('@/assets/images/ui-project-1.jpg'),
		  },
		  // Add more related projects as needed
		],
	  },
	},
	{
	  id: 5,
	  title: 'Clinic Reservation System',
	  category: 'Web Application',
	  img: require('@/assets/images/clinic-reservation.jpg'),
	  singleProjectHeader: {
		singleProjectTitle: 'Clinic Reservation System',
		singleProjectDate: 'Apr 2022 – Jun 2022',
		singleProjectTag: 'Web Application',
	  },
	  projectImages: [
		{
		  id: 1,
		  title: 'Clinic Reservation System Image 1',
		  img: require('@/assets/images/clinic-reservation.jpg'),
		},
		// Add more images as needed
	  ],
	  projectInfo: {
		objectivesHeading: 'Objective',
		objectivesDetails: 'The Clinic Reservation System is a Node.js, MySQL, and Angular application that caters to doctors and patients. It utilizes Kafka for event-driven messaging, is containerized with Docker for scalability, and deployed on OpenShift for robustness.',
		technologies: [
		  {
			title: 'Tools & Technologies',
			techs: ['Node.js', 'MySQL', 'Angular', 'Kafka', 'Docker', 'OpenShift'],
		  },
		],
		projectDetailsHeading: 'Description',
		projectDetails: [
		  {
			id: 1,
			details: 'Developed a Clinic Reservation System using Node.js, MySQL, and Angular. Implemented event-driven messaging with Kafka, containerized the application using Docker, and deployed it on OpenShift for enhanced scalability and robustness.',
		  },
		],
		socialSharingsHeading: 'Share This',
		socialSharings: [
		  { id: 1, name: 'Github', icon: 'github', url: 'https://github.com/YoussefAlsaeed/Clinic-Reservation-System' },
		  // Add more social platforms as needed
		],
	  },
	  relatedProject: {
		relatedProjectsHeading: 'Related Projects',
		relatedProjects: [
		  {
			id: 1,
			title: 'Related Project 1',
			img: require('@/assets/images/ui-project-1.jpg'),
		  },
		  // Add more related projects as needed
		],
	  },
	},
	{
	  id: 6,
	  title: 'Unitime Software Maintenance',
	  category: 'Web Application',
	  img: require('@/assets/images/unitime-maintenance.jpg'),
	  singleProjectHeader: {
		singleProjectTitle: 'Unitime Software Maintenance',
		singleProjectDate: 'Jul 2022 – Sep 2022',
		singleProjectTag: 'Web Application',
	  },
	  projectImages: [
		{
		  id: 1,
		  title: 'Unitime Software Maintenance Image 1',
		  img: require('@/assets/images/unitime-maintenance.jpg'),
		},
		// Add more images as needed
	  ],
	  projectInfo: {
		objectivesHeading: 'Objective',
		objectivesDetails: 'Performed software maintenance on the open source Unitime project, utilizing code comprehension techniques to reverse engineer the class diagram. Detected and resolved bugs in the codebase using SonarQube and implemented new changes. Tracked all changes using JIRA.',
		technologies: [
		  {
			title: 'Tools & Technologies',
			techs: ['SonarQube', 'JIRA'],
		  },
		],
		projectDetailsHeading: 'Description',
		projectDetails: [
		  {
			id: 1,
			details: 'Performed software maintenance on the open source Unitime project. Utilized code comprehension techniques to reverse engineer the class diagram, detected and resolved bugs in the codebase using SonarQube, and implemented new changes. Tracked all changes using JIRA.',
		  },
		],
		socialSharingsHeading: 'Share This',
		socialSharings: [
		  { id: 1, name: 'Github', icon: 'github', url: 'https://github.com/YoussefAlsaeed/UnitimeMaintenance' },
		  // Add more social platforms as needed
		],
	  },
	  relatedProject: {
		relatedProjectsHeading: 'Related Projects',
		relatedProjects: [
		  {
			id: 1,
			title: 'Related Project 1',
			img: require('@/assets/images/ui-project-1.jpg'),
		  },
		  // Add more related projects as needed
		],
	  },
	},
	{
	  id: 7,
	  title: 'Food Ordering Platform',
	  category: 'Web Application',
	  img: require('@/assets/images/food-ordering.jpg'),
	  singleProjectHeader: {
		singleProjectTitle: 'Food Ordering Platform',
		singleProjectDate: 'Oct 2022 – Dec 2022',
		singleProjectTag: 'Web Application',
	  },
	  projectImages: [
		{
		  id: 1,
		  title: 'Food Ordering Platform Image 1',
		  img: require('@/assets/images/food-ordering.jpg'),
		},
		// Add more images as needed
	  ],
	  projectInfo: {
		objectivesHeading: 'Objective',
		objectivesDetails: 'Developed a food ordering platform with distinct functionalities tailored to the roles of restaurant owners, delivery personnel, and customers.',
		technologies: [
		  {
			title: 'Tools & Technologies',
			techs: ['Java EE', 'Hibernate DB', 'JavaScript', 'HTML (JSP)', 'JBoss'],
		  },
		],
		projectDetailsHeading: 'Description',
		projectDetails: [
		  {
			id: 1,
			details: 'Developed a food ordering platform with distinct functionalities tailored to the roles of restaurant owners, delivery personnel, and customers. Used Java EE for persistence and security, utilizing Hibernate DB for database management. Developed the platform\'s frontend using JavaScript and HTML (JSP). Successfully deployed the application on JBoss server.',
		  },
		],
		socialSharingsHeading: 'Share This',
		socialSharings: [
		  { id: 1, name: 'Github', icon: 'github', url: 'https://github.com/YoussefAlsaeed/FoodOrderingPlatform' },
		  // Add more social platforms as needed
		],
	  },
	  relatedProject: {
		relatedProjectsHeading: 'Related Projects',
		relatedProjects: [
		  {
			id: 1,
			title: 'Related Project 1',
			img: require('@/assets/images/ui-project-1.jpg'),
		  },
		  // Add more related projects as needed
		],
	  },
	},
	{
	  id: 8,
	  title: 'Checkers-AI',
	  category: 'Desktop Application',
	  img: require('@/assets/images/checkers-ai.jpg'),
	  singleProjectHeader: {
		singleProjectTitle: 'Checkers-AI',
		singleProjectDate: 'Jan 2023 – Feb 2023',
		singleProjectTag: 'Desktop Application',
	  },
	  projectImages: [
		{
		  id: 1,
		  title: 'Checkers-AI Image 1',
		  img: require('@/assets/images/checkers-ai.jpg'),
		},
		// Add more images as needed
	  ],
	  projectInfo: {
		objectivesHeading: 'Objective',
		objectivesDetails: 'Utilizing powerful algorithms like minimax and alpha-beta pruning to make 2 bots battle each other with different difficulty levels using Python.',
		technologies: [
		  {
			title: 'Tools & Technologies',
			techs: ['Python', 'Minimax', 'Alpha-beta Pruning'],
		  },
		],
		projectDetailsHeading: 'Description',
		projectDetails: [
		  {
			id: 1,
			details: 'Developed an AI-powered Checkers game using Python, incorporating powerful algorithms like minimax and alpha-beta pruning to enable two bots to battle each other with different difficulty levels.',
		  },
		],
		socialSharingsHeading: 'Share This',
		socialSharings: [
		  { id: 1, name: 'Github', icon: 'github', url: 'https://github.com/YoussefAlsaeed/CheckersAI' },
		  // Add more social platforms as needed
		],
	  },
	  relatedProject: {
		relatedProjectsHeading: 'Related Projects',
		relatedProjects: [
		  {
			id: 1,
			title: 'Related Project 1',
			img: require('@/assets/images/ui-project-1.jpg'),
		  },
		  // Add more related projects as needed
		],
	  },
	},
	{
	  id: 9,
	  title: 'Library Management System',
	  category: 'Desktop Application',
	  img: require('@/assets/images/library-management.jpg'),
	  singleProjectHeader: {
		singleProjectTitle: 'Library Management System',
		singleProjectDate: 'Mar 2023 – May 2023',
		singleProjectTag: 'Desktop Application',
	  },
	  projectImages: [
		{
		  id: 1,
		  title: 'Library Management System Image 1',
		  img: require('@/assets/images/library-management.jpg'),
		},
		// Add more images as needed
	  ],
	  projectInfo: {
		objectivesHeading: 'Objective',
		objectivesDetails: 'System to manage library users and books storage using MS SQL and WinForms in MS Visual Studio 2022.',
		technologies: [
		  {
			title: 'Tools & Technologies',
			techs: ['MS SQL', 'WinForms', 'MS Visual Studio 2022'],
		  },
		],
		projectDetailsHeading: 'Description',
		projectDetails: [
		  {
			id: 1,
			details: 'Developed a Library Management System to manage library users and book storage, using MS SQL for database management and WinForms in MS Visual Studio 2022 for the application interface.',
		  },
		],
		socialSharingsHeading: 'Share This',
		socialSharings: [
		  { id: 1, name: 'Github', icon: 'github', url: 'https://github.com/YoussefAlsaeed/LibraryManagementSystem' },
		  // Add more social platforms as needed
		],
	  },
	  relatedProject: {
		relatedProjectsHeading: 'Related Projects',
		relatedProjects: [
		  {
			id: 1,
			title: 'Related Project 1',
			img: require('@/assets/images/ui-project-1.jpg'),
		  },
		  // Add more related projects as needed
		],
	  },
	},
	{
	  id: 10,
	  title: 'Learning Management System Microservices',
	  category: 'Web Application',
	  img: require('@/assets/images/lms-microservices.jpg'),
	  singleProjectHeader: {
		singleProjectTitle: 'Learning Management System Microservices',
		singleProjectDate: 'Jun 2023 – Aug 2023',
		singleProjectTag: 'Web Application',
	  },
	  projectImages: [
		{
		  id: 1,
		  title: 'Learning Management System Microservices Image 1',
		  img: require('@/assets/images/lms-microservices.jpg'),
		},
		// Add more images as needed
	  ],
	  projectInfo: {
		objectivesHeading: 'Objective',
		objectivesDetails: 'Developed a microservices-based learning management system with a database-per-service pattern, leveraging Spring Boot and Java EE beans.',
		technologies: [
		  {
			title: 'Tools & Technologies',
			techs: ['Spring Boot', 'Java EE', 'Vue.js', 'Docker'],
		  },
		],
		projectDetailsHeading: 'Description',
		projectDetails: [
		  {
			id: 1,
			details: 'Developed a microservices-based learning management system with a database-per-service pattern, leveraging Spring Boot and Java EE beans. Implemented a comprehensive frontend using Vue.js, enabling full functionality for admins, instructors, and students. Containerized all services and databases with Docker for seamless deployment.',
		  },
		],
		socialSharingsHeading: 'Share This',
		socialSharings: [
		  { id: 1, name: 'Github', icon: 'github', url: 'https://github.com/YoussefAlsaeed/LMSMicroservices' },
		  // Add more social platforms as needed
		],
	  },
	  relatedProject: {
		relatedProjectsHeading: 'Related Projects',
		relatedProjects: [
		  {
			id: 1,
			title: 'Related Project 1',
			img: require('@/assets/images/ui-project-1.jpg'),
		  },
		  // Add more related projects as needed
		],
	  },
	},
	{
	  id: 11,
	  title: 'E-learning Proctor',
	  category: 'Web Application',
	  img: require('@/assets/images/elearning-proctor.jpg'),
	  singleProjectHeader: {
		singleProjectTitle: 'E-learning Proctor',
		singleProjectDate: 'Sep 2023 – Nov 2023',
		singleProjectTag: 'Web Application',
	  },
	  projectImages: [
		{
		  id: 1,
		  title: 'E-learning Proctor Image 1',
		  img: require('@/assets/images/elearning-proctor.jpg'),
		},
		// Add more images as needed
	  ],
	  projectInfo: {
		objectivesHeading: 'Objective',
		objectivesDetails: 'This project is a demo application consisting of a Node.js Express backend and a Vue.js frontend. It provides admin and student functionalities where admins can create quizzes and students can view and take these quizzes. The frontend includes proctoring features using mobile detection and computer vision.',
		technologies: [
		  {
			title: 'Tools & Technologies',
			techs: ['Node.js', 'Express', 'Vue.js'],
		  },
		],
		projectDetailsHeading: 'Description',
		projectDetails: [
		  {
			id: 1,
			details: 'Developed a demo application consisting of a Node.js Express backend and a Vue.js frontend. Provides admin and student functionalities where admins can create quizzes and students can view and take these quizzes. The frontend includes proctoring features using mobile detection and computer vision.',
		  },
		],
		socialSharingsHeading: 'Share This',
		socialSharings: [
		  { id: 1, name: 'Github', icon: 'github', url: 'https://github.com/YoussefAlsaeed/E-learningProctor' },
		  // Add more social platforms as needed
		],
	  },
	  relatedProject: {
		relatedProjectsHeading: 'Related Projects',
		relatedProjects: [
		  {
			id: 1,
			title: 'Related Project 1',
			img: require('@/assets/images/ui-project-1.jpg'),
		  },
		  // Add more related projects as needed
		],
	  },
	},
	{
	  id: 12,
	  title: 'Orders Management System',
	  category: 'Web Application',
	  img: require('@/assets/images/orders-management.jpg'),
	  singleProjectHeader: {
		singleProjectTitle: 'Orders Management System',
		singleProjectDate: 'Dec 2023 – Feb 2024',
		singleProjectTag: 'Web Application',
	  },
	  projectImages: [
		{
		  id: 1,
		  title: 'Orders Management System Image 1',
		  img: require('@/assets/images/orders-management.jpg'),
		},
		// Add more images as needed
	  ],
	  projectInfo: {
		objectivesHeading: 'Objective',
		objectivesDetails: 'This is an E-commerce API built with NestJS, Prisma, and PostgreSQL. The API allows for managing users, products, carts, orders, and applying coupons.',
		technologies: [
		  {
			title: 'Tools & Technologies',
			techs: ['NestJS', 'Prisma', 'PostgreSQL'],
		  },
		],
		projectDetailsHeading: 'Description',
		projectDetails: [
		  {
			id: 1,
			details: 'Developed an E-commerce API using NestJS, Prisma, and PostgreSQL. The API allows for managing users, products, carts, orders, and applying coupons.',
		  },
		],
		socialSharingsHeading: 'Share This',
		socialSharings: [
		  { id: 1, name: 'Github', icon: 'github', url: 'https://github.com/YoussefAlsaeed/OrdersManagementSystem' },
		  // Add more social platforms as needed
		],
	  },
	  relatedProject: {
		relatedProjectsHeading: 'Related Projects',
		relatedProjects: [
		  {
			id: 1,
			title: 'Related Project 1',
			img: require('@/assets/images/ui-project-1.jpg'),
		  },
		  // Add more related projects as needed
		],
	  },
	},
  ];
  
  export default projects;
