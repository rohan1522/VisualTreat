import './globals.css';
import './layout.css';


export const metadata = {
  title: 'Xfive',
  description: 'Digital Solutions That Make a Difference',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
        
          <main style={{ flex: 1, padding: '20px' }}>
            {children}
          </main>
        </div>
        <footer className="footer">
        <div className="footer-content">
          <a href="/contact-us" className="contact-button1">Contact us</a>
          <div className="footer-right">
            <a href="https://linkedin.com" target="_blank" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.401 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 0 1 0 14.854V1.146zm4.943 12.248V6.169H3.102v7.225h1.841zm-.92-8.212c.837 0 1.358-.555 1.358-1.251-.015-.71-.52-1.252-1.341-1.252-.822 0-1.358.542-1.358 1.252 0 .696.52 1.251 1.327 1.251h.014zm4.906 8.212h1.841V9.359c0-.216.015-.432.08-.586.174-.432.57-.879 1.234-.879.87 0 1.217.663 1.217 1.634v4.866h1.841v-5.2c0-2.79-1.487-4.082-3.468-4.082-1.594 0-2.31.879-2.71 1.497v.033h.021a5.9 5.9 0 0 1-.02-.033V6.17H8.93c.026.689 0 7.225 0 7.225z"/>
              </svg>
            </a>
            <a href="https://behance.net" target="_blank" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-behance" viewBox="0 0 16 16">
                <path d="M9 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm4.2 4.9c-1.473 0-2.7 1.305-2.7 2.9 0 1.595 1.227 2.9 2.7 2.9s2.7-1.305 2.7-2.9c0-1.595-1.227-2.9-2.7-2.9zm0 4.6c-.935 0-1.7-.806-1.7-1.7s.765-1.7 1.7-1.7 1.7.806 1.7 1.7-.765 1.7-1.7 1.7zM0 16V0h16v16H0z"/>
              </svg>
            </a>
            <a href="https://github.com" target="_blank" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 .198a8 8 0 0 0-2.535 15.592c.4.073.547-.172.547-.385 0-.191-.007-.695-.011-1.363-2.226.484-2.695-1.073-2.695-1.073-.364-.924-.89-1.171-.89-1.171-.726-.497.056-.487.056-.487.803.057 1.226.824 1.226.824.715 1.225 1.874.872 2.33.667.073-.517.28-.872.508-1.073-1.777-.202-3.644-.888-3.644-3.953 0-.872.31-1.587.823-2.146-.083-.202-.357-1.016.077-2.116 0 0 .672-.215 2.2.82.64-.177 1.32-.266 2-.27.68.004 1.36.093 2 .27 1.527-1.035 2.197-.82 2.197-.82.436 1.1.162 1.914.08 2.116.516.559.822 1.274.822 2.146 0 3.073-1.87 3.748-3.653 3.946.287.247.54.735.54 1.481 0 1.07-.01 1.933-.01 2.194 0 .215.144.463.552.384A8.007 8.007 0 0 0 8 .198z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.002 9.341-9.334 0-.141-.003-.282-.01-.423A6.673 6.673 0 0 0 16 3.542a6.656 6.656 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.574 6.574 0 0 1-2.084.794 3.286 3.286 0 0 0-5.592 2.995 9.325 9.325 0 0 1-6.766-3.431 3.288 3.288 0 0 0 1.018 4.384A3.203 3.203 0 0 1 .64 6.575v.041a3.283 3.283 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.864.115c-.212 0-.418-.02-.618-.058a3.286 3.286 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045 9.344 9.344 0 0 0 5.026 1.466"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" className="social-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                <path d="M8.051 1.999h-.002C5.899 1.998 1.999 1.999 1.999 1.999H1.998C.898 1.999 0 2.898 0 3.999v8.002c0 1.1.898 1.998 1.998 1.998h.001c0 .001 3.9 0 6.05-.001h.002c2.151-.001 6.05.001 6.05.001h.001c1.101 0 2-.899 2-2V3.999c0-1.1-.899-1.999-2-1.999H8.05zM6.8 4.982l4.58 2.636-4.58 2.635V4.982z"/>
              </svg>
            </a>
          </div>
        </div>
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>Company</h4>
              <ul>
                <li><a href="/culture">Culture</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/jobs">Jobs</a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/terms">Terms</a></li>
              </ul>
            </div>
            <div className="footer-links-column">
              <h4>Work</h4>
              <ul>
                <li><a href="/case-studies">Case Studies</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
              </ul>
            </div>
          </div>
          
        <div className="footer-bottom">
          <div className="footer-logo">
            <p>Xfive</p>

          <div className="footer-reviews">
            <span className="clutch-icon">C</span>
            <span className="review-stars">★★★★★</span>
            <span className="review-count">52 REVIEWS</span>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Copyright © 2005 - 2024 Xfive.co Pty Ltd. ACN 160 801 285</p>
        </div>
      </footer>
      </body>
    </html>
  );
}
