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

const storageKey = 'users';
const sessionKey = 'loggedUser';

export const GetUsers = (): ValidationProps[] => {
  const data = localStorage.getItem(storageKey)
  return data ? JSON.parse(data) : []
}

export const AddUsers = (user: ValidationProps): boolean => {
  const users = GetUsers()

  const emailExists = users.some((u) => u.email === user.email)
  if (emailExists) return false

  users.push(user)
  localStorage.setItem(storageKey, JSON.stringify(users))
  return true
}

export const SaveSession = (user: ValidationProps): void => {
  localStorage.setItem(sessionKey, JSON.stringify(user))
}

export const GetSession = (): ValidationProps | null => {
  const session = localStorage.getItem(sessionKey)
  return session ? JSON.parse(session) : null
}

