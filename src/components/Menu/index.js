import React from 'react';
import logo from '../../assets/img/logo_matheusflix.png'
import './menu.css'
//import ButtonLink from './components/ButtonLinkProps';
import Button from '../Button'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={logo} alt="MatheuFlix" className="Logo"></img>
            </Link>
            <Button as={Link} className="ButtonLink" to="/cadastro/video"> 
                Novo vídeo
            </Button>
        </nav>
    );
}
export default Menu;
