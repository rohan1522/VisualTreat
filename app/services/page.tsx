'use client';
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { useModal } from '../components/BookDemoModal'; // Import the modal context

const Services = () => {
  const { openModal } = useModal(); // Access the modal's open function

  return (
    <div className={`${styles.theme} ${styles.wholepage}`}>

      {/* === Hero === */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Premium Design, Print & Events</h1>
          <p>
            Capture attention. Print quality. Memorable experiences—tailored solutions for brands that mean business.
          </p>
          <button className={styles.heroButton} onClick={openModal}>Book a Demo</button>
        </div>
      </section>

      {/* === Service Cards === */}
      <section className={styles.servicesGrid}>
        {[
          {
            title: 'Designing',
            desc: 'Crafting logos, stationery & branding that tell your story.',
            img: 'https://source.unsplash.com/collection/190727/200x200',
          },
          {
            title: 'Printing',
            desc: 'High-fidelity prints—from brochures to banners—with flawless color.',
            img: 'https://source.unsplash.com/collection/1127163/200x200',
          },
          {
            title: 'Event Management',
            desc: 'Seamless planning & execution for corporate & personal events.',
            img: 'https://source.unsplash.com/collection/827743/200x200',
          },
        ].map((svc) => (
          <div key={svc.title} className={styles.serviceCard}>
            <Image
              src={svc.img}
              width={80}
              height={80}
              alt={svc.title}
              className={styles.cardIcon}
            />
            <h3>{svc.title}</h3>
            <p>{svc.desc}</p>
            <a href="#" className={styles.learnMore}>
              Learn more →
            </a>
          </div>
        ))}
      </section>

      {/* === How It Works === */}
      <section className={styles.howItWorks}>
        <h2>How We Work</h2>
        <ol className={styles.timeline}>
          <li>
            <strong>Discover:</strong> We dive into your brand, audience & goals.
          </li>
          <li>
            <strong>Create:</strong> Design concepts, review & iterate with you.
          </li>
          <li>
            <strong>Deliver:</strong> Final assets, prints or event on time—every time.
          </li>
        </ol>
      </section>

      {/* === Social Proof === */}
      <section className={styles.socialProof}>
        <h2>Trusted by</h2>
        <div className={styles.logos}>
          {[
            '/logos/shopify.svg',
            '/logos/salesforce.svg',
            '/logos/reddit.svg',
            '/logos/amazon.svg',
          ].map((logo) => (
            <Image key={logo} src={logo} width={100} height={40} alt="Client logo" />
          ))}
        </div>
      </section>

      {/* === Final CTA === */}
      <section className={styles.finalCta}>
        <h2>Ready to elevate your brand?</h2>
        <button className={styles.ctaButton} onClick={openModal}>Book a Demo</button>
      </section>
    </div>
  );
};

export default Services;