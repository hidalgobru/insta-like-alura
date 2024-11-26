import { getTodosPosts, criarPost, atualizarPost } from "../models/postsModel.js"; // Importa funções para buscar e criar posts
import fs from "fs"; // Importa o módulo de sistema de arquivos para manipulação de arquivos
import gerarDescricaoComGemini from '../services/geminiService.js';

export async function listarPosts(req, res) {
    // Chama a função para buscar todos os posts e aguarda a resposta
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
    res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
    const novoPost = req.body; // Obtém os dados do novo post a partir do corpo da requisição
    try {
        // Tenta criar um novo post e aguarda a resposta
        const postCriado = await criarPost(novoPost);
        // Envia a resposta com o post criado e status 200 (OK)
        res.status(200).json(postCriado);  
    } catch (erro) {
        // Se ocorrer um erro, exibe a mensagem de erro no console
        console.error(erro.message);
        // Envia uma resposta com status 500 (Erro interno do servidor) e uma mensagem de erro
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

export async function uploadImagem(req, res) {
    // Cria um novo objeto novoPost com propriedades iniciais
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: "" 
    };

    try {
        // Tenta criar um novo post com a imagem associada
        const postCriado = await criarPost(novoPost);
        // Define o caminho atualizado da imagem, renomeando-a com o ID do post criado
        const imagemAtualizada = `uploads/${postCriado.insertedId}.jpg`;
        // Renomeia o arquivo da imagem para o novo caminho
        fs.renameSync(req.file.path, imagemAtualizada);
        // Envia a resposta com o post criado e status 200 (OK)
        res.status(200).json(postCriado);  
    } catch (erro) {
        // Se ocorrer um erro, exibe a mensagem de erro no console
        console.error(erro.message);
        // Envia uma resposta com status 500 (Erro interno do servidor) e uma mensagem de erro
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.jpg`

    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.jpg`)
        const descricao = await gerarDescricaoComGemini(imgBuffer)

        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt,
        }
        // Tenta atualizar um novo post e aguarda a resposta
        const postCriado = await atualizarPost(id, post);
        
        // Envia a resposta com o post criado e status 200 (OK)
        res.status(200).json(postCriado);  
    } catch (erro) {
        // Se ocorrer um erro, exibe a mensagem de erro no console
        console.error(erro.message);
        // Envia uma resposta com status 500 (Erro interno do servidor) e uma mensagem de erro
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}