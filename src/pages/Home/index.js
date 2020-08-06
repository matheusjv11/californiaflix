import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault';
import Carousel from '../../components/Carousel';
import BannerMain from '../../components/BannerMain';
import categoriasRepository from '../../repositories/categorias';
import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  const [dadosIniciais1, setDadosInciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((cateogriasComVideos) => {
        setDadosInciais(cateogriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {/* {dadosIniciais.length === 0 && (<div>Loading</div>)} */}

      {dadosIniciais.categorias.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                url={dadosIniciais.categorias[0].videos[0].url}
                videoDescription="O que é Front-End? Trabalhando na área"
              />

              <Carousel
                ignoreFirstVideo
                category={dadosIniciais.categorias[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

    </PageDefault>

  );
}

export default Home;
