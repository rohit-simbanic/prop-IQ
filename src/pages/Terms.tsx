import React from 'react';
import { FileText, Award, Scale, HelpCircle } from 'lucide-react';

export const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcfcf9] dark:bg-[#0b0d0c] font-sans text-slate-800 dark:text-slate-300 pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-100 dark:border-white/5 pb-6 mb-10">
          <h1 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white leading-none">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Last Updated: June 12, 2026. The terms governing your use of the PropIQ platform.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <FileText className="text-[#2b5c8f]" size={20} />
              <span>1. Agreement to Terms</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              By accessing or using the PropIQ platform, you agree to be bound by these Terms of
              Service and all applicable laws and regulations. If you do not agree with any of these
              terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <Award className="text-[#2b5c8f]" size={20} />
              <span>2. Intellectual Property Rights</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              All materials, including designs, text, graphics, images, and code on the PropIQ
              website, are the intellectual property of PropIQ and are protected by applicable
              copyright and trademark law. You may not copy, modify, distribute, or use any content
              without express written consent.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <Scale className="text-[#2b5c8f]" size={20} />
              <span>3. Limitation of Liability</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              In no event shall PropIQ or its partners be liable for any damages arising out of the
              use or inability to use the materials on our website, even if we have been notified of
              the possibility of such damage. Property listings are for informational purposes only.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white flex items-center gap-2">
              <HelpCircle className="text-[#2b5c8f]" size={20} />
              <span>4. Governing Law</span>
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
              Any claim relating to the PropIQ platform shall be governed by the laws of our
              operating jurisdiction without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
