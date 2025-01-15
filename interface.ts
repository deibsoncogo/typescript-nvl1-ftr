interface Person {
  id: number
  name: string
}

interface Person {
  isActive: boolean
}

interface Teacher extends Person {
  subjects: string[]
}

interface Student extends Person {
  age: number
}

const teacher: Teacher = {
  id: 1,
  name: "Rodrigo",
  subjects: ["JavaScript", "TypeScript"],
  isActive: true,
}

const studentA: Student = {
  id: 1,
  name: "João",
  age: 23,
  isActive: false,
}

const studentB = {} as Student
