import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

export function ImageWithFallback({ src, alt, className }: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? "https://via.placeholder.com/400x300?text=Image" : src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
