import blackjack from "../assets/projects/blackjack.jpg";
import flashcard_app from "../assets/projects/flashcard_app.png";
import fruit_catcher from "../assets/projects/fruit_catcher.webp";
import hangman from "../assets/projects/hangman.png";
import powergym from "../assets/projects/powergym.jpg";
import rso_chatbot from "../assets/projects/rso.png";
import runestone_quiz_grader from "../assets/projects/runestone-quiz-grader.webp";
import portfolio from "../assets/projects/portfolio.jpg";

export const INTRODUCTION = `I'm a Computer Science student at Berea College with experience building web applications that solve real problems. I've developed project management platforms, automated grading systems, and full-stack web apps. I focus on writing clean, functional code and creating tools that help people work more efficiently. Let's build something impactful together!`;

export const ABOUT_TEXT = `I'm a Computer Science major at Berea College and a Teaching Assistant in Software Design & Implementation. I aim to work in an environment that fosters continuous learning and innovation, where I can contribute my AI/ML and software development skills while collaborating with industry experts. I value collaboration and challenging projects that allow me to grow and help the team achieve impactful results. Driven by a passion for creativity, I seek new challenges, whether it's exploring emerging technologies like AI and robotics or engaging in activities that enhance focus and problem-solving. Outside of tech, I pursue interests that stimulate critical thinking and foster unique ideas, offering fresh perspectives for problem-solving.`;

// For About Me section
export const KEYWORDS_ARRAY = [
  "Computer",
  "Science",
  "major",
  "Berea",
  "College",
  "Teaching",
  "Assistant",
  "continuous",
  "learning",
  "innovation,",
  "AI/ML",
  "software",
  "development",
  "collaboration",
  "challenging",
  "projects",
  "creativity,",
  "continuous",
  "AI",
  "robotics",
  "focus",
  "critical",
  "thinking",
  "unique",
  "ideas,",
  "problem-solving.",
];

