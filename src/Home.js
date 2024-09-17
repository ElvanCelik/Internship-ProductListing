import React, { useState, useRef } from 'react';
import Sepet from './Sepet';
import { CiShoppingCart } from 'react-icons/ci';
import Product from './Product';
import { products } from './data/data';
import './styles/Home.css';

function Home() {
  const [sepet, setSepet] = useState([]); 
  const [sepetiGoster, setSepetiGoster] = useState(false); 
  const sepetIconRef = useRef(null); 

  
  const sepeteEkle = (item) => {
    const addedProduct = sepet.find((urun) => urun.id === item.id);
    if (addedProduct) {
      setSepet(
        sepet.map((urun) =>
          urun.id === item.id ? { ...urun, miktar: urun.miktar + 1 } : urun
        )
      );
    } else {
      setSepet([...sepet, { ...item, miktar: 1 }]);
    }
  };

  
  const sepettenCikar = (item) => {
    const guncelSepet = sepet.map((urun) => {
      if (urun.id === item.id) {
        return urun.miktar > 1 ? { ...urun, miktar: urun.miktar - 1 } : urun;
      }
      return urun;
    });
    setSepet(guncelSepet);
  };

  
  const urunuTamamenCikar = (itemId) => {
    const guncelSepet = sepet.filter((urun) => urun.id !== itemId);
    setSepet(guncelSepet);
  };

  
  const sepetiBosalt = () => {
    setSepet([]);
  };


  return (
    <div>
      
      <header className='header'>
        <h1>Product Page</h1>
        <h3>Home</h3>
        <h3>Products</h3>

        <div
          ref={sepetIconRef}
          onClick={() => setSepetiGoster(!sepetiGoster)}
          style={{ position: 'relative', cursor: 'auto' }}>

          <CiShoppingCart className="sepet-icon" size={60} color='black' />

          
          {sepetiGoster && (
            <div
              style={{
                position: 'absolute',
                backgroundColor: 'white',
                border: '1px solid black',
                right:0,
                marginTop:0,
                zIndex: 999,
              }}
            >
              <Sepet
                sepet={sepet}
                sepeteEkle={sepeteEkle}
                sepettenCikar={sepettenCikar}
                urunuTamamenCikar={urunuTamamenCikar}
                sepetiBosalt={sepetiBosalt}
              />
            </div>
          )}
        </div>
      </header>

      
      <main style={{ padding: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map(product => (
          <Product
            key={product.id}
            item={product}
            sepeteEkle={sepeteEkle}
            urunuTamamenCikar={urunuTamamenCikar}
            sepet={sepet}

          />
        ))}
      </main>
    </div>
  );
}

export default Home;
