import { Milestone, CheckCircle2, Circle } from 'lucide-react';

const milestones = [
  {
    quarter: 'Q2 2024',
    title: 'Platform Launch',
    status: 'current',
    items: [
      'Mobile wallet integration',
      'Basic payment processing',
      'User authentication',
      'Security infrastructure'
    ]
  },
  {
    quarter: 'Q3 2024',
    title: 'Enhanced Features',
    status: 'upcoming',
    items: [
      'Multi-currency support',
      'Advanced analytics dashboard',
      'Merchant integration tools',
      'API documentation'
    ]
  },
  {
    quarter: 'Q4 2024',
    title: 'Global Expansion',
    status: 'upcoming',
    items: [
      'International payment corridors',
      'Local banking partnerships',
      'Regulatory compliance framework',
      'Enhanced security features'
    ]
  },
  {
    quarter: 'Q1 2025',
    title: 'Enterprise Solutions',
    status: 'upcoming',
    items: [
      'Enterprise account management',
      'Custom integration solutions',
      'Advanced fraud prevention',
      'Dedicated support system'
    ]
  }
];

export default function Roadmap() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Roadmap</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Journey Ahead
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Follow our development journey as we build the future of decentralized payments
          </p>
        </div>

        <div className="mt-20">
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={milestone.quarter} className="relative">
                {index !== milestones.length - 1 && (
                  <div className="absolute left-8 top-16 h-full w-0.5 bg-gray-200" />
                )}
                <div className="relative flex items-start">
                  <div className="flex-shrink-0">
                    {milestone.status === 'current' ? (
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100">
                        <Milestone className="w-8 h-8 text-indigo-600" />
                      </div>
                    ) : (
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                        <Milestone className="w-8 h-8 text-gray-400" />
                      </div>
                    )}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-lg font-medium text-gray-900">
                      {milestone.quarter} - {milestone.title}
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {milestone.items.map((item) => (
                        <li key={item} className="flex items-start">
                          {milestone.status === 'current' ? (
                            <CheckCircle2 className="h-5 w-5 text-indigo-600" />
                          ) : (
                            <Circle className="h-5 w-5 text-gray-400" />
                          )}
                          <span className="ml-3 text-gray-500">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-500">
            This roadmap is subject to change based on market conditions and community feedback.
          </p>
          <button className="mt-8 btn-primary">
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
}