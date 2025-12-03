import Logo from '@/components/layout/Header/Logo/Logo';
import NavBar from '@/components/layout/Header/Navbar/Navbar';
import ThemeToggleButton from '@/components/functional/ThemeToggle/ThemeToggle';
import Styles from './Header.module.css';

const Header = () => {
  return (
    <div className={Styles.Header}>
      <div className={Styles.LogoContainer}>
        <Logo />
      </div>
      <div className={Styles.buttonsContainer}>
        <NavBar />
        <ThemeToggleButton />
      </div>
    </div>
  );
};

export default Header;