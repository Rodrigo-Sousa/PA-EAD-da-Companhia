import { read, edit } from './httpService';

// Lendo os dados, pegado direto do backend
export async function apiGetAllQtdClicksVideos() {
    const allGetQtdClicks = await read('/videosClicados');
    return allGetQtdClicks;
}

export async function apiUpdateQtdClicksVideos(videosClicadosId, tituloVideo, qtdAssistido) {
    console.log(videosClicadosId);
    const newUpdateQtdClicksVideos = edit(`videosClicados/${videosClicadosId}`, {
      tituloVideo,
      qtdAssistido,
    });
    return newUpdateQtdClicksVideos;
}