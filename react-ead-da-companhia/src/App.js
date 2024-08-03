// Importando o componente
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

export default function App() {
  console.log('Teste no console do navegador');

  return (
    <div>
      <Header>
        <h1>EAD da Companhia</h1>
      </Header>

      <Main>
        {/* Card dos treinamentos */}
        <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2">
          <img class="w-full" src="/img/pis-e-cofins.png" alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">PIS e COFINS 1</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Departamento: Fiscal</span> 
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2">
          <img class="w-full" src="/img/pis-e-cofins.png" alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">PIS e COFINS 2</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Departamento: Fiscal</span> 
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg mr-2">
          <img class="w-full" src="/img/pis-e-cofins.png" alt="Sunset in the mountains" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">PIS e COFINS 3</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Departamento: Fiscal</span> 
          </div>
        </div>
        
      </Main>

      {/* Rodapé da página, chamando o compomente footer */}
      <Footer>
        <h1>&#169; 2024 - Developed by: Rodrigo Sousa</h1>
      </Footer>
    </div>
  );
}
