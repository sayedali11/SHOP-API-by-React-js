import React from 'react';
import image01 from '../../images/img01.jpg';
import image02 from '../../images/img02.jpg';
import image03 from '../../images/img03.jpg';

const Sliders = () => {
  return (
    <div
      id="carouselExampleInterval"
      class="carousel slide mt-5 mb-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src={image01} class="d-block w-100" alt="cloth" />
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src={image02} class="d-block w-100" alt="jewelery" />
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src={image03} class="d-block w-100" alt="electronic" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
export default Sliders;
