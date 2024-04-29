import React from "react";
import "./NavbarModule.css"
import { Link } from "react-router-dom";
import logo from "../../media/dhdesigns/cerne-logo.svg";

const NavbarModule = () => {

    return <>
    <div className="navWrapper">
    <table className="linksLeft">
    <tr>
    <td><Link to="/"><img className="navLogo" src={ logo } alt="logo" /></Link></td>
    <td><Link className="link" to="/">Úvod</Link></td>
    <td><Link className="link" to="/portfolio">Portfolio</Link></td>
    <td><Link className="link" to="/offers">Nabídka</Link></td>
    <td><Link className="link" to="/contacts">Kontakty</Link></td>
    </tr>
    </table>
    </div>
    </>
}

export default NavbarModule;