import { router, useNavigation } from 'expo-router'
import { BackButton, BackIcon, BagIcon, Container } from './styles'

type Props = {
  showBackButton?: boolean
}

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation()

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={navigation.goBack}>
          <BackIcon />
        </BackButton>
      )}

      <BagIcon weight='fill' />
    </Container>
  )
}
