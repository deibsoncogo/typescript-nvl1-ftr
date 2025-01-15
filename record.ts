const scores: Record<number, string> = {
  10: "Rodrigo",
  15: "João",
}

type Profile = "admin" | "user" | "guest"

const user: Record<Profile, number> = {
  admin: 1,
  guest: 2,
  user: 3,
}

interface User {
  name: string
  email: string
}

const users: Record<number, User> = {
  1: { name: "Lucas", email: "lucas@email.com" },
}
