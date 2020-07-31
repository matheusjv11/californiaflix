import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoreIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [valores, setValores] = useState(valoreIniciais);

  function setValor(chave, valor) {
    // chave: nome, descricao, cor
    setValores({
      ...valores,
      [chave]: valor, // nome:'valor'
    });
  }

  function handlerChange(infosDoEvento) {
    const { name, value } = infosDoEvento.target;
    setValor(name, value);
  }

  return (
    <PageDefault>

      <h1>
        Cadastro de categoria:
        {valores.nome}
      </h1>

      <form onSubmit={function handleSubmit(infos) {
        infos.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);

        setValores(valoreIniciais);
      }}
      >

        <FormField
          label="Nome da categoria"
          name="nome"
          type="text"
          valor={valores.nome}
          tag="input"
          onChange={handlerChange}
        />
        <FormField
          label="Descrição"
          name="descricao"
          textarea
          valor={valores.descricao}
          tag="textarea"
          onChange={handlerChange}
        />
        <FormField
          label="Cor"
          name="cor"
          type="color"
          valor={valores.cor}
          tag="input"
          onChange={handlerChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
