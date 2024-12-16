import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { clearCart, removeItem } from '../../store/cart'
import {
  CartContainer,
  CartHeader,
  CartBody,
  CartFooter,
  FormGroup,
  CloseButton,
  CartItemCard,
  Row,
  Overlay
} from './styles'

type Props = {
  fecharCarrinho: () => void
}

const CartPopup = ({ fecharCarrinho }: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()
  const [currentStep, setCurrentStep] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmation'
  >('cart')

  const total = cartItems.reduce((acc, item) => acc + item.price, 0)

  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleConfirmOrder = () => {
    setCurrentStep('confirmation')
    dispatch(clearCart())
  }

  return (
    <>
      <Overlay onClick={fecharCarrinho} />
      <CartContainer>
        <CartHeader>
          <h2>
            {currentStep === 'cart' && ''}
            {currentStep === 'delivery' && 'Entrega'}
            {currentStep === 'payment' &&
              `Pagamento - Valor a pagar R$ ${total.toFixed(2)}`}
            {currentStep === 'confirmation' && 'Pedido realizado'}
          </h2>
          <CloseButton onClick={fecharCarrinho}>X</CloseButton>
        </CartHeader>

        {currentStep === 'cart' && (
          <>
            <CartBody>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItemCard key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>R$ {item.price.toFixed(2)}</p>
                      <button onClick={() => dispatch(removeItem(item.id))}>
                        Remover
                      </button>
                    </div>
                  </CartItemCard>
                ))
              ) : (
                <p>Seu carrinho está vazio!</p>
              )}
              <CartFooter>
                <div>
                  <h3>Valor total </h3>
                  <h3>R$ {total.toFixed(2)}</h3>
                </div>
                <button onClick={() => setCurrentStep('delivery')}>
                  Continuar com a entrega
                </button>
              </CartFooter>
            </CartBody>
          </>
        )}

        {currentStep === 'delivery' && (
          <CartBody>
            <FormGroup>
              <label htmlFor="nome">Quem irá receber</label>
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
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <Row>
              <FormGroup>
                <label htmlFor="cep">CEP</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="numero">Número</label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </Row>
            <FormGroup>
              <label htmlFor="telefone">Complemento</label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={formData.complemento}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <CartFooter>
              <button onClick={() => setCurrentStep('payment')}>
                Continuar com o pagamento
              </button>
              <button onClick={() => setCurrentStep('cart')}>
                Voltar ao carrinho
              </button>
            </CartFooter>
          </CartBody>
        )}

        {currentStep === 'payment' && (
          <CartBody>
            <FormGroup>
              <label htmlFor="card-name">Nome no Cartão</label>
              <input type="text" id="card-name" name="card-name" required />
            </FormGroup>
            <Row>
              <FormGroup>
                <label htmlFor="card-number">Número do Cartão</label>
                <input
                  type="text"
                  id="card-number"
                  name="card-number"
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="card-cvv">CVV</label>
                <input type="text" id="card-cvv" name="card-cvv" required />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <label htmlFor="card-expiry">Mês de vencimento</label>
                <input
                  type="text"
                  id="card-month-expiry"
                  name="card-month-expiry"
                  required
                />
              </FormGroup>
              <FormGroup>
                <label htmlFor="card-expiry">Ano de vencimento</label>
                <input
                  type="text"
                  id="card-year-expiry"
                  name="card-year-expiry"
                  required
                />
              </FormGroup>
            </Row>
            <CartFooter>
              <button onClick={handleConfirmOrder}>Finalizar pagamento</button>
              <button onClick={() => setCurrentStep('delivery')}>
                Voltar para edição de endereço
              </button>
            </CartFooter>
          </CartBody>
        )}

        {currentStep === 'confirmation' && (
          <CartBody>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <br />
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <br />
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <br />
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <CartFooter>
              <button onClick={fecharCarrinho}>Concluir</button>
            </CartFooter>
          </CartBody>
        )}
      </CartContainer>
    </>
  )
}

export default CartPopup
