import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, ManyToOne } from 'typeorm'

import { v4 as uuid } from 'uuid' // identificador universal unico
import { Department } from './Department';
import { Role } from './Role';
import { Scholar } from './Scholar';

@Entity('employees')
class Employee {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
  
  @Column()
  roleId: string;
   
  @Column()
  scholarId: string;
  
  @Column()
  departmentId: string;
  
  @Column()
  cost: string;
  
  @Column()
  phone: string;
  
  @Column()
  email: string;
    
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Role, role => role.employees)
  role: Role;

  @ManyToOne(() => Scholar, scholar => scholar.employees)
  scholar: Scholar;

  @ManyToOne(() => Department, department => department.employees)
  department: Department;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Employee }
