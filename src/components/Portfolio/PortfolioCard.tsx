import React, { memo } from 'react';

interface PortfolioCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const PortfolioCard: React.FC<PortfolioCardProps> = memo(({ icon, title, subtitle, children }) => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-card-header">
        <div className="flex items-center gap-3">
          {icon}
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-gray-400">{subtitle}</p>
          </div>
        </div>
      </div>
      <div className="portfolio-card-body">
        {children}
      </div>
    </div>
  );
});

PortfolioCard.displayName = 'PortfolioCard';

export default PortfolioCard;
