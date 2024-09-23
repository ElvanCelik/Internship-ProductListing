import React from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { products } from './data/data';
import './styles/ProductDetail.css';
import { IoReturnUpBackOutline } from "react-icons/io5";
import ProductImage from './ProductImage';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Ürün bulunamadı</h2>;
  }

  const handleBackClick = () => {
    navigate('/'); 
  };

  return (
    <div className='product-detail-page'>
      <header className='header-detailpage'>
        <h3>Product Detail Page</h3>
        <IoReturnUpBackOutline className='return-icon' onClick={handleBackClick} size={60} color='white' />
      </header>
      
      <div className='card'>
        <ProductImage productId={product.id} />
        <h1 className='product-title'>{product.name}</h1>
        <p className='product-description'>{product.itemDescription}</p>
        <p className='product-price'>Fiyat: {product.price} TL</p>
      </div>

      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
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
};

export default ProductDetailPage;



