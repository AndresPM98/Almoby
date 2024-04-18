import Input from "../atoms/input/Input";
import { UiButton } from "../atoms/button/Button";
import styles from "./Form.module.css";

export const LoginForm = () => {
    return (
        <div className={styles.form}>
            <div className={styles.inputCont}>
                <Input
                    label="First & Last Name"
                    type="text"
                    placeholder="Enter your first and last name"
                />
                <Input
                    label="Email"
                    type="text"
                    placeholder="Enter your email"
                />
                <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                />
                <Input
                    label="Confirm Password"
                    type="password"
                    placeholder="Confirm your password"
                />
            </div>
            <div className={styles.checkboxContainer}>
                <input type="checkbox" id="termsCheckbox" />
                <label htmlFor="termsCheckbox">
                    I agree to the Terms & conditions
                </label>
            </div>
            <div className={styles.buttonContainer}>
                <UiButton text={"Create an account"} />
            </div>

        </div>
    );
};
