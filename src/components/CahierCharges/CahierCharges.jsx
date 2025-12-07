import React, { useState } from 'react';
import { BookOpen, Zap, Battery, BarChart, TrendingUp, DollarSign, Calendar, Award, Settings, ChevronRight, Sparkles } from 'lucide-react';

export default function CahierCharges() {
  const [activeTab, setActiveTab] = useState('resume');

  const tabs = [
    { id: 'resume', label: 'Vue d\'ensemble', icon: Sparkles },
    { id: 'hyc50', label: 'HYC50', icon: Zap },
    { id: 'hyc200', label: 'HYC200', icon: Battery },
    { id: 'comparatif', label: 'Comparatif', icon: BarChart },
    { id: 'economique', label: 'Financier', icon: TrendingUp }
  ];

  const ProgressBar = ({ label, value, max, color, unit = '' }) => {
    const pct = (value / max) * 100;
    return (
      <div className="mb-5">
        <div className="flex justify-between text-sm mb-2">
          <span className="font-semibold text-gray-700">{label}</span>
          <span className="font-bold text-gray-900">{value}{unit}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
          <div className={`h-4 rounded-full ${color} transition-all duration-1000`} style={{ width: `${pct}%` }}></div>
        </div>
        <div className="text-xs text-gray-500 mt-1">{Math.round(pct)}%</div>
      </div>
    );
  };

  const StatCard = ({ icon: Icon, value, label, badge, gradient }) => (
    <div className={`bg-gradient-to-br ${gradient} text-white rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-all`}>
      <Icon className="w-12 h-12 mb-3 opacity-80" />
      <div className="text-5xl font-black mb-2">{value}</div>
      <div className="text-sm opacity-90 mb-3">{label}</div>
      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-semibold inline-block">{badge}</div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="relative bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl">
                  <BookOpen className="w-10 h-10 animate-pulse" />
                </div>
                <div>
                  <h1 className="text-5xl font-black mb-2">Cahier des Charges</h1>
                  <p className="text-2xl opacity-90">Station Pilote E-Mobility • Configuration Alpitronic</p>
                </div>
              </div>
              <div className="flex gap-4 flex-wrap">
                <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full font-semibold shadow-lg">📄 Version 2.0</span>
                <span className="bg-emerald-500/40 backdrop-blur-md px-5 py-2 rounded-full font-semibold shadow-lg">✓ Validé</span>
                <span className="bg-blue-500/40 backdrop-blur-md px-5 py-2 rounded-full font-semibold shadow-lg">📅 Décembre 2025</span>
              </div>
            </div>
            <div className="text-right bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-2xl">
              <div className="text-6xl font-black mb-3">163M</div>
              <div className="text-xl opacity-90 mb-3">FCFA Budget</div>
              <div className="bg-emerald-400/30 backdrop-blur-sm px-5 py-2 rounded-xl text-lg font-bold">↘ -21% vs ABB</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white/80 backdrop-blur-lg border-b sticky top-0 z-40 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-8 py-5 border-b-4 transition-all font-semibold ${
                    activeTab === tab.id ? 'border-emerald-500 text-emerald-600 bg-emerald-50/50' : 'border-transparent text-gray-600 hover:bg-gray-50'
                  }`}>
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-12 max-w-7xl">
        {activeTab === 'resume' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-4 gap-6">
              <StatCard icon={DollarSign} value="163M" label="Budget FCFA" badge="↘ -21% vs ABB" gradient="from-emerald-500 to-emerald-600" />
              <StatCard icon={Zap} value="350 kW" label="9 points charge" badge="↗ +12% capacité" gradient="from-blue-500 to-blue-600" />
              <StatCard icon={TrendingUp} value="48%" label="ROIC An 5" badge="↗ +20 pts vs ABB" gradient="from-purple-500 to-purple-600" />
              <StatCard icon={Calendar} value="5-6 ans" label="Payback" badge="↘ -2 ans vs ABB" gradient="from-orange-500 to-orange-600" />
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-3xl font-bold mb-6">Configuration Station</h3>
              <div className="grid md:grid-cols-2 gap-10 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-xl mb-6">Répartition Puissance (350 kW)</h4>
                  <ProgressBar label="3× HYC50" value={150} max={350} color="bg-gradient-to-r from-emerald-500 to-emerald-600" unit=" kW" />
                  <ProgressBar label="1× HYC200" value={200} max={350} color="bg-gradient-to-r from-blue-500 to-blue-600" unit=" kW" />
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-xl mb-6">Répartition CAPEX (163M)</h4>
                  <ProgressBar label="3× HYC50" value={43.5} max={163} color="bg-gradient-to-r from-emerald-400 to-emerald-500" unit="M" />
                  <ProgressBar label="1× HYC200" value={39} max={163} color="bg-gradient-to-r from-blue-400 to-blue-500" unit="M" />
                  <ProgressBar label="Infrastructure" value={45} max={163} color="bg-gradient-to-r from-purple-400 to-purple-500" unit="M" />
                  <ProgressBar label="Génie Civil" value={35.5} max={163} color="bg-gradient-to-r from-orange-400 to-orange-500" unit="M" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {title:'3× HYC50',desc:'Bornes murales 50 kW',points:['6 points simultanés','50 kW ou 2×25 kW','Efficacité 97%','<50 dBA'],price:'14,5M',color:'emerald'},
                  {title:'1× HYC200',desc:'Borne sol modulaire',points:['3 points ultra-rapide','200 kW modulaire','Efficacité 97,5%','V2G Ready'],price:'39M',color:'blue'}
                ].map((eq,i)=>(
                  <div key={i} className={`bg-gradient-to-br from-${eq.color}-50 to-${eq.color}-100 rounded-2xl p-8 border-2 border-${eq.color}-300 shadow-xl`}>
                    <h4 className={`text-2xl font-black text-${eq.color}-900 mb-2`}>{eq.title}</h4>
                    <p className={`text-${eq.color}-700 font-semibold mb-4`}>{eq.desc}</p>
                    <div className="bg-white rounded-xl p-4 mb-4">
                      {eq.points.map((p,j)=>(
                        <div key={j} className="flex items-center gap-2 mb-2">
                          <ChevronRight className={`w-4 h-4 text-${eq.color}-500`} />
                          <span className="text-sm">{p}</span>
                        </div>
                      ))}
                    </div>
                    <div className={`bg-${eq.color}-600 text-white rounded-xl p-5 text-center`}>
                      <div className="text-3xl font-black">{eq.price} FCFA</div>
                      <div className="text-sm opacity-90">prix total</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 rounded-2xl p-10 shadow-2xl">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-emerald-600" />
                Avantages Alpitronic
              </h3>
              <div className="grid md:grid-cols-4 gap-5">
                {[
                  {emoji:'🏆',title:'Leader Européen',desc:'30%+ parts marché DC'},
                  {emoji:'⚡',title:'Efficacité 97,5%',desc:'Meilleure du marché'},
                  {emoji:'🔧',title:'Modulaire',desc:'Power-Stack 50 kW'},
                  {emoji:'🇪🇺',title:'Made in Europe',desc:'Qualité italienne'},
                  {emoji:'🔋',title:'V2G Ready',desc:'Bidirectionnel'},
                  {emoji:'🧠',title:'Smart Balancing',desc:'Optimisation auto'},
                  {emoji:'🔇',title:'Silencieux',desc:'<50 dB'},
                  {emoji:'💰',title:'Prix optimal',desc:'-20 à -40% vs ABB'}
                ].map((av,i)=>(
                  <div key={i} className="bg-white rounded-xl p-5 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                    <div className="text-4xl mb-3">{av.emoji}</div>
                    <h4 className="font-bold text-sm mb-2">{av.title}</h4>
                    <p className="text-xs text-gray-600">{av.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'hyc50' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-10 shadow-2xl">
              <h2 className="text-5xl font-black mb-3">Alpitronic HYC50</h2>
              <p className="text-2xl opacity-90">Borne Murale DC 50 kW</p>
            </div>
            <div className="grid md:grid-cols-4 gap-5">
              {[{v:'97%',l:'Efficacité'},{v:'0.99',l:'Facteur Puissance'},{v:'25W',l:'Veille'},{v:'<5%',l:'THDi'}].map((st,i)=>(
                <div key={i} className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-4xl font-black text-emerald-600 mb-2">{st.v}</div>
                  <div className="text-sm font-bold">{st.l}</div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Spécifications</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-4">Sortie</h4>
                  {[{l:'Puissance',v:'50 kW'},{l:'Interface',v:'CCS2, CHAdeMO'},{l:'Tension',v:'150-1000 Vdc'}].map((s,i)=>(
                    <div key={i} className="flex justify-between p-3 bg-gray-50 rounded-lg mb-2">
                      <span className="font-semibold text-sm">{s.l}</span>
                      <span className="font-bold">{s.v}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-bold mb-4">Entrée</h4>
                  {[{l:'Tension AC',v:'400 V'},{l:'Courant',v:'90 A'},{l:'Fréquence',v:'50/60 Hz'}].map((s,i)=>(
                    <div key={i} className="flex justify-between p-3 bg-gray-50 rounded-lg mb-2">
                      <span className="font-semibold text-sm">{s.l}</span>
                      <span className="font-bold">{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'hyc200' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-2xl p-10 shadow-2xl">
              <h2 className="text-5xl font-black mb-3">Alpitronic HYC200</h2>
              <p className="text-2xl opacity-90">Borne Sol 100-200 kW - Power-Stack</p>
            </div>
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Power-Stack Modulaire</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[{p:'100 kW',s:'1× Stack'},{p:'200 kW',s:'2× Stack',f:true},{p:'150 kW',s:'1,5× Stack'}].map((c,i)=>(
                  <div key={i} className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 ${c.f?'border-4 border-blue-500':''}`}>
                    <div className="text-4xl font-black text-blue-600 mb-2">{c.p}</div>
                    <div className="text-sm font-semibold">{c.s}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'comparatif' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-2xl p-10">
              <h3 className="text-3xl font-bold mb-8">Comparaison Alpitronic vs ABB</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2">
                      <th className="text-left py-4 px-6 font-bold">Critère</th>
                      <th className="text-left py-4 px-6 font-bold text-emerald-600">Alpitronic</th>
                      <th className="text-left py-4 px-6 font-bold">ABB</th>
                      <th className="text-left py-4 px-6 font-bold text-emerald-600">Avantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['CAPEX','163 M','206 M','-21%'],
                      ['Points','9','8','+12%'],
                      ['Efficacité','97,5%','96,5%','+1%'],
                      ['ROIC An 5','48%','28%','+20 pts'],
                      ['Payback','5-6 ans','7-8 ans','-2 ans']
                    ].map((r,i)=>(
                      <tr key={i} className="border-b hover:bg-emerald-50">
                        <td className="py-4 px-6 font-semibold">{r[0]}</td>
                        <td className="py-4 px-6 text-emerald-600 font-bold">{r[1]}</td>
                        <td className="py-4 px-6">{r[2]}</td>
                        <td className="py-4 px-6 text-emerald-600 font-bold">{r[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'economique' && (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-2xl p-10">
              <h3 className="text-3xl font-bold mb-8">Projections 5 Ans</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {an:1,s:14,r:40.9,e:-12.8,m:-31.2},
                  {an:3,s:40,r:116.0,e:30.5,m:26.3},
                  {an:5,s:69,r:198.5,e:78.1,m:39.3}
                ].map((d)=>(
                  <div key={d.an} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                    <h4 className="font-black text-2xl mb-5">Année {d.an}</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-white rounded"><span className="text-sm">Sessions/j</span><span className="font-bold">{d.s}</span></div>
                      <div className="flex justify-between p-3 bg-white rounded"><span className="text-sm">Revenus</span><span className="font-bold">{d.r}M</span></div>
                      <div className="flex justify-between p-3 bg-white rounded"><span className="text-sm">EBITDA</span><span className={`font-bold ${d.e>0?'text-emerald-600':'text-red-600'}`}>{d.e}M</span></div>
                      <div className="flex justify-between p-3 bg-white rounded"><span className="text-sm">Marge</span><span className={`font-bold ${d.m>0?'text-emerald-600':'text-red-600'}`}>{d.m}%</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
