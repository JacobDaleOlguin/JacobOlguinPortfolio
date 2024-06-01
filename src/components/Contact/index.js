import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
  let text = 'Contact Me'
  let title = text.split('')

  const [letterClass, setletterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setletterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={title}
              idx={15}
              letterClass={letterClass}
            />
          </h1>

          <p>
            <h2>I'm interested in solving problems</h2> My curiosity drives me
            to explore new opportunities where I can apply my skills to solve
            unique challenges. I am eager to engage with both large-scale and
            smaller projects. If you or your team has an exciting opportunity
            where I can contribute, learn, and apply my expertise, please feel
            free to reach out. I am open to in-person, remote, and hybrid
            working arrangements!
          </p>
        </div>
        <div className="contact-form">
          <form>
            <ul>
              <li className="half">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                ></input>
              </li>
              <li className="half">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                ></input>
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  reuired
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Contact
