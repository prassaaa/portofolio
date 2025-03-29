"use client";

import { useState, useEffect, useCallback } from 'react';

// Define interface for image
interface GalleryImage {
  src: string;
  alt?: string;
}

// Define props interface for the component
interface ImageGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  initialIndex?: number;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ 
  isOpen, 
  onClose, 
  images, 
  initialIndex = 0 
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(initialIndex);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  
  // Reset to initial index when gallery opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);
  
  // Navigation functions
  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);
  
  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent scrolling when gallery is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, prevImage, nextImage]);
  
  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStartX(touch.clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    
    const touch = e.changedTouches[0];
    const touchEndX = touch.clientX;
    const diff = touchStartX - touchEndX;
    
    // Threshold for swipe detection
    const threshold = 50;
    
    if (diff > threshold) {
      // Swipe left, show next image
      nextImage();
    } else if (diff < -threshold) {
      // Swipe right, show previous image
      prevImage();
    }
    
    setTouchStartX(null);
  };

  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 touch-none">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 z-50 grid h-10 w-10 sm:top-4 sm:right-4 place-content-center rounded-full bg-white text-black hover:bg-gray-200"
        aria-label="Tutup galeri"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
          <path d="M15 5L5 15M5 5l10 10" />
        </svg>
      </button>
      
      {/* Image container with touch handlers */}
      <div 
        className="relative w-full h-full flex items-center justify-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt || `Gallery image ${currentIndex + 1}`}
          className="max-h-[85vh] max-w-[90vw] sm:max-w-[85vw] object-contain select-none"
          draggable="false"
        />
        
        {/* Image counter */}
        <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm sm:text-base">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Navigation arrows - use larger tap targets on mobile */}
      {images.length > 1 && (
        <>
          <button 
            onClick={prevImage}
            className="absolute left-2 sm:left-4 grid h-10 w-10 sm:h-12 sm:w-12 place-content-center rounded-full bg-white text-black hover:bg-gray-200"
            aria-label="Gambar sebelumnya"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
              <path d="M12.5 15l-5-5 5-5" />
            </svg>
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-2 sm:right-4 grid h-10 w-10 sm:h-12 sm:w-12 place-content-center rounded-full bg-white text-black hover:bg-gray-200"
            aria-label="Gambar berikutnya"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-6 w-6">
              <path d="M7.5 15l5-5-5-5" />
            </svg>
          </button>
        </>
      )}
      
      {/* Mobile swipe hint */}
      <div className="absolute bottom-14 left-0 right-0 text-center text-gray-300 text-xs sm:hidden">
        Geser ke kiri/kanan untuk melihat gambar lain
      </div>
    </div>
  );
};

export default ImageGallery;