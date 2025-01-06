'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type SkillCategory = 'Programming Languages' | 'Full-Stack Development' | 'Database' | 'Cloud & DevOps' | 'Version Control' | 'Operating Systems' | 'Development Tools' | 'Machine Learning & Data Science' | 'Testing & Quality Assurance' | 'Software Development Methodologies' | 'Engineering Software';

const skills: Record<SkillCategory, string[]> = {
  'Programming Languages': ['C', 'C++', 'C#', 'Java', 'Python', 'Rust', 'Go', 'Bash', 'Ruby', 'JavaScript', 'TypeScript', 'VHDL', 'MATLAB'],
  'Full-Stack Development': ['React', 'Next.js', 'Node.js', 'Express', 'Django', 'FastAPI', 'Flask', '.NET', 'RESTful APIs', 'Spring Boot', 'HTML/CSS', 'Tailwind CSS', 'Framer Motion'],
  'Database': ['MongoDB', 'PostgreSQL', 'MySQL'],
  'Cloud & DevOps': ['Docker', 'AWS', 'Google Cloud Platform (GCP)', 'CI/CD', 'Git', 'GitLab'],
  'Version Control': ['Git', 'GitHub', 'GitLab'],
  'Operating Systems': ['Linux', 'Windows', 'MacOS'],
  'Development Tools': ['Vim', 'VS Code', 'Visual Studio', 'GNU Debugger (GDB)', 'Valgrind', 'Jira'],
  'Machine Learning & Data Science': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLTK', 'pandas', 'numpy', 'matplotlib', 'Seaborn', 'BERT', 'Longformer', 'Word2Vec', 'grad-cam', 'shapley explainability'],
  'Testing & Quality Assurance': ['JUnit', 'CppUTest', 'Postman', 'Integration Testing', 'Acceptance Testing'],
  'Software Development Methodologies':['Agile Methodologies', 'Test-Driven Development', 'UI/UX Design', 'Technical Writing'],
  'Engineering Software': ['Intel Quartus', 'SOLIDWORKS', 'NI Multisim']
};

const timelineEvents = [
  {
    id: 1,
    year: '2022',
    title: 'Student of the Year 2022',
    description: 'Nominated by engineering faculty for the student of the year award in 2022 for my excellent academic performance and enthusiasm.',
  },
  {
    id: 2,
    year: '2023',
    title: 'Started Interning at Berkshire Hathaway Energy',
    description: 'Joined as a Software Engineering Intern in the Cybersecurity Department.',
  },
  {
    id: 3,
    year: '2023',
    title: 'Got a Return Offer From Berkshire Hathaway Energy',
    description: 'Got a return offer to continue working at Berkshire Hathaway Energy as a software engineer and continue working on developing software to enhance cybsersecurity measures.',
  },
  {
    id: 4,
    year: '2024',
    title: 'Graduated from University of Maryland, College Park',
    description: 'Earned a Bachelor\'s degree in Computer Engineering.',
  },
  {
    id: 5,
    year: '2024',
    title: 'Started my Masters in Computer Science From Northeastern University',
    description: 'Beginning of an exciting new journey!',
  },
]

export default function About() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('Programming Languages');

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        About Me
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg mb-8"
      >
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-2xl font-semibold">Aryan Kakadia</h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
          <p className="text-base text-gray-700 dark:text-gray-300">
            I am a software engineer with a passion for building scalable and efficient applications. 
            With a strong foundation in computer science, computer engineering and industry experience, 
            I continuously strive to learn new technologies and improve my skills. 
            When I'm not coding, you can find me exploring nature trails or working on my personal projects.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="my-12"
      >
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="mb-4">
          {(Object.keys(skills) as SkillCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`mr-2 mb-2 px-4 py-2 rounded-full ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills[activeCategory].map((skill) => (
            <motion.div
              key={`${activeCategory}-${skill}`}  // Unique key combining category and skill
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="my-12"
      >
        <h2 className="text-3xl font-bold mb-6">My Journey</h2>
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3">
          {timelineEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + event.id * 0.1 }}
              className="mb-8 flex"
            >
              <div className="absolute w-6 h-6 bg-indigo-600 rounded-full mt-1.5 -left-3 border-4 border-white dark:border-gray-900"></div>
              <div className="ml-6">
                <div className="flex items-center mb-1">
                  <time className="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{event.year}</time>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}