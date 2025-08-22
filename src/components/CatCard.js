import React, { useState } from 'react';
import { ReactComponent as HeartIcon } from '../icons/heart.svg';
import './CatCard.css';

// SVG-иконки для пола и возраста
const FemaleIcon = () => (
  <span className="cat-card__icon" title="Девочка" style={{color:'#e26fa6'}}>&#9792;</span>
);
const MaleIcon = () => (
  <span className="cat-card__icon" title="Мальчик" style={{color:'#5b9bd5'}}>&#9794;</span>
);
const AgeIcon = () => (
  <span className="cat-card__icon" title="Возраст" style={{color:'#ff7a59',fontSize:'1.1em'}}>&#128337;</span>
);

function CatCard({ cat, onClick, isFavorite, onFavoriteToggle }) {
  // Мини-галерея фото
  const images = cat.images && cat.images.length > 0 ? cat.images : [cat.image];
  const [photoIdx, setPhotoIdx] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  // Бейджи
  const badges = [];
  if (cat.age <= 1) badges.push({ label: 'новый', color: '#5b9bd5' });
  if (cat.age >= 8) badges.push({ label: 'в приюте давно', color: '#ff7a59' });

  // Обработка наведения мыши для переключения фото
  const handleMouseMove = (e) => {
    if (images.length <= 1) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    let newIdx = 0;
    if (images.length === 2) {
      // Если только 2 фото, делим на 2 части
      if (x < width / 2) {
        newIdx = 0;
      } else {
        newIdx = 1;
      }
    } else {
      // Если 3+ фото, делим на 3 части
      if (x < width / 3) {
        newIdx = 0;
      } else if (x < (width * 2) / 3) {
        newIdx = 1;
      } else {
        newIdx = 2;
      }
    }
    
    // Обновляем только если индекс изменился и он в пределах массива
    if (newIdx !== photoIdx && newIdx < images.length) {
      setPhotoIdx(newIdx);
    }
  };

  // Обработка свайпа для мобильных устройств
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    const threshold = 50; // минимальное расстояние для свайпа
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && photoIdx < images.length - 1) {
        // свайп влево - следующее фото
        setPhotoIdx(photoIdx + 1);
      } else if (diff < 0 && photoIdx > 0) {
        // свайп вправо - предыдущее фото
        setPhotoIdx(photoIdx - 1);
      }
    }
    
    setIsDragging(false);
  };

  return (
    <div className="cat-card">
      <button
        className={"cat-card__fav" + (isFavorite ? ' active' : '')}
        onClick={e => { e.stopPropagation(); onFavoriteToggle(cat.id); }}
        aria-label={isFavorite ? 'Убрать из избранного' : 'В избранное'}
      >
        <HeartIcon width={24} height={24} style={{fill: isFavorite ? 'var(--accent)' : 'var(--text-secondary)'}} />
      </button>
      {/* Бейджи */}
      <div className="cat-card__badges">
        {badges.map(b => (
          <span className="cat-card__badge" key={b.label} style={{background:b.color}}>{b.label}</span>
        ))}
      </div>
      {/* Галерея фото */}
      <div 
        className="cat-card__gallery"
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        title={images.length > 1 ? "Наведите мышь на разные участки фото для переключения" : ""}
      >
        <img src={images[photoIdx]} alt={cat.name} className="cat-card__img-full" />
        {images.length > 1 && (
          <div className="cat-card__gallery-dots">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`cat-card__dot ${idx === photoIdx ? 'active' : ''}`}
                onClick={e => { e.stopPropagation(); setPhotoIdx(idx); }}
              />
            ))}
          </div>
        )}
      </div>
      <div className="cat-card__info">
        <h3 className="cat-card__name">{cat.name}</h3>
        <div className="cat-card__desc">{cat.description}</div>
        <div className="cat-card__meta">
          <span className="cat-card__meta-age"><AgeIcon /> {cat.ageCategory}</span>
          {' | '}
          <span className="cat-card__meta-gender">
            {cat.gender === 'девочка' ? <FemaleIcon /> : <MaleIcon />}
          </span>
        </div>
        <button className="cat-card__btn" onClick={onClick}>
          Познакомиться
        </button>
      </div>
    </div>
  );
}

export default CatCard;
