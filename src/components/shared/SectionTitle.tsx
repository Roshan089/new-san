import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-navy-600 dark:text-silver-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;