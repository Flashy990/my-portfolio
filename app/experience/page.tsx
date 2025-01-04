import { BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    title: 'M.S. in Computer Science',
    company: 'Northeastern University',
    date: 'Expected Graduation: May 2026',
    description: 'Relevant coursework: Programming Design Paradigms, Natural Language Processing',
    icon: AcademicCapIcon,
  },
  {
    title: 'Software Engineer - Cybersecurity',
    company: 'Berkshire Hathaway Energy',
    date: 'Aug 2023 - June 2024',
    description: '',
    icon: BriefcaseIcon,
  },
  {
    title: 'Software Engineering Intern - Cybersecurity',
    company: 'Berkshire Hathaway Energy',
    date: 'June 2023 - Aug 2023',
    description: '',
    icon: BriefcaseIcon,
  },
  {
    title: 'B.S. in Computer Science',
    company: 'University Name',
    date: 'Graduated: May 2015',
    description: 'Relevant coursework: Operating Systems, Software Engineering, Advanced Data Structures and Algorithms, Computer Architecture, Computer Systems, Machine Learning, Digital Logic Design, Circuit Analysis, Signal Processing, Object Oriented Programming',
    icon: AcademicCapIcon,
  },
]

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Experience</h1>
      <div className="flow-root">
        <ul className="-mb-8">
          {experiences.map((experience, index) => (
            <li key={index}>
              <div className="relative pb-8">
                {index !== experiences.length - 1 ? (
                  <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span className="h-8 w-8 rounded-full bg-gray-400 dark:bg-gray-600 flex items-center justify-center ring-8 ring-white dark:ring-gray-900">
                      <experience.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{experience.company}</p>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">{experience.title}</h3>
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{experience.description}</p>
                    </div>
                    <div className="text-right text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                      <time dateTime={experience.date}>{experience.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

