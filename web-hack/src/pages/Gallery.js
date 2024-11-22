import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const images = [
    "https://via.placeholder.com/400x300/FF5733/FFFFFF?text=Image+1",
    "https://via.placeholder.com/400x300/33B5FF/FFFFFF?text=Image+2",
    "https://via.placeholder.com/400x300/FFB533/FFFFFF?text=Image+3",
    "https://via.placeholder.com/400x300/33B533/FFFFFF?text=Image+4",
    "https://via.placeholder.com/400x300/FFFF33/FFFFFF?text=Image+5",
    "https://via.placeholder.com/400x300/33FF57/FFFFFF?text=Image+6",
  ];

  const openModal = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="gallery-image"
            onClick={() => openModal(src)}
          />
        ))}
      </div>

      {/* Modal for full-screen image */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImage} alt="Full screen" className="modal-image" />
            <button className="modal-close" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
