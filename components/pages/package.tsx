'use client';

import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for getting started',
    features: ['Up to 10 users', '5GB storage', 'Basic support', 'Monthly reports'],
    popular: false,
  },
  {
    name: 'Professional',
    price: '$79',
    description: 'Best for growing teams',
    features: ['Up to 50 users', '100GB storage', 'Priority support', 'Advanced analytics', 'Custom integrations'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$299',
    description: 'For large organizations',
    features: ['Unlimited users', 'Unlimited storage', '24/7 dedicated support', 'Advanced security', 'Custom features'],
    popular: false,
  },
];

export function Package() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Packages</h1>
        <p className="text-muted-foreground mt-2">Choose the perfect plan for your needs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, index) => (
          <Card 
            key={index} 
            className={`p-8 bg-card border-border transition-transform hover:scale-105 ${
              pkg.popular ? 'ring-2 ring-accent' : ''
            }`}
          >
            {pkg.popular && (
              <div className="inline-block px-3 py-1 mb-4 text-xs font-bold text-accent-foreground bg-accent rounded-full">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-foreground">{pkg.name}</h3>
            <p className="text-muted-foreground text-sm mt-2">{pkg.description}</p>
            <p className="text-4xl font-bold text-accent mt-4">{pkg.price}<span className="text-lg text-muted-foreground">/mo</span></p>
            <ul className="space-y-3 mt-6">
              {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-foreground">
                  <Check className="w-5 h-5 text-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className={`w-full mt-6 py-2 rounded-lg font-medium transition-colors ${
              pkg.popular
                ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                : 'bg-sidebar text-foreground hover:bg-sidebar/80'
            }`}>
              Get Started
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
