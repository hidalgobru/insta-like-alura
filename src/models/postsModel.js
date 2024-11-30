import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Conecta ao banco de dados usando a string de conexão fornecida pela variável de ambiente.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados.
export async function getTodosPosts() {
    // Conecta ao banco de dados 'imersao-instabytes'.
    const db = conexao.db('imersao-instabytes');
    // Seleciona a coleção 'posts' dentro do banco de dados.
    const colecao = db.collection('posts');
    // Retorna todos os documentos da coleção como um array.
    return colecao.find().toArray();
}

// Função assíncrona para criar um novo post no banco de dados.
// Recebe um objeto com as informações do novo post como parâmetro.
export async function criarPost(novoPost) {
    // Conecta ao banco de dados 'imersao-instabytes'.
    const db = conexao.db('imersao-instabytes');
    // Seleciona a coleção 'posts' dentro do banco de dados.
    const colecao = db.collection('posts');
    // Insere o novo post na coleção e retorna o resultado da operação.
    return colecao.insertOne(novoPost);
}

// Função assíncrona para atualizar um post existente no banco de dados.
// Recebe o ID do post e um objeto com as novas informações como parâmetros.
export async function atualizarPost(id, novoPost) {
    // Conecta ao banco de dados 'imersao-instabytes'.
    const db = conexao.db('imersao-instabytes');
    // Seleciona a coleção 'posts' dentro do banco de dados.
    const colecao = db.collection('posts');
    // Converte o ID de string para o formato ObjectId do MongoDB.
    const objID = ObjectId.createFromHexString(id);
    // Atualiza o post com o ID especificado, substituindo os dados pelos novos.
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
}

// Função assíncrona para excluir um post do banco de dados.
// Recebe o ID do post a ser excluído como parâmetro.
export async function excluirPost(id) {
    // Conecta ao banco de dados 'imersao-instabytes'.
    const db = conexao.db('imersao-instabytes');
    // Seleciona a coleção 'posts' dentro do banco de dados.
    const colecao = db.collection('posts');
    // Converte o ID de string para o formato ObjectId do MongoDB.
    const objID = ObjectId.createFromHexString(id);
    // Exclui o post com o ID especificado.
    return colecao.deleteOne({_id: new ObjectId(objID)});
}