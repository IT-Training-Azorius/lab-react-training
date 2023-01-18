import styles from './CreditCard.module.css';
import logoMasterCard from '../assets/images/master-card.png';
import logoVisa from '../assets/images/visa.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const imgTypeCard = new Map();
  imgTypeCard.set('Master Card', logoMasterCard);
  imgTypeCard.set('Visa', logoVisa);

  return (
    <div style={{ backgroundColor: bgColor, color }} className={styles.card}>
      <img
        className={styles.cardImage}
        src={imgTypeCard.get(type)}
        alt=""
      ></img>
      <div className={styles.cardNumber}>
        <span>&#9679;&#9679;&#9679;&#9679;</span>
        <span>&#9679;&#9679;&#9679;&#9679;</span>
        <span>&#9679;&#9679;&#9679;&#9679;</span>

        <span>{number.toString().substring(12)}</span>
      </div>
      <div className={styles.cardExtra}>
        <div>
          <span>
            Expires {expirationMonth.toString().padStart(2, 0)}/
            {expirationYear.toString().substring(2)}
          </span>
          <span className={styles.cardBank}>{bank}</span>
        </div>
        <div>{owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
