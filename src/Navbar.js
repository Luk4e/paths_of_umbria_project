import {Link} from "react-router-dom"

export default function Navbar(){
    return(
        <header className="App-header">
            <nav>
                <li>
                    <Link className="nav--links" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav--links" to="/paths_a_piedi">Paths a Piedi</Link>
                </li>
                <li>
                    <Link className="nav--links" to="/paths_in_bici">Paths in Bici</Link>
                </li>
                <li>
                    <Link className="nav--links" to="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link className="nav--links" to="/about">About</Link>
                </li>
            </nav>
        </header>
        )
}