import AsyncStorage from '@react-native-async-storage/async-storage'
import { PRODUCT_COLLECTION } from '../storageConfig'
import { productsGetByPurchase } from './productsGetByPurchase'

export async function productRemoveByPurchase(
  productName: string,
  purchase: string | string[]
) {
  try {
    const storage = await productsGetByPurchase(purchase)

    const filtered = storage.filter(product => product.name !== productName)

    const products = JSON.stringify(filtered)

    await AsyncStorage.setItem(`${PRODUCT_COLLECTION}-${purchase}`, products)
  } catch (error) {
    throw error
  }
}
