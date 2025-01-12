import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addItem } from '../../store/cart'

import * as S from './styles'
import close from '../../assets/icons/close.png'

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
        portion: 1
      })
    )
  }

  return (
    <>
      <S.Card>
        <div onClick={openModal} style={{ cursor: 'pointer' }}>
          <img
            src={image}
            alt={title}
            onError={(e) => (e.currentTarget.src = '/default-image.jpg')}
          />
        </div>
        <S.Info>
          <S.Title>{title}</S.Title>
        </S.Info>
        <S.Description>{description}</S.Description>
        <S.Button onClick={openModal}>Adicionar ao carrinho</S.Button>
      </S.Card>

      {isModalOpen && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.CloseButton className="close-button" onClick={closeModal}>
              <img src={close} alt="close" />
            </S.CloseButton>
            <S.ModalImage>
              <img
                src={image}
                alt={title}
                onError={(e) => (e.currentTarget.src = '/default-image.jpg')}
              />
            </S.ModalImage>
            <S.ModalInfo>
              <h2>{title}</h2>
              <p>{description}</p>
              <br />
              <p>Serve: {portion}</p>
              <button onClick={handleAddToCart}>
                Adicionar ao carrinho - R$ {price.toFixed(2)}
              </button>
            </S.ModalInfo>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  )
}

export default ProductCard
