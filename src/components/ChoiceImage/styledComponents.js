import styled from 'styled-components'

export const ImageItem = styled.li`
  width: 46%;
  background-color: transparent;
  align-self: center;
  margin-top: 34px;

  @media screen and (min-width: 768px) {
    width: 35%;
    margin: 0px;
  }
`

export const Button = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px;
  background-color: transparent;
`

export const Image = styled.img`
  width: 100%;
`
