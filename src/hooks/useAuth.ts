import { useSelector } from 'react-redux'
import { selectUser } from 'store/slices/authSlice/authSlice.selectors';

export function useAuth() {
   const email = useSelector(selectUser);

   return {
      isAuth: !!email
   }
}