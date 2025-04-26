'use client';
import React, { createContext, useContext, useState } from 'react';
import './BookDemoModal.css';

interface ModalContextType {
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && <BookDemoModal isOpen={isOpen} onClose={closeModal} />}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within ModalProvider');
  return context;
};

const steps = ['email', 'company', 'team', 'thankyou'];

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookDemoModal = ({ isOpen, onClose }: BookDemoModalProps) => {
  const [step, setStep] = useState('email');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);

  const handleNext = () => {
    if (step === 'email') setStep('company');
    else if (step === 'company') setStep('team');
    else if (step === 'team') {
      setShowThankYou(true);
      setTimeout(() => {
        onClose();
        setStep('email');
        setEmail('');
        setCompany('');
        setTeamSize('');
        setShowThankYou(false);
      }, 2500);
    }
  };

  const handleBack = () => {
    if (step === 'company') setStep('email');
    else if (step === 'team') setStep('company');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNext();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="bookdemo-overlay">
      <div className="bookdemo-modal">
        <button className="close-button" onClick={onClose}>×</button>

        <div className="bookdemo-progress">
          <div className="bar" style={{ width: `${(steps.indexOf(step) + 1) * 25}%` }} />
        </div>

        {!showThankYou ? (
          <div className="bookdemo-content">
            {step === 'email' && (
              <>
                <h2>What's your email?</h2>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button disabled={!email} onClick={handleNext}>→</button>
              </>
            )}

            {step === 'company' && (
              <>
                <h2>Your company name?</h2>
                <input
                  type="text"
                  placeholder="Company Inc."
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <div className="step-buttons">
                  <button onClick={handleBack}>←</button>
                  <button disabled={!company} onClick={handleNext}>→</button>
                </div>
              </>
            )}

            {step === 'team' && (
              <>
                <h2>Team size?</h2>
                <div className="team-options">
                  {['1–10', '11–50', '51–200', '200+'].map((size) => (
                    <button
                      key={size}
                      className={teamSize === size ? 'selected' : ''}
                      onClick={() => setTeamSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <div className="step-buttons">
                  <button onClick={handleBack}>←</button>
                  <button disabled={!teamSize} onClick={handleNext}>Submit</button>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="thank-you-message">
            <h2>Thank you! 🎉</h2>
            <p>We’ll get back to you shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookDemoModal;