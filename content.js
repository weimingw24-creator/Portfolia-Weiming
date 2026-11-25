// ============================================================
//  PORTFOLIO CONTENT — Weiming Wang
//  Replace your template's content.js with this file, keep assets/photo.jpg.
// ============================================================

const content = {
  // ---------- About you ----------
  name: "Weiming Wang",
  tagline: "Computer Science @ Conestoga College · seeking a Summer 2027 software engineering internship",

  // Drop a square-ish photo (about 600px wide, under 1 MB) into assets/.
  photo: "assets/Weiming.jpg",

  mission:
    "I'm a Computer Science student in Waterloo who likes code that holds up under testing — bill-splitting and calendar programs written in C# and C, with unit tests, clear models and no loose ends. I'm looking for a Summer 2027 software engineering internship where I can ship real features and learn from a team that reviews code honestly.",

  // ---------- Make it yours ----------
  theme: {
    // "classic" = clean and friendly · "techy" = dark terminal · "fancy" = big serif, arched photo
    style: "classic",

    // Presets: "coral", "ocean", "grape", "forest", "sunset", "bubblegum" — or any hex color.
    accent: "#1f6feb",

    // "modern", "serif", "rounded", "mono"
    font: "modern",

    // "auto" follows the visitor's device; you can force "light" or "dark".
    mode: "auto",
  },

  // ---------- Links ----------
  links: [
    { label: "GitHub", url: "https://github.com/weimingw24-creator" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/weiming-wang-56b21a2a5" },
    { label: "Email", url: "wwang4570@conestogac.on.ca" },
  ],

  // ---------- Skills ----------
  skills: [
    "C#",
    "C",
    "C++",
    "Python",
    "JavaScript",
    "HTML & CSS",
    "MySQL",
    "Git & GitHub",
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
  ],

  // ---------- Projects ----------
  // Swap the url for the real repo link once each project has one.
  projects: [
    {
      title: "Lunch Split System",
      description:
        "Bill splitter built in C# on .NET 8 with MVC. Models Bill, Attendee and Share as immutable records, handles tips and weighted shares, and reconciles pennies so the shares always add up to the grand total — covered by 27 MSTest unit tests.",
      url: "https://github.com/weimingw24-creator",
      tags: ["C#", ".NET 8", "MSTest", "TDD"],
    },
    {
      title: "Calendar System",
      description:
        "C program for events and reminders. Full CRUD with date validation, a file-based store so data survives between sessions, a fixed-size array capped at 200 events, and a built-in test suite for add, update, delete, save and load.",
      url: "https://github.com/weimingw24-creator",
      tags: ["C", "File I/O", "Testing"],
    },
    {
      title: "Autonomous Vehicle Research",
      description:
        "Independent November 2024 study of hybrid frameworks that pair deep neural networks with dynamic system theory for driving, combining data-driven learning with model-based control to improve vehicle state estimation and trajectory tracking.",
      url: "https://github.com/weimingw24-creator",
      tags: ["Deep Learning", "Control Systems", "Research"],
    },
  ],

  // ---------- Education ----------
  education: [
    {
      school: "Conestoga College",
      degree: "Bachelor of Computer Science",
      years: "Sep 2025 – Spring 2028 (expected)",
      details:
        "Relevant courses: Database Systems, Software Development Life Cycle, System Analysis & Design, Object-Oriented Programming, Computer Networks.",
    },
    {
      school: "St. Joseph College School, Toronto",
      degree: "Ontario Secondary School Diploma (OSSD)",
      years: "Sep 2021 – Jun 2025",
      details: "Five years studying in Canada.",
    },
  ],

  // ---------- Work experience ----------
  experience: [
    {
      role: "IT Club",
      org: "Conestoga College",
      years: "Sep 2026 – present",
      description:
        "Take part in campus tech workshops and peer tech support alongside coursework in software development.",
    },
    {
      role: "Research Project",
      org: "Deep Neural Networks & Dynamic Systems for Autonomous Vehicles",
      years: "Nov 2024",
      description:
        "Studied hybrid DNN / dynamic-system frameworks for autonomous driving, pairing data-driven learning with model-based control to improve state estimation and trajectory tracking.",
    },
    {
      role: "Bookkeeper",
      org: "St. Joseph College School",
      years: "Apr 2023 – Jun 2023",
      description:
        "Maintained bookkeeping records and reconciled accounts; kept entries accurate and on time.",
    },
  ],

  // ---------- Extracurriculars ----------
  // IT Club is already listed under experience, so this stays hidden.
  extracurriculars: [],
};
