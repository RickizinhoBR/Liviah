onload = () => {
    document.body.classList.remove("container");

    // Função para exibir a mensagem letra por letra
    function typeMessage(elementId, message, delay) {
        let i = 0;
        const element = document.getElementById(elementId);
        function addLetter() {
            if (i < message.length) {
                element.innerHTML += message.charAt(i);
                i++;
                setTimeout(addLetter, delay);
            }
        }
        addLetter();
    }

    // Chama a função para escrever a mensagem letra por letra
    const message = "Amor, quero muito, mas muito mesmo conversar sobre tudo contigo pessoalmente, mas não vou conseguir te ver esse final de semana. Pense em tudo que a gente viveu e espere até eu conseguir te ver. Eu não vou errar de novo   --João Pedro--";
    typeMessage('message', message, 100); // 100ms de atraso entre cada letra
};
