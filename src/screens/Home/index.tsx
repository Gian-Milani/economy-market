import { Button } from '@/src/components/Button'
import { Header } from '@/src/components/Header'
import { Highlight } from '@/src/components/Highlight'
import { ListEmpty } from '@/src/components/ListEmpty'
import { Loading } from '@/src/components/Loading'
import { PurchaseCard } from '@/src/components/PurchaseCard'
import { PurchaseStorageDTO } from '@/src/storage/purchase/PurchaseStorageDTO'
import { purchaseGetAll } from '@/src/storage/purchase/purchaseGetAll'
import { useRouter } from 'expo-router'
import { useCallback, useEffect, useState } from 'react'
import { Alert, FlatList } from 'react-native'
import { Container } from './styles'

export function Home() {
  const [purchases, setPurchases] = useState<PurchaseStorageDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const router = useRouter()

  function handleNewPurchase() {
    router.push('/(modals)/new-purchase')
  }

  async function fetchPurchases() {
    try {
      const data = await purchaseGetAll()
      setPurchases(data)
    } catch (error) {
      Alert.alert('Erro inesperado', 'Erro ao carregar suas últimas compras.')
    } finally {
    }
  }

  function handleOpenPurchase(purchase: string) {
    router.push({
      pathname: '/(modals)/products',
      params: { purchase },
    })
  }

  useEffect(
    useCallback(() => {
      fetchPurchases()
    }, [])
  )

  return (
    <Container>
      <Header />

      <Highlight title='Minhas Compras' subtitle='Acompanhe suas economoias' />

      <FlatList
        data={purchases}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <PurchaseCard
            title={item.title}
            date={item.date}
            onPress={() => handleOpenPurchase(item.title)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1 }}
        ListEmptyComponent={() => <ListEmpty message='Vamos as compras? 😄' />}
      />

      <Button title='Nova compra' onPress={handleNewPurchase} />
    </Container>
  )
}
