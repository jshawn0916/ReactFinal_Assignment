import { NavLink } from "react-router-dom";

export default function Nav(){
    return(
        <nav className="menu-wrap">
            <ul >
                <li className="menu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/playlist">Playlist</NavLink>
                    <NavLink to="/music">Music</NavLink>
                </li>
            </ul>
        </nav>
    )
}