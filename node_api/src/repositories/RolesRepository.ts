import { Repository, EntityRepository } from 'typeorm'
import { Role } from '../entities/Role'

@EntityRepository(Role)
class RolesRepository extends Repository<Role> {

}

export { RolesRepository }

