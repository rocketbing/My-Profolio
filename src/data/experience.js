export const experiences = [
  {
    id: 1,
    company: "HelloTEC inc.",
    position: "Front End Web Developer",
    location: "Toronto, CA",
    period: "Sept 2024 - Present",
    title:'International Logistics Management Platform with separate user interface (Vue 3) and admin interfaces (React 18) used by international clients and internal teams',
    description: [
      "Set up a consistent and scalable design system by centralizing global SCSS variables and reusable mixins, which improved UI consistency and reduced styling maintenance time.",
      "Used Pinia (Vue) and Redux Toolkit (React) to organize state logic across modules like user auth, orders, and goods management, reducing duplicated code and improving data flow.",
      "Added bilingual support (English/Chinese) with a database-driven translation system that allows dynamic updates without redeploying, improving accessibility for global users.",
      "Implemented secure authentication with Axios interceptors, token validation, and role-based access control to ensure data safety across different user levels.",
      "Built a real-time analytics dashboard with Recharts and Ant Design for tracking revenue, orders, and profit trends, including Excel export and customizable filters for financial reviews.",
      "Developed a customer service dashboard for handling complaints, after-sales data, and compensation workflows, providing visibility into service quality and processing times.",
      "Integrated TinyMCE and React-Quill editors for managing email templates and announcements, supporting live HTML preview and API-based CRUD operations."
    ],
    technologies: ["Vue.js (Vue 3)", "React 18", "Express.js", "MangoDB","Vue & React Router", "Redux Toolkit", "Pinia","Vue I18n","Axios","Element Plus","Ant Design","SCSS","Prettier"],
    cross_platform_title:'Cross-Platform Development',
    cross_platform_description:[
      "Created shared UI components (tables, inputs, cards) for both Vue and React apps with standardized styling, flexible props (dynamic data) and conditional rending for easy reuse.",
      "Centralized API handling with Axios interceptors for token injection, error handling, and localized user notifications to keep the experience consistent.",
      "Worked closely with product managers, business analysts, and QA engineers to refine requirements, improve usability, and troubleshoot issues efficiently.",
      "Applied best practices (Prettier formatting, path aliases, lazy loading, and utility functions) to keep the codebase clean and performant.",
      "Used AI tools to automate repetitive work and speed up debugging, helping the team deliver features faster and with fewer errors. "
    ]
  },
  {
    id: 2,
    company: "TopOffer",
    position: "Assistant Manager / Supervisor / Administrator",
    location: "Toronto, CA",
    period: "Nov 2020 - Jul 2022",
    description: [
      "Led and supervised a team of consultants, designing training programs, delegating tasks, and monitoring performance metrics to maintain high service quality with zero client complaints. ",
      "Provided academic advisory services and researched global university program requirements, supporting program planning aligned with students’ academic and career goals, and enhancing students’ profiles for successful postgraduate admissions."
    ],
    technologies: ["Leadership", "Problem Solving", "Interpersonal Communication"]
  }
];
