import React, { useState, useEffect } from 'react';
import './App.css';
import Filters from './components/Filters';
import CatList from './components/CatList';
import CatModal from './components/CatModal';
import FeedbackForm from './components/FeedbackForm';
import DonateModal from './components/DonateModal';
import catsData from './catsData';
import { ReactComponent as HeartIcon } from './icons/heart.svg';
import { ReactComponent as CallIcon } from './icons/call.svg';
import { ReactComponent as ThemeIcon } from './icons/theme.svg';
import { ReactComponent as PawIcon } from './logo.svg'; // Используем логотип как иконку лапки для FAB
import pawFavicon from './assets/paw-favicon.svg';
import FAQ from './components/FAQ';

const categories = [
  'кошки/коты',
  'котята/подростки',
  'кошки от 8 лет',
];

function App() {
  const [selectedCategory, setCategory] = useState('кошки/коты');
  const [selectedAges, setAges] = useState([]);
  const [selectedGenders, setGenders] = useState([]);
  const [selectedColors, setColors] = useState([]);
  const [selectedBreeds, setBreeds] = useState([]);
  const [modalCat, setModalCat] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    const fav = localStorage.getItem('cat-favorites');
    return fav ? JSON.parse(fav) : [];
  });

  const [showDonateModal, setShowDonateModal] = useState(false);
  const [page, setPage] = useState('main');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [adoptCat, setAdoptCat] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  // Сохранение избранного в localStorage
  useEffect(() => {
    localStorage.setItem('cat-favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('theme-dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [selectedCategory, selectedAges, selectedGenders, selectedColors, selectedBreeds]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Устанавливаем CSS-переменную для лапки
  React.useEffect(() => {
    document.documentElement.style.setProperty('--paw-bg', `url(${pawFavicon}) no-repeat center/contain`);
  }, []);

  // Фильтрация
  const filteredCats = catsData.filter(cat => {
    const byCategory = showAll || !selectedCategory ? true : cat.category === selectedCategory;
    const byAge = selectedAges.length === 0 || selectedAges.includes(cat.ageCategory);
    const byGender = selectedGenders.length === 0 || selectedGenders.includes(cat.gender);
    const byColor = selectedColors.length === 0 || selectedColors.includes(cat.color);
    const byBreed = selectedBreeds.length === 0 || selectedBreeds.includes(cat.breed);
    return byCategory && byAge && byGender && byColor && byBreed;
  });

  // Обработчики для чекбоксов
  const handleAge = age => {
    setAges(prev => prev.includes(age) ? prev.filter(a => a !== age) : [...prev, age]);
  };
  const handleGender = gender => {
    setGenders(prev => prev.includes(gender) ? prev.filter(g => g !== gender) : [...prev, gender]);
  };
  const handleColor = color => {
    setColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
  };
  const handleBreed = breed => {
    setBreeds(prev => prev.includes(breed) ? prev.filter(b => b !== breed) : [...prev, breed]);
  };

  // Избранное
  const handleFavoriteToggle = id => {
    setFavorites(prev => prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]);
  };

  return (
    <div className="shelter-app">
      <header className="shelter-header">
        <div className="shelter-logo" style={{cursor:'pointer'}} onClick={()=>setPage('main')}>Пушистый друг</div>
        <div className="header-actions">
          <button className="fav-icon-btn" onClick={()=>setPage('favorites')} title="Избранные">
            <HeartIcon width={24} height={24} />
            {favorites.length > 0 && <span className="fav-count">{favorites.length}</span>}
          </button>
          <button className="theme-toggle fav-icon-btn" onClick={()=>setTheme(theme === 'light' ? 'dark' : 'light')} title="Переключить тему">
            <ThemeIcon width={24} height={24} />
          </button>
          <button className="donate-icon-btn fav-icon-btn" onClick={() => window.open('tel:+79991234567')} title="Позвонить в приют" aria-label="Позвонить в приют">
            <CallIcon width={24} height={24} />
          </button>
        </div>
      </header>
      <main className="shelter-main">
        {page === 'main' ? (
          <>
            {/* Кнопка для открытия фильтров на мобильных */}
            {isMobile && (
              <button
                className="filters-mobile-btn"
                onClick={() => setFiltersOpen(true)}
              >
                Фильтры
              </button>
            )}
            {/* Bottom sheet фильтры на мобильных */}
            {isMobile && filtersOpen && (
              <div className="filters-bottom-sheet">
                <Filters
                  selectedAges={selectedAges}
                  setAges={handleAge}
                  selectedGenders={selectedGenders}
                  setGenders={handleGender}
                  selectedColors={selectedColors}
                  setColors={handleColor}
                  selectedBreeds={selectedBreeds}
                  setBreeds={handleBreed}
                />
                <button
                  className="filters-bottom-sheet__close"
                  onClick={() => setFiltersOpen(false)}
                >
                  Закрыть
                </button>
              </div>
            )}
            {/* Сайдбар-фильтры на десктопе */}
            {!isMobile && (
              <aside className={"shelter-sidebar" + (filtersOpen ? " filters-mobile-open" : "") }>
                <Filters
                  selectedAges={selectedAges}
                  setAges={handleAge}
                  selectedGenders={selectedGenders}
                  setGenders={handleGender}
                  selectedColors={selectedColors}
                  setColors={handleColor}
                  selectedBreeds={selectedBreeds}
                  setBreeds={handleBreed}
                />
                <button
                  className="filters-mobile-close"
                  onClick={() => setFiltersOpen(false)}
                >
                  Закрыть
                </button>
              </aside>
            )}
            <section className="shelter-content">
              <div className="categories-block">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={cat === selectedCategory && !showAll ? 'active' : ''}
                    onClick={() => { setCategory(cat); setShowAll(false); }}
                  >
                    {cat}
                  </button>
                ))}
                <button
                  className={showAll ? 'active' : ''}
                  onClick={() => { setShowAll(true); setCategory(null); }}
                >
                  Показать всех
                </button>
              </div>
              <CatList
                cats={filteredCats}
                onCatClick={setModalCat}
                favorites={favorites}
                onFavoriteToggle={handleFavoriteToggle}
                loading={loading}
              />
            </section>
          </>
        ) : page === 'faq' ? (
          <section className="shelter-content" style={{width:'100%'}}>
            <button className="back-btn" onClick={()=>setPage('main')} style={{marginBottom:24}}>
              ← Назад
            </button>
            <FAQ />
          </section>
        ) : (
          <section className="shelter-content" style={{width:'100%'}}>
            <button className="back-btn" onClick={()=>setPage('main')} style={{marginBottom:24}}>
              ← Назад
            </button>
            <h2 style={{textAlign:'center', color:'#ff7a59', marginBottom:24}}>Избранные кошки</h2>
            <CatList
              cats={catsData.filter(cat => favorites.includes(cat.id))}
              onCatClick={setModalCat}
              favorites={favorites}
              onFavoriteToggle={handleFavoriteToggle}
            />
          </section>
        )}
        {modalCat && <CatModal cat={modalCat} onClose={() => setModalCat(null)} onAdopt={setAdoptCat} />}
        {adoptCat && (
          <div className="cat-modal__backdrop" onClick={() => setAdoptCat(null)}>
            <div className="cat-modal" onClick={e => e.stopPropagation()}>
              <button className="cat-modal__close" onClick={() => setAdoptCat(null)}>&times;</button>
              <FeedbackForm presetCat={adoptCat} onClose={() => setAdoptCat(null)} />
            </div>
          </div>
        )}
        {/* Плавающая кнопка доната/обратной связи */}
        <button
          className="fab-donate"
          title="Поддержать приют или связаться"
          onClick={() => setShowDonateModal(true)}
        >
          <PawIcon width={32} height={32} style={{marginRight:0}} />
        </button>
        <DonateModal open={showDonateModal} onClose={() => setShowDonateModal(false)} />
      </main>
      <footer className="shelter-footer">
        <FeedbackForm />
      </footer>
    </div>
  );
}

export default App;
