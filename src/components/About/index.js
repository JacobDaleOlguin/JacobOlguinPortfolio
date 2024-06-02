import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setletterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setletterClass('text-animate-hover')
    }, 2500)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h2>Professional Experience:</h2>
          <p>
            As an professional full-stack developer since December 2023, I've
            honed my skills in both frontend and backend development, utilizing
            frameworks like React and using languages including Typesript,
            Python, C and a bunuch more you can see to the right.
          </p>
          <h2>Passion for Learning:</h2>
          <p>
            Driven by a deep curiosity for mathematics and computer science, I
            am committed to continuous learning and mastering new technologies.
            My drive in tech is from the joy I from learning and understanding
            the underlying principles of programming and its practical
            applications.
          </p>
          <h2>Personal Interests:</h2>
          <p>
            Outside of coding, my passions include rock climbing and kayaking,
            which keep me adventurous and active, alongside a keen interest in
            mathematics that satisfies my love for problem-solving and
            analytical thinking.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1 face">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2 face">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3 face">
              <FontAwesomeIcon icon={faCss3} color="#28A4d9" />
            </div>
            <div className="face4 face">
              <FontAwesomeIcon icon={faReact} color="#5DE4F4" />
            </div>
            <div className="face5 face">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6 face">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4d28" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
