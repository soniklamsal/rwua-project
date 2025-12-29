'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer 
      id="footer" 
      style={{
        background: '#422673',
        padding: '0',
        color: '#fff',
        fontSize: '14px',
        fontFamily: '"Poppins", sans-serif',
        boxSizing: 'border-box'
      }}
    >
      {/* Yellow Footer Top Section */}
      <div 
        className="footer-top"
        style={{
          background: '#fff487',
          color: '#422673',
          padding: '40px 0 80px 0',
          display: 'block',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          boxSizing: 'border-box'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr 1fr', 
            gap: '60px',
            alignItems: 'flex-start',
            boxSizing: 'border-box'
          }}>
            {/* Quick Links */}
            <div style={{ boxSizing: 'border-box' }}>
              <h3 style={{ 
                color: '#422673', 
                fontSize: '20px', 
                fontWeight: '700', 
                margin: '0 0 15px 0',
                fontFamily: '"Poppins", sans-serif',
                lineHeight: '1.2',
                boxSizing: 'border-box'
              }}>
                Quick Links
              </h3>
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                boxSizing: 'border-box'
              }}>
                <Link 
                  href="/gallery" 
                  style={{ 
                    color: 'rgb(66, 38, 115)', 
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: '400',
                    lineHeight: '1.4',
                    transition: '0.3s',
                    display: 'block',
                    boxSizing: 'border-box'
                  }}
                >
                  Our Gallery
                </Link>
                <Link 
                  href="/contact" 
                  style={{ 
                    color: 'rgb(66, 38, 115)', 
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: '400',
                    lineHeight: '1.4',
                    transition: '0.3s',
                    display: 'block',
                    boxSizing: 'border-box'
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Contact Us */}
            <div style={{ boxSizing: 'border-box' }}>
              <h3 style={{ 
                color: '#422673', 
                fontSize: '20px', 
                fontWeight: '700', 
                margin: '0 0 15px 0',
                fontFamily: '"Poppins", sans-serif',
                lineHeight: '1.2',
                boxSizing: 'border-box'
              }}>
                Contact Us
              </h3>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '6px',
                boxSizing: 'border-box'
              }}>
                <div style={{ 
                  color: 'rgb(66, 38, 115)', 
                  fontSize: '15px', 
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: '400',
                  lineHeight: '1.4',
                  boxSizing: 'border-box'
                }}>
                  Haripur-2, Sarlahi, Nepal
                </div>
                <div style={{ 
                  color: 'rgb(66, 38, 115)', 
                  fontSize: '15px', 
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: '400',
                  lineHeight: '1.4',
                  boxSizing: 'border-box'
                }}>
                  <strong>Phone:</strong> 046-411109
                </div>
                <div style={{ 
                  color: 'rgb(66, 38, 115)', 
                  fontSize: '15px',
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: '400',
                  lineHeight: '1.4',
                  boxSizing: 'border-box'
                }}>
                  <strong>Email:</strong> rwua.haripur@rwua.org
                </div>
              </div>
            </div>

            {/* RWUA Haripur - Nepali Text */}
            <div style={{ 
              boxSizing: 'border-box'
            }}>
              <h3 style={{ 
                color: '#422673', 
                fontSize: '20px', 
                fontWeight: '700', 
                margin: '0 0 15px 0',
                fontFamily: '"Poppins", sans-serif',
                lineHeight: '1.2',
                boxSizing: 'border-box'
              }}>
                RWUA Haripur
              </h3>
              <p style={{ 
                color: 'rgb(66, 38, 115)', 
                fontSize: '15px', 
                lineHeight: '1.5',
                margin: '0',
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '400',
                boxSizing: 'border-box'
              }}>
                ग्रामीण नारी उत्थान संघ हरिपुरले विपन्न लागो<br />
                सम्प दहि ग्रामीण भेगका नागरिकहरुको संन एव<br />
                शिक्षण सम्बन्धि विविध किसिमका<br />
                सशक्तिकरणको कार्यलाई अगाडि बढाउदै आएको<br />
                छ ।
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Purple Copyright Footer Bottom */}
      <div style={{ 
        textAlign: 'center', 
        padding: '20px 0', 
        color: '#fff',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 20px',
          boxSizing: 'border-box'
        }}>
          <p style={{ 
            fontSize: '14px', 
            margin: '0 0 5px 0',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '400',
            lineHeight: '1.4',
            boxSizing: 'border-box'
          }}>
            © Copyright 2025 <strong>Rural Upliftment Women Association, Sarlahi.</strong> All Rights Reserved
          </p>
          <p style={{ 
            fontSize: '14px', 
            margin: '0',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '400',
            lineHeight: '1.4',
            boxSizing: 'border-box'
          }}>
            Made with ❤️ By <strong>Sarbatra Inc</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}