import { Request, Response } from 'express'
import { EmployeesServices } from '../services/EmployeesServices'

class EmployeesController {

  async create(request: Request, response: Response) {
    const { name, roleId, scholarId, departmentId, cost, phone, email, } = request.body

    const employeeServices = new EmployeesServices()

    try {
      const employee = await employeeServices.create({ name, roleId, scholarId, departmentId, cost, phone, email, })
      return response.json(employee)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async index(request: Request, response: Response) {
    const employeeServices = new EmployeesServices()

    try {
      const employee = await employeeServices.index()
      return response.json(employee)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const employeeServices = new EmployeesServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const employee = await employeeServices.show({ id })
      return response.json(employee)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    const employeeServices = new EmployeesServices()
    const { name, roleId, scholarId, departmentId, cost, phone, email, } = request.body
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const employee = await employeeServices.update({ id, name, roleId, scholarId, departmentId, cost, phone, email, })
      return response.json(employee)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const employeeServices = new EmployeesServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const employee = await employeeServices.delete({ id })
      return response.json({ message: 'Event id deleted successfully !!' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { EmployeesController }

