interface User {
  id: number
  name: string
  age?: number
  email: string
}

const newUser: User = {
  id: 1,
  name: "Rodrigo",
  email: "rodrigo@email.com",
}

const updateUser: Partial<User> = {
  email: "rodrigo@email.com.br",
}
