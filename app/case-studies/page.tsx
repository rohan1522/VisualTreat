

'use client';

import React, { useState } from 'react';
import Head from 'next/head';
import styles from './page.module.css';

const CaseStudies = () => {
  const [filter, setFilter] = useState('All');
  const [visibleImages, setVisibleImages] = useState(2); // Initial number of images to display

  const allImages = [
    {
      category: 'All',
      images: [
        { src: 'https://images.pexels.com/photos/813011/pexels-photo-813011.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Luxury Cruises', text: 'Sophisticated booking for luxury cruises' },
        { src: 'https://images.pexels.com/photos/17435380/pexels-photo-17435380/free-photo-of-box-on-a-bed.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Shopify Gift', text: 'Complex Shopify gift store design & dev' },
        { src: 'https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Van Accessories', text: 'Van accessories storefront' },
        { src: 'https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Elder Care Startup', text: 'Ruby on Rails for an elder care startup' },
      ],
    },
    {
      category: 'MVP',
      images: [
        { src: 'https://images.pexels.com/photos/2303781/pexels-photo-2303781.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Van Accessories', text: 'Van accessories storefront' },
        { src: 'https://images.pexels.com/photos/601170/pexels-photo-601170.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Elder Care Startup', text: 'Ruby on Rails for an elder care startup' },
      ],
    },
    {
      category: 'Website',
      images: [
        { src: 'https://images.pexels.com/photos/2694452/pexels-photo-2694452.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Corporate Website', text: 'Corporate website redesign' },
        { src: 'https://images.pexels.com/photos/3183175/pexels-photo-3183175.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Portfolio Website', text: 'Personal portfolio website' },
      ],
    },
    {
      category: 'Ecommerce',
      images: [
        { src: 'https://images.pexels.com/photos/3945636/pexels-photo-3945636.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Ecommerce Platform', text: 'Advanced ecommerce platform' },
        { src: 'https://images.pexels.com/photos/545053/pexels-photo-545053.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Shopify Store', text: 'Shopify store setup' },
      ],
    },
  ];

  const handleLoadMore = () => {
    setVisibleImages(prevCount => prevCount + 2); // Load 2 more images on each click
  };

  const filteredImages = allImages.find(item => item.category === filter)?.images || [];

  const imagesToDisplay = filter === 'All' ? filteredImages.slice(0, visibleImages) : filteredImages;

  return (
    <>
      <Head>
        <title>Case Studies</title>
      </Head>
      <div className={styles.caseStudies}>
        <div className={styles.filterButtons}>
          {['All', 'MVP', 'Website', 'Ecommerce'].map(category => (
            <button
              key={category}
              className={`${styles.filterButton} ${filter === category ? styles.active : ''}`}
              onClick={() => {
                setFilter(category);
                setVisibleImages(2); // Reset visible images when changing filter
              }}
            >
              {category}
            </button>
          ))}
        </div>
        <div className={styles.csimageGrid}>
          {imagesToDisplay.map((image, index) => (
            <div key={index} className={styles.csimageItem}>
              <div className={styles.csoverlayText}>{image.text}</div>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        {filter === 'All' && visibleImages < filteredImages.length && (
          <div className={styles.loadMoreContainer}>
            <button onClick={handleLoadMore} className={styles.loadMoreButton}>
              Load more
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CaseStudies;




