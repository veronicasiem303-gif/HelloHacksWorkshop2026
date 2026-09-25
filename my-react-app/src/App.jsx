import { useState } from 'react'

function App() {
  const [selectedType, setSelectedType] = useState('')

  function getMatchup(type) {
    //CALL THE BACKEND (API)
    //API CALL WILL GO HERE, AND WE WILL RETURN THE RESPONSE
  return `Fake API response: You are fighting a ${type}-type Pokémon.`;
}

function handleTypeClick(type) {
  const response = getMatchup(type);
  setResult(response);

  return (
    <main className="min-h-screen bg-[#f8f5ed] px-5 py-10 text-[#252525] sm:px-8">
      <section className="mx-auto max-w-2xl">
        <div className="mb-8 flex items-center justify-between border-b-2 border-[#252525] pb-4">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full border-4 border-[#252525] bg-[#ef5350] text-sm font-black text-white">
              P
            </span>
            <span className="text-sm font-bold uppercase tracking-[0.18em]">Battle desk</span>
          </div>
          <span className="text-xs font-semibold text-[#6d6a63]">TYPE MATCHUP 01</span>
        </div>

        <div className="mb-10 max-w-xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#2e7d32]">Choose your opponent</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-6xl">Pokemon Battle Assistant</h1>
          <p className="mt-4 max-w-md text-base leading-7 text-[#6d6a63]">
            Pick a type to see which moves will hit hardest.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['Fire', '🔥', 'bg-[#ef5350]'],
            ['Water', '💧', 'bg-[#42a5f5]'],
            ['Grass', '🌿', 'bg-[#66bb6a]'],
            ['Ground', '⛰️', 'bg-[#c99455]'],
          ].map(([type, icon, color]) => (
            <onClick={() => handleTypeClick(type.name)}
              className={`group flex min-h-32 flex-col items-start justify-between rounded-2xl border-2 border-[#252525] p-4 text-left shadow-[3px_3px_0_#252525] transition-transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#f4c542]/70 ${color}`}
              key={type}
              onClick={() => setSelectedType(type)}
              type="button"
            >
              <span className="text-3xl" aria-hidden="true">{icon}</span>
              <span className="text-lg font-black text-white">{type}</span>
            </button>
          ))}
        </div>

        <p className="mt-10 border-l-4 border-[#f4c542] pl-4 text-sm text-[#6d6a63]">
          {selectedType || 'Select a type to start your matchup.'}
        </p>
      </section>
    </main>
  )
}

export default App
