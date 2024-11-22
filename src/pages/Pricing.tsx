import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Up to 100 transactions/month',
      'Basic analytics',
      'Mobile money integration',
      'Email support',
      '2 team members'
    ]
  },
  {
    name: 'Pro',
    price: '$29',
    features: [
      'Unlimited transactions',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'Up to 10 team members'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited everything',
      'Dedicated support',
      'Custom development',
      'SLA guarantee',
      'Unlimited team members'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Choose your plan
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Simple, transparent pricing that grows with you
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-base font-medium text-gray-500">/month</span>}
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-indigo-600" />
                      <span className="ml-3 text-base text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button className="w-full btn-primary">
                    Get started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}