import { User } from 'firebase/auth';
import { UseRedirectType } from 'types/Hooks'

export type UserType = {
   email: string;
}

export type AuthState = {
   user: User | null;
   error: string;
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