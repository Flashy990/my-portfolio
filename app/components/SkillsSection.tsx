// 'use client'

// import { motion } from 'framer-motion'

// const skills = [
//   { name: 'C++', level: 90 },
// ]

// export default function SkillsSection() {
//   return (
//     <div className="my-12">
//       <h2 className="text-3xl font-bold mb-6">Skills</h2>
//       <div className="space-y-4">
//         {skills.map((skill) => (
//           <div key={skill.name}>
//             <div className="flex justify-between mb-1">
//               <span className="text-base font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
//               <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//               <motion.div
//                 className="bg-indigo-600 h-2.5 rounded-full"
//                 initial={{ width: 0 }}
//                 animate={{ width: `${skill.level}%` }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

