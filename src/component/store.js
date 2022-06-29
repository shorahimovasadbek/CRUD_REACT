import {configureStore} from '@reduxjs/toolkit'
import { infoCard } from './Info'

const infos = configureStore ({
  reducer: {
    info: infoCard
  }
})
 
export default infos