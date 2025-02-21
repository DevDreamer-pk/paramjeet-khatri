import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/avator18.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <div className={styles.ring}></div>
        <img src={heroImg} className={styles.centerImage} />
        <div className={styles.colorMode} onClick={toggleTheme}>
          <img
            src={sun}
            className={`${styles.themeIcon} ${
              theme === "light" ? styles.visible : styles.hidden
            }`}
            alt="Light mode icon"
          />
          <img
            src={moon}
            className={`${styles.themeIcon} ${
              theme === "dark" ? styles.visible : styles.hidden
            }`}
            alt="Dark mode icon"
          />
        </div>
      </div>
      <div className={styles.info}>
        <h1>
          Paramjeet
          <br />
          Khatri
        </h1>
        <h2 className={styles.h2}>Full Stack Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/paramjeet-khatri-00b43321b/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/DevDreamer-pk" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.instagram.com/paramjeet_khatri/?hl=en"
            target="_blank"
          >
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
        </span>
        <p className={styles.description}>
        <Typewriter
          words={[
            "With a passion for developing modern React web apps and scalable Node.js solutions for commercial businesses."
          ]}
          loop={false}  // No need to loop if it's a single sentence
          cursor
          cursorStyle="_"
          typeSpeed={40}  // Slightly slower for readability
          deleteSpeed={20} 
          delaySpeed={2000}  // Adds a pause before deleting (if loop is true)
        />
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
