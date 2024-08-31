// Importando o componente
import { useEffect, useState } from "react";
// Importando a API, para realizar a leitura da quantidade de clicks nos vídeos
import { apiGetAllQtdClicksVideos, apiUpdateQtdClicksVideos } from '../services/apiService.js';

export default function EscutarClick({
    name = 'titulo-video-clicado',
    href = '#',
}) {
    // Como estamos utilizando uma promises, para receber os dados do backend, iremos iniciar com um array vazio. BackEnd
    const [allClicksVideos, setAllClicksVideos] = useState([]);

    // Após os dados ser "recebido" do backend, iremos carregar eles na tela.
    useEffect(() => {
        // Utilizando async and await
        async function getAllClickVideos() {
            // tratando erros
            try {
                const backEndAllClicksVideos = await apiGetAllQtdClicksVideos();
                // Exibindo no console cada elemento do array obtivo direto do backend
                for (let index = 0; index < backEndAllClicksVideos.length; index++) {
                    const treinmentos = backEndAllClicksVideos[index].id;
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

    // Função, para pegar o name do treinamento clicado no front end.
    async function videoClicado() {
        console.log("Título do vídeo clicado: " + name);
        // Condição para aparecer o objeto que tem o mesmo título do treinamento que foi clicado
        for (let index = 0; index < allClicksVideos.length; index++) {
            // Armazenando na variável treinamentoClicado, o objeto do array
            const treinamentoClicado = allClicksVideos[index];
            // Condição, para validar, se o título do treinamento clicado, corresponde há algum objeto do array, no backend.
            if (treinamentoClicado.tituloVideo === name) {
                // Incrementando o valor de + 1, a chave do objeto.
                treinamentoClicado.qtdAssistido = treinamentoClicado.qtdAssistido + 1;
                // Chamando a API, para ser incluido o valor do incremento, no objeto do backend.
                await apiUpdateQtdClicksVideos(treinamentoClicado.id, treinamentoClicado.tituloVideo, treinamentoClicado.qtdAssistido);
                // Devolvendo no console, o objeto, com o valor incrementado.
                console.log(treinamentoClicado);
                break;
            }

        }
    }

    // Retornando um span, com estilização, via Tailwind, tendo como campo dinâmico a referência e a opção de escutar, quando cor clicado, com a funcção onClick.
    return (
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href={href} target="_blank" onClick={videoClicado}>Clique aqui</a>
        </span>


    )

}