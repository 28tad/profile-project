import { useDispatch } from 'react-redux';
import { AppDisaptch } from '@/app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDisaptch>();
