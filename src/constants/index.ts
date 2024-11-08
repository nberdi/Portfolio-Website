import blackjack from "../assets/projects/blackjack.jpg";
import hangman from "../assets/projects/hangman.jpg";
import powergym from "../assets/projects/powergym.jpg";
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
    link: "https://github.com/nberdi/BlackJack_Game",
    description:
      "Blackjack is a card game where players try to get a hand value of 21 or close to it without exceeding 21. Face cards are worth 10, aces are 1 or 11, and other cards are their face value. Players compete against the dealer to have the higher hand without busting.",
    technologies: ["Python"],
  },
  {
    title: "Hangman",
    image: hangman,
    link: "https://nberdi.github.io/Hangman/",
    description:
      "Hangman is a word-guessing game where players guess letters to reveal a hidden word. Incorrect guesses add parts to a stick figure, and the game is lost if the figure is completed before the word is guessed. Players aim to guess the word with the fewest mistakes to avoid 'hanging' the stick figure.",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Power Gym",
    image: powergym,
    link: "https://github.com/nberdi/Power_Gym",
    description:
      "Power Gym offers personalized schedules for weight gain and exercise routines. To obtain a schedule, a user can take a brief quiz, and based on their responses, the website will generate a customized plan for them. Subsequently, the user can access and watch instructional videos to guide them through the recommended exercises.",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    link: "",
    description:
      "My portfolio showcases a collection of my web development projects, highlighting my skills in creating responsive and user-friendly interfaces. Each project is designed to demonstrate my ability to deliver engaging user experiences while effectively solving real-world problems.",
    technologies: ["React", "TypeScript", "HTML", "CSS"],
  },
];
