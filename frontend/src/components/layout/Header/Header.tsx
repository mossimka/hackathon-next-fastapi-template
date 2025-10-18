import { ThemeToggleButton } from '@/components/functional/ThemeToggle/ThemeToggle';
import Styles from './Header.module.css';

const Header = () => {
  return (
    <div className={Styles.Header}>
      content
      <ThemeToggleButton />
    </div>
  );
};

export default Header;