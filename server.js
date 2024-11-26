import express from 'express'; // Importa o framework Express.js para criar a aplicação web.
import routes from './src/routes/postsRoutes.js';

// Inicializa o aplicativo Express.
const app = express();
app.use(express.static('uploads'))
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem no console.
app.listen(3000, () => {
  console.log('Servidor escutando...');
});

//abrir o servidor: http://localhost:3000/posts