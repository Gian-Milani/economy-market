import { ButtonIcon } from '../ButtonIcon'
import { Container, Description, DescriptionContainer, Icon } from './styles'

type Props = {
  name: string
  value: string
  onRemove: () => void
}

export function ProductCard({ name, value, onRemove }: Props) {
  return (
    <Container>
      <Icon name='discount' />

      <DescriptionContainer>
        <Description>{name}</Description>
        <Description>{value}</Description>
      </DescriptionContainer>

      <ButtonIcon icon='close' type='SECONDARY' onPress={onRemove} />
    </Container>
  )
}
