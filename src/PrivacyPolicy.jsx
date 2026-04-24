import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import logo from './assets/logo.png';

const PrivacyPolicy = () => {
  

  const [email, setEmail] = useState('');
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
          console.log('Subscribed:', email);
          alert('Thanks for subscribing!');
          setEmail('');
        }
      };

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-light text-center py-2 border-bottom">
        <small>
          Subscribe to our newsletter - <strong>mykitchen@gmail.com</strong>
        </small>
      </div>

      {/* Navbar */}
      <Navbar bg="white" expand="lg" className="py-3 border-bottom">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="My Kitchen" style={{ maxWidth: '200px' }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-4">
              <Nav.Link as={Link} to="/">HOME</Nav.Link>
              <Nav.Link as={Link} to="/recipe">RECIPES</Nav.Link>
              <Nav.Link as={Link} to="/blog">BLOG</Nav.Link>
              <Nav.Link as={Link} to="/aboutme">ABOUT ME</Nav.Link>
            </Nav>

            <Form className="d-flex align-items-center">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 border-0 border-bottom"
              />
              <Button variant="danger" className="rounded-circle">
                <i className="bi bi-search"></i>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Privacy Policy Content */}
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '5rem', maxWidth: '900px' }}>
        <h2 className="text-center fw-bold mb-5">Privacy Policy</h2>

        <p style={{ fontSize: '1rem', lineHeight: '1.9', color: '#333' }} className="mb-4">
          My kitchen works to ensure that your privacy is protected when using our website. We have
          a policy setting out how your personal data will be processed and protected. Applicable law
          and our practices change over time. If we decide to update our Policy, we will post the
          changes on this site. You should check this page from time to time to ensure that you are
          happy with any changes.
        </p>

        <h5 className="fw-bold mb-3">Your Personal Data</h5>

        <p style={{ fontSize: '1rem', lineHeight: '1.9', color: '#333' }} className="mb-3">
          In providing your personal data, you consent to us using the data collected in order to meet
          our commitments to you and to provide you with the service you expect. We need your data
          for the following purposes:
        </p>

        <ul style={{ fontSize: '1rem', lineHeight: '1.9', color: '#333' }}>
          <li className="mb-2">
            To create your personal account at Sonee Sports (i.e. your name and email address).
          </li>
          <li className="mb-2">
            To validate that you are of legal age for shopping online (i.e. date of birth).
          </li>
          <li className="mb-2">
            To process your orders through our website (i.e. your name, postal address, and mode of
            payment).
          </li>
          <li className="mb-2">
            To send you marketing offers such as newsletters and latest sports Sonee affiliated
            events (i.e. your name and email address).
          </li>
          <li className="mb-2">
            To update and contact you in the event of any problems with the delivery of your items
            (i.e. contact number, address).
          </li>
          <li className="mb-2">
            To answer your queries and to inform you of important updates (i.e. your email address).
          </li>
        </ul>
      </div>

      <footer 
                className="position-relative py-5"
                style={{ 
                  backgroundColor: '#fff',
                  backgroundImage: `radial-gradient(circle, #d3d3d3 1.5px, transparent 1.5px)`,
                  backgroundSize: '40px 40px',
                  backgroundPosition: '0 0, 20px 20px'
                }}
              >
                <div className="container">
                  <div className="row justify-content-center text-center">
                    <div className="col-12 col-md-8 col-lg-6">
                      
                      {/* Logo */}
                      <div className="mb-4">
                        
                          
                            <img src={logo} alt="My Kitchen" style={{ maxWidth: '200px' }} />
                          
                      </div>
          
                      {/* Tagline */}
                      <h3 
                        className="mb-4 fw-normal"
                        style={{ fontSize: '1.6rem' }}
                      >
                        Healthy recipes for busy people
                      </h3>
          
                      {/* Social Icons */}
                      <div className="d-flex justify-content-center gap-3 mb-4">
                        <a href="#" className="text-decoration-none">
                          <i className="bi bi-twitter" style={{ color: '#C41E3A', fontSize: '1.8rem' }}></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                          <i className="bi bi-facebook" style={{ color: '#C41E3A', fontSize: '1.8rem' }}></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                          <i className="bi bi-instagram" style={{ color: '#C41E3A', fontSize: '1.8rem' }}></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                          <i className="bi bi-youtube" style={{ color: '#C41E3A', fontSize: '1.8rem' }}></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                          <i className="bi bi-linkedin" style={{ color: '#C41E3A', fontSize: '1.8rem' }}></i>
                        </a>
                        <a href="#" className="text-decoration-none">
                          <i className="bi bi-tiktok" style={{ color: '#C41E3A', fontSize: '1.8rem' }}></i>
                        </a>
                      </div>
          
                      {/* Email Form */}
                      <form onSubmit={handleSubmit} className="mx-auto mb-2" style={{ maxWidth: '400px' }}>
                        <div className="position-relative">
                          <input 
                            type="email"
                            className="form-control border-0 border-bottom rounded-0 shadow-none ps-0 pe-5 py-2"
                            placeholder="Enter your email address here"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ 
                              fontSize: '1rem',
                              borderColor: '#6c757d'
                            }}
                          />
                          <button 
                            type="submit"
                            className="btn position-absolute end-0 top-50 translate-middle-y p-0 border-0"
                            style={{ backgroundColor: 'transparent' }}
                          >
                            <i className="bi bi-send-fill fs-5 text-dark"></i>
                          </button>
                        </div>
                      </form>
          
                      {/* Info Text */}
                      <p className="small text-muted mb-0">
                        *Be informed about the latest recipes and workshops
                      </p>
          
                    </div>
                  </div>
          
                  {/* Bottom Row */}
                  <div className="row mt-5 pt-4">
                    <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">
                      <Link to="/privacy-policy" className="text-decoration-none text-muted">
                        Privacy Policy
                      </Link>
                    </div>
                    <div className="col-12 col-md-6 text-center text-md-end">
                      <p className="mb-0 fw-medium">
                        copyrights 2022 © my kitchen
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
    </div>
  );
};

export default PrivacyPolicy;