import React, { useState } from 'react'

interface Property {
  id: string
  title: string
  price: string
  description: string
}

const PropertyManager: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([])
  const [newProperty, setNewProperty] = useState<Omit<Property, 'id'>>({
    title: '',
    price: '',
    description: '',
  })

  const addProperty = () => {
    const id = crypto.randomUUID()
    setProperties([...properties, { id, ...newProperty }])
    setNewProperty({ title: '', price: '', description: '' })
  }

  const removeProperty = (id: string) => {
    setProperties(properties.filter((p) => p.id !== id))
  }

  return (
    <div className="property-manager">
      <h2>Cadastre um imóvel</h2>
      <div className="form">
        <input
          placeholder="Título"
          value={newProperty.title}
          onChange={(e) => setNewProperty({ ...newProperty, title: e.target.value })}
        />
        <input
          placeholder="Preço"
          value={newProperty.price}
          onChange={(e) => setNewProperty({ ...newProperty, price: e.target.value })}
        />
        <textarea
          placeholder="Descrição"
          value={newProperty.description}
          onChange={(e) =>
            setNewProperty({ ...newProperty, description: e.target.value })
          }
        />
        <button onClick={addProperty}>Adicionar</button>
      </div>

      <h2>Imóveis cadastrados</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <strong>{property.title}</strong> - {property.price}
            <p>{property.description}</p>
            <button onClick={() => removeProperty(property.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PropertyManager
