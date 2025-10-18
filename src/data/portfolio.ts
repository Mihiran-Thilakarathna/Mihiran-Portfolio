import type { Project, WorkExperience, Education, Certification, Skill } from '../types';

// Import project images
import portfolioImage from '../assets/portfolio.jpg';
import aiChatImage from '../assets/AI-Chat-Assistant.jpg';
import calculatorImage from '../assets/calculator.avif';
import fioraEditorImage from '../assets/fiora editor.png';
import personalOrganizerImage from '../assets/Personal-organizer.webp';
import opalMuseImage from '../assets/opal-muse.jpg';
import moodMusicImage from '../assets/mood.jpg';

export const personalInfo = {
  name: 'Mihiran Thilakarathna',
  tagline: ['AI/ML Enthusiast', 'Full Stack Developer', 'IT Undergraduate'],
  bio: 'Passionate IT undergraduate at Rajarata University of Sri Lanka, focused on building intelligent systems with AI, Machine Learning, and modern web technologies.',
  email: 'thmthilakarathna@gmail.com',
  phone: '+94 76 045 3356',
  telegram: '+94760453356',
  messenger: 'mihiranthilakarathna',
  discord: 'mihiranthilakarathna',
  location: 'Sri Lanka',
  github: 'https://github.com/Mihiran-Thilakarathna',
  linkedin: 'https://www.linkedin.com/in/mihiran-thilakarathna-9478302a8',
  kaggle: 'https://www.kaggle.com',
  twitter: 'https://twitter.com',
  facebook: '#',
  instagram: '#',
  medium: '#',
  footerBio: 'Building intelligent solutions with AI, ML, and modern web technologies.',
  profileViews: 0,
  profileViewsUpdatedAt: '2025-10-19T00:00:00+05:30',
};

export const skills: Skill[] = [
  { name: 'Python', icon: 'FaPython' },
  { name: 'TensorFlow', icon: 'SiTensorflow' },
  { name: 'PyTorch', icon: 'SiPytorch' },
  { name: 'Scikit-learn', icon: 'SiScikitlearn' },
  { name: 'React', icon: 'FaReact' },
  { name: 'JavaScript', icon: 'SiJavascript' },
  { name: 'TypeScript', icon: 'SiTypescript' },
  { name: 'Node.js', icon: 'FaNodeJs' },
  { name: 'Flask', icon: 'SiFlask' },
  { name: 'MongoDB', icon: 'SiMongodb' },
  { name: 'MySQL', icon: 'SiMysql' },
  { name: 'Firebase', icon: 'SiFirebase' },
  { name: 'Git', icon: 'FaGitAlt' },
  { name: 'Docker', icon: 'FaDocker' },
  { name: 'HTML5', icon: 'FaHtml5' },
  { name: 'CSS3', icon: 'FaCss3Alt' },
];

export const stats = {
  yearsExperience: '2+',
  projects: '10+',
  repos: '12+',
};

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    company: 'Nena Sewana Educational Institute',
    role: 'O/L ICT Tutor',
    startDate: 'Jan 2024',
    endDate: 'Aug 2024',
    location: 'Gethetta,Sri Lanka',
    description: 'Taught ICT fundamentals to O/L students, covering computer basics, programming concepts, and digital literacy. Developed engaging lesson plans and practical exercises to help students understand technology and prepare for their examinations. Mentored students in problem-solving and computational thinking.',
    current: false,
  },
  {
    id: 2,
    company: 'Peoples Bank',
    role: 'Trainee',
    startDate: 'Dec 2022',
    endDate: 'Jul 2023',
    location: 'Avissawella, Sri Lanka',
    description: "Before entering university, I had the opportunity to work as a trainee at the People's Bank of Sri Lanka. During this six-month training program, I gained valuable hands-on experience in banking operations, customer service, and financial documentation. This experience strengthened my communication, teamwork, and professional skills, giving me a strong foundation for my future academic and career journey.",
    current: false,
  },
  
];

