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
  GameViewContianer,
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

class GameView extends Component {
  state = {
    score: 0,
    showGameResult: true,
    youChoiceImage: '',
    opponentChoiceImage: '',
  }

  renderGameResultView = () => {
    const {youChoiceImage, opponentChoiceImage} = this.state
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
        <YouWonHeading>YOU WON</YouWonHeading>
        <PlayAgainButton>PLAY AGAIN</PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderPlayingView = () => {
    const {choicesList} = this.props
    return (
      <PlayingViewList>
        {choicesList.map(eachChocie => (
          <ChoiceImage key={eachChocie.id} choiceDetails={eachChocie} />
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
        <GameViewContianer>
          {showGameResult
            ? this.renderGameResultView()
            : this.renderPlayingView()}
        </GameViewContianer>
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
