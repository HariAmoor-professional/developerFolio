/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hari Amoor",
  title: "Hi all, I'm Hari",
  subTitle: emoji(
    "A software engineer+architect who, aside from being a jack-of-all-trades developer, specializes in formal methods engineering in high-assurance and performance-critical settings"
  ),
  resumeLink:
    "https://registry.jsonresume.org/HariAmoor-professional", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/HariAmoor-professional",
  gmail: "professional@hariamoor.me",
  medium: "https://medium.com/@hari-amoor",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Haskell-supremacist with experience in formal methods engineering, systems programming, and [backend] web development",
  skills: [
    emoji(
      "⚡ Design, implementation, and analysis of high-assurance software which generally guarantees certain formal, i.e., mathematical, properties in its executable form"
    ),
    emoji("⚡ Systems engineering, i.e., the development of software with a resource-constrained execution environment (e.g., in terms of throughput, memory, power)"),
    emoji(
      "⚡ Full-stack (mainly backend) web development, usually involving various disparate data sources and sinks across an enterprise cloud"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Haskell",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education 

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rutgers University",
      logo: require("./assets/images/rutgersLogo.png"),
      subHeader: "B.S. in Computer Science and Mathematics",
      duration: "September 2017 - May 2021",
      desc: "Completed Bachelor's degree with double major and several graduate-level courses in each department, e.g.:",
      descBullets: [
        "Programming Languages & Compilers",
        "Operating Systems",
        "Advanced Data Management",
        "Computer Networks",
        "Real Analysis",
        "Linear+Abstract Algebra",
        "Graph Theory",
        "Combinatorics",
        "Finite Field Theory"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Formal Methods Engineering", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Systems Engineering",
      progressPercentage: "85%"
    },
    {
      Stack: "Web Development",
      progressPercentage: "100%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Architect",
      company: "MLabs Consulting Group",
      companylogo: require("./assets/images/mlabsLogo.png"),
      date: "Feb. 2022 - Aug. 2022",
      desc: "Senior engineer and technical lead role across several projects, both internal and client-facing",
      descBullets: [
        "Spearheaded the design and correctness+security analysis of the deliverable(s) for a high-priority client",
        "Executed a leadership role which required extensive client-interaction and mentorship (e.g., code review) for junior engineers",
        "Bootstrapped a systems engineering initiative across MLabs' clientele for enterprise-grade hardware security in using Cardano (still in R&D-phase)"
      ]
    },
    {
      role: "Software Engineer",
      company: "Cloutics, Inc.",
      companylogo: require("./assets/images/clouticsLogo.png"),
      date: "Sept. 2021 - Jan. 2022",
      desc: "Junior engineer implementing formally-verified tools for the classification of financial assets",
      descBullets: [
        "Served a consulting company that is engaged with clients in the global financial services industry",
        "Assisted in the design and implementation of a formally-verified ISDA classification tool for financial assets (e.g., securities vs. commodities vs. derivatives)",
        "Supported the development of an in-house formal specification language designed to be similar to the Coq ecosystem"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "MongoDB, Inc.",
      companylogo: require("./assets/images/mongodbLogo.png"),
      date: "Jun. 2020 - Aug. 2020",
      desc: "Participated in the Enterprise Tools team, which was responsible for the MongoDB BI Connector interface (a SQL-like ODBC runtime over MongoDB)"
    },
    {
      role: "Software Engineer Intern",
      company: "Meta, Inc.",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2019 - Aug. 2019",
      desc: "Interned on Core Health team, responsible for crash analytics across Facebook's various Android apps"
    }
  ]
};
/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to chat? My inbox is open to all!",
  number: "+1 (848) 482-1973",
  email_address: "professional@hariamoor.me"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
