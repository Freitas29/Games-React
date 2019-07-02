import styled from 'styled-components'

export const ButtonStyled = styled.button`
    width: 100%;
    height:auto;
    text-align:center;
    border: 5px solid #5603AD;
    border-radius: 50px;
    padding: 15px 15px;
    background-color: #5603AD;
    text-transform: uppercase;
    color:#fff;
    transition: all 0.5s ease;
    outline:none;

    :hover{
      cursor: pointer;
      border: 5px solid #fff;
    }
`

export default ButtonStyled;
