import styles from "./Input.module.css";

const Input = ({ label, placeholder, type }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;