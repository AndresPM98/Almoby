import styles from "./Button.module.css"

export const UiButton = ({text, onClick}) => {

  return (
    <div>
        <button className={styles.loginButton} onClick={onClick}>{text}</button>
    </div>
  )
}
