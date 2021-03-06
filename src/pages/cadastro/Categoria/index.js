import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/userForm';
import ModalError from '../../../components/ModalError';

function CadastroCategoria() {
  const valoreIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([]);
  const { valores, handlerChange, clearForm } = useForm(valoreIniciais);
  const [modalIsActivate, setModalIsActivate] = useState(false);

  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://californiaflix.herokuapp.com/categorias';

  useEffect(() => {
    fetch(URL)
      .then(async (response) => {
        const result = await response.json();
        setCategorias(
          [
            ...result,
          ],
        );
      });
  }, []);

  function sendCategoria() {
    const data = {
      id: Date.now(), nome: valores.nome, descricao: valores.descricao, cor: valores.cor,
    };
    fetch(URL, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <PageDefault>

      <h1>
        Cadastro de categoria:
        {valores.nome}
      </h1>

      <ModalError isActivate={modalIsActivate} hook={setModalIsActivate} />

      <form onSubmit={(e) => e.preventDefault()}/* onSubmit={function handleSubmit(infos) {
        infos.preventDefault();
        setCategorias([
          ...categorias,
          valores,
        ]);

        clearForm();
      }} */
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

        <Button onClick={() => setModalIsActivate(true)}>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
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
