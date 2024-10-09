import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UserButton, SignInButton, useUser } from '@clerk/clerk-react';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const { isSignedIn } = useUser();

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Brain size={32} className="text-accent" />
          <span className="text-2xl font-bold">IVAI</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-accent transition-colors">{t('nav.home')}</Link></li>
            <li><Link to="/services" className="hover:text-accent transition-colors">{t('nav.services')}</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">{t('nav.contact')}</Link></li>
          </ul>
        </nav>
        <div>
          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <button className="bg-accent text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                Sign In
              </button>
            </SignInButton>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;