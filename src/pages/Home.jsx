import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sunrise, Heart, MoveRight, Navigation, Star, Flame } from 'lucide-react';
import { categories, bestPicks } from '../data/routeData';

const iconMap = {
  Moon: Moon,
  Sunrise: Sunrise,
  Heart: Heart,
  MoveRight: MoveRight
};

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate('/routes', { state: { selectedCategory: categoryName } });
  };

  const handleBestPickClick = (routeId) => {
    navigate(`/routes/${routeId}`);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <Navigation size={16} />
            <span>Explore Bangalore on Two Wheels</span>
          </div>
          <h1 className="hero-title">
            Bangalore<br />
            <span className="hero-title-accent">Ride Planner</span>
          </h1>
          <p className="hero-description">
            Discover 50+ curated motorcycle routes around Bangalore. From sunrise rides to midnight cruises,
            find your perfect journey through paths crafted by local riders.
          </p>
          <button 
            className="hero-cta"
            onClick={() => navigate('/routes')}
          >
            Explore Routes
            <MoveRight size={20} />
          </button>
        </div>
        
        <div className="hero-visual">
          <div className="visual-circle"></div>
          <div className="visual-circle-small"></div>
        </div>
      </section>

      {/* Best Picks Section */}
      <section className="best-picks-section">
        <div className="section-header">
          <div className="section-title-with-icon">
            <Flame size={32} className="flame-icon" />
            <h2 className="section-title">Best Picks</h2>
          </div>
          <p className="section-description">Our top 5 premium routes loved by riders</p>
        </div>
        
        <div className="best-picks-grid">
          {bestPicks.map((pick) => (
            <div 
              key={pick.id}
              className="best-pick-card"
              onClick={() => handleBestPickClick(pick.routeId)}
            >
              <div className="best-pick-badge">
                <Star size={14} />
                <span>{pick.badge}</span>
              </div>
              <div className="best-pick-emoji">{pick.emoji}</div>
              <h3 className="best-pick-name">{pick.name}</h3>
              <div className="best-pick-info">
                <span className="best-pick-distance">{pick.distance}</span>
                <span className="best-pick-category">{pick.category}</span>
              </div>
              <button className="best-pick-btn">
                View Route
                <MoveRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="section-header">
          <h2 className="section-title">Ride Categories</h2>
          <p className="section-description">Choose your adventure based on time, mood, and experience level</p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon];
            return (
              <div 
                key={category.id}
                className="category-card"
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className="category-icon">
                  <IconComponent size={28} />
                </div>
                <h3 className="category-name">{category.emoji} {category.name}</h3>
                <div className="category-arrow">
                  <MoveRight size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <div className="stat-number">50+</div>
          <div className="stat-label">Curated Routes</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">2000+</div>
          <div className="stat-label">Kilometers Mapped</div>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <div className="stat-number">4</div>
          <div className="stat-label">Ride Categories</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <Flame size={40} className="cta-flame" />
          <h2 className="cta-title">Discover 50+ Bangalore Ride Routes – Start Exploring Now</h2>
          <p className="cta-description">
            Your next adventure is just a ride away. Explore sunrise hills, night cruises, and everything in between.
          </p>
          <button 
            className="cta-button"
            onClick={() => navigate('/routes')}
          >
            Explore Routes
            <MoveRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
