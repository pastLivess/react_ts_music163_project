import store from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
export type IRootState = ReturnType<typeof store.getState>

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector

// dispatch
type DispatchType = typeof store.dispatch

export const useAppDispatch: () => DispatchType = useDispatch
