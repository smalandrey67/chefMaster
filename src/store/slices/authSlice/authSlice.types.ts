import { UseRedirectType } from 'types/Hooks'

export type UserType = {
   photoURL: string | null;
   email: string | null;
   name: string | null;
}

export type AuthState = {
   user: UserType | null;
   error: string | null;
}

export type PayloadAddUser = {
   email: string;
}

export type AuthorisationDataType = {
   email: string;
   password: string;
   navigateHandler: UseRedirectType;
}

export type LogOutType = {
   navigateHandler: UseRedirectType;
}