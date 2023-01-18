function Greetings({ lang, children }) {
  const dictLang = {
    es: 'Hola',
    en: 'Hello',
    fr: 'Bonjour',
    de: 'Hallo',
  };

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
      {dictLang[lang]} {children}
    </p>
  );
}

export default Greetings;
