import { Button } from '@/src/components/Button'
import { Header } from '@/src/components/Header'
import { Highlight } from '@/src/components/Highlight'
import { Input } from '@/src/components/Input'
import { Container, Content, Icon } from './styles'

export function NewPurchase() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon name='cart-plus' />

        <Highlight
          title='Nova compra'
          subtitle='Pegue seu carrinho e adicione produtos'
        />

        <Input placeholder='Digite o nome do estabelecimento' />

        <Button title='Começar minha compra' style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}
