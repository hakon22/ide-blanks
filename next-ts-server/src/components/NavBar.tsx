import { useContext } from 'react';
import Link from 'next/link';
import { MobileContext } from './Context';
import routes from '../routes';

const NavBar = () => {
  const isMobile = useContext(MobileContext);

  return (
    <Link className="navbar-brand" href={routes.homePage}>Ссылка</Link>
  );
};

export default NavBar;
