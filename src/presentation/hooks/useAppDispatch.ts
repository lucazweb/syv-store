import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/infra/redux/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
