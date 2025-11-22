import React, { useState } from 'react';
import { Battery, TrendingUp, Users, Clock, Target } from 'lucide-react';
import RechargeDashboard from './RechargeDashboard';
import RechargeInsights from './RechargeInsights';
import RechargeTendances from './RechargeTendances';

const RechargeMain = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: Battery },
    { id: 'insights', label: 'Insights & Actions', icon: Target },
    { id: 'tendances', label: 'Tendances 24/7', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Tabs */}
      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg whitespace-nowrap transition-all font-semibold ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {activeTab === 'dashboard' && <RechargeDashboard />}
        {activeTab === 'insights' && <RechargeInsights />}
        {activeTab === 'tendances' && <RechargeTendances />}
      </div>
    </div>
  );
};

export default RechargeMain;
