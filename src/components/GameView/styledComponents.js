import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #223a5f;
  min-height: 100vh;
  padding: 8px;
  @media screen and (min-width: 768px) {
    align-items: center;
    padding: 44px;
  }
`

export const TitleScoreContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 0px 32px;
  @media screen and (min-width: 768px) {
    width: 60%;
    border-radius: 14px;
  }
`

export const GameNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameName = styled.h1`
  color: #ffffff;
  font-family: 'Bree Serif';
  font-weight: 500;
  font-size: 24px;
  display: flex;
  flex-direction: column;

  span {
    margin: 2px 0px;
  }

  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const ScoreContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 13px 26px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    padding: 14px 52px;
  }
`

export const ScoreHeading = styled.h1`
  color: #223a5f;
  font-family: 'Bree Serif';
  font-weight: 500;
  font-size: 23px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const Score = styled.p`
  color: #223a5f;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 50px;
  margin: 0px;
  @media screen and (min-width: 768px) {
    font-size: 52px;
  }
`

export const GameViewContianer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 40%;
    margin-top: 100px;
  }
`

export const PlayingViewList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0px;
  @media screen and (min-width: 768px) {
    justify-content: center;
  }
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  font-family: 'Bree Serif';
  font-size: 13px;
  color: #223a5f;
  font-weight: 550;
  align-self: flex-end;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    padding: 12px 22px;
    font-size: 15px;
  }
`

export const RulesPopupContainer = styled.div`
  background-color: #ffffff;
  margin: auto;
  display: flex;
  flex-direction: column;
  justiy-content: center;
  align-items: center;
  width: 83%;
  height: 100%;
  padding-bottom: 30px;
  margin-top: 30px;
  max-width: 500px;
`
export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  align-self: flex-end;
  margin: 6px;
`

export const RulesImage = styled.img`
  width: 80%;
  height: 80%;
`

export const GameResultViewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 34px;
  margin-bottom: 34px;
`

export const ChoiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const HeadingImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
`

export const Image = styled.img`
  width: 170px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

export const YouWonHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 600;
`

export const PlayAgainButton = styled.button`
  border: none;
  outline: none;
  cusort: pointer;
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
  padding: 12px 50px;
`
