import './index.scss'
import Loader from 'react-loaders'
import LogoJ from '../../assets/images/LogoJ.png'
import { AnimatedBackground } from 'animated-backgrounds'

const Portfolio = () => {
  function ClickableImage({ url, src, alt }) {
    const handleClick = () => {
      window.open(url, '_blank')
    }
    return (
      <img
        alt={alt}
        src={src}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <AnimatedBackground animationName="gradientWave" />
        <div className="port-grid">
          <div className="port-box">
            <div className="port-box-top">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="port-box-bottom">
              <ClickableImage src={LogoJ} url="https://example.com" alt="hi" />
            </div>
          </div>

          <div className="port-box">
            <div className="port-box-top">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="port-box-bottom">
              <ClickableImage src={LogoJ} url="https://example.com" alt="hi" />
            </div>
          </div>

          <div className="port-box">
            <div className="port-box-top">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="port-box-bottom">
              <ClickableImage src={LogoJ} url="https://example.com" alt="hi" />
            </div>
          </div>

          <div className="port-box">
            <div className="port-box-top">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className="port-box-bottom">
              <ClickableImage src={LogoJ} url="https://example.com" alt="hi" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
