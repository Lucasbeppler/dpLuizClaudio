import { getCustomRepository } from 'typeorm'
import { DepartmentsRepository } from '../repositories/DepartmentsRepository'

interface IDepartmentsCreate {
  name: string;
}

interface IDepartmentsShow {
  id: string
}


class DepartmentsServices {

  async create({ name }: IDepartmentsCreate) {

    const departmentsRepository = getCustomRepository(DepartmentsRepository)

    const departments = departmentsRepository.create({
      name,
    })

    await departmentsRepository.save(departments)

    return departments
  }

  async index() {
    const departmentsRepository = getCustomRepository(DepartmentsRepository)

    const departments = await departmentsRepository.find()

    return departments;
  }

  async show({ id }: IDepartmentsShow) {
    const departmentsRepository = getCustomRepository(DepartmentsRepository)

    const departments = await departmentsRepository.findOne({ id })

    if (!departments) {
      throw new Error('Department id not found!!')
    }

    return departments;
  }

  async delete({ id }: IDepartmentsShow) {
    const departmentsRepository = getCustomRepository(DepartmentsRepository)

    const departments = await departmentsRepository.findOne({ id })

    if (!departments) {
      throw new Error('Department id not found!!')
    }

    return await departmentsRepository.delete({ id })
  }

}

export { DepartmentsServices }