import { Request, Response } from 'express'
import { DepartmentsServices } from '../services/DepartmentsServices'

class DepartmentsController {

  async create(request: Request, response: Response) {
    const { name } = request.body

    const departmentServices = new DepartmentsServices()

    try {
      const department = await departmentServices.create({ name })
      return response.json(department)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const departmentServices = new DepartmentsServices()

    try {
      const department = await departmentServices.index()
      return response.json(department)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const departmentServices = new DepartmentsServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const department = await departmentServices.show({ id })
      return response.json(department)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const departmentServices = new DepartmentsServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const department = await departmentServices.delete({ id })
      return response.json({ message: 'Event id deleted successfully !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
  
}

export { DepartmentsController }

