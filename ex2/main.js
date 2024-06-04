document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'As senhas não coincidem!';
        event.preventDefault();  // Impede o envio do formulário
    } else {
        errorMessage.textContent = '';  // Limpa a mensagem de erro
    }
});
