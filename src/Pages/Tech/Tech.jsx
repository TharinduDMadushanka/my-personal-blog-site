import React, { useState } from 'react';
import './Tech.css';
import bg1 from '../../assets/pages/Tech/tech-bg.jpg';
import bg2 from '../../assets/pages/Tech/tech-bg3.jpg';
import bg3 from '../../assets/pages/Tech/tech-bg4.jpg';
import Navbar from '../../Components/Navbar/Navbar';
import tech_data from '../../data/Tech/tech_data';
import { Modal } from 'react-bootstrap';
import video2 from '../../assets/pages/Tech/bg.mp4'
import ReactMarkdown from 'react-markdown';


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

      <video className='background' autoPlay loop muted>
        <source src={video2} type='video/mp4' />
      </video>

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
        <Modal show={true} onHide={handleCloseModal} size="xl" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedPlace.t_name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2 style={{ color: "#fff" }}>{selectedPlace.t_name}</h2>
            <img src={selectedPlace.t_img} className="img-fluid mb-4" alt={selectedPlace.t_name} />
            <p>{selectedPlace.t_desc}</p>

            {/* Use ReactMarkdown to properly render the markdown-style content */}
            <ReactMarkdown>{selectedPlace.t_more}</ReactMarkdown>
        </Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default Tech;
