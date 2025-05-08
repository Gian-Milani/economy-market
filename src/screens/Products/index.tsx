import { Button } from '@/src/components/Button'
import { Header } from '@/src/components/Header'
import { Highlight } from '@/src/components/Highlight'
import { Input } from '@/src/components/Input'
import { ListEmpty } from '@/src/components/ListEmpty'
import { Loading } from '@/src/components/Loading'
import { ProductCard } from '@/src/components/ProductCard'
import { ProductStorageDTO } from '@/src/storage/product/ProductStorageDTO'
import { productAddByPurchase } from '@/src/storage/product/productAddByPurchase'
import { productRemoveByPurchase } from '@/src/storage/product/productRemoveByPurchase'
import { productsGetByPurchase } from '@/src/storage/product/productsGetByPurchase'
import { purchaseRemoveByName } from '@/src/storage/purchase/purchaseRemoveByName'
import { AppError } from '@/src/utils/appError'
import { handleChangeValue } from '@/src/utils/formatValue'
import { router, useLocalSearchParams } from 'expo-router'
import { nanoid } from 'nanoid/non-secure'
import { useCallback, useEffect, useState } from 'react'
import { Alert, FlatList, Keyboard } from 'react-native'
import {
  ButtonsContainer,
  Container,
  Form,
  ListContainer,
  NumberOfProducts,
} from './styles'

export function Products() {
  const [products, setProducts] = useState<ProductStorageDTO[]>([])
  const [newProductName, setNewProductName] = useState('')
  const [newProductValue, setNewProductValue] = useState('')
  const [rawValue, setRawValue] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const { purchase } = useLocalSearchParams()

  async function handleAddProduct() {
    if (newProductName.trim().length === 0) {
      return Alert.alert(
        'Novo produto',
        'Informe o nome do produto a ser adicionado.'
      )
    }

    if (newProductValue.trim().length === 0) {
      return Alert.alert(
        'Novo produto',
        'Informe o valor do produto a ser adicionado.'
      )
    }

    const id = nanoid()

    const newProduct = {
      id,
      name: newProductName,
      value: newProductValue,
      purchase,
    }

    try {
      await productAddByPurchase(newProduct, purchase)

      Keyboard.dismiss()

      setNewProductName('')
      setNewProductValue('')

      await fetchProductsByPurchase()
    } catch (error) {
      Alert.alert('Erro inesperado 😪', (error as AppError).message)
    }
  }

  async function fetchProductsByPurchase() {
    try {
      const productsByPurchase = await productsGetByPurchase(purchase)
      setProducts(productsByPurchase)
    } catch (error) {
      Alert.alert(
        'Erro inesperado 😪',
        'Não foi possível carregar os produtos deste carrinho.'
      )
    }
  }

  async function handleProductRemove(productName: string) {
    try {
      await productRemoveByPurchase(productName, purchase)
    } catch (error) {
      Alert.alert('Erro inesperado 😪', 'Não foi possível excluir o produto.')
    }
  }

  async function purchaseRemove() {
    try {
      await purchaseRemoveByName(purchase)
      router.push('/(tabs)/home')
    } catch (error) {
      Alert.alert('Erro inesperado 😪', 'Não foi possível cancelar sua compra.')
    }
  }

  async function handlePurchaseRemove() {
    Alert.alert('Cancelar', 'Deseja cancelar está compra?', [
      { text: 'Não', style: 'cancel' },
      { text: 'Cancelar', onPress: () => purchaseRemove() },
    ])
  }

  function handleFormatValue(value: string) {
    const numeric = value.replace(/\D/g, '')
    setRawValue(numeric)

    const formatted = handleChangeValue(value)
    setNewProductValue(formatted)
  }

  useEffect(
    useCallback(() => {
      fetchProductsByPurchase()
    }, [])
  )

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={purchase}
        subtitle='adicione produtos ao seu carrinho'
      />

      <Form>
        <Input
          placeholder='Nome'
          autoCorrect={false}
          onChangeText={setNewProductName}
          value={newProductName}
        />

        <Input
          placeholder='Valor R$'
          keyboardType='number-pad'
          onChangeText={handleFormatValue}
          value={newProductValue}
        />

        <Button title='Adicionar' onPress={handleAddProduct} />
      </Form>

      <ListContainer>
        <NumberOfProducts>
          Produtos no carrinho: {products.length}
        </NumberOfProducts>

        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ProductCard
              name={item.name}
              value={item.value}
              onRemove={() => {
                handleProductRemove(item.name)
              }}
            />
          )}
          ListEmptyComponent={() => (
            <ListEmpty message='Ainda não há produtos em seu carrinho 😪' />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            { paddingBottom: 100 },
            products.length === 0 && { flex: 1 },
          ]}
        />
      </ListContainer>

      <ButtonsContainer>
        <Button
          title='Voltar ao início'
          type='TERTIARY'
          onPress={() => router.push('/(tabs)/home')}
        />
        {products.length > 0 && (
          <Button
            title='Cancelar compra'
            type='SECONDARY'
            onPress={handlePurchaseRemove}
          />
        )}
      </ButtonsContainer>
    </Container>
  )
}
