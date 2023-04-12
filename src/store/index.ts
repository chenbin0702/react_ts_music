
import CouterReducer from './modules/counter'
import {configureStore} from '@reduxjs/toolkit'
import {useSelector,TypedUseSelectorHook,useDispatch,shallowEqual} from 'react-redux'
const store=configureStore({
  reducer:{
    count:CouterReducer
  }
})
type GetStateType=typeof store.getState
export type IRootState=ReturnType<GetStateType>
export type DispatchType=typeof store.dispatch
// useAppSelector 的hooks
export const useAppSelector:TypedUseSelectorHook<IRootState>=useSelector
// useAppDispatch 的hooks
export const useAppDispatch:()=>DispatchType=useDispatch
export const appShallowEqual=shallowEqual
export default store
