import type { ValidationProps, LoginProps } from "../types/allProps";


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

export const User: LoginProps[] = [
  {
    name: "Chilzia",
    surname: "Macamo",
    username: "chilzia",
    email: "chilzia@gmail.com",
    password: "123456",
    confirmPassword: "123456",
  },
  {
    name: "Gabriel",
    surname: "Cuna",
    username: "gabriel",
    email: "gabriel@gmail.com",
    password: "123456",
    confirmPassword: "123456",
  }
]

const storageKey = 'users'
if (!localStorage.getItem(storageKey)) {
  localStorage.setItem(storageKey, JSON.stringify(User))
}

export const GetUsers = (): LoginProps[] => {
  const data = localStorage.getItem(storageKey)
  return data ? JSON.parse(data) : []
}

export const SaveSession = (user: LoginProps) => {
  localStorage.setItem('currentUser', JSON.stringify(user))
}
const sessionKey = 'loggedUser';

export const AddUsers = (user: ValidationProps): boolean => {
  const users = GetUsers()

  const emailExists = users.some((u) => u.email === user.email)
  if (emailExists) return false

  users.push(user)
  localStorage.setItem(storageKey, JSON.stringify(users))
  return true
}



export const GetSession = (): ValidationProps | null => {
  const session = localStorage.getItem(sessionKey)
  return session ? JSON.parse(session) : null
}

