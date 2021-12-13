import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GlobalStyle } from "./styles/global";

interface IEmployee {
  id: string,
  name: string,
  roleId: string,
  scholarId: string,
  departmentId: string,
  cost: string,
  phone: string,
  email: string,
}

interface IRole {
  id: string,
  name: string,
  email: string,
}

interface IScholar {
  id: string,
  name: string,
}

interface IDepartment {
  id: string,
  name: string,
}

function App() {
  const [name, setName] = useState("");
  const [roleId, setRoleId] = useState("");
  const [departmentId, setDepartmentId ] = useState("");
  const [scholarId, setScholarId] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cost, setCost] = useState("");
  
  const [employees, setEmployees] = useState<IEmployee[]>([]);
  const [roles, setRoles] = useState<IRole[]>([]);
  const [scholars, setScholars] = useState<IScholar[]>([]);
  const [departments, setDepartments] = useState<IDepartment[]>([]);

  function getAllEmployees() {
    axios({
      method: 'get',
      url: 'http://localhost:3333/employees',
    })
      .then(response => {
        setEmployees(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function getAllRoles() {
    axios({
      method: 'get',
      url: 'http://localhost:3333/roles',
    })
      .then(response => {
        setRoles(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function getAllScholars() {
    axios({
      method: 'get',
      url: 'http://localhost:3333/scholars',
    })
      .then(response => {
        setScholars(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function getAllDepartments() {
    axios({
      method: 'get',
      url: 'http://localhost:3333/departments',
    })
      .then(response => {
        setDepartments(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(()=>{
    getAllEmployees();
    getAllRoles();
    getAllScholars();
    getAllDepartments();
  },[])

  function handleDelete(id: string) {
    axios({
      method: 'delete',
      url: 'http://localhost:3333/employees/' + id
    })
      .then(response => {
        const newEmployees = employees.filter(e => e.id !== id);

        setEmployees(newEmployees);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function handleSubmit(e: React.FormEvent ) {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:3333/employees',
      data: { name, roleId, departmentId, scholarId, email, cost, phone}
    })
      .then(response => {
        setEmployees([...employees, response.data]);

        setName("");
        setRoleId("");
        setDepartmentId("");
        setScholarId("");
        setEmail("");
        setPhone("");
        setCost("");
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className="App">

      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>role</th>
            <th>scholar</th>
            <th>department</th>
            <th>cost</th>
            <th>phone</th>
            <th>email</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {employees.map(d => (
            <tr key={d.id} >
              <td> {d.name} </td>
              <td> {roles.find(item => item.id === d.roleId)?.name} </td>
              <td> {scholars.find(item => item.id === d.scholarId)?.name} </td>
              <td> {departments.find(item => item.id === d.departmentId)?.name} </td>
              <td> {d.cost} </td>
              <td> {d.phone} </td>
              <td> {d.email} </td>
              <td>
                <button onClick={() => { handleDelete(d.id) }} className="delete">
                  <svg viewBox="0 0 24 24"  >
                    <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <form onSubmit={handleSubmit} >
        <h2>Faça o Cadastro dos seus empregados</h2>

        <input placeholder="name" value={name} onChange={(event) => { setName(event.target.value) }} />

        <input placeholder="phone" value={phone} onChange={(event) => { setPhone(event.target.value) }} />

        <select value={roleId} onChange={(event) => { setRoleId(event.target.value) }} >
            <option >selecione uma função</option>
            {roles.map(role => (
              <option value={role.id} key={role.id} > { role.name } </option>
            ))}
        </select>

        <select value={scholarId} onChange={(event) => { setScholarId(event.target.value) }} >
            <option >selecione uma escolaridade</option>
            {scholars.map(scholar => (
              <option value={scholar.id} key={scholar.id} > { scholar.name } </option>
            ))}
        </select>

        <select value={departmentId} onChange={(event) => { setDepartmentId(event.target.value) }} >
            <option >selecione um departamento</option>
            {departments.map(department => (
              <option value={department.id} key={department.id} > { department.name } </option>
            ))}
        </select>
        
        <input placeholder="email" value={email} onChange={(event) => { setEmail(event.target.value) }} />

        <input placeholder="cost" value={cost} onChange={(event) => { setCost(event.target.value) }} />

        <input type="submit" value="Cadastrar" ></input>
      </form>

      <GlobalStyle />
    </div>
  );
}

export default App;
