import { useState } from "react"

function ProductForm(props) {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")

  function submitHandler(e) {
    e.preventDefault()

    if (!title || !price || !category) {
      return
    }

    const newItem = {
      id: Date.now(),
      title,
      price,
      category,
    }

    console.log("Form Submit Data:", newItem)
    props.onAdd(newItem)

    setTitle("")
    setPrice("")
    setCategory("")
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  )
}

export default ProductForm
