
const estilos = [
    "header.css","footer.css","contato.css"
]
   const head = document.querySelector('head');
   const body = document.querySelector('body');
    
//aqui vai ter uns estilos por padrão para o conteudo que vai em todas as paginas, mas tbm sera possi vel adiconar conforme a pagina 
function carregarEstilos(estilosAdicionais = []) {
 
    // Carregar os estilos padrão
    estilos.forEach(estilo => {
        const estiloClone = document.createElement('link');
        estiloClone.rel = 'stylesheet';
        estiloClone.href = `./style/${estilo}`;
        head.appendChild(estiloClone);
    });
    
    // Carregar os estilos adicionais conforme a página
    estilosAdicionais.forEach(estilo => {
        const estiloClone = document.createElement('link');
        estiloClone.rel = 'stylesheet';
        estiloClone.href = `./style/${estilo}`;
        head.appendChild(estiloClone);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Define os estilos adicionais com base na URL da página
    let estilosAdicionais = [];
    
    if (window.location.pathname.endsWith('index.html')) {
        estilosAdicionais.push('carousel.css','cards.css', 'sobre.css', "agenda.css");
    } else if (window.location.pathname.endsWith('discografia.html')) {
        estilosAdicionais.push('discografia.css');
    }
    
    carregarEstilos(estilosAdicionais);
});


