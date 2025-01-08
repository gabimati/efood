import styled from 'styled-components'
import { cores } from '../../styles/GlobalStyles'

export const Card = styled.div`
  width: 100%;
  max-width: 472px;
  margin: 0 auto;
  color: ${cores.salmao};
  position: relative;
  border: solid 1px ${cores.salmao};
  background-color: ${cores.branca};

  img {
    max-width: 100%;
  }
`

export const ImgContainer = styled.div`
  width: 100%;
  height: 217px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Container = styled.div`
  padding: 8px;
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const AvaliationTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;

  img {
    padding-left: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  display: block;
  padding: 16px 0;
  line-height: 22px;
`

export const Category = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;
  display: flex;
  gap: 5px;
`

export const Button = styled.button`
  background-color: ${cores.salmao};
  color: ${cores.bege};
  font-size: 14px;
  text-align: center;
  border: none;
  padding: 3px 8px;
  cursor: pointer;
`
