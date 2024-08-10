// Importando o componente
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Main from "../components/Main.jsx";
// Importando o react-tabs, para trabalhar com abas
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
                            alt="Sunset in the mountains"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">PIS e COFINS 1</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="#" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/Fiscal/pis-e-cofins.png"
                            alt="Sunset in the mountains"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">PIS e COFINS 2</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="#" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/Fiscal/pis-e-cofins.png"
                            alt="Sunset in the mountains"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">PIS e COFINS 3</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="#" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/Fiscal/pis-e-cofins.png"
                            alt="Sunset in the mountains"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">PIS e COFINS 3</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="#" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/Fiscal/pis-e-cofins.png"
                            alt="Sunset in the mountains"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">PIS e COFINS 3</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="#" target="_blank">Clique aqui</a>
                            </span>
                        </div>
                    </div>

                    <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2 mb-4 hover:scale-105 hover:scale-105 hover:border-2 border-solid border-gray-900">
                        <img
                            class="w-full"
                            src="/img/Fiscal/pis-e-cofins.png"
                            alt="Sunset in the mountains"
                        />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">PIS e COFINS 3</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                                exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href="#" target="_blank">Clique aqui</a>
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
                            alt="Sunset in the mountains"
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
                            src="/img/TI/senhas-seguras.png"
                            alt="Sunset in the mountains"
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
                            src="/img/TI/senhas-seguras.png"
                            alt="Sunset in the mountains"
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
                            src="/img/TI/senhas-seguras.png"
                            alt="Sunset in the mountains"
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