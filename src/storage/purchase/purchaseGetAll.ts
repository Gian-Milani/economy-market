import AsyncStorage from '@react-native-async-storage/async-storage'
import { PURCHASE_COLLECTION } from '../storageConfig'
import { PurchaseStorageDTO } from './PurchaseStorageDTO'

export async function purchaseGetAll() {
  try {
    const storage = await AsyncStorage.getItem(PURCHASE_COLLECTION)

    const purchases: PurchaseStorageDTO[] = storage ? JSON.parse(storage) : []

    return purchases
  } catch (error) {
    throw error
  }
}
