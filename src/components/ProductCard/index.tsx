import { useState } from 'react'
import { useDispatch } from 'react-redux'
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
import { addItem } from '../../store/cart'
import close from '../../assets/icons/close.png'

type Props = {
  image: string
  title: string
  shortDescription: string
  description: string
  price: number
}

const ProductCard = ({
  image,
  title,
  shortDescription,
  description,
  price
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: Math.random(), // ou utilize um id único do produto
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
        <Descricao>{shortDescription}</Descricao>
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
