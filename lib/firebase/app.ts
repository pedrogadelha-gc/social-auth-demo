import { initializeApp } from 'firebase/app'
import * as firebaseConfig from '../../firebase.secret.json'

const app = initializeApp(firebaseConfig)

export { app }
