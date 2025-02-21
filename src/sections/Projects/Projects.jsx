import styles from "./ProjectsStyles.module.css";
import travalot from '../../assets/travalot.png';
import zbrain from '../../assets/zbrain.png';
import makeMyTale from '../../assets/makeMyTale(1).png';
import shell from '../../assets/Shell.png';
import scortik from '../../assets/scortik.png';
import xdcPay from '../../assets/xdcPay.png';
import ultrafan from '../../assets/ultrafan.png';
import astropledge from '../../assets/astropledge.png';
import xdc from '../../assets/xdc.png';
// import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <section id="card1" className={styles.card}>
          <img
            src={travalot}  // Replace this with your image URL
            alt="Project Image"
            className={styles.card__image}
          />
          <div className={styles.card__content}>
            <p className={styles.card__title}>Travalot</p>
            <p className={styles.card__description}>
            Travalot is a travel company that specializes in creating personalized holiday packages. Established in 2019 and based in Hyderabad, India
            </p>
          </div>
        </section>
        <section id="card2" className={styles.card}>
          <img
            src={zbrain}  // Replace this with your image URL
            alt="Project Image"
            className={styles.card__image}
          />
          <div className={styles.card__content}>
            <p className={styles.card__title}>Zbrain</p>
            <p className={styles.card__description}>
            ZBrain is a unified platform for enterprise AI enablement, seamlessly guiding organizations from AI readiness evaluation and opportunity to full-scale solution implementation.
            </p>
          </div>
        </section>
        <section id="card3" className={styles.card}>
          <img
            src={makeMyTale}  // Replace this with your image URL
            alt="Project Image"
            className={styles.card__image}
          />
          <div className={styles.card__content}>
            <p className={styles.card__title}>Make My Tale</p>
            <p className={styles.card__description}>
            Create custom stories with MakeMyTale, a story creation platform that generates unique plotlines based on personalized story prompts.
            </p>
          </div>
        </section>
        <section id="card4" className={styles.card}>
          <img
            src={shell}  // Replace this with your image URL
            alt="Project Image"
            className={styles.card__image}
          />
          <div className={styles.card__content}>
            <p className={styles.card__title}>Shell Global</p>
            <p className={styles.card__description}>
              Shell Global`s AI management platform helps them to drive innovation and growth.
            </p>
          </div>
        </section>
        <section id="card5" className={styles.card}>
          <img
            src={scortik}  // Replace this with your image URL
            alt="Project Image"
            className={styles.card__image}
          />
          <div className={styles.card__content}>
            <p className={styles.card__title}>Scortik</p>
            <p className={styles.card__description}>
            Scortik is blockchain protocols rating and review platform to enable Web3 developers to make the right choice.
            </p>
          </div>
        </section>
        <section id="card6" className={styles.card}>
          <img
            src={xdcPay}  // Replace this with your image URL
            alt="Project Image"
            className={styles.card__image}
          />
          <div className={styles.card__content}>
            <p className={styles.card__title}>XDC Pay</p>
            <p className={styles.card__description}>
            XDCPay Browser Extension. The XDCPay is an extension for accessing XDC`s XDPoS enabled distributed applications, or `Dapps` in your browser!
            </p>
          </div>
        </section>
        <section id="card7" className={styles.card}>
          <img
            src={ultrafan}  // Replace this with your image URL
            alt="Project Image"
            className={styles.card__image}
          />
          <div className={styles.card__content}>
            <p className={styles.card__title}>Ultrafan FANBLOCK</p>
            <p className={styles.card__description}>
            FANBLOCK brings you a new, exciting game concept. Own blocks of your favourite team`s home ground and get closer to the club and game you love.
            </p>
          </div>
        </section>
        <section id="card8" className={styles.card}>
          <img
            src={astropledge}  // Replace this with your image URL
            alt="Project Image"
            className={styles.card__image}
          />
          <div className={styles.card__content}>
            <p className={styles.card__title}>Astropledge</p>
            <p className={styles.card__description}>
            A Cybersecurity Space Layer to prevent and monitoring Cybercrime for Satellites by leveraging Smart Contracts and Blockchain Stack.
            </p>
          </div>
        </section>
        <section id="card9" className={styles.card}>
          <img
            src={xdc}  // Replace this with your image URL
            alt="Project Image"
            className={styles.card__image}
          />
          <div className={styles.card__content}>
            <p className={styles.card__title}>XDC SDK Delphi</p>
            <p className={styles.card__description}>
            XDC3Delphi SDK with support for XRC20 and XRC721 smart contract.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Projects;
