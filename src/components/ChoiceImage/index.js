import {ImageItem, Button, Image} from './styledComponents'

const ChoiceImage = props => {
  const {choiceDetails, updateYouChoiceImage} = props
  const {id, imageUrl} = choiceDetails

  const onClickImage = () => {
    updateYouChoiceImage(id)
  }
  return (
    <ImageItem>
      <Button
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onClickImage}
      >
        <Image src={imageUrl} alt={id} />
      </Button>
    </ImageItem>
  )
}

export default ChoiceImage
