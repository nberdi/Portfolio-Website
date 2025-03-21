import blackjack from "../assets/projects/blackjack.jpg";
import flashcard_app from "../assets/projects/flashcard_app.png";
import fruit_catcher from "../assets/projects/fruit_catcher.webp";
import hangman from "../assets/projects/hangman.png";
import powergym from "../assets/projects/powergym.jpg";
import runestone_quiz_grader from "../assets/projects/runestone-quiz-grader.webp";
import project3 from "../assets/projects/portfolio.jpg";

export const INTRODUCTION = `I'm a passionate Computer Science student and aspiring software engineer with a focus on full stack development. I create clean, scalable, and user-friendly web applications using technologies like Python, JavaScript, and React. I love solving real-world problems through code and aim to develop solutions that make a difference. Let's build something impactful together!`;

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
    year: "2024 - Present",
    role: "Teaching Assistant, Software Design & Implementation",
    company: "Berea College Computer Science Department",
    description1: `• Tutor and support 42 students in software design course by grading homework, quizzes, and team projects`,
    description2: `• Utilize strong communication & coding skills to enhance students' understanding & coding proficiency`,
    technologies: ["Python"],
  },
  {
    year: "2022 - 2023",
    role: "Teaching Assistant",
    company: "Bilim-Innovation Lyceum",
    description1: `• Mentored 74 high school students to help them develop personal and academic skills including
    professional communication, public speaking, and time management`,
    description2: `• Taught personal computer skills to high school students including computer shortcuts, the Windows
    operating system, Microsoft Office, and other electronic resources`,
    technologies: ["Microsoft Office"],
  },
];

export const PROJECTS = [
  {
    title: "Blackjack",
    image: blackjack,
    link: "https://nberdi.github.io/BlackJack_Game/",
    description:
      "Blackjack is a card game where players try to get a hand value of 21 or close to it without exceeding 21. Face cards are worth 10, aces are 1 or 11, and other cards are their face value. Players compete against the dealer to have the higher hand without busting.",
    technologies: ["Python", "Pygame"],
    btn: [
      {
        link: "https://github.com/nberdi/BlackJack_Game",
        text: "Code"
      },
      {
        link: "https://nberdi.github.io/BlackJack_Game/",
        text: "Play"
      }
    ]
  },
  {
    title: "Flahscard App",
    image: flashcard_app,
    link: "https://flashcardapp-0njv.onrender.com",
    description:
      "Flashcard App helps users create and study custom flashcards. After signing up and logging in, users can create modules with descriptions, then add, modify, or delete flashcards with questions and answers. It's an easy way to organize and review content for efficient learning.",
    technologies: ["Python", "Flask", "Jinja", "SQLite", "HTML", "CSS", "JavaScript", "Bootstrap"],
    btn: [
      {
        link: "https://github.com/nberdi/Flashcard-App",
        text: "Code"
      },
      {
        link: "https://flashcardapp-0njv.onrender.com",
        text: "Visit"
      }
    ]
  },
  {
    title: "Fruit Catcher",
    image: fruit_catcher,
    link: "https://github.com/nberdi/Fruit-Catcher",
    description:
      "An interactive game developed using Python and Pygame. Players control a bucket to catch falling fruits while avoiding bombs. Each time a fruit is caught, the player earns points. The goal is to collect as many fruits as possible while avoiding bombs and maintaining lives.",
    technologies: ["Python", "Pygame"],
    btn: [
      {
        link: "https://github.com/nberdi/Fruit-Catcher",
        text: "Code"
      },
      // {
      //   link: "https://nberdi.github.io/Fruit-Catcher/",
      //   text: "Play"
      // }
    ]
  },
  {
    title: "Hangman",
    image: hangman,
    link: "https://nberdi.github.io/Hangman/",
    description:
      "Hangman is a word-guessing game where players guess letters to reveal a hidden word. Incorrect guesses add parts to a stick figure, and the game is lost if the figure is completed before the word is guessed. Players aim to guess the word with the fewest mistakes to avoid 'hanging' the stick figure.",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    btn: [
      {
        link: "https://github.com/nberdi/Hangman",
        text: "Code"
      },
      {
        link: "https://nberdi.github.io/Hangman/",
        text: "Play"
      }
    ]
  },
  {
    title: "Power Gym",
    image: powergym,
    link: "https://github.com/nberdi/Power-Gym",
    description:
      "Power Gym offers personalized fitness schedules for weight gain, weight loss, and exercise routines. To obtain your customized plan, simply take our brief quiz, and based on your responses, we'll generate a tailored schedule just for you. Once you have your personalized plan, you can access instructional videos that will guide you through all the recommended exercises, helping you achieve your fitness goals effectively and safely.",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    btn: [
      {
        link: "https://github.com/nberdi/Power-Gym",
        text: "Code"
      },
      {
        link: "https://nberdi.github.io/Power-Gym/index.html",
        text: "Visit"
      }
    ]
  },
  {
    title: "Runestone Quiz Grader",
    image: runestone_quiz_grader,
    link: "https://github.com/nberdi/Runestone-Quiz-Grader",
    description:
    "Runestone Quiz Grader is an automation tool developed in Python to simplify the grading process for quizzes on platforms like Moodle. It efficiently integrates with Google Sheets to handle data storage and analysis, making grading faster, more accurate, and hassle-free.",
    technologies: ["Python", "Selenium", "Google Sheets API", "Moodle", "ChromeDriver"],
    btn: [
      {
        link: "https://github.com/nberdi/Runestone-Quiz-Grader",
        text: "Code"
      }
    ]
  },
  {
    title: "Portfolio Website",
    image: project3,
    link: "https://github.com/nberdi/Portfolio-Website",
    description:
      "My portfolio showcases a collection of my web development projects, highlighting my skills in creating responsive and user-friendly interfaces. Each project is designed to demonstrate my ability to deliver engaging user experiences while effectively solving real-world problems.",
    technologies: ["React", "TypeScript", "HTML", "CSS"],
    btn: [
      {
        link: "https://github.com/nberdi/Portfolio-Website",
        text: "Code"
      }
    ]
  },
];
