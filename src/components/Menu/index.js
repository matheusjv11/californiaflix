import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoCaliforniaflix.png';
import './menu.css';
//  import ButtonLink from './components/ButtonLinkProps'
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={logo} alt="MatheuFlix" className="Logo" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}
export default Menu;
