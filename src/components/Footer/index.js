import React from 'react';
import { FooterBase, Logo } from './styles';
import logoGitHub from '../../assets/img/github.png';
import logoLinkedIn from '../../assets/img/linkedin.png';

function Footer() {
  return (
    <FooterBase>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
      <p>Onde me encontrar:</p>

      <div>
        <a href="https://github.com/matheusjv11">
          <Logo src={logoGitHub} alt="Logo GitHub" className="logo-footer" />
        </a>
        <a href="https://www.linkedin.com/in/matheus-almeida-3b8542176/">
          <Logo src={logoLinkedIn} alt="Logo Linkedin" className="logo-footer" />
        </a>

      </div>

    </FooterBase>
  );
}

export default Footer;
