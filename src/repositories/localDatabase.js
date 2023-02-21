const JSON_DATA = require('./db.json');

function getAllWithVideos() {
    return JSON_DATA.categorias.map(cat => {
        cat.videos = JSON_DATA.videos.filter(video => video.categoriaId === cat.id)
        return cat
    })
}

function getAll() {
    return JSON_DATA.categorias
}
  
export default {
    getAllWithVideos,
    getAll,
  };
  