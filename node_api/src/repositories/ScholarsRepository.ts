import { Repository, EntityRepository } from 'typeorm'
import { Scholar } from '../entities/Scholar'

@EntityRepository(Scholar)
class ScholarsRepository extends Repository<Scholar> {

}

export { ScholarsRepository }

