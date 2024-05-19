document.addEventListener("DOMContentLoaded", function() {
    // Seleciona o campo de número de jogadores
    var jogadoresInput = document.getElementById("jogadores");
    // Seleciona a div de aviso de limite
    var avisoLimite = document.getElementById("avisoLimite");

    // Adiciona um ouvinte de evento para o evento de mudança no campo de número de jogadores
    jogadoresInput.addEventListener("change", function() {
        // Verifica se o número de jogadores é maior que 30
        if (parseInt(jogadoresInput.value) > 30) {
            // Define o valor máximo como 30
            jogadoresInput.value = 30;

            // Exibe a mensagem de aviso
            avisoLimite.style.display = "block";

            // Define um temporizador para ocultar a mensagem após 3 segundos
            setTimeout(function() {
                avisoLimite.style.display = "none";
            }, 3000); // 3000 milissegundos = 3 segundos
        }
    });

    // Adiciona um ouvinte de evento para o evento de tecla pressionada no campo de número de jogadores
    jogadoresInput.addEventListener("keydown", function(event) {
        // Verifica se a tecla pressionada é Enter (código 13)
        if (event.keyCode === 13) {
            // Previne o comportamento padrão do Enter
            event.preventDefault();
        }
    });

    // Adiciona a função para verificar se a data é a partir de hoje
    var dataInput = document.getElementById("data");
    dataInput.addEventListener("change", function() {
        // Obtemos a data atual em formato UTC
        var hoje = new Date();
        hoje.setHours(0, 0, 0, 0); // Zerando as horas, minutos, segundos e milissegundos
        // Obtemos a data selecionada no input
        var partesData = dataInput.value.split("-"); // Dividindo a data em partes (ano, mês, dia)
        var dataSelecionada = new Date(partesData[0], partesData[1] - 1, partesData[2]); // Subtraindo 1 do mês pois em JavaScript os meses começam do 0

        // Verificamos se a data selecionada é anterior ou igual à data atual
        if (dataSelecionada < hoje) {
            // Exibimos a mensagem de aviso
            document.getElementById("avisoDataInvalida").style.display = "block";
        } else {
            // Caso contrário, ocultamos a mensagem de aviso
            document.getElementById("avisoDataInvalida").style.display = "none";
        }
    });
});

// Função para salvar os valores do formulário em um objeto JSON
function salvarFormulario() {
    // Verificar se a data é a partir de hoje antes de salvar o formulário
    var dataInput = document.getElementById("data");
    var hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // Zerando as horas, minutos, segundos e milissegundos
    // Obtemos a data selecionada no input
    var partesData = dataInput.value.split("-"); // Dividindo a data em partes (ano, mês, dia)
    var dataSelecionada = new Date(partesData[0], partesData[1] - 1, partesData[2]); // Subtraindo 1 do mês pois em JavaScript os meses começam do 0

    if (dataSelecionada < hoje) {
        // Exibir mensagem de erro se a data for anterior à data atual
        document.getElementById("avisoDataInvalida").style.display = "block";
        return; // Impedir que o formulário seja salvo
    }

    // Capturando os valores dos campos do formulário
    var nome = document.getElementById('nome').value;
    var esporte = document.getElementById('esporte').value;
    var horario = document.getElementById('horario').value;
    var jogadores = document.getElementById('jogadores').value;
    var local = document.getElementById('local').value;
    var descricao = document.getElementById('descricao').value;

    // Criando um objeto com os valores capturados
    var formulario = {
        "nome": nome,
        "esporte": esporte,
        "data": dataInput.value, // Salvando a data formatada
        "horario": horario,
        "jogadores": jogadores,
        "local": local,
        "descricao": descricao
    };

    // Convertendo o objeto em uma string JSON
    var formularioJSON = JSON.stringify(formulario);

    // Salvando os dados no localStorage
    localStorage.setItem('formularioData', formularioJSON);

    // Exportando os dados
}