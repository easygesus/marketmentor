import { useNavigate } from "react-router-dom"

export const Form = () => {
  const navigate = useNavigate()

  const sendingMail = () => {
    navigate("/")
  }

  return (
    <form className="contact-form">
      <fieldset>
        <label>
          <input type="text" name="name" placeholder="Naam" />
          <label>
            <textarea type="email" name="email" placeholder="voorbeeld@gmail.com" />
          </label>
        </label>
        <label>
          <textarea className="textarea" type="text" name="name" placeholder="Schrijf hier je bericht..." />
        </label>
        <button type="submit" onClick={sendingMail}>
          verstuur
        </button>
      </fieldset>
    </form>
  )
}
