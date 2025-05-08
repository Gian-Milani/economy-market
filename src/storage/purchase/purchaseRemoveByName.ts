import AsyncStorage from '@react-native-async-storage/async-storage'
import { PRODUCT_COLLECTION, PURCHASE_COLLECTION } from '../storageConfig'
import { purchaseGetAll } from './purchaseGetAll'

export async function purchaseRemoveByName(purchaseDeleted: string | string[]) {
  try {
    const storedPurchases = await purchaseGetAll()

    const purchases = storedPurchases.filter(
      purchase => purchase.title !== purchaseDeleted
    )

    await AsyncStorage.setItem(PURCHASE_COLLECTION, JSON.stringify(purchases))
    await AsyncStorage.removeItem(`${PRODUCT_COLLECTION}-${purchaseDeleted}`)
  } catch (error) {
    throw error
  }
}
