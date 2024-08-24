import { read } from './httpService';

// Lendo os dados, pegado direto do backend
export async function apiGetAllQtdClicksVideos() {
    const allGetQtdClicks = await read('/videosClicados');
    return allGetQtdClicks;
}