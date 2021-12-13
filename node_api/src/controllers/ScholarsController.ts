import { Request, Response } from 'express'
import { ScholarsServices } from '../services/ScholarsServices'

class ScholarsController {

  async create(request: Request, response: Response) {
    const { name } = request.body

    const scholarServices = new ScholarsServices()

    try {
      const scholar = await scholarServices.create({ name })
      return response.json(scholar)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const scholarServices = new ScholarsServices()

    try {
      const scholar = await scholarServices.index()
      return response.json(scholar)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const scholarServices = new ScholarsServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const scholar = await scholarServices.show({ id })
      return response.json(scholar)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const scholarServices = new ScholarsServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const scholar = await scholarServices.delete({ id })
      return response.json({ message: 'Event id deleted successfully !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
  
}

export { ScholarsController }

