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
    description: "TBD",
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
    company: "Cloudium Technologies",
    role: "Backend Developer",
    description: "TBD",
    stack: ["java", "python", "js", "spring", "apache", "github"],
  },
];

const projects = [
  {
    title: "Leap Analysis",
    description: "TBD",
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
    description: "TBD",
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
  },
  {
    title: "Project Management System",
    description: "TBD",
    stack: ["js", "reactjs", "nodejs", "mongodb", "figma"],
  },
  {
    title: "Terminal Text Editor",
    description: "TBD",
    stack: ["java"],
  },
  {
    title: "Portfolio (This One)",
    description: "TBD",
    stack: ["js", "reactjs", "java", "spring", "github", "materialui", "figma"],
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
