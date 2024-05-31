import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setletterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setletterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Professional Experience: "As a full-stack developer at Bulkitrade
          since December 2023, I've honed my skills in both frontend and backend
          development, utilizing frameworks like Angular and TypeScript. I'm
          currently open to exploring new challenges and opportunities to expand
          my expertise in the tech industry."
        </p>
        <p>
          Passion for Learning: "Driven by a deep curiosity for mathematics and
          computer science, I am committed to continuous learning and mastering
          new technologies. My journey in tech is fueled by a passion for
          understanding the underlying principles of programming and its
          practical applications."
        </p>
        <p>
          Personal Interests: "Outside of coding, my passions include rock
          climbing and kayaking, which keep me adventurous and active, alongside
          a keen interest in mathematics that satisfies my love for
          problem-solving and analytical thinking."
        </p>
      </div>
    </div>
  )
}

export default About
