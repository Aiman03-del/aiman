'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ScreenshotImageProps {
  url: string;
  alt: string;
  fallbackImage: string;
  className?: string;
}

export default function ScreenshotImage({ url, alt, fallbackImage, className = "" }: ScreenshotImageProps) {
  const [imageError, setImageError] = useState(false);
  
  // Screenshot API service (you can replace with any screenshot service)
  const screenshotUrl = `https://api.screenshotmachine.com/?key=YOUR_API_KEY&url=${encodeURIComponent(url)}&dimension=1024x768&format=jpg`;
  
  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return (
      <Image
        src={fallbackImage}
        alt={alt}
        fill
        className={className}
      />
    );
  }

  return (
    <Image
      src={screenshotUrl}
      alt={alt}
      fill
      className={className}
      onError={handleImageError}
    />
  );
}
