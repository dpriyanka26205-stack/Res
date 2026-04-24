import React, { useEffect, useState } from "react";
import './Home.css'
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { useParams, Link } from 'react-router-dom';


import heros from './assets/hero.png'

import bites from './assets/bites.png'
import sidedish from './assets/sidedish.png'
import starter from './assets/starter.png'
import maincourse from './assets/maincourse.png'

import latestrecipes1 from './assets/latestrecipes1.png'
import latestrecipes2 from './assets/latestrecipes2.png'
import latestrecipes3 from './assets/latestrecipes3.png'
import latestrecipes4 from './assets/latestrecipes4.png'

import profile from './assets/profile.png'

import readersfav1 from './assets/readersfav1.png'
import readersfav2 from './assets/readersfav2.png'
import readersfav3 from './assets/readersfav3.png'
import readersfav4 from './assets/readersfav4.png'

import insta1 from './assets/insta1.png'
import insta2 from './assets/insta2.png'
import insta3 from './assets/insta3.png'
import insta4 from './assets/insta4.png'
import insta5 from './assets/insta5.png'

import logo from './assets/logo.png'



const Home = () => {

   const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

   const favourites = [
    {
      id: 1,
      img: readersfav1,
      title: 'Time saving meal prep'
    },
    {
      id: 2,
      img: readersfav2,
      title: 'Toddler-friendly foods'
    },
    {
      id: 3,
      img: readersfav3,
      title: '10-must try vegan recipes'
    },
    {
      id: 4,
      img: readersfav4,
      title: 'Canning and preserving methods'
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

  const meals = [
    {
      id: 1,
      img: insta1,
      alt: 'Pancakes with berries'
    },
    {
      id: 2,
      img: insta2,
      alt: 'Sandwich with fries'
    },
    {
      id: 3,
      img: insta3,
      alt: 'Grilled salmon salad'
    },
    {
      id: 4,
      img: insta4,
      alt: 'Chocolate cake'
    },
    {
      id: 5,
      img: insta5,
      alt: 'Sweet potato fries'
    }
  ];
  
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
              <Nav.Link as={Link} to="/"  className="text-danger fw-bold">HOME</Nav.Link>
              <Nav.Link as={Link} to="/recipe">RECIPES</Nav.Link>
              <Nav.Link as={Link} to="/blog">BLOG</Nav.Link> {/* Fix panniten */}
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

      <section className="heros">
      <div className="hero-overlay"></div>

      <div className="hero-content text-center">
        <h1>Sharing my love for food</h1>

        <p>
          I’m excited to share my passion for all things culinary.
          Food is not just about nourishment: it’s an experience
          that brings people together, evokes memories, and
          sparks creativity.
        </p>

        <button className="hero-btn">
          GET IN TOUCH
          <i className="bi bi-send-fill"></i>
        </button>
      </div>
    </section>

    <div className="container my-5">
      <div className="row g-4">

        {/* Card 1 */}
        <div className="col-md-6">
          <div className="food-card">
            <img
              src={
                toggle
                  ? bites
                  : starter
              }
              alt="food"
              className="img-fluid"
            />
            <p className="category">
              {toggle ? "BITES" : "STARTER"}
            </p>
            <h3 className="title">
              {toggle
                ? "Stuffed Mini Peppers"
                : "Salad"}
            </h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-6">
          <div className="food-card">
            <img
              src={
                toggle
                  ? sidedish
                  : maincourse
              }
              alt="food"
              className="img-fluid"
            />
            <p className="category">
              {toggle ? "SIDE DISH" : "MAIN COURE"}
            </p>
            <h3 className="title">
              {toggle
                ? "Garlic Mashed Potatoes"
                : "Grilled Chicken"}
            </h3>
          </div>
        </div>

      </div>
    </div>

    <div className="subscribe-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Text */}
          <div className="col-md-4">
            <p className="small-text">New recipes</p>
            <h2 className="main-text">Straight to your inbox</h2>
          </div>

          {/* Inputs */}
          <div className="col-md-8">
            <div className="input-group-custom">
              
              <input
                type="text"
                placeholder="Enter your name"
                className="custom-input"
              />

              <input
                type="email"
                placeholder="Enter your email address here"
                className="custom-input"
              />

              <button className="send-btn">
                <i className="bi bi-send-fill"></i>
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="latest-section container my-5">

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="title">Latest Recipes</h2>

        <Link to="/recipe" style={{ textDecoration: 'none' }}>
          <button 
            className="btn text-white px-4 py-2"
            style={{ 
              backgroundColor: '#C41E3A',
              borderRadius: '8px',
              fontWeight: '500'
            }}
          >
            View All <i className="bi bi-arrow-right"></i>
          </button>
        </Link>
      </div>

      {/* Cards */}
      <div className="row g-4">

        {/* Card 1 */}
        <div className="col-md-3">
          <div className="recipe-card">
            <img
              src={latestrecipes1}
              alt=""
            />
            <p>Chickpea and sprouts salad</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-3">
          <div className="recipe-card">
            <img
              src={latestrecipes2}
              alt=""
            />
            <p>High protein chocolate mousse</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-3">
          <div className="recipe-card">
            <img
              src={latestrecipes3}
              alt=""
            />
            <p>Big lamb chops and veggies</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="col-md-3">
          <div className="recipe-card">
            <img
              src={latestrecipes4}
              alt=""
            />
            <p>Healthy apple crumble</p>
          </div>
        </div>

      </div>
    </div>

    <div className="container-fluid px-0">
      <div 
        className="d-flex align-items-center justify-content-center py-5"
        style={{ backgroundColor: '#C41E3A', minHeight: '350px' }}
      >
        <div 
          className="container border border-white border-2 p-4 p-md-5"
          style={{ maxWidth: '1140px' }}
        >
          <div className="row align-items-center g-4">
            
            {/* Left side - Text Content */}
            <div className="col-12 col-md-7 text-center text-md-start text-white">
              <h1 className="display-5 fw-normal mb-2">
                Hello there! I am Tiffy.
              </h1>
              <h2 className="h3 fw-light mb-4">
                Start cooking with me
              </h2>
              
              {/* Social Icons */}
              <div className="d-flex justify-content-center justify-content-md-start gap-3 mb-4">
                <a href="#" className="text-white fs-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white fs-3">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-white fs-3">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
              
              {/* Button */}
              <button 
                className="btn btn-link text-white text-decoration-none fw-semibold p-0"
                style={{ letterSpacing: '1px' }}
              >
                VIEW MORE
              </button>
            </div>

            {/* Right side - Circular Image */}
            <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-end">
              <div 
                className="rounded-circle overflow-hidden"
                style={{ width: '280px', height: '280px' }}
              >
                <img 
                  src={profile} 
                  alt="Tiffy cooking"
                  className="w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="container py-5">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <h2 className="fw-bold mb-0" style={{ fontSize: '2rem' }}>
          Readers Favourites
        </h2>
        <Link to="/recipe" style={{ textDecoration: 'none' }}>
          <button 
            className="btn text-white px-4 py-2"
            style={{ 
              backgroundColor: '#C41E3A',
              borderRadius: '8px',
              fontWeight: '500'
            }}
          >
            View All <i className="bi bi-arrow-right"></i>
          </button>
        </Link>
      </div>

      {/* Cards Grid */}
      <div className="row g-4">
        {favourites.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-lg-3">
            <div 
              className="card border-0 h-100"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              style={{ 
                borderRadius: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
            >
              {/* Image */}
              <img 
                src={item.img}
                alt={item.title}
                className="card-img-top"
                style={{ 
                  height: '280px',
                  objectFit: 'cover'
                }}
              />
              
              {/* Card Body */}
              <div className="card-body text-center py-4">
                <h5 className="card-title fw-normal mb-0" style={{ fontSize: '1.05rem' }}>
                  {item.title}
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="container py-5">
      <div 
        className="position-relative mx-auto p-5 text-center"
        style={{ 
          maxWidth: '900px',
          border: '2px solid #C41E3A',
          backgroundColor: '#fff',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23e0e0e0' stroke-width='1' opacity='0.2'%3E%3Cpath d='M20 30h60v40H20z'/%3E%3Cpath d='M30 20v60M70 20v60M20 40h60M20 60h60'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      >
        {/* Heading */}
        <h2 
          className="mb-3"
          style={{ 
            color: '#C41E3A',
            fontSize: '2.2rem',
            fontWeight: '500'
          }}
        >
          Our Newsletter
        </h2>

        {/* Description */}
        <p 
          className="mb-4 mx-auto"
          style={{ 
            fontSize: '1.1rem',
            maxWidth: '650px',
            lineHeight: '1.6'
          }}
        >
          Subscribe to our newsletter & keep up with our latest recipes
          and organized workshops.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: '500px' }}>
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
      </div>
    </div>

    <div className="container-fluid py-5 px-4">
      {/* Heading Section */}
      <div className="text-center mb-5">
        <h2 
          className="fw-normal mb-2"
          style={{ 
            fontSize: '1.8rem',
            lineHeight: '1.5'
          }}
        >
          Share Your Meals On With Instagram With{' '}
          <span style={{ color: '#C41E3A', fontWeight: '500' }}>
            #mykitchen
          </span>
        </h2>
        <h3 
          className="fw-normal"
          style={{ fontSize: '1.8rem' }}
        >
          & We Will Reward The Meal Of The Month!
        </h3>
      </div>

      {/* Image Grid */}
      <div className="row g-3 justify-content-center">
        {meals.map((meal) => (
          <div key={meal.id} className="col-6 col-md-4 col-lg">
            <div 
              className="position-relative overflow-hidden"
              style={{ 
                borderRadius: '12px',
                cursor: 'pointer',
                paddingTop: '100%' // Makes it square
              }}
            >
              <img 
                src={meal.img}
                alt={meal.alt}
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
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

export default Home;