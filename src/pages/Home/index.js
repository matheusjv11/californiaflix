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

      {dadosIniciais1.reverse().map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle="10 Curiosidades Red Hot Chili Peppers"
                url="https://www.youtube.com/watch?v=9As9ud73nlA&t=390s"
                videoDescription=""
              />

              <Carousel
                category={categoria}
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
