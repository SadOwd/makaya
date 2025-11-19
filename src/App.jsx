600">2.5-3.0x</span></div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-3 text-gray-800">Structure de couts</h4>
                <div className="space-y-2">
                  <div className="flex justify-between"><span className="text-gray-600">CAPEX Y1-Y3</span><span className="font-bold">3-5M euro</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Prix VE moyen</span><span className="font-bold">10 500 euro</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Marge VE</span><span className="font-bold text-green-600">14%</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Marge bornes</span><span className="font-bold text-green-600">25%</span></div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold mb-3 text-gray-800">Financement</h4>
                <div className="space-y-2">
                  <div className="flex justify-between"><span className="text-gray-600">Equity</span><span className="font-bold text-blue-600">50%</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Dette bancaire</span><span className="font-bold">30%</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Subventions</span><span className="font-bold text-green-600">20%</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Break-even</span><span className="font-bold text-orange-600">18 mois</span></div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'risks':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Matrice des risques</h3>
                {editMode && (
                  <button onClick={addRisk} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus size={18} />Ajouter risque
                  </button>
                )}
              </div>
              
              <div className="space-y-3">
                {risks.map((risk) => (
                  <div key={risk.id} className={`p-4 rounded-lg border-l-4 ${risk.impact * risk.prob >= 16 ? 'bg-red-50 border-red-500' : 'bg-orange-50 border-orange-500'}`}>
                    {editMode ? (
                      <div className="space-y-3">
                        <div className="grid md:grid-cols-2 gap-3">
                          <input type="text" value={risk.risk} onChange={(e) => updateRisk(risk.id, 'risk', e.target.value)} className="font-semibold border rounded px-3 py-2" placeholder="Nom du risque" />
                          <select value={risk.status} onChange={(e) => updateRisk(risk.id, 'status', e.target.value)} className="border rounded px-3 py-2">
                            <option>A definir</option>
                            <option>Planifie</option>
                            <option>En cours</option>
                            <option>Resolu</option>
                          </select>
                        </div>
                        <div className="grid md:grid-cols-4 gap-3">
                          <div>
                            <label className="text-xs text-gray-600">Impact 1-5</label>
                            <input type="number" min="1" max="5" value={risk.impact} onChange={(e) => updateRisk(risk.id, 'impact', parseInt(e.target.value))} className="w-full border rounded px-3 py-2" />
                          </div>
                          <div>
                            <label className="text-xs text-gray-600">Probabilite 1-5</label>
                            <input type="number" min="1" max="5" value={risk.prob} onChange={(e) => updateRisk(risk.id, 'prob', parseInt(e.target.value))} className="w-full border rounded px-3 py-2" />
                          </div>
                          <div className="md:col-span-2">
                            <label className="text-xs text-gray-600">Mitigation</label>
                            <input type="text" value={risk.mitigation} onChange={(e) => updateRisk(risk.id, 'mitigation', e.target.value)} className="w-full border rounded px-3 py-2" />
                          </div>
                        </div>
                        <button onClick={() => deleteRisk(risk.id)} className="text-red-600 text-sm flex items-center gap-1">
                          <Trash2 size={16} />Supprimer
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div className="font-semibold text-gray-800">{risk.risk}</div>
                          <div className={`px-3 py-1 rounded text-sm font-semibold ${risk.impact * risk.prob >= 16 ? 'bg-red-200 text-red-800' : 'bg-orange-200 text-orange-800'}`}>
                            Score: {risk.impact * risk.prob}
                          </div>
                        </div>
                        <div className="flex gap-4 text-sm text-gray-600 mb-2">
                          <span>Impact: {risk.impact}/5</span>
                          <span>Probabilite: {risk.prob}/5</span>
                          <span>Statut: {risk.status}</span>
                        </div>
                        <div className="text-sm text-gray-700">Mitigation: {risk.mitigation}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-semibold mb-3 text-gray-800">Draft reglementaire national</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>Homologation VE obligatoire IEC/ISO/UN ECE</li>
                  <li>Age max importation: VE moins ou egal 5 ans</li>
                  <li>Exonerations: TVA supprimee droits 5% vs 53-67%</li>
                  <li>Standards bornes: AC Type 2 DC CCS2 OCPP 1.6/2.0</li>
                  <li>Creation Agence Nationale Mobilite Electrique ANME</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                <h4 className="font-semibold mb-3 text-gray-800">Evolutions reglementaires 2025-2030</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-semibold text-purple-800">2025-2027</div>
                    <div className="text-gray-700">Decret EV homologation National EV Roadmap</div>
                  </div>
                  <div>
                    <div className="font-semibold text-purple-800">2027-2030</div>
                    <div className="text-gray-700">Bornes obligatoires parkings publics tarifs speciaux subventions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'milestones':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Jalons du projet</h3>
                {editMode && (
                  <button onClick={addMilestone} className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    <Plus size={18} />Ajouter jalon
                  </button>
                )}
              </div>
              
              <div className="space-y-3">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="p-4 rounded-lg border-l-4 border-blue-500 bg-blue-50">
                    {editMode ? (
                      <div className="space-y-3">
                        <div className="grid md:grid-cols-2 gap-3">
                          <input type="text" value={milestone.phase} onChange={(e) => updateMilestone(milestone.id, 'phase', e.target.value)} className="border rounded px-3 py-2" placeholder="Phase" />
                          <input type="text" value={milestone.title} onChange={(e) => updateMilestone(milestone.id, 'title', e.target.value)} className="border rounded px-3 py-2" placeholder="Titre" />
                        </div>
                        <div className="grid md:grid-cols-3 gap-3">
                          <input type="text" value={milestone.tasks} onChange={(e) => updateMilestone(milestone.id, 'tasks', e.target.value)} className="border rounded px-3 py-2" placeholder="Taches" />
                          <select value={milestone.status} onChange={(e) => updateMilestone(milestone.id, 'status', e.target.value)} className="border rounded px-3 py-2">
                            <option>A venir</option>
                            <option>En cours</option>
                            <option>Complete</option>
                          </select>
                          <input type="text" value={milestone.budget} onChange={(e) => updateMilestone(milestone.id, 'budget', e.target.value)} className="border rounded px-3 py-2" placeholder="Budget" />
                        </div>
                        <button onClick={() => deleteMilestone(milestone.id)} className="text-red-600 text-sm flex items-center gap-1">
                          <Trash2 size={16} />Supprimer
                        </button>
                      </div>
                    ) : (
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="text-sm text-blue-600 font-semibold">{milestone.phase}</div>
                            <div className="font-bold text-gray-800 text-lg">{milestone.title}</div>
                          </div>
                          <div className={`px-3 py-1 rounded text-sm font-semibold ${milestone.status === 'Complete' ? 'bg-green-200 text-green-800' : milestone.status === 'En cours' ? 'bg-yellow-200 text-yellow-800' : 'bg-gray-200 text-gray-800'}`}>
                            {milestone.status}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">{milestone.tasks}</div>
                        <div className="text-sm font-semibold text-gray-700">Budget: {milestone.budget} euro</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-4">Plan actions 36 mois - 3 objectifs majeurs</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold mb-2">1. Installer ecosysteme EV complet</div>
                  <div className="text-blue-100">Infrastructure + service + importation</div>
                </div>
                <div>
                  <div className="font-semibold mb-2">2. Gagner segments intensifs</div>
                  <div className="text-blue-100">Taxis flottes Etat</div>
                </div>
                <div>
                  <div className="font-semibold mb-2">3. Creer barrieres entree</div>
                  <div className="text-blue-100">Technologiques contractuelles</div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-3 text-center text-xs">
                <div><div className="text-2xl font-bold">3000+</div><div>EV vendus</div></div>
                <div><div className="text-2xl font-bold">250-300</div><div>Bornes</div></div>
                <div><div className="text-2xl font-bold">3</div><div>Flottes</div></div>
                <div><div className="text-2xl font-bold">1</div><div>Cadre fiscal</div></div>
                <div><div className="text-2xl font-bold">60-70%</div><div>Part marche</div></div>
              </div>
            </div>
          </div>
        );

      case 'notes':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Notes et observations</h3>
              
              <div className="mb-6">
                <textarea value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder="Ajouter une nouvelle note..." className="w-full border rounded-lg px-4 py-3 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button onClick={addNote} className="mt-2 flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Plus size={18} />Ajouter note
                </button>
              </div>

              <div className="space-y-3">
                {notes.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">Aucune note pour le moment. Ajoutez votre premiere note ci-dessus.</div>
                ) : (
                  notes.map((note) => (
                    <div key={note.id} className="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="text-gray-800">{note.text}</div>
                          <div className="text-xs text-gray-500 mt-2">{note.date}</div>
                        </div>
                        <button onClick={() => deleteNote(note.id)} className="text-red-600 ml-4">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Equipe et Gouvernance</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg mb-4">
                <div className="text-center mb-4">
                  <div className="font-bold text-xl text-blue-800">META HOLDING AFRICA</div>
                  <div className="text-sm text-gray-600">Structure holding optimisee fiscalement</div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="font-semibold text-gray-800 mb-2">E-Mobility Togo SA</div>
                    <div className="text-sm text-gray-600">Commercialisation VE bornes operations locales</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="font-semibold text-gray-800 mb-2">EV Import/Distribution</div>
                    <div className="text-sm text-gray-600">Import/export vehicules offshore zone franche</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="font-semibold text-gray-800 mb-2">Infrastructure / Bornes</div>
                    <div className="text-sm text-gray-600">Installation maintenance Togo region</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow">
                    <div className="font-semibold text-gray-800 mb-2">Services Flottes B2B</div>
                    <div className="text-sm text-gray-600">Leasing gestion energetique</div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Fondateurs</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="font-semibold text-gray-800">Mens Maw - CEO</div>
                      <div className="text-sm text-gray-600 mt-1">10+ ans construction projets industriels Afrique Ouest</div>
                      <div className="text-xs text-gray-500 mt-1">META SURFACE AFRICA projets maritimes expertise E-Mobility</div>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="font-semibold text-gray-800">CTO - Responsable Technique</div>
                      <div className="text-sm text-gray-600 mt-1">8+ ans infrastructures electriques systemes recharge EV</div>
                      <div className="text-xs text-gray-500 mt-1">Bornes AC/DC IoT/OCPP maintenance flottes electriques</div>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="font-semibold text-gray-800">CMO - Marketing Partenariats</div>
                      <div className="text-sm text-gray-600 mt-1">7 ans marketing digital B2B mobilite urbaine</div>
                      <div className="text-xs text-gray-500 mt-1">Acquisition clients partenariats strategiques developpement marque</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-gray-800">Cap Table post-levee</h4>
                  <div className="space-y-3">
                    {[
                      { name: 'Mens Maw', pct: 40, color: 'blue' },
                      { name: 'Co-fondateur CTO', pct: 10, color: 'green' },
                      { name: 'Early Advisors', pct: 3, color: 'purple' },
                      { name: 'Investisseurs Seed', pct: 20, color: 'orange' },
                      { name: 'Nouveaux investisseurs', pct: 27, color: 'pink' }
                    ].map((item, idx) => (
                      <div key={idx} className={`flex justify-between items-center p-3 bg-${item.color}-50 rounded`}>
                        <span className="font-semibold text-gray-800">{item.name}</span>
                        <span className={`text-${item.color}-600 font-bold`}>{item.pct}%</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200 text-sm">
                    <div className="font-semibold text-yellow-800">Controle majoritaire</div>
                    <div className="text-yellow-700 text-xs mt-1">Fondateurs gardent plus 50% decisions strategiques</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const SectionIcon = sections[activeSection].icon;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2">MAKAYA E-Mobility</h1>
            <p className="text-blue-100">Business Plan 2025-2030 | Togo - Afrique de Ouest</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setEditMode(!editMode)} className={`flex items-center gap-2 px-4 py-2 rounded-lg ${editMode ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
              {editMode ? <><Save size={18} />Sauvegarder</> : <><Edit2 size={18} />Modifier</>}
            </button>
            <button onClick={exportData} className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700">
              <Download size={18} />Exporter
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-2 py-4">
            {Object.entries(sections).map(([key, section]) => {
              const Icon = section.icon;
              return (
                <button key={key} onClick={() => setActiveSection(key)} className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${activeSection === key ? 'bg-blue-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  <Icon size={18} />
                  <span className="font-medium">{section.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center gap-3 mb-6">
          <SectionIcon size={32} className="text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">{sections[activeSection].title}</h2>
        </div>
        {renderContent()}
      </div>

      <div className="bg-gray-800 text-white mt-12 p-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-300 mb-2">Makaya E-Mobility Togo SA</p>
          <p className="text-gray-400 text-sm">Pionnier de la mobilite electrique durable au Togo</p>
          <div className="mt-4 text-sm text-gray-500">Business Plan 2025-2030 | Confidentiel</div>
        </div>
      </div>
    </div>
  );
}

export default App;