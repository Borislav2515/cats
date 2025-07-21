import React, { useState } from 'react';
import './CatModal.css';

function CatModal({ cat, onClose, onAdopt }) {
  const [photoIdx, setPhotoIdx] = useState(0);
  if (!cat) return null;
  // Галерея: если есть cat.images (массив), иначе одно фото
  const images = cat.images && cat.images.length > 0 ? cat.images : [cat.image];
  return (
    <div className="cat-modal__backdrop" onClick={onClose}>
      <div className="cat-modal" onClick={e => e.stopPropagation()}>
        <button className="cat-modal__close" onClick={onClose}>&times;</button>
        <div className="cat-modal__gallery">
          <img src={images[photoIdx]} alt={cat.name} className="cat-modal__img" />
          {images.length > 1 && (
            <div className="cat-modal__gallery-thumbs">
              {images.map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt={cat.name + ' ' + (idx+1)}
                  className={idx === photoIdx ? 'active' : ''}
                  onClick={() => setPhotoIdx(idx)}
                />
              ))}
            </div>
          )}
        </div>
        <h2 className="cat-modal__name">{cat.name}</h2>
        <div className="cat-modal__meta">
          Возраст: {cat.age} ({cat.ageCategory})<br/>
          Пол: {cat.gender}<br/>
          Окрас: {cat.color}<br/>
          Порода: {cat.breed}
        </div>
        <div className="cat-modal__desc">{cat.description}</div>
        <button className="cat-modal__btn" onClick={() => onAdopt && onAdopt(cat)}>
          Забрать домой
        </button>
      </div>
    </div>
  );
}

export default CatModal;
