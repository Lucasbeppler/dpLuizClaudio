import { Request, Response } from 'express'
import { RolesServices } from '../services/RolesServices'

class RolesController {

  async create(request: Request, response: Response) {
    const { name, salary } = request.body

    const roleServices = new RolesServices()

    try {
      const role = await roleServices.create({ name, salary })
      return response.json(role)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const roleServices = new RolesServices()

    try {
      const role = await roleServices.index()
      return response.json(role)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const roleServices = new RolesServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const role = await roleServices.show({ id })
      return response.json(role)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const roleServices = new RolesServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const role = await roleServices.delete({ id })
      return response.json({ message: 'Event id deleted successfully !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

}

export { RolesController }

