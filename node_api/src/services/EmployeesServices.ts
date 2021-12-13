import { getCustomRepository } from 'typeorm'
import { EmployeesRepository } from '../repositories/EmployeesRepository'

interface IEmployeesCreate {
  name: string,
  roleId: string,
  scholarId: string,
  departmentId: string,
  cost: string,
  phone: string,
  email: string,
}

interface IEmployeesUpdate {
  id: string,
  name: string,
  roleId: string,
  scholarId: string,
  departmentId: string,
  cost: string,
  phone: string,
  email: string,
}

interface IEmployeesShow {
  id: string
}


class EmployeesServices {

  async create(employee: IEmployeesCreate) {

    const employeesRepository = getCustomRepository(EmployeesRepository)

    const employees = employeesRepository.create(employee)

    await employeesRepository.save(employees)

    return employees
  }

  async index() {
    const employeesRepository = getCustomRepository(EmployeesRepository)

    const employees = await employeesRepository.find()

    return employees;
  }

  async show({ id }: IEmployeesShow) {
    const employeesRepository = getCustomRepository(EmployeesRepository)

    const employees = await employeesRepository.findOne({ id })
    
    if (!employees) {
      throw new Error('Employee id not found!!')
    }
    
    return employees;
  }
  
  async update({ id, name, roleId, scholarId, departmentId, cost, phone, email, }: IEmployeesUpdate) {
    const employeesRepository = getCustomRepository(EmployeesRepository)

    const employee = await employeesRepository.save({ id, name, roleId, scholarId, departmentId, cost, phone, email, })

    return employee ;
  }

  async delete({ id }: IEmployeesShow) {
    const employeesRepository = getCustomRepository(EmployeesRepository)

    const employees = await employeesRepository.findOne({ id })

    if (!employees) {
      throw new Error('Employee id not found!!')
    }

    return await employeesRepository.delete({ id })
  }

}

export { EmployeesServices }