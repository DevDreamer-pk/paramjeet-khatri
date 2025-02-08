import styles from './ProjectsStyles.module.css';
import travalot from '../../assets/travalot.png';
import zbrain from '../../assets/zbrain.png';
import makeMyTale from '../../assets/makeMyTale(1).png';
import shell from '../../assets/Shell.png';
import scortik from '../../assets/scortik.png';
import xdcPay from '../../assets/xdcPay.png';
import ultrafan from '../../assets/ultrafan.png';
import astropledge from '../../assets/astropledge.png';
import xdc from '../../assets/xdc.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={travalot}
          link="https://www.travalot.com/"
          h3="Travalot"
          p="Tourism website"
        />
        <ProjectCard
          src={zbrain}
          link="https://zbrain.ai/"
          h3="Zbrain"
          p="AI Agent"
        />
        <ProjectCard
          src={makeMyTale}
          link="https://makemytale.com/"
          h3="Make My Tale"
          p="AI Story Creation Platform"
        />
        <ProjectCard
          src={shell}
          link="#"
          h3="Shell Global"
          p="Shell AI Management System"
        />
          <ProjectCard
          src={scortik}
          link="https://scortik.com/"
          h3="Scortik"
          p="Blockchain Review Platform"
        />
        <ProjectCard
          src={xdcPay}
          link="https://chromewebstore.google.com/detail/xdcpay/bocpokimicclpaiekenaeelehdjllofo"
          h3="XDC Pay"
          p="Crypto Wallet Extension"
        />
        <ProjectCard
          src={ultrafan}
          link="https://app.fanblock.com/"
          h3="Ultrafan"
          p="Fan Engagement Platform"
        />
        <ProjectCard
          src={astropledge}
          link="https://astropledge.com/"
          h3="Astropledge"
          p="A Space Layer"
        />
        <ProjectCard
          src={xdc}
          link="https://github.com/XDCFoundation/XDC3Delphi"
          h3="XDC SDK Delphi"
          p="SDK for XDC Network"
        />
      </div>
    </section>
  );
}

export default Projects;
