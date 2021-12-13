import { getCustomRepository } from 'typeorm'
import { RolesRepository } from '../repositories/RolesRepository'

interface IRolesCreate {
  name: string;
  salary: string;
}

interface IRolesShow {
  id: string
}


class RolesServices {

  async create({ name, salary }: IRolesCreate) {

    const rolesRepository = getCustomRepository(RolesRepository)

    const roles = rolesRepository.create({ name, salary})

    await rolesRepository.save(roles)

    return roles
  }

  async index() {
    const rolesRepository = getCustomRepository(RolesRepository)

    const roles = await rolesRepository.find()

    return roles;
  }

  async show({ id }: IRolesShow) {
    const rolesRepository = getCustomRepository(RolesRepository)

    const roles = await rolesRepository.findOne({ id })

    if (!roles) {
      throw new Error('Role id not found!!')
    }

    return roles;
  }

  async delete({ id }: IRolesShow) {
    const rolesRepository = getCustomRepository(RolesRepository)

    const roles = await rolesRepository.findOne({ id })

    if (!roles) {
      throw new Error('Role id not found!!')
    }

    return await rolesRepository.delete({ id })
  }

}

export { RolesServices }