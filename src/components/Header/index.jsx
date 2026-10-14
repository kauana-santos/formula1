import "./Header.css"
import logo from "../../assets/logo.png"

export default function Header( {nav}) {
  return (
    <header>
        
        <div className="titleContainer">
          <img src={logo} alt="logo" />
            <h1>2025 SEASON</h1>
        </div>
        <div>{nav}</div>
    </header>
  )
}
