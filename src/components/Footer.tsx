import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">IVAI</h3>
            <p>{t('footer.description')}</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{t('nav.services')}</h3>
            <ul>
              <li>{t('services.aiConsulting')}</li>
              <li>{t('services.aiDevelopment')}</li>
              <li>{t('services.aiMarketing')}</li>
              <li>{t('services.aiDataAnalysis')}</li>
              <li>{t('services.aiResearchAcceleration')}</li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">{t('footer.contact')}</h3>
            <p>{t('footer.email')}: info@ivai.com</p>
            <p>{t('footer.phone')}: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;