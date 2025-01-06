import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cart'
import close from '../../assets/icons/close.png'

import {
  Card,
  Titulo,
  Descricao,
  Info,
  Botao,
  ModalOverlay,
  ModalContent,
  ModalImage,
  ModalInfo,
  CloseButton,
  Button
} from './styles'

type Props = {
  image: string
  title: string
  description: string
  portion: string
  price: number
}

const ProductCard = ({ image, title, description, portion, price }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: Math.random(),
        image,
        title,
        price,
        quantity: 1
      })
    )
  }

  return (
    <>
      <Card>
        <div onClick={openModal} style={{ cursor: 'pointer' }}>
          <img
            src={image}
            alt={title}
            onError={(e) => (e.currentTarget.src = '/default-image.jpg')}
          />
        </div>
        <Info>
          <Titulo>{title}</Titulo>
        </Info>
        <Descricao>{description}</Descricao>
        <Botao onClick={handleAddToCart}>Adicionar ao carrinho</Botao>
      </Card>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton className="close-button" onClick={closeModal}>
              <img src={close} alt="close" />
            </CloseButton>
            <ModalImage>
              <img
                src={image}
                alt={title}
                onError={(e) => (e.currentTarget.src = '/default-image.jpg')}
              />
            </ModalImage>
            <ModalInfo>
              <h2>{title}</h2>
              <p>{description}</p>
              <br />
              <p>
                <strong>Porção:</strong> {portion}
              </p>
              <Button onClick={handleAddToCart}>
                Adicionar ao carrinho - R$ {price.toFixed(2)}
              </Button>
            </ModalInfo>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
}

export default ProductCard
