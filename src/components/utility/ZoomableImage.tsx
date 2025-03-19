import React, { useState, useRef } from 'react';

interface ZoomableImageProps {
  src: string;
  alt: string;
  imageScaling?: string;
  className?: string;
}

interface Position {
  x: number;
  y: number;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ 
  src, 
  alt, 
  imageScaling = '', 
  className = '' 
}) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!imgRef.current) return;
    
    const rect = imgRef.current.getBoundingClientRect();
    
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    setPosition({ x, y });
  };

  return (
    <div 
      className={`w-full h-96 overflow-hidden relative cursor-zoom-in ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <div 
        className="absolute inset-0 bg-black opacity-10 z-[5]"
        aria-hidden="true"
      ></div>
            
      <img 
        ref={imgRef}
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover transition-transform duration-100 ${imageScaling}`}
        style={{
          transformOrigin: `${position.x * 100}% ${position.y * 100}%`,
          transform: isHovering ? 'scale(1.2)' : 'scale(1)',
        }}
      />
    </div>
  );
};

export default ZoomableImage;