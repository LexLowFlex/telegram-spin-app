
import { useState } from 'react';

export default function Home() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const symbols = ['🍒', '🍋', '💎'];
  const [slots, setSlots] = useState(['🍒', '🍋', '💎']);

  const spin = () => {
    setSpinning(true);
    setResult(null);

    const spinInterval = setInterval(() => {
      setSlots([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
      ]);
    }, 100);

    setTimeout(() => {
      clearInterval(spinInterval);
      setSlots(['💎', '💎', '💎']);
      setSpinning(false);
      setResult('Поздравляем! Вы выиграли 7777₽');
    }, 2000);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #5e3eff, #8b63ff)',
      color: 'white',
      fontFamily: 'sans-serif',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem' }}>🎰 Слот-машина</h1>
      <div style={{
        display: 'flex',
        fontSize: '4rem',
        margin: '1rem 0',
        background: 'white',
        borderRadius: '10px',
        color: 'black',
        padding: '0.5rem 1rem',
        gap: '1rem'
      }}>
        {slots.map((s, i) => <span key={i}>{s}</span>)}
      </div>
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
          marginBottom: '1rem'
        }}
      >
        {spinning ? 'Крутится...' : '🎯 Крутить'}
      </button>
      {result && (
        <>
          <div style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{result}</div>
          <a
            href="https://partredivada.com/?promo=d4c4edc2-ca8c-4938-8db4-e976a26b68a2"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: 'none',
              background: '#fff',
              color: '#5e3eff',
              padding: '1rem 2rem',
              borderRadius: '10px',
              fontSize: '1.25rem'
            }}
          >
            Забрать выигрыш
          </a>
        </>
      )}
    </div>
  );
}
