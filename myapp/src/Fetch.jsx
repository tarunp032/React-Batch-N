import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fetch = () => {
  const [data,setData] = useState('')
  const [toggle,setToggle] = useState(true)

  const fetchData = async() => {
  const result = await axios.get('https://fakestoreapi.com/products')

  console.log(`>>>>>>result`,result.data)
  setData(result.data)
  }

  const abc = async () => {
    setToggle(!toggle)
  }

  useEffect(()=> {
    fetchData()
  },[toggle])

  console.log(`>>>>>>>>toggle`,toggle)
  console.log(`>>>>>>data`,data)

  return (
    <div>
    <button onClick={abc}>Change</button>
      <h1>Fetch</h1>
    </div>
  )
}

export default Fetch
