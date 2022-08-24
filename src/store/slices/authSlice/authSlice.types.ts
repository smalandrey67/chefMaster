import { UseRedirectReturnsType } from 'types/Hooks'

export type UserType = {
   photoURL: string | null;
   email: string | null;
   name: string | null;
}
export type AuthState = {
   user: UserType | null;
   error: string | null;
}
export type AuthorisationParametersType = {
   email: string;
   password: string;
   navigateHandler: UseRedirectReturnsType;
}
export type LogOutType = {
   navigateHandler: UseRedirectReturnsType;
}
export type UpdateUserThunkParametersType = Partial<{
   photoURL: string;
   displayName: string;
}>