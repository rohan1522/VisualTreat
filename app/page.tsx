
import React from 'react';
import Head from 'next/head';
import './page.css';

const Page = () => {
  return (
    <div >
      <div className='page1'>
        <div className="logo">
          Xfive
        </div>
        <div>
          <div className="page-content">
            <div className="centered-text">
              <h1>Digital Solutions That Make a Difference</h1>
            </div>
            <div className="links">
              <a href="/case-studies" target="_blank" rel="noopener noreferrer">Case Studies</a>
              <a href="/services" target="_blank" rel="noopener noreferrer">Services</a>
              <a href="/contact-us" target="_blank" rel="noopener noreferrer">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      <div className='page2'>
        <div className="logo-container">
          Xfive
        </div>
      </div>
      <div className='page3'>
        <div className="image-grid">
          <div className="image-item">
            <div className="overlay-text">Sophisticated booking for luxury cruises</div>
            <img src="https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Luxury Cruises" />
          </div>
          <div className="image-item">
            <div className="overlay-text">Complex Shopify gift store design & dev</div>
            <img src="https://images.pexels.com/photos/17435380/pexels-photo-17435380/free-photo-of-box-on-a-bed.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shopify Gift" />
          </div>
        </div>
        <div className="image-grid">
          <div className="image-item1">
            <div className="overlay-text">Van accessories storefront </div>
            <img src="https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Luxury Cruises" />
          </div>
          <div className="image-item1">
            <div className="overlay-text">Ruby on Rails for an elder care startup</div>
            <img src="https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shopify Gift" />
          </div>
        </div>
       </div>
      

      <div className='page4'>
        <div className="review-content">
          <p>
            Their designs are exceptional and their<br />
            communication is great. They also do<br />
            things in a timely manner, which is<br />
            amazing.
          </p>
          <div className="review-link">Clutch Review</div>
        </div>
        
        <div className="review-image">
          <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Review Image" />
          <div className="imagecontent">
            <div className="imagename">Ingrid Getzan</div>
            <div className="imagenamedesc">Van Cafe</div>
          </div>
        </div>
      </div>
      <div className='page5'>
      <div className="logo-section">
          <img src="https://via.placeholder.com/100x50.png?text=YANMAR" alt="YANMAR" />
          <img src="https://via.placeholder.com/100x50.png?text=OECD" alt="OECD" />
          <img src="https://via.placeholder.com/100x50.png?text=Universiteit+Leiden" alt="Universiteit Leiden" />
          <img src="https://via.placeholder.com/100x50.png?text=Olera" alt="Olera" />
          <img src="https://via.placeholder.com/100x50.png?text=Van+Cafe" alt="Van Cafe" />
          <img src="https://via.placeholder.com/100x50.png?text=SmartRecruiters" alt="SmartRecruiters" />
          <img src="https://via.placeholder.com/100x50.png?text=BigCommerce" alt="BigCommerce" />
          <img src="https://via.placeholder.com/100x50.png?text=Shopify" alt="Shopify" />
          <img src="https://via.placeholder.com/100x50.png?text=SoDA" alt="SoDA" />
          <img src="https://via.placeholder.com/100x50.png?text=Rare+Assembly" alt="Rare Assembly" />
        </div>
      </div>
      <div className='page6'>
      
      </div>
    </div>
  );
}

export default Page;



