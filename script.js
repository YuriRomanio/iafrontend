document.addEventListener('DOMContentLoaded', function() {
    
    // --- LÓGICA PARA MARCAR O LINK ATIVO NO MENU ---
    const currentLocation = window.location.pathname.split('/').pop(); // Pega o nome do arquivo atual (ex: 'tipos.html')
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Adiciona a classe 'active' se o link corresponder à página atual
        if (linkPath === currentLocation) {
            link.classList.add('active');
        }
    });


    // --- EFEITO DE DIGITAÇÃO (SÓ FUNCIONARÁ NA PÁGINA INICIAL) ---
    const typedTextElement = document.getElementById('typed-text');
    
    // Verifica se o elemento existe antes de tentar usá-lo
    if (typedTextElement) {
        const textToType = "Inteligência Artificial";
        let index = 0;

        function type() {
            if (index < textToType.length) {
                typedTextElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(type, 150); // Velocidade da digitação
            }
        }
        
        // Inicia o efeito de digitação
        type();
    }
});