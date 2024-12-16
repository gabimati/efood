import { useState } from 'react'
import { DeliveryContainer, CloseButton, FormGroup } from './styles'

type Props = {
  fecharPopup: () => void
}

const DeliveryPopup = ({ fecharPopup }: Props) => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    telefone: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    console.log('Dados de Entrega:', formData)
    alert('Compra finalizada com sucesso! Obrigado pela preferência.')
    fecharPopup()
  }

  return (
    <DeliveryContainer>
      <CloseButton onClick={fecharPopup}>X</CloseButton>
      <h2>Dados de Entrega</h2>
      <FormGroup>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="endereco">Endereço</label>
        <input
          type="text"
          id="endereco"
          name="endereco"
          value={formData.endereco}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <label htmlFor="telefone">Telefone</label>
        <input
          type="text"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <button onClick={handleSubmit}>Confirmar</button>
    </DeliveryContainer>
  )
}

export default DeliveryPopup
