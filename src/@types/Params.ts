export type ParamsType = {
   query: string | undefined,
   type: string | null,
   diet: string | null
}

export type ParamsArgumentsType = {
   product?: string;
   type: string;
   diet: string;
}

export type ParamsReturnsType = {
   productWithLowerCase?: string;
   typeParameter: string;
   dietParameter: string;
}