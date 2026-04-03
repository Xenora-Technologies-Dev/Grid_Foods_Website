'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'quota_exceeded';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const initialForm: FormData = { name: '', email: '', phone: '', company: '', message: '' };

/** Opens the visitor's default email app pre-filled with the inquiry details. */
function openMailtoFallback(formData: FormData, contactEmail: string) {
  const subject = encodeURIComponent(`New Inquiry from ${formData.name} — Grid Foods LLC Website`);
  const body = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone / WhatsApp: ${formData.phone}\nCompany: ${formData.company || 'Not provided'}\n\nMessage:\n${formData.message}`
  );
  window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
}

/**
 * Contact form component — sends data to Netlify serverless function.
 * Falls back to a mailto: link when Resend's monthly quota is exceeded.
 */
export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fallbackEmail, setFallbackEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      // Monthly quota exceeded → open mailto fallback
      if (res.status === 429 && data.code === 'quota_exceeded') {
        const contact = data.contactEmail || 'xenoratechnologies@gmail.com';
        setFallbackEmail(contact);
        setStatus('quota_exceeded');
        openMailtoFallback(form, contact);
        return;
      }

      if (!res.ok) {
        throw new Error(data.message || 'Failed to send message. Please try again.');
      }

      setStatus('success');
      setForm(initialForm);
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="quote">
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-dark-950 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
            Email Address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-dark-950 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1.5">
            Phone / WhatsApp <span className="text-red-400">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="+971 50 000 0000"
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-dark-950 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1.5">
            Company / Business Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company name"
            className="w-full px-4 py-3 rounded-lg border border-white/10 bg-dark-950 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
          Message / Inquiry <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us what products you need, quantities, and any specific requirements..."
          className="w-full px-4 py-3 rounded-lg border border-white/10 bg-dark-950 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent text-sm transition-colors resize-none"
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary text-base py-4 w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Inquiry
          </>
        )}
      </button>

      {/* Success message */}
      {status === 'success' && (
        <div className="flex items-start gap-3 bg-green-900/30 border border-green-800/50 rounded-lg p-4">
          <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-green-300 text-sm">Message sent successfully!</p>
            <p className="text-green-400 text-sm mt-0.5">
              Our team will get back to you within 24 hours. You can also WhatsApp us for faster response.
            </p>
          </div>
        </div>
      )}

      {/* Quota exceeded — mailto fallback */}
      {status === 'quota_exceeded' && (
        <div className="flex items-start gap-3 bg-orange-900/30 border border-orange-800/50 rounded-lg p-4">
          <Mail className="w-5 h-5 text-orange-400 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-orange-300 text-sm">Email service temporarily unavailable</p>
            <p className="text-orange-400 text-sm mt-0.5">
              We&apos;ve reached our email limit for this month. Your email app has been opened with your inquiry
              pre-filled — please hit Send to reach us directly.
            </p>
            <button
              type="button"
              onClick={() => openMailtoFallback(form, fallbackEmail || 'xenoratechnologies@gmail.com')}
              className="mt-2 text-sm font-medium text-orange-400 underline underline-offset-2 hover:text-orange-300 transition-colors"
            >
              Open email app again
            </button>
          </div>
        </div>
      )}

      {/* Error message */}
      {status === 'error' && (
        <div className="flex items-start gap-3 bg-red-900/30 border border-red-800/50 rounded-lg p-4">
          <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-red-300 text-sm">Failed to send message</p>
            <p className="text-red-400 text-sm mt-0.5">{errorMsg}</p>
          </div>
        </div>
      )}
    </form>
  );
}
