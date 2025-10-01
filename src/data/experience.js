export const experiences = [
  {
    id: 1,
    company: "HelloTEC inc.",
    position: "Front End Web Developer",
    location: "Toronto, CA",
    period: "Sept 2024 - Present",
    description: [
      "Built reusable UI components (CustomTable, CustomInput, CustomCard) by Element Plus with standardized CSS styling and consistent configurations (e.g. validation, pagination), while ensuring flexibility and extensibility through props, emits, and slots (e.g., conditional selection input in CustomTable, password strength indicator with progress bar in CustomInput).",
      "Developed a responsive and scalable design system by centralizing global SCSS variables and breakpoints (e.g., typography scaling, color tokens, reusable mixins) to ensure consistency and maintainability across the application, while complementing it with component-level media queries and targeted utility classes (e.g., Bootstrap col-md-3, scoped SCSS) to fine-tune layouts and interactions for individual components.",
      "Implemented Pinia and its intuitively persisted state plugin to design modular store structures (user authentication, goods management, order workflows, etc.) that keep separation of concerns, achieve unified data flow, and reduce redundant logic (e.g., clearing all session and local storage with $reset on logout).",
      "Engineered a bilingual internationalization system by storing all translation entries in database, enabling translation updates without modifying local code to reduce deployment overhead, while leveraging Vue I18n to maintain a local backup of all translations as a contingency in case the backend database becomes unavailable.",
      "Built Axios interceptors to auto-inject authentication tokens for secure API requests and dynamically set Content-Type for diverse payloads. Centralized status code handling (e.g., auto-logout on 401) and standardized localized notifications with silent handling, improving security, maintainability, and user experience consistency across the application.",
      "Coordinated closely with dev team to integrate and optimize APIs, engaged with PM to discuss feature scops, UI/UX improvement, and progress updates, aligned with BA to confirm functionalities met business requirements, and collaborated with unit testing teams to investigate and resolve bugs through practical methods (examining logs, testing hooks, etc.).",
      "Applied a series of engineering best practices to enhance code maintainability and performance, including consistent code formatting with Prettier, cleaner imports with path aliases, optimized performance with lazy loading via Vue Router dynamic imports, and reduced logic redundancy with utility functions (e.g. calculator.js for dynamically calculating shipping price)."
    ],
    technologies: ["Vue.js (Vue 3)", "Express.js", "MangoDB","Vue Router","Pinia","Vue I18n","Axios","Element Plus","SCSS","Prettier"]
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
