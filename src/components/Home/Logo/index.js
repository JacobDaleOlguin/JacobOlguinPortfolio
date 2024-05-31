import './index.scss'
import LogoJ from '../../../assets/images/LogoJ.png'
import LogoJOutline from '../../../assets/images/LogoJOutline.png'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoJ} alt="J" />
      <img className="outline-logo" src={LogoJOutline} alt="J" />
    </div>
  )
}

export default Logo
