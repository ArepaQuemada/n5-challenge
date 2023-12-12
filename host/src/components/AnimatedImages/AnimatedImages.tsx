import React, { useState, useEffect } from "react";
import { Image, ImageWrapper } from "./styled";

interface AnimatedImageProps {
  images: string[];
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <ImageWrapper>
      {images.map((image, index) => (
        <Image
          key={index}
          backgroundImage={image}
          style={{
            display: index === currentImageIndex ? "block" : "none",
          }}
        />
      ))}
    </ImageWrapper>
  );
};

export default AnimatedImage;
