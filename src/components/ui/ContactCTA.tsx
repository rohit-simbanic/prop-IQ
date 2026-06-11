import React from 'react';

interface ContactCTAProps {
  buttonText?: string;
  phone?: string;
  text?: string;
  className?: string;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({
  buttonText = 'Get in touch',
  phone = '+15550123456',
  text = 'Thank you for considering PropIQ for your real estate needs. We look forward to hearing from you and assisting you on your real estate journey.',
  className = 'mt-12',
}) => {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 text-center bg-black text-white w-full border-t border-white/10 ${className}`}
    >
      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-sm sm:text-base font-light leading-relaxed text-slate-300 max-w-xl mx-auto">
          {text}
        </p>
        <button
          onClick={() => (window.location.href = `tel:${phone}`)}
          className="px-8 py-3.5 bg-white text-black hover:bg-slate-100 transition-colors font-semibold text-xs tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer"
        >
          <span>{buttonText}</span>
        </button>
      </div>
    </section>
  );
};
