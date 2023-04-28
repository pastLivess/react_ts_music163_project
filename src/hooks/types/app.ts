import store from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

const state = store.getState()
export type IRootState = typeof state
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

// dispatch
type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch
