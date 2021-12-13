import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, OneToMany } from 'typeorm'

import { v4 as uuid } from 'uuid' // identificador universal unico
import { Employee } from './Employee';

@Entity('departments')
class Department {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
    
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Employee, employee => employee.scholarId)
  employees: Employee[];

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Department }
