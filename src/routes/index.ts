import { Router } from 'express'
import contatoRoutes from './contato/contato.routes'
import agendamentoRoutes from './agendamento/agendamento.routes'

const routes = Router()

routes.use('/contato', contatoRoutes)
routes.use('/agendamento', agendamentoRoutes)

export default routes