import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import InputMask from 'react-input-mask'

import { usePurchaseMutation } from '../../service/api'
import { RootState } from '../../store'
import { clearCart, removeItem } from '../../store/cart'

import * as S from './styles'
import binIcon from '../../assets/icons/bin.png'

type FieldName =
  | 'nome'
  | 'endereco'
  | 'cidade'
  | 'cep'
  | 'numero'
  | 'complemento'
  | 'cardName'
  | 'cardNumber'
  | 'cardCvv'
  | 'cardMonthExpiry'
  | 'cardYearExpiry'

type FormData = {
  [key in FieldName]: string
}

type ErrorState = {
  [key in FieldName]: boolean
}

const validateField = (name: FieldName, value: string): boolean => {
  switch (name) {
    case 'nome':
    case 'endereco':
    case 'cidade':
      return value.trim().length >= 3
    case 'cep':
      return /^\d{5}-\d{3}$/.test(value)
    case 'numero':
      return value.trim().length > 0
    case 'cardName':
      return value.trim().length >= 5
    case 'cardNumber':
      return /^\d{4} \d{4} \d{4} \d{4}$/.test(value)
    case 'cardCvv':
      return /^\d{3}$/.test(value)
    case 'cardMonthExpiry':
      return /^(0[1-9]|1[0-2])$/.test(value)
    case 'cardYearExpiry':
      return /^\d{2}$/.test(value)
    default:
      return true
  }
}

type Props = {
  fecharCarrinho: () => void
}

