'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { useModal } from './components/BookDemoModal'; // Import modal context

export default function Home() {
  const { openModal } = useModal(); // Access modal open function

  const carouselImages = [
    {
      src: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Design Project',
    },
    {
      src: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Print Project',
    },
    {
      src: 'https://images.pexels.com/photos/269321/pexels-photo-269321.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Event Project',
    },
    {
      src: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400',
      alt: 'Branding Project',
    },
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            Your <span className={styles.italic}>business’s</span> <br />
            <span className={styles.bold}>creative partner™</span>
          </h1>
          <p>
            At VisualTreat, we specialize in design, print, and events to help your brand stand out. Let’s create something extraordinary together.
          </p>
          <button className={styles.bookDemoBtn} onClick={openModal}>
            Book a Demo
          </button>
        </div>
        <div className={styles.carousel}>
          {/* First Vertical Carousel */}
          <div className={`${styles.carouselContainer} ${styles.downward}`}>
            {carouselImages.map((image, index) => (
              <div key={index} className={styles.carouselItem}>
                <Image src={image.src} alt={image.alt} width={200} height={150} />
              </div>
            ))}
          </div>
          {/* Second Vertical Carousel */}
          <div className={`${styles.carouselContainer} ${styles.upward}`}>
            {carouselImages.map((image, index) => (
              <div key={index} className={styles.carouselItem}>
                <Image src={image.src} alt={image.alt} width={200} height={150} />
              </div>
            ))}
          </div>
          {/* Third Vertical Carousel */}
          <div className={`${styles.carouselContainer} ${styles.downward}`}>
            {carouselImages.map((image, index) => (
              <div key={index} className={styles.carouselItem}>
                <Image src={image.src} alt={image.alt} width={200} height={150} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}