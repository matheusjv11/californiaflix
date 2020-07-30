/* eslint-disable */
import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CadastroCategoria() {

    const [nomeDaCategoria, setNomeDaCategoria] = useState('Categoria inicial');

    return (
        <PageDefault>

            <h1>Cadastro de categoria: {nomeDaCategoria}</h1>

            <form>
                <label>
                    Nome da Categoria:
                   <input
                        type="text"
                        value={nomeDaCategoria}
                        onChange={function funcaoOnChange() {
                            console.log('[nomeDaCategoria]', nomeDaCategoria)
                        }
                        }
                    />
                </label>
                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;
