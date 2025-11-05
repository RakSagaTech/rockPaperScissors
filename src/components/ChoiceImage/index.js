import {ImageItem, Button, Image} from './styledComponents'

const ChoiceImage = props => {
  const {choiceDetails} = props
  const {id, imageUrl} = choiceDetails
  return (
    <ImageItem>
      <Button type="button" data-testid={`${id.toLowerCase()}Button`}>
        <Image src={imageUrl} alt={id} />
      </Button>
    </ImageItem>
  )
}

export default ChoiceImage
