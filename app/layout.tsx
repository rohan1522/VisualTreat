'use client';
import { useEffect, useState } from 'react';
import './globals.css';
import './layout.css';
import { ModalProvider } from './components/BookDemoModal'; // Import the ModalProvider

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50); // Add 'scrolled' class after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <html lang="en">
      <body>
        <ModalProvider>
          <div className="layout-container">
            <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
              <div className="header-inner">
                <a href="/" className="logo">
                  <img src="/cropped-Logo_VisualTreat.png" alt="VisualTreat Logo" />
                </a>
                <nav className="primary-nav">
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/services">Services</a>
                  <a href="/portfolio">Portfolio</a>
                </nav>
                <div className="header-cta-buttons">
                  <button className="book-demo-button">Book a Demo</button>
                </div>
              </div>
            </header>

            <main className="main-content">{children}</main>

            <footer className="site-footer">
              <div className="footer-top">
                <div className="footer-brand">
                  <h3>VisualTreat</h3>
                  <p>Your Creative Team’s Creative Team™</p>
                </div>
                <div className="footer-links">
                  <div>
                    <h4>Services</h4>
                    <ul>
                      <li><a href="/services#design">Design</a></li>
                      <li><a href="/services#print">Print</a></li>
                      <li><a href="/services#events">Events</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4>Company</h4>
                    <ul>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/careers">Careers</a></li>
                      <li><a href="/blog">Blog</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4>Follow Us</h4>
                    <ul className="socials">
                      <li><a href="#"><span>Facebook</span></a></li>
                      <li><a href="#"><span>Twitter</span></a></li>
                      <li><a href="#"><span>LinkedIn</span></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} VisualTreat. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </ModalProvider>
      </body>
    </html>
  );
}
