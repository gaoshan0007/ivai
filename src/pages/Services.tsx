import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Zap, TrendingUp, Database, Rocket } from 'lucide-react';

const Services: React.FC = () => {
  const { t, i18n } = useTranslation();

  const services = [
    {
      icon: Brain,
      title: t('services.aiConsulting'),
      description: t('services.aiConsultingDesc'),
      details: t('services.aiConsultingDetails'),
      benefits: t('services.aiConsultingBenefits'),
    },
    {
      icon: Zap,
      title: t('services.aiDevelopment'),
      description: t('services.aiDevelopmentDesc'),
      details: t('services.aiDevelopmentDetails'),
      benefits: t('services.aiDevelopmentBenefits'),
    },
    {
      icon: TrendingUp,
      title: t('services.aiMarketing'),
      description: t('services.aiMarketingDesc'),
      details: t('services.aiMarketingDetails'),
      benefits: t('services.aiMarketingBenefits'),
    },
    {
      icon: Database,
      title: t('services.aiDataAnalysis'),
      description: t('services.aiDataAnalysisDesc'),
      details: t('services.aiDataAnalysisDetails'),
      benefits: t('services.aiDataAnalysisBenefits'),
    },
    {
      icon: Rocket,
      title: t('services.aiResearchAcceleration'),
      description: t('services.aiResearchAccelerationDesc'),
      details: t('services.aiResearchAccelerationDetails'),
      benefits: t('services.aiResearchAccelerationBenefits'),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{t('services.ourServices')} <span className="text-accent">{t('services.services')}</span></h1>
      <div className="space-y-12">
        {services.map((service, index) => (
          <div key={index} className="bg-secondary p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <div className="flex items-center space-x-4 mb-4">
              <service.icon size={48} className="text-accent flex-shrink-0" />
              <h2 className="text-2xl font-semibold">{service.title}</h2>
            </div>
            <p className="text-gray-300 mb-4">{service.description}</p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 text-primary">{t('services.whatWeOffer')}</h3>
              <p>{service.details}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{t('services.clientBenefits')}</h3>
              <p>{service.benefits}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;