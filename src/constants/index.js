import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer currently pursuing a Bachelor of Science in Computer Science at Memorial University of Newfoundland. With a strong foundation in Java, Python, Full Stack Web Development, Data Structures and Algorithms, Artificial Intelligence, Machine Learning, and Deep Learning, I am eager to apply my skills in real-world projects.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    period: "June 2024 - August 2024",
    role: "Backend Developer Intern",
    company: "Sparrow RMS",
    description: `Developed APIs for integration with front-end components and third-party services using ASP.NET Core. Optimized database queries to improve performance with SQL Server. Collaborated with cross-functional teams to design and implement new features.`,
    technologies: ["ASP.NET Core", "SQL Server", "API Development"],
  },
  {
    period: "May 2024 - Present",
    role: "Web Developer",
    company: "Memorial University - Department of Emergency Medicine",
    description: `Developed a responsive company profile website using Next.js and Tailwind CSS to showcase organizational information. Created a visually appealing landing page with modern front-end technologies, enhancing user engagement and accessibility.`,
    technologies: ["Next.js", "Tailwind CSS", "Front-end Development"],
  },
  {
    period: "May 2024 - Present",
    role: "Math Tutor",
    company: "Memorial University - Math Help Centre",
    description: `Provided tutoring support at the Math Help Centre, assisting students with Precalculus, Trigonometry, Calculus, and Linear Algebra. Facilitated understanding of complex mathematical concepts, enhancing student performance through personalized guidance and problem-solving strategies.`,
    technologies: ["Mathematics", "Tutoring", "Problem-Solving"],
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