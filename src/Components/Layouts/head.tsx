import React, { useEffect, useState } from 'react';

interface CardData {
  id: number;
  title: string;
  content: string;
}

const cards: CardData[] = [
  { id: 1, title: 'Card 1', content: 'This is the first card.' },
  { id: 2, title: 'Card 2', content: 'This is the second card.' },
  { id: 3, title: 'Card 3', content: 'This is the third card.' },
  { id: 4, title: 'Card 4', content: 'This is the fourth card.' },
  { id: 5, title: 'Card 5', content: 'This is the fifth card.' },
];

const Head: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Inject styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      .app {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
      }
      .cards-container {
        position: relative;
        height: 400px;
        margin: 50px auto;
        width: 300px;
      }
      .card {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: transform 0.3s ease;
      }
      .card h2 {
        margin: 0 0 10px 0;
      }
      .card p {
        margin: 0;
      }
      .spacer {
        height: 2000px; /* Allows for scrolling */
      }
    `;
    document.head.appendChild(style);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="app">
      <h1>Scroll-Triggered Card Stacking</h1>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="card"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.5 - index * 50, 0)}px) scale(${1 - index * 0.05})`,
              zIndex: cards.length - index,
            }}
          >
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      <div className="spacer"></div>
    </div>
  );
};

export default Head;
