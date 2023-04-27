import store from '@/store'
import { useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
