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
    description:
      "Designed and deployed a scalable web application that unified data from various sources using semantic web technologies and Gremlin graph traversals, effectively eliminating JOIN operations and reducing data integration time. This application also included lazy loading functions, cutting memory consumption by 50% or more.",
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
      "Created a Java Spring Boot framework that leveraged a service mesh to monitor network traffic, break down call flow latencies among microservices, and provide visualization of collected metrics. This initiative involved investigating Kubernetes and the significance of service meshes in large-scale clusters, ultimately reducing debugging time by 50% or more depending on issue complexity.",
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
    description:
      "Designed and implemented a robust Project Management System to centralize tracking of project details, employee work logs, bugs, and tasks. The system features a scalable and modern frontend, engineered with React.js, which facilitated rapid development and efficient management of UI states.",
    stack: ["js", "reactjs", "nodejs", "mongodb", "figma"],
  },
  {
    title: "Terminal Text Editor",
    description:
      "Engineered a terminal-based text editor, gaining a deep understanding of the underlying mechanisms of text editors. A key innovation was leveraging rope data structures, which significantly improved text manipulation speed for insertion and deletion on large files.",
    stack: ["java"],
    link: "https://github.com/aman224/text-editor",
  },
  {
    title: "Portfolio (This One)",
    description:
      "A portfolio website developed with React.js, drawing inspiration from Material 3 Expressive UI guidelines and color schemes. This will implement SpringBoot as a backend along with a suitable database like MongoDB or SQL in the future.",
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
