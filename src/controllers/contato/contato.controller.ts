import { Request, Response } from 'express'
import Contato from '../../models/contato.entity'

export default class ContatoController {
  static async store (req: Request, res: Response) {
    const { nome, email, mensagem } = req.body

    if (!nome || !email || !mensagem) {
      return res.status(400).json({ error: 'Preencha todos os campos' })
    }

    const contato = new Contato()
    contato.nome = nome
    contato.email = email
    contato.mensagem = mensagem
    await contato.save()

    return res.status(201).json(contato)
  }

  static async index (req: Request, res: Response) {
    const contatos = await Contato.find()
    return res.json(contatos)
  }

  static async show (req: Request, res: Response) {
    const { id } = req.params

    if(!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' })
    }

    const contato = await Contato.findOneBy({id: Number(id)})
    return res.json(contato)
  }

  static async delete (req: Request, res: Response) {
    const { id } = req.params

    if(!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' })
    }

    const contato = await Contato.findOneBy({id: Number(id)})
    if (!contato) {
      return res.status(404).json({ error: 'Contato não encontrado' })
    }

    await contato.remove()
    return res.status(204).json()
  }
  /*
  Teoricamente um contato que o cliente faz não tem necessidade de ser alterado,
  mas para evitar erros, fiz a parte de update também
  */
  static async update (req: Request, res: Response) {
    const { id } = req.params
    const { nome, email, mensagem } = req.body

    if(!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' })
    }

    const contato = await Contato.findOneBy({id: Number(id)})
    if (!contato) {
      return res.status(404).json({ error: 'Contato não encontrado' })
    }

    contato.nome = nome || contato.nome
    contato.email = email || contato.email
    contato.mensagem = mensagem || contato.mensagem

    await contato.save()

    return res.json(contato)
  }  
}