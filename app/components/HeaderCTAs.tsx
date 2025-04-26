'use client';

import React, { useState } from 'react';
import BookDemoModal from './BookDemoModal';

export const HeaderCTAs = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="header-cta-buttons">
        <button className="book-demo-button" onClick={openModal}>
          Book a Demo
        </button>
        <a href="/contact" className="contact-us-button">
          Contact Us
        </a>
      </div>

      <BookDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};
