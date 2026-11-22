// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Hina Jawaid",
  title: "Full Stack Software Engineer",
  subtitle: "Web & Mobile",
  tagline:
    "I turn business ideas into reliable web and mobile apps, handling everything from database design and APIs to a polished, easy-to-use interface. Working with clients internationally. Have a project in mind? Let's build it.",
  location: "Islamabad, Pakistan",
  email: "hinajawaid001@gmail.com",
  phone: "+92 3125430433",
  phoneLink: "+923125430433",
  linkedin: "https://www.linkedin.com/in/hina-jawaid-2846aa22b/",
  github: "https://github.com/Hinajawaid",
  cv: "/Hina-Jawaid-CV.pdf", // put your CV PDF in /public with this name
  photo: "/hina.jpg",
  about: [
    "I'm a Full Stack Software Engineer who enjoys building applications from the ground up. I work across frontend and backend development, turning requirements into functional, well-structured software.",
    "My experience spans JavaScript, React, Next.js, Node.js, Express.js, MongoDB, SQL Server, and REST API development. I've worked on real-world applications involving complex business workflows, database management, API integrations, and cross-platform development.",
    "I enjoy solving engineering problems, exploring new technologies, and building software that works beyond the development environment.",
  ],
  facts: [
    { label: "Based in", value: "Islamabad, Pakistan" },
    { label: "Degree", value: "BS Computer Science, COMSATS" },
    { label: "GPA", value: "3.42 / 4.0" },
    { label: "Clients", value: "England, Republic of Congo" },
  ],
};

export const skills = [
  {
    group: "Frontend Development",
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Kendo UI", "jQuery"],
  },
  {
    group: "Mobile Development",
    items: ["React Native", "Cross-platform apps", "REST API integration", "State management", "React hooks"],
  },
  {
    group: "Backend & APIs",
    items: ["Node.js", "Express.js", "ASP.NET Core MVC", "C#", "RESTful API design", "JWT authentication", "Role-based access", "FastAPI (Python)"],
  },
  {
    group: "Databases",
    items: ["SQL Server", "MySQL", "MongoDB", "Firebase", "Schema design", "Stored procedures", "Complex SQL queries", "Entity Framework Core"],
  },
  {
    group: "Languages",
    items: ["JavaScript", "C#", "C++", "Python", "SQL"],
  },
  {
    group: "Tools & Workflow",
    items: ["Git / GitHub", "Postman", "Jira", "Figma", "Draw.io", "Visual Studio", "Vercel deployment"],
  },
  {
    group: "Engineering Practices",
    items: ["System design", "Object-oriented programming", "Data structures & algorithms", "Requirements analysis", "Debugging & optimisation", "Performance tuning"],
  },
  {
    group: "Professional Strengths",
    items: ["Problem solving", "Client communication", "Leadership", "Teamwork", "Technical mentoring"],
  },
];

export const experience = [
  {
    company: "ISMO-WAPDA",
    role: "IT Intern",
    period: "June 2026 – Present",
    location: "Islamabad, Pakistan",
    points: [
      "Contributing to enterprise applications supporting Pakistan's power market, including the Market Management System (MMS) and the Wheeling Auction Platform.",
      "Working with ASP.NET Core MVC, C#, SQL Server, Entity Framework Core, Kendo UI, JavaScript, jQuery and complex SQL stored procedures to implement, debug and enhance features.",
      "Contributing to Pakistan's first Wheeling Auction Platform: auction, bidding, result processing, data management, validation and role-based access workflows.",
    ],
  },
  {
    company: "Rehman Solutions",
    role: "Software Engineer",
    period: "July 2025 – May 2026",
    location: "Islamabad, Pakistan",
    points: [
      "Worked with international clients in England and the Republic of Congo to design and deliver a full-stack mobile and web application.",
      "Built the app with React, React Native, Node.js, Express, JavaScript and SQL for pharmaceutical business operations.",
      "Designed backend APIs, database schemas and complex SQL queries, implemented core business logic, built responsive interfaces and optimised performance.",
    ],
  },
  {
    company: "Preply",
    role: "Software Engineer Tutor",
    period: "June 2024 – July 2025",
    location: "Islamabad, Pakistan",
    points: [
      "Taught practical frontend and backend development covering FastAPI, Python, Node.js, JavaScript and React.js.",
      "Created custom web projects for academic and professional needs.",
      "Covered RESTful APIs, CRUD, JWT authentication, responsive design, React hooks, state management and deployment.",
    ],
  },
];

// Add screenshots to /public/projects and set `image`, then add `github` / `live` links.
export const projects = [
  {
    title: "Indaphar92",
    kind: "Pharmaceutical Sales Management System · Web & Mobile",
    description:
      "Digitises pharmaceutical sales operations. Medical representatives record doctor visits, manage orders and track sales performance in real time, while administrators monitor visits and territories and generate analytical reports.",
    stack: ["React Native", "Next.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS", "GitHub"],
    images: [
      { src: "/projects/indaphar-login.jpg", caption: "Secure sign-in" },
      { src: "/projects/indaphar-dashboard.jpg", caption: "Field dashboard and quick actions" },
      { src: "/projects/indaphar-doctor-form.jpg", caption: "Register a doctor" },
      { src: "/projects/indaphar-visit-details.jpg", caption: "Visit details and sample tracking" },
    ],
    github: "", // TODO: repo URL
    live: "", // TODO: optional demo URL
  },
  {
    title: "DyslexiAid",
    kind: "Dyslexia Support Platform · Web & Mobile",
    description:
      "Supports people with dyslexia in everyday academic tasks with reading and writing assistance, plus phonics and spelling games. A web dashboard gives parents and guardians insight into progress.",
    stack: ["React Native", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Git"],
    badge: "🏆 1st Place, Career Expo",
    images: [
      { src: "/projects/dyslexiaid-sign-in.webp", caption: "Sign in" },
      { src: "/projects/dyslexiaid-home.webp", caption: "Home: summary, mind map and audio notes" },
      { src: "/projects/dyslexiaid-spelling-game.webp", caption: "Spelling game with audio prompts" },
      { src: "/projects/dyslexiaid-summarization.webp", caption: "Text summarization" },
      { src: "/projects/dyslexiaid-planner.webp", caption: "Daily planner" },
      { src: "/projects/dyslexiaid-parent-insights.webp", caption: "Web dashboard: game insights for parents" },
    ],
    github: "",
    live: "",
  },
];

export const achievements = [
  {
    title: "1st Position, Career Expo",
    text: "Won first place for DyslexiAid, a web and mobile platform that supports people with dyslexia through reading and writing assistance, phonics and spelling games, and progress tracking for parents and guardians.",
  },
];

export const education = [
  {
    school: "COMSATS University Islamabad",
    degree: "Bachelor of Science in Computer Science",
    period: "2021 – 2025",
    note: "GPA: 3.42 / 4.0",
  },
];
