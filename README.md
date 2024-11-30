# Projeto API com MongoDB e Google Gemini

Este é um projeto que implementa uma API para conexão com o banco de dados MongoDB e integração com o Google Gemini para gerar descrições automáticas de imagens. A API foi desenvolvida para fornecer recursos de armazenamento e manipulação de dados, além de utilizar o Google Gemini para criar descrições a partir de imagens enviadas.

## Funcionalidades

- **Conexão com MongoDB**: A API realiza operações básicas de CRUD (Create, Read, Update, Delete) com o banco de dados MongoDB para armazenar e gerenciar posts.
- **Integração com Google Gemini**: A API se conecta ao serviço do Google Gemini para gerar descrições de imagens enviadas, criando textos automáticos baseados no conteúdo visual da imagem.
- **Upload de imagens**: Permite o upload de imagens, associando-as a um post no banco de dados.
- **Criação e atualização de posts**: A API permite criar novos posts e atualizar postagens existentes com base nas imagens enviadas.

## Tecnologias Usadas

- **Node.js**: Para construir a API.
- **Express.js**: Framework para a construção da API RESTful.
- **MongoDB**: Banco de dados NoSQL para armazenar os posts e suas informações.
- **Google Gemini**: Serviço para gerar descrições automáticas de imagens enviadas à API.
- **Multer**: Middleware para gerenciamento de upload de arquivos (imagens).
- **dotenv**: Gerenciamento de variáveis de ambiente para manter informações sensíveis (como credenciais de API).

## Pré-requisitos

Antes de rodar o projeto localmente, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [MongoDB](https://www.mongodb.com/) rodando localmente ou acesso a um serviço de MongoDB na nuvem (como [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Google Cloud Account](https://cloud.google.com/) com acesso ao serviço do Google Gemini (ou similar) configurado para gerar descrições de imagens.

## Instalação

1. Clone o repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Entre no diretório do projeto(se não estiver):
   ```bash
   cd seu-repositorio

3. Instale as dependências do projeto:
   ```bash
   npm install

4. Crie um arquivo .env na raiz do projeto e adicione as configurações necessárias (como chave de acesso ao MongoDB e Google Gemini):
   ```bash
   MONGO_URI=mongodb://localhost:27017/seu-banco
   GEMINI_API_KEY=suachaveaqui                                  
   
5. Inicie o servidor:
   ```bash
   npm start
