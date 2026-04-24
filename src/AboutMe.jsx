import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { useParams, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './assets/logo.png'

import aboutme1 from './assets/aboutme1.png'
import aboutme2 from './assets/aboutme2.png'
import aboutme3 from './assets/aboutme3.png'
import aboutme4 from './assets/aboutme4.png'
import aboutme5 from './assets/aboutme5.png'
import aboutme6 from './assets/aboutme6.png'



const AboutMe = () => {

    const facts = [
    "I became a Christian 3 years ago and it's completely turned my life around in all the best ways. I got baptised last year with my sister!",
    "I grew up in Cape Town, but moved to England (alone) when I was 18.",
    "I went on my first solo trip to Europe in November/December last year for 6 weeks.",
    "I'm at my happiest when helping & serving others.",
    "My death-row meal: fresh sourdough (cut thick) with salted butter and cheddar",
    "I have PCOS (polycystic ovarian syndrome) – this is the main inspiration for eating healthier & nourishing my body – to heal my hormones.",
    "I struggled with disordered eating a couple of years ago (obsessive calorie counting, restrictive eating and food guilt) and actually still struggle sometimes, but I'm working on it."
  ];

  const recipes = [
    // Top Row - 3 Square Images
    {
      id: 1,
      img: aboutme2,
      alt: 'Pancakes with berries'
    },
    {
      id: 2,
      img: aboutme3,
      alt: 'Spaghetti with spinach'
    },
    {
      id: 3,
      img: aboutme4,
      alt: 'Lamb chops with vegetables'
    },
    // Bottom Row - 2 Larger Images
    {
      id: 4,
      img: aboutme5,
      alt: 'Grilled chicken with rice and broccoli'
    },
    {
      id: 5,
      img: aboutme6,
      alt: 'Pasta with basil'
    }
  ];

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

      {/* Main Navbar */}
      <Navbar bg="white" expand="lg" className="py-3 border-bottom">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-danger">
            <div className="mb-4">
              <img src={logo} alt="My Kitchen" style={{ maxWidth: "200px" }} />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-4">
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/recipe">RECIPES</Nav.Link>
              <Nav.Link as={Link} to="/blog">BLOG</Nav.Link> {/* Fix panniten */}
              <Nav.Link as={Link} to="/aboutme" className="text-danger fw-bold">ABOUT ME</Nav.Link>
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

    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="row justify-content-center">
        <div className="col-8 col-lg-12">
          
          {/* Heading */}
          <h1 className="text-center fw-bold mb-5">
            About Me
          </h1>
          
          {/* Paragraphs */}
          <div style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#333' }}>
            <p className="mb-4">
              I'm Tiffy (Tiffany) a born and "bread" 20-something South African gal. I'm a food lover, self-taught 
              chef, baker, food photographer & videographer. I started my blog as a hobby in lockdown 1.0, but it 
              has since become my full-time job and biggest passion! My main inspiration for sharing easy and 
              healthy recipes comes from my past of disordered, restrictive eating habits and my struggles with 
              a hormonal disorder – PCOS.
            </p>
            
            <p className="mb-5">
              I'm at my happiest when helping & serving others and I hope that my recipes can help YOU make 
              healthier choices, without the "FAD" diets and restriction, but instead by making recipes using 
              healthier ingredients. I like to think of my recipes as "good for your soul and your body". OH, and my 
              recipes are minimal-effort, so that even the *busiest* people can make them!
            </p>
          </div>
          
          {/* Image */}
          <div className="text-center">
            <img 
              src={aboutme1}
              alt="Tiffy cooking in kitchen"
              className="img-fluid"
              style={{ 
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '4px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            />
          </div>
          
        </div>
      </div>
    </div>

    <div className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-12">
          
          {/* Heading */}
          <h3 className="fw-bold mb-4">
            Quick Fire Facts:
          </h3>
          
          {/* Facts List */}
          <div className="mb-4">
            {facts.map((fact, idx) => (
              <div key={idx} className="d-flex gap-3 mb-3">
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>
                  ➡️
                </span>
                <p className="mb-0" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                  {fact}
                </p>
              </div>
            ))}
          </div>
          
          {/* Closing Text */}
          <p className="mb-4" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
            These above factors are things that drive me and motivate me to create and share my easy & 
            healthy recipes with you.
          </p>
          
          {/* Mission Statement */}
          <div 
            className="p-4 rounded-3"
            style={{ backgroundColor: '#fdf5f6', borderLeft: '4px solid #C41E3A' }}
          >
            <p className="mb-0 fst-italic" style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
              ✨ "My mission is to motivate you to nourish your body, without depriving yourself of cravings, but 
              rather by making mindful choices and finding balance. To prove that being healthy can be easy and 
              fun." ✨
            </p>
          </div>
          
        </div>
      </div>
    </div>

    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-12">
          
          {/* Heading */}
          <h3 className="fw-bold mb-4 text-center text-md-start">
            Here are a few of my recipes I've ever created:
          </h3>
          
          {/* Top Row - 3 Images */}
          <div className="row g-3 mb-3">
            {recipes.slice(0, 3).map((recipe) => (
              <div key={recipe.id} className="col-12 col-md-4">
                <div 
                  className="overflow-hidden"
                  style={{ 
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img 
                    src={recipe.img} 
                    alt={recipe.alt}
                    className="w-100"
                    style={{ 
                      height: '280px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Row - 2 Images */}
          <div className="row g-3">
            {recipes.slice(3, 5).map((recipe) => (
              <div key={recipe.id} className="col-12 col-md-6">
                <div 
                  className="overflow-hidden"
                  style={{ 
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <img 
                    src={recipe.img} 
                    alt={recipe.alt}
                    className="w-100"
                    style={{ 
                      height: '350px',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
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

export default AboutMe;