import { TouchableOpacityProps } from 'react-native'
import { Container, Content, Icon, PurchaseDate, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  date: string
}

export function PurchaseCard({ title, date, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Content>
        <Title numberOfLines={2}>{title}</Title>
        <PurchaseDate>{date}</PurchaseDate>
      </Content>
    </Container>
  )
}
