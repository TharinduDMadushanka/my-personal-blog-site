import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import img1 from '../../assets/pages/Travel/img1.jpg';
import img2 from '../../assets/pages/Travel/img2.jpg';
import img3 from '../../assets/pages/Travel/img3.jpg';
import './Travel.css';


const Travel = () => {
  return (
    <div className='travel'>
      <Navbar />
      
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
                <p>Discover the beauty of untouched landscapes and hidden gems around the world. Let your adventure begin</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="Second Slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Unforgettable Experiences</h5>
                <p>From cultural festivals to outdoor adventures, immerse yourself in unique travel experiences that will last a lifetime</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="Third Slide" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Plan Your Next Journey</h5>
                <p>Whether it's a spontaneous getaway or a well-planned holiday, get ready to explore new horizons with every trip</p>
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

        <div className="travel-blog">

        </div>

    </div>
  );
};

export default Travel;
