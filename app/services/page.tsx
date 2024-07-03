













// 'use client'
// import React from 'react';
// import styles from './page.module.css';


// const ServicePage = () => {
//   return (
//     <div className={styles.servicePage}>
//       <div className={styles.header}>
//         <h1>From websites to web apps and beyond</h1>
//         <p>We specialize in redesigning websites, building web applications, and delivering e-commerce solutions.</p>

//         <a href="/contact-us" target="_blank" rel="noopener noreferrer">Contact Us</a>
//       </div>
//       <div className={styles.services}>
//         <div className={styles.serviceCategory}>
//           <h2>MVPs</h2>
//           <div className={styles.icons}>
//             <div className={styles.icon}><img src="/icons/figma-icon.png" alt="Figma" /></div>
//             <div className={styles.icon}><img src="/icons/html-icon.png" alt="HTML" /></div>
//             <div className={styles.icon}><img src="/icons/css-icon.png" alt="CSS" /></div>
//           </div>
//         </div>
//         <div className={styles.serviceCategory}>
//           <h2>Web Apps</h2>
//           <div className={styles.icons}>
//             <div className={styles.icon}><img src="/icons/js-icon.png" alt="JavaScript" /></div>
//             <div className={styles.icon}><img src="/icons/react-icon.png" alt="React" /></div>
//             <div className={styles.icon}><img src="/icons/angular-icon.png" alt="Angular" /></div>
//           </div>
//         </div>
//         <div className={styles.serviceCategory}>
//           <h2>Websites</h2>
//           <div className={styles.icons}>
//             <div className={styles.icon}><img src="/icons/wordpress-icon.png" alt="WordPress" /></div>
//             <div className={styles.icon}><img src="/icons/shopify-icon.png" alt="Shopify" /></div>
//             <div className={styles.icon}><img src="/icons/bigcommerce-icon.png" alt="BigCommerce" /></div>
//           </div>
//         </div>
//         <div className={styles.serviceCategory}>
//           <h2>Ecommerce</h2>
//           <div className={styles.icons}>
//             <div className={styles.icon}><img src="/icons/woo-icon.png" alt="WooCommerce" /></div>
//             <div className={styles.icon}><img src="/icons/rails-icon.png" alt="Rails" /></div>
//             <div className={styles.icon}><img src="/icons/net-icon.png" alt=".NET" /></div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.secondPage}>


//       <div className={styles.mainContent}>
//         <h1 className={styles.mainTitle}>our process</h1>
//         <p className={styles.subduedText}>Design Development Care & Growth</p>
//         <section className={styles.section}>
//           <h2>Understand the problem</h2>
//           <p>First, we need to understand the problem we are trying to solve. We do research, talk to you and your users and define the scope.</p>
//         </section>
//         </div>
//         </div>
//         <div className={styles.thirdPage}>
//       <div className={styles.content}>
//         <h1>Reach the market</h1>
//         <p>Finally, we launch your product. We will maintain and improve it to grow your user base and achieve product-market fit.</p>
//         <div className={styles.toolbox}>
//           <h4>From our toolbox</h4>
//           <ul>
//             <li>Product analytics</li>
//             <li>Maintenance & support</li>
//             <li>Content-led SEO</li>
//             <li>B2B sales playbook</li>
//           </ul>
//         </div>
//         <div className={styles.imageContainer}>
//           <img src="https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Heatmap example" />
//         </div>
//       </div>
//       <div className={styles.growthText}>
//         <span>growth</span>
//       </div>
//     </div>
//     <div className={styles.fourthPage}>
//       <div className={styles.testimonialContainer}>
//         <p className={styles.testimonialText}>
//           "The site is beautiful, we love working with Xfive. Thank you for making our MVP dreams come true!"
//         </p>
//         <div className={styles.imageSection}>
//           <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Testimonial" />
//           <p className={styles.testimonialName}>Lauren Mndell</p>
//           <p className={styles.testimonialCompany}>Hi-curious</p>
//         </div>
//       </div>
//     </div>



//     </div>
//   );
// };

// export default ServicePage;






'use client'
import React from 'react';
import styles from './page.module.css';




const Services = () => {
  return (
    <div className={styles.wholepage}>
          <div className={styles.servicePage}>
      <header className={styles.header}>
        <h1>From websites to web apps and beyond</h1>
        <p>We specialize in redesigning websites, building web applications, and delivering e-commerce solutions.</p>
        <button className={styles.contactButton}>Contact us</button>
      </header>
      <div className={styles.services}>
        <div className={styles.serviceCategory}>
          <h2>MVPs</h2>
          <div className={styles.icons}>
            <div className={styles.icon}><img src="/icons/figma.png" alt="Figma" /></div>
            <div className={styles.icon}><img src="/icons/html5.png" alt="HTML5" /></div>
          </div>
        </div>
        <div className={styles.serviceCategory}>
          <h2>Web Apps</h2>
          <div className={styles.icons}>
            <div className={styles.icon}><img src="/icons/react.png" alt="React" /></div>
            <div className={styles.icon}><img src="/icons/angular.png" alt="Angular" /></div>
          </div>
        </div>
        <div className={styles.serviceCategory}>
          <h2>Websites</h2>
          <div className={styles.icons}>
            <div className={styles.icon}><img src="/icons/wordpress.png" alt="WordPress" /></div>
            <div className={styles.icon}><img src="/icons/shopify.png" alt="Shopify" /></div>
          </div>
        </div>
        <div className={styles.serviceCategory}>
          <h2>Ecommerce</h2>
          <div className={styles.icons}>
            <div className={styles.icon}><img src="/icons/woocommerce.png" alt="WooCommerce" /></div>
            <div className={styles.icon}><img src="/icons/net.png" alt=".NET" /></div>
          </div>
        </div>
      </div>
      </div>


      <div className={styles.secondPage}>

      <div className={styles.mainContent}>
        <h1 className={styles.mainTitle}>our process</h1>
        <p className={styles.subduedText}>Design Development Care & Growth</p>
        <section className={styles.section}>
          <h2>Understand the problem</h2>
          <p>First, we need to understand the problem we are trying to solve. We do research, talk to you and your users and define the scope.</p>
        </section>
        </div>
        </div>
        
        <div className={styles.thirdPage}>
       <div className={styles.content}>
        <h1>Reach the market</h1>
         <p>Finally, we launch your product. We will maintain and improve it to grow your user base and achieve product-market fit.</p>
        <div className={styles.toolbox}>
          <h4>From our toolbox</h4>
          <ul>
             <li>Product analytics</li>
           <li>Maintenance & support</li>
           <li>Content-led SEO</li>
             <li>B2B sales playbook</li>
          </ul>
         </div>
        <div className={styles.imageContainer}>
           <img src="" alt="Heatmap example" />
        </div>
      </div>
       
    </div>
        
    </div>
   
  );
};

export default Services;
