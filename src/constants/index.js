import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer currently pursuing a Bachelor of Science in Computer Science at Memorial University of Newfoundland. With a strong foundation in Java, Python, Full Stack Web Development, Data Structures and Algorithms, Artificial Intelligence, Machine Learning, and Deep Learning, I am eager to apply my skills in real-world projects.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    period: "May 2025 – September 2025",
    role: "ML Research Intern",
    company: "Memorial University – Department of Psychology",
    description: `Developed a pupillometry-based machine learning pipeline in Python/R to classify memory intrusions. Processed millions of time-series datapoints, implemented feature engineering, and applied cross-validation to ensure reproducibility. Collaborated with faculty using an Agile workflow, presenting results and iterating on models.`,
    technologies: ["Python", "R", "Machine Learning", "Time-Series Analysis"],
  },
  {
    period: "May 2024 – April 2025",
    role: "Web Developer",
    company: "Memorial University – Department of Emergency Medicine",
    description: `Developed responsive web applications using Next.js and Tailwind CSS. Integrated REST APIs and backend services, improving usability for medical research teams. Enhanced accessibility, optimized load times by ~30%, and maintained modular, testable code using Git and code reviews.`,
    technologies: ["Next.js", "Tailwind CSS", "REST APIs", "Web Performance"],
  },
  {
    period: "June 2024 – August 2024",
    role: "Backend Developer Intern",
    company: "Sparrow RMS",
    description: `Built and maintained backend services using C# and ASP.NET Core with a focus on scalability and maintainability. Optimized SQL Server queries and indexing to improve response times. Participated in Agile ceremonies, contributed to design discussions, and conducted debugging, testing, and documentation.`,
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Backend Development"],
  },
  {
    period: "May 2024 – Present",
    role: "Math Tutor",
    company: "Memorial University – Math Help Centre",
    description: `Provided tutoring support in Precalculus, Calculus, Linear Algebra, and Trigonometry. Helped students understand complex mathematical concepts through personalized guidance and structured problem-solving strategies.`,
    technologies: ["Mathematics", "Tutoring", "Academic Support"],
  },
];



export const PROJECTS = [
  {
    title: "GradeSnap – AI-Powered Exam Grading Web App",
    image: project1, // update with your actual image
    description:
      "Developing an AI-driven grading system that uses Computer Vision to scan handwritten test papers and automatically generate corrected, structured outputs. Implemented image preprocessing, contour detection, and OCR-based content extraction. Currently building a full-stack workflow to upload papers, process them, and return graded feedback.",
    technologies: ["Python", "OpenCV", "OCR", "Computer Vision", "React/Next.js"],
  },
  {
    title: "Atlantic Emergency Research Organization Website",
    image: project2, // replace with correct image
    description:
      "Designed and developed a modern, mobile-first website for a medical research organization using Next.js and Tailwind CSS. Integrated backend APIs, optimized accessibility, improved performance by ~30%, and deployed analytics to track user engagement.",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript", "REST APIs"],
  },
  {
    title: "Restaurant Management Database Application",
    image: project3,
    description:
      "Built a full-stack system for inventory, orders, and sales. Implemented REST APIs with Node.js and MySQL, designed efficient database schemas, and developed an interactive React frontend for staff operations. Ensured fast query performance and smooth user interactions.",
    technologies: ["React", "Node.js", "MySQL", "REST APIs"],
  },
  {
    title: "Stock Market Emulation Platform",
    image: project4,
    description:
      "Created a trading simulation app that fetches real-time market data using Alpha Vantage API. Implemented secure authentication using JWT and bcrypt. Built a responsive React interface and Node.js backend, enabling users to simulate buying and selling stocks.",
    technologies: ["React", "Node.js", "MongoDB", "Alpha Vantage API", "JWT"],
  },
  // {
  //   title: "Object Detection for the Visually Impaired",
  //   image: project5,
  //   description:
  //     "Developed a real-time object detection tool using CVLib and OpenCV. Integrated text-to-speech (gTTS) and Playsound to convert model predictions into immediate audio feedback, assisting visually impaired users with environmental awareness.",
  //   technologies: ["Python", "CVLib", "OpenCV", "gTTS"],
  // },
  // {
  //   title: "Machine Learning Data Analysis",
  //   image: project6,
  //   description:
  //     "Performed machine learning experiments in Python using regression and classification models. Applied preprocessing techniques such as one-hot encoding and normalization to analyze datasets and evaluate model performance.",
  //   technologies: ["Python", "Machine Learning", "Data Analysis"],
  // }
];


export const CONTACT = {
  address: "St. John's, NL",
  phoneNo: "(709) 986-7557",
  email: "uupreti@mun.ca",
};