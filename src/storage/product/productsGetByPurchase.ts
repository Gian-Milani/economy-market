import AsyncStorage from '@react-native-async-storage/async-storage'

import { PRODUCT_COLLECTION } from '../storageConfig'
import { ProductStorageDTO } from './ProductStorageDTO'

export async function productsGetByPurchase(purchase: string | string[]) {
  try {
    const storage = await AsyncStorage.getItem(
      `${PRODUCT_COLLECTION}-${purchase}`
    )

    const products: ProductStorageDTO[] = storage ? JSON.parse(storage) : []

    return products
  } catch (error) {
    throw error
  }
}
