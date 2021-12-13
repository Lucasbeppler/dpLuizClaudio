import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, OneToMany } from 'typeorm'

import { v4 as uuid } from 'uuid' // identificador universal unico
import { Employee } from './Employee';

@Entity('roles')
class Role {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  salary: string;
    
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Employee, employee => employee.roleId)
  employees: Employee[];

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Role }
