// Importando a biblioteca AXIOS
import axios from 'axios';

const BASE_URL = process.env.NODE_ENV === 'http://localhost:3001';

// Recebendo o id, pela instância do Axios
const axiosInstance = axios.create({
    // URL da API externa, contendo o nosso backend
    baseURL: BASE_URL,
    timeout: 20000,
  });

// Função para realizar a leitura dos dados
export async function read(url) {
    // Implementando o axios
    const { data } = await axiosInstance.get(url);
    // Se a url estiver correta, retornamos os dados
    return data;
  }