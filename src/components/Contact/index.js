import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
  let text = 'Contact Me'
  let title = text.split('')

  const [letterClass, setletterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setletterClass('text-animate-hover')
    }, 4000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_wesawzw',
        'template_ey05f72',
        refForm.current,
        '96v5KyRrO4mDhV7le'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <div>
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
              free to reach out.
            </p>
          </div>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
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
        <div className="info-map">
          Jacob Olguin,
          <br />
          United States,
          <br />
          Tampa, Florida, 33647
          <br />
          <span>JacobDaleOlguin@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[28.13492, -82.37079]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[28.13592, -82.37259]}>
              <Popup>Jacob lives here, come over for a cup of tea :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
