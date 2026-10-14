import { Link } from "react-router-dom";
import "./Nav.css"

export default function Nav() {
  return (
        <div >
            <nav className="navContainer">
                <ul>
                    <li>
                        <Link className="nome" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nome" to="/corridas">Corridas</Link>
                    </li>
                    <li>
                        <Link className="nome" to="/forum">Fórum</Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
  )
}
