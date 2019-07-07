import styled from 'styled-components'


export const CardStyled = styled.div`
  width: 50%;
  height: 100%;
  display:flex;
  overflow: hidden;
  margin-bottom: 5px;

  .card-header{
    width: 70%;
    overflow: hidden;
  }

  .card-header img{
    width: 100%;
    border-radius: 5px;
  }

  .card-body{
    padding: 15px 15px;
    width: 100%;
    line-height: 1.5;
  }

  .card-body h1{
    font-size: 20px;
    color: #fff;
    text-transform:uppercase;
  }

  .card-body .lead{
    color: #aaaaaa;
    font-size: 12px;
    font-weight: bold;
  }

  .card-body .card-plataforms{ 
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .card-plataforms p{
    background: #044b88;
    padding: 5px;
    margin: 2px 2px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    border-radius: 8px;
    transition: all 0.2s ease;
    :hover{
      cursor: pointer;
      transform:scale(1.2,1.2);
    }
  }

  .card-body .card-genres{ 
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .card-genres p{
    background: #f3575e;
    padding: 5px;
    margin: 2px 2px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    border-radius: 8px;
    transition: all 0.2s ease;
    :hover{
      cursor: pointer;
      transform:scale(1.2,1.2);
    }
  }

`
 export default CardStyled;
