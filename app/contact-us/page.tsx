// app/contact/page.tsx
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us – VisualTreat',
  description: 'Reach out to VisualTreat for design, printing, and event management solutions.',
};

export default function Contact() {
  return (
    <main className={styles.main}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Image
            src="/cropped-Logo_VisualTreat.png"
            alt="VisualTreat Logo"
            width={160}
            height={60}
          />
          <h1>Let’s Get in Touch</h1>
          <p>Have a project in mind? Fill out the form or use the info below—we’re here to help.</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className={styles.contactSection}>
        <div className={styles.formContainer}>
          <h2>Send a Message</h2>
          <form className={styles.form}>
            <input type="text" placeholder="Full Name *" required />
            <input type="email" placeholder="Email Address *" required />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message *" rows={5} required />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.infoContainer}>
          <h2>Contact Information</h2>
          <div className={styles.infoGrid}>
            <div>
              <h4>Address</h4>
              <p>
                Office No 5, Siddhartha Darshan,<br/>
                Dada Patil Marg, near Railway Station,<br/>
                Naupada, Thane West, Thane – 400602
              </p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+91 98198 39245</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>info@visualtreat.in</p>
            </div>
            <div>
              <h4>Hours</h4>
              <p>10:00 AM – 9:00 PM (Mon–Sat)</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
