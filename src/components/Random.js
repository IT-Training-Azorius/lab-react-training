function Random({ min, max }) {
  const randomValue = Math.floor(Math.random() * max + min);
  return (
    <p
      style={{
        border: '2px solid black',
        textAlign: 'left',
        padding: '1rem',
        fontWeight: 700,
        fontSize: '1.2rem',
      }}
    >
      Random value between {min} and {max} =&gt; {randomValue}
    </p>
  );
}

export default Random;
