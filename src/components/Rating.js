function Rating({ children }) {
  const numStars = Math.round(+children);
  console.log(numStars);
  const stars = [0.5, 1.5, 2.5, 3.5, 4.5];
  const starsItems = stars.map((x, i) => (
    <span key={i}> {x >= numStars ? <>&#9734;</> : <>&#9733;</>}</span>
  ));

  return <div style={{ fontSize: '3rem' }}>{starsItems}</div>;
}

export default Rating;
