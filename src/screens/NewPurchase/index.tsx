import { Button } from '@/src/components/Button'
import { Header } from '@/src/components/Header'
import { Highlight } from '@/src/components/Highlight'
import { Input } from '@/src/components/Input'
import { purchaseCreate } from '@/src/storage/purchase/purchaseCreate'
import { formatDate } from '@/src/utils/formatDate'
import { router } from 'expo-router'
import { nanoid } from 'nanoid/non-secure'
import { useState } from 'react'
import { Alert } from 'react-native'
import { Container, Content, Icon } from './styles'

export function NewPurchase() {
  const [purchase, setPurchase] = useState('')

  async function handleNew() {
    try {
      if (purchase.trim().length === 0) {
        return Alert.alert('Nova compra', 'Informe o nome do estabelecimento.')
      }

      const id = nanoid()
      const today = new Date().toISOString().split('T')[0]
      const date = formatDate(today)

      await purchaseCreate({ id, title: purchase, date })

      router.push({
        pathname: '/(modals)/products',
        params: { purchase },
      })
    } catch (error) {
      Alert.alert('Erro inesperado', 'Erro ao criar uma nova compra.')
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon name='cart-plus' />

        <Highlight
          title='Nova compra'
          subtitle='Pegue seu carrinho e adicione produtos'
        />

        <Input
          placeholder='Digite o nome do estabelecimento'
          onChangeText={setPurchase}
        />

        <Button
          title='Começar minha compra'
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  )
}