export const education: Education[] = [
  {
    id: 1,
    institution: 'Rajarata University of Sri Lanka',
    degree: 'Bachelor of Information and Communication Technology',
    startDate: '2022',
    endDate: '2026',
    status: 'ONGOING',
  },
  {
    id: 2,
    institution: 'Eheliyagoda National School',
    degree: 'G.C.E. Advanced Level',
    startDate: '2019',
    endDate: '2021',
    status: 'COMPLETED',
  },
  {
    id: 3,
    institution: 'Eheliyagoda National School',
    degree: 'G.C.E. Ordinary Level',
    startDate: '2009',
    endDate: '2018',
    status: 'COMPLETED',
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: ' Google AI Essentials',
    provider: 'Coursera',
    date: 'Sep 2025',
    certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/0DVLMU9D8SU9',
  },
  {
    id: 2,
    title: 'AI Security & Governance',
    provider: 'Securiti',
    date: 'Sep 2025',
    certificateUrl: 'https://education.securiti.ai/verification/13EF93075-13EF92EE4-1336A0CFD/',
  },
  {
    id: 3,
    title: 'ReactJs - The Complete ReactJs Course For Beginners',
    provider: 'Udemy',
    date: 'Jun 2025',
    certificateUrl: 'https://www.udemy.com/certificate/UC-fb6ef630-23d6-49ca-8cbc-4bb09ba407b8/',
  },
  {
    id: 4,
    title: 'SQL (Intermediate) Certificate',
    provider: 'HackerRank',
    date: 'Aug 2024',
    certificateUrl: 'https://www.hackerrank.com/certificates/a193c5d67ada',
  },
  {
    id: 5,
    title: 'Mastering C & C++ Programming: From Fundamentals to Advanced',
    provider: 'Udemy',
    date: 'Jun 2024',
    certificateUrl: 'https://www.udemy.com/certificate/UC-6270438e-d952-484d-82dd-636b972d666c/',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio Website',
    date: 'October 2025',
    description: 'A modern, responsive portfolio showcasing AI/ML and software development projects. Features smooth animations with Framer Motion, theme switching (default/light/dark), multi-category project filtering, and automated GitHub Pages deployment.',
    image: portfolioImage,
    categories: ['Web Application'],
    tags: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'CSS Modules', 'GitHub Pages'],
    liveUrl: 'https://mihiran-thilakarathna.github.io/Mihiran-Portfolio/',
    codeUrl: 'https://github.com/Mihiran-Thilakarathna/Mihiran-Portfolio.git',
  },
  {
    id: 2,
    title: 'AI Chat Assistant',
    date: 'October 2025',
    description: 'A modern Android chat app powered by Google Gemini AI, featuring real-time conversations and synced chat history using Firebase Firestore.',
    image: aiChatImage,
    categories: ['AI/ML', 'Mobile Application'],
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase Firestore', 'Google Gemini AI'],
    liveUrl: 'https://github.com/Mihiran-Thilakarathna/AI-Chat-Assistant/releases',
    codeUrl: 'https://github.com/Mihiran-Thilakarathna/AI-Chat-Assistant.git',
  },
  {
    id: 3,
    title: 'Java Swing Calculator',
    date: 'September 2025',
    description: 'A simple yet stylish desktop calculator built with Java 17 and Swing. Supports basic arithmetic operations, percentage, square root, and sign toggle with a clean, fixed-size UI.',
    image: calculatorImage,
  categories: ['Desktop Application'],
    tags: ['Java', 'Swing', 'Maven', 'IntelliJ IDEA'],
    liveUrl: 'https://github.com/Mihiran-Thilakarathna/Calculator/releases',
    codeUrl: 'https://github.com/Mihiran-Thilakarathna/Calculator.git',
  },
  {
    id: 4,
    title: 'Fiora Video Editor',
    date: 'August 2025',
    description: 'A modern desktop video editor built for the ICT2210 Mini Project, featuring real-time preview, interactive timeline, trimming, light and color adjustments, and one-click filters with export support.',
    image: fioraEditorImage,
  categories: ['Desktop Application'],
    tags: ['Python', 'OpenCV', 'MoviePy', 'Tkinter'],
    liveUrl: 'https://github.com/Mihiran-Thilakarathna/FioraVideoEditor/releases',
    codeUrl: 'https://github.com/Mihiran-Thilakarathna/FioraVideoEditor.git',
  },
  {
    id: 5,
    title: 'Personal Organizer Application',
    date: 'July 2025',
    description: 'A Qt-based desktop application developed in C++ with SQLite integration. Helps users manage income, expenses, budgets, and academic schedules with modern UI and financial reports.',
    image: personalOrganizerImage,
  categories: ['Desktop Application'],
    tags: ['C++', 'Qt', 'SQLite', 'Finance Tracker'],
    liveUrl: 'https://github.com/Mihiran-Thilakarathna/PersonalOrganizer/releases',
    codeUrl: 'https://github.com/Mihiran-Thilakarathna/PersonalOrganizer.git',
  },
  {
    id: 6,
    title: 'Opal Muse Clothing Website',
    date: 'June 2025',
    description: 'A fully functional clothing shop website built with HTML, CSS, JavaScript, and PHP. Features user login, product listings, cart and checkout, and a responsive modern design with database integration.',
    image: opalMuseImage,
  categories: ['Web Application'],
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    liveUrl: 'https://github.com/Mihiran-Thilakarathna/OpalMuse-Web-site',
    codeUrl: 'https://github.com/Mihiran-Thilakarathna/OpalMuse-Web-site.git',
  },
  {
    id: 7,
    title: 'Mood Music App',
    date: 'In Development - 2025',
    description: 'A React Native mobile app that detects facial expressions in real-time to recommend personalized music playlists. Built with React Native, TypeScript, and Vision Camera, with AI emotion detection planned using TensorFlow.js.',
    image: moodMusicImage,
  categories: ['AI/ML', 'Mobile Application'],
    tags: ['React Native', 'TypeScript', 'TensorFlow.js', 'Vision Camera', 'AI/ML'],
    liveUrl: 'https://github.com/Mihiran-Thilakarathna/MoodMusicApp',
    codeUrl: 'https://github.com/Mihiran-Thilakarathna/MoodMusicApp.git',
  },
];
