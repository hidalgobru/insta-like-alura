import express from 'express'; // Importa o framework Express.js para criar a aplicação web.
import multer from 'multer'; // Importa o middleware Multer para lidar com o upload de arquivos.
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost, deletarPost } from '../controllers/postController.js'; // Importa as funções para lidar com os posts do controlador.
import cors from 'cors';

// Configurações do CORS para permitir requisições de um domínio específico
const corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200
}

// Configurações de armazenamento para o Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Define o diretório onde os arquivos serão salvos.
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Define o nome do arquivo, mantendo o nome original.
  }
});

// Cria uma instância do Multer com as configurações de armazenamento
const upload = multer({ dest: './uploads', storage });

const routes = (app) => {
  app.use(express.json()); // Habilita o Express a entender requisições com corpo em formato JSON.
  app.use(cors(corsOptions)); // Habilita o CORS com as configurações definidas

  // Rotas da API
  app.get('/posts', listarPosts); // Rota para obter todos os posts no Postman (GET /posts)
  app.post('/posts', postarNovoPost); // Rota para criar um novo post no Postman (POST /posts)
  app.post('/upload', upload.single('imagem'), uploadImagem); // Rota para fazer upload de uma imagem no Postman (POST /upload)
  app.put('/upload/:id', atualizarNovoPost); // Rota para atualizar um post no Postman (PUT /upload/:id)
  app.delete('/posts/:id', deletarPost); // Rota para deletar um post no Postman (DELETE /posts/:id)
};

export default routes; // Exporta a função das rotas para ser utilizada em outros módulos.

//multer é um middleware: é uma função que fica entre a requisição do cliente e a resposta do servidor, permitindo manipular, processar ou modificar a requisição e a resposta antes que elas cheguem ao próximo handler (função que processa uma requisição específica em um servidor, geralmente associada a uma rota) ou ao final do ciclo de vida da requisição.