import React from 'react';
import './CatModal.css';

function DonateModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="cat-modal__backdrop" onClick={onClose}>
      <div className="cat-modal" onClick={e => e.stopPropagation()}>
        <button className="cat-modal__close" onClick={onClose}>&times;</button>
        <h2 className="cat-modal__name">Пожертвование приюту</h2>
        <div className="cat-modal__desc" style={{marginBottom: 16}}>
          Вы можете поддержать наш приют любым удобным способом:<br/><br/>
          <b>Карта Сбербанка:</b><br/>
          1234 5678 9012 3456<br/><br/>
          <b>ЮMoney:</b><br/>
          4100 1234 5678 90<br/><br/>
          <b>PayPal:</b><br/>
          catshelter@example.com
        </div>
        <div className="cat-modal__desc" style={{fontSize: '0.95rem', color: '#888'}}>
          Спасибо за вашу поддержку! ❤️
        </div>
      </div>
    </div>
  );
}

export default DonateModal; 