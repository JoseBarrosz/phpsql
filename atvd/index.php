<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Aqui você pode adicionar sua lógica de autenticação
    if ($username == "admin" && $password == "1234") {
        echo "Login bem-sucedido!";
    } else {
        echo "Usuário ou senha incorretos!";
    }
} else {
    echo "Método de requisição inválido.";
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $mensagem = $_POST['mensagem'];

    // Aqui você pode adicionar lógica para salvar os dados no banco de dados, enviar por email, etc.
    echo "Nome: $nome <br>";
    echo "Email: $email <br>";
    echo "Mensagem: $mensagem <br>";
} else {
    echo "Método de requisição inválido.";
}

?>
