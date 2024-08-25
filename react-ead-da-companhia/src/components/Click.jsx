export default function EscutarClick({
    name = 'titulo-video-clicado',
    href = '#',
}) {
    function videoClicado() {
        console.log("Título do vídeo clicado: " + name);
    }
    return (
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            Acessar treinamento: <a class="text-white bg-gray-400 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-0.5" href={href} target="_blank" onClick={videoClicado}>Clique aqui</a>
        </span>

        
    )

}