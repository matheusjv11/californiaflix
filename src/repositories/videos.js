import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(objetoDoVideo) {
  // Just blocking post to data

  return null
/*   return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),

  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const reposta = await respostaDoServidor.json();
        return reposta;
      }

      throw new Error('Não foi possível pegar os dados');
    }); */
}

export default {
  create,
};
