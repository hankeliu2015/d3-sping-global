import React from 'react'

type HeroProps = {
  additionalClassNames?: string
  heroRef?: React.RefObject<HTMLDivElement>
  children: React.ReactNode
}

function Hero({ additionalClassNames, heroRef, children }: HeroProps) {
  return (
    <div className={`hero ${additionalClassNames || ''}`} ref={heroRef}>
      {children}
    </div>
  )
}

export default Hero