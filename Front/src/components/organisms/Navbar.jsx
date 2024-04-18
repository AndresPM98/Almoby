import { Link, useNavigate, useLocation } from "react-router-dom";
import { UiButton } from "../atoms/button/Button";
import styles from "./Navbar.module.css";

export const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const isLoginPage = location.pathname === "/login";

    return (
        <nav className={`${isLoginPage ? styles.centeredNavbar : styles.navbar}`}>
            {isLoginPage ? (
                <h1 className={styles.navbarText}>Brainwave.io</h1>
            ) : (
                <>
                    <h1 className={styles.navbarText}>Brainwave.io</h1>
                    <div className={styles.rightContent}>
                        <ul className={styles.navbarList}>
                            <li className={styles.navbarItem}>
                                <Link to="/" className={styles.navbarLink}>
                                    Demos
                                </Link>
                            </li>
                            <li className={styles.navbarItem}>
                                <Link to="/" className={styles.navbarLink}>
                                    Page
                                </Link>
                            </li>
                            <li className={styles.navbarItem}>
                                <Link to="/" className={styles.navbarLink}>
                                    Support
                                </Link>
                            </li>
                            <li className={styles.navbarItem}>
                                <Link to="/" className={styles.navbarLink}>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        <div className={styles.buttonContainer}>
                            <UiButton text={"Log In"} onClick={handleLoginClick}/>                        
                        </div>

                    </div>
                </>
            )}
        </nav>
    );
};