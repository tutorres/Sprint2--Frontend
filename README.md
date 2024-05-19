IMPLEMENTAÇÃO
Localização dos Arquivos
Estrutura de Arquivos
index.html: Página principal onde o formulário de criação de grupo é exibido.
assets/css/style.css: Arquivo CSS para estilização geral da página.
assets/css/form-style.css: Arquivo CSS específico para estilização do formulário.
assets/scripts/script.js: Arquivo JavaScript contendo a lógica de validação e manipulação do formulário.
Salvamento de Dados
Os dados do formulário serão temporariamente armazenados no localStorage do navegador como um objeto JSON. Isso permite que os dados sejam persistidos entre sessões do navegador, mas sejam limpos quando necessário.

Passos para Salvar Dados:
Preencha o Formulário:
Preencha todos os campos obrigatórios.
Clique no botão "CRIAR GRUPO".
Validação:
Verifique se a data é válida e se o número de jogadores está dentro do limite.
Salvar Dados:
Os dados serão salvos no localStorage do navegador.
Acessando Dados Salvos
Os dados podem ser acessados e manipulados diretamente através das ferramentas de desenvolvedor do navegador (F12) na aba Application (Aplicativo), seção Local Storage (Armazenamento Local).

CONCLUSÃO
A implementação da página de criação de grupo do projeto MatchPoint utiliza uma combinação de HTML, CSS e JavaScript para proporcionar uma interface de usuário dinâmica e responsiva. Os dados serão temporariamente armazenados no localStorage para facilitar a persistência e a recuperação entre sessões de usuário.
