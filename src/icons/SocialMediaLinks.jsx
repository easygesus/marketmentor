import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa"
import "../../src/App.css"

export const SocialMediaLinks = () => {
  return (
    <div className="social-wrapper">
      <div className="icons">
        <div className="icon-all">
          <FaYoutube className="icon-youtube" />
          <span>Youtube</span>
        </div>
        <div className="icon-all">
          <FaInstagram className="icon-instagram" />
          <span>Instagram</span>
        </div>
        <div className="icon-all">
          <FaFacebook className="icon-facebook" />
          <span>Facebook</span>
        </div>
      </div>
    </div>
  )
}
