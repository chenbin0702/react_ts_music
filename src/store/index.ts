
import CouterReducer from './modules/counter'
import {configureStore} from '@reduxjs/toolkit'
import {useSelector,TypedUseSelectorHook} from 'react-redux'
const store=configureStore({
  reducer:{
    count:CouterReducer
  }
})
type GetStateType=typeof store.getState
export type IRootState=ReturnType<GetStateType>
// useAppSelector 的hooks
export const useAppSelector:TypedUseSelectorHook<IRootState>=useSelector
export default store
