import { MongoClient } from 'mongodb'; // Importa o MongoClient: Esta linha importa a classe MongoClient do pacote mongodb, que é a biblioteca que permite a conexão e interação com o MongoDB.

export default async function conectarAoBanco(stringConexao) { //Exporta uma função assíncrona: definindo uma função chamada conectarAoBanco, que é exportada como padrão. Ela é assíncrona (indicado pela palavra-chave async), o que significa que pode usar await dentro dela. A função recebe um parâmetro chamado stringConexao, que é a string de conexão com o banco de dados.
  let mongoClient; // variável criada que será usada para armazenar a instância do MongoClient

  try { //O bloco try é usado para envolver o código que pode gerar erros.
      mongoClient = new MongoClient(stringConexao); //criando uma nova instância do MongoClient, passando a stringConexao como argumento. Isso configura o cliente para se conectar ao banco de dados especificado na string.
      console.log('Conectando ao cluster do banco de dados...');
      await mongoClient.connect(); //chamamos o método connect() do mongoClient, que tenta estabelecer a conexão com o banco de dados. A palavra-chave await faz com que a execução da função pause até que a conexão seja estabelecida.
      console.log('Conectado ao MongoDB Atlas com sucesso!'); //Se a conexão for bem-sucedida, esta linha imprime uma mensagem no console

      return mongoClient; //A função retorna a instância do mongoClient, que agora está conectada ao banco de dados.
  } catch (erro) { //Início do bloco catch: Se ocorrer um erro em qualquer parte do bloco try, a execução será transferida para este bloco catch
      console.error('Falha na conexão com o banco!', erro); //Esta linha imprime uma mensagem de erro no console, informando que houve uma falha na conexão com o banco de dados
      process.exit(); //finaliza o processo
  }
}