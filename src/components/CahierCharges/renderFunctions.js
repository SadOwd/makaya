// Suite de renderEconomique et renderResume

export const renderEconomiqueComplete = () => `
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <h4 className="font-bold text-2xl mb-6 flex items-center gap-2">
            <span className="text-3xl">🔋</span> Tarification HYC200 (200 kW)
          </h4>
          <div className="space-y-4">
            {[
              {label:'Public',price:'320 FCFA/kWh',color:'emerald'},
              {label:'Abonné',price:'280 FCFA/kWh',color:'blue'},
              {label:'B2B',price:'250 FCFA/kWh',color:'purple'}
            ].map((tarif,i)=>(
              <div key={i} className={\`flex justify-between items-center p-5 bg-\${tarif.color}-50 rounded-xl border-2 border-\${tarif.color}-200 hover:shadow-lg transition-all\`}>
                <span className="font-bold text-gray-800">{tarif.label}</span>
                <span className={\`font-black text-xl text-\${tarif.color}-600\`}>{tarif.price}</span>
              </div>
            ))}
            <div className="text-sm text-gray-600 mt-4 p-4 bg-gray-50 rounded-lg">
              <strong>Session moyenne:</strong> 35 kWh • <strong>Durée:</strong> ~12 min
            </div>
          </div>
        </div>
      </div>
    </div>
`;
