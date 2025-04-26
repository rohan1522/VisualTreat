// app/about/page.tsx
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us – VisualTreat',
  description: 'Discover VisualTreat’s journey, values, and expertise in design, printing, and event management.',
};

export default function About() {
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
          <h1>About VisualTreat</h1>
          <p>
            With hands-on industry experience and strong partnerships, VisualTreat is your one‑stop creative service provider.
            We blend creativity, aesthetics, and commitment to deliver top‑tier design, printing, and events solutions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className={styles.story}>
        <h2>Our Story</h2>
        <p>
          Our commitment and dedication to every project have earned us enduring relationships with corporate clients.
          From concept to completion, we craft customized visuals—graphics, typography, thematic designs—and manage flawless
          events to convey your message simply and powerfully.
        </p>
      </section>

      {/* Core Services */}
      <section className={styles.services}>
        <h2>What We Offer</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Designing</h3>
            <p>Branding, marketing collaterals, promotional materials, and more.</p>
          </div>
          <div className={styles.card}>
            <h3>Printing</h3>
            <p>Stationery, promotional assets, packaging, and premium prints.</p>
          </div>
          <div className={styles.card}>
            <h3>Event Management</h3>
            <p>Stall & stage design, corporate functions, weddings, and family events.</p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={styles.values}>
        <h2>Our Core Values</h2>
        <ul>
          <li>
            <strong>Do Your Best Work</strong>
            <p>We give our all—for clients, for ourselves, and for each other.</p>
          </li>
          <li>
            <strong>Bring Good Energy</strong>
            <p>Optimism and a can-do spirit drive every project.</p>
          </li>
          <li>
            <strong>We Say What We Think</strong>
            <p>Honesty and openness build trust and strong partnerships.</p>
          </li>
        </ul>
      </section>

      {/* Client Carousel */}
      <section className={styles.clients}>
        <h2>Our Clients</h2>
        <div className={styles.carousel}>
          {[
            'Client_04','Client_07','Client_18','Client_01','Client_02',
            'Client_03','Client_20','Client_19','Client_17','Client_16',
            'Client_15','Client_10','Client_11','Client_12','Client_13',
            'Client_14','Client_09','Client_08','Client_06','Client_05'
          ].map((name) => (
            <div key={name} className={styles.clientLogo}>
              <Image
                src={`/clients/${name}.png`}
                alt={name.replace('_', ' ')}
                width={100}
                height={60}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Get in Touch */}
      <section id="contact" className={styles.contact}>
        <h2>Get In Touch</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Full Name *" required />
          <input type="email" placeholder="Email Address *" required />
          <textarea placeholder="Requirements *" rows={4} required />
          <textarea placeholder="Comments / Questions" rows={3} />
          <button type="submit">Send Message</button>
        </form>
        <div className={styles.contactInfo}>
          <div>
            <h4>Address</h4>
            <p>Office No 5, Siddhartha Darshan, Dada Patil Marg, near Railway Station, Naupada, Thane West, Thane, Maharashtra 400602</p>
          </div>
          <div>
            <h4>Phone</h4>
            <p>+91 9819839245</p>
          </div>
          <div>
            <h4>Email Us</h4>
            <p>info@visualtreat.in</p>
          </div>
          <div>
            <h4>Opening Hours</h4>
            <p>10:00 AM – 9:00 PM</p>
          </div>
        </div>
      </section>
    </main>
  );
}
