
import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle }) => (
  <div className="mb-16">
    <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase text-brand-gold">
      {title}
    </h2>
    {subtitle && subtitle.trim().length > 0 && (
      <p className="text-brand-dark/40 dark:text-brand-light/40 max-w-2xl text-lg font-medium leading-relaxed tracking-tight">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeader;
