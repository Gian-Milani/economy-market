import AsyncStorage from '@react-native-async-storage/async-storage'

import { AppError } from '@/src/utils/appError'
import { PRODUCT_COLLECTION } from '../storageConfig'
import { ProductStorageDTO } from './ProductStorageDTO'
import { productsGetByPurchase } from './productsGetByPurchase'

export async function productAddByPurchase(
  newProduct: ProductStorageDTO,
  purchase: string | string[]
) {
  try {
    const storedProducts = await productsGetByPurchase(purchase)

    const purchaseAlreadyExists = storedProducts.filter(
      product => product.name === newProduct.name
    )

    if (purchaseAlreadyExists.length > 0) {
      throw new AppError('Este produto já foi adicionado ao seu carrinho.')
    }

    const storage = JSON.stringify([...storedProducts, newProduct])

    await AsyncStorage.setItem(`${PRODUCT_COLLECTION}-${purchase}`, storage)
  } catch (error) {
    throw error
  }
}
