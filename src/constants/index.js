import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpeg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpeg";

export const HERO_CONTENT = `I am in my final year of the Computer Science B-Tech program at Alliance University, specializing in
                Artificial Intelligence and Machine Learning. As a software developer and aspiring data engineer with
                Java as my primary language, I have a strong foundation in programming and a passion for continuous
                learning and excellence. My strengths lie in logical reasoning and problem-solving. I am eager to learn
                new technologies and languages to stay adaptable and current in the ever-evolving tech landscape.`;

export const ABOUT_TEXT = `I am in my final year of the Computer Science B-Tech program at Alliance University, specializing in Artificial Intelligence and Machine Learning. 
As a software developer and aspiring data engineer, Java is my primary language, and I have a strong foundation in programming.
My strengths include logical reasoning, problem-solving, and a genuine passion for continuous learning.
I am committed to achieving excellence and staying adaptable in the ever-evolving tech landscape.
I am always eager to learn new technologies and languages to further expand my skill set.
I have developed multiple projects using Java, Spring Boot, React, and databases like MySQL, demonstrating my ability to build full-stack applications.
Additionally, I have hands-on experience with data analytics tools such as Power BI and Python libraries like Pandas and Scikit-learn.
I am passionate about leveraging technology to solve real-world problems and am excited to contribute to innovative solutions in the field of data engineering.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - July 2024",
    role: "Machine Learning Intern, Intel-HPC",
    company: "Alliance University, Center of Excellence",
    description: `During my internship at Intel HPC, I worked on advanced machine learning models, focusing on tools like DAAL, RAAN, Scikit-Learn, and MKL. My primary project was "Apply Linear Classification Model for Stroke Prediction," where I developed a model to predict stroke likelihood based on health and demographic data. This experience enhanced my understanding of HPC frameworks and large-scale data processing. I collaborated with experts, gaining valuable insights into optimization techniques. The internship strengthened my problem-solving skills and deepened my interest in machine learning and high-performance computing.`,
    technologies: ["Python", "Machine learning", "Scikit-Learn", "Intel-MKL"],
  },
  {
    year: "Oct 2023 - Nov 2023",
    role: "Machine Learning Intern",
    company: "Intern Pe",
    description: `Developed machine learning models for several applications, including as diabetes prediction, IPL score prediction,
                  and breast cancer detection. During a remote internship with Intern Pe, I gained hands-on experience in remote collaboration and project
                  management.`,
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Kaggle"],
  },
  {
    year: "Sept 2023 - Oct 2023",
    role: "Machine Learning Intern",
    company: "Bharat Intern",
    description: `Designed a reliable machine learning model for predicting property prices, showcasing expertise in regression
        approaches. Successfully managed duties and deadlines in a remote work situation, exhibiting great communication skills.`,
    technologies: ["Python", "Machine Learning", "Scikit-Learn", "Kaggle"],
  },
];

export const PROJECTS = [
  {
    title: "Healthcare App with Integrated Chatbot",
    image: project1,
    description: `I developed my first healthcare app using Java over 3.5 months. It features a chatbot with the
                        free ChatGPT API and uses an SQLite database, along with additional functionalities from various
                        free ChatGPT APIs. Check out the project and share your feedback on my GitHub page!`,
    link: "https://github.com/rachit2022/Healthcare-App-with-Integrated-ChatBot",
    technologies: [
      "Java",
      "XML",
      "SQLite",
      "Firebase",
      "ChatGPT API Integration",
    ],
  },
  {
    title: "Employee Management System",
    image: project6,
    description: `The Employee Management System is a full-stack web application designed to manage employee records efficiently. This application provides functionalities for adding, deleting, updating, and viewing employee information in a tabular format.`,
    link: "https://github.com/rachit2022/Employee-Management-System",
    technologies: [
      "React.Js",
      "Bootstrap",
      "SpringBoot",
      "MySQl",
      "Axios",
      "Postman",
    ],
  },
  {
    title: "University Management System",
    image: project2,
    description: `My latest project is a University Management System using Java Swing for the user interface. The
                        backend is managed with MySQL for efficient data storage and retrieval.`,
    link: "https://github.com/rachit2022/University-Management-System",
    technologies: ["Java", "Swing", "Applet", "MySQL", "JDBC"],
  },
  {
    title: "Banking Management System",
    image: project4,
    description: `This is my first Java project utilizing Java Swing for the user interface. The backend employs
                        MySQL to store and manage user data, providing information as needed.`,
    link: "https://github.com/rachit2022/Banking-Management-System",
    technologies: ["Java", "Swing", "Applet", "MySQL", "JDBC"],
  },
  {
    title: "HR-Analytics Dashboard",
    image: project3,
    description: `I developed my first HR Analytics Dashboard using Power BI, where I honed skills in data cleaning
                        and analysis. This project sparked my passion for data analytics, and I'm eager to explore
                        further opportunities in the field.`,
    link: "https://github.com/rachit2022/HR-Analytics-Dashboard",
    technologies: ["Python", "MS-Excel", "Kaggle", "Power-BI"],
  },
  {
    title: "Calci-Hub All In One Calculator",
    image: project5,
    description: `My "Calci Hub" project is an all-in-one calculator built with HTML, CSS, and JavaScript. It
                        includes five types of calculators-normal, scientific, age, and unit. The design features
                        interactive elements for a great user experience.`,
    link: "https://github.com/rachit2022/Calci-Hub-All-in-One-Calculator",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const CONTACT = {
  address:
    "VBHC Vaibhava Apartment Block 28-105, Chandapura-Anekal road, Bangalore",
  phoneNo: "+91-8318868858",
  email: "rachitrajgupta2020@gmail.com",
};
