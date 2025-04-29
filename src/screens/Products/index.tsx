import { Button } from '@/src/components/Button'
import { Header } from '@/src/components/Header'
import { Highlight } from '@/src/components/Highlight'
import { Input } from '@/src/components/Input'
import { ListEmpty } from '@/src/components/ListEmpty'
import { ProductCard } from '@/src/components/ProductCard'
import { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { Container, Form } from './styles'

interface ProductsProps {
  id: string
  name: string
  value: string
}

export function Products() {
  // const [products, setProducts] = useState<ProductsProps[]>([])
  const [products, setProducts] = useState<ProductsProps[]>([
    {
      id: '1',
      name: 'Arroz',
      value: '10,00',
    },
    {
      id: '2',
      name: 'Feijão',
      value: '15,00',
    },
  ])

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title='Estabelecimento'
        subtitle='adicione produtos ao seu carrinho'
      />

      <Form>
        <Input placeholder='Nome' autoCorrect={false} />

        <Input placeholder='Valor R$' keyboardType='numeric' />

        <Button title='Adicionar' />
      </Form>

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductCard
            name={item.name}
            value={item.value}
            onRemove={() => {}}
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

      {products.length > 0 && (
        <Button title='Esvaziar carrinho' type='SECONDARY' />
      )}
    </Container>
  )
}
