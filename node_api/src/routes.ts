import { Router } from 'express'

import { EmployeesController } from './controllers/EmployeesController'
import { DepartmentsController } from './controllers/DepartmentsController'
import { RolesController } from './controllers/RolesController '
import { ScholarsController } from './controllers/ScholarsController'

const routes = Router();

const employeesController = new EmployeesController()
const departmentsController = new DepartmentsController()
const rolesController = new RolesController()
const scholarsController = new ScholarsController()

routes.get('/employees', employeesController.index)
routes.post('/employees', employeesController.create)
routes.get('/employees/:id', employeesController.show)
routes.put('/employees/:id', employeesController.update)
routes.delete('/employees/:id', employeesController.delete)


routes.get('/departments', departmentsController.index)
routes.post('/departments', departmentsController.create)
routes.get('/departments/:id', departmentsController.show)
routes.delete('/departments/:id', departmentsController.delete)


routes.get('/roles', rolesController.index)
routes.post('/roles', rolesController.create)
routes.get('/roles/:id', rolesController.show)
routes.delete('/roles/:id', rolesController.delete)


routes.get('/scholars', scholarsController.index)
routes.post('/scholars', scholarsController.create)
routes.get('/scholars/:id', scholarsController.show)
routes.delete('/scholars/:id', scholarsController.delete)

export { routes }

