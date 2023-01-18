function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const style = {
    border: '1px solid black',
    padding: '1rem',
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
  };

  return (
    <article style={style}>
      <img src={picture} alt={firstName + ' ' + lastName}></img>;
      <div>
        <div>
          <strong>First Name: </strong>
          {firstName}
        </div>
        <div>
          <strong>Last Name: </strong>
          {lastName}
        </div>
        <div>
          <strong>Gender: </strong>
          {gender}
        </div>
        <div>
          <strong>Height: </strong>
          {height} m
        </div>
        <div>
          <strong>Birth: </strong>
          {birth.toLocaleString()}
        </div>
      </div>
    </article>
  );
}

export default IdCard;
