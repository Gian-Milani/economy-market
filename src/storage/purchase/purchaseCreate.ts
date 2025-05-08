import AsyncStorage from '@react-native-async-storage/async-storage'
import { PURCHASE_COLLECTION } from '../storageConfig'
import { PurchaseStorageDTO } from './PurchaseStorageDTO'
import { purchaseGetAll } from './purchaseGetAll'

export async function purchaseCreate(newPurchase: PurchaseStorageDTO) {
  try {
    const storedPurchases = await purchaseGetAll()

    const storage = JSON.stringify([...storedPurchases, newPurchase])

    await AsyncStorage.setItem(PURCHASE_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
