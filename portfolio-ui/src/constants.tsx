const ICON_SIZE = "medium";

const navItems = [
  {
    title: "Home",
    type: "home",
    target: "homeSection",
    path: "/",
  },
  {
    title: "Experience",
    type: "work",
    target: "workExpSection",
    path: "/experience",
  },
  {
    title: "Projects",
    type: "code",
    target: "projectsSection",
    path: "/projects",
  },
  {
    title: "Education",
    type: "school",
    target: "educationSection",
    path: "/education",
  },
  {
    title: "About",
    type: "info",
    target: "aboutSection",
    path: "/about",
  },
];

const workExp = [
  {
    company: "Dexlock Technologies",
    role: "Software Engineer",
    description:
      "Developed and maintained full-stack solutions including enterprise web applications, web scraping tools, and CI/CD pipelines, while managing and monitoring cloud and underlying hardware infrastructure",
    award: "Most Valuable Player",
    awardDescription:
      "Awarded for outstanding contributions and top performance in Q4 2021",
  },
  // {
  //   company: "Leeds University Union",
  //   role: "Bars and Venues Assistant & Supervisor",
  //   description: "TBD",
  //   stack: [],
  // },
  {
    company: "Cloudium Software",
    role: "Web Development and Big Data Intern",
    description:
      "Gained expertise in designing and building responsive websites with HTML, CSS, and JavaScript, while also experimenting with big data solutions like Hadoop and Apache Spark.",
  },
];

const projects = [
  {
    title: "Leap Analysis",
    subtitle: "Project at Dexlock Technologies",
    description: "Virtualized Semantic Search and Analytics Engine",
    stack: [
      "java",
      "python",
      "js",
      "reactjs",
      "nodejs",
      "spring",
      "aws",
      "docker",
      "mongodb",
      "kibana",
      "apache",
      "gitlab",
      "jira",
    ],
  },
  {
    title: "Distributed Tracing Framework",
    subtitle: "MSc Project",
    description:
      "Framework to monitor network traffic and call flow latencies among microservices in Kubernetes clusters",
    stack: [
      "java",
      "spring",
      "azure",
      "docker",
      "kubernetes",
      "mongodb",
      "github",
      "grafana",
    ],
    link: "https://github.com/aman224/distributed-tracing-framework",
  },
  {
    title: "Project Management System",
    subtitle: "Training Project at Dexlock Technologies",
    description: "Project Management System to centralize project tracking",
    stack: ["js", "reactjs", "nodejs", "mongodb", "figma"],
  },
  {
    title: "Text Editor",
    subtitle: "Personal Project",
    description: "A terminal based text editor",
    stack: ["java"],
    link: "https://github.com/aman224/text-editor",
  },
  {
    title: "Portfolio (This One)",
    subtitle: "Personal Project",
    description:
      "A portfolio website developed with React.js, drawing inspiration from Material 3 Expressive UI guidelines and color schemes",
    stack: ["js", "reactjs", "java", "spring", "github", "materialui", "figma"],
    link: "https://github.com/aman224/portfolio",
  },
];

const education = [
  {
    title: "University of Leeds",
    course: "MSc Advanced Computer Science (Cloud Computing)",
    location: "Leeds, United Kingdom",
    grade: "Distinction (Grade: 8.1)",
  },
  {
    title: "Government Model Engineering College",
    course: "BTech Computer Science and Engineering",
    location: "Kerala, India",
    grade: "First-Class Honours (CGPA: 8.36)",
  },
];

export { workExp, navItems, projects, education, ICON_SIZE };
