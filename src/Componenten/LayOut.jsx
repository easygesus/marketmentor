import { NavBar } from "./NavBar"
import { Footer } from "./Footer"

export const LayOut = ({ hideHeader, children }) => {
  return (
    <div className="layout">
      {hideHeader ? "" : <NavBar />}
      <main>{children}</main>
      <Footer />
    </div>
  )
}
