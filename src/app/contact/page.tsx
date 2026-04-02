import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { companyInfo } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact Us | Grid Foods LLC — Frozen Food Supplier Dubai',
  description:
    'Contact Grid Foods LLC for wholesale frozen food inquiries, bulk orders, and pricing. Based in Dubai, serving the entire UAE. Call, email, or WhatsApp us.',
  alternates: {
    canonical: 'https://gridfoods.ae/contact',
  },
};

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone / WhatsApp',
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone}`,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Mail,
    label: 'Email Address',
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    color: 'text-accent',
    bg: 'bg-orange-50',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: companyInfo.address,
    href: 'https://maps.google.com/?q=Dubai+UAE',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Sun–Thu: 9:00 AM – 6:00 PM',
    href: null,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy-gradient py-20 md:py-28 text-white">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="badge bg-accent/20 text-accent border border-accent/30 mb-5">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Let's Talk About Your Food Supply Needs
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Whether you're looking to place a bulk order, request pricing, or learn more about our products — our team is ready to help. Reach out via form, phone, or WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">Get in Touch</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fill out the form and our sales team will respond within 24 hours. For urgent orders, call or WhatsApp us directly.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="flex flex-col gap-4">
                {contactDetails.map((item) => (
                  <div key={item.label} className="bg-white rounded-xl p-5 flex items-start gap-4 shadow-sm border border-gray-100">
                    <div className={`w-11 h-11 ${item.bg} rounded-lg flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-semibold text-primary hover:text-accent transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold text-primary">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${companyInfo.whatsapp}?text=Hello%20Grid%20Foods%2C%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-4 rounded-xl transition-colors shadow-lg"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <div className="text-sm font-bold">Chat on WhatsApp</div>
                  <div className="text-xs text-white/80">Faster response guaranteed</div>
                </div>
              </a>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-bold text-primary mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-8">
                Fill in your details and we'll get back to you with pricing and availability.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden h-72 bg-gray-100 flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-accent mx-auto mb-3" />
              <p className="font-semibold text-primary">Grid Foods LLC</p>
              <p className="text-gray-500 text-sm">Dubai, United Arab Emirates</p>
              <a
                href="https://maps.google.com/?q=Dubai+UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-accent text-sm font-medium hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
