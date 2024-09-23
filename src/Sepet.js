import React from 'react';
import './styles/Sepet.css';

const Sepet = ({ sepet, sepeteEkle, sepettenCikar, urunuTamamenCikar, sepetiBosalt }) => {

  const sepetToplamFiyat = () => {
    return sepet.reduce((total, item) => total + item.price * item.miktar, 0);

  };

  return (
    <div className='sepet'>
      <h3>Sepet</h3>

      {sepet.length === 0 ? (
        <p>Sepetinizde ürün bulunmamaktadır.</p>
      ) : (
        <>
          <ul>
            {sepet.map((item, index) => (
              <li key={index}>
                <div>
                  <span>{item.name}</span>
                  <span>{item.price} TL</span>
                  <div>
                    <button onClick={() => sepettenCikar(item)}>-</button>
                    <span>{item.miktar}</span>
                    <button onClick={() => sepeteEkle(item)}>+</button>
                    <button onClick={() => urunuTamamenCikar(item.id)} style={{ marginLeft: "10px" }}>Ürünü kaldır</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          
          <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
            Toplam: {sepetToplamFiyat()} TL
          </div>
          {sepet.length > 0 && (
            <button onClick={sepetiBosalt} style={{ padding: '20px', marginTop: "20px" }}>Sepeti Boşalt</button>
          )}
        </>
      )}
    </div>
  );
};

export default Sepet;
