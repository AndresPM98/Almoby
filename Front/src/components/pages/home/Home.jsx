import { useNavigate } from "react-router-dom";
import { UiButton } from "../../atoms/button/Button";
import styles from "./Home.module.css";

const Home = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/login');
    };
    return (
        <div className={styles.home}>
            <div className={styles.leftContainer}>
                <div className={styles.textCont}>
                    <h1>Make your business powerful with Shade.</h1>
                    <h3>
                        With lots of unique blocks, you can easily build a page
                        without coding. Build your next consultancy website
                        within few minutes.
                    </h3>
                    <div className={styles.buttonContainer}>
                        <UiButton text={"Log In"} onClick={handleLoginClick} />
                    </div>
                    <p>Watch how we can help</p>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <img
                    className={styles.imgHome}
                    src="https://s3-alpha-sig.figma.com/img/90c1/fbdb/64334b0247d5853e4a2fa8226aa2694b?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D6wC0Ka2G1W604oDEohFUwJpeAePm2xVyTqH0ZT84Y5P7M9XEWOMb9riPNGhUdt3-Y7ZfuQFHoYTZ7gEpiwnfEeWDTiGu7N7e27IFqr11uc7GeD44sf4UgMtap3z0Lvu9vO5jZA4Z9Sysraj477Mv50GdOtdTL4hRGktCOnWs8Fgqc~p~CbcRg9O149oc7JVzH5FGpJip8EvQSKAR5K1292y9uWhHHtTQIP~qp0KV0NA-nTIyTIkx3u0pagvDjv8adlGuVHFaCkWNyWud45oLw0CFhSb7KNUkiodWkC8JYKqJ3790OiykVsWwP5xkrtJuDBUvERzfKtn3VsiKWiDNw__"
                    alt="womenImage"
                />
                <div className={styles.circle}/>
                <div className={styles.rectangle}/>
            </div>
        </div>
    );
};

export default Home;
