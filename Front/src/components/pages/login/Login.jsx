import { LoginForm } from "../../molecules/Form"
import styles from "./Login.module.css"

const Login = () => {
  return (
    <div className={styles.login}>
    <div className={styles.topContainer}>
        <div className={styles.textCont}>
            <h1>Sign up</h1>
            <p>To get started, you need to sign up here.</p>
        </div>
    </div>
    <div className={styles.bottomContainer}>
       <LoginForm/>
    </div>
</div>
  )
}

export default Login