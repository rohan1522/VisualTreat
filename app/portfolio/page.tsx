'use client';

import React from 'react';
import Head from 'next/head';
import styles from './page.module.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      category: 'Design',
      images: [
        {
          src: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Logo Design',
          text: 'Creative logo designs that define your brand identity.',
        },
        {
          src: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Stationery Design',
          text: 'Elegant stationery designs for professional branding.',
        },
        {
          src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Brand Guidelines',
          text: 'Comprehensive brand guidelines for consistency.',
        },
        {
          src: 'https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Social Media Graphics',
          text: 'Eye-catching graphics for social media campaigns.',
        },
      ],
    },
    {
      category: 'Print',
      images: [
        {
          src: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Brochure Printing',
          text: 'High-quality brochures that captivate your audience.',
        },
        {
          src: 'https://images.pexels.com/photos/4348405/pexels-photo-4348405.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Business Cards',
          text: 'Premium business cards that leave a lasting impression.',
        },
        {
          src: 'https://images.pexels.com/photos/4348406/pexels-photo-4348406.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Flyers',
          text: 'Vibrant flyers to promote your business effectively.',
        },
        {
          src: 'https://images.pexels.com/photos/4348407/pexels-photo-4348407.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Posters',
          text: 'Large-format posters for impactful advertising.',
        },
      ],
    },
    {
      category: 'Events',
      images: [
        {
          src: 'https://images.pexels.com/photos/269321/pexels-photo-269321.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Corporate Events',
          text: 'Seamless planning and execution of corporate events.',
        },
        {
          src: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Weddings',
          text: 'Memorable wedding experiences tailored to perfection.',
        },
        {
          src: 'https://images.pexels.com/photos/587742/pexels-photo-587742.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Product Launches',
          text: 'Flawless execution of product launch events.',
        },
        {
          src: 'https://images.pexels.com/photos/587743/pexels-photo-587743.jpeg?auto=compress&cs=tinysrgb&w=600',
          alt: 'Private Parties',
          text: 'Exclusive private parties with a personal touch.',
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Portfolio - VisualTreat</title>
      </Head>
      <div className={styles.portfolio}>
        <h1 className={styles.title}>Our Portfolio</h1>
        <p className={styles.description}>
          Discover our exceptional work in design, print, and events. We bring creativity and precision to every project.
        </p>
        <div className={styles.imageGrid}>
          {portfolioItems.map((category, index) => (
            <div key={index} className={styles.categorySection}>
              <h2 className={styles.categoryTitle}>{category.category}</h2>
              <div className={styles.categoryGrid}>
                {category.images.map((item, idx) => (
                  <div key={idx} className={styles.imageItem}>
                    <div className={styles.overlayText}>{item.text}</div>
                    <img src={item.src} alt={item.alt} className={styles.image} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;