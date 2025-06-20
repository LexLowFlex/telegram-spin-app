import { useState } from 'react';

export default function Home() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [hasWon, setHasWon] = useState(false);

  const symbols = ['🍒', '🍋', '💎'];
  const [slots, setSlots] = useState(['🍒', '🍋', '💎']);

  const spin = () => {
    setSpinning(true);
    setResult(null);

    const spinInterval = setInterval(() => {
      setSlots([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
      ]);
    }, 100);

    setTimeout(() => {
      clearInterval(spinInterval);
      setSlots(['💎', '💎', '💎']);
      setSpinning(false);
      setResult('Поздравляем! Вы выиграли 7777₽');
      setHasWon(true);
    }, 2000);
  };

  return (
    <div
      style={{
        backgroundColor: '#7a5ef8',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontFamily: 'sans-serif',
        textAlign: 'center',
      }}
    >
      <h1>🎰 Испытай удачу</h1>

      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        {slots.map((s, i) => (
          <span key={i}>{s}</span>
        ))}
      </div>

      {!hasWon && (
        <button
          onClick={spin}
          disabled={spinning}
          style={{
            fontSize: '1.5rem',
            padding: '1rem 2rem',
            background: '#fff',
            color: '#5e3eff',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            marginBottom: '1rem',
          }}
        >
          {spinning ? 'Крутится...' : '🎯 Крутить'}
        </button>
      )}

      {result && (
        <>
          <p style={{ fontSize: '1.5rem' }}>{result}</p>
          <button
            style={{
              fontSize: '1.2rem',
              padding: '1rem 2rem',
              background: '#fff',
              color: '#5e3eff',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              marginTop: '1rem',
            }}
          >
            Забрать выигрыш
          </button>
        </>
      )}
    </div>
  );
}
