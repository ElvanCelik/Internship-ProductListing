import React from 'react'

import productimg2 from './images/product2.jpg';
import productimg3 from './images/product4.jpeg';
import productimg4 from './images/product5.jpg';
import productimg5 from './images/product6.jpg';
import productimg6 from './images/product7.jpg';
import productimg8 from './images/product8.jpg';
import productimg9 from './images/product9.jpg';
import productimg11 from './images/product11.jpg';

const productImages = {
    
    2: productimg2,
    3: productimg3,
    4: productimg4,
    5: productimg5,
    6: productimg6,
    8: productimg8,
    9: productimg9,
    11: productimg11,
  };


  function ProductImage({ productId }) {
    
    const productImage = productImages[productId];
  
    return (
      <div>
        {productImage ? (
          <img src={productImage} alt={`Product ${productId}`} style={{ width: '100%', height: 'auto' }} />
        ) : (
          <p>Resim Bulunamadı</p>  // Ürün resmini bulamazsa gösterilecek mesaj
        )}
      </div>
    );
  }
  
  export default ProductImage;