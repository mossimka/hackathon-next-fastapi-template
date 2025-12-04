import Styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={Styles.HeroSection}>
      <div className={Styles.Container}>
        <h1 className={Styles.Title}>Welcome to Our Website</h1>
        <p className={Styles.Subtitle}>Discover amazing content and connect with others.</p>
        <button className={Styles.ActionButton}>Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;