import styled from 'styled-components'

import { breakpoints, cores } from '../../styles/GlobalStyles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 348px;
  color: ${cores.begeEscuro};
  position: relative;
  background-color: ${cores.salmao};
  padding: 8px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 100%;
  }
`
export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  font-size: 16px;
  padding: 8px 0;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  display: block;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  flex-grow: 1;
  margin-bottom: 8px;
`

export const Button = styled.button`
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
  margin-top: auto;

  @media (max-width: ${breakpoints.tablet}) {
    height: 36px;
    font-size: 14px;
    padding: 8px;
  }
`

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  background-color: ${cores.salmao};
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 32px;
  gap: 24px;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 16px;
  }
`

export const ModalImage = styled.div`
  width: 50%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%; /* Imagem ocupa toda a largura em telas menores */
  }
`

export const ModalInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${cores.bege};

  h2 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  button {
    background-color: ${cores.begeEscuro};
    color: ${cores.salmao};
    margin: 16px 0;
    font-size: 14px;
    padding: 4px 8px;
    border: none;
    width: fit-content;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      text-align: center;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    text-align: center;
  }
`

export const CloseButton = styled.a`
  position: absolute;
  width: 16px;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 10;

  img {
    width: 100%;
  }
`
