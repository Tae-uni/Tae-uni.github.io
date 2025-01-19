import pinpoint from '../assets/pin_project.png';
import snap from '../assets/snap_project.png';

import pinpoint_intro from '../assets/pinpoint_intro.png';
import pinpoint_login from '../assets/pinpoint_login.png';
import pinpoint_main from '../assets/pinpoint_main.png';
import pinpoint_group from '../assets/pinpoint_group.png';

export const ABOUT_CONTENT = [
  `I am an open-minded Full-Stack Developer. On the front end, I work with React and Next.js, while on the back end, I specialize in Express.js, Node.js, and MongoDB.`,
  `What excites me most as a developer is not just writing code, but solving problems and growing through the process.`,
  `I am looking forward to collaborating with global teams in diverse environments. My ultimate goal is to become a developer who grows with the team by leveraging my skills and passion.`,
]

// export const ABOUT_TEXT = 
// `Hello! I am Taekwon, a Full-Stack Developer specializing in modern web technologies.
// I aim to solve problems and create solutions that make a difference, whether working on personal projects or collaborating with a team. My goal is to continue learning, growing and building impactful projects.
// During the "PinPoint Meet You" project, gave me valuable insights into the importance of adaptability, dedication, and open communication. This experience shaped my growth as a leader and collaborator. Strengthening my belief in teamwork and inspiring me to contribute to diverse teams where shared goals drive meaningful innovation.`

// During the "PinPoint Meet You" project, I took on the role of team leader while being new to web development myself. Leading a team of non-developers, I focused on fostering collaboration, learning new technologies, and ensuring that everyone contributed to the project’s success.

// Although the journey was challenging, it taught me the value of adaptability, perseverance, and effective communication. This experience shaped my ability to lead and collaborate, reinforcing my belief in the power of shared growth. I am excited to bring this mindset to global teams, where diverse perspectives and collective effort drive innovation.`

export const PROJECTS = [
  {
    title: "PinPoint Meet You",
    image: pinpoint,
    description: "A map-based meeting app to facilitate student gatherings.",
    detail: "PinPoint Meet You is a location-based meeting app that connects students with similar interests. Users can create events, view nearby events, and chat with other users. The app aims to help students build connections and foster a sense of community.",
    features: [
      "Location-based matching",
      "Profile Management",
      "Event Management",
    ],
    status: "🟢 Completed",
    type: "👥 Team Project",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/Tae-uni/PinPoint_Meet_You",
    images: [
      pinpoint_intro,
      pinpoint_login,
      pinpoint_main,
      pinpoint_group,
    ],
  },
  {
    title: "SnapJournal",
    image: snap,
    description: "A journaling app with photo metadata analysis.",
    detail: "SnapJournal is a journaling app that allows users to upload photos and write journal entries. The app analyzes the metadata of uploaded. SnapJournal aims to help users reflect on their memories and emotions.",
    features: [
      "Photo Upload",
      "Journal Entry",
      "Metadata Analysis",
    ],
    status: "🔴 In Progress",
    type: "👤 Personal Project",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    github: "https://github.com/Tae-uni/snapjournal",
    images: [],
  },
]

export const CONTACT = {
  email: "taekwon.kim.dev@gmail.com",
  address: "Andong, South Korea",
  whatsapp: "+447308579623",
}