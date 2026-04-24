import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'; // Itha add panniten
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";

import logo from './assets/logo.png'
import blogheaderimage from './assets/blogheaderimage.png'
import blog1 from './assets/blog1.png'
import blog2 from './assets/blog2.png'
import blog3 from './assets/blog3.png'
import blog4 from './assets/blog4.png'
import blog5 from './assets/blog5.png'
import blog6 from './assets/blog6.png'

const Blog = () => {
  const quickLinks = [
    "What are the foods for breakfast?",
    "How do you clean vegetables?",
    "How much ingredients for each recipes?",
    "What quantities makes a food good?",
    "Which ingredient is good for every season?",
  ];

  const blogPosts = [
    {
      id: 1,
      img: blog1,
      date: '08/04/2025',
      title: 'Easy and healthy millets recipes',
      excerpt: '"Welcome to my blog, where I share the knowledge acquired...'
    },
    {
      id: 2,
      img: blog2,
      date: '22/03/2025',
      title: 'How to handle lobster',
      excerpt: '"Welcome to my blog, where I share the knowledge acquired...'
    },
    {
      id: 3,
      img: blog3,
      date: '15/03/2025',
      title: 'Platter arrangements',
      excerpt: '"Welcome to my blog, where I share the knowledge acquired...'
    },
    {
      id: 4,
      img: blog4,
      date: '08/04/2025',
      title: 'Food and scientific facts',
      excerpt: '"Welcome to my blog, where I share the knowledge acquired...'
    },
    {
      id: 5,
      img: blog5,
      date: '22/03/2025',
      title: 'Goodness of vegetables',
      excerpt: '"Welcome to my blog, where I share the knowledge acquired...'
    },
    {
      id: 6,
      img: blog6,
      date: '15/03/2025',
      title: 'benefits of Nuts and dry fruits',
      excerpt: '"Welcome to my blog, where I share the knowledge acquired...'
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
              <Nav.Link as={Link} to="/blog" className="text-danger fw-bold">BLOG</Nav.Link>
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

      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
      
        {/* Main Title */}
        <h1 className="text-center fw-bold mb-5">
          Blog
        </h1>

        <div className="row g-5 align-items-start">
          
          {/* Left - Featured Article Card */}
          <div className="col-12 col-lg-7">
            <div 
              className="card border-0 overflow-hidden"
              style={{ 
                borderRadius: '20px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
              }}
            >
              <div className="position-relative">
                <Link to="/blog/1"> {/* Featured image ku Link */}
                  <img 
                    src={blogheaderimage}
                    alt="Meal Prep" 
                    className="card-img-top"
                    style={{ 
                      height: '380px',
                      objectFit: 'cover',
                      cursor: 'pointer'
                    }}
                  />
                </Link>
                <div 
                  className="position-absolute"
                  style={{ top: '20px', left: '20px' }}
                >
                  <span 
                    className="badge px-3 py-2"
                    style={{ 
                      backgroundColor: '#fff',
                      color: '#C41E3A',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      letterSpacing: '0.5px',
                      borderRadius: '50px'
                    }}
                  >
                    FEATURED ARTICLE
                  </span>
                </div>
              </div>
              
              <div className="card-body p-4 p-md-5">
                <p 
                  className="mb-2"
                  style={{ 
                    color: '#C41E3A',
                    fontSize: '0.95rem',
                    fontWeight: '500'
                  }}
                >
                  08/04/2025
                </p>
                
                <h2 className="fw-bold mb-3">
                  <Link to="/blog/1" className="text-decoration-none text-dark">
                    The Ultimate Guide to Meal Prep
                  </Link>
                </h2>
                
                <p className="text-muted mb-0" style={{ lineHeight: '1.8', fontSize: '1.05rem' }}>
                  "To meal prep effectively, start by planning your meals for the week, 
                  then create a grocery list based on those plans. Prep ingredients in 
                  advance and consider...
                </p>
              </div>
            </div>
          </div>

          {/* Right - Quick Links */}
          <div className="col-12 col-lg-5">
            <h3 
              className="fw-bold mb-4 pb-2"
              style={{ 
                borderBottom: '3px solid #000',
                display: 'inline-block'
              }}
            >
              Quick Prefix in this Article:
            </h3>
            
            <ol className="list-unstyled">
              {quickLinks.map((link, idx) => (
                <li 
                  key={idx}
                  className="mb-3 pb-3"
                  style={{ 
                    borderBottom: idx !== quickLinks.length - 1 ? '1px solid #e9ecef' : 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.paddingLeft = '8px';
                    e.currentTarget.style.color = '#C41E3A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.paddingLeft = '0';
                    e.currentTarget.style.color = '#000';
                  }}
                >
                  <span className="fw-medium">{idx + 1}.</span> {link}
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>

      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="row g-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-12 col-md-6 col-lg-4">
              <div 
                className="card border-0 h-100"
                style={{ 
                  borderRadius: '20px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image - MUKIYAM: Link wrap panniten */}
                <Link to={`/blog/${post.id}`}>
                  <img 
                    src={post.img} 
                    alt={post.title}
                    className="card-img-top"
                    style={{ 
                      height: '250px', 
                      objectFit: 'cover',
                      cursor: 'pointer'
                    }}
                  />
                </Link>
                
                <div className="card-body p-4">
                  <p 
                    className="mb-2"
                    style={{ 
                      color: '#C41E3A',
                      fontSize: '0.95rem',
                      fontWeight: '500'
                    }}
                  >
                    {post.date}
                  </p>
                  
                  <h5 className="fw-bold mb-3">
                    <Link to={`/blog/${post.id}`} className="text-decoration-none text-dark">
                      {post.title}
                    </Link>
                  </h5>
                  
                  <p className="text-muted mb-4" style={{ lineHeight: '1.7' }}>
                    {post.excerpt}
                  </p>
                  
                  {/* Read Now Button - Link aakiten */}
                  <Link 
                    to={`/blog/${post.id}`}
                    className="btn text-white px-4 py-2"
                    style={{ 
                      backgroundColor: '#C41E3A',
                      borderRadius: '8px',
                      fontWeight: '500',
                      border: 'none',
                      textDecoration: 'none',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#a01830'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#C41E3A'}
                  >
                    Read Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
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
              <div className="mb-4">
                <img src={logo} alt="My Kitchen" style={{ maxWidth: '200px' }} />
              </div>
  
              <h3 className="mb-4 fw-normal" style={{ fontSize: '1.6rem' }}>
                Healthy recipes for busy people
              </h3>
  
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
  
              <p className="small text-muted mb-0">
                *Be informed about the latest recipes and workshops
              </p>
            </div>
          </div>
  
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

export default Blog;