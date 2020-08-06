import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/userForm';
import Button from '../../../components/Button';

function CadastroVideo() {
  const history = useHistory();
  const { valores, handlerChange, clearForm } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    console.log('clicou');
  }, [valores.titulo]);

  return (
    <PageDefault>

      <h1>Página de cadastro de video</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        alert('Vídeo cadastrado com sucesso!!');
        clearForm();
        // Redireciona para a página home
        history.push('/');
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="nome"
          type="text"
          valor={valores.titulo}
          tag="input"
          onChange={handlerChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
