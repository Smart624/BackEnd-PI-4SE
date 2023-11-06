import { Router } from 'express'
import ContatoController from '../../controllers/contato/contato.controller'

const contatoRoutes = Router()

contatoRoutes.post('/', ContatoController.store)
contatoRoutes.get('/', ContatoController.index)
contatoRoutes.get('/:id', ContatoController.show)
contatoRoutes.delete('/:id', ContatoController.delete)
contatoRoutes.put('/:id', ContatoController.update)

export default contatoRoutes