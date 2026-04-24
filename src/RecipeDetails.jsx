import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar, Nav, Container, FormControl,Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import logo from './assets/logo.png';

import latestrecipeindes1 from './assets/latestrecipeindes1.png'
import latestrecipeindes2 from './assets/latestrecipeindes2.png'
import latestrecipeindes3 from './assets/latestrecipeindes3.png'
import latestrecipeindes4 from './assets/latestrecipeindes4.png'
import latestrecipeindes5 from './assets/latestrecipeindes5.png'
import latestrecipeindes6 from './assets/latestrecipeindes6.png'

import profile from './assets/profile.png'
import recipedes1 from './assets/recipedes1.png'

import direction1 from './assets/recipedesdirectn1.png'
import direction2 from './assets/recipedesdirectn2.png'
import direction3 from './assets/recipedesdirectn3.png'
import direction4 from './assets/recipedesdirectn4.png'
import direction5 from './assets/recipedesdirectn5.png'

import shareimageinstaindes1 from './assets/shareimageinstaindes1.png'
import shareimageinstaindes2 from './assets/shareimageinstaindes2.png'
import shareimageinstaindes3 from './assets/shareimageinstaindes3.png'
import shareimageinstaindes4 from './assets/shareimageinstaindes4.png'
import shareimageinstaindes5 from './assets/shareimageinstaindes5.png'
import shareimageinstaindes6 from './assets/shareimageinstaindes6.png'

import readersfav1 from './assets/readersfav1.png'
import readersfav2 from './assets/readersfav2.png'
import readersfav3 from './assets/readersfav3.png'
import readersfav4 from './assets/readersfav4.png'

const RecipeDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [id]);

  const recipeData = {
    id: 1,
    title: 'Chicken with spinach, basil and ricotta',
    author: 'Tiffy',
    date: 'February 27, 2025',
    authorImg: profile,
    img: recipedes1,
    time: '30 Minutes',
    difficulty: 'Super Easy',
    servings: '4 persons',
    category: 'Main Dish',
    description: `This hearty and easy stuffed shells with ground beef recipe is the perfect one pan meal that the whole family will love! Plus, it can be made ahead and frozen, so you have a delicious, make ahead meal ready for those busy nights when you don't have time to cook.`,
    ingredients: [
      '2 - pieces chicken thighs',
      '200g ground meat',
      '5 whole eggs',
      '2 cups boiled potatoes peeled',
      '1/2 cup walnuts'
    ],
    dressing: [
      '2 cups blueberries, washed and picked over for stems',
      'Fresh herbs, such as chopped parsley and/or cilantro',
      '1 tablespoon honey (light brown sugar or maple syrup also works)',
      '300g Mayonnaise'
    ],
    nutrition: {
      fat: '200g',
      protein: '100g',
      sugar: '146g',
      calories: '436g',
      carbs: '24g'
    },
    directions: [
    {
      step: 1,
      title: 'Make the barbecue sauce:',
      text: `In a medium saucepan, mix the tomato ketchup, brown sugar, apple cider vinegar, soy sauce, and Worcestershire sauce. Stir until the brown sugar is fully dissolved and the mixture is smooth. Sprinkle in the smoked paprika, garlic powder, onion powder, black pepper, and cayenne pepper (if using). Mix well to combine all the spices evenly into the sauce. Place the saucepan over medium heat and bring the sauce to a gentle simmer.`,
      images: [direction1, direction2],
      afterText: `Once you're satisfied with the flavour, remove the sauce from heat and let it cool. Transfer the barbecue sauce into a glass jar or an airtight container. It can be refrigerated for up to two weeks, making it convenient for use in your cooking.`
    },
    {
      step: 2,
      title: 'Cook the chicken (or substitute 2 cups if shredded cooking chicken):',
      text: `In a medium saucepan, mix the tomato ketchup, brown sugar, apple cider vinegar, soy sauce, and Worcestershire sauce. Stir until the brown sugar is fully dissolved and the mixture is smooth.`,
      images: [],
      afterText: null
    },
    {
      step: 3,
      title: 'Mix the chicken with the barbecue sauce:',
      text: `In a medium saucepan, mix the tomato ketchup, brown sugar, apple cider vinegar, soy sauce, and Worcestershire sauce. Stir until the brown sugar is fully dissolved and the mixture is smooth.`,
      images: [direction3, direction4, direction5],
      afterText: `Once you're satisfied with the flavour, remove the sauce from heat and let it cool. Transfer the barbecue sauce into a glass jar or an airtight container. It can be refrigerated for up to two weeks, making it convenient for use in your cooking.`
    }
  ]
  };

  const latestRecipes = [
    { id: 2, title: 'Chickpea Salad', date: 'April 25, 2025', img: latestrecipeindes1 },
    { id: 3, title: 'Crispy Corn', date: 'May 7, 2025', img: latestrecipeindes2 },
    { id: 4, title: 'Barley Soup', date: 'May 25, 2025', img: latestrecipeindes3 },
    { id: 5, title: 'Mutton Rogan Josh', date: 'April 14, 2025', img: latestrecipeindes4 },
    { id: 6, title: 'Hassel nut Cookies', date: 'May 25, 2025', img: latestrecipeindes5 },
    { id: 7, title: 'Zucchini Salad', date: 'January 16, 2025', img: latestrecipeindes6 }
  ];

  const instagramPosts = [shareimageinstaindes1, shareimageinstaindes2, shareimageinstaindes3, shareimageinstaindes4, shareimageinstaindes5, shareimageinstaindes6];

  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const [email, setEmail] = useState('');

  const toggleIngredient = (item) => {
    if (checkedIngredients.includes(item)) {
      setCheckedIngredients(checkedIngredients.filter(i => i!== item));
    } else {
      setCheckedIngredients([...checkedIngredients, item]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert('Thanks for subscribing!');
      setEmail('');
    }
  };

  const tryThisAlso = [
  {
    id: 1,
    title: 'Time saving meal prep',
    img: readersfav1
  },
  {
    id: 2,
    title: 'Toddler - friendly foods',
    img: readersfav2
  },
  {
    id: 3,
    title: '10-must try vegan recipes',
    img: readersfav3
  },
  {
    id: 4,
    title: 'Canning and preserving methods',
    img: readersfav4
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

      {/* Main Content */}
      <div className="container" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>

        {/* Title + Author */}
        <h1 className="fw-bold mb-4">{recipeData.title}</h1>

        <div className="d-flex align-items-center justify-content-between mb-4 pb-4" style={{ borderBottom: '1px solid #e9ecef' }}>
          <div className="d-flex align-items-center gap-3">
            <img
              src={recipeData.authorImg}
              alt={recipeData.author}
              className="rounded-circle"
              style={{ width: '50px', height: '50px', objectFit: 'cover' }}
            />
            <div>
              <p className="mb-0 fw-bold">{recipeData.author}</p>
              <p className="mb-0 text-muted small">{recipeData.date}</p>
            </div>
          </div>

          <div className="d-flex gap-3">
            <a href="#" className="text-decoration-none">
              <i className="bi bi-facebook" style={{ color: '#C41E3A', fontSize: '1.3rem' }}></i>
            </a>
            <a href="#" className="text-decoration-none">
              <i className="bi bi-instagram" style={{ color: '#C41E3A', fontSize: '1.3rem' }}></i>
            </a>
            <a href="#" className="text-decoration-none">
              <i className="bi bi-youtube" style={{ color: '#C41E3A', fontSize: '1.3rem' }}></i>
            </a>
          </div>
        </div>

        {/* Recipe Image + Latest Recipes Side by Side */}
        <div className="row mb-4">
          <div className="col-12 col-lg-8">
            <img
              src={recipeData.img}
              alt={recipeData.title}
              className="img-fluid w-100"
              style={{ borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
          </div>

          <div className="col-12 col-lg-4">
            <h4 className="fw-bold mb-4">Latest Recipes</h4>

            {latestRecipes.map((recipe) => (
              <Link
                key={recipe.id}
                to={`/recipe/${recipe.id}`}
                className="text-decoration-none text-dark"
              >
                <div
                  className="d-flex gap-3 mb-4"
                  style={{ cursor: 'pointer' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <img
                    src={recipe.img}
                    alt={recipe.title}
                    style={{
                      width: '80px',
                      height: '80px',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      flexShrink: 0
                    }}
                  />
                  <div>
                    <p className="mb-1 fw-bold" style={{ fontSize: '0.95rem' }}>
                      {recipe.title}
                    </p>
                    <p className="mb-0 text-muted small">
                      {recipe.date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Meta Info Bar */}
        <div
          className="d-flex justify-content-around align-items-center py-3 mb-4"
          style={{ borderTop: '1px solid #e9ecef', borderBottom: '1px solid #e9ecef' }}
        >
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-clock" style={{ fontSize: '1.2rem' }}></i>
            <span>{recipeData.time}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-cup-hot" style={{ fontSize: '1.2rem' }}></i>
            <span>{recipeData.difficulty}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-people" style={{ fontSize: '1.2rem' }}></i>
            <span>{recipeData.servings}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <i className="bi bi-award" style={{ fontSize: '1.2rem' }}></i>
            <span>{recipeData.category}</span>
          </div>
        </div>

        <div className="row">
          {/* Left Content */}
          <div className="col-12 col-lg-8">

            {/* Description */}
            <p style={{ fontSize: '1.05rem', lineHeight: '1.9', color: '#333' }} className="mb-5">
              {recipeData.description}
            </p>

            {/* Ingredients Section */}
            <div className="mb-5">
              <h4
                className="fw-bold mb-4"
                style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}
              >
                Ingredients:
              </h4>

              {recipeData.ingredients.map((item, idx) => (
                <div
                  key={idx}
                  className="d-flex align-items-center gap-3 mb-3"
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleIngredient(item)}
                >
                  <div
                    className="rounded-circle border"
                    style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid #333',
                      backgroundColor: checkedIngredients.includes(item)? '#333' : 'transparent',
                      flexShrink: 0
                    }}
                  >
                    {checkedIngredients.includes(item) && (
                      <i className="bi bi-check text-white d-flex align-items-center justify-content-center" style={{ fontSize: '12px', height: '100%' }}></i>
                    )}
                  </div>
                  <span style={{
                    textDecoration: checkedIngredients.includes(item)? 'line-through' : 'none',
                    color: checkedIngredients.includes(item)? '#999' : '#333'
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* For Dressing Section */}
            <div className="mb-5">
              <h4
                className="fw-bold mb-4"
                style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}
              >
                For Dressing:
              </h4>

              {recipeData.dressing.map((item, idx) => (
                <div
                  key={idx}
                  className="d-flex align-items-center gap-3 mb-3"
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleIngredient(item)}
                >
                  <div
                    className="rounded-circle border"
                    style={{
                      width: '20px',
                      height: '20px',
                      border: '2px solid #333',
                      backgroundColor: checkedIngredients.includes(item)? '#333' : 'transparent',
                      flexShrink: 0
                    }}
                  >
                    {checkedIngredients.includes(item) && (
                      <i className="bi bi-check text-white d-flex align-items-center justify-content-center" style={{ fontSize: '12px', height: '100%' }}></i>
                    )}
                  </div>
                  <span style={{
                    textDecoration: checkedIngredients.includes(item)? 'line-through' : 'none',
                    color: checkedIngredients.includes(item)? '#999' : '#333'
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Sidebar - Newsletter + Instagram */}
          <div className="col-12 col-lg-4">
            <div className="sticky-top" style={{ top: '20px' }}>

              {/* Logo */}
              <div className="text-center mb-4">
                <img
                  src={logo}
                  alt="My Kitchen"
                  style={{
                    maxWidth: '180px',
                    padding: '10px 20px',
                    border: '2px solid #333',
                    borderRadius: '20px'
                  }}
                />
              </div>

              {/* Tagline */}
              <h5 className="text-center fw-bold mb-4">
                Healthy recipes for busy people
              </h5>

              {/* Social Icons */}
              <div className="d-flex justify-content-center gap-3 mb-4">
                <a href="#" className="text-decoration-none">
                  <i className="bi bi-twitter" style={{ color: '#C41E3A', fontSize: '1.5rem' }}></i>
                </a>
                <a href="#" className="text-decoration-none">
                  <i className="bi bi-facebook" style={{ color: '#C41E3A', fontSize: '1.5rem' }}></i>
                </a>
                <a href="#" className="text-decoration-none">
                  <i className="bi bi-instagram" style={{ color: '#C41E3A', fontSize: '1.5rem' }}></i>
                </a>
                <a href="#" className="text-decoration-none">
                  <i className="bi bi-youtube" style={{ color: '#C41E3A', fontSize: '1.5rem' }}></i>
                </a>
                <a href="#" className="text-decoration-none">
                  <i className="bi bi-linkedin" style={{ color: '#C41E3A', fontSize: '1.5rem' }}></i>
                </a>
                <a href="#" className="text-decoration-none">
                  <i className="bi bi-tiktok" style={{ color: '#C41E3A', fontSize: '1.5rem' }}></i>
                </a>
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="mb-2">
                <div className="position-relative">
                  <input
                    type="email"
                    className="form-control border-0 border-bottom rounded-0 shadow-none ps-0 pe-5 py-2"
                    placeholder="Enter your email address here"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ fontSize: '0.95rem', borderColor: '#6c757d' }}
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

              <p className="small text-muted mb-5">
                *Be informed about the latest recipes and workshops
              </p>

              {/* Share on Instagram */}
              <h6 className="text-center fw-bold mb-3">
                Share your meals with us on<br/>Instagram
              </h6>

              <div className="row g-2">
                {instagramPosts.map((img, idx) => (
                  <div key={idx} className="col-4">
                    <img
                      src={img}
                      alt={`Instagram ${idx + 1}`}
                      className="w-100"
                      style={{
                        height: '90px',
                        objectFit: 'cover',
                        borderRadius: '4px',
                        cursor: 'pointer'
                      }}
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* NUTRITION INFORMATION - FULL WIDTH COLUMN */}
        <div className="row">
          <div className="col-12">
            <div
              className="p-4 mb-5"
              style={{ backgroundColor: '#f8f8f8', borderRadius: '8px' }}
            >
              <div className="d-flex align-items-center gap-3 flex-wrap">
                <h5 className="fw-bold mb-0">Nutrition Information</h5>
                <div style={{ width: '1px', height: '30px', backgroundColor: '#ccc' }}></div>

                <div className="d-flex gap-4 flex-wrap">
                  <div className="text-center">
                    <div className="fw-bold" style={{ fontSize: '1.1rem' }}>{recipeData.nutrition.fat}</div>
                    <div className="text-muted small">Fat</div>
                  </div>
                  <div className="text-center">
                    <div className="fw-bold" style={{ fontSize: '1.1rem' }}>{recipeData.nutrition.protein}</div>
                    <div className="text-muted small">Protein</div>
                  </div>
                  <div className="text-center">
                    <div className="fw-bold" style={{ fontSize: '1.1rem' }}>{recipeData.nutrition.sugar}</div>
                    <div className="text-muted small">Sugar</div>
                  </div>
                  <div className="text-center">
                    <div className="fw-bold" style={{ fontSize: '1.1rem' }}>{recipeData.nutrition.calories}</div>
                    <div className="text-muted small">Calories</div>
                  </div>
                  <div className="text-center">
                    <div className="fw-bold" style={{ fontSize: '1.1rem' }}>{recipeData.nutrition.carbs}</div>
                    <div className="text-muted small">Carbs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DIRECTIONS - FULL WIDTH COLUMN */}
        <div className="row">
          <div className="col-12">
            <div className="mb-5">
              <div className="d-flex align-items-center gap-3 mb-4">
                <h4
                  className="fw-bold mb-0"
                  style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}
                >
                  Directions:
                </h4>
                <div style={{ flex: 1, height: '1px', backgroundColor: '#e9ecef' }}></div>
              </div>

              {recipeData.directions.map((dir, idx) => (
                <div key={idx} className="mb-5">
                  <div className="d-flex gap-3 mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '35px',
                        height: '35px',
                        backgroundColor: '#C41E3A',
                        color: 'white',
                        fontWeight: 'bold',
                        flexShrink: 0
                      }}
                    >
                      {dir.step}
                    </div>
                    <div>
                      <h5 className="fw-bold mb-3">{dir.title}</h5>
                      <p style={{ fontSize: '1rem', lineHeight: '1.9', color: '#333' }}>
                        {dir.text}
                      </p>
                    </div>
                  </div>

                  {/* Images */}
                  {dir.images && dir.images.length > 0 && (
                    <div className="row g-3 mb-3" style={{ marginLeft: '50px' }}>
                      {dir.images.map((img, imgIdx) => (
                        <div key={imgIdx} className="col-6 col-md-4">
                          <img
                            src={img}
                            alt={`Step ${dir.step} image ${imgIdx + 1}`}
                            className="img-fluid w-100"
                            style={{
                              height: '200px',
                              objectFit: 'cover',
                              borderRadius: '8px'
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* After Text */}
                  {dir.afterText && (
                    <p style={{ fontSize: '1rem', lineHeight: '1.9', color: '#333', marginLeft: '50px' }}>
                      {dir.afterText}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

{/* TRY THIS ALSO SECTION */}
<div className="row mt-5">
  <div className="col-12">
    <div className="d-flex align-items-center gap-3 mb-4">
      <h4 
        className="fw-bold mb-0"
        style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}
      >
        Try this also
      </h4>
      <div style={{ flex: 1, height: '1px', backgroundColor: '#e9ecef' }}></div>
    </div>

    <div className="row g-4">
      {tryThisAlso.map((item) => (
        <div key={item.id} className="col-12 col-sm-6 col-lg-3">
          <Link 
            to={`/recipe/${item.id}`}
            className="text-decoration-none"
          >
            <div 
              className="card border-0 h-100"
              style={{ 
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              }}
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="card-img-top"
                style={{ 
                  height: '200px',
                  objectFit: 'cover',
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px'
                }}
              />
              <div 
                className="card-body text-center py-3"
                style={{ backgroundColor: 'white', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px' }}
              >
                <p className="mb-0 fw-bold text-dark" style={{ fontSize: '0.95rem' }}>
                  {item.title}
                </p>
              </div>
            </div>
          </Link>
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

export default RecipeDetail;