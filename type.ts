type Product = {
  id: number
  name: string
}

type Drink = Product & {
  packaging: "ml" | "kg" | "cm"
}

type SelectResponse = Product[] | null

function newProduct(Product: Product) {}

newProduct({ id: 1, name: "Produto X" })

function selectProducts(): SelectResponse {
  return null
}
