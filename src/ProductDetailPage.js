import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './data/data';
import productimg from './product.jpeg'; 


const ProductDetailPage = ({}) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' , border:'1px solid black'}}>
      <img src={productimg} width={300} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.color}</p>
      <p>Fiyat: {product.price} TL</p>
      
      
    </div>
  );
};

export default ProductDetailPage;
