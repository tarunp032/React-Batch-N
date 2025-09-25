import { useState, useEffect } from "react"
import ProductForm from "./Productform"

function Product(props) {
  const [items, setItems] = useState(props.products || [])

  useEffect(() => {
    setItems(props.products)
    console.log("Product:", props.products) 
  }, [props.products])

  function addItemHandler(newItem) {
    console.log("add new data:", newItem)
    setItems([newItem, ...items])
  }

  if (props.loading) {
    console.log("Loading Products...") 
    return <h2>Loading...</h2>
  }

  return (
    <div>
      <h2>Product Page</h2>
      <ProductForm onAdd={addItemHandler} />
      {console.log("Current Items:", items)}
    </div>
  )
}

export default Product
