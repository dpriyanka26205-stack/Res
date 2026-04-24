import React, { useState } from 'react'; // useState import panniten
import { useParams, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap'; // Itha add panniten
import 'bootstrap/dist/css/bootstrap.min.css';

import blogheaderimage from './assets/blogheaderimage.png'

import blogpage1 from './assets/blogpage1.png'
import blogpage2 from './assets/blogpage2.png'
import blogpage3 from './assets/blogpage3.png'
import blogpage4 from './assets/blogpage4.png'
import logo from './assets/logo.png' // logo import panniten

const BlogDetail = () => {
  const { id } = useParams();

  const blogData = {
    id: 1,
    title: 'The ultimate guide to meal prep',
    intro: `To meal prep effectively, start by planning your meals for the week, then create a grocery list based on those plans. Prep ingredients in advance and consider choosing recipes with overlapping ingredients for efficiency. Portion your meals accurately and store them in suitable containers.`,
    img: blogheaderimage,
    date: '08/04/2025'
  };

  const detailedSteps = [
    {
      id: 1,
      title: 'Plan Your Meals',
      points: [
        'Determine which meals you want to prep, focusing on meals you typically eat out or skip.',
        'Consider a meal rotation to avoid food boredom and keep things interesting.',
        'Start small by prepping for a few days initially, gradually increasing the number of days as you become more comfortable.'
      ]
    },
    {
      id: 2,
      title: 'Create a Grocery List',
      points: [
        'List all ingredients needed for your planned meals, organized by store sections for efficiency.',
        'Check your pantry and freezer for existing items before shopping to minimize waste and save money.',
        'Consider buying a mix of fresh, frozen, and shelf-stable items.'
      ]
    }
  ];

  const galleryImages = [
    { id: 1, img: blogpage1, alt: 'Healthy breakfast bowl with fruits and eggs' },
    { id: 2, img: blogpage2, alt: 'Avocado toast with eggs' },
    { id: 3, img: blogpage3, alt: 'Meal prep container with chicken and broccoli' },
    { id: 4, img: blogpage4, alt: 'Rice bowl with peas and cashews' }
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
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            <img src={logo} alt="My Kitchen" style={{ maxWidth: '200px' }} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-4">
              <Nav.Link as={Link} to="/">
                HOME
              </Nav.Link>
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

      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12">
            
            {/* Back Button */}
            <Link to="/blog" className="btn btn-link text-decoration-none mb-4 p-0" style={{ color: '#C41E3A' }}>
              <i className="bi bi-arrow-left me-2"></i> Back to Blog
            </Link>
            
            {/* Title */}
            <h1 className="fw-bold mb-4 text-center">
              {blogData.title}
            </h1>
            
            {/* Intro Paragraph */}
            <p 
              className="text-center mb-5" 
              style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#333' }}
            >
              {blogData.intro}
            </p>
            
            {/* Hero Image */}
            <div className="text-center mb-5">
              <img 
                src={blogData.img}
                alt={blogData.title}
                className="img-fluid"
                style={{ 
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              />
            </div>

            {/* Detailed Steps Section */}
            <div className="mt-5 mb-5">
              <h3 className="fw-bold mb-4 text-center">
                Detailed Steps:
              </h3>
              
              {detailedSteps.map((step) => (
                <div key={step.id} className="mb-5">
                  <h4 
                    className="fw-bold mb-3"
                    style={{ 
                      textDecoration: 'underline',
                      textUnderlineOffset: '4px'
                    }}
                  >
                    {step.id}. {step.title}:
                  </h4>
                  
                  <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '1.5rem' }}>
                    {step.points.map((point, idx) => (
                      <li key={idx} className="mb-3">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Image Gallery - 4 Images */}
            <div className="mt-5">
              <div className="row g-3">
                {galleryImages.map((image) => (
                  <div key={image.id} className="col-6 col-md-3">
                    <div 
                      className="overflow-hidden"
                      style={{ 
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <img 
                        src={image.img} 
                        alt={image.alt}
                        className="w-100"
                        style={{ 
                          height: '200px',
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
      </div>

      {/* Footer */}
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
                    style={{ fontSize: '1rem', borderColor: '#6c757d' }}
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

export default BlogDetail;