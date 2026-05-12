import { ReactNode, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP)

type StairsProps = {
  children: ReactNode
}

export default function Stairs({ children }: StairsProps) {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    function () {
      gsap.fromTo(
        '.stairs',
        { yPercent: 0 },
        {
          yPercent: -100,
          duration: 0.8,
          ease: 'power2.inOut',
          stagger: 0.08,
          delay: 0.2,
        }
      )
    },
    { scope: container }
  )

  return (
    <div ref={container}>
      <div className='pointer-events-none fixed inset-0 z-50 h-screen w-full overflow-hidden'>
        <div className='flex h-screen w-full'>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
          <div className='stairs h-full w-1/5 bg-black'></div>
        </div>
      </div>
      {children}
    </div>
  )
}
