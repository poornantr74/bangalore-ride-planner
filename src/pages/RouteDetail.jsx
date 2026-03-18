import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  TrendingUp, 
  Navigation, 
  Map,
  Car,
  AlertCircle,
  Star
} from 'lucide-react';
import { routes } from '../data/routeData';

const RouteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const route = routes.find(r => r.id === parseInt(id));

  if (!route) {
    return (
      <div className="route-not-found">
        <AlertCircle size={64} />
        <h2>Route Not Found</h2>
        <p>The route you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/routes')} className="back-btn">
          Back to Routes
        </button>
      </div>
    );
  }

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'difficulty-easy';
      case 'Moderate': return 'difficulty-moderate';
      case 'Hard': return 'difficulty-hard';
      default: return 'difficulty-easy';
    }
  };

  return (
    <div className="route-detail-container">
      {/* Header */}
      <div className="detail-header">
        <button onClick={() => navigate('/routes')} className="back-button">
          <ArrowLeft size={20} />
          <span>Back to Routes</span>
        </button>
      </div>

      {/* Route Hero */}
      <div className="route-hero">
        <div className="route-hero-content">
          <div className="route-emoji-large">{route.emoji}</div>
          <div className="route-categories-detail">
            {route.category.map((cat, idx) => (
              <span key={idx} className="route-tag-detail">{cat}</span>
            ))}
          </div>
          <h1 className="route-detail-title">{route.name}</h1>
          <p className="route-detail-description">{route.description}</p>
          
          {route.whyThisRide && (
            <div className="why-this-ride">
              <h3>Why this ride?</h3>
              <p>{route.whyThisRide}</p>
            </div>
          )}
          
          <div className="route-stats">
            <div className="stat-box">
              <MapPin size={24} />
              <div className="stat-content">
                <span className="stat-label">Distance</span>
                <span className="stat-value">{route.distance}</span>
              </div>
            </div>
            <div className="stat-box">
              <Clock size={24} />
              <div className="stat-content">
                <span className="stat-label">Duration</span>
                <span className="stat-value">{route.duration}</span>
              </div>
            </div>
            <div className="stat-box">
              <TrendingUp size={24} />
              <div className="stat-content">
                <span className="stat-label">Difficulty</span>
                <span className={`stat-value ${getDifficultyColor(route.difficulty)}`}>
                  {route.difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Route Details Grid */}
      <div className="detail-grid">
        {/* Stops Section */}
        <div className="detail-section stops-section">
          <div className="section-title-box">
            <Navigation size={24} />
            <h2>Route Stops</h2>
          </div>
          <div className="stops-timeline">
            {route.stops.map((stop, index) => (
              <div key={index} className="stop-item">
                <div className="stop-marker">
                  <div className="stop-number">{index + 1}</div>
                  {index < route.stops.length - 1 && <div className="stop-line"></div>}
                </div>
                <div className="stop-content">
                  <h4 className="stop-name">{stop.name}</h4>
                  <span className="stop-time">{stop.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="detail-section-group">
          {/* Best Time */}
          <div className="detail-section info-card">
            <div className="section-title-box">
              <Clock size={24} />
              <h2>Best Time to Ride</h2>
            </div>
            <p className="info-value">{route.bestTime}</p>
          </div>

          {/* Terrain */}
          <div className="detail-section info-card">
            <div className="section-title-box">
              <Map size={24} />
              <h2>Terrain</h2>
            </div>
            <p className="info-value">{route.terrain}</p>
          </div>

          {/* Traffic */}
          <div className="detail-section info-card">
            <div className="section-title-box">
              <Car size={24} />
              <h2>Traffic Level</h2>
            </div>
            <p className="info-value">{route.traffic}</p>
          </div>

          {/* Highlights */}
          <div className="detail-section info-card">
            <div className="section-title-box">
              <Star size={24} />
              <h2>Highlights</h2>
            </div>
            <p className="info-value">{route.highlights}</p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="action-section">
        <a 
          href={route.mapLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="map-link-button"
        >
          <Map size={24} />
          📍 Open in Google Maps
        </a>
      </div>
    </div>
  );
};

export default RouteDetail;
