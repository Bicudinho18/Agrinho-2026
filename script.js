document.addEventListener("DOMContentLoaded", () => {
    
    // 1. FUNCIONALIDADE DE ALTO CONTRASTE
    const botaoContraste = document.getElementById("btn-contraste");
    
    botaoContraste.addEventListener("click", () => {
        // Alterna a classe 'alto-contraste' no body
        document.body.classList.toggle("alto-contraste");
        
        // Altera o texto do botão para avisar o usuário
        if (document.body.classList.contains("alto-contraste")) {
            botaoContraste.innerText = "☀️ Modo Normal";
        } else {
            botaoContraste.innerText = "🌓 Alto Contraste";
        }
    });

    // 2. ROLAGEM SUAVE AO CLICAR NOS BOTÕES
    const botoes = document.querySelectorAll('.container-botoes a');
    
    botoes.forEach(botao => {
        botao.addEventListener('click', function(evento) {
            evento.preventDefault();
            
            const destinoId = this.getAttribute('href');
            const secaoDestino = document.querySelector(destinoId);
            
            if (secaoDestino) {
                secaoDestino.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 3. ANIMAÇÃO DE APARECIMENTO (FADE-IN)
    const secoesEImagens = document.querySelectorAll('section, main img');

    const opcoesDoObservador = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const observador = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('elemento-visivel');
                observador.unobserve(entrada.target);
            }
        });
    }, opcoesDoObservador);

    secoesEImagens.forEach(elemento => {
        elemento.classList.add('elemento-escondido');
        observador.observe(elemento);
    });
});