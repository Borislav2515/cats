import React from 'react';
import { ReactComponent as HeartIcon } from '../icons/heart.svg';
import './CatCard.css';

function CatCard({ cat, onClick, isFavorite, onFavoriteToggle }) {
  const genderIcon = cat.gender === 'девочка' ? '♀' : '♂';
  const genderColor = cat.gender === 'девочка' ? '#e26fa6' : '#5b9bd5';
  return (
    <div className="cat-card">
      <button
        className={"cat-card__fav" + (isFavorite ? ' active' : '')}
        onClick={e => { e.stopPropagation(); onFavoriteToggle(cat.id); }}
        aria-label={isFavorite ? 'Убрать из избранного' : 'В избранное'}
      >
        <HeartIcon width={24} height={24} style={{fill: isFavorite ? 'var(--accent)' : 'var(--text-secondary)'}} />
      </button>
      <img src={cat.image} alt={cat.name} className="cat-card__img-full" />
      <div className="cat-card__info">
        <h3 className="cat-card__name">{cat.name}</h3>
        <div className="cat-card__desc">{cat.description}</div>
        <div className="cat-card__meta">
          <span title="Возраст" className="cat-card__meta-age">🕑 {cat.ageCategory}</span>
          {' | '}
          <span title="Пол" className="cat-card__meta-gender" style={{color: genderColor}}>{genderIcon}</span>
        </div>
        <button className="cat-card__btn" onClick={onClick}>
          Познакомиться
        </button>
      </div>
    </div>
  );
}

export default CatCard;
