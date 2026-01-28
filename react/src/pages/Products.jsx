import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Products = () => {

    const [products, setProducts] = useState([])


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    },[])

    // const products = [
    //     {id:1,name:"Laptop",price:"30000", description: 'Acer Laptop i5 10th gen'},
    //     {id:2,name:"Mouse",price:"1000", description: 'gaming mouse with RGB light'},
    //     {id:3,name:"Mobile",price:"50000", description: '16gb ram'},
    //     {id:4,name:"Keyboard",price:"3000", description: 'gaming keyboard'}
    // ]
    
  return (
    <div>
        <h1>Products</h1>
        {products.map((product)=>(
             <div key={product.id}>
                <h1>{product.title}</h1>
                <h4>{product.price}</h4>
                <Link to={`/product/${product.id}`}>
                    View Details
                </Link>
             </div>   
        ))}
    </div>
  )
}

export default Products