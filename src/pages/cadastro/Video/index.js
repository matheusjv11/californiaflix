import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CadastroVideo() {
    console.log("oi");
    return (
        <PageDefault>

            <h1>Página de cadastro de video</h1>

            <Link to="/cadastro/categoria">
                Cadastrar Categoria
            </Link>
        </PageDefault>
    );
}

export default CadastroVideo;
