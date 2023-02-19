import styles from './button-load.module.scss';

const Button = ({ changePage, text }) => {
  return (
      <button className={styles.button} onClick={changePage}>
        {text}
      </button>
  );
};

export default Button;
