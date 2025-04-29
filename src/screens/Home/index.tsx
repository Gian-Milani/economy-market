import { Button } from '@/src/components/Button'
import { Header } from '@/src/components/Header'
import { Highlight } from '@/src/components/Highlight'
import { ListEmpty } from '@/src/components/ListEmpty'
import { PurchaseCard } from '@/src/components/PurchaseCard'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'
import { FlatList } from 'react-native'
import { Container } from './styles'

interface PurchasesProps {
  id: string
  title: string
  date: string
}

export function Home() {
  const [purchases, setPurchases] = useState<PurchasesProps[]>([
    { id: '1', title: 'Compra do mês - Carrefour', date: '25/04/2025' },
    {
      id: '2',
      title: 'Feira de sábado - Mercado Central Teste 123',
      date: '10/12/2024',
    },
  ])

  // const [purchases, setPurchases] = useState<PurchasesProps[]>([])

  const navigation = useNavigation()

  function handleNewPurchase() {
    navigation.navigate('new')
  }

  return (
    <Container>
      <Header />

      <Highlight title='Minhas Compras' subtitle='Acompanhe suas economoias' />

      <FlatList
        data={purchases}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PurchaseCard title={item.title} date={item.date} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message='Vamos as compras? 😄' />}
      />

      <Button title='Nova compra' onPress={handleNewPurchase} />
    </Container>
  )
}
