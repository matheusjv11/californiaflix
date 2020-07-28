import React from 'react';
import Menu from '../../components/Menu';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';


function Home() {
  return (
    <div >
      <PageDefault>

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que é Front-End? Trabalhando na área"}
        ></BannerMain>

        <Carousel
          ignoreFirstVideo
          category={dadosIniciais.categorias[0]}
        ></Carousel>

      </PageDefault>

    </div>
  );
}

export default Home;
