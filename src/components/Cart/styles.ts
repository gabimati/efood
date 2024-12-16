import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  padding: 8px;

  background-color: ${cores.salmao};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  color: ${cores.begeEscuro};
`

export const CartHeader = styled.div`
  margin-top: 32px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${cores.salmao};

  h2 {
    font-size: 16px;
  }
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  color: ${cores.bege};
  cursor: pointer;
`

export const CartBody = styled.div`
  p {
    font-size: 14px;
    line-height: 22px;
  }
`

export const CartItemCard = styled.div`
  display: flex;
  margin-bottom: 16px;
  background-color: ${cores.begeEscuro};
  color: ${cores.salmao};
  padding: 8px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 16px;
  }

  div {
    display: flex;
    flex-direction: column;

    h3 {
      margin: 0 0 8px;
      font-size: 18px;
    }

    p {
      margin: 0 0 8px;
      font-size: 14px;
    }

    button {
      background: none;
      border: none;
      color: ${cores.salmao};
      font-size: 14px;
      cursor: pointer;
      align-self: flex-start;
    }
  }
`

export const CartFooter = styled.div`
  background: ${cores.salmao};
  margin-top: 24px;

  div {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
  }

  h3 {
    font-size: 14px;
  }

  button {
    width: 100%;
    background: ${cores.begeEscuro};
    color: ${cores.salmao};
    border: none;
    padding: 4px 0;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }
`

export const FormGroup = styled.div`
  margin-bottom: 8px;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 8px;
    font-size: 14px;
    border: none;
    background-color: ${cores.begeEscuro};
    color: #4b4b4b;
    font-weight: bold;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 16px;

  ${FormGroup} {
    flex: 1;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`
