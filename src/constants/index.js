import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer currently pursuing a Bachelor of Science in Computer Science at Memorial University of Newfoundland. With a strong foundation in Java, Python, Full Stack Web Development, Data Structures and Algorithms, Artificial Intelligence, Machine Learning, and Deep Learning, I am eager to apply my skills in real-world projects.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    period: "September 2023 - December 2024",
    role: "Policy Analyst Assistant",
    company: "Memorial University - Office of Equity, Diversity, Inclusion and Anti-Racism",
    description: `Conducted research and reported findings about EDI-AR in Memorial University policies on workplace harassment, inclusion and disability. Assisted in marketing and organizing seminars, community programs and campaigns to take feedback of the university community on various issues such as inclusion, racism and diversity.`,
    technologies: ["Research", "Reporting", "Community Engagement"],
  },
  {
    period: "May 2023 - August 2023",
    role: "Special Programs Coordinator",
    company: "Memorial University - School of Graduate Studies",
    description: `Communicated with the migration of university's older Scholarships website data to the new website, updating changes in the already present scholarship data and communicating any changes to the university authorities. Specialized in the use of excel spreadsheets and used various excel tools to represent data in a simpler and structured manner.`,
    technologies: ["Data Migration", "Excel", "Communication"],
  },
  {
    period: "April 2022 - December 2022",
    role: "Research Assistant",
    company: "Memorial University - Department of Psychology",
    description: `Used DeepLabCut, a python-based machine learning software, to record and analyze the movement of mice and help us with understanding how mice perceive the physical space around them. Analyzed Data using EthovisionXT-a video tracking system for automatically recording animals and their movement by placing markers on their heads and tails, which automatically tabulates all the collected data into an Excel Spreadsheet.`,
    technologies: ["Python", "DeepLabCut", "Data Analysis"],
  },
];

export const PROJECTS = [
  {
    title: "Stock Market Emulation",
    image: project1,
    description:
      "Acquired proficiency in HTML5, CSS3, and JavaScript for web development. Utilized React.js, Node.js and NoSQL database such as MongoDB to build dynamic and responsive websites. Making API calls to Stocks API named 'AlphaVantage' to get the real time value of stocks and performing buy and sell actions. Used hashing techniques (using bcrypt) and JSON Web token (jwtoken) to be sure of the safety and integrity of the Players, Users and Admin.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Machine Learning Data Analysis with Python",
    image: project2,
    description:
      "Used Python for training and evaluating machine learning models such as Bottom-Line Linear Regression and Logistic Regression. Utilized data preparation techniques such as One-Hot encoding and Normalization to pre-process and analyze datasets.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
  },
  {
    title: "Can't Stop Game using Java",
    image: project3,
    description:
      "Collaborated on the development of the game using JFrame and JSwing frameworks. Designed and implemented graphical user interfaces (GUI) to enhance user experience. Contributed to the creation of interactive gameplay features and functionality.",
    technologies: ["Java", "Swing"],
  },
  {
    title: "Object Detection for Visually Impaired using Python",
    image: project4,
    description:
      "Developed an object detection system which uses CVLib and CV2 model. Utilizes any visual camera source to evaluate and identify the objects shown. Uses GTTS (google translate to speech) and Playsound frameworks to convert the textual feedback from the model into audio (using gTTS) and play it instantly (using playsound).",
    technologies: ["Python", "CVLib", "CV2", "GTTS", "Playsound"],
  },
];

export const CONTACT = {
  address: "St. John's, NL",
  phoneNo: "(709) 986-7557",
  email: "uupreti@mun.ca",
};