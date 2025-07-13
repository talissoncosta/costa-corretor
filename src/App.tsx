import React from 'react'
import PropertyManager from './components/PropertyManager'

const App: React.FC = () => {
  return (
    <div className="app-container">
      <h1>Costa Corretor - Gerenciador de Imóveis</h1>
      <PropertyManager />
    </div>
  )
}

export default App
