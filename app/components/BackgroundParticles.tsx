'use client'

import { useCallback, useMemo, useState, useEffect } from "react"
import Particles from "react-particles"
import type { Engine, IOptions, RecursivePartial } from "tsparticles-engine"
import { loadSlim } from "tsparticles-slim"
import { useTheme } from 'next-themes'

export default function BackgroundParticles() {
  const { theme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = mounted ? (theme === 'system' ? systemTheme : theme) : 'light'

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const options: RecursivePartial<IOptions> = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: currentTheme === 'dark' ? "#6366f1" : "#4f46e5"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: currentTheme === 'dark' ? "#6366f1" : "#4f46e5",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out"
        },
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: "window" as const,
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    },
    retina_detect: true,
    fpsLimit: 60
  }), [currentTheme])

  if (!mounted) return null

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      className="transition-colors duration-300"
    />
  )
}


// 'use client'

// import { useCallback, useMemo, useState, useEffect } from "react"
// import Particles from "react-particles"
// import type { Engine } from "tsparticles-engine"
// import { loadSlim } from "tsparticles-slim"
// import { useTheme } from 'next-themes'

// export default function BackgroundParticles() {
//   const { theme, systemTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const currentTheme = mounted ? theme === 'system' ? systemTheme : theme : 'light'

//   const particlesInit = useCallback(async (engine: Engine) => {
//     await loadSlim(engine)
//   }, [])

//   const options = useMemo(() => ({
//     fullScreen: {
//       enable: true,
//       zIndex: -1
//     },
//     particles: {
//       number: {
//         value: 30,
//         density: {
//           enable: true,
//           value_area: 800
//         }
//       },
//       color: {
//         value: currentTheme === 'dark' ? "#6366f1" : "#4f46e5"
//       },
//       shape: {
//         type: "circle"
//       },
//       opacity: {
//         value: 0.5,
//         random: true,
//         anim: {
//           enable: true,
//           speed: 1,
//           opacity_min: 0.1,
//           sync: false
//         }
//       },
//       size: {
//         value: 3,
//         random: true,
//         anim: {
//           enable: true,
//           speed: 2,
//           size_min: 0.1,
//           sync: false
//         }
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: currentTheme === 'dark' ? "#6366f1" : "#4f46e5",
//         opacity: 0.4,
//         width: 1
//       },
//       move: {
//         enable: true,
//         speed: 1,
//         direction: "none",
//         random: false,
//         straight: false,
//         out_mode: "out",
//         bounce: false,
//         attract: {
//           enable: false,
//           rotateX: 600,
//           rotateY: 1200
//         }
//       }
//     },
//     interactivity: {
//       detectsOn: "window",
//       events: {
//         onHover: {
//           enable: true,
//           mode: "grab"
//         },
//         onClick: {
//           enable: true,
//           mode: "push"
//         },
//         resize: true
//       },
//       modes: {
//         grab: {
//           distance: 140,
//           line_linked: {
//             opacity: 1
//           }
//         },
//         push: {
//           particles_nb: 4
//         }
//       }
//     },
//     retina_detect: true,
//     fps_limit: 60
//   }), [currentTheme])

//   if (!mounted) return null

//   return (
//     <Particles
//       id="tsparticles"
//       init={particlesInit}
//       options={options}
//       className="transition-colors duration-300"
//     />
//   )
// }