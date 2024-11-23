import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Function to generate random placeholder URLs
  const generateRandomImages = (count) => {
    return Array.from({ length: count }, () => {
      const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
      const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
      const text = `Image+${Math.floor(Math.random() * 100)}`;
      return `https://via.placeholder.com/400x300/${randomColor1}/${randomColor2}?text=${text}`;
    });
  };

  const images = generateRandomImages(12); // Generate 12 random images

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
            <button className="modal-close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
