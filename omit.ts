interface Book {
  title: string
  pages: number
  author: string
  description: string
}

const book: Omit<Book, "title" | "description"> = {
  author: "Rodrigo",
  pages: 458,
}
