import { Router } from 'express'
import AgendamentoController from '../../controllers/agendamento/agendamento.controller'

const agendamentoRoutes = Router()

agendamentoRoutes.post('/', AgendamentoController.store)
agendamentoRoutes.get('/', AgendamentoController.index)
agendamentoRoutes.get('/:id', AgendamentoController.show)
agendamentoRoutes.delete('/:id', AgendamentoController.delete)
agendamentoRoutes.put('/:id', AgendamentoController.update)

export default agendamentoRoutes