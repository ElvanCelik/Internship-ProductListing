import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/Product.css';
import ProductImage from './ProductImage'; // Dinamik resim bileşeni

const Product = ({ item, sepeteEkle }) => {
  return (
    <Card style={{ width: '18rem', margin: '20px' }}>
      {/* Dinamik olarak ürün resmi gösteriliyor */}
      <ProductImage productId={item.id} />

      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
        <Card.Text>Fiyat: {item.price} TL</Card.Text>
        
       
        <Button className='card-sepeteEkle-button' onClick={() => sepeteEkle(item)}>
          Sepete Ekle
        </Button>
        
      
        <Link to={`/product/${item.id}`} style={{ marginTop: '10px', textDecoration: 'none' }}>
          <Button className='card-detailPage-button'>Detay</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;

