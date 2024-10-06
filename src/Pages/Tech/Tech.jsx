import React, { useState } from 'react';
import './Tech.css';
import bg1 from '../../assets/pages/Tech/tech-bg.jpg';
import bg2 from '../../assets/pages/Tech/tech-bg3.jpg';
import bg3 from '../../assets/pages/Tech/tech-bg4.jpg';
import Navbar from '../../Components/Navbar/Navbar';
import tech_data from '../../data/Tech/tech_data';
import { Modal } from 'react-bootstrap';

const Tech = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Function to handle card click and open the modal with detailed information
  const handleCardClick = (item) => {
    setSelectedPlace(item);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedPlace(null);
  };

  return (
    <div className='tech'>
      <Navbar />

      {/* Carousel Section */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bg1} className="d-block w-100" alt="First Slide" />
          </div>
          <div className="carousel-item">
            <img src={bg2} className="d-block w-100" alt="Second Slide" />
          </div>
          <div className="carousel-item">
            <img src={bg3} className="d-block w-100" alt="Third Slide" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Technology Blog Section */}
      <div className="tech-blog container mt-5">
        <div className="row">
          {tech_data.map((item) => (
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
            <h2 style={{ color: "black" }}>{selectedPlace.t_name}</h2>
            <img src={selectedPlace.t_img} className="img-fluid mb-4" alt={selectedPlace.t_name} />
            <p style={{ color: "black" }}>{selectedPlace.t_desc}</p>
            <p style={{ color: "black" }}>{selectedPlace.t_more}</p>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default Tech;
