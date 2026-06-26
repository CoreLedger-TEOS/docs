import React, {useEffect, useState} from 'react';

export default function ZoomableImage({alt = '', className = '', src, ...props}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const openPreview = () => setIsOpen(true);

  return (
    <>
      <img
        {...props}
        alt={alt}
        className={['zoomable-image', className].filter(Boolean).join(' ')}
        onClick={openPreview}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            openPreview();
          }
        }}
        role="button"
        src={src}
        tabIndex={0}
      />
      {isOpen ? (
        <div
          aria-label={alt || 'Image preview'}
          aria-modal="true"
          className="image-lightbox"
          onClick={(event) => {
            if (event.currentTarget === event.target) {
              setIsOpen(false);
            }
          }}
          role="dialog">
          <button
            aria-label="Close image preview"
            className="image-lightbox__close"
            onClick={() => setIsOpen(false)}
            type="button">
            Close
          </button>
          <img alt={alt} className="image-lightbox__image" src={src} />
        </div>
      ) : null}
    </>
  );
}
