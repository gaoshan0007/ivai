import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Zap, TrendingUp, Database, Rocket } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Brain, title: t('services.aiConsulting') },
    { icon: Zap, title: t('services.aiDevelopment') },
    { icon: TrendingUp, title: t('services.aiMarketing') },
    { icon: Database, title: t('services.aiDataAnalysis') },
    { icon: Rocket, title: t('services.aiResearchAcceleration') },
  ];

  const reasons = [
    t('home.reasons.reason1'),
    t('home.reasons.reason2'),
    t('home.reasons.reason3'),
    t('home.reasons.reason4'),
    t('home.reasons.reason5'),
  ];

  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: t('home.welcome') }}></h1>
        <p className="text-xl">{t('home.slogan')}</p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6 text-center">{t('home.ourServices')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-md flex flex-col items-center transition-transform hover:scale-105">
              <service.icon size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary bg-opacity-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center" dangerouslySetInnerHTML={{ __html: t('home.whyChooseUs') }}></h2>
        <ul className="list-none space-y-2">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-center">
              <span className="text-accent mr-2">✓</span> {reason}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;