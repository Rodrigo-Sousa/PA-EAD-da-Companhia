// Importando o componente
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
// Importando a API, para realizar a leitura da quantidade de clicks nos vídeos
import { apiGetAllQtdClicksVideos } from "../services/apiService.js";
// Importando o react-tabs, para trabalhar com abas
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

console.log(apiGetAllQtdClicksVideos);

export default function EadVideos() {
    console.log("Teste no console do navegador");

    return (
        <>
            <Header>
                <h1>EAD da Companhia</h1>
            </Header>

            <Main>
                <h2 class="w-full rounded-md text-center text-4xl font-bold bg-gray-300 dark:text-white mb-4">
                    Trilha - Fiscal
                </h2>
                {/* Card dos trilhas - Fiscal*/}
                <div className="flex flex-wrap ml-2.5">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/Fiscal/pis-e-cofins.png"
                            alt="Post it, escrito PIS e Cofins, sobre uma cálculadora e com algumas notas de 50 e 100 reais ao redor."
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">PIS e COFINS 1</div>
                            <p class="text-gray-700 text-base">
                                Pis é uma contribuição mensal feita pelas empresas que custeia auxílios trabalhistas. Cofins, custeia gastos com a seguridade social dos trabalhadores de empresas privadas referentes à previdência, saúde e assistência social.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="https://www.youtube.com/watch?v=XL-mRHOd7ek" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/Fiscal/reforma-tributaria.png"
                            alt="Escrito Reforma Tributária, alinhado ao centro da imagem e do lado direito, ao fundo, imagens de dinheiro compondo a imagem."
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Reforma Tributária</div>
                            <p class="text-gray-700 text-base">
                                Processo de mudança na forma como os impostos são cobrados ou administrados pelo governo e geralmente é realizado para melhorar a administração Tributária ou fornecer benefícios econômicos ou sociais.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="https://www.youtube.com/watch?v=3eGsFNEmXD0" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/Fiscal/servicos-digitais.png"
                            alt="Um mosaico, contendo os logos de alguns dos serviços digitais."
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Impostos sobre serviços Digitais</div>
                            <p class="text-gray-700 text-base">
                                Atualmente, as alíquotas médias pagas pelas empresas do setor de serviços digitais são de até 5% de ISS, dependendo do município, e de 3,65% de PIS/Cofins. Ainda precisando ser definida por meio de leia complementar, a previsão é que a alíquota de referência do IBS e CBS seja inferior a 30%
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="https://www.youtube.com/watch?v=8-A2b_9MJBQ" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/Fiscal/tributacao-investimentos.png"
                            alt="Um grafico, representando uma parte do mapa Mundi, com oscilações nas cores azul e vermelhas."
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Tributação de Investimentos</div>
                            <p class="text-gray-700 text-base">
                                A tributação é fixa, com alíquota de 15% sobre o ganho de capital obtido com a compra e venda em operações comuns. Por tanto, significa que o IR só é cobrado quando você vende as ações por um preço maior que o preço médio da compra. Caso não haja lucro, não há imposto.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="https://www.youtube.com/watch?v=zgJGeQj03o0" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/Fiscal/evasao-fiscal.png"
                            alt="Em letras na cor azul a palavra Evasão Fiscal em um fundo branco."
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Combate à evasão fiscal</div>
                            <p class="text-gray-700 text-base">
                                O combate à evasão fiscal exige ações coordenadas por parte das autoridades fiscais, incluindo: Melhoria da Fiscalização e Controle: Investimento em tecnologia e capacitação de auditores para identificar e combater esquemas de evasão fiscal.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="https://www.youtube.com/watch?v=H4rx3c4rSZU" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/Fiscal/imposto-csll.png"
                            alt="Imagem com a sigla CSLL escrita em um papel branco."
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Imposto CSLL</div>
                            <p class="text-gray-700 text-base">
                                A Contribuição Social sobre Lucro Líquido (CSSL) representa um tributo federal brasileiro, estabelecido pela Lei nº 7.689 de 1988, que incide diretamente sobre o lucro líqueido das empresas operantes no Brasil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="https://www.youtube.com/watch?v=4xXdVROv7Qo" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>
                    {/* Fechamento da div, contendo os treinamentos do departamento fiscal */}
                </div>

                {/* Trilha de treinamentos do TI */}
                <h2 class="w-full rounded-md text-center text-4xl font-bold bg-gray-300 dark:text-white mb-4">
                    Trilha - TI
                </h2>
                {/* Card dos trilhas - TI*/}
                <div className="flex flex-wrap ml-2.5">
                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/TI/senhas-seguras.png"
                            alt="Cadeado fechado, em um fundo azul, com algumas cores, representando um cadeado digital"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Deicas: Senhas Seguras</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="https://www.youtube.com/watch?v=s7ldn31OEFc" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/TI/cofre-digital.png"
                            alt="Imagem de login e senha, em um laptop"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Cofre de senha, digital</div>
                            <p class="text-gray-700 text-base">
                                Parte criptografada do software gerenciador de senhas que armazena as senhas e dados digitalmente. Cofres de senhas geralmente oferecem várias funcionalidades ao usuário, as quais podem ser divididas em três seções: cofre, centro de segurança de senhas e ferramentas de gerenciamento.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="https://www.youtube.com/watch?v=Wkjhx0LF_0g" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/TI/tela-bloqueio.png"
                            alt="Administrador, solicitando a senha para efetuar o login. Tela de bloqueio."
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Bloquear a tela do computador</div>
                            <p class="text-gray-700 text-base">
                                A importância de bloquear a tela do computador quando for se ausentar da frente do laptop, é importante por se tratar de um pilar de segurança da informação, pois se um invasor estiver fisicamente dentro do escritório ele não irá conseguir obter informações ou instalar um malware.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="https://www.youtube.com/watch?v=Lc-Q6P7D-QA" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/TI/chamado.png"
                            alt="Um laptop, e na frente, o logo da ferramenta Milvus, com a frase Sistema de Tickets."
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">Aberturas de chamado</div>
                            <p class="text-gray-700 text-base">
                                O chamado, ou <i>ticket</i>, é a solicitação de um cliente, associada a algum problema ou questão que precisa resolver. Nesse sentido, a abertura de um chamado é a função de registrar, organizar e otimizar os tickets recebidos pela empresa em um sistema de chamados.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="https://www.youtube.com/watch?v=zgHRis6sJuM" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>                    
                   
                    {/* Fechamento da div, contendo os treinamentos do departamento TI */}
                </div>
            </Main>

            {/* Rodapé da página, chamando o compomente footer */}
            <Footer>
                <h1>&#169; 2024 - Developed by: Rodrigo Sousa</h1>
            </Footer>
        </>
    );
}