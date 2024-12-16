import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyles'

export const Card = styled.div`
  width: 100%;
  color: ${cores.begeEscuro};
  position: relative;
  background-color: ${cores.salmao};
  padding: 8px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Titulo = styled.h3`
  font-size: 18px;
  padding-top: 8px;
  font-weight: bold;
`

export const Descricao = styled.p`
  font-size: 14px;
  display: block;
  padding: 16px 0;
  line-height: 22px;
`

export const Botao = styled.button`
  width: 100%;
  height: 24px;
  background-color: ${cores.begeEscuro};
  color: ${cores.salmao};
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border: none;
  padding: 4px;
  cursor: pointer;
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  position: relative;
  background-color: ${cores.salmao};
  margin: 170px;
  display: flex;
  gap: 24px;
  padding: 32px;
`

export const ModalImage = styled.div`
  width: 344px;
  height: 344px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ModalInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${cores.bege};

  h2 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`

export const Button = styled.button`
  background-color: ${cores.begeEscuro};
  color: ${cores.salmao};
  margin: 16px 0;
  font-size: 14px;
  padding: 4px 8px;
  border: none;
  width: fit-content;
`

export const CloseButton = styled.a`
  width: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;

  img {
    width: 100%;
  }
`
