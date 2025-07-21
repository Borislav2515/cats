import React from 'react';
import './Filters.css';

const genderOptions = [
  'девочка',
  'мальчик',
];
const colorOptions = [
  'чёрный',
  'белый',
  'серый',
  'рыжий',
  'трёхцветный',
  'другой',
];
const breedOptions = [
  'Шотландская вислоухая',
  'Сибирская',
  'Персидская',
  'Другая',
];

function Filters({
  selectedGenders = [], setGenders = () => {},
  selectedColors = [], setColors = () => {},
  selectedBreeds = [], setBreeds = () => {},
}) {
  return (
    <div className="filters">
      <div className="filters__block">
        <div className="filters__title">Пол</div>
        {genderOptions.map(gender => (
          <label className="filters__checkbox" key={gender}>
            <input
              type="checkbox"
              checked={selectedGenders.includes(gender)}
              onChange={() => setGenders(gender)}
            />
            {gender}
          </label>
        ))}
      </div>
      <div className="filters__block">
        <div className="filters__title">Окрас</div>
        {colorOptions.map(color => (
          <label className="filters__checkbox" key={color}>
            <input
              type="checkbox"
              checked={selectedColors.includes(color)}
              onChange={() => setColors(color)}
            />
            {color}
          </label>
        ))}
      </div>
      <div className="filters__block">
        <div className="filters__title">Порода</div>
        {breedOptions.map(breed => (
          <label className="filters__checkbox" key={breed}>
            <input
              type="checkbox"
              checked={selectedBreeds.includes(breed)}
              onChange={() => setBreeds(breed)}
            />
            {breed}
          </label>
        ))}
      </div>
    </div>
  );
}

export default Filters;
