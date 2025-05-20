import type { ValidationProps } from "../types/allProps";


export const Users = [
  {
    id: 1,
    name: "Chilzia Macamo",
    email: "chilzia@gmail.com",
  },
  {
    id: 2,
    name: "Gabriel Cuna",
    email: "gabriel@gmail.com",
  }, {
    id: 3,
    name: "Luco Vilanculos",
    email: "luco@gmail.com",
  },
  {
    id: 4,
    name: "Maria Genia",
    email: "maria@gmail.com",
  },
  {
    id: 5,
    name: "Maud Uate",
    email: "maud@gmail.com",
  },
];

const storage_key = 'users'

export const getUsers = (): ValidationProps[] => {
  const data = localStorage.getItem(storage_key)
  return data ? JSON.parse(data) : []
}

export const addUser = (user: ValidationProps): void => {
  const users = getUsers()
  users.push(user)
  localStorage.setItem(storage_key, JSON.stringify(users))
}

