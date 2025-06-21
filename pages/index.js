import { useState } from 'react';
import confetti from 'canvas-confetti';

const symbols = ['🍒', '🍋', '🍊', '🍉', '⭐', '🔔', '💎'];

export default function Home() {
  const [slots, setSlots] = useState(['', '', '']);
  const [spinning, setSpinning] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [showPrize, setShowPrize] = useState(false);

  const spin = () => {
    setSpinning(true);
    setHasWon(false);
    setShowPrize(false);

    const interval = setInterval(() => {
      setSlots([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ]);
    }, 100);

    setTimeout(() => {
      clearInterval(interval);
      setSlots(['7️⃣', '7️⃣', '7️⃣']);
      setSpinning(false);
      setHasWon(true);
      setShowPrize(true);

      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
      });
    }, 2000);
  };

  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    background: 'white',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const slotStyle = {
    fontSize: '4rem',
    margin: '0 0.5rem',
    padding: '0.5rem 1rem',
    border: '2px solid #888',
    borderRadius: '8px',
    background: '#f0f0f0',
  };

  const prizeBoxStyle = {
    marginTop: '2rem',
    padding: '1.5rem',
    backgroundColor: '#e0ffe0',
    borderRadius: '10px',
    border: '2px solid #00aa00',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      <h1>Слот-машина 🎰</h1>
      <div style={{ display: 'flex', margin: '1rem 0' }}>
        {slots.map((s, i) => (
          <div key={i} style={slotStyle}>{s}</div>
        ))}
      </div>

      {!hasWon && (
        <button onClick={spin} disabled={spinning} style={{ fontSize: '1.2rem', padding: '0.5rem 1rem' }}>
          {spinning ? 'Крутится...' : '🎯 Крутить'}
        </button>
      )}

      {showPrize && (
        <div style={prizeBoxStyle}>
          🎉 Поздравляем! Вы выиграли <strong>7777₽</strong>
          <div>
            <button
              onClick={() => window.open('https://partredivada.com/?promo=d4c4edc2-ca8c-4938-8db4-e976a26b68a2', '_blank')}
              style={{ marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '1rem' }}
            >
              Забрать выигрыш
            </button>
          </div>
        </div>
      )}
    </div>
  );
}