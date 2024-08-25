// Importando o componente
import { useEffect, useState } from "react";
// Importando a API, para realizar a leitura da quantidade de clicks nos vídeos
import { apiGetAllQtdClicksVideos } from '../services/apiService.js';

export default function EscutarClick({
    name = 'titulo-video-clicado',
    href = '#',
}) {
    // Como estamos utilizando uma promises, para receber os dados do backend, iremos iniciar com um array vazio. BackEnd
    const [setAllClicksVideos] = useState([]);

    // Após os dados ser "recebido" do backend, iremos carregar eles na tela.
    useEffect(() => {
        // Utilizando async and await
        async function getAllClickVideos() {
            // tratando erros
            try {
                const backEndAllClicksVideos = await apiGetAllQtdClicksVideos();
                // Exibindo no console cada elemento do array obtivo direto do backend
                for (let index = 0; index < backEndAllClicksVideos.length; index++) {
                    const treinmentos = backEndAllClicksVideos[index];
                    console.log(treinmentos);
                }
                setAllClicksVideos(backEndAllClicksVideos);
            } catch (error) {
                return error;
            }
        }
        // Executando a função
        getAllClickVideos();
    }, []);

    function videoClicado() {
        console.log("Título do vídeo clicado: " + name);
    }


    return (
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href={href} target="_blank" onClick={videoClicado}>Clique aqui</a>
        </span>


    )

}