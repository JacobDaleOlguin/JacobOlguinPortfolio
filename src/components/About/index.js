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
             <h2>Professional Experience</h2>
            <p>
              I'm a Data Science student at Arizona State University with hands-on
              full-stack experience from a year-long internship at{" "}
              <a
                href="https://bulkitrade.com"
                target="_blank"
                rel="noreferrer"
                style={{ color: 'inherit', textDecoration: 'underline' }}
              >
                Bulkitrade.com
              </a>
              . There, I helped modernize frontend components, streamline backend
              workflows, and improve reliability using React, JavaScript, TypeScript,
              Python, and SQL.
            </p>

            <h2>Education & Certifications</h2>
            <p>
              Pursuing a Bachelor's in Data Science at ASU with a focus on applied
              mathematics, programming, and analytics. I hold{" "}
              <strong>CompTIA Security+</strong> and I'm actively preparing for the{" "}
              <strong>CompTIA A+</strong>.
            </p>

            <h2>Technical Skills</h2>
            <p>
              Python, C, JavaScript, TypeScript, HTML, CSS, SQL, React, Node.js, Git,
              Linux • Building data-driven features that blend software engineering
              and analytics.
            </p>

            <h2>Personal Interests</h2>
            <p>
              Rock climbing and kayaking; I enjoy projects where data, design, and
              technology intersect.
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
