import styled from 'styled-components'


export const CardStyled = styled.div`
  width: 33%;
  height: auto;
  display:flex;
  flex-wrap: wrap;
  overflow: hidden;

  .card-header{
    width: 100%;
    overflow: hidden;
  }

  .card-header img{
    width: 100%;
    border-radius: 5px;
  }

  .card-body h1{
    text-transform: uppercase;
    font-size: 14px;
  }

  .card-body{
    width: 100%;
    border-bottom: 1px solid #F0FFF1;
    display:flex;
    flex-wrap: wrap;
  }

  .card-body .lead{
    color: #3f3f3;
    font-size: 12px;
  }

  .card-body p{
    padding: 2px 2px;
    margin: 1px 1px;
    text-transform: uppercase;
    font-size: 9px;
    width: 100%;
    color: #0a0a0a;
  }

  .card-body .plataforms{
    width: 20%;
    background-color: #5603AD;
    padding: 5px 5px;
    text-transform: uppercase;
    color: white;
    text-align: center;
    border-radius: 8px;
  }

  .card-body .genres{
    width: 20%;
    padding: 5px 5px;
    text-transform: uppercase;
    color: white;
    text-align: center;
    border-radius: 8px;
    background-color: #8367C7;
  }

  .card-footer{
    padding: 5px;
    width: 50%;
  }
`
 export default CardStyled;
