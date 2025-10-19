export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Healers - Music Streaming Platform",
    description: "A mental health awareness and therapy booking platform where users can connect with certified therapists, explore resources, and schedule online sessions securely.",
    image: "/images/healers.png",
    technologies: ["React", "Tailwind CSS", "Firebase", "Node.js"],
    liveUrl: "https://healers1.netlify.app/",
    githubUrl: "https://github.com/Aiman03-del/Healers"
  },
  {
    id: "2",
    title: "MasterChef - Recipe Sharing App",
    description: "A recipe sharing web app where users can browse delicious dishes, see chefs' special recipes, and explore cooking inspirations with dynamic data loading.",
    image: "/images/masterChef.png",
    technologies: ["React", "Firebase Auth", "Express", "MongoDB"],
    liveUrl: "https://masterchef-1.netlify.app/",
    githubUrl: "http://github.com/Aiman03-del/Master-chef"
  },
  {
    id: "3",
    title: "ParcelEase - Delivery Management System",
    description: "A parcel delivery management platform built for efficient booking, tracking, and assigning delivery agents — featuring role-based dashboards for admins and users.",
    image: "/images/parcelease.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://parcel-ease.netlify.app/",
    githubUrl: "https://github.com/Aiman03-del/parcel-ease"
  },
  {
    id: "4",
    title: "Mahi Bakery - Daily Expense & Profit Tracker",
    description: "A bakery management tool that tracks ingredient usage, daily expenses, and profits automatically with persistent due calculations across days.",
    image: "/images/sportifyGear.png",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://mahibakery.netlify.app/",
    githubUrl: "https://github.com/Aiman03-del/mahi-backery-clean"
  },
  {
    id: "5",
    title: "Brainiacs - Team Collaboration Tool",
    description: "A real-time collaboration tool featuring chat, polls, and board creation for teams — including task management and board visibility options.",
    image: "/images/brainiacsImage.png",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://brainiacs1.netlify.app/",
    githubUrl: "https://github.com/AsadEducation/Brainiacs-Team-Collaboration"
  },
  {
    id: "6",
    title: "Career Counseling - Guidance Platform",
    description: "An online career counseling web app that helps students and professionals connect with mentors and get personalized guidance for their career paths.",
    image: "/images/careerCounceling.png",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://gregarious-churros-c2a505.netlify.app/",
    githubUrl: "https://github.com/AsadEducation/Career-Counseling"
  }
];
