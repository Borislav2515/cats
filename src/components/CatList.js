import React, { useState, useEffect } from 'react';
import CatCard from './CatCard';
import './CatList.css';

function SkeletonCard() {
  return (
    <div className="cat-card cat-card--skeleton">
      <div className="cat-card__img skeleton" />
      <div className="cat-card__info">
        <div className="cat-card__name skeleton skeleton-text" style={{width: '60%'}} />
        <div className="cat-card__desc skeleton skeleton-text" style={{width: '90%', height: 18}} />
        <div className="cat-card__meta skeleton skeleton-text" style={{width: '40%', height: 14}} />
        <div className="cat-card__btn skeleton" style={{width: '80%', height: 32, margin: '12px auto 0 auto', borderRadius: 8}} />
      </div>
    </div>
  );
}

function CatList({ cats, onCatClick, favorites = [], onFavoriteToggle, loading = false }) {
  const [visibleCount, setVisibleCount] = useState(8);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setVisibleCount(8); // сбрасываем при смене фильтров
  }, [cats]);

  const displayCats = isMobile ? cats.slice(0, visibleCount) : cats;

  if (loading) {
    return (
      <div className="cat-list">
        {Array.from({length: 6}).map((_, i) => <SkeletonCard key={i} />)}
      </div>
    );
  }
  return (
    <div className="cat-list-wrapper">
      <div className="cat-list">
        {displayCats.length === 0 ? (
          <div className="cat-list__empty">Нет кошек по выбранным фильтрам</div>
        ) : (
          displayCats.map(cat => (
            <CatCard
              key={cat.id}
              cat={cat}
              onClick={() => onCatClick(cat)}
              isFavorite={favorites.includes(cat.id)}
              onFavoriteToggle={onFavoriteToggle}
            />
          ))
        )}
      </div>
      {isMobile && cats.length > visibleCount && (
        <button className="cat-list__show-more" onClick={() => setVisibleCount(v => v + 8)}>
          Показать ещё
        </button>
      )}
    </div>
  );
}

export default CatList;
