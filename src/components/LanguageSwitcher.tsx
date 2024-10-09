import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-full shadow-md p-2">
      <button
        className={`px-3 py-1 rounded-full ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'text-blue-600'}`}
        onClick={() => changeLanguage('en')}
      >
        {t('languageSwitcher.en')}
      </button>
      <button
        className={`px-3 py-1 rounded-full ${i18n.language === 'zh' ? 'bg-blue-600 text-white' : 'text-blue-600'}`}
        onClick={() => changeLanguage('zh')}
      >
        {t('languageSwitcher.zh')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;