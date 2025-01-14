//  definindo a entrada e retorno de uma função
function sum(x: number, y: number): number {
  return x + y
}

sum(7, 3)

const showMessage = (name: string, age: number): string => {
  return `Olá ${name}, fiquei sabendo que você tem ${age} anos`
}

showMessage("Antonio Silva", 38)
