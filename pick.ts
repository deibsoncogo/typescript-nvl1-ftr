interface Book {
  title: string
  pages: number
  author: string
}

const book: Pick<Book, "title" | "pages"> = {
  title: "TypeScript",
  pages: 150,
}
