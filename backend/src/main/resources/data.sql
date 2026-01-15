INSERT INTO work_exp (company, role, description, award_name, award_description)
VALUES ('Dexlock Technologies',
        'Software Engineer',
        'Developed and maintained full-stack solutions including enterprise web applications, web scraping tools, and CI/CD pipelines, while managing and monitoring cloud and underlying hardware infrastructure',
        'Most Valuable Player',
        'Awarded for outstanding contributions and top performance in Q4 2021');

INSERT INTO work_exp (company, role, description)
VALUES ('Cloudium Software',
        'Web Development and Big Data Intern',
        'Gained expertise in designing and building responsive websites with HTML, CSS, and JavaScript, while also experimenting with big data solutions like Hadoop and Apache Spark');

INSERT INTO project (name, subtext, description, stack, link)
VALUES ('Leap Analysis',
        'Project at Dexlock Technologies',
        'Virtualized Semantic Search and Analytics Engine',
        '{"java", "python", "js", "reactjs", "nodejs", "spring", "aws", "docker", "mongodb", "kibana", "apache", "gitlab", "jira"}',
        NULL);

INSERT INTO project (name, subtext, description, stack, link)
VALUES ('Distributed Tracing Framework',
        'MSc Project',
        'Framework to monitor network traffic and call flow latencies among microservices in Kubernetes clusters',
        '{"java", "spring", "azure", "docker", "kubernetes", "mongodb", "github", "grafana"}',
        'https://github.com/aman224/distributed-tracing-framework');

INSERT INTO project (name, subtext, description, stack, link)
VALUES ('Project Management System',
        'Training Project at Dexlock Technologies',
        'Project Management System to centralize project tracking',
        '{"js", "reactjs", "nodejs", "mongodb", "figma"}',
        NULL);

INSERT INTO project (name, subtext, description, stack, link)
VALUES ('Text Editor',
        'Personal Project',
        'A terminal based text editor',
        '{"java"}',
        'https://github.com/aman224/text-editor');

INSERT INTO project (name, subtext, description, stack, link)
VALUES ('Portfolio (This One)',
        'Personal Project',
        'A portfolio website developed with React.js, drawing inspiration from Material 3 Expressive UI guidelines and color schemes',
        '{"js", "reactjs", "java", "spring", "github", "materialui", "figma"}',
        'https://github.com/aman224/portfolio');

INSERT INTO education (university, course, location, grade)
VALUES ('University of Leeds',
        'MSc Advanced Computer Science (Cloud Computing)',
        'Leeds, United Kingdom',
        'Distinction (Grade: 8.1)');

INSERT INTO education (university, course, location, grade)
VALUES ('Government Model Engineering College',
        'BTech Computer Science and Engineering',
        'Kerala, India',
        'First-Class Honours (CGPA: 8.36)');