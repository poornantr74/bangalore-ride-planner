import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, Filter, MapPin, Clock, TrendingUp, ChevronRight } from 'lucide-react';
import { routes, categories } from '../data/routeData';

const RouteList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredRoutes, setFilteredRoutes] = useState(routes);

  useEffect(() => {
    // Check if category was passed from Home page
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location]);

  useEffect(() => {
    let filtered = routes;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(route => 
        route.category.includes(selectedCategory)
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(route =>
        route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.distance.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredRoutes(filtered);
  }, [selectedCategory, searchTerm]);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'difficulty-easy';
      case 'Moderate': return 'difficulty-moderate';
      case 'Hard': return 'difficulty-hard';
      default: return 'difficulty-easy';
    }
  };

  return (
    <div className="routes-container">
      {/* Header */}
      <div className="routes-header">
        <div className="routes-header-content">
          <h1 className="routes-title">Discover Routes</h1>
          <p className="routes-subtitle">
            {filteredRoutes.length} route{filteredRoutes.length !== 1 ? 's' : ''} available
          </p>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="filter-section">
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search routes by name, distance, or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filter">
          <div className="filter-label">
            <Filter size={18} />
            <span>Filter by:</span>
          </div>
          <div className="category-buttons">
            <button
              className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All Routes
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.name ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Routes Grid */}
      {filteredRoutes.length > 0 ? (
        <div className="routes-grid">
          {filteredRoutes.map((route) => (
            <div 
              key={route.id} 
              className="route-card"
              onClick={() => navigate(`/routes/${route.id}`)}
            >
              <div className="route-card-header">
                <div className="route-categories">
                  <span className="route-emoji-badge">{route.emoji}</span>
                  {route.category.slice(0, 2).map((cat, idx) => (
                    <span key={idx} className="route-tag">{cat}</span>
                  ))}
                </div>
                <span className={`difficulty-badge ${getDifficultyColor(route.difficulty)}`}>
                  {route.difficulty}
                </span>
              </div>

              <h3 className="route-card-title">{route.name}</h3>
              <p className="route-card-description">{route.whyThisRide || route.description}</p>

              <div className="route-card-info">
                <div className="info-item">
                  <MapPin size={18} />
                  <span>{route.distance}</span>
                </div>
                <div className="info-item">
                  <Clock size={18} />
                  <span>{route.duration}</span>
                </div>
                <div className="info-item">
                  <TrendingUp size={18} />
                  <span>{route.difficulty}</span>
                </div>
              </div>

              <div className="route-card-footer">
                <div className="best-time">
                  <span className="best-time-label">Best Time:</span>
                  <span className="best-time-value">{route.bestTime}</span>
                </div>
                <button className="view-details-btn">
                  View Details
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <Search size={48} />
          <h3>No routes found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default RouteList;
