import { Link } from 'react-router-dom'
import LogoJ from '../../assets/images/LogoJ.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Logo from './Logo'
import Loader from 'react-loaders'
import { Helmet } from 'react-helmet'

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  let job = 'Web Devloper'
  let name = 'acob'
  const nameArray = name.split('')
  const jobArray = job.split('')

  useEffect(() => {
    setTimeout(() => {
      return setletterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <Helmet>
        <title>Jacob - Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio of Jacob, a Frontend Developer specializing in JavaScript and TypeScript."
        />
        <meta property="og:title" content="Jacob - Frontend Developer" />
        <meta
          property="og:description"
          content="Explore Jacob's projects and skills in Frontend Development, especially in JavaScript and TypeScript."
        />
        <meta property="og:image" content={LogoJ} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _14`}>H</span>
            <span className={`${letterClass} _15`}>i,</span>
            <br />
            <span className={`${letterClass} _16`}>I</span>
            <span className={`${letterClass} _17`}>'m </span>
            <img src={LogoJ} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={18}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={25}
            />
          </h1>
          <h2>Frontend Developer / Javasript / Typescript / JS Frameworks</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Home