const CartPopup = ({ fecharCarrinho }: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()
  const [currentStep, setCurrentStep] = useState<
    'cart' | 'delivery' | 'payment' | 'confirmation'
  >('cart')

  const [purchase, { isSuccess, data: purchaseData }] = usePurchaseMutation()
  const total = cartItems.reduce((acc, item) => acc + item.price, 0)

  const [formData, setFormData] = useState<FormData>({
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: '',
    cardName: '',
    cardNumber: '',
    cardCvv: '',
    cardMonthExpiry: '',
    cardYearExpiry: ''
  })

  const [errors, setErrors] = useState<ErrorState>({
    nome: false,
    endereco: false,
    cidade: false,
    cep: false,
    numero: false,
    complemento: false,
    cardName: false,
    cardNumber: false,
    cardCvv: false,
    cardMonthExpiry: false,
    cardYearExpiry: false
  })

  const [emptyCartError, setEmptyCartError] = useState(false)

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setErrors((prev) => ({
      ...prev,
      [name]: !validateField(name as FieldName, value)
    }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleConfirmOrder = async () => {
    const orderPayload = {
      products: cartItems.map((item) => ({
        id: item.id,
        price: item.price
      })),
      delivery: {
        receiver: formData.nome,
        address: {
          description: formData.endereco,
          city: formData.cidade,
          zipCode: formData.cep,
          number: Number(formData.numero),
          complement: formData.complemento
        }
      },
      payment: {
        card: {
          name: formData.cardName,
          number: formData.cardNumber,
          code: Number(formData.cardCvv),
          expires: {
            month: Number(formData.cardMonthExpiry),
            year: Number(formData.cardYearExpiry)
          }
        }
      }
    }

    try {
      await purchase(orderPayload).unwrap()
      dispatch(clearCart())
      setCurrentStep('confirmation')
    } catch (error) {
      console.error('Erro ao processar o pedido:', error)
    }
  }

  const isFormValid = (fields: FieldName[]): boolean => {
    const validationErrors = fields.reduce(
      (acc: Partial<ErrorState>, field) => {
        acc[field] = !validateField(field, formData[field])
        return acc
      },
      {}
    )
    setErrors((prev) => ({
      ...prev,
      ...validationErrors
    }))
    return !Object.values(validationErrors).some((error) => error)
  }

  return (
    <>
      <S.Overlay onClick={fecharCarrinho} />
      <S.CartContainer>
        <S.CartHeader>
          <h2>
            {currentStep === 'cart' && ''}
            {currentStep === 'delivery' && 'Entrega'}
            {currentStep === 'payment' &&
              `Pagamento - Valor a pagar R$ ${total.toFixed(2)}`}
            {currentStep === 'confirmation' &&
              `Pedido realizado${
                isSuccess && purchaseData?.orderId
                  ? ` - ${purchaseData.orderId}`
                  : ''
              }`}
          </h2>
          <S.CloseButton onClick={fecharCarrinho}>X</S.CloseButton>
        </S.CartHeader>

        {currentStep === 'cart' && (
          <>
            <S.CartBody>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <S.CartItemCard key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      <p>R$ {item.price.toFixed(2)}</p>
                    </div>
                    <S.RemoveButton
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      <img src={binIcon} alt="Remover" />
                    </S.RemoveButton>
                  </S.CartItemCard>
                ))
              ) : (
                <p>Seu carrinho está vazio!</p>
              )}
              {emptyCartError && (
                <h3>O carrinho está vazio. Adicione itens para continuar.</h3>
              )}
              <S.CartFooter>
                <div>
                  <h3>Valor total </h3>
                  <h3>R$ {total.toFixed(2)}</h3>
                </div>
                <button
                  onClick={() => {
                    if (cartItems.length === 0) {
                      setEmptyCartError(true)
                    } else {
                      setEmptyCartError(false)
                      setCurrentStep('delivery')
                    }
                  }}
                >
                  Continuar com a entrega
                </button>
              </S.CartFooter>
            </S.CartBody>
          </>
        )}

        {currentStep === 'delivery' && (
          <S.CartBody>
            <S.FormGroup>
              <label htmlFor="nome">Quem irá receber</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={errors.nome ? 'has-error' : ''}
              />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="endereco">Endereço</label>
              <input
                type="text"
                id="endereco"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={errors.endereco ? 'has-error' : ''}
              />
            </S.FormGroup>
            <S.FormGroup>
              <label htmlFor="cidade">Cidade</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={errors.cidade ? 'has-error' : ''}
              />
            </S.FormGroup>
            <S.Row>
              <S.FormGroup>
                <label htmlFor="cep">CEP</label>
                <InputMask
                  mask="99999-999"
                  id="cep"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={errors.cep ? 'has-error' : ''}
                />
              </S.FormGroup>
              <S.FormGroup>
                <label htmlFor="numero">Número</label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  value={formData.numero}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={errors.numero ? 'has-error' : ''}
                />
              </S.FormGroup>
            </S.Row>
            <S.FormGroup>
              <label htmlFor="complemento">Complemento</label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                value={formData.complemento}
                onChange={handleChange}
              />
            </S.FormGroup>
            <S.CartFooter>
              <button
                onClick={() => {
                  if (
                    isFormValid(['nome', 'endereco', 'cidade', 'cep', 'numero'])
                  )
                    setCurrentStep('payment')
                }}
              >
                Continuar com o pagamento
              </button>
              <button onClick={() => setCurrentStep('cart')}>
                Voltar ao carrinho
              </button>
            </S.CartFooter>
          </S.CartBody>
        )}

        {currentStep === 'payment' && (
          <S.CartBody>
            <S.FormGroup>
              <label htmlFor="cardName">Nome no Cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className={errors.cardName ? 'has-error' : ''}
              />
            </S.FormGroup>
            <S.Row>
              <S.FormGroup>
                <label htmlFor="cardNumber">Número do Cartão</label>
                <InputMask
                  mask="9999 9999 9999 9999"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={errors.cardNumber ? 'has-error' : ''}
                />
              </S.FormGroup>
              <S.FormGroup>
                <label htmlFor="cardCvv">CVV</label>
                <InputMask
                  mask="999"
                  id="cardCvv"
                  name="cardCvv"
                  value={formData.cardCvv}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={errors.cardCvv ? 'has-error' : ''}
                />
              </S.FormGroup>
            </S.Row>
            <S.Row>
              <S.FormGroup>
                <label htmlFor="cardMonthExpiry">Mês de vencimento</label>
                <InputMask
                  mask="99"
                  id="cardMonthExpiry"
                  name="cardMonthExpiry"
                  value={formData.cardMonthExpiry}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={errors.cardMonthExpiry ? 'has-error' : ''}
                />
              </S.FormGroup>
              <S.FormGroup>
                <label htmlFor="cardYearExpiry">Ano de vencimento</label>
                <InputMask
                  mask="99"
                  id="cardYearExpiry"
                  name="cardYearExpiry"
                  value={formData.cardYearExpiry}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className={errors.cardYearExpiry ? 'has-error' : ''}
                />
              </S.FormGroup>
            </S.Row>
            <S.CartFooter>
              <button
                onClick={() => {
                  if (
                    isFormValid([
                      'cardName',
                      'cardNumber',
                      'cardCvv',
                      'cardMonthExpiry',
                      'cardYearExpiry'
                    ])
                  )
                    handleConfirmOrder()
                }}
              >
                Finalizar pagamento
              </button>
              <button onClick={() => setCurrentStep('delivery')}>
                Voltar para edição de endereço
              </button>
            </S.CartFooter>
          </S.CartBody>
        )}

        {currentStep === 'confirmation' && (
          <S.CartBody>
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
            <S.CartFooter>
              <button onClick={fecharCarrinho}>Concluir</button>
            </S.CartFooter>
          </S.CartBody>
        )}
      </S.CartContainer>
    </>
  )
}

export default CartPopup
