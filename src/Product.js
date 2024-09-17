import React from 'react';
import { Link } from 'react-router-dom'; 
import productimg from './product.jpeg'; 

const Product = ({ item, sepeteEkle }) => {
  return (
    <div style={{ border: '1px solid black', padding: '10px', margin: '20px', width: "400px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={productimg} width={100} alt={item.name} />
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.color}</p>
      <h3>{item.price} TL</h3>
      <button onClick={() => sepeteEkle(item)}>Sepete Ekle</button>
      <Link to={`/product/`+item.id} style={{ marginTop: '10px', textDecoration: 'none', color: 'blue' }}>
        <button>Detay</button>
      </Link>
    </div>
  );
};

export default Product;
