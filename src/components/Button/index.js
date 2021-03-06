import styled from 'styled-components';

// Estilizando o Botao com styled-components
// Em ButtonLinkProps é outra forma de usar

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background: var(--background);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    
    &:hover{
        opacity: .5;
    }
`;

export default Button;
