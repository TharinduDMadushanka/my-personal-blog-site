import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import img1 from '../../assets/pages/Travel/img1.jpg';
import img2 from '../../assets/pages/Travel/img2.jpg';
import img3 from '../../assets/pages/Travel/img3.jpg';
import galle from '../../assets/pages/Travel/galle.png';
import './Travel.css';
import travel_data from '../../data/Travel/Travel_data';
import { Modal } from 'react-bootstrap';

const Travel = () => {
  const [selectedPlace, setSelectedPlace] = useState(null); // State to hold the selected travel destination

  // Function to open modal and set selected place
  const handleCardClick = (place) => {
    setSelectedPlace(place);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedPlace(null);
  };

  return (
    <div className='travel'>
      <Navbar />
      
      {/* Carousel Section */}
      <div className="carousel">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="First Slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Explore Exotic Destinations</h5>
                <p>Discover the beauty of untouched landscapes and hidden gems around the world. Let your adventure begin.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="Second Slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Unforgettable Experiences</h5>
                <p>From cultural festivals to outdoor adventures, immerse yourself in unique travel experiences that will last a lifetime.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="Third Slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Plan Your Next Journey</h5>
                <p>Whether it's a spontaneous getaway or a well-planned holiday, get ready to explore new horizons with every trip.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Travel Blog Section */}
      <div className="travel-blog container mt-5">
        <div className="row">
          {travel_data.map((item) => (
            <div key={item.t_no} className="col-md-4 mb-4">
              <div className="card" onClick={() => handleCardClick(item)}>
                <img src={item.t_img} className="card-img-top" alt={item.t_name} />
                <div className="card-body">
                  <h5 className="card-title">{item.t_name}</h5>
                  <p className="card-text">{item.t_desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Detailed Information */}
      {selectedPlace && (
        <Modal show={true} onHide={handleCloseModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPlace.t_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2 style={{color:"black"}}>{selectedPlace.t_name}</h2>
            <img src={selectedPlace.t_img} className="img-fluid mb-4" alt={selectedPlace.t_name} />
            <p style={{color:"black"}}>{selectedPlace.t_desc}</p>
            <p style={{color:"black"}}>{selectedPlace.t_more}</p>
          </Modal.Body>
        </Modal>
      )}

    </div>
  );
};

export default Travel;
