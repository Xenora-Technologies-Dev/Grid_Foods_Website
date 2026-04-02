import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Target, Eye, ShieldCheck, Truck, TrendingUp, Users, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Grid Foods LLC — Frozen Food Distributor Dubai',
  description:
    'Learn about Grid Foods LLC — a Dubai-based food trading company supplying premium frozen foods to HORECA, supermarkets, and bulk buyers across the UAE since 2018.',
  alternates: {
    canonical: 'https://gridfoods.ae/about',
  },
};

const values = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description:
      'Every product in our portfolio undergoes rigorous quality checks. We source only from internationally certified suppliers that meet UAE food safety standards.',
  },
  {
    icon: Truck,
    title: 'Reliable Supply Chain',
    description:
      'We maintain strategic inventory and work with a network of trusted logistics partners to ensure timely, uninterrupted supply to our clients across the UAE.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Pricing',
    description:
      'Our strong supplier relationships and efficient operations allow us to offer best-in-market wholesale pricing without compromising on quality.',
  },
  {
    icon: Users,
    title: 'Client-First Approach',
    description:
      'Every client receives personalized attention. From custom orders to flexible payment terms, we tailor our services to your business needs.',
  },
];

const milestones = [
  { year: '2018', event: 'Grid Foods LLC founded in Dubai' },
  { year: '2019', event: 'Expanded to 6 core product categories' },
  { year: '2020', event: 'Grew to 50+ HORECA clients across Dubai' },
  { year: '2022', event: 'UAE-wide distribution network established' },
  { year: '2024', event: '100+ clients served across UAE' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-navy-gradient py-20 md:py-28 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="badge bg-accent/20 text-accent border border-accent/30 mb-5">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Your Trusted Food Distribution Partner in Dubai
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Grid Foods LLC is a Dubai-based food trading and distribution company delivering premium frozen foods to the UAE's hospitality, retail, and wholesale sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-5">
                Who We Are
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Founded in 2018, Grid Foods LLC has grown into one of Dubai's reliable frozen food trading companies. We specialize in the import, distribution, and wholesale supply of high-quality frozen foods — from seafood and poultry to dairy, snacks, and staple grains.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our clients include renowned HORECA establishments, major supermarket chains, and large-scale food distributors who rely on us for consistent quality, competitive pricing, and on-time delivery.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Operating from Dubai, we leverage our strategic location to source premium products from top global producers and deliver efficiently to clients across the United Arab Emirates.
              </p>
              <div className="flex flex-wrap gap-8">
                {[['500+', 'Products'], ['100+', 'Clients'], ['6', 'Categories'], ['UAE', 'Coverage']].map(([num, label]) => (
                  <div key={label} className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">{num}</div>
                    <div className="text-gray-500 text-sm font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=800&auto=format&fit=crop"
                  alt="Grid Foods LLC warehouse and cold storage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-accent text-white rounded-2xl px-6 py-4 shadow-xl">
                <div className="text-2xl font-bold">6+ Years</div>
                <div className="text-sm opacity-90">of Excellence in Dubai</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-primary rounded-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-14 h-14 bg-accent/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-white/70 leading-relaxed">
                To be the UAE's most trusted frozen food distribution partner — delivering consistent quality, dependable supply, and exceptional value to every client we serve, from independent restaurants to large retail chains.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-accent rounded-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-white/90 leading-relaxed">
                To expand our reach across the GCC and become a premier food trading company known for product diversity, supply chain excellence, and a commitment to food safety and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title text-center">Why Choose Grid Foods?</h2>
            <p className="section-subtitle mx-auto text-center">
              We combine product quality, supply reliability, and personalized service to build long-term partnerships.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl border border-gray-100 hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-pad bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title text-center">Our Journey</h2>
            <p className="section-subtitle mx-auto text-center">
              From a small trading operation to UAE-wide distribution — here's how we grew.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />
              <div className="flex flex-col gap-8">
                {milestones.map((m, i) => (
                  <div key={m.year} className="flex gap-6 items-start">
                    <div className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center shrink-0 z-10">
                      <span className="text-accent font-bold text-xs">{m.year}</span>
                    </div>
                    <div className="flex-1 pt-4">
                      <p className="text-gray-700 font-medium">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with Grid Foods Today</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Join over 100 businesses in the UAE who trust Grid Foods for their frozen food supply needs.
          </p>
          <Link href="/contact" className="btn-primary text-base px-8 py-4">
            Get in Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
