import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import ChoiceImage from '../ChoiceImage'
import {
  AppContainer,
  TitleScoreContainer,
  GameNameContainer,
  GameName,
  ScoreContainer,
  ScoreHeading,
  Score,
  GameViewContainer,
  PlayingViewList,
  RulesButton,
  RulesPopupContainer,
  CloseButton,
  RulesImage,
  GameResultViewContainer,
  ChoiceContainer,
  HeadingImageContainer,
  Heading,
  Image,
  YouWonHeading,
  PlayAgainButton,
} from './styledComponents'

const rules = {
  ROCK: 'SCISSORS',
  SCISSORS: 'PAPER',
  PAPER: 'ROCK',
}

class GameView extends Component {
  state = {
    score: 0,
    showGameResult: false,
    youChoiceImage: '',
    opponentChoiceImage: '',
    gameResult: '',
  }

  onClickPlayAgain = () => {
    this.setState({
      showGameResult: false,
    })
  }

  renderGameResultView = () => {
    const {youChoiceImage, opponentChoiceImage, gameResult} = this.state
    return (
      <GameResultViewContainer>
        <ChoiceContainer>
          <HeadingImageContainer>
            <Heading>YOU</Heading>
            <Image src={youChoiceImage} alt="Your choice" />
          </HeadingImageContainer>
          <HeadingImageContainer>
            <Heading>OPPONENT</Heading>
            <Image src={opponentChoiceImage} alt="Opponent choice" />
          </HeadingImageContainer>
        </ChoiceContainer>
        <YouWonHeading>{gameResult}</YouWonHeading>
        <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  getGameResult = (you, opponent) => {
    if (you === opponent) return 'IT IS DRAW'

    return rules[you] === opponent ? 'YOU WON' : 'YOU LOSE'
  }

  updateYouChoiceImage = id => {
    const {choicesList} = this.props
    const {score} = this.state

    const userChoice = choicesList.find(choice => choice.id === id)
    const youChoiceId = userChoice.id
    const youChoiceImg = userChoice.imageUrl

    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[randomIndex]
    const opponentChoiceId = opponentChoice.id
    const opponentChoiceImg = opponentChoice.imageUrl

    const result = this.getGameResult(youChoiceId, opponentChoiceId)

    let updatedScore = score
    if (result === 'YOU WON') {
      updatedScore += 1
    } else if (result === 'YOU LOSE') {
      updatedScore -= 1
    }

    this.setState({
      youChoiceImage: youChoiceImg,
      opponentChoiceImage: opponentChoiceImg,
      gameResult: result,
      showGameResult: true,
      score: updatedScore,
    })
  }

  renderPlayingView = () => {
    const {choicesList} = this.props
    return (
      <PlayingViewList>
        {choicesList.map(eachChocie => (
          <ChoiceImage
            key={eachChocie.id}
            choiceDetails={eachChocie}
            updateYouChoiceImage={this.updateYouChoiceImage}
          />
        ))}
      </PlayingViewList>
    )
  }

  render() {
    const {score, showGameResult} = this.state
    return (
      <AppContainer>
        <TitleScoreContainer>
          <GameNameContainer>
            <GameName>
              <span>ROCK</span>
              <span>PAPER</span>
              <span>SCISSORS</span>
            </GameName>
          </GameNameContainer>
          <ScoreContainer>
            <ScoreHeading>Score</ScoreHeading>
            <Score>{score}</Score>
          </ScoreContainer>
        </TitleScoreContainer>
        <GameViewContainer>
          {showGameResult
            ? this.renderGameResultView()
            : this.renderPlayingView()}
        </GameViewContainer>
        <Popup modal trigger={<RulesButton type="button">RULES</RulesButton>}>
          {close => (
            <RulesPopupContainer>
              <CloseButton
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <RiCloseLine size={16} />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </RulesPopupContainer>
          )}
        </Popup>
      </AppContainer>
    )
  }
}

export default GameView
