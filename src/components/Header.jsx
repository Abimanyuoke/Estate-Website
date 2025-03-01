import { Link } from "react-router-dom";
import Logo from '../assets/img/logo.svg';

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to='/'>
          <img src={Logo} alt="logo" />
        </Link>
        {/* Button */}
        <div className="flex items-center gap-6">
          <Link to='' className="hover:text-violet-900 transition-all">Log in</Link>
          <Link to='' className="bg-violet-700 transition-all hover:bg-violet-800 text-white px-4 py-3 rounded-lg">Sign Up</Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
