// ============================================================
//  YOUR PORTFOLIO CONTENT  —  this is the ONLY file you need to edit.
//
//  Rules of the road:
//   • Keep the quotes "like this" around every piece of text.
//   • Keep the commas at the end of each line.
//   • If your text contains a double quote, write it as \"  (or use 'single quotes').
//   • To remove an optional section, set it to an empty list:  []
//   • Save the file and refresh index.html to see your changes.
//   • If the page shows a red error box, you probably deleted a quote or comma.
// ============================================================

const content = {
  // ---------- About you ----------
  name: "Percy Portfolio",
  tagline: "Aspiring software developer & professional thumbs-up giver 👍", // one line under your name

  // Put your photo in the assets/ folder and put its file name here.
  // Square-ish, about 600px wide, under 1 MB works best.
  photo: "assets/photo.jpg",

  // 1–3 sentences: what you care about and what you're looking for.
  mission:
    "I build friendly, useful software and I'm looking for a co-op where I can learn fast, ship real features, and work with people who love teaching.",

  // ---------- Make it yours ----------
  theme: {
    // Pick a look:
    //   "classic" = clean and friendly (the default)
    //   "techy"   = dark terminal vibes, one tab per section (always dark, always monospace)
    //   "fancy"   = big serif headings, an arched photo, swipeable project cards
    style: "classic",

    // Pick a preset: "coral", "ocean", "grape", "forest", "sunset", "bubblegum"
    // ...or use any hex color like "#ff6b9d".
    accent: "ocean",

    // Pick a font: "modern", "serif", "rounded", "mono"
    font: "modern",

    // "auto" follows the visitor's device. You can also force "light" or "dark".
    // (The "techy" look is always dark.)
    mode: "auto",
  },

  // ---------- Links (shown as buttons at the top) ----------
  // For email just write the address, e.g. "you@example.com".
  links: [
    { label: "GitHub", url: "https://github.com/your-username" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/your-name" },
    { label: "Email", url: "percy@example.com" },
  ],

  // ---------- Skills (optional — set to [] to hide) ----------
  skills: ["JavaScript", "Python", "HTML & CSS", "Git", "Java", "SQL"],

  // ---------- Projects ----------
  // Link to the GitHub repo (a live demo is optional — a repo is enough!).
  // tags are optional.
  projects: [
    {
      title: "Study Buddy",
      description: "A web app that matches classmates into study groups based on courses and schedules.",
      url: "https://github.com/your-username/study-buddy",
      tags: ["JavaScript", "Node.js"],
    },
    {
      title: "Campus Eats",
      description: "A command-line tool that picks where to eat on campus using a very scientific coin flip.",
      url: "https://github.com/your-username/campus-eats",
      tags: ["Python"],
    },
    {
      title: "Habit Tracker",
      description: "A tiny mobile-friendly habit tracker that works offline.",
      url: "https://github.com/your-username/habit-tracker",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ],

  // ---------- Education ----------
  education: [
    {
      school: "Example College",
      degree: "Diploma, Computer Programming",
      years: "2024 – 2027",
      details: "Relevant courses: Data Structures, Databases, Web Development.", // optional
    },
  ],

  // ---------- Work experience (optional — set to [] to hide) ----------
  experience: [
    {
      role: "Peer Tutor",
      org: "Example College Learning Centre",
      years: "2025 – present",
      description: "Help first-year students debug their programming assignments.",
    },
  ],

  // ---------- Extracurriculars (optional — set to [] to hide) ----------
  extracurriculars: [
    {
      role: "Executive Lead",
      org: "Google Developer Group on Campus",
      years: "2025 – present",
      description: "Run workshops and events for student developers.",
    },
  ],
};
