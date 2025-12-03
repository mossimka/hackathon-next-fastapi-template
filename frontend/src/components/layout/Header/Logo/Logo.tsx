'use client';

import Image from 'next/image';

import Styles from './Logo.module.css';
import { useTheme } from '@/components/layout/ThemeProvider';

const Logo = () => {
  const  { theme } = useTheme();

  const logoSrc = theme === 'light' ? '/logo-light.webp' : '/logo-dark.webp';
  return (
    <div className={Styles.container}>
      
      <Image src={logoSrc} alt="Logo" width={100} height={100}></Image>
    </div>
  );
}

export default Logo;