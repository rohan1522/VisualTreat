

// 'use client';
// import React from 'react';
// import './page.module.css';

// const ContactUsPage = () => {
//   return (
//     <div className="page-content">
//       <h2>Let’s talk</h2>
//       <p>Fill in the form below, or contact us directly – and we will get back to you as soon as possible.</p>

//       <form className="contact-form">
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input type="text" id="name" name="name" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" required />
//         </div>

//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea id="message" name="message" rows={5} required></textarea>
//         </div>

//         <div className="form-group">
//           <label htmlFor="file">File</label>
//           <input type="file" id="file" name="file" />
//           <small>Drop files here or click to upload</small>
//         </div>

//         <div className="form-group">
//           <label>
//             <input type="checkbox" required />
//             I am human
//           </label>
//         </div>

//         <div className="form-group">
//           {/* Placeholder for FriendlyCaptcha */}
//           <small>FriendlyCaptcha placeholder here</small>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ContactUsPage;





















import React from 'react';
import styles from './page.module.css';

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <div className={styles.contactHeader}>
        <h1>Let's talk</h1>
        <p>Fill in the form below, or contact us directly - <a href="mailto:contact@xfive.co">contact@xfive.co</a> and we will get back to you as soon as possible.</p>
      </div>
      <div className={styles.contactForm}>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="file">Upload File</label>
            <input type="file" id="file" name="file" />
          </div>
          <div className={styles.formFooter}>
            <div className={styles.captcha}>
              <label>
                <input type="checkbox" required />
                I am human
              </label>
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </div>
        </form>
        <div className={styles.contactInfo}>
          <div className={styles.contactText}>
            <h2>Hi, I'm Karolina. I look forward to discussing your project.</h2>
          </div>
          <div className={styles.contactImage}>
            <img src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Karolina Brewczynska" />
            <p>Karolina Brewczynska</p>
            <p>Business Development Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
