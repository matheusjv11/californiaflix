import React from 'react';
import logo from '../../assets/img/logo_matheusflix.png'
import './menu.css'
//import ButtonLink from './components/ButtonLinkProps';
import Button from '../Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={logo} alt="MatheuFlix" className="Logo"></img>
            </a>
            <Button as="a" className="ButtonLink" href="/"> 
                Novo vídeo
            </Button>
        </nav>
    );
}
export default Menu;
