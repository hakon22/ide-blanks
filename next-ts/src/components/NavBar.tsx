import Link from 'next/link';
import { usePathname } from 'next/navigation';
import routes from '@/routes';

const NavBar = () => {
  const pathName = usePathname();

  return (
    <header>
      <nav className="nav" />
    </header>
  );
};

export default NavBar;
