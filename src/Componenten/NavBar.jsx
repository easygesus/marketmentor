import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../../src/App.css"
import logoImage from "../assets/Logo.jpg"

export const NavBar = () => {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const navigate = useNavigate()

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    } else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <nav>
        <div className="burger-menu" onClick={updateMenu}>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
      </nav>
      <div className={menu_class}>
        <button
          onClick={() => {
            navigate("/contact")
          }}
        >
          contact
        </button>

        <button
          onClick={() => {
            navigate("/over_ons")
          }}
        >
          over ons
        </button>
      </div>

      <img src={logoImage} className="logo" alt="MarketMentor" onClick={() => navigate("/")} />
    </div>
  )
}
