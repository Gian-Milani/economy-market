import { BackButton, BackIcon, BagIcon, Container } from './styles'

type Props = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}

      <BagIcon weight='fill' />
    </Container>
  )
}
