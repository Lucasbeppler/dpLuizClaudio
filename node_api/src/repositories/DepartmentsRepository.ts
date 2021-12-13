import { Repository, EntityRepository } from 'typeorm'
import { Department } from '../entities/Department'

@EntityRepository(Department)
class DepartmentsRepository extends Repository<Department> {

}

export { DepartmentsRepository }

