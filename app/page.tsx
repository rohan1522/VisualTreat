'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { useModal } from './components/BookDemoModal'; // Import modal context
import Marquee from 'react-fast-marquee';

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

  const clientLogos = [
    {
      src: 'https://via.placeholder.com/150x50?text=Client+1',
      alt: 'Client 1',
    },
    {
      src: 'https://via.placeholder.com/150x50?text=Client+2',
      alt: 'Client 2',
    },
    {
      src: 'https://via.placeholder.com/150x50?text=Client+3',
      alt: 'Client 3',
    },
    {
      src: 'https://via.placeholder.com/150x50?text=Client+4',
      alt: 'Client 4',
    },
    {
      src: 'https://via.placeholder.com/150x50?text=Client+5',
      alt: 'Client 5',
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

      {/* Clients Section */}
      <section className={styles.clients}>
      <h2>Trusted by 500+ of the world's biggest brands</h2>

      {/* Left-to-Right Track */}
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        autoFill={true}
        className={styles.marquee}
      >
        {clientLogos.map((logo, i) => (
          <div key={`ltr-${i}`} className={styles.clientItem}>
            <Image src={logo.src} alt={logo.alt} width={150} height={50} />
          </div>
        ))}
      </Marquee>

      {/* Right-to-Left Track */}
      <Marquee
        gradient={false}
        speed={50}
        pauseOnHover={true}
        autoFill={true}
        direction="right"
        className={styles.marquee}
      >
        {clientLogos.map((logo, i) => (
          <div key={`rtl-${i}`} className={styles.clientItem}>
            <Image src={logo.src} alt={logo.alt} width={150} height={50} />
          </div>
        ))}
      </Marquee>
    </section>
    {/* About VisualTreat Section */}
<section className={styles.aboutVisualTreat}>
  <div className={styles.aboutContent}>
    <h4 className={styles.smallHeading}>A NEW STANDARD IN CREATIVE SERVICES</h4>
    <h2>
      The creative powerhouse your <span className={styles.italic}>brand</span> deserves
    </h2>
    <p>
      VisualTreat is your on-demand partner for impactful design, premium printing, and unforgettable event experiences.
      We help elevate your brand’s presence and connect you with your audience in meaningful ways.
    </p>
    <p>
      Our team becomes an extension of yours, allowing you to stay focused on your core business while we take your
      brand's creativity to the next level.
    </p>
    <button className={styles.bookDemoBtn} onClick={openModal}>
      Book a Demo
    </button>
  </div>
  <div className={styles.aboutImage}>
    <Image
      src="/images/visualtreat-about.jpg" // (replace with your image path)
      alt="Creative Services by VisualTreat"
      width={600}
      height={400}
    />
  </div>
</section>

{/* VisualTreat Highlights Section */}
<section className={styles.featuresSection}>
<div className={styles.featuresIntro}>
    <h2>Our Core Services</h2>
    <p>
      At VisualTreat, we bring your brand’s vision to life through expertly crafted design, top-tier printing, and seamless event management.
      Each service is designed to elevate your brand and make a lasting impact in the market.
    </p>
  </div>

  <div className={styles.featureCardsWrapper}>
  <div className={styles.featureCard}>
    <Image
      src="/images/designing-feature.png" // (replace with your uploaded image if needed)
      alt="Design Services"
      width={400}
      height={450}
      className={styles.featureImage}
    />
    <div className={styles.featureContent}>
      <h3>World-class Creative Design</h3>
      <p>Logos, branding, and visual identities crafted to leave a lasting impact. We design with purpose and precision.</p>
    </div>
  </div>

  <div className={styles.featureCard}>
    <Image
      src="/images/printing-feature.png" 
      alt="Printing Services"
      width={400}
      height={450}
      className={styles.featureImage}
    />
    <div className={styles.featureContent}>
      <h3>Premium Printing Solutions</h3>
      <p>From brochures to billboards, our prints deliver unmatched clarity, color accuracy, and finishing.</p>
    </div>
  </div>

  <div className={styles.featureCard}>
    <Image
      src="/images/event-feature.png"
      alt="Event Management"
      width={400}
      height={450}
      className={styles.featureImage}
    />
    <div className={styles.featureContent}>
      <h3>Flawless Event Experiences</h3>
      <p>Seamless planning and execution for corporate launches, exhibitions, and brand activations that wow your audience.</p>
    </div>
  </div>
  </div>
</section>

    </main>
  );
}