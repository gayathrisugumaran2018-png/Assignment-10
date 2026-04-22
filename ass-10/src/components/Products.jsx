import React from 'react'
import { products } from '../Data/product'
import StarRating from './StarRating'

function Products() {

    const handleCart = (id) => {
alert("Item Added to Cart")
    }
    

  return (
    <div className='max-w-6xl mx-auto p-6 '>
        <h2 className='text-2xl font-medium mb-8'>Our Products</h2>

        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.map(data => (
                    <div key={data.id} className='bg-pink-200 shadow-md rounded-lg p-4'>
                        <img className='w-full h-60 object-cover rounded-md' src= {data.Image} alt=''></img>

<h3 className='text-lg font-semibold mt-3'>{data.name}</h3>
<div className='flex items-center justify-between mt-3 mb-2'>
  <p className='text-lg font-bold text-blue-600'>₹{data.price}</p>

  <StarRating rating={data.rating || 4} />
</div>


{
    data.isStock ? (
        <p className='bg-green-200 text-green-700 rounded font-semibold px-2 py-1 text-center'>In Stock</p>
     ) : (
        <p className='bg-red-200 text-red-700 rounded font-semibold px-2 py-1 text-center'>Out of Stock</p>
     )
        }
<button onClick={ () => handleCart(data.id)} className='mt-4 bg-blue-400 text-white font-semibold w-full py-1 rounded-md cursor-pointer'>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Products