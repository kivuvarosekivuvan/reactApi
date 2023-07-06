// import {Link} from 'react-router-dom'
// import {useState} from 'react'
// import './style.css'

// const AddProduct =()=> {

//   const [newProduct, setNewProduct] = useState({
//       id: "",
//       title: "",
//       description: "",
//       price: "",
//       discountPercentage: "",
//       rating: "",
//       stock: "",
//       brand: "",
//       category: "",
//   })

//    const {id, title, description, price, discountPercentage, rating, stock, brand, category} = newProduct;
  
//   console.log(id, title, description, price, discountPercentage, rating, stock, brand, category)

//  const handleChange =(e)=> {
//    setNewProduct({
//      ...newProduct,
//      [e.target.name]: [e.target.value]
//    })
   
//  }

//   const handleSubmit = async()=> {
//     const response = await fetch('https://dummyjson.com/products/add', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ id, title, description, price, discountPercentage, rating, stock, brand, category
//   })
//     })
//    const result = await response.json()
//     console.log(result)
//   }
  
//   return (
      
//     <div className='add'>
//         <h1>ADD NEW PRODUCT</h1>
//       <input name='id' value={newProduct.id} type='text' placeholder="Enter product id" onChange={handleChange} />
//       <input name='title' value={newProduct.title} type='text' placeholder="Enter product title" onChange={handleChange} />
      
      
//       <input name='description' value={newProduct.description} type='text' placeholder="Enter product description" onChange={handleChange} />
  
//       <input name='price' value={newProduct.price} type='text' placeholder="Enter product price" onChange={handleChange} />
      
//       <input name='discountPercentage' value={newProduct.discountPercentage} type='text' placeholder="Enter product discount" onChange={handleChange} />
//       <input name='rating' value={newProduct.rating}  type='text' placeholder="Enter product rating" onChange={handleChange} />
     
//       <input name='stock' value= {newProduct.stock} type='text' placeholder="Enter product stock" onChange={handleChange} />
//       <input name='brand' value={newProduct.brand}  type='text' placeholder="Enter product brand" onChange={handleChange} />
     
     
    
// <br/>
// <br/>
//        <button onClick={handleSubmit}>
//          ADD PRODUCT
//         </button>
      
//       <Link to='/products'>
//         <button>
//           PRODUCTS
//         </button>
//       </Link>

//     </div>
//     )
// }
  

// export default AddProduct;

import { Link } from 'react-router-dom';
import { useState } from 'react';
import './style.css';

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    id: '',
    title: '',
    description: '',
    price: '',
    discountPercentage: '',
    rating: '',
    stock: '',
    brand: '',
    category: '',
    image: '', // Added image property
  });

  const { id, title, description, price, discountPercentage, rating, stock, brand, category, image } = newProduct;

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      setNewProduct({
        ...newProduct,
        [e.target.name]: e.target.files[0], // Update image value with selected file
      });
    } else {
      setNewProduct({
        ...newProduct,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('id', id);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('discountPercentage', discountPercentage);
    formData.append('rating', rating);
    formData.append('stock', stock);
    formData.append('brand', brand);
    formData.append('category', category);
    formData.append('image', image); // Append image file to the form data

    const response = await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <div className='add'>
      <h1>ADD NEW PRODUCT</h1>
      <table>
        <tbody>
        <div className='firstpart'>
          <tr>
            <td>Product ID:</td>
            <td>
              <input name='id' value={id} type='text' placeholder='Enter product id' onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Product Title:</td>
            <td>
              <input name='title' value={title} type='text' placeholder='Enter product title' onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Product Description:</td>
            <td>
              <input name='description' value={description} type='text' placeholder='Enter product description' onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Product Price:</td>
            <td>
              <input name='price' value={price} type='text' placeholder='Enter product price' onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Product Discount:</td>
            <td>
              <input name='discountPercentage' value={discountPercentage} type='text' placeholder='Enter product discount' onChange={handleChange} />
            </td>
          </tr>
         </div>
         <div className='secondpart'>
          <tr>
            <td>Product Rating:</td>
            <td>
              <input name='rating' value={rating} type='text' placeholder='Enter product rating' onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Product Stock:</td>
            <td>
              <input name='stock' value={stock} type='text' placeholder='Enter product stock' onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Product Brand:</td>
            <td>
              <input name='brand' value={brand} type='text' placeholder='Enter product brand' onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Product Category:</td>
            <td>
              <input name='category' value={category} type='text' placeholder='Enter product category' onChange={handleChange} />
            </td>
          </tr>
          <tr>
            <td>Product Image:</td>
            <td>
              <input name='image' type='file' onChange={handleChange} />
            </td>
          </tr>
          </div>
        </tbody>
      </table>

      <br />
      <br />
      <button onClick={handleSubmit} className='btn1'>ADD PRODUCT</button>

      <Link to='/products'>
        <button className='btn2'>PRODUCTS</button>
      </Link>
    </div>
  );
};

export default AddProduct;