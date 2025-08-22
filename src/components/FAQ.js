import React, { useState } from 'react';

const faqData = [
  {
    question: 'Как взять котика из приюта?',
    answer: 'Выберите понравившегося котика, нажмите “Познакомиться” и заполните форму. Мы свяжемся с вами для уточнения деталей.'
  },
  {
    question: 'Можно ли приехать посмотреть котиков лично?',
    answer: 'Да! Мы всегда рады гостям. Позвоните нам или оставьте заявку, чтобы договориться о времени визита.'
  },
  {
    question: 'Какие документы нужны для усыновления?',
    answer: 'Паспорт и заполненная анкета. Иногда мы можем попросить дополнительные документы для безопасности питомца.'
  },
  {
    question: 'Можно ли помочь приюту без усыновления?',
    answer: 'Конечно! Вы можете сделать пожертвование, стать волонтёром или помочь кормом и вещами.'
  },
  {
    question: 'Все ли котики привиты и стерилизованы?',
    answer: 'Да, все наши питомцы проходят необходимые процедуры перед переездом в новый дом.'
  }
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section className="faq-section" style={{maxWidth:600, margin:'40px auto', background:'#fff', borderRadius:18, boxShadow:'0 2px 16px rgba(0,0,0,0.07)', padding:'32px 18px'}}>
      <h2 style={{textAlign:'center', color:'#ff7a59', marginBottom:24}}>Часто задаваемые вопросы</h2>
      <ul style={{listStyle:'none', padding:0, margin:0}}>
        {faqData.map((item, idx) => (
          <li key={item.question} style={{marginBottom:18}}>
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              style={{
                width:'100%',
                textAlign:'left',
                background:'none',
                border:'none',
                fontWeight:600,
                fontSize:'1.08rem',
                color:'#222',
                cursor:'pointer',
                padding:'10px 0',
                borderBottom:'1.5px solid #eee',
                outline:'none',
                transition:'color 0.2s'
              }}
            >
              {item.question}
            </button>
            {openIdx === idx && (
              <div style={{padding:'10px 0 0 0', color:'#555', fontSize:'1rem'}}>
                {item.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default FAQ; 