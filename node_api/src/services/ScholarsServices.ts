import { getCustomRepository } from 'typeorm'
import { ScholarsRepository } from '../repositories/ScholarsRepository'

interface IScholarsCreate {
  name: string;
}

interface IScholarsShow {
  id: string
}


class ScholarsServices {

  async create({ name }: IScholarsCreate) {

    const scholarsRepository = getCustomRepository(ScholarsRepository)

    const scholars = scholarsRepository.create({ name})

    await scholarsRepository.save(scholars)

    return scholars
  }

  async index() {
    const scholarsRepository = getCustomRepository(ScholarsRepository)

    const scholars = await scholarsRepository.find()

    return scholars;
  }

  async show({ id }: IScholarsShow) {
    const scholarsRepository = getCustomRepository(ScholarsRepository)

    const scholars = await scholarsRepository.findOne({ id })

    if (!scholars) {
      throw new Error('Scholar id not found!!')
    }

    return scholars;
  }

  async delete({ id }: IScholarsShow) {
    const scholarsRepository = getCustomRepository(ScholarsRepository)

    const scholars = await scholarsRepository.findOne({ id })

    if (!scholars) {
      throw new Error('Scholar id not found!!')
    }

    return await scholarsRepository.delete({ id })
  }

}

export { ScholarsServices }