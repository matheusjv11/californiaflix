import React from 'react';
import { Link } from 'react-router-dom';
import logoCaliforniaflix from '../../assets/img/logoCaliforniaflix.png';
import logoReHot from '../../assets/img/redhot.png';
import './menu.css';
//  import ButtonLink from './components/ButtonLinkProps'
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={logoCaliforniaflix} alt="Californiaflix" className="Logo" />
        <img src={logoReHot} alt="RedHot" className="RedHot" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  );
}
export default Menu;
