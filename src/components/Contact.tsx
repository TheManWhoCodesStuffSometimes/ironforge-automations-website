// src/components/Contact.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle, XCircle, AlertTriangle } from 'react-feather';
import SectionHeader from './SectionHeader';

// 1. Define the validation schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters long.'),
});

// Infer the TypeScript type from the schema
type ContactFormInputs = z.infer<typeof contactSchema>;

// Get the Formspree ID from environment variables.
// REMOVED hardcoded fallback for improved security and robustness.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

const Contact: React.FC = () => {
  // 2. Use React Hook Form for state management and validation
  const {
    register,
    handleSubmit: handleReactHookFormSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    mode: 'onBlur',
  });

  // 3. Use Formspree for the actual submission logic
  const [formspreeState, handleFormspreeSubmit] = useFormspree(FORMSPREE_ID!, {
    // The '!' asserts that FORMSPREE_ID is not undefined. We handle the undefined case below.
    onSuccess: () => {
      reset();
    }
  });

  // 4. Create a unified submit handler
  const onSubmit = (data: ContactFormInputs) => {
    if (!FORMSPREE_ID) {
        // This should not happen if the environment is configured correctly, but it's a good safeguard.
        console.error("Formspree ID is not configured.");
        return;
    }
    handleFormspreeSubmit(data);
  };

  const isFormDisabled = !FORMSPREE_ID || isSubmitting || formspreeState.submitting;

  return (
    <section id="contact" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Get in Touch"
          subtitle="Ready to automate? Have a question? We'd love to hear from you."
        />
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleReactHookFormSubmit(onSubmit)} className="bg-slate-900 p-8 rounded-lg shadow-lg space-y-4" noValidate>
            
            {/* Configuration Error Message */}
            {!FORMSPREE_ID && (
                 <div className="flex items-center gap-3 text-center bg-yellow-900/50 p-3 rounded-md border border-yellow-500">
                    <AlertTriangle className="text-yellow-400 w-6 h-6 flex-shrink-0" />
                    <p className="text-yellow-300">Contact form is currently unavailable. Configuration is pending.</p>
                </div>
            )}
            
            {/* Success Message */}
            {formspreeState.succeeded && (
              <div className="flex items-center gap-3 text-center bg-green-900/50 p-3 rounded-md border border-green-500">
                <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0"/>
                <p className="text-green-300">Thank you! Your message has been sent successfully.</p>
              </div>
            )}
            
            {/* Server-side Error Message */}
            {formspreeState.errors && (
                 <div className="flex items-center gap-3 text-center bg-red-900/50 p-3 rounded-md border border-red-500">
                    <XCircle className="text-red-400 w-6 h-6 flex-shrink-0" />
                    <p className="text-red-300">Something went wrong. Please try again.</p>
                </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
              <input
                id="name"
                type="text"
                {...register('name')}
                disabled={!FORMSPREE_ID}
                aria-invalid={!!errors.name}
                aria-describedby="name-error"
                className={`w-full bg-slate-700 border rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-orange-500'}`}
              />
              {errors.name && <p id="name-error" className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <input
                id="email"
                type="email"
                {...register('email')}
                disabled={!FORMSPREE_ID}
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                className={`w-full bg-slate-700 border rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-orange-500'}`}
              />
              {errors.email && <p id="email-error" className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                disabled={!FORMSPREE_ID}
                aria-invalid={!!errors.message}
                aria-describedby="message-error"
                className={`w-full bg-slate-700 border rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 transition-colors disabled:opacity-50 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-600 focus:ring-orange-500'}`}
              ></textarea>
              {errors.message && <p id="message-error" className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isFormDisabled}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/30 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:scale-100"
              >
                {(isSubmitting || formspreeState.submitting) ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
