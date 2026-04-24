import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";

import logo from './assets/logo.png'
import latestrecipes2 from './assets/latestrecipes2.png'
import latestrecipes3 from './assets/latestrecipes3.png'
import latestrecipes4 from './assets/latestrecipes4.png'
import recipeindex4 from './assets/recipeindex4.png'
import recipeindex5 from './assets/recipeindex5.png'
import recipeindex6 from './assets/recipeindex6.png'
import recipeindex7 from './assets/recipeindex7.png'
import recipeindex8 from './assets/recipeindex8.png'
import recipeindex9 from './assets/recipeindex9.png'

const Recipies = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (filterName) => {
    if (selectedFilters.includes(filterName)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filterName));
    } else {
      setSelectedFilters([...selectedFilters, filterName]);
    }
  };

  const lifestyleFilters = [
    { name: 'Vegan', count: 15 },
    { name: 'Dairy-free', count: 20 },
    { name: 'Gluten-free', count: 14 },
    { name: 'Nut-free', count: 12 },
    { name: 'Refined Sugar-free', count: 27 },
    { name: 'Egg-free', count: 13 }
  ];

  const mealTimeFilters = [
    { name: 'Breakfast', count: 15 },
    { name: 'Meal Prep', count: 20 },
    { name: 'Quick dinners', count: 14 },
    { name: 'Smoothies & juices', count: 12 },
    { name: 'Healthy snacks', count: 27 },
    { name: 'Baking recipes', count: 13 }
  ];

  const categories = [
    { title: 'No bake', subtitle: 'Dessert', icon: 'bi-cake2' },
    { title: 'Protein', subtitle: 'Packed', icon: 'bi-lightning-charge' },
    { title: '5-Minute', subtitle: 'Recipe', icon: 'bi-clock' },
    { title: '<5-Ingredients', subtitle: 'Vegan Special', icon: 'bi-leaf' }
  ];

  const allRecipes = [
    { 
      id: 1,
      name: 'High protein chocolate mousse', 
      img: latestrecipes2, 
      tags: ['Protein Packed', 'Dairy-free'] 
    },
    { 
      id: 2,
      name: 'Big mac lamb chops and veggies', 
      img: latestrecipes3, 
      tags: ['Quick dinners', 'High Protein'] 
    },
    { 
      id: 3,
      name: 'Healthy apple crumble', 
      img: latestrecipes4, 
      tags: ['Baking recipes', 'Refined Sugar-free'] 
    },
    { 
      id: 4,
      name: 'One pot lasagna', 
      img: recipeindex4, 
      tags: ['Quick dinners', 'Meal Prep'] 
    },
    { 
      id: 5,
      name: 'Shrimp and chicken fried rice', 
      img: recipeindex5, 
      tags: ['Quick dinners', 'High Protein'] 
    },
    { 
      id: 6,
      name: 'Fudgy cherry brownies', 
      img: recipeindex6, 
      tags: ['Baking recipes', 'Vegan'] 
    },
    { 
      id: 7,
      name: 'Sushi burritos', 
      img: recipeindex7, 
      tags: ['Meal Prep', 'Gluten-free'] 
    },
    { 
      id: 8,
      name: 'Chickpea and chicken salad', 
      img: recipeindex8, 
      tags: ['High Protein', 'Dairy-free'] 
    },
    { 
      id: 9,
      name: 'One pot mutton flavoured rice', 
      img: recipeindex9, 
      tags: ['Meal Prep', 'Quick dinners'] 
    }
  ];

  // FILTER LOGIC - ITHA ADD PANNITEN
  const filteredRecipes = selectedFilters.length === 0 
    ? allRecipes 
    : allRecipes.filter(recipe => 
        recipe.tags.some(tag => selectedFilters.includes(tag))
      );

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
              <Nav.Link as={Link} to="/recipe" className="text-danger fw-bold">RECIPES</Nav.Link>
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
    
      <Container style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        
        {/* Main Title */}
        <div className="text-center mb-5">
          <h1 
            className="display-4 fw-light mb-2"
            style={{ color: '#2c3e50' }}
          >
            Healthy Baking
          </h1>
          <div 
            className="mx-auto"
            style={{ width: '80px', height: '2px', backgroundColor: '#C41E3A' }}
          ></div>
        </div>

        {/* Active Filters Display */}
        {selectedFilters.length > 0 && (
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-2 align-items-center">
              <span className="fw-bold">Active Filters:</span>
              {selectedFilters.map((filter, idx) => (
                <span 
                  key={idx}
                  className="badge"
                  style={{ 
                    backgroundColor: '#C41E3A',
                    color: 'white',
                    padding: '8px 12px',
                    fontSize: '0.85rem',
                    cursor: 'pointer'
                  }}
                  onClick={() => handleFilterChange(filter)}
                >
                  {filter} <i className="bi bi-x-lg ms-1"></i>
                </span>
              ))}
              <Button 
                variant="outline-secondary" 
                size="sm"
                onClick={() => setSelectedFilters([])}
              >
                Clear All
              </Button>
            </div>
          </div>
        )}

        <div className="row g-5">
          
          {/* Left Sidebar - Filters */}
          <div className="col-12 col-lg-3">
            
            {/* Filter by Lifestyle */}
            <div className="mb-5">
              <h5 className="fw-semibold mb-3 pb-2 border-bottom">
                Filter by Lifestyle
              </h5>
              {lifestyleFilters.map((filter, idx) => (
                <Form.Check 
                  key={idx}
                  type="checkbox"
                  id={`lifestyle-${idx}`}
                  label={
                    <span className="d-flex justify-content-between w-100">
                      <span>{filter.name}</span>
                      <span className="text-muted small">({filter.count})</span>
                    </span>
                  }
                  checked={selectedFilters.includes(filter.name)}
                  onChange={() => handleFilterChange(filter.name)}
                  className="mb-2 py-2 px-3 rounded"
                  style={{ 
                    cursor: 'pointer',
                    backgroundColor: selectedFilters.includes(filter.name) ? '#fdf5f6' : 'transparent'
                  }}
                />
              ))}
            </div>

            {/* Filter by Meal Time */}
            <div>
              <h5 className="fw-semibold mb-3 pb-2 border-bottom">
                Filter by Meal Time
              </h5>
              {mealTimeFilters.map((filter, idx) => (
                <Form.Check 
                  key={idx}
                  type="checkbox"
                  id={`mealtime-${idx}`}
                  label={
                    <span className="d-flex justify-content-between w-100">
                      <span>{filter.name}</span>
                      <span className="text-muted small">({filter.count})</span>
                    </span>
                  }
                  checked={selectedFilters.includes(filter.name)}
                  onChange={() => handleFilterChange(filter.name)}
                  className="mb-2 py-2 px-3 rounded"
                  style={{ 
                    cursor: 'pointer',
                    backgroundColor: selectedFilters.includes(filter.name) ? '#fdf5f6' : 'transparent'
                  }}
                />
              ))}
            </div>

          </div>

          <div className="col-12 col-lg-9">
            
            {/* Category Cards */}
            <div className="row g-4 mb-5">
              {categories.map((cat, idx) => (
                <div key={idx} className="col-6 col-md-3">
                  <div 
                    className="card border-0 text-center h-100 py-4"
                    style={{ 
                      backgroundColor: '#fdf5f6',
                      borderRadius: '16px',
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div className="card-body">
                      <i 
                        className={`bi ${cat.icon} mb-3`}
                        style={{ fontSize: '2.5rem', color: '#C41E3A' }}
                      ></i>
                      <h6 className="fw-bold mb-1">{cat.title}</h6>
                      <p className="text-muted small mb-0">{cat.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Results Count */}
            <div className="mb-3">
              <p className="text-muted">
                Showing <strong>{filteredRecipes.length}</strong> {filteredRecipes.length === 1 ? 'recipe' : 'recipes'}
              </p>
            </div>

            {/* Recipe Grid - filteredRecipes use panniten */}
            <div className="row g-4">
              {filteredRecipes.length > 0 ? (
                filteredRecipes.map((recipe) => (
                  <div key={recipe.id} className="col-12 col-md-6 col-lg-4">
                    <div 
                      className="card border-0 h-100"
                      style={{ 
                        borderRadius: '16px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <Link to={`/recipe/${recipe.id}`}>
                        <img 
                          src={recipe.img} 
                          alt={recipe.name} 
                          className="card-img-top" 
                          style={{ 
                            height: '200px', 
                            objectFit: 'cover',
                            borderRadius: '16px 16px 0 0',
                            cursor: 'pointer'
                          }} 
                        />
                      </Link>
                      
                      <div className="card-body p-4">
                        <h6 className="fw-semibold mb-3" style={{ minHeight: '45px' }}>
                          <Link 
                            to={`/recipe/${recipe.id}`} 
                            className="text-decoration-none text-dark"
                          >
                            {recipe.name}
                          </Link>
                        </h6>
                        <div className="d-flex flex-wrap gap-2">
                          {recipe.tags.map((tag, tagIdx) => (
                            <span 
                              key={tagIdx}
                              className="badge"
                              style={{ 
                                backgroundColor: '#fdf5f6',
                                color: '#C41E3A',
                                fontWeight: '400',
                                fontSize: '0.75rem'
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <i className="bi bi-emoji-frown" style={{ fontSize: '3rem', color: '#ccc' }}></i>
                  <p className="text-muted mt-3">No recipes found with selected filters</p>
                  <Button 
                    variant="danger" 
                    onClick={() => setSelectedFilters([])}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>

          </div>
        </div>
      </Container>

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
  
              <h3 
                className="mb-4 fw-normal"
                style={{ fontSize: '1.6rem' }}
              >
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

export default Recipies;