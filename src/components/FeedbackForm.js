import React, { useState, useEffect } from 'react';
import './FeedbackForm.css';

const topics = [
  'Вопрос',
  'Пожертвование',
  'Стать волонтёром',
  'Другое',
  'Забрать кота',
];

function FeedbackForm({ presetCat, onClose }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', topic: topics[0], message: '' });

  useEffect(() => {
    if (presetCat) {
      setForm({
        name: '',
        email: '',
        topic: 'Забрать кота',
        message: `Хочу забрать домой кота: ${presetCat.name}`
      });
    }
  }, [presetCat]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', topic: topics[0], message: '' });
    if (onClose) setTimeout(onClose, 1200);
  };

  if (sent) {
    return <div className="feedback__thanks">Спасибо за обращение!</div>;
  }

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h3>Обратная связь</h3>
      <input
        type="text"
        name="name"
        placeholder="Имя"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <select
        name="topic"
        value={form.topic}
        onChange={handleChange}
        className="feedback-form__select"
        required
        disabled={!!presetCat}
      >
        {topics.map(topic => (
          <option key={topic} value={topic}>{topic}</option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder="Сообщение"
        value={form.message}
        onChange={handleChange}
        required
        disabled={!!presetCat}
      />
      <button type="submit">Отправить</button>
      {onClose && (
        <button type="button" onClick={onClose} style={{marginTop:8, background:'#eee', color:'#222'}}>Отмена</button>
      )}
    </form>
  );
}

export default FeedbackForm;
