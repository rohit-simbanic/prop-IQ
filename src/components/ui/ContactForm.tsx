import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Check } from 'lucide-react';
import { Button } from './Button';
import { Modal } from './Modal';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
  defaultMessage: string;
  title: string;
  subtitle: string;
  successTitle: string;
  successDesc: string;
  bgClass?: string;
  inputBgClass?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultMessage,
  title,
  subtitle,
  successTitle,
  successDesc,
  bgClass = 'bg-slate-50 dark:bg-neutral-900/20',
  inputBgClass = 'bg-white dark:bg-black',
}) => {
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      message: defaultMessage,
    },
  });

  const onSubmit = useCallback(
    async (data: ContactFormData) => {
      console.log('Inquiry submitted:', data);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSuccessOpen(true);
      reset();
    },
    [reset]
  );

  return (
    <div className={`${bgClass} border border-slate-200 dark:border-white/10 p-8 sm:p-12`}>
      <div className="text-center mb-8 space-y-3">
        <h3 className="text-xl font-bold uppercase tracking-wide text-slate-900 dark:text-white">
          {title}
        </h3>
        <p className="text-xs text-slate-400 font-light">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <input
              type="text"
              placeholder="Full Name"
              {...register('name')}
              className={`w-full ${inputBgClass} border border-slate-200 focus:border-[#2b5c8f] dark:border-white/10 px-4 py-3 text-xs text-slate-900 dark:text-white outline-none`}
            />
            {errors.name && (
              <p className="text-[10px] text-red-500 font-medium">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <input
              type="email"
              placeholder="Email Address"
              {...register('email')}
              className={`w-full ${inputBgClass} border border-slate-200 focus:border-[#2b5c8f] dark:border-white/10 px-4 py-3 text-xs text-slate-900 dark:text-white outline-none`}
            />
            {errors.email && (
              <p className="text-[10px] text-red-500 font-medium">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-1">
          <input
            type="tel"
            placeholder="Phone Number"
            {...register('phone')}
            className={`w-full ${inputBgClass} border border-slate-200 focus:border-[#2b5c8f] dark:border-white/10 px-4 py-3 text-xs text-slate-900 dark:text-white outline-none`}
          />
          {errors.phone && (
            <p className="text-[10px] text-red-500 font-medium">{errors.phone.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <textarea
            rows={4}
            placeholder="Your Message..."
            {...register('message')}
            className={`w-full ${inputBgClass} border border-slate-200 focus:border-[#2b5c8f] dark:border-white/10 px-4 py-3 text-xs text-slate-900 dark:text-white outline-none resize-none`}
          />
          {errors.message && (
            <p className="text-[10px] text-red-500 font-medium">{errors.message.message}</p>
          )}
        </div>

        <Button
          variant="primary"
          type="submit"
          isLoading={isSubmitting}
          leftIcon={<Send size={14} />}
          className="w-full py-3.5 bg-[#2b5c8f] hover:bg-[#1e40af] text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
        >
          Submit Request
        </Button>
      </form>

      <Modal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        title="Message Sent"
        size="sm"
      >
        <div className="text-center py-6 space-y-5 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-white/10 flex items-center justify-center text-[#2b5c8f] dark:text-white">
            <Check size={32} />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold font-display text-slate-950 dark:text-white">
              {successTitle}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-light max-w-xs mx-auto">
              {successDesc}
            </p>
          </div>
          <Button
            variant="primary"
            onClick={() => setIsSuccessOpen(false)}
            className="px-8 py-2.5 text-xs font-semibold bg-[#2b5c8f] text-white"
          >
            Acknowledge
          </Button>
        </div>
      </Modal>
    </div>
  );
};
