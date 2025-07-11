// Default CV object
  export default function dummyData(){
    const demoObject = {
      personals: {
        fullName: "Doron Pela",
        location: "PMB CT 3, Cantonments, Accra, Ghana",
        email: "alepnorod@gmail.com",
        linkedIn: "www.linkedin.com/in/doron-pela-48aa62170",
        gitHub: "https://github.com/doron-pela/",
      },
      educationArray: [
        {
          institution: "Ashesi University",
          degree: "BSc. Management Information Systems",
          location: "Berekuso, Eastern Region",
          date: "June 2025",
        },
      ],
      awardArray: [
        {
          award: "Dean's List Honors",
          grantor: "Ashesi University",
          date: "September - December 2022 ",
        },
      ],
      experienceArray: [
        {
          establishment: "February by Serwaa",
          location: "Accra, Ghana",
          role: "Software Development Intern",
          date: "December 2024 – Present",
          task_1: `Designed and developed a cross-platform in-house order management system using React, Express, and 
                    PostgreSQL that enhanced order organization, streamlined tracking, and reduced processing time for an annual 
                    high-profile customer base of 700+ clients worldwide.`,
          task_2: `Integrated a streamlined functionality for tracking and retrieving client orders 
                    across multiple engagement channels, including Instagram, WhatsApp, and the company website.`,
          task: `Implemented context-based authentication and role-based access control to enhance system security, 
                    enabling efficient data storage and retrieval for a team of 10 staff members managing 1,500+ client orders annually.`,
        },
      ],
      projectArray: [
        {
          title: "Closet",
          role: "Tech Lead: Mobile & Web Application",
          date: "September 2024 – Present",
          task_1: `Spearheading a team to develop “Closet,” a multichannel enterprise that leverages recommendation systems, Typescript with React, Shadcn UI and Express.js 
            to unite Ghana’s fashion industry stakeholders on a talent discovery outlet that enhances market presence and optimizes the supply chain of creative entrepreneurs.`,
          task_2: `Leveraging Elasticsearch to implement styling referrals for storefronts, 
                    facilitating visibility for SMEs, startups and aspirants, while prioritizing Web Content Accessibility Guidelines for differently abled entrepreneurs.`,
          task_3: `Secured partnerships with the National Fashion Design Union of Ghana alongside 50+ fashion enterprises enroute to 5000+ users by the second fashion season in November.`,
        },
        {
          title: "Byte-Bazaar",
          role: "Full-Stack Web Developer",
          date: "October –November 2024",
          task_1: `Created an e-commerce platform for buying, selling, and collaborative produce of digital products in West Africa.`,
          task_2: `Used HTML, CSS, JavaScript, vanilla PHP, and SQL; integrated Pay Stack API via Curl endpoint for payment processing`,
          task_3: `Incorporated AI customer assistance through a chat-base iframe to enhance user engagement and support.`,
          task_4: `Implemented role-based collaboration on the production of digital products through a task management system, as well as a percentage remuneration model.`,
          task_5: `Deployed and tested in a virtualized Ubuntu environment to simulate real-world Linux server configurations on my local machine.`,
        },
        {
          title: "Video Conferencing Application",
          date: "July –August 2024",
          task_1: `Used Flutter’s state management and UI composition to implement video features in tandem with the Jitsimeet SDK,
                    and provided real-time communication through an intuitive UI similar to leading platforms like Zoom and Skype.`,
        },
      ],
      activityArray: [
        {
          title: "Ashesi Writing center",
          date: "September 2022 – August 2024",
          task_1:
            "Provided academic support to over 250 students across 400+ sessions, boosting writing skills",
          task_2:
            "Helped integrate ESL students from Niger into Ashesi University by providing tutelage in cross-departmental assessments, leading to improved grades over a six-month period.",
        },
      ],
      skillArray: [
        {
          title: "Programming Languages",
          entry: "JavaScript & Typescript, Dart, PHP, HTML, CSS, Java, Python",
        },
        {
          title: "Frameworks & Libraries",
          entry: "React, Express.js, Node.js, Next.js, Flutter",
        },
        {
          title: "Tools & Platforms",
          entry:
            "Git & GitHub, Figma, Firebase, Appwrite, Docker, CI/CD pipelines, Vercel, Render, Webpack",
        },
        {
          title: "Testing Frameworks",
          entry: "Jest, Jasmine",
        },
        {
          title: "Agile & waterfall Development methodologies",
          entry: "Scrum methodologies, automated testing",
        },
        {
          title: "",
          entry:
            "Advanced proficiency in professional writing, technical documentation, business correspondence, and academic literature.",
        },
      ],
    };
    return demoObject;
  }