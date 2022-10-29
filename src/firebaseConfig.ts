import { initializeApp } from 'firebase/app'
import { initializeAuth, browserLocalPersistence, indexedDBLocalPersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

import { config } from 'config'

const app = initializeApp(config.firebase)

export const auth = initializeAuth(app, {
  persistence: [indexedDBLocalPersistence, browserLocalPersistence]
})

export const db = getFirestore(app)