export const EXPERIENCES = [
  {
    year: "Aug 2025 - Present",
    role: "Recognized Student Organizations Assistant",
    company: "Berea College",
    description1: `• Support all recognized student organizations with event planning and administrative needs, serving the campus community`,
    description2: `• Guide organizations through Berea Engage platform, event submissions, and resource allocation while ensuring policy compliance`,
    technologies: [],
  },
  {
    year: "Jun 2025 - Jul 2025",
    role: "Full-Stack Developer",
    company: "Purdue University",
    description1: `• Architected comprehensive project management platform serving 5000+ students and 100+ peer mentors, eliminating 100% of scheduling conflicts through automated workflow system`,
    description2: `• Built role-based authentication system with 4-tier hierarchy using React, Node.js, PostgreSQL, and Prisma ORM, enabling non-technical staff to manage operations independently`,
    description3: `• Implemented real-time consultation booking system with automated availability tracking, reducing administrative workload by 60% and providing analytics dashboard for project metrics`,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
    ],
  },
  {
    year: "Aug 2024 - May 2025",
    role: "Teaching Assistant, Computer Science Department",
    company: "Berea College",
    description1: `• Data Structures & Algorithms (Spring 2025): Mentored 30+ students in algorithm design and complexity analysis, improving average assignment scores by 15% through targeted tutoring sessions`,
    description2: `• Software Design & Implementation (Fall 2024): Evaluated and provided detailed feedback on 36 students' software projects, emphasizing design patterns and clean code principles`,
    technologies: ["C++", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "Blackjack",
    image: blackjack,
    link: "https://nberdi.github.io/BlackJack_Game/",
    description:
      "Blackjack is a card game where players try to get a hand value of 21 or close to it without exceeding 21. Face cards are worth 10, aces are 1 or 11, and other cards are their face value. Players compete against the dealer to have the higher hand without busting.",
    technologies: ["Pygame"],
    btn: [
      {
        link: "https://github.com/nberdi/BlackJack_Game",
        text: "Code",
      },
      {
        link: "https://nberdi.github.io/BlackJack_Game/",
        text: "Play",
      },
    ],
  },
  {
    title: "Flahscard App",
    image: flashcard_app,
    link: "https://flashcard-app-abtb.onrender.com",
    description:
      "Flashcard App helps users create and study custom flashcards. After signing up and logging in, users can create modules with descriptions, then add, modify, or delete flashcards with questions and answers. It's an easy way to organize and review content for efficient learning.",
    technologies: [
      "Flask",
      "SQLite",
      "JavaScript",
      "Bootstrap",
      "Jinja",
      "HTML",
      "CSS",
    ],
    btn: [
      {
        link: "https://github.com/nberdi/Flashcard-App",
        text: "Code",
      },
      {
        link: "https://flashcard-app-abtb.onrender.com",
        text: "Visit",
      },
    ],
  },
  {
    title: "Fruit Catcher",
    image: fruit_catcher,
    link: "https://github.com/nberdi/Fruit-Catcher",
    description:
      "An interactive game developed using Python and Pygame. Players control a bucket to catch falling fruits while avoiding bombs. Each time a fruit is caught, the player earns points. The goal is to collect as many fruits as possible while avoiding bombs and maintaining lives.",
    technologies: ["Pygame"],
    btn: [
      {
        link: "https://github.com/nberdi/Fruit-Catcher",
        text: "Code",
      },
      // {
      //   link: "https://nberdi.github.io/Fruit-Catcher/",
      //   text: "Play"
      // }
    ],
  },
  {
    title: "Hangman",
    image: hangman,
    link: "https://nberdi.github.io/Hangman/",
    description:
      "Hangman is a word-guessing game where players guess letters to reveal a hidden word. Incorrect guesses add parts to a stick figure, and the game is lost if the figure is completed before the word is guessed. Players aim to guess the word with the fewest mistakes to avoid 'hanging' the stick figure.",
    technologies: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    btn: [
      {
        link: "https://github.com/nberdi/Hangman",
        text: "Code",
      },
      {
        link: "https://nberdi.github.io/Hangman/",
        text: "Play",
      },
    ],
  },
  {
    title: "Power Gym",
    image: powergym,
    link: "https://nberdi.github.io/Power-Gym/index.html",
    description:
      "Power Gym offers personalized fitness schedules for weight gain, weight loss, and exercise routines. To obtain your customized plan, simply take our brief quiz, and based on your responses, we'll generate a tailored schedule just for you. Once you have your personalized plan, you can access instructional videos that will guide you through all the recommended exercises, helping you achieve your fitness goals effectively and safely.",
    technologies: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    btn: [
      {
        link: "https://github.com/nberdi/Power-Gym",
        text: "Code",
      },
      {
        link: "https://nberdi.github.io/Power-Gym/index.html",
        text: "Visit",
      },
    ],
  },
  {
    title: "RSO Chatbot",
    image: rso_chatbot,
    link: "https://bc-rso-chatbot.onrender.com",
    description:
      "A neural network-based chatbot that answers questions about Recognized Student Organizations (RSOs) at Berea College.",
    technologies: ["PyTorch", "Flask", "NLTK", "JavaScript", "HTML", "CSS"],
    btn: [
      {
        link: "https://github.com/nberdi/BC-RSO-Chatbot",
        text: "Code",
      },
      {
        link: "https://bc-rso-chatbot.onrender.com",
        text: "Visit",
      },
    ],
  },
  {
    title: "Runestone Quiz Grader",
    image: runestone_quiz_grader,
    link: "https://github.com/nberdi/Runestone-Quiz-Grader",
    description:
      "Runestone Quiz Grader is an automation tool developed in Python to simplify the grading process for quizzes on platforms like Moodle. It efficiently integrates with Google Sheets to handle data storage and analysis, making grading faster, more accurate, and hassle-free.",
    technologies: ["Python", "Google Sheets API", "Moodle API", "Web Scraping"],
    btn: [
      {
        link: "https://github.com/nberdi/Runestone-Quiz-Grader",
        text: "Code",
      },
    ],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    link: "https://github.com/nberdi/Portfolio-Website",
    description:
      "My portfolio showcases a collection of my web development projects, highlighting my skills in creating responsive and user-friendly interfaces. Each project is designed to demonstrate my ability to deliver engaging user experiences while effectively solving real-world problems.",
    technologies: ["TypeScript", "React", "HTML", "CSS"],
    btn: [
      {
        link: "https://github.com/nberdi/Portfolio-Website",
        text: "Code",
      },
    ],
  },
];
