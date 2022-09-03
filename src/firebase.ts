import { initializeApp } from 'firebase/app'
import { initializeAuth, browserLocalPersistence, indexedDBLocalPersistence } from 'firebase/auth'

import { config } from 'config'

const app = initializeApp(config.firebase);
export const auth = initializeAuth(app, {
   persistence: [indexedDBLocalPersistence, browserLocalPersistence]
});

