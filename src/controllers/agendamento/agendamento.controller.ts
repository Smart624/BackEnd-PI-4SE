import { Request, Response } from 'express'
import Agendamento from '../../models/agendamento.entity'

export default class AgendamentoController {
  static async store (req: Request, res: Response) {
    const { nome, cpf, celular, cep, rua, cidade, numeroCasa, polegadasTv, modelo, marca, defeito } = req.body

    if (!nome || !cpf || !celular || !cep || !rua || !cidade || !numeroCasa || !marca || !defeito) {
      return res.status(400).json({ error: 'Por favor, preencha todos os campos' })
    }
    
    const agendamento = new Agendamento()
    agendamento.nome = nome
    agendamento.cpf = cpf
    agendamento.celular = celular
    agendamento.cep = cep
    agendamento.rua = rua
    agendamento.cidade = cidade
    agendamento.numeroCasa = numeroCasa
    agendamento.polegadasTv = polegadasTv || ''
    agendamento.modelo = modelo || ''
    agendamento.marca = marca
    agendamento.defeito = defeito
    await agendamento.save()

    return res.status(201).json(agendamento)
  }

  static async index (req: Request, res: Response) {
    const agendamentos = await Agendamento.find()
    return res.json(agendamentos)
  }

  static async show (req: Request, res: Response) {
    const { id } = req.params

    if(!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' })
    }

    const agendamento = await Agendamento.findOneBy({id: Number(id)})
    return res.json(agendamento)
  }

  static async delete (req: Request, res: Response) {
    const { id } = req.params

    if(!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' })
    }

    const agendamento = await Agendamento.findOneBy({id: Number(id)})
    if (!agendamento) {
      return res.status(404).json({ error: 'Agendamento não encontrado' })
    }

    await agendamento.remove()
    return res.status(204).json()
  }
  
  static async update (req: Request, res: Response) {
    const { id } = req.params
    const { nome, cpf, celular, cep, rua, cidade, numeroCasa, polegadasTv, modelo, marca, defeito } = req.body

    if(!id || isNaN(Number(id))) {
      return res.status(400).json({ error: 'O id é obrigatório' })
    }

    const agendamento = await Agendamento.findOneBy({id: Number(id)})
    if (!agendamento) {
      return res.status(404).json({ error: 'Agendamento não encontrado' })
    }

    agendamento.nome = nome || agendamento.nome
    agendamento.cpf = cpf || agendamento.cpf
    agendamento.celular = celular || agendamento.celular
    agendamento.cep = cep || agendamento.cep
    agendamento.rua = rua || agendamento.rua
    agendamento.cidade = cidade || agendamento.cidade
    agendamento.numeroCasa = numeroCasa || agendamento.numeroCasa
    agendamento.polegadasTv = polegadasTv || agendamento.polegadasTv
    agendamento.modelo = modelo || agendamento.modelo
    agendamento.marca = marca || agendamento.marca
    agendamento.defeito = defeito || agendamento.defeito

    /*
    task.title = title || task.title
    task.completed = (completed === undefined) ? task.completed : completed
    */

    await agendamento.save()

    return res.json(agendamento)
  }  
}