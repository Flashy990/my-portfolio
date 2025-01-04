'use client'

import { useEffect, useRef, useState } from 'react'

export default function MusicVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      setError('Canvas context not supported')
      return
    }

    let animationFrameId: number
    let audioContext: AudioContext
    let analyser: AnalyserNode
    let dataArray: Uint8Array
    let source: MediaElementAudioSourceNode

    const audio = new Audio()
    audio.crossOrigin = "anonymous"
    audio.src = '/path/to/your/audio/file.mp3'

    const initializeAudio = async () => {
      try {
        audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        analyser = audioContext.createAnalyser()
        analyser.fftSize = 256
        const bufferLength = analyser.frequencyBinCount
        dataArray = new Uint8Array(bufferLength)

        source = audioContext.createMediaElementSource(audio)
        source.connect(analyser)
        analyser.connect(audioContext.destination)

        setIsLoading(false)
      } catch (err) {
        setError('Failed to initialize audio')
        setIsLoading(false)
      }
    }

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    const draw = () => {
      if (!analyser || !ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      analyser.getByteFrequencyData(dataArray)

      const barWidth = (canvas.width / dataArray.length) * 2.5
      let x = 0

      for (let i = 0; i < dataArray.length; i++) {
        const barHeight = dataArray[i] / 2

        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, `hsl(${i * 2}, 100%, 50%)`)
        gradient.addColorStop(1, `hsl(${i * 2}, 100%, 20%)`)

        ctx.fillStyle = gradient
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)

        x += barWidth + 1
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    const handleResize = () => {
      resizeCanvas()
    }

    window.addEventListener('resize', handleResize)
    initializeAudio()
    resizeCanvas()

    audio.addEventListener('play', () => {
      draw()
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      if (audioContext) {
        audioContext.close()
      }
      audio.pause()
    }
  }, [])

  if (error) {
    return (
      <div className="w-full h-64 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="w-full h-64 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <div className="w-full h-64 bg-gray-900 rounded-lg overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}



// 'use client'

// import { useEffect, useRef } from 'react'

// export default function MusicVisualizer() {
//   const canvasRef = useRef<HTMLCanvasElement>(null)

//   useEffect(() => {
//     if (!canvasRef.current) return

//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')
//     if (!ctx) return

//     let animationFrameId: number
//     let audioContext: AudioContext
//     let analyser: AnalyserNode
//     let dataArray: Uint8Array
//     let source: MediaElementAudioSourceNode

//     const audio = new Audio('/path/to/your/audio/file.mp3') // Replace with your audio file
//     audio.crossOrigin = "anonymous"

//     const initializeAudio = () => {
//       audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
//       analyser = audioContext.createAnalyser()
//       analyser.fftSize = 256
//       const bufferLength = analyser.frequencyBinCount
//       dataArray = new Uint8Array(bufferLength)

//       source = audioContext.createMediaElementSource(audio)
//       source.connect(analyser)
//       analyser.connect(audioContext.destination)
//     }

//     const resizeCanvas = () => {
//       canvas.width = canvas.clientWidth
//       canvas.height = canvas.clientHeight
//     }

//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)

//       analyser.getByteFrequencyData(dataArray)

//       const barWidth = (canvas.width / dataArray.length) * 2.5
//       let x = 0

//       for (let i = 0; i < dataArray.length; i++) {
//         const barHeight = dataArray[i] / 2

//         const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
//         gradient.addColorStop(0, `hsl(${i * 2}, 100%, 50%)`)
//         gradient.addColorStop(1, `hsl(${i * 2}, 100%, 20%)`)

//         ctx.fillStyle = gradient
//         ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight)

//         x += barWidth + 1
//       }

//       animationFrameId = requestAnimationFrame(draw)
//     }

//     initializeAudio()
//     resizeCanvas()
//     window.addEventListener('resize', resizeCanvas)

//     audio.play()
//     draw()

//     return () => {
//       cancelAnimationFrame(animationFrameId)
//       window.removeEventListener('resize', resizeCanvas)
//       if (audioContext) {
//         audioContext.close()
//       }
//       audio.pause()
//     }
//   }, [])

//   return (
//     <div className="w-full h-64 bg-gray-900 rounded-lg overflow-hidden">
//       <canvas ref={canvasRef} className="w-full h-full" />
//     </div>
//   )
// }

