import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/userForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import ModalError from '../../../components/ModalError';

function CadastroVideo() {
  const history = useHistory();
  const valoreIniciais = {
    titulo: '',
    url: '',
    categoria: '',
  };

  const [modalIsActivate, setModalIsActivate] = useState(false);
  const { valores, handlerChange, clearForm } = useForm(valoreIniciais);
  const [categorias, setCategorias] = useState([]);
  const categoryTitle = categorias.map(({ nome }) => (
    nome
  ));

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>

      <h1>Página de cadastro de video</h1>
      <ModalError isActivate={modalIsActivate} hook={setModalIsActivate} />
      <form onSubmit={(e) => e.preventDefault()}/* onSubmit={(event) => {
        event.preventDefault();
        clearForm();

        const categoriaEscolhida = categorias.find((categoria) => categoria.nome === valores.categoria);

        if (categoriaEscolhida) {
          videosRepository.create({
            titulo: valores.titulo,
            url: valores.url,
            categoriaId: categoriaEscolhida.id,

          })
            .then(() => {
              console.log('Cadastrou o video');
              // Redireciona para a página home
              history.push('/');
            });
        } else {
          alert('Categoria inexistente');
        }
      }} */
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          type="text"
          valor={valores.titulo}
          tag="input"
          onChange={handlerChange}
        />

        <FormField
          label="URL"
          name="url"
          type="text"
          valor={valores.url}
          tag="input"
          onChange={handlerChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          type="text"
          valor={valores.categoria}
          tag="input"
          onChange={handlerChange}
          suggestions={categoryTitle}
        />

        <Button onClick={() => setModalIsActivate(true)}>
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
