import React, { useState, useRef } from 'react';
import Sepet from './Sepet';
import { CiShoppingCart } from 'react-icons/ci';
import Product from './Product';
import { products } from './data/data';
import './styles/Home.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


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
      <Navbar expand="lg" className="bg-body-tertiary">
    <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h2 style={{ margin: 0 }}>Product Page</h2> 
      <div
        ref={sepetIconRef}
        onClick={() => setSepetiGoster(!sepetiGoster)}
        style={{ position: 'relative', cursor: 'pointer' }}
      >
        <CiShoppingCart className="sepet-icon" size={60} color='white' />
        {sepetiGoster && (
          <div
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              border: '1px solid black',
              right: 0,
              marginTop: 0,
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
    </Container>
  </Navbar>
</header>

      
      <div className="banner">
        <h2>Product Listing Page</h2>
        <p>  Bu proje, tarım makineleri ürünlerini listeleyen bir Product Listing Page'dir. 
  Kullanıcılar, ürünler hakkında detaylı bilgi alabilir, fiyatları görebilir ve ürünleri sepete ekleyebilir. 
  Ayrıca, ürünlerin resimleri dinamik olarak yüklenmekte ve kullanıcı deneyimi ön planda tutulmaktadır. </p>
      </div>

      
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map(product => (
          <Product
            key={product.id}
            item={product}
            sepeteEkle={sepeteEkle}
            urunuTamamenCikar={urunuTamamenCikar}
            sepet={sepet}

          />
        ))}
      </div>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Product Page Project
              </h6>
              <p>
                 Tasarlamış olduğum sayfada ürünler, açıklamaları ve fiyatları görülmektedir. 
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Fatih, Allianz Kampüs, Sanayi Caddesi No:35 Gaziemir/İZMİR
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                elvan_celik@yanmar.com
              </p>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
    </div>
  );
}

export default Home;